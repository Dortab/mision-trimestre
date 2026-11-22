/* Mi bitácora: calendario de días trabajados, detalle de cada día, progreso por mundo y exámenes. */
const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const SEMANA=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
const B=bit();
const hoy=diaClave();
let verMes=new Date();verMes.setDate(1);
let diaSel=hoy;

const fecha=k=>{const [a,m,d]=k.split('-').map(Number);return new Date(a,m-1,d)};
const segDe=k=>(B.dias[k]&&B.dias[k].seg)||0;
const evDe=k=>B.ev.filter(e=>e.dia===k);
const activo=k=>segDe(k)>=60||evDe(k).length>0;
function tiempo(s){
  if(s<60)return s?'menos de 1 min':'0 min';
  const m=Math.round(s/60);
  return m>=60?`${Math.floor(m/60)} h ${m%60} min`:`${m} min`;
}
function nivel(k){
  const m=segDe(k)/60;
  if(m>=20)return 3;
  if(m>=10)return 2;
  return activo(k)?1:0;
}
function racha(){
  const d=new Date();let n=0;
  if(!activo(diaClave(d)))d.setDate(d.getDate()-1);
  while(activo(diaClave(d))){n++;d.setDate(d.getDate()-1)}
  return n;
}
const fallados=e=>(e.temas||[]).filter(x=>x.ok<x.n).map(x=>x.titulo).join(', ');
const mundo=w=>WORLDS[w]?WORLDS[w].name:'';
/* replaceChildren escribiría «null» en pantalla: se quitan los vacíos. */
const poner=(el,...n)=>el.replaceChildren(...n.filter(x=>x!=null&&x!==false));

