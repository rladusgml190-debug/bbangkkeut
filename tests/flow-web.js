const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:390,height:844}});
const fake=require('fs').readFileSync(__dirname+'/fake-supabase.js','utf8');await ctx.route('**/vendor/supabase.js',r=>r.fulfill({contentType:'application/javascript',body:fake}));
const errs=[];const file='http://127.0.0.1:8765/';
const mk=async()=>{const p=await ctx.newPage();p.on('pageerror',e=>errs.push(e.message));return p};
const A=await mk();await A.goto(file);await A.waitForTimeout(400);
const h=p=>p.evaluate(()=>document.querySelector('h1')?.innerText.replace(/\n/g,' '));
let n=0;const shot=async(p,name)=>{await p.waitForTimeout(250);await p.screenshot({path:`webtest/s${String(++n).padStart(2,'0')}_${name}.png`})};
const log=[];
await A.click('[data-act=to02]');await A.click('[data-act=to03]');await A.fill('#suNick','연희');await A.click('#suSubmit');log.push(await h(A));
await A.click('[data-act=torules]');await A.click('[data-rule=r8]');await A.click('[data-act=rulecheck]');log.push(await h(A));await shot(A,'0402');
await A.click('[data-act=toform]');await A.waitForTimeout(100);
await A.fill('#f-title','팀 회식');await A.fill('#f-place','1차 횟집');await A.fill('#f-account','카카오뱅크 3333-00-0000000');await A.fill('#f-expected','6');await shot(A,'05auto');
log.push(await h(A));await shot(A,'05');
await A.click('[data-act=toitems]');log.push(await h(A));
await A.fill('#iName','모둠회');await A.fill('#iAmt','86000');await A.click('[data-act=additem]');
await A.fill('#iName','참이슬 × 12');await A.fill('#iAmt','66000');await A.click('[data-itype=drink]');await A.click('[data-act=additem]');
await A.waitForTimeout(3000);await A.screenshot({path:'v4/full0501.png',fullPage:true});await shot(A,'0501');
await A.click('[data-act=makemeet]');await A.waitForTimeout(200);log.push(await h(A));await shot(A,'06');
await A.click('[data-act=makelink]');await A.waitForTimeout(150);const link=await A.$eval('.linkbox span',x=>x.textContent);log.push(link);await shot(A,'06sheet');
await A.click('[data-status]');await A.waitForTimeout(300);log.push(await h(A));
const gid=link.split('#m-')[1];
const people=[['서연',[1],false,false],['준호',[2],true,false],['지우',[1],true,true],['연희',[1],true,false]];
let k=0;const W=t=>new Promise(r=>setTimeout(r,t));
for(const [name,rounds,drink,bday] of people){const P=await mk();await P.addInitScript(()=>sessionStorage.setItem('bbk.pkey.demo','p'+Math.random().toString(36).slice(2)));await P.goto(file+'#m-'+gid);await W(700);
  if(k===0){log.push('참여자 첫 화면: '+await h(P));await shot(P,'consent');}
  if(await P.$('#cAgree')){if(k===3){await P.click('[data-act=consentNo]')}else{await P.check('#cAgree');await P.click('[data-act=consentYes]')}await W(500)}
  if(k===0)await shot(P,'join');
  await P.fill('#jName',name);await P.click('[data-act=join1]');await W(500);
  let arm='A',first='';
  if(await P.$('[data-act=bexc]')){arm='B';first=await P.$eval('.ea',x=>x.innerText);await shot(P,'B_preview_'+k);await P.click('[data-act=bexc]');await W(300)}
  const sel=await P.$$eval('[data-q=rounds]',a=>a.filter(x=>x.getAttribute('aria-pressed')==='true').map(x=>x.dataset.v));
  for(const v of ['1','2','3']){const want=rounds.includes(+v),has=sel.includes(v);if(want!==has)await P.click(`[data-q=rounds][data-v="${v}"]`)}
  await P.click(`[data-q=drink][data-v="${drink}"]`);await P.click(`[data-q=bday][data-v="${bday}"]`);
  await P.click(`[data-q=situ][data-v='"none"']`);
  if(k===0)await shot(P,'join2');
  await P.click('[data-act=join2]');await W(500);
  const amt=await P.$eval('.ea',x=>x.innerText);
  log.push(`${name}: arm=${k===3?'(동의 안 함)':arm} ${first?'처음 '+first+' → ':''}${amt} note=${(await P.$$eval('.cap.note',a=>a.map(x=>x.innerText))).join('/')}`);
  await P.click('[data-act=ack],[data-act=topay]');await W(400);if(!(await P.$('[data-act=svsubmit]'))&&(await P.$('.paybar [data-act=togglesent]'))){log.push(name+' 송금 화면 → 송금했어요');await P.click('.paybar [data-act=togglesent]');await W(1300)}
  if(await P.$('[data-act=svsubmit]')){
    if(k===0)await shot(P,'survey_top');
    await P.click('[data-act=svsubmit]');await W(200);log.push('빈 설문 제출 → '+await P.$eval('#svErr',x=>x.innerText));
    for(const g of await P.$$('.likert')){const bs=await g.$$('button');await bs[3].click()}
    for(const g of await P.$$('.qcard .chips')){const bs=await g.$$('button');await bs[0].click()}
    await P.fill('[data-svt=open]','금액이 바로 보여서 좋았어요');
    if(k===0)await P.screenshot({path:'webtest/full_survey.png',fullPage:true});
    await P.click('[data-act=svsubmit]');await W(500);log.push('설문 후: '+await h(P));
    if(k===0)await shot(P,'thanks');
    await P.click('[data-act=topay]');await W(300);log.push('설문 후 송금바: '+(await P.$eval('.paybar',x=>x.innerText.replace(/\n/g,' ')).catch(()=>'없음')));
  }else log.push('설문 없음 → '+await h(P));
  k++;await P.close();}
