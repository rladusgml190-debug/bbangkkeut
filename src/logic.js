/* ================= 아이콘 (피그마에서 내보냄) ================= */
const IC={
 flag:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 21V3" stroke="#1B1D1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 4C10 1 13 7 19 4V14C13 17 10 11 5 14" stroke="#1B1D1F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
 camera:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6H8L10 3H14L16 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6Z" stroke="#1B1D1F" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#1B1D1F" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
 photo:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3Z" stroke="#1B1D1F" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z" stroke="#1B1D1F" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17L8 12L12 16L15 13L21 19" stroke="#1B1D1F" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
 chev:`<svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="#1B1D1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
 down:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="#686C70" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
 unpaid:`<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#E5484D"/><path d="M6.6 6.6l6.8 6.8M13.4 6.6l-6.8 6.8" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
 paid:`<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#247A66"/><path d="M5.8 10.3l2.9 2.9 5.5-6" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
 sent:`<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#FFF2DD" stroke="#C8963E" stroke-width="1.5"/><path d="M10 5.5V10l3 2" stroke="#9A4A06" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>`,
 link:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1M14 10a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1" stroke="#1B1D1F" stroke-width="1.8" stroke-linecap="round"/></svg>`
};

/* ================= 규칙 ================= */
const RULES=[
 {id:'r1',name:'1차는 1차끼리!',short:'1차는 1차끼리',lb:'1차는<br>1차끼리!',desc:'각 차수의 비용은<br>함께한 사람끼리만 나눠요.',tip:'이번 차수에 없던 사람은 이 정산에서 빠져요',d:0},
 {id:'r2',name:'식사 + 술 함께 공평하게',short:'식사+술 함께 공평하게',lb:'식사 + 술<br>함께 공평하게',desc:'음식과 술을 나누지 않고<br>모두 똑같이 나눠요.',tip:'음식과 술을 구분하지 않고 모두 똑같이 나눠요',d:-.13},
 {id:'r3',name:'술 안 마시면 술값은 빼요',short:'술 안 마시면 술값 제외',lb:'술 안 마시면<br>술값은 빼요',desc:'술값은 술을 마신 사람끼리,<br>음식값은 함께 나눠요.',tip:'술 안 마신 사람은 술값을 빼고 나눠요',d:-.27},
 {id:'r4',name:'늦게 왔다면 참여한 차수만',short:'늦게 왔다면 참여한 차수만',lb:'늦게 왔다면<br>참여한 차수만',desc:'늦게 왔다면<br>참여한 차수부터 나눠요.',tip:'참여자가 체크인할 때 참석한 차수를 골라요',d:-.05},
 {id:'r5',name:'먼저 갔다면 함께한 차수만',short:'먼저 갔다면 함께한 차수만',lb:'먼저 갔다면<br>함께한 차수만',desc:'먼저 갔다면<br>함께한 차수까지만 나눠요.',tip:'참여자가 체크인할 때 참석한 차수를 골라요',d:-.25},
 {id:'r6',name:'먹은 메뉴만 계산해요',short:'먹은 메뉴만 계산',lb:'먹은 메뉴만<br>계산해요',desc:'각자 먹은 메뉴를 고르면<br>그 메뉴값만 나눠 내요.',tip:'참여자가 먹은 메뉴를 직접 골라요. 같은 메뉴를 고른 사람끼리 나눠요',d:-.4},
 {id:'r7',name:'쿠폰 · 할인도 함께 나눠요',short:'쿠폰·할인도 함께',lb:'쿠폰 · 할인도<br>함께 나눠요',desc:'쿠폰·할인 금액도<br>모두에게 똑같이 빼 줘요.',tip:'‘할인’ 항목을 넣으면 모두에게 똑같이 빼 줘요',d:-.19},
 {id:'r8',name:'생일 주인공은 오늘 무료!',short:'생일 주인공은 무료',lb:'생일 주인공은<br>오늘 무료!',desc:'생일 주인공 몫은<br>나머지가 함께 내요.',tip:'생일인 사람 몫은 나머지가 나눠 내요',d:-.33},
 {id:'r9',name:'잔돈은 총무가 부담해요',short:'잔돈은 총무 부담',lb:'잔돈은 총무가<br>부담해요',desc:'100원 아래 잔돈은<br>총무가 부담해요.',tip:'100원 아래 끝자리는 내려서 받고, 차이는 결제자가 내요',d:-.47}
];
const ruleOn=(m,id)=>(m.rules||[]).includes(id);
const rulesOf=m=>RULES.filter(r=>ruleOn(m,r.id));
const ITEM_TYPES={common:'음식',drink:'술',personal:'개별',discount:'할인'};
function itemTypes(m){const t=['common','drink'];if(ruleOn(m,'r7'))t.push('discount');return t}
const roundOf=m=>{const x=/(\d)\s*차/.exec(m.place||'');return x?+x[1]:1};

/* ================= 유틸 ================= */
const won=n=>Math.round(n).toLocaleString('ko-KR');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rid=p=>(p||'')+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const shell=document.getElementById('shell');
const WEB=!!(window.BBK_SUPA&&window.supabase);
const ART_URL=WEB?(location.origin+location.pathname):'https://claude.ai/artifact/5px1P4Ppvv1VJyWxx4ZwZa';
const newCode=()=>'BG-'+String(Math.floor(1000+Math.random()*9000));
const SAFE=/^[A-Za-z0-9_\-.~:@+]{1,120}$/;

function toast(msg){document.querySelectorAll('.toast').forEach(t=>t.remove());const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2800)}
function sheet(html,bind){
  const s=document.createElement('div');s.className='scrim';
  s.innerHTML='<div class="sheet" role="dialog" aria-modal="true">'+html+'</div>';
  s.addEventListener('click',e=>{if(e.target===s)s.remove()});
  document.body.appendChild(s);const close=()=>s.remove();
  s.querySelectorAll('[data-close]').forEach(b=>b.onclick=close);
  bind&&bind(s,close);return close;
}
async function copy(text,msg){
  try{await navigator.clipboard.writeText(text);toast(msg||'복사했어요. 카톡에 붙여넣기 하세요');}
  catch(e){sheet(`<h3>아래 글을 길게 눌러 복사하세요</h3><textarea class="sf ta" readonly></textarea><button class="btn line" data-close>닫기</button>`,s=>{const ta=s.querySelector('textarea');ta.value=text;ta.focus();ta.select();});}
}
const lsGet=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const ssGet=k=>{try{return sessionStorage.getItem(k)}catch(e){return null}};
const ssSet=(k,v)=>{try{sessionStorage.setItem(k,v)}catch(e){}};

/* ================= 저장소: 함께 쓰는 저장소(claude.ai) 또는 이 브라우저 =================
   meets/<gid>            모임(총무가 만듦, 링크 받은 사람이 읽음)
   checkins/<gid>_<pkey>  참여자 체크인 한 장씩
   data/users/<uid>/_profile  총무 닉네임 */
const LocalDB=(()=>{
  const KEY='bbk.v4.db';let mem=lsGet(KEY,{});const subs=new Set();
  const save=()=>lsSet(KEY,mem);
  const emit=()=>subs.forEach(f=>{try{f()}catch(e){}});
  window.addEventListener('storage',e=>{if(e.key===KEY){mem=lsGet(KEY,{});emit()}});
  const snap=(path)=>{const d=mem[path];const id=path.split('/').pop();return {id,exists:!!d,data:()=>d?JSON.parse(JSON.stringify(d)):undefined,metadata:{fromCache:false,hasPendingWrites:false}}};
  function doc(path){return {id:path.split('/').pop(),path,
    get:async()=>snap(path),
    set:async(d)=>{mem[path]=JSON.parse(JSON.stringify(d));save();emit()},
    update:async(d)=>{if(!mem[path])throw {code:'invalid_argument'};mem[path]={...mem[path],...JSON.parse(JSON.stringify(d))};save();emit()},
    delete:async()=>{delete mem[path];save();emit()},
    onSnapshot:(next)=>{const f=()=>next(snap(path));subs.add(f);setTimeout(f,0);return ()=>subs.delete(f)}}}
  function query(col,filters){
    const run=()=>{const docs=Object.keys(mem).filter(p=>p.startsWith(col+'/')&&p.split('/').length===col.split('/').length+1).map(snap).filter(s=>filters.every(([f,op,v])=>{const x=s.data()[f];return op==='=='?x===v:op==='array-contains'?Array.isArray(x)&&x.includes(v):true}));return {docs,size:docs.length,empty:!docs.length,metadata:{fromCache:false}}};
    return {where:(f,op,v)=>query(col,[...filters,[f,op,v]]),get:async()=>run(),onSnapshot:(next)=>{const f=()=>next(run());subs.add(f);setTimeout(f,0);return ()=>subs.delete(f)}}}
  return {doc,collection:(col)=>({...query(col,[]),doc:(id)=>doc(col+'/'+(id||rid('d')))})};
})();

/* 웹 버전: Supabase 테이블 bbk_docs(path, coll, data) 하나에 문서를 저장. 로그인 없이 기기별 키로 구분 */
const SupaDB=(()=>{
  if(!WEB)return null;
  const T='bbk_docs';const cli=window.supabase.createClient(window.BBK_SUPA.url,window.BBK_SUPA.key,{auth:{persistSession:false}});
  const subs=new Set();let t=null;const emit=()=>{clearTimeout(t);t=setTimeout(()=>subs.forEach(f=>{try{f()}catch(e){}}),120)};
  try{cli.channel('bbk').on('postgres_changes',{event:'*',schema:'public',table:T},emit).subscribe()}catch(e){}
  setInterval(()=>{if(!document.hidden)emit()},15000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)emit()});
  const clone=d=>JSON.parse(JSON.stringify(d));
  const mk=(path,d)=>({id:path.split('/').pop(),exists:!!d,data:()=>d?clone(d):undefined,metadata:{fromCache:false,hasPendingWrites:false}});
  const fail=e=>{throw {code:'unavailable',message:(e&&e.message)||String(e)}};
  async function getOne(path){if(path.startsWith('research/'))return null;const {data,error}=await cli.from(T).select('data').eq('path',path).maybeSingle();if(error)fail(error);return data?data.data:null}
  async function put(path,d){
    if(path.startsWith('research/')){const {error}=await cli.rpc('bbk_research_put',{p_id:path.slice(9),p_data:d});if(error)fail(error);return}const {error}=await cli.from(T).upsert({path,coll:path.split('/')[0],data:d,updated_at:new Date().toISOString()});if(error)fail(error);emit()}
  function doc(path){return {id:path.split('/').pop(),path,
    get:async()=>mk(path,await getOne(path)),
    set:async(d)=>put(path,clone(d)),
    update:async(d)=>{const cur=await getOne(path);if(!cur)throw {code:'invalid_argument'};await put(path,{...cur,...clone(d)})},
    delete:async()=>{const {error}=await cli.from(T).delete().eq('path',path);if(error)fail(error);emit()},
    onSnapshot:(next,err)=>{let alive=true;const f=()=>getOne(path).then(d=>{if(alive)next(mk(path,d))},e=>{if(alive&&err)err(e)});subs.add(f);f();return ()=>{alive=false;subs.delete(f)}}}}
  function query(col,filters){
    const run=async()=>{let q=cli.from(T).select('path,data').eq('coll',col);
      for(const [f,op,v] of filters)if(op==='==')q=q.eq('data->>'+f,String(v));
      const {data,error}=await q.limit(500);if(error)fail(error);
      const docs=(data||[]).map(r=>mk(r.path,r.data)).filter(s=>filters.every(([f,op,v])=>op!=='array-contains'||(Array.isArray(s.data()[f])&&s.data()[f].includes(v))));
      return {docs,size:docs.length,empty:!docs.length,metadata:{fromCache:false}}};
    return {where:(f,op,v)=>query(col,[...filters,[f,op,v]]),get:run,
      onSnapshot:(next,err)=>{let alive=true;const f=()=>run().then(r=>{if(alive)next(r)},e=>{if(alive&&err)err(e)});subs.add(f);f();return ()=>{alive=false;subs.delete(f)}}}}
  async function armCounts(meet){const {data,error}=await cli.rpc('bbk_research_arms',{p_meet:meet});if(error)fail(error);return data||{}}
  async function receipt(image,mediaType){const {data,error}=await cli.functions.invoke('bbk-receipt',{body:{image,mediaType}});if(error)throw error;return data}
  return {doc,armCounts,receipt,collection:(col)=>({...query(col,[]),doc:(id)=>doc(col+'/'+(id||rid('d')))})};
})();

const Store={mode:WEB?'cloud':'local',db:WEB?SupaDB:LocalDB,uid:null,user:null,canWrite:null,sample:null,
  async init(){
    try{
      if(!WEB&&window.claude&&window.claude.use){
        const [db,user,sample]=await Promise.all([window.claude.use('db'),window.claude.use('user'),window.claude.use('sample')]);
        this.user=user;this.sample=sample;
        if(db){this.db=db;this.mode='cloud';
          const id=user?await user.id():null;if(id&&SAFE.test(id))this.uid=id;
          this.canWrite=user?await user.can('data.write'):null;}
      }
    }catch(e){}
  },
  myKey(){if(this.uid)return this.uid;let k=lsGet('bbk.key',null);if(!k){k=rid('k');lsSet('bbk.key',k)}return k},
  /* 참여자 키: 이 기기(브라우저)마다 하나. 시연용 ‘다른 사람으로 체크인’은 이 탭에서만 바뀜 */
  pKey(){return ssGet('bbk.pkey.demo')||this.myKey()},
  async loadProfile(){
    if(this.mode==='cloud'&&this.uid){try{const s=await this.db.doc('data/users/'+this.uid+'/_profile').get();if(s.exists)return s.data()}catch(e){}}
    return lsGet('bbk.profile.v1',null);
  },
  saveProfile(p){lsSet('bbk.profile.v1',p);if(this.mode==='cloud'&&this.uid){this.db.doc('data/users/'+this.uid+'/_profile').set(p).catch(()=>{})}},
  async clearProfile(){try{localStorage.removeItem('bbk.profile.v1')}catch(e){}if(this.mode==='cloud'&&this.uid){try{await this.db.doc('data/users/'+this.uid+'/_profile').delete()}catch(e){}}}
};
const withTimeout=(p,ms=10000)=>Promise.race([p,new Promise((_,r)=>setTimeout(()=>r({code:'timeout'}),ms))]);

