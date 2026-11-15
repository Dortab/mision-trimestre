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
  if(c>Math.floor(a/500)){abrirCofre(c);return true}
  return false;
}

/* Pantalla de cofre abierto. Hay dos clases de cofre:
   'xp' (cada 500 XP, premia lo bien que le va) y 'constancia' (cada 5 chispas, premia terminar misiones). */
function abrirCofre(n,clase='xp'){
  const cons=clase==='constancia';
  const premio=cons?premioChispa(n):((S.rewards[n-1]||'').trim()||'Un premio sorpresa');
  registrar('cofre',{n,premio,clase});
  const conf=Array.from({length:24},(_,i)=>h('i',{style:`--x:${(i*37)%100}%;--d:${(i%6)*.12}s;--c:${['#F5B700','#3B5BDB','#C2255C','#1B7F4B','#C2410C','#0B7F72'][i%6]}`}));
  const d=h('dialog',{cls:'cofre-pop'+(cons?' cofre-constancia':''),'aria-labelledby':'cofre-tit',onclose:()=>d.remove()},
    h('div',{cls:'confeti','aria-hidden':'true'},conf),
    h('div',{cls:'cofre-dibujo','aria-hidden':'true'},h('span',{cls:'tapa'}),h('span',{cls:'caja'}),h('span',{cls:'brillo'})),
    h('p',{cls:'count'},cons?`Cofre de constancia ${n} · ${n*CADA_CHISPAS} chispas`:`Cofre ${n} · ${n*500} XP`),
    h('h2',{id:'cofre-tit'},cons?'¡Cofre de constancia!':'¡Abriste un cofre!'),
    cons?h('p',{},`Terminaste ${CADA_CHISPAS} misiones más. Eso es esfuerzo de verdad.`):null,
    h('p',{},'Tu premio es:'),
    h('p',{cls:'premio'},premio),
    h('p',{cls:'intro'},'Enséñale esta pantalla a tu papá o a tu mamá para recibirlo.'),
    h('button',{cls:'btn main grande',onclick:()=>{d.close();d.remove()}},'¡Genial!'));
  document.body.append(d);d.showModal();
  sonido('cofre');
}
