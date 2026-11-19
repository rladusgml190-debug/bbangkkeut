// 실제 웹 앱(가짜 저장소)으로 A안·B안 참여자 화면을 순서대로 캡처
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});
const fake=fs.readFileSync(__dirname+'/fake-supabase.js','utf8');await ctx.route('**/vendor/supabase.js',r=>r.fulfill({contentType:'application/javascript',body:fake}));
const errs=[];const mk=async()=>{const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));return p};const W=t=>new Promise(r=>setTimeout(r,t));
const base='http://127.0.0.1:8765/';const shot=async(p,n)=>{await p.addStyleTag({content:'.toast,[data-act=asowner],[data-act=demoagain]{display:none!important}'}).catch(()=>{});await W(350);await p.evaluate(()=>window.scrollTo(0,0));await W(100);await p.screenshot({path:`cap/${n}.png`});};
const A=await mk();await A.goto(base);await W(500);
await A.click('[data-act=to02]');await A.click('[data-act=to03]');await A.fill('#suNick','연희');await A.click('#suSubmit');
await A.click('[data-act=torules]');await W(100);await A.click('[data-act=rulecheck]');await A.click('[data-act=toform]');await W(100);
await A.fill('#f-title','SVA 동문회');await A.fill('#f-place','2차 호프');await A.fill('#f-account','카카오뱅크 3333-01-2345678');await A.fill('#f-expected','6');await A.click('[data-act=toitems]');await W(100);
for(const [n,a,t] of [['모둠 치킨',32000,'common'],['감자튀김',14000,'common'],['생맥주 500 × 8',40000,'drink'],['하이볼 × 2',16000,'drink']]){await A.fill('#iName',n);await A.fill('#iAmt',String(a));if(t==='drink')await A.click('[data-itype=drink]');else await A.click('[data-itype=common]');await A.click('[data-act=additem]')}
await A.click('[data-act=makemeet]');await W(200);await A.click('[data-act=makelink]');await W(100);await A.click('[data-status]');await W(300);
const gid=await A.evaluate(()=>window.__bbk.state.meet.id);
// 미리 두 명 체크인 (금액이 자연스럽게 보이도록)
for(const [nm,drink,key] of [['지우',true,'preJ'],['민수',true,'preM'],['하늘',false,'preH']]){const P=await mk();P.on('console',m=>console.log('console',m.type(),m.text()));await P.addInitScript(k=>sessionStorage.setItem('bbk.pkey.demo',k),key);await P.goto(base+'#m-'+gid);await W(500);
  await P.click('[data-act=consentNo]');await W(300);await P.fill('#jName',nm);await P.click('[data-act=join1]');await W(300);
  for(const v of ['1','2']){const s=await P.$$eval('[data-q=rounds][aria-pressed=true]',a=>a.map(x=>x.dataset.v));if(!s.includes(v))await P.click(`[data-q=rounds][data-v="${v}"]`)}
  await P.click(`[data-q=drink][data-v="${drink}"]`);await P.click(`[data-q=situ][data-v='"none"']`);await P.click('[data-act=join2]');await W(500);console.log('pre',nm,await P.evaluate(()=>window.__bbk.state.view+' cks='+window.__bbk.state.cks.length+' btn='+!!document.querySelector('[data-act=join2]')+' toast='+[...document.querySelectorAll('.toast')].map(x=>x.innerText).join('|')),await P.$eval('#qErr',x=>x.hidden?'':x.innerText).catch(()=>''));await P.close()}
async function run(arm,name){const P=await mk();await P.addInitScript(k=>sessionStorage.setItem('bbk.pkey.demo',k),'cap'+arm);await P.goto(base+'#m-'+gid);await W(600);
  await shot(P,`${arm}01_동의`);await P.check('#cAgree');
  await P.evaluate(a=>{const S=window.__bbk.Study;const orig=S.assign.bind(S);S.assign=async(m,c)=>{const R=await orig(m,c);R.arm=a;S.save(true);return R}},arm);
  await P.click('[data-act=consentYes]');await W(500);await P.fill('#jName',name);await shot(P,`${arm}02_이름_정산기준`);
  await P.click('[data-act=join1]');await W(500);
  if(arm==='B'){await shot(P,`${arm}03_내금액_예외없음`);await P.click('[data-act=bexc]');await W(300)}
  for(const v of ['1','2']){const s=await P.$$eval('[data-q=rounds][aria-pressed=true]',a=>a.map(x=>x.dataset.v));if(!s.includes(v))await P.click(`[data-q=rounds][data-v="${v}"]`)}
  await P.click(`[data-q=drink][data-v="false"]`);await P.click(`[data-q=situ][data-v='"none"']`);
  await shot(P,arm==='A'?'A03_내상황질문':'B04_내상황질문');
  await P.click('[data-act=join2]');await W(600);await shot(P,arm==='A'?'A04_내금액':'B05_다시계산된금액');
  await P.click('[data-act=receipt]');await W(400);await shot(P,arm==='A'?'A05_정산영수증':'B06_정산영수증');await P.click('.sheet [data-close]');await W(200);
  await P.click('[data-act=ack]');await W(500);await shot(P,arm==='A'?'A06_송금':'B07_송금');
  await P.click('.paybar [data-act=togglesent]');await W(1500);await shot(P,arm==='A'?'A07_설문':'B08_설문');
  for(const g of await P.$$('.likert')){const bs=await g.$$('button');await bs[3].click()}for(const g of await P.$$('.qcard .chips')){const bs=await g.$$('button');await bs[0].click()}
  await P.click('[data-act=svsubmit]');await W(600);await shot(P,arm==='A'?'A08_끝':'B09_끝');await P.close()}
await run('A','서연');await run('B','준호');
console.log('errors',errs);await b.close()})();