/* ================= 계산 ================= */
function peopleFor(m,cks){
  const r=roundOf(m), byRound=ruleOn(m,'r1')||ruleOn(m,'r4')||ruleOn(m,'r5');
  const ppl=[...cks].sort((a,b)=>(a.at||0)-(b.at||0)).map(c=>{
    let status='base';const rounds=(c.rounds||[]).map(Number);
    if(byRound&&rounds.length&&!rounds.includes(r))status=rounds.some(x=>x>r)?'late':'early';
    else if(ruleOn(m,'r8')&&c.bday)status='bday';
    else if(ruleOn(m,'r3')&&c.drink===false)status='nodrink';
    return {id:c.pkey,name:c.name||'이름 없음',status,rounds,personal:c.personal||[],sent:!!c.sent,objection:c.objection||'',paid:!!(m.paid&&m.paid[c.pkey]),ck:c};
  });
  let payer=ppl.find(p=>(p.name||'').trim()&&(p.name||'').trim()===(m.payer||'').trim());
  if(!payer){payer={id:'__payer',name:m.payer||'총무',status:'base',rounds:[],personal:[],synthetic:true};ppl.unshift(payer)}
  else{ppl.splice(ppl.indexOf(payer),1);ppl.unshift(payer)}
  /* 모임 인원보다 체크인이 적으면, 남은 자리는 '미응답 = 예외 없음'으로 계산 */
  const left=m.autoNoResp?Math.max(0,(+m.expected||0)-ppl.length):0;
  for(let i=1;i<=left;i++)ppl.push({id:'__u'+i,name:'미응답 '+i,status:'base',rounds:[r],personal:[],synthetic:true,pending:true,paid:!!(m.paid&&m.paid['__u'+i]),objection:''});
  return {ppl,payerId:payer.id};
}
const NOTE={nodrink:'술을 마시지 않아요',late:'',early:'',bday:'오늘 생일이에요'};
function noteOf(m,p){
  if(p.pending)return isClosed(m)?'답이 없어 ‘예외 없음’으로 계산했어요':'아직 답이 없어요 · 마감 후 ‘예외 없음’';
  if(p.status==='late'||p.status==='early'){const rs=p.rounds.map(x=>x+'차').join('·');return rs?`${rs}에만 왔어요`:'이번 차수엔 없었어요'}
  return NOTE[p.status]||'';
}
function compute(m,cks){
  const {ppl,payerId}=peopleFor(m,cks);
  const r2=ruleOn(m,'r2'),r3=ruleOn(m,'r3')&&!r2,r6=ruleOn(m,'r6'),r7=ruleOn(m,'r7'),r8=ruleOn(m,'r8'),r9=ruleOn(m,'r9');
  const out=p=>p.status==='late'||p.status==='early';
  const free=p=>r8&&p.status==='bday';
  const active=ppl.filter(p=>!out(p)), sharers=active.filter(p=>!free(p));
  let common=0,drink=0,discount=0,personalTotal=0,hadDrink=false;const pers={},unpicked=[];
  (m.items||[]).forEach(i=>{const a=Math.abs(+i.amount||0);if(!a)return;let t=i.type||'common';
    if(t==='drink')hadDrink=true;
    if(r6&&t!=='discount')t='personal';else if(t==='personal')t='common';if(t==='discount'&&!r7)t='none';
    if(t==='common')common+=a;else if(t==='drink')drink+=a;else if(t==='discount')discount+=a;
    else if(t==='personal'){const eaters=sharers.filter(p=>p.personal.includes(i.id));
      if(eaters.length){eaters.forEach(p=>(pers[p.id]=pers[p.id]||[]).push({name:i.name||'메뉴',total:a,n:eaters.length,a:a/eaters.length}));personalTotal+=a}else{common+=a;unpicked.push(i.name||'메뉴')}}});
  const total=Math.max(0,common+drink+personalTotal-discount);
  const drinkers=r3?sharers.filter(p=>p.status!=='nodrink'):sharers;
  const rnd=v=>r9?Math.floor(v/100)*100:Math.ceil(v/100)*100;
  const foodLabel=r6?'아직 아무도 고르지 않은 메뉴':'음식';
  const rows={};
  ppl.forEach(p=>{
    if(out(p)){rows[p.id]={amount:0,exact:0,why:[`이번 ${roundOf(m)}차에 없어서 이 정산에서 빠져요`]};return}
    if(free(p)){rows[p.id]={amount:0,exact:0,why:['생일 주인공이라 오늘은 무료예요']};return}
    const c=sharers.length?common/sharers.length:0, d=drinkers.includes(p)?drink/drinkers.length:0;
    const pe=(pers[p.id]||[]).reduce((a,x)=>a+x.a,0), di=sharers.length?discount/sharers.length:0;
    const why=[];
    if(common>0)why.push(`${foodLabel} ${won(common)}원 ÷ ${sharers.length}명 = ${won(c)}원`);
    if(drink>0)why.push(drinkers.includes(p)?`술 ${won(drink)}원 ÷ ${drinkers.length}명 = ${won(d)}원`:'술값은 빠져요');
    (pers[p.id]||[]).forEach(x=>why.push(x.n>1?`${x.name} ${won(x.total)}원 ÷ ${x.n}명 = ${won(x.a)}원`:`${x.name} ${won(x.total)}원 (지금은 나만 골랐어요)`));
    if(r6&&!(pers[p.id]||[]).length)why.push('아직 고른 메뉴가 없어요');
    if(discount)why.push(`할인 −${won(discount)}원 ÷ ${sharers.length}명 = −${won(di)}원`);
    rows[p.id]={exact:c+d+pe-di,why};
  });
  let others=0;
  ppl.forEach(p=>{if(p.id!==payerId){const r=rows[p.id];r.amount=(out(p)||free(p))?0:Math.max(0,rnd(r.exact));others+=r.amount}});
  rows[payerId].amount=total-others;
  if(r9&&rows[payerId].amount>rnd(rows[payerId].exact||0)+0.5&&sharers.length>1)rows[payerId].why=[...(rows[payerId].why||[]),'남은 잔돈은 총무가 부담해요'];
  const denom=Math.max(+m.expected||0,active.length,1);
  const nb=rnd(total/denom);
  const owed=ppl.filter(p=>p.id!==payerId&&rows[p.id].amount>0);
  const paid=owed.filter(p=>p.paid);
  return {ppl,payerId,rows,total,common,drink,discount,personalTotal,foodLabel,nb,owed,paid,
    received:paid.reduce((a,p)=>a+rows[p.id].amount,0),toReceive:owed.reduce((a,p)=>a+rows[p.id].amount,0),
    checked:cks.length,pending:ppl.filter(p=>p.pending).length,objections:ppl.filter(p=>p.objection)};
}

/* ================= 메시지 ================= */
const linkOf=m=>ART_URL+'#m-'+m.id;
const pad2=n=>String(n).padStart(2,'0');
const hhmm=t=>{const d=new Date(t);return `${d.getMonth()+1}/${d.getDate()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`};
const isClosed=m=>!!(m&&m.autoNoResp&&m.deadline&&Date.now()>m.deadline);
function dueText(m){if(!m||!m.autoNoResp||!m.deadline)return '';if(isClosed(m))return '답변 마감 · 금액 확정';
  const left=Math.max(1,Math.ceil((m.deadline-Date.now())/60000));const h=Math.floor(left/60),mm=left%60;
  return `답변 마감까지 ${h?h+'시간 ':''}${h&&!mm?'':mm+'분'} (${hhmm(m.deadline)})`}
const titleOf=m=>(m.title||'이름 없는 모임')+(m.place?' · '+m.place:'');
function msgInvite(m){
  return `[빵끗 베타] ${m.payer||'총무'}님이 ‘${titleOf(m)}’ 정산을 열었어요.\n아래 링크에서 정산 기준을 확인하고 체크인해 주세요.\n${linkOf(m)}\n\n정산 기준: ${rulesOf(m).map(r=>r.short).join(' · ')||'모두 똑같이 N빵'}${m.autoNoResp&&m.deadline?`\n답변 마감: ${hhmm(m.deadline)} (마감까지 답이 없으면 ‘예외 없음’으로 계산돼요)`:''}`;
}
function msgRemind(m,c){
  const left=c.owed.filter(p=>!p.paid);
  if(!left.length)return `[빵끗] ${titleOf(m)}\n모두 보내 주셨어요. 고마워요!`;
  let s=`[빵끗] ${titleOf(m)}\n아직 확인이 안 된 분들께 살짝 알려 드려요.\n\n`;
  left.forEach(p=>{s+=`${p.name} ${won(c.rows[p.id].amount)}원\n`});
  if(m.account)s+=`\n보낼 곳: ${m.account}`;
  return s+`\n자세한 내역: ${linkOf(m)}`;
}
function msgPerson(m,c,p){
  const r=c.rows[p.id];
  let s=`[빵끗] ${titleOf(m)}\n${p.name} 님 몫은 ${won(r.amount)}원이에요.\n\n왜 이 금액이냐면요\n${r.why.map(x=>'· '+x).join('\n')}`;
  if(m.account)s+=`\n\n보낼 곳: ${m.account}`;
  return s+`\n자세한 내역: ${linkOf(m)}`;
}

/* ================= 상태 & 라우팅 ================= */
const state={view:'onb1',profile:null,draft:null,ruleSel:null,mid:null,meet:null,cks:[],tab:'est',subs:[],joinName:'',ans:null,myMeets:[],homeFilter:'all',open:false};
function unsubAll(){state.subs.forEach(u=>{try{u()}catch(e){}});state.subs=[]}
function go(view){
  state.view=view;
  try{const want=['org','join','join2','me','consent','survey','thanks'].includes(view)&&state.mid?'#m-'+state.mid:'';if(location.hash!==want)history.replaceState(null,'',want||location.pathname+location.search)}catch(e){}
  render();window.scrollTo(0,0);
  if(Study.R&&state.mid&&view!=='org')Study.log('view',view);
}
const myName=()=>(state.profile&&state.profile.nickname)||'';
const myCk=()=>state.cks.find(c=>c.pkey===Store.pKey());
const isOwnerOf=m=>m&&m.ownerKey===Store.myKey();

function render(){
  const v=state.view;
  shell.classList.toggle('clip',v==='onb1');
  shell.classList.toggle('wide',['onb1','onb2','onb3','create','rules','rulecheck','link','home','mine','msglist'].includes(v));
  ({onb1:r01,onb2:r02,onb3:r03,create:r04,rules:r041,rulecheck:r042,form:r05,items:r051,link:r06,org:r07,me:r07,join:rJoin,join2:rJoin2,consent:rConsent,survey:rSurvey,thanks:rThanks,home:r00,mine:rMine,msglist:rMsgList,missing:rMissing}[v]||r00)();
}

/* ---------- 01·02·03 온보딩 ---------- */
function r01(){
  shell.innerHTML=`<div class="bigbread">${SVG.big}</div>
  <section class="view onb">
    <div class="toprow" style="justify-content:flex-end">${statusHTML()}</div>
    <div style="height:clamp(40px,12vh,110px)"></div>
    <h1 class="h1" style="line-height:32px">반가워요, 빵끗이에요!</h1>
    <p class="lead" style="margin-top:16px">즐거운 모임의 마무리,<br>정산은 제가 도와드릴게요.</p>
    <div class="grow"></div>
    <button class="btn" data-act="to02" style="position:relative;z-index:2">빵끗 시작하기</button>
  </section>`;
}
const statusHTML=()=>`<span class="status ${Store.mode==='cloud'?'':'local'}"><i></i>${WEB?'온라인 저장 중':Store.mode==='cloud'?'내 계정에 저장 중':'이 기기에 저장 중'}</span>`;
function r02(){
  shell.innerHTML=`<section class="view onb">
    <div style="height:clamp(24px,10vh,116px)"></div>
    <div class="bread" style="width:min(280px,72vw)">${SVG.happy}</div>
    <h1 class="h1" style="margin-top:36px">기준은 미리,<br>정산은 깔끔하게.</h1>
    <p class="lead" style="margin-top:14px">빵끗은 정산 기준을 먼저 보여주고,<br>금액을 나누고, 정산금을 주고받는<br>서비스예요.</p>
    <div class="grow"></div>
    <button class="btn" data-act="to03">내 모임 만들기</button>
  </section>`;
}
function r03(){
  shell.innerHTML=`<section class="view onb">
    <div style="height:clamp(16px,11vh,114px)"></div>
    <div class="bread" style="width:180px">${SVG.curious}<span class="q" style="left:153px;top:34px" aria-hidden="true">?</span></div>
    <h1 class="h1" style="margin-top:18px">오늘이 처음이세요?!</h1>
    <p class="lead" style="margin-top:12px;line-height:23px">실명만 적으면,<br>고유번호가 만들어져요</p>
    <form id="suForm" novalidate style="display:flex;flex-direction:column;flex:1;width:100%;margin-top:22px">
      <div class="field"><label class="label" for="suNick">이름 (실명)</label>
        <input class="in" id="suNick" maxlength="12" autocomplete="name" placeholder="예: 김연희"></div>
      <div class="grow"></div>
      <div class="cap err" id="suErr" hidden>이름을 적어 주세요.</div>
      <button class="btn idle" type="submit" id="suSubmit">가입하고 시작하기</button>
    </form>
  </section>`;
  const nick=document.getElementById('suNick'),btn=document.getElementById('suSubmit'),err=document.getElementById('suErr');
  const sync=()=>{btn.classList.toggle('idle',!nick.value.trim());if(nick.value.trim())err.hidden=true};
  if(state.profile)nick.value=state.profile.nickname||'';sync();
  ['input','keyup','compositionend','change'].forEach(ev=>nick.addEventListener(ev,sync));
  document.getElementById('suForm').addEventListener('submit',e=>{
    e.preventDefault();const v=nick.value.trim();if(!v){err.hidden=false;nick.focus();return}
    const old=state.profile;
    state.profile={...(old||{}),nickname:v,code:(old&&old.code)||newCode(),createdAt:(old&&old.createdAt)||Date.now()};
    Store.saveProfile(state.profile);
    toast(old?`${v} 님, 다시 만나서 반가워요`:`${v} 님의 고유번호 ${state.profile.code}가 만들어졌어요`);
    go('create');
  });
  setTimeout(()=>nick.focus(),80);
}

