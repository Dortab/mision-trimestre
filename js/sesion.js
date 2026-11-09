/* Mi misión de hoy: un tema, una idea por pantalla, 5 preguntas y un cierre claro. */
const PREGUNTAS_SESION=5;
/* Estas preguntas dependen de una figura o tabla que solo existe dentro de su reto. */
const DEPENDE=/mosaico quedó blanca|para tu gráfica|respondieron en total/;
let sesion=null;

const temasTodos=()=>TEMAS.flatMap((l,w)=>l.map((t,i)=>({...t,w,i,id:temaId(w,i)})).filter(t=>!t.nota));

/* Alterna repasos de lo que costó trabajo con temas nuevos, y equilibra las materias. */
function siguienteTema(){
  const todos=temasTodos(),h_=S.sesiones;
  const debiles=todos.filter(t=>h_[t.id]&&h_[t.id].ok<3&&t.id!==S.ultimaSesion);
  if(debiles.length&&!S.ultimaFueRepaso)return {t:debiles[0],repaso:true};
  const nuevos=todos.filter(t=>!h_[t.id]);
  if(nuevos.length){
    const vistos=w=>todos.filter(t=>t.w===w&&h_[t.id]).length;
    const mundos=[...new Set(nuevos.map(t=>t.w))].sort((a,b)=>vistos(a)-vistos(b)||a-b);
    return {t:nuevos.find(t=>t.w===mundos[0]),repaso:false};
  }
  const orden=[...todos].filter(t=>t.id!==S.ultimaSesion).sort((a,b)=>h_[a.id].ok-h_[b.id].ok||h_[a.id].n-h_[b.id].n);
  return {t:orden[0],repaso:true};
}
function preguntasDe(t){
  const pool=WORLDS[t.w].retos.flatMap(r=>(r.q||[]).filter(q=>q.t===t.i&&!DEPENDE.test(q.s||'')).map(q=>({...q,reto:r.id,o:q.o||[q.v?'Verdadero':'Falso',q.v?'Falso':'Verdadero']})));
  const peso=q=>(S.fallas[q.reto]||[]).includes(claveQ(q))?0:('v' in q?2:1);
  return shuffle(shuffle(pool).sort((a,b)=>peso(a)-peso(b)).slice(0,PREGUNTAS_SESION));
}
function renderHud(){
  const x=xp();$('xp').textContent=x;$('xp-total').textContent=TOTAL_XP;$('bar').style.width=(x/TOTAL_XP*100)+'%';
  $('xp-next').textContent=x>=TOTAL_XP?'Misión completa':`Faltan ${500-(x%500)} XP para el siguiente cofre`;
}
/* Cada pregunta da XP una sola vez: 20 al primer intento y 10 al segundo. */
function acierto(r,p,n,q,v){
  sesion.aciertos++;
  const k=claveQ(q);
  if(S.ganadas[k])return;
  sumarXP(()=>{S.ganadas[k]=1;S.sesPts[q.reto]=(S.sesPts[q.reto]||0)+Math.round(20*v)});
}
function pintar(...nodos){
  $('mision').replaceChildren(h('div',{cls:'sesion','data-w':sesion.t.w},nodos));
  window.scrollTo(0,0);
}
function nuevaSesion(elegido){
  const s=elegido?{t:elegido,repaso:false}:siguienteTema();
  sesion={...s,aciertos:0,xp0:xp(),tarjeta:0,ejemplo:0};
  S.world=s.t.w;save();
  presentar();
}
function presentar(){
  const t=sesion.t,elegir=h('div',{cls:'row'});
  const abrirLista=()=>{
    const sel=h('select',{id:'otro-tema','aria-label':'Elegir otro tema',onchange:e=>{if(e.target.value)nuevaSesion(temasTodos().find(x=>x.id===e.target.value))}},
      h('option',{value:''},'Elige un tema…'),
      WORLDS.map((w,i)=>h('optgroup',{label:w.name},temasTodos().filter(x=>x.w===i).map(x=>h('option',{value:x.id},x.t)))));
    elegir.replaceChildren(sel);sel.focus();
  };
  elegir.append(h('button',{cls:'btn plain',onclick:abrirLista},'Elegir otro tema'));
  pintar(h('article',{cls:'tarjeta'},
    h('p',{cls:'count'},`SPARK te propone · ${WORLDS[t.w].name}`),
    h('h2',{},t.t),
    h('p',{},sesion.repaso?'Este tema vuelve para que hoy te salga mejor.':'Solo este tema por hoy.'),
    h('ul',{cls:'reglas'},h('li',{},'Lees unas tarjetas cortas.'),h('li',{},'Contestas 5 preguntas.'),h('li',{},'Te llevas una chispa de SPARK.')),
    h('div',{cls:'row'},h('button',{cls:'btn main grande',onclick:()=>{sesion.tarjeta=0;tarjetas()}},'Empezar: 10 minutos')),
    elegir));
}
function tarjetas(){
  const t=sesion.t,total=t.e.length+2,i=sesion.tarjeta,cuerpo=[];
  if(i<t.e.length)cuerpo.push(h('p',{cls:'idea',html:t.e[i]}));
  else if(i===t.e.length){
    cuerpo.push(h('h3',{},'Por ejemplo'),h('p',{cls:'idea',html:t.x[sesion.ejemplo%t.x.length]}),
      h('div',{cls:'row'},h('button',{cls:'btn small',onclick:()=>{sesion.ejemplo++;tarjetas()}},'Otro ejemplo')));
  }else cuerpo.push(h('h3',{},'Lo más importante'),h('p',{cls:'idea',html:t.k}));
  const ultima=i===total-1;
  pintar(h('div',{cls:'meter'},h('i',{style:`width:${(i+1)/total*100}%`})),
    h('article',{cls:'tarjeta'},h('p',{cls:'count'},`Tarjeta ${i+1} de ${total}`),...cuerpo),
    h('div',{cls:'row nav-tema'},
      i>0?h('button',{cls:'btn',onclick:()=>{sesion.tarjeta--;tarjetas()}},'Atrás'):null,
      h('button',{cls:'btn main grande',onclick:()=>{if(ultima)return preguntas();sesion.tarjeta++;tarjetas()}},ultima?'Ir a las preguntas':'Entendido')),
    h('div',{cls:'row'},h('button',{cls:'btn plain',onclick:()=>verTema(t.i)},'Ver toda la lección')));
}
function preguntas(){
  const q=preguntasDe(sesion.t),box=h('div',{cls:'reto-b'});
  pintar(h('article',{cls:'tarjeta'},box));
  quiz({id:'sesion',q,intro:q.some(x=>x.reto==='l4')?PACK:undefined},box,()=>cerrar(q.length));
}
function cerrar(n){
  const t=sesion.t,prev=S.sesiones[t.id]||{n:0,ok:0};
  S.sesiones[t.id]={n:prev.n+1,ok:sesion.aciertos};
  S.ultimaSesion=t.id;S.ultimaFueRepaso=sesion.repaso;
  S.chispas=(S.chispas||0)+1;
  const domino=sesion.aciertos>=4;
  if(domino)S.tem[t.id]=true;
  save();renderHud();
  const gano=xp()-sesion.xp0;
  pintar(h('article',{cls:'tarjeta cierre'},
    h('div',{cls:'chispa','aria-hidden':'true'}),
    h('h2',{},'¡Misión cumplida!'),
    h('p',{},`SPARK te dio una chispa. Ya llevas ${S.chispas}.`),
    h('p',{},`Acertaste ${sesion.aciertos} de ${n}${gano?` y ganaste ${gano} XP`:''}.`),
    h('p',{},domino?'Este tema ya quedó como dominado.':'Este tema volverá pronto para que te salga mejor.'),
    h('p',{cls:'intro'},'Buen trabajo por hoy. Si quieres otra misión, primero levántate y toma agua.'),
    h('div',{cls:'row centro'},h('a',{cls:'btn main grande',href:'index.html'},'Terminar por hoy'),h('button',{cls:'btn',onclick:()=>nuevaSesion()},'Otra misión'))));
}
renderHud();nuevaSesion();
