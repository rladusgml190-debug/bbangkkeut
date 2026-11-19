// 테스트용 가짜 Supabase: localStorage에 행을 저장, 다른 탭엔 storage 이벤트로 변경 알림
(function(){const K='fake.rows';const load=()=>{try{return JSON.parse(localStorage.getItem(K)||'{}')}catch(e){return {}}};const save=r=>localStorage.setItem(K,JSON.stringify(r));
const ls=[];window.addEventListener('storage',e=>{if(e.key===K)ls.forEach(f=>f({}))});
function builder(){const st={filters:[],op:'select',single:false};const b={
  select(){return b},eq(c,v){st.filters.push([c,v]);return b},limit(){return b},maybeSingle(){st.single=true;return b},
  upsert(row){st.op='upsert';st.row=row;return b},delete(){st.op='delete';return b},
  then(res,rej){try{const rows=load();const val=(r,c)=>c.startsWith('data->>')?(r.data[c.slice(7)]==null?null:String(r.data[c.slice(7)])):r[c];
    const match=r=>st.filters.every(([c,v])=>val(r,c)===v);
    if(st.op==='upsert'){if(!/^(meets|checkins|research)\/[A-Za-z0-9_\-]+$/.test(st.row.path))return res({error:{message:'check violation'}});rows[st.row.path]=JSON.parse(JSON.stringify(st.row));save(rows);ls.forEach(f=>f({}));return res({error:null})}
    if(st.op==='delete'){Object.values(rows).filter(match).forEach(r=>delete rows[r.path]);save(rows);ls.forEach(f=>f({}));return res({error:null})}
    const out=Object.values(rows).filter(r=>r.coll!=='research').filter(match);return res({data:st.single?(out[0]||null):out,error:null})}catch(e){rej(e)}}};return b}
window.supabase={createClient(){return {functions:{invoke:async()=>({data:null,error:{message:'no_key'}})},rpc:async(fn,a)=>{const rows=load();if(fn==='bbk_research_put'){rows['research/'+a.p_id]={path:'research/'+a.p_id,coll:'research',data:a.p_data};save(rows);return {error:null}}if(fn==='bbk_research_arms'){const r={A:0,B:0};Object.values(rows).forEach(x=>{if(x.coll==='research'&&x.data.meetId===a.p_meet&&x.data.consent)r[x.data.arm]++});return {data:r,error:null}}return {error:{message:'no fn'}}},from:()=>builder(),channel(){const ch={on(_a,_b,f){ls.push(f);return ch},subscribe(){return ch}};return ch}}}};})();