function renderHud(){
  const x=xp();$('xp').textContent=x;$('xp-total').textContent=TOTAL_XP;$('bar').style.width=(x/TOTAL_XP*100)+'%';
  $('xp-next').textContent=x>=TOTAL_XP?'Misión completa':`Faltan ${500-(x%500)} XP para el siguiente cofre`;
}
function renderResumen(){
  let semana=0;const d=new Date();
  for(let i=0;i<7;i++){semana+=segDe(diaClave(d));d.setDate(d.getDate()-1)}
  const pref=`${verMes.getFullYear()}-${String(verMes.getMonth()+1).padStart(2,'0')}`;
  const delMes=new Set([...Object.keys(B.dias),...B.ev.map(e=>e.dia)].filter(k=>k.startsWith(pref)&&activo(k))).size;
  const r=racha();
  $('resumen').replaceChildren(
    h('div',{},h('b',{},String(r)),h('span',{},r===1?'día seguido':'días seguidos')),
    h('div',{},h('b',{},tiempo(semana)),h('span',{},'en los últimos 7 días')),
    h('div',{},h('b',{},String(delMes)),h('span',{},`días trabajados en ${MESES[verMes.getMonth()]}`)));
}
function renderCal(){
  const a=verMes.getFullYear(),m=verMes.getMonth();
  $('mes-titulo').textContent=`${MESES[m][0].toUpperCase()+MESES[m].slice(1)} ${a}`;
  const ahora=new Date();
  $('mes-sig').disabled=a>ahora.getFullYear()||(a===ahora.getFullYear()&&m>=ahora.getMonth());
  const vacios=(new Date(a,m,1).getDay()+6)%7,dias=new Date(a,m+1,0).getDate();
  const celdas=['L','M','M','J','V','S','D'].map(d=>h('span',{cls:'cal-d','aria-hidden':'true'},d));
  for(let i=0;i<vacios;i++)celdas.push(h('span',{cls:'cal-v'}));
  for(let d=1;d<=dias;d++){
    const k=`${a}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,futuro=k>hoy,s=segDe(k),n=evDe(k).length;
    celdas.push(h('button',{cls:`cal-dia n${nivel(k)}${k===hoy?' hoy':''}`,'aria-pressed':k===diaSel?'true':'false',
      'aria-label':`${d} de ${MESES[m]}: ${activo(k)?`${tiempo(s)}, ${n} ${n===1?'actividad':'actividades'}`:'sin actividad'}`,
      ...(futuro?{disabled:''}:{}),onclick:()=>{diaSel=k;renderCal();renderDetalle()}},
      h('span',{cls:'cal-num'},String(d)),s>=60?h('small',{},`${Math.round(s/60)}′`):null));
  }
  $('cal').replaceChildren(...celdas);
}
function lista(titulo,items){
  return items.length?h('div',{cls:'bit-lista'},h('h3',{},titulo),h('ul',{},items.map(x=>h('li',{html:x})))):null;
}
function renderDetalle(){
  const k=diaSel,f=fecha(k),ev=evDe(k).sort((a,b)=>a.t-b.t),s=segDe(k);
  const de=t=>ev.filter(e=>e.tipo===t);
  const misiones=de('mision').map(e=>`<b>${mundo(e.w)}:</b> ${e.titulo} · ${e.ok} de ${e.n} ${e.v?'a la primera':'aciertos'}${e.v&&e.conPista?` (+${e.conPista} con pista)`:''}${e.xp?` · +${e.xp} XP`:''}${e.domino?' · <span class="ok">tema demostrado</span>':''}`);
  const lecciones=de('leccion').map(e=>`<b>${mundo(e.w)}:</b> Tema ${e.i+1}, ${e.titulo}`);
  const temas=de('tema').map(e=>`<b>${mundo(e.w)}:</b> ${e.titulo}`);
  /* Un reto puede jugarse varias veces el mismo día: se muestra una vez, con su mejor resultado. */
  const retos=Object.values(de('reto').reduce((o,e)=>{const p=o[e.reto]||{...e,veces:0,gano:false};p.veces++;p.gano=p.gano||e.pass;o[e.reto]=p;return o},{}))
    .map(e=>`<b>${mundo(e.w)}:</b> ${e.titulo} · ${e.gano?'<span class="ok">superado</span>':'intentado'}${e.veces>1?` (${e.veces} veces)`:''}`);
  const cofres=de('cofre').map(e=>`${e.clase==='constancia'?'Cofre de constancia':'Cofre'} ${e.n}: <b>${e.premio}</b>`);
  const exs=de('examen').map(e=>`<b>${mundo(e.w)}:</b> calificación <b>${e.nota}</b> (${e.ok} de ${e.n})${fallados(e)?` · a reforzar: ${fallados(e)}`:''}`);
  const algo=cofres.length+misiones.length+lecciones.length+temas.length+retos.length+exs.length;
  poner($('detalle'),
    h('p',{cls:'count'},k===hoy?'Hoy':'Día seleccionado'),
    h('h2',{},`${SEMANA[f.getDay()][0].toUpperCase()+SEMANA[f.getDay()].slice(1)} ${f.getDate()} de ${MESES[f.getMonth()]}`),
    h('div',{cls:'bit-dia'},h('div',{},h('b',{},tiempo(s)),h('span',{},'de trabajo')),h('div',{},h('b',{},String(ev.length)),h('span',{},ev.length===1?'actividad':'actividades'))),
    lista('Misiones de SPARK',misiones),lista('Lecciones estudiadas',lecciones),lista('Temas que marcó como aprendidos',temas),lista('Retos',retos),lista('Exámenes',exs),lista('Cofres abiertos',cofres),
    algo?null:h('p',{cls:'intro'},s?'Estuvo en la página, pero no terminó ninguna actividad.':(k===hoy?'Hoy todavía no hay actividad. ¡Una misión de 10 minutos y este día se pinta!':'No hubo actividad este día.')));
}
function renderMundos(){
  $('mundos').replaceChildren(...WORLDS.map((w,i)=>{
    const ts=temasDe(i),dom=ts.filter(t=>S.tem[t.id]).length,rg=retosGuia(i),rd=rg.filter(r=>S.done[r.id]).length,g=S.examenes[i];
    const barra=(v,n)=>h('span',{cls:'mini'},h('i',{style:`width:${n?v/n*100:0}%`}));
    return h('article',{cls:'bit-mundo','data-w':i},
      h('h3',{},w.name),
      h('p',{},`Temas dominados: ${dom} de ${ts.length}`),barra(dom,ts.length),
      h('p',{},`Retos superados: ${rd} de ${rg.length}`),barra(rd,rg.length),
      h('p',{},g?`Examen: mejor ${g.mejor} · último ${g.ultima??g.mejor} · ${g.intentos} ${g.intentos===1?'intento':'intentos'}`:'Examen: todavía no lo presenta'));
  }));
}
function renderExamenes(){
  const ev=B.ev.filter(e=>e.tipo==='examen').sort((a,b)=>b.t-a.t);
  const previo=e=>ev.find(x=>x.w===e.w&&x.t<e.t);
  const filas=ev.map(e=>{
    const p=previo(e),f=new Date(e.t);
    const cambio=p?(e.nota>p.nota?h('span',{cls:'sube-n'},`▲ ${Math.round((e.nota-p.nota)*10)/10}`):e.nota<p.nota?h('span',{cls:'baja-n'},`▼ ${Math.round((p.nota-e.nota)*10)/10}`):h('span',{cls:'intro'},'igual')):h('span',{cls:'intro'},'primero');
    return h('tr',{'data-w':e.w},h('td',{},`${f.getDate()} ${MESES[f.getMonth()].slice(0,3)}`),h('td',{},mundo(e.w)),h('td',{cls:'cal-nota'},String(e.nota)),h('td',{},`${e.ok} de ${e.n}`),h('td',{},cambio),h('td',{cls:'bit-fallas'},e.temas?(fallados(e)||'Ninguno'):'—'));
  });
  /* Exámenes presentados antes de que existiera la bitácora: solo se conoce el resumen. */
  const antes=WORLDS.map((w,i)=>({w:i,g:S.examenes[i],n:ev.filter(e=>e.w===i).length})).filter(x=>x.g&&x.g.intentos>x.n);
  poner($('examenes'),
    ev.length?h('div',{cls:'tabla-wrap'},h('table',{cls:'tabla bit-tabla'},h('tr',{},['Fecha','Mundo','Calificación','Aciertos','Cambio','Temas con errores'].map(t=>h('th',{},t))),filas)):
      h('p',{cls:'intro'},'Todavía no hay exámenes registrados. Cuando presentes uno, aquí verás la fecha, tu calificación y si vas mejorando.'),
    antes.length?h('p',{cls:'intro'},`Antes de la bitácora: ${antes.map(x=>`${mundo(x.w)} (mejor ${x.g.mejor}, ${x.g.intentos-x.n} ${x.g.intentos-x.n===1?'intento':'intentos'})`).join(' · ')}.`):null);
}
$('mes-ant').onclick=()=>{verMes.setMonth(verMes.getMonth()-1);renderCal();renderResumen()};
$('mes-sig').onclick=()=>{verMes.setMonth(verMes.getMonth()+1);renderCal();renderResumen()};
function renderTodo(){renderHud();renderResumen();renderCal();renderDetalle();renderMundos();renderExamenes()}
renderTodo();
/* Si la página queda abierta, se actualiza cada minuto para reflejar el tiempo del día. */
setInterval(()=>{renderResumen();renderCal();if(diaSel===hoy)renderDetalle()},60000);