/* ---------- 04 모임생성 ---------- */
function r04(){
  shell.innerHTML=`<section class="view onb">
    <div class="toprow">${state.profile?'<button class="back" data-nav="home">‹ 홈으로</button>':'<span></span>'}</div>
    <div style="height:clamp(8px,9vh,94px)"></div>
    <div class="bread" style="width:min(280px,72vw)">${SVG.welcome}</div>
    <h1 class="h1" style="margin-top:36px">이제 모임을<br>만들어볼까요?</h1>
    <p class="lead" style="margin-top:14px">모임을 만들고,<br>함께 정산할 기준을 골라요.</p>
    <div class="grow"></div>
    <button class="btn" data-act="torules">+ 새 모임 정산하기</button>
  </section>`;
}
/* ---------- 04-1 규칙 고르기 ---------- */
function r041(){
  const sel=state.ruleSel||(state.ruleSel=['r1','r3']);
  shell.innerHTML=`<section class="view onb" style="align-items:stretch">
    <button class="back" data-nav="create">‹ 뒤로</button>
    <h1 class="h1" style="text-align:left;padding-left:5px;margin-top:clamp(0px,4vh,44px)">이 모임의<br>정산 기준을 골라주세요</h1>
    <p class="lead" style="text-align:left;padding-left:7px;margin-top:-10px">정산 기준은 링크를 보낸 뒤엔 바꿀 수 없어요</p>
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:-8px">
      <span class="cap" style="font-size:12px">해당하는 기준을 모두 골라주세요</span>
      <span class="cap" style="font-size:12px"><b style="color:var(--ink)" id="ruleCount">${sel.length}</b> 개 선택</span></div>
    <div class="rulegrid" role="group" aria-label="정산 기준">${RULES.map((r,i)=>`
      <button class="rule" data-rule="${r.id}" aria-pressed="${sel.includes(r.id)}" aria-label="${r.name}">
        <span class="icw"><span class="ic ${i%2?'r':''}" style="animation-delay:${(r.d*6).toFixed(2)}s">${BREAD[i]}</span><span class="ck" aria-hidden="true">✓</span></span>
        <span class="lb">${r.lb}</span></button>`).join('')}</div>
    <p class="cap" style="text-align:center;font-size:12px;margin-top:-4px">빵을 한 번 더 누르면 선택이 해제돼요</p>
    <div class="grow"></div>
    <button class="btn" data-act="rulecheck">+ 새 모임 정산하기</button>
  </section>`;
}
/* ---------- 규칙 카드 (04-2 · 체크인 · 07 공통) ---------- */
function ruleCards(rules){
  if(!rules.length)return `<div class="rcard"><span class="ri"></span><span><b>모두 똑같이 N빵</b><span class="cap">따로 정한 기준 없이 똑같이 나눠요.</span></span></div>`;
  return rules.map(r=>{const i=RULES.indexOf(r);return `<div class="rcard"><span class="ri"><span class="ic ${i%2?'r':''}" style="animation-delay:${(r.d*6).toFixed(2)}s">${BREAD[i]}</span></span><span class="rt"><b>${r.name}</b><span class="cap">${r.desc}</span></span></div>`}).join('');
}
/* ---------- 04-2 규칙 확인 ---------- */
function r042(){
  const rules=RULES.filter(r=>state.ruleSel.includes(r.id));
  shell.innerHTML=`<section class="view onb" style="align-items:stretch">
    <button class="back" data-nav="rules">‹ 뒤로</button>
    <h1 class="h1 left" style="margin-top:clamp(0px,4vh,40px)">이번 모임의 정산 기준,<br>함께 확인해요</h1>
    <p class="lead left" style="margin-top:-2px;line-height:23px">정산하기 전에 읽어주세요.<br>모두에게 같은 기준으로 나눠요.</p>
    <div class="label" style="margin-top:18px;color:var(--sub)">정산 기준 · ${rules.length}개</div>
    <div class="rcards">${ruleCards(rules)}</div>
    <div class="grow"></div>
    <p class="cap" style="font-size:12px;line-height:19px">정산 기준은 링크를 보낸 뒤엔 바꿀 수 없어요.<br>참여자 각자의 답변은 마감 전까지 고칠 수 있어요.</p>
    <button class="btn" data-act="toform">확인했어요</button>
  </section>`;
}
/* ---------- 05 모임 정보 ---------- */
function r05(){
  const d=state.draft;
  shell.innerHTML=`<section class="view">
    <div class="toprow"><button class="back" data-nav="rulecheck">‹ 뒤로</button><span class="label" style="color:var(--sub)">1 / 2</span></div>
    <div style="display:flex;flex-direction:column;gap:6px"><h1 class="title">모임 만들기</h1><p class="subt">정산을 시작할 모임 정보를 입력해 주세요.</p></div>
    <section class="card"><div class="ch sub">모임 정보</div>
      <div class="row2"><label class="f">모임 이름<input class="fi" id="f-title" data-f="title" value="${esc(d.title)}" placeholder="예: 팀 회식"></label>
        <label class="f">차수 · 장소<input class="fi" id="f-place" data-f="place" value="${esc(d.place)}" placeholder="예: 1차 횟집"></label></div>
      <div class="row2"><label class="f">날짜<input class="fi" type="date" id="f-date" data-f="date" value="${esc(d.date)}"></label>
        <label class="f">결제한 사람<input class="fi" id="f-payer" data-f="payer" value="${esc(d.payer)}" placeholder="예: 김연희"></label></div>
      <div class="row2"><label class="f" style="flex:2 1 0">받을 곳 (계좌·카카오페이 안내, 선택)<input class="fi" id="f-account" data-f="account" value="${esc(d.account)}" placeholder="예: 카카오뱅크 3333-00-0000000"></label>
        <label class="f" style="flex:1 1 0">모임 인원 (선택)<input class="fi num" id="f-expected" data-f="expected" inputmode="numeric" value="${d.expected||''}" placeholder="예: 5"></label></div>
      <div class="cap">모임 인원은 결제한 사람을 포함해 세요. 잘 모르면 비워 두세요. 결제한 사람도 체크인할 때 같은 이름을 쓰면 한 사람으로 계산돼요.</div>
    </section>
    <section class="card"><div class="ch sub">답변 마감 · 링크를 만든 뒤 1시간</div>
      <div class="cap">1시간 안에 답하지 않은 사람은 ‘예외 없음’으로 계산하고, 금액이 확정돼요. 모임 인원을 적어야 답하지 않은 사람 몫까지 미리 나눌 수 있어요.</div>
      <label class="agree"><input type="checkbox" id="f-study" ${d.study!==false?'checked':''}><span>베타 테스트 모드 · 참여자에게 연구 동의와 3분 설문을 받아요</span></label>
    </section>
    <div class="cap err" id="formErr" hidden></div>
    <div class="grow"></div>
    <button class="btn" data-act="toitems" style="border-radius:27px">다음 · 영수증 추가하기</button>
  </section>`;
}
/* ---------- 05-1 영수증 항목 ---------- */
function r051(){
  const d=state.draft, types=itemTypes(d);
  const t=state.itemType&&types.includes(state.itemType)?state.itemType:'common';
  const total=d.items.reduce((a,i)=>a+(i.type==='discount'?-1:1)*(+i.amount||0),0);
  shell.innerHTML=`<section class="view">
    <div class="toprow"><button class="back" data-nav="form">‹ 뒤로</button><span class="label" style="color:var(--sub)">2 / 2</span></div>
    <div style="display:flex;flex-direction:column;gap:6px"><h1 class="title">영수증 항목 추가하기</h1><p class="subt">촬영하거나 사진을 불러오고, 직접 입력해요.</p></div>
    <section class="card"><div><b class="h15">영수증으로 빠르게 추가</b><div class="cap" style="margin-top:6px">영수증 전체가 잘 보이도록 준비해 주세요.</div></div>
      <div class="row2 g10">
        <label class="tile" for="camIn">${IC.camera}<b>카메라</b><span class="cap">${(state.photos||[]).length?'한 장 더 찍기':'지금 촬영하기'}</span></label>
        <label class="tile" for="galIn">${IC.photo}<b>사진</b><span class="cap">여러 장 선택 가능</span></label></div>
      <input type="file" id="camIn" accept="image/*" capture="environment" hidden>
      <input type="file" id="galIn" accept="image/*" multiple hidden>
      ${(state.photos||[]).length?`<div class="thumbs">${state.photos.map((ph,i)=>`<div class="thumb"><img src="${ph.url}" alt="영수증 ${i+1}"><span class="tb ${ph.st}">${{wait:'대기 중',reading:'읽는 중…',done:ph.n+'개 추가',fail:'직접 입력'}[ph.st]}</span><button class="xbtn" data-pdel="${ph.id}" aria-label="영수증 ${i+1} 지우기">×</button></div>`).join('')}</div>
      <div class="cap">영수증이 여러 장이거나 길면 나눠서 찍어도 돼요. 사진을 지우면 그 사진에서 넣은 항목도 함께 빠져요.</div>`:''}
      <div class="cap" id="ocrNote" ${state.ocr?'':'hidden'}>${esc(state.ocr||'')}</div>
    </section>
    <section class="card"><div><b class="h15">직접 입력하기</b><div class="cap" style="margin-top:6px">영수증이 없어도 항목별로 추가할 수 있어요.</div></div>
      <label class="fl2" for="iName">항목명</label><input class="in2" id="iName" placeholder="예: 모둠회, 맥주" autocomplete="off">
      <div class="row2 g10" style="align-items:end"><div style="flex:0 0 46%;display:flex;flex-direction:column;gap:6px"><label class="fl2" for="iAmt">금액 (원)</label><input class="in2 num" id="iAmt" inputmode="numeric" placeholder="금액 입력" autocomplete="off"></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:6px"><span class="fl2">분류</span><div class="seg2" role="radiogroup" aria-label="분류">${types.map(k=>`<button role="radio" aria-checked="${k===t}" data-itype="${k}">${ITEM_TYPES[k]}</button>`).join('')}</div></div></div>
      <button class="btn softb" data-act="additem">+ 항목 추가</button>
      <div class="cap">${typeHint(d)}</div>
    </section>
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:6px"><b class="h15">추가된 항목 · ${d.items.length}개</b><b class="label num">합계 ${won(Math.max(0,total))}원</b></div>
    ${d.items.length?Object.keys(ITEM_TYPES).filter(k=>d.items.some(i=>(i.type||'common')===k)).map(k=>{const its=d.items.filter(i=>(i.type||'common')===k);const sub=its.reduce((a,i)=>a+(+i.amount||0),0);
      return `<div class="igroup"><div class="ighead"><span class="badge ${k}">${ITEM_TYPES[k]}</span><span class="cap">${its.length}개</span><b class="num">${k==='discount'?'−':''}${won(sub)}원</b></div><div class="ilist">${its.map(i=>`<div class="irow"><input class="iname-in" data-iname="${i.id}" value="${esc(i.name||'')}" placeholder="이름 없음" aria-label="항목 이름"><span class="num iamt">${i.type==='discount'?'−':''}${won(i.amount)}원</span><button class="xbtn" data-idel="${i.id}" aria-label="${esc(i.name)} 삭제">×</button></div>`).join('')}</div></div>`}).join(''):'<div class="ilist"><div class="empty-in">아직 추가한 항목이 없어요.<br>영수증을 불러오거나 직접 추가해 주세요.</div></div>'}
    <button class="btn" data-act="makemeet" ${d.items.length?'':'disabled'}>다음 · 체크인 링크 만들기</button>
  </section>`;
  ['camIn','galIn'].forEach(id=>document.getElementById(id).addEventListener('change',e=>{const fs=[...(e.target.files||[])];e.target.value='';if(fs.length)addPhotos(fs)}));
  shell.querySelectorAll('[data-iname]').forEach(x=>x.addEventListener('input',()=>{const it=state.draft.items.find(i=>i.id===x.dataset.iname);if(it)it.name=x.value}));
  document.getElementById('iAmt').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addItem()}});
  const DRINK=/소주|맥주|참이슬|처음처럼|진로|새로|카스|테라|켈리|하이네켄|생맥|막걸리|와인|하이볼|사케|위스키|칵테일|양주|소맥|beer|soju|wine/i;
  document.getElementById('iName').addEventListener('input',e=>{if(!DRINK.test(e.target.value)||!types.includes('drink'))return;state.itemType='drink';document.querySelectorAll('[data-itype]').forEach(x=>x.setAttribute('aria-checked',String(x.dataset.itype==='drink')))});
  document.getElementById('iName').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();document.getElementById('iAmt').focus()}});
}
function typeHint(m){
  let h=[ruleOn(m,'r3')&&!ruleOn(m,'r2')?'‘음식’은 모두, ‘술’은 술 마신 사람끼리':'‘음식’과 ‘술’은 따로 적고 모두 함께'];if(ruleOn(m,'r6'))h=['참여자가 먹은 메뉴를 직접 골라서, 메뉴마다 고른 사람끼리'];if(ruleOn(m,'r7'))h.push('‘할인’은 모두에게 똑같이 빼서');
  return h.join(', ')+' 나눠요. 술 이름을 적으면 ‘술’로 자동 선택돼요.';
}
function addItem(){
  const n=document.getElementById('iName'),a=document.getElementById('iAmt');
  const amt=parseInt(String(a.value).replace(/[^0-9]/g,''),10)||0;
  if(!amt){a.focus();toast('금액을 적어 주세요');return}
  const types=itemTypes(state.draft);const t=state.itemType&&types.includes(state.itemType)?state.itemType:'common';
  state.draft.items.push({id:rid('i'),name:n.value.trim()||ITEM_TYPES[t],amount:amt,type:t});
  state.itemType='common';
  r051();document.getElementById('iName').focus();
}
/* 영수증 사진 여러 장: 한 장씩 차례로 읽어 항목을 더한다.
   읽는 순서: claude.ai 링크(sample) → 웹 서버(bbk-receipt, Claude) → 휴대폰 안 글자 인식(Tesseract, 대체) */
