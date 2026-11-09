/* Ayuda y puntos que comparten la guía y Mi misión de hoy. */
function toast(t){const e=$('toast');e.textContent=t;e.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>e.hidden=true,3500)}

const claveQ=q=>q.s||q.c.join();
function marcarFalla(r,q,fallo){
  const id=q.reto||r.id,k=claveQ(q),l=(S.fallas[id]||[]).filter(x=>x!==k);
  S.fallas[id]=fallo?[...l,k]:l;save();
}
const recordatorio=q=>q.t==null?'':`Recuerda: ${TEMAS[S.world][q.t].k}`;
function ligaTema(fb,q){
  if(q.t==null)return;
  fb.append(h('button',{cls:'btn small liga',onclick:()=>verTema(q.t)},`Lo encuentras en: Tema ${q.t+1}, ${TEMAS[S.world][q.t].t}`));
}
/* Muestra la lección encima de lo que se está haciendo, sin perder el lugar. */
function verTema(i){
  const t=TEMAS[S.world][i];
  const d=h('dialog',{cls:'ayuda','data-w':S.world,onclose:()=>d.remove()},
    h('p',{cls:'count'},`Tema ${i+1}`),h('h3',{},t.t),t.e.map(p=>h('p',{html:p})),
    h('section',{cls:'ejemplos'},h('h4',{},'Ejemplos'),h('ul',{},t.x.map(x=>h('li',{html:x})))),
    h('p',{cls:'clave',html:`<b>Lo más importante:</b> ${t.k}`}),
    h('button',{cls:'btn main',onclick:()=>{d.close();d.remove()}},'Volver'));
  document.body.append(d);d.showModal();
}
/* Aplica un cambio de puntos, actualiza el contador y avisa si se abrió un cofre. */
function sumarXP(cambio){
  const a=xp();cambio();save();const b=xp();renderHud();
  if(b>a){const e=$('xp-mas');e.textContent=`+${b-a}`;e.classList.remove('sube');void e.offsetWidth;e.classList.add('sube')}
  const c=Math.floor(b/500);
  if(c>Math.floor(a/500)){toast(`Abriste un cofre: ${S.rewards[c-1]}`);return true}
  return false;
}
