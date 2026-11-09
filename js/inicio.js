/* Página de inicio: resumen del avance, mundos y recompensas. */
const avance=w=>WORLDS[w].retos.filter(r=>S.done[r.id]).length;
const ir=w=>{S.world=w;save()};

function renderInicio(){
  const x=xp(),retos=TOTAL_XP/100,dominados=WORLDS.reduce((n,_,w)=>n+temasDe(w).filter(t=>S.tem[t.id]).length,0);
  $('xp').textContent=x;$('xp-total').textContent=TOTAL_XP;
  $('bar').style.width=(x/TOTAL_XP*100)+'%';
  $('temas').textContent=`${dominados} de ${TOTAL_TEMAS}`;
  $('retos-n').textContent=`${Object.keys(S.done).length} de ${retos}`;
  const siguiente=WORLDS.findIndex((_,w)=>avance(w)<WORLDS[w].retos.length),destino=siguiente<0?0:siguiente;
  const cta=$('continuar');
  cta.href=`guia.html#mundo${destino+1}`;
  cta.textContent=x===0?'Empezar la misión':(siguiente<0?'Repasar la guía':`Seguir en ${WORLDS[destino].name}`);
  cta.onclick=()=>ir(destino);
  $('mundos').replaceChildren(...WORLDS.map((w,i)=>{
    const d=avance(i),n=w.retos.length,t=temasDe(i).length;
    return h('a',{cls:'mundo','data-w':i,href:`guia.html#mundo${i+1}`,onclick:()=>ir(i)},
      h('span',{cls:'mundo-n'},`Mundo ${i+1}`),h('h3',{},w.name),h('p',{},w.lead),
      h('span',{cls:'mundo-p'},`${t} temas · ${d} de ${n} retos${S.examenes[i]?` · Examen: ${S.examenes[i].mejor}`:''}`),
      h('span',{cls:'mini'},h('i',{style:`width:${d/n*100}%`})));
  }));
  document.querySelectorAll('.chest').forEach((c,i)=>c.classList.toggle('open',x>=(i+1)*500));
}
function renderCofres(){
  $('chests').replaceChildren(...S.rewards.map((r,i)=>{
    const id='reward-'+i;
    const input=h('textarea',{id,rows:'2','aria-label':`Recompensa de ${(i+1)*500} XP`,oninput:e=>{S.rewards[i]=e.target.value;save()}});
    input.value=r;
    return h('div',{cls:'chest'},h('label',{for:id},`${(i+1)*500} XP`),input)}));
}
function renderReset(){
  const r=$('reset');
  r.replaceChildren(h('button',{cls:'btn plain',onclick:()=>{
    r.replaceChildren('¿Borrar todo el progreso? ',h('button',{cls:'btn small',onclick:()=>{S={...S,done:{},pts:{},fallas:{},tem:{},examenes:{},fields:{},world:0};save();renderInicio();renderReset()}},'Sí, borrar'),' ',h('button',{cls:'btn small',onclick:renderReset},'Cancelar'));
  }},'Empezar de cero'));
}
renderCofres();renderInicio();renderReset();
