-- 빵끗 웹앱 저장소 (Supabase 프로젝트 prototype-store 안의 테이블 하나)
-- 로그인 없이 링크를 아는 사람은 모두 읽고 쓸 수 있음. 기기마다 브라우저에 저장된 고유 키로 사람을 구분.
create table if not exists public.bbk_docs (
  path text primary key check (char_length(path) between 3 and 200 and path ~ '^(meets|checkins|research)/[A-Za-z0-9_\-]+$'),
  coll text not null check (coll in ('meets','checkins','research')),
  data jsonb not null check (pg_column_size(data) < 60000),
  updated_at timestamptz not null default now()
);
alter table public.bbk_docs enable row level security;
create policy "bbk read"   on public.bbk_docs for select to anon, authenticated using (true);
create policy "bbk insert" on public.bbk_docs for insert to anon, authenticated with check (coll = split_part(path,'/',1));
create policy "bbk update" on public.bbk_docs for update to anon, authenticated using (true) with check (coll = split_part(path,'/',1));
create policy "bbk delete" on public.bbk_docs for delete to anon, authenticated using (true);
alter publication supabase_realtime add table public.bbk_docs;

-- 연구 데이터(research)는 앱에서 읽거나 고칠 수 없고, 아래 함수로만 저장 (2026-11-18)
-- bbk_research_put(p_id, p_data): research/<id> 저장
-- bbk_research_arms(p_meet): 모임별 A/B 동의 인원 수
-- Edge Function bbk-research-sheet: 연구 데이터를 CSV로 내보냄 → 구글 시트 IMPORTDATA