function addPhotos(files){
  state.photos=state.photos||[];
  files.slice(0,10).forEach(f=>state.photos.push({id:rid('ph'),file:f,url:URL.createObjectURL(f),st:'wait',n:0}));
  r051();runPhotoQueue();
}
let photoBusy=false,ocrVia='';
async function runPhotoQueue(){
  if(photoBusy)return;photoBusy=true;
  try{for(;;){const ph=(state.photos||[]).find(x=>x.st==='wait');if(!ph)break;ph.st='reading';sayOcr('영수증을 읽고 있어요… 잠시만 기다려 주세요.');if(state.view==='items')r051();
      let list=[],why='';
      try{list=await readReceipt(ph.file)}catch(e){why=e&&e.msg||''}
      if(!state.photos.includes(ph))continue;
      const types=itemTypes(state.draft);
      list=list.map(x=>({name:String(x.name||'').slice(0,40),amount:Math.abs(parseInt(x.amount,10)||0),type:['common','drink','discount'].includes(x.type)?x.type:'common'})).filter(x=>x.amount>0)
        .filter(x=>x.type!=='discount'||types.includes('discount'));
      list.forEach(x=>state.draft.items.push({id:rid('i'),...x,src:ph.id}));
      ph.n=list.length;ph.st=list.length?'done':'fail';
      sayOcr(list.length?`영수증에서 ${list.length}개 항목을 넣었어요 (${ocrVia}로 읽음). 이름과 금액이 맞는지 확인해 주세요.`:(why||'이 사진에서는 항목을 찾지 못했어요. 더 밝게 다시 찍거나 직접 입력해 주세요.'));
      if(state.view==='items')r051()}}
  finally{photoBusy=false}
}
function sayOcr(m){state.ocr=m;const n=document.getElementById('ocrNote');if(n){n.hidden=false;n.textContent=m}}
async function shrinkImage(file,max=1600){
  const img=await new Promise((ok,no)=>{const im=new Image();im.onload=()=>ok(im);im.onerror=no;im.src=URL.createObjectURL(file)});
  const k=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight));const c=document.createElement('canvas');
  c.width=Math.round(img.naturalWidth*k);c.height=Math.round(img.naturalHeight*k);c.getContext('2d').drawImage(img,0,0,c.width,c.height);
  return await new Promise(ok=>c.toBlob(ok,'image/jpeg',.85));
}
const blobB64=b=>new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(String(r.result).split(',')[1]);r.onerror=no;r.readAsDataURL(b)});
async function readReceipt(file){
  const s=Store.sample;let lim=null;try{lim=s?await s.limits():null}catch(e){}
  if(s&&lim&&lim.images){
    try{const arr=await s.json(`이 사진은 한국 식당 영수증이야. 주문 항목을 읽어서 JSON 배열만 답해 줘.
형식: [{"name":"모둠회(대)","amount":68000,"type":"common"}]
- amount: 그 줄의 합계 금액(원, 정수, 수량×단가가 이미 곱해진 값)
- type: 소주·맥주·와인·막걸리·하이볼·사케 같은 술은 "drink", 할인·쿠폰 줄은 "discount"(amount는 양수), 나머지는 "common"
- 합계, 부가세, 봉사료, 카드·승인 정보 줄은 빼
- 읽을 수 없으면 []`,{images:[file],modelTier:'default'});ocrVia='Claude';return Array.isArray(arr)?arr:[]}
    catch(e){if(e&&e.code==='not_granted')throw {msg:'Claude 사용을 허락하지 않아서 자동 인식을 할 수 없어요. 직접 입력해 주세요.'}}
  }
  let small=file;try{small=await shrinkImage(file)}catch(e){}
  if(WEB&&Store.db.receipt){
    try{const r=await withTimeout(Store.db.receipt(await blobB64(small),'image/jpeg'),45000);if(r&&Array.isArray(r.items)){ocrVia='Claude';return r.items}}catch(e){}
  }
  sayOcr('휴대폰에서 글자를 읽고 있어요… 처음 한 번은 30초쯤 걸려요.');
  ocrVia='휴대폰 글자 인식';return parseReceiptText(await phoneOcr(small));
}
let tessWorker=null;
async function phoneOcr(blob){
  const V=u=>new URL('vendor/tesseract/'+u,location.href).href;
  if(!window.Tesseract)await new Promise((ok,no)=>{const sc=document.createElement('script');sc.src=WEB?V('tesseract.min.js'):'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';sc.onload=ok;sc.onerror=()=>no({msg:'글자 인식 도구를 불러오지 못했어요. 인터넷 연결을 확인하거나 직접 입력해 주세요.'});document.head.appendChild(sc)});
  if(!tessWorker)tessWorker=await window.Tesseract.createWorker('kor+eng',1,WEB?{workerPath:V('worker.min.js'),corePath:V('core'),langPath:V('lang')}:{});
  const {data}=await tessWorker.recognize(blob);return data.text||'';
}
// 영수증 OCR 텍스트 → 항목 (휴리스틱)
function parseReceiptText(text){
  const SKIP=/합\s*계|소\s*계|총\s*액|총\s*금액|부가세|부가가치|과세|면세|봉사료|카드|승인|거스름|받을|받은|현금|결제|사업자|대표|전화|tel|주소|일시|테이블|영수증|메뉴명|수량|단가|금액|vat|total|번호|포인트|잔액|할부/i;
  const DRINK=/소주|맥주|참이슬|처음처럼|진로|새로|카스|테라|켈리|하이네켄|생맥|막걸리|와인|하이볼|사케|위스키|칵테일|양주|소맥|beer|soju|wine|hite|cass|terra/i;
  const DISC=/할인|쿠폰|에누리|서비스\s*차감/;
  const out=[];
  for(let raw of String(text||'').split(/\n/)){
    const l=raw.replace(/[|_~`'"]/g,' ').replace(/\s+/g,' ').trim();
    if(l.length<3||SKIP.test(l))continue;
    const m=l.match(/^(.*?[가-힣A-Za-z].*?)\s+(?:(\d{1,3})\s+)?(?:[\d,.]+\s+)?(-?\d{1,3}(?:[,.]\d{3})+|-?\d{4,7})\s*원?$/);
    if(!m)continue;
    let name=m[1].replace(/[^\w가-힣()\s×x*.\-]/g,'').replace(/\s+\d+\s*$/,'').trim();
    const qty=parseInt(m[2]||'1',10);
    const amount=Math.abs(parseInt(m[3].replace(/[,.]/g,''),10));
    if(!name||!amount||amount<500||amount>2000000)continue;
    if(qty>1&&qty<100)name=`${name} × ${qty}`;
    const type=DISC.test(name)?'discount':DRINK.test(name)?'drink':'common';
    out.push({name:name.slice(0,40),amount,type});
  }
  return out;
}

async function makeMeet(){
  const d=state.draft;
  const m={...d,id:d.id||rid('g'),ownerKey:Store.myKey(),round:roundOf(d),paid:{},study:d.study!==false,autoNoResp:true,dueMin:60,deadline:Date.now()+60*60000,createdAt:Date.now(),updatedAt:Date.now()};
  try{await withTimeout(Store.db.doc('meets/'+m.id).set(m))}
  catch(e){toast(e&&e.code==='invalid_argument'?'저장 권한이 없어요. 모임 주인 계정으로 열어 주세요.':'저장하지 못했어요. 잠시 후 다시 눌러 주세요.');return}
  state.draft=null;state.photos=[];state.mid=m.id;state.meet=m;state.ocr='';
  go('link');
}
/* ---------- 06 링크 만들기 ---------- */
function r06(){
  shell.innerHTML=`<section class="view onb">
    <div class="toprow"><button class="back" data-nav="home">‹ 홈으로</button></div>
    <div style="height:clamp(8px,8vh,80px)"></div>
    <div class="bread" style="width:min(280px,72vw)">${SVG.welcome}</div>
    <h1 class="h1" style="margin-top:36px">체크인 페이지가<br>만들어졌어요</h1>
    <p class="lead" style="margin-top:14px">아래를 클릭하시면,<br>공유할수 있는 링크가 생성되요</p>
    <div class="grow"></div>
    <button class="btn" data-act="makelink">모임 링크 생성하기</button>
  </section>`;
}
function linkSheet(m){
  const local=Store.mode!=='cloud';
  sheet(`<h3>모임 링크가 생겼어요</h3>
    <div class="linkbox">${IC.link}<span class="num">${esc(linkOf(m))}</span></div>
    <button class="btn kakao" data-copy-invite>정산 메시지 복사하기</button>
    <div class="cap">${local?'지금은 HTML 파일로 열려 있어서 링크는 이 기기에서만 시연할 수 있어요. 아래 버튼으로 참여자 화면을 열어 보세요.':WEB?'링크를 받은 사람은 로그인 없이 바로 체크인할 수 있어요. 휴대폰(브라우저)마다 따로 기억해요.':'참여자도 claude.ai에 로그인해야 하고, 연희님이 이 페이지 공유 메뉴에서 이메일로 <b>편집자</b> 초대를 해 줘야 체크인을 저장할 수 있어요.'}</div>
    <button class="btn line" data-demo>이 기기에서 참여자 화면 열기</button>
    <button class="btn" data-status>정산 현황 보기</button>`,
  (s,close)=>{
    s.querySelector('[data-copy-invite]').onclick=()=>copy(msgInvite(m),'정산 메시지를 복사했어요. 단톡방에 붙여 넣어 주세요');
    s.querySelector('[data-demo]').onclick=()=>{close();ssSet('bbk.pkey.demo',rid('p'));state.joinName='';openMeet(m.id,'join')};
    s.querySelector('[data-status]').onclick=()=>{close();openMeet(m.id,'org')};
  });
}

/* ---------- 모임 열기(구독) ---------- */
function openMeet(gid,want,tab){
  unsubAll();Study.R=null;state.mid=gid;state.cks=[];state.meet=null;state.tab=tab||'est';state.open=false;
  let gotMeet=false,gotCks=false,decided=false,timer=setTimeout(()=>{if(!gotMeet){state.view='missing';state.missingWhy='timeout';render()}},10000);
  const decide=()=>{
    if(!gotMeet||!gotCks)return;
    if(!state.meet){clearTimeout(timer);state.view='missing';state.missingWhy='none';render();return}
    clearTimeout(timer);
    if(decided){if(['org','me'].includes(state.view))r07();else if(state.view==='join'&&isClosed(state.meet)&&!document.getElementById('jName')?.value)rJoin();return}
    decided=true;let v=want;
    if(!v)v=isOwnerOf(state.meet)&&!ssGet('bbk.pkey.demo')?'org':myCk()?'me':'join';
    if(v==='join'&&myCk())v='me';
    if(Study.on(state.meet)&&v!=='org'){Study.load(state.meet).then(R=>{go(R?v:'consent')});return}
    go(v);
  };
  state.subs.push(Store.db.doc('meets/'+gid).onSnapshot(s=>{state.meet=s.exists?s.data():null;gotMeet=true;decide()},()=>{gotMeet=true;decide()}));
  state.subs.push(Store.db.collection('checkins').where('meetId','==',gid).onSnapshot(q=>{state.cks=q.docs.map(d=>d.data());gotCks=true;decide()},()=>{gotCks=true;decide()}));
}
function rMissing(){
  const cloud=Store.mode==='cloud';
  shell.innerHTML=`<section class="view onb">
    <div style="height:clamp(16px,10vh,100px)"></div>
    <div class="bread" style="width:180px">${SVG.curious}<span class="q" style="left:153px;top:34px" aria-hidden="true">?</span></div>
    <h1 class="h1" style="margin-top:18px">모임을 찾지 못했어요</h1>
    <p class="lead" style="margin-top:12px;line-height:23px">${state.missingWhy==='timeout'?'저장소에 연결하지 못했어요.<br>잠시 후 다시 열어 주세요.':cloud?'링크가 맞는지 확인해 주세요.<br>모임이 삭제되었을 수도 있어요.':'이 링크의 모임은 claude.ai에 있어요.<br>claude.ai에 로그인한 상태로 열어 주세요.'}</p>
    <div class="grow"></div>
    <button class="btn" data-act="tohome">빵끗 처음 화면으로</button>
  </section>`;
}

/* ---------- 참여자 체크인 ---------- */
function joinHead(){
  const m=state.meet;
  return `<div class="toprow"><span class="label" style="color:var(--sub)">함께하는 정산</span></div>
    <h1 class="title" style="font-size:24px;line-height:34px;margin-top:-6px">모임정산이<br>도착했어요.</h1>
    <p class="cap" style="margin-top:-8px">${esc(m.payer||'총무')}님의 ‘${esc(titleOf(m))}’ · ${esc((m.date||'').replace(/-/g,'.'))}</p>`;
}
function rJoin(){
  const m=state.meet;const rules=rulesOf(m);const blocked=Store.mode==='cloud'&&Store.canWrite===false;
  shell.innerHTML=`<section class="view">
    ${joinHead()}
    <p class="subt" style="margin-top:-6px">${esc(m.payer||'총무')}님이 정한 정산 기준을 확인하고, 체크인해 주세요.</p>
    <div class="field"><label class="label" for="jName">내 이름 (실명)</label><input class="in" id="jName" maxlength="12" autocomplete="name" placeholder="예: 김연희 · 별명 말고 실명으로" value="${esc(state.joinName||(ssGet('bbk.pkey.demo')?'':myName()))}"></div>
    <div class="label" style="color:var(--sub);margin-top:4px">${esc(m.payer||'총무')}님이 정한 정산 기준 · ${rules.length}개</div>
    <div class="rcards">${ruleCards(rules)}</div>
    ${isClosed(m)?`<div class="warn">답변 마감이 지났어요. 체크인하고 내 상황을 답하면 기록은 되지만, 금액은 ‘예외 없음’ 기준으로 계산돼요.</div>`:dueText(m)?`<div class="cap due">${dueText(m)}</div>`:''}
    ${blocked?`<div class="warn">이 링크에서는 아직 체크인을 저장할 수 없어요. ${esc(m.payer||'총무')}님께 이 페이지의 <b>편집자 초대</b>를 요청해 주세요.</div>`:''}
    <div class="grow"></div>
    <p class="cap" style="font-size:12px;line-height:19px">기준을 확인했다면 체크인해 주세요.<br>이 모임의 정산에 함께 참여하게 돼요.</p>
    <div class="cap err" id="jErr" hidden>이름을 적어 주세요.</div>
    <button class="btn" data-act="join1">체크인 완료하기</button>
    ${Store.mode!=='cloud'||isOwnerOf(m)?'<button class="textlink u" data-act="asowner">총무 화면으로 돌아가기</button>':''}
  </section>`;
  document.getElementById('jName').addEventListener('input',e=>{state.joinName=e.target.value;document.getElementById('jErr').hidden=true});
}
function questions(m){
  const q=[];
  if(ruleOn(m,'r1')||ruleOn(m,'r4')||ruleOn(m,'r5'))q.push({k:'rounds',bread:0,t:'몇 차에 참석하고 계신가요?',multi:true,opts:[[1,'1차'],[2,'2차'],[3,'3차']],hint:`이 정산은 ${roundOf(m)}차 비용이에요. 참석한 차수를 모두 골라 주세요.`});
  if(ruleOn(m,'r3')&&!ruleOn(m,'r2')&&!ruleOn(m,'r6'))q.push({k:'drink',bread:2,t:'술을 마시는 분이신가요?',opts:[[true,'네, 마셔요'],[false,'아니요']]});
  if(ruleOn(m,'r8'))q.push({k:'bday',bread:7,t:'오늘 생일이신가요?',opts:[[true,'네, 생일이에요'],[false,'아니요']]});
  const menu=(m.items||[]).filter(i=>i.type!=='discount');
  if(ruleOn(m,'r6')&&menu.length)q.push({k:'personal',menu:true,bread:5,t:'내가 먹은 메뉴를 모두 골라 주세요',multi:true,opts:menu.map(i=>[i.id,i.name||'메뉴',i.amount,i.type]),hint:'같은 메뉴를 고른 사람끼리 그 메뉴값을 나눠요. 함께 먹은 메뉴도 골라 주세요.'});
  /* 공통 질문: 기준이 다루지 않는 상황도 물어서 기록 (금액에는 기준에 있는 것만 반영) */
  const covered={late:ruleOn(m,'r1')||ruleOn(m,'r4')||ruleOn(m,'r5'),nodrink:ruleOn(m,'r3')||ruleOn(m,'r6'),own:ruleOn(m,'r6'),bday:ruleOn(m,'r8')};
  const S=[['late','늦게 왔거나 일찍 갔어요'],['nodrink','술을 마시지 않았어요'],['own','나만 따로 시킨 메뉴가 있어요'],['bday','오늘 생일이에요']].filter(([k])=>!covered[k]);
  q.push({k:'situ',bread:6,t:q.length?'그 밖에 정산에 반영됐으면 하는 상황이 있나요?':'오늘 나에게 해당하는 상황이 있나요?',multi:true,
    opts:[...S,['other','기타 사정이 있어요'],['none','해당 없어요']],hint:'이번 정산 기준에 없는 상황은 금액에 반영되지 않고, 참고로만 기록돼요.'});
  return q;
}
const SITU={late:'늦게 옴·일찍 감',nodrink:'술 안 마심',own:'따로 시킨 메뉴',bday:'생일',other:'기타 사정',none:'해당 없음'};
function rJoin2(){
  const m=state.meet,qs=questions(m),a=state.ans;const after=Study.arm(m)==='B'&&!!myCk();
  shell.innerHTML=`<section class="view">
    ${joinHead()}
    <p class="subt" style="margin-top:-6px">${after?'오늘 나에게 해당하는 상황을 알려주세요. 금액을 다시 계산해요.':'내 상황을 알려주세요. 이걸로 내 금액이 계산돼요.'}</p>
    ${dueText(m)&&!isClosed(m)?`<div class="cap due">${dueText(m)}</div>`:''}
    ${isClosed(m)?'<div class="warn">답변 마감이 지났어요. 답변은 기록되지만 금액에는 반영되지 않아요.</div>':''}
    ${qs.map(q=>q.menu?menuPick(m,q,a):`<div class="qcard"><div class="qhead"><span class="ri"><span class="ic">${BREAD[q.bread]}</span></span><b>${q.t}</b></div>
      ${q.hint?`<div class="cap">${q.hint}</div>`:''}
      <div class="chips" role="${q.multi?'group':'radiogroup'}" aria-label="${q.t}">${q.opts.map(([v,l])=>{const on=q.multi?(a[q.k]||[]).includes(v):a[q.k]===v;return `<button class="chip" ${q.multi?'aria-pressed':'role="radio" aria-checked'}="${on}" data-q="${q.k}" data-v='${JSON.stringify(v)}' data-multi="${q.multi?1:0}">${esc(l)}</button>`}).join('')}</div></div>`).join('')}
    <div class="grow"></div>
    <div class="cap err" id="qErr" hidden></div>
    <button class="btn" data-act="join2">답변 완료</button>
    <button class="textlink" data-act="tojoin">‹ 정산 기준 다시 보기</button>
  </section>`;
}
function menuPick(m,q,a){
  const mine=a.personal||[];const others=state.cks.filter(c=>c.pkey!==Store.pKey());
  const cnt=id=>others.filter(c=>(c.personal||[]).includes(id)).length+(mine.includes(id)?1:0);
  return `<div class="qcard"><div class="qhead"><span class="ri"><span class="ic">${BREAD[q.bread]}</span></span><b>${q.t}</b></div>
    <div class="cap">${q.hint}</div>
    <div class="mlist" role="group" aria-label="${q.t}">${q.opts.map(([id,name,amt,type])=>{const on=mine.includes(id);const n=cnt(id);
      return `<button class="mrow" aria-pressed="${on}" data-q="personal" data-v='${JSON.stringify(id)}' data-multi="1"><span class="mchk" aria-hidden="true"></span><span class="mn"><b>${esc(name)}</b><span class="cap">${type==='drink'?'술 · ':''}${n?`${n}명이 골랐어요`:'아직 아무도 안 골랐어요'}</span></span><span class="num ma">${won(amt)}원</span></button>`}).join('')}</div>
    <div class="cap" id="menuSel">${mine.length?`${mine.length}개 골랐어요`:'하나 이상 골라 주세요'}</div></div>`;
}
async function saveCheckin(base){
  const m=state.meet,qs=questions(m),a=state.ans;
  const miss=base?null:qs.find(q=>!q.multi&&a[q.k]===undefined)||qs.find(q=>q.k==='rounds'&&!(a.rounds||[]).length)||qs.find(q=>q.menu&&!(a.personal||[]).length)||qs.find(q=>q.k==='situ'&&!(a.situ||[]).length);
  if(miss){const e=document.getElementById('qErr');e.hidden=false;e.textContent=miss.menu?'먹은 메뉴를 하나 이상 골라 주세요.':miss.k==='situ'?'해당하는 상황을 골라 주세요. 없으면 ‘해당 없어요’를 눌러 주세요.':`‘${miss.t}’에 답해 주세요.`;return}
  const pkey=Store.pKey();const old=myCk()||{};const late=!base&&isClosed(m);
  const ans={rounds:a.rounds||[],drink:a.drink!==undefined?a.drink:true,bday:!!a.bday,personal:a.personal||[]};
  /* 마감 뒤 답변: 기록만 하고 금액은 '예외 없음'(또는 마감 전 답) 그대로 */
  const keep=late?{rounds:old.rounds||[roundOf(m)],drink:old.drink!==undefined?old.drink:true,bday:!!old.bday,personal:old.personal||[]}:ans;
  const doc={...old,meetId:m.id,pkey,name:(state.joinName||old.name||'').trim(),...keep,situ:a.situ||old.situ||[],...(late?{afterDue:true,lateAns:{...ans,situ:a.situ||[],at:Date.now()}}:{}),at:old.at||Date.now(),updatedAt:Date.now()};
  try{await withTimeout(Store.db.doc('checkins/'+m.id+'_'+pkey).set(doc))}
  catch(e){
    if(e&&e.code==='invalid_argument'){Store.canWrite=false;sheet(`<h3>체크인을 저장하지 못했어요</h3><div class="cap">이 페이지에 쓸 권한이 아직 없어요. ${esc(m.payer||'총무')}님께 claude.ai 공유 메뉴에서 이메일로 <b>편집자</b> 초대를 해 달라고 요청해 주세요.</div><button class="btn" data-close>알겠어요</button>`)}
    else toast('저장하지 못했어요. 잠시 후 다시 눌러 주세요.');
    return}
  Study.log('checkin_saved',{exc:base?0:1,late:late?1:0,drink:ans.drink?1:0,rounds:ans.rounds.join('|'),bday:ans.bday?1:0,np:ans.personal.length,situ:(a.situ||[]).join('|')});
  if(!base&&Study.R){Study.R.excDone=true;Study.save()}
  toast(base?'체크인했어요! 내 금액을 확인해 주세요':late?'기록했어요. 마감 뒤 답변이라 금액에는 반영되지 않아요':'저장했어요!');state.tab='est';state.open=false;go('me');
}

/* ---------- 07 내 정산 확인 (참여자 · 총무 공통) ---------- */
function r07(){
  const m=state.meet;if(!m){rMissing();return}
  const c=compute(m,state.cks);const org=state.view==='org';const me=myCk();const meP=me&&c.ppl.find(p=>p.id===me.pkey);
  const exp=+m.expected||0;
  const head=`<div class="toprow">${org?'<button class="back" data-nav="home">‹ 홈으로</button>':'<span class="label" style="color:var(--sub)">함께하는 정산</span>'}</div>
    <div class="mhead"><h1 class="title">${esc(m.payer||'총무')}님의 모임</h1>
      <span class="label" style="color:var(--sub)">${exp?`체크인 인원 ${exp}명중 ${c.checked}명 참여수락`:`체크인 ${c.checked}명 참여수락`}</span>
      ${dueText(m)?`<span class="label due" id="due">${dueText(m)}</span>`:''}</div>
    ${org&&c.pending?`<div class="cap note">${isClosed(m)?`답하지 않은 ${c.pending}명은 ‘예외 없음’으로 계산해 금액을 확정했어요.`:`아직 답하지 않은 ${c.pending}명은 ‘예외 없음’으로 계산 중이에요. 마감 전에 답하면 바뀌어요.`}</div>`:''}
    ${org?`<div class="row2"><button class="btn line small2" data-act="share">${IC.link} 참여 링크 공유</button><button class="btn line small2" data-act="remind">미입금 알림 복사</button></div>`:''}
    <div class="tabs r18" role="tablist"><button role="tab" aria-selected="${state.tab==='est'}" data-tab="est">예상 금액</button><button role="tab" aria-selected="${state.tab==='pay'}" data-tab="pay">송금현황</button></div>`;
  let body='';
  if(state.tab==='est'){
    const mine=!org&&meP;const amt=mine?c.rows[meP.id].amount:c.nb;
    const R=Study.active(m)?Study.R:null;
    const bPending=mine&&R&&R.arm==='B'&&!R.excDone&&questions(m).length>0;
    if(mine&&R){if(R.amountFirst==null){R.amountFirst=amt;Study.log('amount_seen',amt)}if(R.excDone&&R.amountAfterExc==null){R.amountAfterExc=amt;Study.log('amount_after_exc',amt)}}
    const changed=mine&&R&&R.arm==='B'&&R.excDone&&R.amountFirst!=null&&R.amountFirst!==amt;
    const detail=mine?c.rows[meP.id].why.map(x=>`<li>${esc(x)}</li>`).join('')
      :`<li>총 ${won(c.total)}원 (${esc(c.foodLabel)} ${won(c.common)}원${c.drink?` · 술 ${won(c.drink)}원`:''}${c.personalTotal?` · ${ruleOn(m,'r6')?'고른 메뉴':'개별'} ${won(c.personalTotal)}원`:''}${c.discount?` · 할인 −${won(c.discount)}원`:''})</li><li>${exp?`모임 인원 ${exp}명`:`체크인 ${Math.max(1,c.ppl.length)}명`} 기준 N빵이에요. 정산 기준에 따라 사람마다 달라질 수 있어요.</li>`;
    body=`<button class="estcard" data-act="toggleEst" aria-expanded="${state.open}"><span class="el">${IC.down} ${mine?'내 예상 정산 금액':'예상 1인당 정산 금액'}</span><span class="ea num">${won(amt)}원</span></button>
      ${state.open?`<ul class="why">${detail}</ul>`:''}
      ${!mine&&!org?'<div class="cap">아직 체크인하지 않았어요. 체크인하면 내 금액이 보여요.</div>':''}
      ${changed?`<div class="cap note">처음 금액 ${won(R.amountFirst)}원 → 내 상황을 반영해 ${won(amt)}원이 되었어요.</div>`:''}
      ${mine&&(myCk()||{}).afterDue?'<div class="cap note">마감 뒤에 답해서, 금액은 ‘예외 없음’ 기준으로 계산됐어요.</div>':''}
      ${bPending?`<div class="callout"><b>아직 끝나지 않았어요</b><span class="cap">지금 금액은 ‘예외 없음’ 기준이에요. 오늘 나에게 해당하는 상황(술, 참석 차수 등)이 있다면 알려주세요. 금액을 다시 계산해요.</span></div>`:''}
      <button class="btn line rc-open" data-act="receipt">🧾 정산 영수증 보기</button>
      <details class="rdet"><summary>${esc(m.payer||'총무')}님이 정한 정산 기준 · ${rulesOf(m).length}개 <span class="cap">${rulesOf(m).map(r=>r.short).join(' · ')||'모두 똑같이 N빵'}</span></summary><div class="rcards">${ruleCards(rulesOf(m))}</div></details>
      <div class="grow"></div>
      ${mine&&!bPending&&!isClosed(m)&&questions(m).length?'<button class="textlink u" data-act="editans">내 답변 고치기</button>':''}
      ${bPending?'<button class="btn" data-act="bexc">다음 · 내 상황 알려주기</button>':mine&&c.rows[meP.id].amount&&meP.id!==c.payerId?`<button class="btn" data-act="ack">${meP.sent?'송금 현황 보기':`확인했어요 · 송금하러 가기 ${won(c.rows[meP.id].amount)}원`}</button>`:`<button class="btn" data-act="ack">${mine&&R&&!R.survey?'확인했어요 · 마지막 설문으로':'확인했어요'}</button>`}`;
  }else{
    const myAmt=!org&&meP&&meP.id!==c.payerId?c.rows[meP.id].amount:0;const R2=Study.active(m)?Study.R:null;
    if(myAmt&&R2&&!R2.ev.some(x=>x.e==='remit_view'))Study.log('remit_view',myAmt);
    body=`${!org?payInfo(m,c,org,meP):''}<div class="plist">${c.ppl.map(p=>{const r=c.rows[p.id];const isPayer=p.id===c.payerId;const note=isPayer?'결제했어요':noteOf(m,p);
      const icon=isPayer||!r.amount?'<span class="sicon"></span>':p.paid?`<span class="sicon" title="받음 확인">${IC.paid}</span>`:p.sent?`<span class="sicon" title="보냈어요">${IC.sent}</span>`:`<span class="sicon" title="아직 안 보냄">${IC.unpaid}</span>`;
      return `<button class="pcard" data-person="${esc(p.id)}">${icon}<span class="pc"><span class="pn"><b>${esc(p.name)}${p.id===(me&&me.pkey)?' (나)':''}</b>${note?`<span>${esc(note)}</span>`:''}</span><span class="pa num">${won(r.amount)}원</span></span><span class="pch">${IC.chev}</span></button>`}).join('')}</div>
      <div class="cap legend"><span>${IC.paid} 받음 확인</span><span>${IC.sent} 보냈어요</span><span>${IC.unpaid} 아직</span></div>
      ${org?payInfo(m,c,org,meP):''}
      <div class="grow"></div>
      ${!org&&!me?'<button class="btn" data-act="tojoin">체크인하러 가기</button>':''}
      ${myAmt?`<div class="paybar ${meP.sent?'done':''}"><div class="pb-t"><span class="cap">${esc(m.payer||'총무')}님께 보낼 금액</span><b class="num">${won(myAmt)}원</b></div>
        ${meP.sent?(R2&&!R2.survey?`<button class="btn" data-act="tosurvey">마지막 설문하기</button>`:`<button class="btn line" data-act="togglesent">✓ 보냈어요 · 취소</button>`):`<button class="btn" data-act="togglesent">송금했어요</button>`}</div>`:''}`;
  }
  shell.innerHTML=`<section class="view">${head}${body}
    ${Store.mode!=='cloud'&&!org?'<button class="textlink u" data-act="demoagain">다른 사람으로 체크인하기 (시연)</button>':''}
    ${Store.mode!=='cloud'&&!org&&isOwnerOf(m)?'<button class="textlink u" data-act="asowner">총무 화면으로 돌아가기</button>':''}
  </section>`;
}
function acctNum(a){const x=(a||'').match(/\d[\d\- ]{5,}\d/);return x?x[0].replace(/\s+/g,''):(a||'')}
/* ---------- 정산 영수증 그래픽: 영수증 내용을 읽기 쉽게 다시 그린 것 ---------- */
function receiptHTML(m){
  const c=compute(m,state.cks),myKey=Store.pKey(),r6=ruleOn(m,'r6');
  const items=m.items||[];const sum=t=>items.filter(i=>(i.type||'common')===t).reduce((a,i)=>a+(+i.amount||0),0);
  const mine=(state.cks.find(k=>k.pkey===myKey)||{}).personal||[];
  const pick=id=>state.cks.filter(k=>(k.personal||[]).includes(id)).length;
  const G=[['common','음식'],['drink','술'],['personal','개별 메뉴'],['discount','할인']].filter(([t])=>items.some(i=>(i.type||'common')===t));
  const total=items.reduce((a,i)=>a+((i.type==='discount'?-1:1)*(+i.amount||0)),0);
  const line=(l,r,cls='',sub='')=>`<div class="rl ${cls}"><span class="rl-l"><span class="rl-n">${l}</span>${sub?`<small>${sub}</small>`:''}</span><span class="rl-d" aria-hidden="true"></span><span class="rl-r num">${r}</span></div>`;
  return `<article class="rcpt" aria-label="정산 영수증">
    <header class="rc-h"><span class="rc-logo">${BREAD[0]||''}</span><b>빵끗 정산 영수증</b><span class="cap">${esc(titleOf(m))}</span>
      <span class="cap">${esc((m.date||'').replace(/-/g,'.'))} · 결제 ${esc(m.payer||'총무')}</span></header>
    <div class="rc-cut"></div>
    ${G.map(([t,label])=>`<section class="rc-sec"><div class="rc-sh"><span>${label}</span><span class="num">${t==='discount'?'−':''}${won(sum(t))}원</span></div>
      ${items.filter(i=>(i.type||'common')===t).map(i=>{const my=r6&&mine.includes(i.id);const n=r6&&t!=='discount'?pick(i.id):0;
        return line(`${esc(i.name||'이름 없음')}${my?'<i class="rc-me">나</i>':''}`,`${t==='discount'?'−':''}${won(i.amount)}`,my?'me':'',r6&&t!=='discount'?(n?n+'명이 나눠요':'아직 아무도 안 골랐어요 · 모두 나눔'):'')}).join('')}</section>`).join('')}
    <div class="rc-cut"></div>
    ${line('<b>합계</b>',`<b>${won(total)}원</b>`,'tot')}
    <div class="rc-rules"><span class="cap">정산 기준</span><span>${rulesOf(m).map(r=>r.short).join(' · ')||'모두 똑같이 N빵'}</span></div>
    <div class="rc-cut"></div>
    <section class="rc-sec"><div class="rc-sh"><span>나눈 결과</span><span class="cap">${c.ppl.length}명</span></div>
      ${c.ppl.map(p=>{const me=p.id===myKey;const tag=p.id===c.payerId?'결제':p.pending?'미응답':'';
        return line(`${esc(p.name)}${me?'<i class="rc-me">나</i>':''}${tag?`<em class="rc-tag">${tag}</em>`:''}`,`${won(c.rows[p.id].amount)}원`,me?'me':'')}).join('')}</section>
    <footer class="rc-f"><div class="rc-bar" aria-hidden="true"></div><span class="cap">빵끗 · BETA · ${esc(m.id)}</span></footer>
  </article>`;
}
function receiptSheet(){sheet(`${receiptHTML(state.meet)}<button class="btn line" data-close>닫기</button>`);Study.log('receipt_open')}
function payInfo(m,c,org,meP){
  const myAmt=!org&&meP&&meP.id!==c.payerId?c.rows[meP.id].amount:0;
  const sent=!org&&meP&&meP.sent;
  if(!m.account)return `<div class="payinfo"><div class="pi-h">송금 정보</div><p class="cap">${org?'받을 계좌가 아직 없어요. 모임 정보에서 받을 곳을 넣어 주세요.':'총무가 아직 받을 계좌를 넣지 않았어요.'}</p></div>`;
  return `<div class="payinfo"><div class="pi-h">송금 정보</div>
    <div class="pi-row"><span class="cap">받는 분</span><b>${esc(m.payer||'총무')}</b></div>
    <div class="pi-row"><span class="cap">계좌</span><b class="num">${esc(m.account).replace(/-/g,'\u2011')}</b><button class="btn line small2" data-act="copyacctnum">복사</button></div>
    ${myAmt?`<div class="pi-row"><span class="cap">보낼 금액</span><b class="num">${won(myAmt)}원</b><button class="btn line small2" data-act="copyamt">복사</button></div>`:''}
    <button class="btn line" data-act="copyall">${IC.link} 송금 정보 한 번에 복사</button>
  </div>`}
function personSheet(pid){
  const m=state.meet,c=compute(m,state.cks),p=c.ppl.find(x=>x.id===pid);if(!p)return;
  const r=c.rows[p.id],org=state.view==='org',mine=p.id===Store.pKey(),isPayer=p.id===c.payerId;
  sheet(`<h3>${esc(p.name)} · <span class="num">${won(r.amount)}원</span></h3>
    <ul class="why">${r.why.map(x=>`<li>${esc(x)}</li>`).join('')}${noteOf(m,p)?`<li>${esc(noteOf(m,p))}</li>`:''}</ul>
    ${(()=>{const ck=state.cks.find(k=>k.pkey===p.id)||{};const sv=(ck.situ||[]).filter(x=>x!=='none');return sv.length?`<div class="cap note">알려준 상황: ${sv.map(x=>SITU[x]||x).join(' · ')}${ck.afterDue?' (마감 뒤 답변)':''}</div>`:''})()}
    ${!isPayer&&r.amount&&org&&!p.synthetic?`<button class="btn ${p.paid?'line':''}" data-paid>${p.paid?'받음 확인 취소':'받음 확인'}</button>`:''}
    ${!isPayer&&r.amount&&mine?`${m.account?`<div class="acct"><span class="cap">보낼 곳</span><b>${esc(m.account)}</b></div>`:''}<button class="btn ${p.sent?'line':''}" data-sent>${p.sent?'보냈어요 취소':'송금했어요'}</button>`:''}
    <button class="btn line" data-close>닫기</button>`,
  (s,close)=>{
    const pb=s.querySelector('[data-paid]');if(pb)pb.onclick=async()=>{const paid={...(m.paid||{})};if(p.paid)delete paid[p.id];else paid[p.id]=true;
      try{await Store.db.doc('meets/'+m.id).update({paid,updatedAt:Date.now()});toast(p.paid?'받음 확인을 취소했어요':`${p.name} 님 받음 확인`)}catch(e){toast('저장하지 못했어요')}close()};
    const sb=s.querySelector('[data-sent]');if(sb)sb.onclick=async()=>{try{await Store.db.doc('checkins/'+m.id+'_'+p.id).update({sent:!p.sent,updatedAt:Date.now()});toast(p.sent?'취소했어요':'송금했다고 알렸어요. 총무가 확인하면 초록색으로 바뀌어요')}catch(e){toast('저장하지 못했어요')}close()};
  });
}

/* ---------- 00 홈 · 내 모임 · 공유·알림 ---------- */
let homeSub=null;
function watchMyMeets(){
  if(homeSub)return;
  homeSub=Store.db.collection('meets').where('ownerKey','==',Store.myKey()).onSnapshot(q=>{state.myMeets=q.docs.map(d=>d.data()).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));if(['home','mine','msglist'].includes(state.view))render()},()=>{});
}
function gcard(m){
  return `<button class="gcard" data-open="${m.id}"><div class="t">${esc(titleOf(m))}</div>
    <div class="cap num">${esc(m.date||'')} · 총 ${won((m.items||[]).reduce((a,i)=>a+(i.type==='discount'?-1:1)*(+i.amount||0),0))}원 · 기준 ${(m.rules||[]).length}개</div></button>`;
}
function nav(){
  const it=[['home','홈',SVG.home_i],['mine','내 모임',SVG.people],['msglist','공유·알림',SVG.chat]];
  return `<nav class="nav" aria-label="하단 메뉴">${it.map(([k,l,ic])=>{const on=state.view===k;return `<button data-nav="${k}" ${on?'aria-current="page"':''}>${ic(on?'#1B1D1F':'#686C70')}${l}</button>`}).join('')}</nav>`;
}
function r00(){
  watchMyMeets();unsubAll();
  const list=state.myMeets;
  shell.innerHTML=`<section class="view">
    <header class="hhead"><h1 class="title">홈</h1><div class="icons">
      <button class="icon" data-act="me" aria-label="내 계정">${SVG.user}</button></div></header>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
      <div class="bread" style="width:220px">${SVG.home}</div>
      <b style="font-size:19px;letter-spacing:-.02em;line-height:27px">오늘도 빵끗!</b>
      <span class="cap">${esc(myName()||'')}${myName()?' 님, ':''}모임의 즐거움만 남도록 함께할게요.</span></div>
    <div class="quick">
      <button class="qbtn new" data-act="new"><i>${SVG.plus}</i>새 모임</button>
      <button class="qbtn" data-act="quick" data-tab2="est"><i>${SVG.doc}</i>정산 결과</button>
      <button class="qbtn pay" data-act="quick" data-tab2="pay"><i>${SVG.swap}</i>송금 체크</button></div>
    <div class="sechead"><span class="label">최근 모임</span><button data-nav="mine">모두 보기</button></div>
    ${list.length?`<div class="glist">${list.slice(0,3).map(gcard).join('')}</div>`:`<div class="homeempty"><b style="font-size:14px">아직 만든 모임이 없어요</b><span class="cap">새 모임을 만들면 여기에 쌓여요.</span></div>`}
  </section>${nav()}`;
}
function rMine(){
  watchMyMeets();unsubAll();
  shell.innerHTML=`<section class="view">
    <header class="hhead"><h1 class="title">내 모임</h1><button class="btn small" data-act="new">+ 새 모임</button></header>
    ${state.myMeets.length?`<div class="glist">${state.myMeets.map(gcard).join('')}</div>`:'<div class="homeempty"><b style="font-size:14px">아직 만든 모임이 없어요</b></div>'}
  </section>${nav()}`;
}
function rMsgList(){
  watchMyMeets();unsubAll();
  shell.innerHTML=`<section class="view">
    <header class="hhead"><h1 class="title">공유 · 알림</h1></header>
    <p class="subt" style="margin-top:-6px">단톡방에 정산 메시지를 다시 보내거나, 아직 송금하지 않은 사람에게 알림을 보내요.</p>
    ${state.myMeets.length?state.myMeets.map(m=>`<div class="card" style="gap:10px"><b style="font-size:16px">${esc(titleOf(m))}</b><span class="cap">${esc((m.date||'').replace(/-/g,'.'))} · 결제 ${esc(m.payer||'')}</span>
      <div class="row2"><button class="btn small line" data-invite="${m.id}">정산 메시지 복사</button><button class="btn small" data-open="${m.id}" data-tab2="pay">미입금 알림</button></div></div>`).join(''):'<div class="homeempty"><b style="font-size:14px">공유할 모임이 아직 없어요</b></div>'}
  </section>${nav()}`;
}
function meSheet(){
  const p=state.profile||{};
  sheet(`<h3>내 계정</h3>
    <div class="card" style="gap:6px"><b style="font-size:17px">${esc(p.nickname||'')}</b><span class="cap num">고유번호 ${esc(p.code||'')}</span>
    <span class="cap">${WEB?'모임은 온라인 저장소에 저장돼요. 링크를 아는 사람은 누구나 볼 수 있어요.':Store.mode==='cloud'?'모임은 claude.ai의 이 페이지에 저장돼요. 링크를 받은 참여자도 읽을 수 있어요.':'모임은 이 브라우저에만 저장돼요.'}</span></div>
    <label class="fl">이름(실명) 바꾸기<input class="sf" id="meNick" maxlength="12" value="${esc(p.nickname||'')}"></label>
    <button class="btn" data-ok>저장</button>
    <button class="btn line" data-close>닫기</button>`,
  (s,close)=>{s.querySelector('[data-ok]').onclick=()=>{const v=s.querySelector('#meNick').value.trim();if(!v)return;state.profile={...state.profile,nickname:v};Store.saveProfile(state.profile);close();render();toast('이름을 바꿨어요')}});
}

/* ================= 베타 연구 모드 (A/B 무작위 배정 · 사용 기록 · 설문) =================
   A안: 정산 기준 확인 → 예외(내 상황) 질문 → 내 금액
   B안: 정산 기준 확인 → 내 금액(예외 없음 기준) → 예외(내 상황) 질문 → 다시 계산된 금액
   두 안 모두 질문 내용은 같고, '금액을 보기 전/후'에 묻는 순서만 다르다. */
const Study={
  R:null,key:null,timer:null,
  on(m){return !!(m&&m.study)},
  lsKey(m){return 'bbk.study.'+m.id+'.'+Store.pKey()},
  async load(m){this.R=null;this.key='research/'+m.id+'_'+Store.pKey();
    let r=lsGet(this.lsKey(m),null);
    try{const sn=await withTimeout(Store.db.doc(this.key).get(),6000);if(sn.exists)r={...(r||{}),...sn.data()}}catch(e){}
    this.R=r||null;return this.R},
  async assign(m,consent){
    let arm='A';
    if(consent){let nA=0,nB=0;
      try{if(Store.db.armCounts){const r=await withTimeout(Store.db.armCounts(m.id),6000);nA=r.A||0;nB=r.B||0}
        else{const q=await withTimeout(Store.db.collection('research').where('meetId','==',m.id).get(),6000);q.docs.forEach(d=>{const x=d.data();if(x.consent){x.arm==='A'?nA++:nB++}})}}catch(e){}
      arm=nA<nB?'A':nB<nA?'B':(Math.random()<.5?'A':'B')}
    const now=Date.now();
    this.key='research/'+m.id+'_'+Store.pKey();
    this.R={meetId:m.id,pkey:Store.pKey(),arm,consent:!!consent,consentAt:now,ev:[{e:'consent',t:now,v:consent?1:0}],survey:null,excDone:false,
      amountFirst:null,amountAfterExc:null,amountAtAck:null,device:/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)?'mobile':'desktop',ver:'beta-1'};
    this.save(true);return this.R},
  log(e,v){const R=this.R;if(!R||!R.consent)return;R.ev.push(v===undefined?{e,t:Date.now()}:{e,t:Date.now(),v});if(R.ev.length>400)R.ev=R.ev.slice(-400);this.save()},
  save(now){const R=this.R,m=state.meet;if(!R||!m||R.meetId!==m.id)return;R.updatedAt=Date.now();
    try{const f=researchRows([R],state.cks,m).rows[0];delete f.pid;R.flat=f}catch(e){}lsSet(this.lsKey(m),R);
    clearTimeout(this.timer);const key=this.key,f=()=>Store.db.doc(key).set(JSON.parse(JSON.stringify(R))).catch(()=>{});if(now)f();else this.timer=setTimeout(f,1200)},
  arm(m){return this.on(m)&&this.R&&this.R.consent?this.R.arm:'A'},
  active(m){return this.on(m)&&this.R&&this.R.consent},
};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&Study.R)Study.save(true)});

function rConsent(){
  const m=state.meet;
  shell.innerHTML=`<section class="view">
    ${joinHead()}
    <section class="card consent"><b class="h15">베타 테스트에 함께해 주실래요?</b>
      <div class="cap">‘빵끗’은 국민대학교 ADM Lab 서비스디자인 수업에서 만든 정산 서비스예요. 더 납득되는 정산 방법을 찾는 연구를 위해, 사용 기록과 짧은 설문(약 3분)을 모으고 있어요.</div>
      <ul class="why">
        <li><b>모으는 것</b> · 화면을 넘긴 순서와 시간, 정산 답변(술 여부·참석 차수 등), 설문 응답</li>
        <li><b>연구 자료에 넣지 않는 것</b> · 이름, 연락처, 계좌</li>
        <li>참여자마다 화면 순서가 조금 다를 수 있어요 (무작위 배정)</li>
        <li>참여하지 않아도 정산은 똑같이 할 수 있고, 중간에 그만둬도 불이익이 없어요</li>
        <li>자료는 수업 과제와 학술 논문에만 쓰고, 통계로만 발표해요</li>
      </ul>
      <div class="cap">연구자 · 김연희 (국민대학교 ADM Lab 박사과정)</div>
      <label class="agree"><input type="checkbox" id="cAgree"><span>위 내용을 읽었고, 만 19세 이상이며 연구 참여에 동의해요</span></label>
    </section>
    <div class="grow"></div>
    <div class="cap err" id="cErr" hidden>동의 칸에 체크해 주세요.</div>
    <button class="btn" data-act="consentYes">동의하고 시작하기</button>
    <button class="textlink u" data-act="consentNo">연구 참여 없이 정산만 할게요</button>
  </section>`;
  document.getElementById('cAgree').addEventListener('change',()=>{document.getElementById('cErr').hidden=true});
}

const S5=['전혀 아니다','아니다','보통','그렇다','매우 그렇다'];
const SV=[
  {sec:'금액에 대해'},
  {k:'D1',t:'내 정산 금액은 내가 먹고 마신 것을 잘 반영했다.'},
  {k:'D2',t:'내 정산 금액은 공평했다.'},
  {k:'D3',t:'다른 사람들의 금액과 비교해 내 금액은 적절했다.'},
  {k:'N1',t:'나는 이 금액을 이의 없이 받아들일 수 있었다.'},
  {k:'N2',t:'금액을 보고 나서 바로 송금하기까지 망설임이 없었다.'},
  {sec:'정산 과정에 대해'},
  {k:'P1',t:'정산 과정에서 내 상황을 말할 기회가 충분했다.'},
  {k:'P2',t:'정산 기준이 모든 사람에게 똑같이 적용되었다.'},
  {k:'I1',t:'내 금액이 어떻게 계산되었는지 이해할 수 있었다.'},
  {k:'S1',t:'내 사정(술을 안 마심, 늦게 옴 등)을 알리는 것이 눈치 보였다.'},
  {k:'E1',t:'내 상황을 입력하는 것이 번거로웠다.'},
  {k:'U1',t:'다음 모임에서도 이 방식으로 정산하고 싶다.'},
  {k:'SEQ',t:'전체적으로, 오늘 정산 과정은 얼마나 쉬웠나요?',scale:7,lo:'매우 어려움',hi:'매우 쉬움'},
  {k:'MC',t:'오늘 화면에서 무엇을 먼저 하셨나요?',opts:['내 상황 질문에 먼저 답했어요','내 금액을 먼저 봤어요','잘 기억나지 않아요']},
  {sec:'나에 대해 (통계용)'},
  {k:'age',t:'연령대',opts:['20대','30대','40대','50대 이상']},
  {k:'gender',t:'성별',opts:['여성','남성','응답하지 않음']},
  {k:'payerExp',t:'모임에서 결제(총무)를 맡는 편인가요?',opts:['거의 없어요','가끔','자주','거의 항상']},
  {k:'usual',t:'평소 모임 정산은 주로 어떻게 하나요?',opts:['모두 똑같이 N빵','먹은 만큼 따로','한 사람이 내요','그때그때 달라요']},
  {k:'open',t:'금액을 보고 든 생각이나 불편했던 점이 있다면 적어 주세요. (선택)',text:true},
];
function rSurvey(){
  const a=state.sv||(state.sv={});
  if(!Study.R.ev.some(x=>x.e==='survey_open'))Study.log('survey_open');
  let n=0;
  shell.innerHTML=`<section class="view">
    <div class="toprow"><span class="label" style="color:var(--sub)">베타 테스트 설문</span><span class="label svprog" id="svProg"></span></div>
    <h1 class="title" style="font-size:24px;line-height:34px">정산이 끝났어요.<br>마지막으로 2~3분만!</h1>
    <p class="cap" style="margin-top:-8px">연구에 큰 도움이 돼요. 정답은 없으니 느낀 그대로 골라 주세요.</p>
    ${SV.map(q=>{
      if(q.sec)return `<div class="label svsec">${q.sec}</div>`;
      n++;
      if(q.text)return `<div class="qcard" id="sv-${q.k}"><b>${q.t}</b><textarea class="sf ta" data-svt="${q.k}" maxlength="400">${esc(a[q.k]||'')}</textarea></div>`;
      if(q.opts)return `<div class="qcard" id="sv-${q.k}"><b><span class="svn">${n}</span>${q.t}</b><div class="chips" role="radiogroup" aria-label="${esc(q.t)}">${q.opts.map(o=>`<button class="chip" role="radio" aria-checked="${a[q.k]===o}" data-sv="${q.k}" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div></div>`;
      const sc=q.scale||5;
      return `<div class="qcard" id="sv-${q.k}"><b><span class="svn">${n}</span>${q.t}</b>
        <div class="likert" role="radiogroup" aria-label="${esc(q.t)}">${Array.from({length:sc},(_,i)=>i+1).map(v=>`<button role="radio" aria-checked="${a[q.k]===v}" data-sv="${q.k}" data-v="${v}" aria-label="${v}점${sc===5?' '+S5[v-1]:''}">${v}</button>`).join('')}</div>
        <div class="lk-ends"><span>${q.lo||S5[0]}</span><span>${q.hi||S5[4]}</span></div></div>`;
    }).join('')}
    <div class="cap err" id="svErr" hidden></div>
    <button class="btn" data-act="svsubmit">설문 제출하기</button>
  </section>`;
  shell.querySelectorAll('[data-svt]').forEach(t=>t.addEventListener('input',()=>{a[t.dataset.svt]=t.value}));
  svProgress();
}
function svProgress(){const a=state.sv||{};const req=SV.filter(q=>q.k&&!q.text);const done=req.filter(q=>a[q.k]!==undefined&&a[q.k]!=='').length;
  const el=document.getElementById('svProg');if(el)el.textContent=`${done} / ${req.length}`;}
function svSubmit(){
  const a=state.sv||{};const miss=SV.find(q=>q.k&&!q.text&&(a[q.k]===undefined||a[q.k]===''));
  if(miss){const e=document.getElementById('svErr');e.hidden=false;e.textContent='아직 답하지 않은 문항이 있어요.';const el=document.getElementById('sv-'+miss.k);if(el){el.classList.add('miss');el.scrollIntoView({behavior:'smooth',block:'center'})}return}
  Study.R.survey={...a,open:(a.open||'').trim(),at:Date.now()};Study.R.done=true;Study.log('survey_submit');Study.save(true);
  go('thanks');
}
function rThanks(){
  shell.innerHTML=`<section class="view onb">
    <div style="height:clamp(16px,10vh,100px)"></div>
    <div class="bread" style="width:min(240px,64vw)">${SVG.happy}</div>
    <h1 class="h1" style="margin-top:24px">참여해 주셔서<br>고마워요!</h1>
    <p class="lead" style="margin-top:12px">오늘 정산이 모두 끝났어요.</p>
    <div class="grow"></div>
    <button class="btn" data-act="topay">내 정산 다시 보기</button>
  </section>`;
}

/* ---- 연구 데이터: 한 사람의 기록을 표의 한 줄로 (서버 → 구글 시트) ---- */
function researchRows(rs,cks,m){
  const c=compute(m,cks);
  const first=(R,e,f)=>{const x=R.ev.find(v=>v.e===e&&(!f||f(v)));return x?x.t:null};
  const sec=(a,b)=>a&&b?Math.round((b-a)/1000):'';
  const cols=['meet_id','meet_title','meet_date','meet_rules','meet_auto_noresp','meet_due_min','meet_expected','meet_n_checkins','pid','arm','consent','device','completed_survey','n_checkin_saves','n_edits_after_exc','n_est_open','n_answer_edit_open',
    'ck_situ','ck_after_due','ck_drink','ck_rounds','ck_bday','ck_personal_n','amount_first_seen','amount_after_exc','amount_at_ack','amount_now',
    'sec_consent_to_first_amount','sec_on_exception_screen','sec_consent_to_ack','reached_remit','did_remit','sec_ack_to_remit','sec_consent_to_survey_end',...SV.filter(q=>q.k).map(q=>q.k),'consent_at'];
  const rows=rs.sort((a,b)=>(a.consentAt||0)-(b.consentAt||0)).map((R,i)=>{
    const ck=cks.find(x=>x.pkey===R.pkey)||{};const ev=R.ev||[];
    const saves=ev.filter(x=>x.e==='checkin_saved');const excSaves=saves.filter(x=>x.v&&x.v.exc);
    const tExc=excSaves.length?excSaves[0].t:null;
    const tJ2=tExc?([...ev].reverse().find(x=>x.e==='view'&&x.v==='join2'&&x.t<=tExc)||{}).t:null;
    const sv=R.survey||{};
    const row={pid:'P'+String(i+1).padStart(2,'0'),arm:R.consent?R.arm:'',consent:R.consent?1:0,device:R.device||'',completed_survey:R.survey?1:0,
      n_checkin_saves:saves.length,n_edits_after_exc:Math.max(0,excSaves.length-1),n_est_open:ev.filter(x=>x.e==='est_open').length,n_answer_edit_open:ev.filter(x=>x.e==='edit_open').length,
      meet_id:m.id,meet_title:m.title||'',meet_date:m.date||'',meet_rules:(m.rules||[]).join('|'),meet_auto_noresp:m.autoNoResp?1:0,meet_due_min:m.dueMin||'',meet_expected:m.expected||'',meet_n_checkins:cks.length,
      ck_situ:(ck.situ||[]).join('|'),ck_after_due:ck.afterDue?1:0,ck_drink:ck.drink===undefined?'':(ck.drink?1:0),ck_rounds:(ck.rounds||[]).join('|'),ck_bday:ck.bday?1:0,ck_personal_n:(ck.personal||[]).length,
      amount_first_seen:R.amountFirst??'',amount_after_exc:R.amountAfterExc??'',amount_at_ack:R.amountAtAck??'',amount_now:c.rows[R.pkey]?c.rows[R.pkey].amount:'',
      sec_consent_to_first_amount:sec(R.consentAt,first(R,'amount_seen')),sec_on_exception_screen:sec(tJ2,tExc),sec_consent_to_ack:sec(R.consentAt,first(R,'ack')),
      reached_remit:R.amountAtAck===0?'':ev.some(x=>x.e==='remit_view')?1:0,did_remit:R.amountAtAck===0?'':(()=>{const sv=ev.filter(x=>x.e==='sent');return sv.length?(sv[sv.length-1].v?1:0):(ck.sent?1:0)})(),
      sec_ack_to_remit:sec(first(R,'ack'),first(R,'sent',v=>v.v===1)),sec_consent_to_survey_end:sec(R.consentAt,first(R,'survey_submit')),
      consent_at:R.consentAt?new Date(R.consentAt).toISOString():''};
    SV.filter(q=>q.k).forEach(q=>{row[q.k]=sv[q.k]??''});
    return row});
  return {cols,rows};
}

/* ================= 이벤트 ================= */
shell.addEventListener('change',e=>{if(e.target.id==='f-study'&&state.draft)state.draft.study=e.target.checked});
shell.addEventListener('input',e=>{const t=e.target;if(state.view==='form'&&t.dataset.f){state.draft[t.dataset.f]=t.dataset.f==='expected'?(parseInt(t.value.replace(/[^0-9]/g,''),10)||0):t.value}});
shell.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;const d=b.dataset;
  if(d.nav){if(['home','mine','msglist'].includes(d.nav)&&!state.profile){go('onb1');return}go(d.nav);return}
  if(d.open){openMeet(d.open,'org',d.tab2);return}
  if(d.invite){const m=state.myMeets.find(x=>x.id===d.invite);if(m)copy(msgInvite(m),'정산 메시지를 복사했어요');return}
  if(d.tab){state.tab=d.tab;r07();return}
  if(d.person){personSheet(d.person);return}
  if(d.rule){const sel=state.ruleSel,id=d.rule,r=RULES.find(x=>x.id===id),i=sel.indexOf(id);
    if(i>=0){sel.splice(i,1);toast(`‘${r.name}’ 선택을 뺐어요`)}
    else{sel.push(id);const CL={r2:['r3','r6'],r3:['r2','r6'],r6:['r2','r3']};const gone=(CL[id]||[]).filter(x=>sel.includes(x));
      gone.forEach(x=>{sel.splice(sel.indexOf(x),1);const el=document.querySelector(`[data-rule="${x}"]`);if(el)el.setAttribute('aria-pressed','false')});
      toast(gone.length?`${r.tip} (‘${gone.map(x=>RULES.find(y=>y.id===x).name).join('’, ‘')}’와 함께 고를 수 없어서 뺐어요)`:r.tip)}
    b.setAttribute('aria-pressed',String(sel.includes(id)));document.getElementById('ruleCount').textContent=sel.length;return}
  if(d.itype){state.itemType=d.itype;b.parentElement.querySelectorAll('button').forEach(x=>x.setAttribute('aria-checked',String(x===b)));return}
  if(d.pdel){const ph=(state.photos||[]).find(x=>x.id===d.pdel);state.photos=state.photos.filter(x=>x.id!==d.pdel);state.draft.items=state.draft.items.filter(i=>i.src!==d.pdel);if(ph)try{URL.revokeObjectURL(ph.url)}catch(e){}r051();return}
  if(d.idel){state.draft.items=state.draft.items.filter(i=>i.id!==d.idel);r051();return}
  if(d.sv){const q=SV.find(x=>x.k===d.sv);const v=q.opts?d.v:+d.v;(state.sv||(state.sv={}))[d.sv]=v;b.parentElement.querySelectorAll('button').forEach(x=>x.setAttribute('aria-checked',String(x===b)));b.closest('.qcard').classList.remove('miss');svProgress();return}
  if(d.due){state.draft.dueMin=+d.due;b.parentElement.querySelectorAll('button').forEach(x=>x.setAttribute('aria-checked',String(x===b)));return}
  if(d.q){const v=JSON.parse(d.v);if(d.multi==='1'){const arr=state.ans[d.q]||(state.ans[d.q]=[]);const i=arr.indexOf(v);if(i>=0)arr.splice(i,1);else arr.push(v);b.setAttribute('aria-pressed',String(i<0))}
    else{state.ans[d.q]=v;b.parentElement.querySelectorAll('button').forEach(x=>x.setAttribute('aria-checked',String(x===b)))}
    if(d.q==='situ'){const arr=state.ans.situ||[];
      if(v==='none'&&arr.includes('none'))state.ans.situ=['none'];else if(v!=='none')state.ans.situ=arr.filter(x=>x!=='none');
      const y=window.scrollY;rJoin2();window.scrollTo(0,y);return}
    if(d.q==='personal'){const y=window.scrollY;rJoin2();window.scrollTo(0,y);return}
    const er=document.getElementById('qErr');if(er)er.hidden=true;return}
  switch(d.act){
    case 'to02':go('onb2');break;
    case 'to03':go('onb3');break;
    case 'new':state.ruleSel=null;go('create');break;
    case 'torules':state.ruleSel=null;go('rules');break;
    case 'rulecheck':go('rulecheck');break;
    case 'toform':state.draft=state.draft||{title:'',place:'',date:today(),payer:myName(),account:'',expected:0,items:[]};state.draft.rules=[...state.ruleSel];go('form');setTimeout(()=>document.getElementById('f-title')?.focus(),60);break;
    case 'toitems':{const dr=state.draft,er=document.getElementById('formErr');const f=m=>{er.hidden=false;er.textContent=m};
      if(!dr.title.trim())return f('모임 이름을 적어 주세요.');if(!dr.payer.trim())return f('결제한 사람을 적어 주세요.');go('items');break}
    case 'additem':addItem();break;
    case 'makemeet':makeMeet();break;
    case 'makelink':linkSheet(state.meet);break;
    case 'share':linkSheet(state.meet);break;
    case 'remind':copy(msgRemind(state.meet,compute(state.meet,state.cks)),'미입금 알림을 복사했어요');break;
    case 'editans':{const me=myCk();if(!me)break;Study.log('edit_open');state.joinName=me.name;state.ans={rounds:me.rounds||[],drink:me.drink,bday:me.bday,personal:me.personal||[],situ:me.situ||[]};go('join2');break}
    case 'toggleEst':state.open=!state.open;if(state.open)Study.log('est_open');r07();break;
    case 'ack':if(state.view==='org'){state.tab='pay';r07();break}
      if(!myCk()){go('join');break}
      {const c=compute(state.meet,state.cks),me=myCk();const amt=c.rows[me.pkey]?c.rows[me.pkey].amount:0;const owes=amt>0&&me.pkey!==c.payerId;
        if(Study.active(state.meet)){if(Study.R.amountAtAck==null)Study.R.amountAtAck=amt;if(!Study.R.ev.some(x=>x.e==='ack'))Study.log('ack',amt)}
        if(!owes&&Study.active(state.meet)&&!Study.R.survey){go('survey');break}
        state.tab='pay';r07();window.scrollTo(0,0)}break;
    case 'copyacct':copy(state.meet.account,'계좌를 복사했어요');break;
    case 'copyacctnum':copy(acctNum(state.meet.account),'계좌번호를 복사했어요');break;
    case 'copyamt':{const c=compute(state.meet,state.cks),me=c.ppl.find(x=>x.id===Store.pKey());if(me)copy(String(c.rows[me.id].amount),'금액을 복사했어요');break}
    case 'copyall':{const m=state.meet,c=compute(m,state.cks),me=c.ppl.find(x=>x.id===Store.pKey());const amt=me&&me.id!==c.payerId?c.rows[me.id].amount:0;
      copy(`[${m.title||'모임'} 정산]\n받는 분: ${m.payer||'총무'}\n계좌: ${m.account}${amt?`\n보낼 금액: ${won(amt)}원`:`\n1인 예상: ${won(c.nb)}원`}`,'송금 정보를 복사했어요');break}
    case 'togglesent':{const m=state.meet,c=compute(m,state.cks),me=c.ppl.find(x=>x.id===Store.pKey());if(!me)break;
      Study.log('sent',me.sent?0:1);Store.db.doc('checkins/'+m.id+'_'+me.id).update({sent:!me.sent,updatedAt:Date.now()}).then(()=>{toast(me.sent?'취소했어요':'송금했다고 총무님께 알렸어요!');
        if(!me.sent&&Study.active(m)&&!Study.R.survey)setTimeout(()=>go('survey'),700)}).catch(()=>toast('저장하지 못했어요'));break}
    case 'tosurvey':go('survey');break;
    case 'join1':{const n=(state.joinName||document.getElementById('jName').value||'').trim();if(!n){document.getElementById('jErr').hidden=false;document.getElementById('jName').focus();break}
      state.joinName=n;const me=myCk();state.ans=state.ans||(me?{rounds:me.rounds||[],drink:me.drink,bday:me.bday,personal:me.personal||[]}:{rounds:[roundOf(state.meet)],personal:[]});
      const m=state.meet;
      if(!questions(m).length){state.ans={rounds:[roundOf(m)],personal:[]};saveCheckin(true);break}
      if(Study.arm(m)==='B'&&!(Study.R&&Study.R.excDone)){if(!me)state.ans={rounds:[roundOf(m)],personal:[]};saveCheckin(true);break}
      go('join2');break}
    case 'join2':saveCheckin();break;
    case 'bexc':{const me=myCk();state.joinName=me.name;state.ans={rounds:me.rounds||[],drink:me.drink,bday:me.bday,personal:me.personal||[],situ:me.situ||[]};Study.log('bexc_open');go('join2');break}
    case 'consentYes':{if(!document.getElementById('cAgree').checked){document.getElementById('cErr').hidden=false;break}
      b.disabled=true;Study.assign(state.meet,true).then(()=>go(myCk()?'me':'join'));break}
    case 'consentNo':Study.assign(state.meet,false).then(()=>go(myCk()?'me':'join'));break;
    case 'svsubmit':svSubmit();break;
    case 'receipt':receiptSheet();break;
    case 'topay':state.tab='pay';go('me');break;
    case 'tojoin':go('join');break;
    case 'demoagain':ssSet('bbk.pkey.demo',rid('p'));state.joinName='';state.ans=null;go('join');break;
    case 'asowner':try{sessionStorage.removeItem('bbk.pkey.demo')}catch(e){}go('org');break;
    case 'quick':{const m=state.myMeets[0];if(!m){toast('먼저 새 모임을 만들어 주세요');go('create');break}openMeet(m.id,'org',d.tab2);break}
    case 'me':meSheet();break;
    case 'tohome':try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}state.mid=null;go(state.profile?'home':'onb1');break;
  }
});
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(h.startsWith('m-')&&h.slice(2)!==state.mid){state.ans=null;openMeet(h.slice(2))}});

setInterval(()=>{const m=state.meet;if(!m||!m.deadline)return;const el=document.querySelector('.due');
  const wasOpen=state._open!==false;const open=!isClosed(m);state._open=open;
  if(wasOpen&&!open&&['org','me'].includes(state.view)){r07();return}
  if(el)el.textContent=dueText(m)},20000);
window.__bbk={Store,state,researchRows,Study,compute};
/* ================= 시작 ================= */
(async()=>{
  await Store.init();
  state.profile=await Store.loadProfile();
  const h=location.hash.slice(1);
  if(h.startsWith('m-')&&h.length>3){state.ans=null;shell.innerHTML='<div class="loading">모임을 불러오는 중…</div>';openMeet(h.slice(2));return}
  /* 이미 가입한 사람(두 번째 방문부터)은 온보딩을 건너뛰고 홈으로 */
  if(state.profile&&state.profile.nickname){go('home');return}
  state.view='onb1';render();
})();
