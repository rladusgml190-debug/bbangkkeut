# 빵끗 · 함께하는 정산

국민대 ADM Lab 서비스디자인2 팀 '납득'의 정산 서비스 프로토타입.

- 총무: 온보딩 → 모임 규칙 → 모임 정보 → 영수증 항목 → 체크인 링크 → 정산 현황
- 참여자: 링크 → 이름·규칙 확인 → 질문 → 내 정산 금액·송금 정보

로그인 없이 쓰는 웹앱입니다. 데이터는 Supabase(`bbk_docs` 테이블)에 저장되고,
사람은 휴대폰(브라우저)마다 저장되는 고유 키로 구분합니다. 모임 링크를 아는 사람은 누구나 볼 수 있어요.

## 같이 수정하는 법 (팀원용)

**고치는 곳은 `src/` 폴더예요. 루트의 `index.html`은 직접 고치지 마세요** (빌드하면 덮어써져요).

| 파일 | 내용 |
|---|---|
| `src/logic.js` | 화면·문구·계산·연구 기록 등 앱의 거의 전부 |
| `src/extra.css` | 추가 스타일 (버튼, 영수증, 설문 등) |
| `src/head.part` | 기본 스타일과 색상 |
| `src/svg.part`, `src/bread.part` | 아이콘, 빵 캐릭터 그림 |

1. 레포를 받기: `git clone https://github.com/rladusgml190-debug/bbangkkeut.git`
2. `src/` 파일을 고친 뒤 레포 루트에서 `python3 src/build.py` → `index.html`이 새로 만들어져요.
3. 확인: 레포 루트에서 `python3 -m http.server 8000` 후 브라우저에서 `http://localhost:8000`
4. 올리기: `git add -A && git commit -m "무엇을 고쳤는지" && git push`
5. 실제 사이트에 반영: `git push origin main:gh-pages` (1~2분 뒤 https://rladusgml190-debug.github.io/bbangkkeut/ 에 반영)

문구만 바꿀 때는 `src/logic.js`에서 바꿀 글자를 검색해서 고치면 돼요.

### 주의할 것
- **토요일 베타테스트 중에는 사이트 반영(5번)을 하지 말아 주세요.** 테스트 도중 화면이 바뀌면 A/B 비교가 어려워져요.
- 연구 기록(설문 문항, 기록 항목)을 바꾸면 구글 시트 칸과 어긋날 수 있어요. 바꾸기 전에 연희에게 먼저 말해 주세요.
- 같은 파일을 동시에 고치면 충돌이 나요. 작업 전에 `git pull`을 먼저 해 주세요.
- 비밀 키(Supabase 서비스 키, API 키)는 절대 코드에 넣지 마세요. `build.py`에 있는 키는 원래 공개되는 anon 키예요.

`tests/`에는 Playwright로 화면 흐름을 확인하는 스크립트가 있어요 (선택).
