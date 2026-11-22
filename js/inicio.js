/* Página de inicio: resumen del avance, mundos y recompensas. */
const avance=w=>retosGuia(w).filter(r=>S.done[r.id]).length;
const ir=w=>{S.world=w;save()};

function renderInicio(){
  const x=xp(),retos=WORLDS.reduce((n,_,w)=>n+retosGuia(w).length,0),ganados=WORLDS.reduce((n,_,w)=>n+avance(w),0),dominados=WORLDS.reduce((n,_,w)=>n+temasDe(w).filter(t=>S.tem[t.id]).length,0);
  $('xp').textContent=x;$('xp-total').textContent=TOTAL_XP;
  $('bar').style.width=(x/TOTAL_XP*100)+'%';
  $('temas').textContent=`${dominados} de ${TOTAL_TEMAS}`;
  $('retos-n').textContent=`${ganados} de ${retos}`;
  const ch=S.chispas||0,fal=CADA_CHISPAS-ch%CADA_CHISPAS;
  $('chispas').textContent=ch;
  $('chispas-txt').textContent=`chispas · ${fal===1?'falta 1':`faltan ${fal}`} para el cofre de constancia`;
  $('mundos').replaceChildren(...WORLDS.map((w,i)=>{
    const d=avance(i),n=retosGuia(i).length,t=temasDe(i).length;
    return h('a',{cls:'mundo','data-w':i,href:`guia.html#mundo${i+1}`,onclick:()=>ir(i)},
      h('span',{cls:'mundo-n'},`Mundo ${i+1}`),h('h3',{},w.name),h('p',{},w.lead),
      h('span',{cls:'mundo-p'},`${t} temas · ${d} de ${n} retos${S.examenes[i]?` · Examen: ${S.examenes[i].mejor}`:''}`),
      h('span',{cls:'mini'},h('i',{style:`width:${d/n*100}%`})));
  }));
  document.querySelectorAll('#chests .chest').forEach((c,i)=>c.classList.toggle('open',x>=(i+1)*500));
  const vuelta=ch%(CADA_CHISPAS*S.premiosChispa.length);
  document.querySelectorAll('#chests-chispa .chest').forEach((c,i)=>c.classList.toggle('open',ch>0&&vuelta>=(i+1)*CADA_CHISPAS));
}
function renderCofres(){
  $('chests').replaceChildren(...S.rewards.map((r,i)=>{
    const id='reward-'+i;
    const input=h('textarea',{id,rows:'2','aria-label':`Recompensa de ${(i+1)*500} XP`,oninput:e=>{S.rewards[i]=e.target.value;save()}});
    input.value=r;
    return h('div',{cls:'chest'},h('label',{for:id},`${(i+1)*500} XP`),input)}));
  $('chests-chispa').replaceChildren(...S.premiosChispa.map((r,i)=>{
    const id='premio-chispa-'+i;
    const input=h('textarea',{id,rows:'2','aria-label':`Premio de ${(i+1)*CADA_CHISPAS} chispas`,oninput:e=>{S.premiosChispa[i]=e.target.value;save()}});
    input.value=r;
    return h('div',{cls:'chest chest-chispa'},h('label',{for:id},`✦ ${(i+1)*CADA_CHISPAS} chispas`),input)}));
}
function renderReset(){
  const r=$('reset');
  r.replaceChildren(h('button',{cls:'btn plain',onclick:()=>{
    r.replaceChildren('¿Borrar todo el progreso? ',h('button',{cls:'btn small',onclick:()=>{S={...S,done:{},pts:{},sesPts:{},ganadas:{},fallas:{},tem:{},examenes:{},exActual:{},sesiones:{},iniciadas:{},refuerzo:{},chispas:0,ultimaSesion:null,ultimaFueRefuerzo:false,fields:{},world:0,bitacora:{v:1,dias:{},ev:[]}};save();renderInicio();renderReset()}},'Sí, borrar'),' ',h('button',{cls:'btn small',onclick:renderReset},'Cancelar'));
  }},'Empezar de cero'));
}
renderCofres();renderInicio();renderReset();