await A.waitForTimeout(500);
const head=await A.$$eval('.mhead span,.mhead button',a=>a.map(x=>x.innerText));
await shot(A,'07org_est');
await A.click('[data-tab=pay]');await A.waitForTimeout(150);
const rows=await A.$$eval('.pcard',a=>a.map(x=>x.innerText.replace(/\n/g,' | ')));
await shot(A,'07org_pay');
const csv=await A.evaluate(async()=>{let log2='';const {Store,state,researchRows}=window.__bbk;const all=JSON.parse(localStorage.getItem('fake.rows')||'{}');const rs=Object.values(all).filter(x=>x.coll==='research').map(x=>x.data);const {cols,rows}=researchRows(rs,state.cks,state.meet);log2=rs.map(r=>JSON.stringify(r.flat&&{arm:r.flat.arm,auto:r.flat.meet_auto_noresp,D1:r.flat.D1,first:r.flat.amount_first_seen})).join(' ; ');return 'FLAT '+log2+'\n'+[cols.join(','),...rows.map(r=>cols.map(k=>r[k]).join(','))].join('\n')});
log.push('CSV:\n'+csv);
await A.evaluate(async()=>{const {Store,state}=window.__bbk;await Store.db.doc('meets/'+state.meet.id).update({deadline:Date.now()-1000})});await A.waitForTimeout(400);
{const P=await mk();await P.addInitScript(()=>sessionStorage.setItem('bbk.pkey.demo','plate'));await P.goto(file+'#m-'+gid);await P.waitForTimeout(700);
 if(await P.$('#cAgree')){await P.click('[data-act=consentNo]');await P.waitForTimeout(400)}
 log.push('마감 후 참여자: '+(await P.$eval('.warn',x=>x.innerText).catch(()=>'경고 없음')));
 await P.fill('#jName','민지');await P.click('[data-act=join1]');await P.waitForTimeout(500);log.push('마감 후 질문 화면: '+(await P.$eval('.warn',x=>x.innerText).catch(()=>'-')));await P.click(`[data-q=situ][data-v='"none"']`);for(const q of ['drink','bday']){const b=await P.$(`[data-q=${q}][data-v="false"]`);if(b)await b.click()}await P.click('[data-act=join2]');await P.waitForTimeout(500);log.push('마감 후 금액: '+await P.$eval('.ea',x=>x.innerText)+' / '+await P.$eval('#due',x=>x.innerText));await P.close();}
await A.waitForTimeout(400);await A.click('[data-tab=est]');await A.waitForTimeout(200);await shot(A,'07org_closed');
log.push('마감 후 총무: '+(await A.$$eval('.mhead span,.cap.note',a=>a.map(x=>x.innerText))).join(' / '));
console.log(log.join('\n'));console.log('HEAD',head);console.log(rows.join('\n'));console.log('errors',errs);
await b.close();})();
