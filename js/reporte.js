/* Reporte de práctica en casa para maestros y papás.
   Sin XP, cofres ni chispas: solo constancia, avance, exámenes y temas por reforzar. */
const ALUMNO='Jacob',GRADO='6.º de primaria';
const MES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const B=bit(),HOY=diaClave();
const aFecha=k=>{const [a,m,d]=k.split('-').map(Number);return new Date(a,m-1,d)};
const larga=k=>{const f=aFecha(k);return `${f.getDate()} de ${MES[f.getMonth()]} de ${f.getFullYear()}`};
const corta=k=>{const f=aFecha(k);return `${f.getDate()} ${MES[f.getMonth()].slice(0,3)}`};
const masDias=(k,n)=>{const f=aFecha(k);f.setDate(f.getDate()+n);return diaClave(f)};
function tiempo(s){
  if(s<60)return s?'menos de 1 min':'0 min';
  const m=Math.round(s/60);
  return m>=60?`${Math.floor(m/60)} h ${m%60} min`:`${m} min`;
}
const materia=(w,tr)=>mundoDe(w,tr||TRIM);
const deEste=e=>(e.tr||1)===TRIM;
/* Solo se toman en cuenta los temas del trimestre activo. */
const deId=id=>{const m=/^tema-(?:t(\d)-)?(\d+)-(\d+)$/.exec(id);if(!m||(+m[1]||1)!==TRIM)return null;const w=+m[2],i=+m[3],t=TEMAS[w]&&TEMAS[w][i];return t?{id,w,i,titulo:t.t}:null};
const poner=(el,...n)=>el.replaceChildren(...n.flat().filter(x=>x!=null&&x!==false));

function rango(p){
  const dias=[...Object.keys(B.dias),...B.ev.map(e=>e.dia)].sort();
  const desde=p==='todo'?(dias[0]||HOY):masDias(HOY,-(+p-1));
  return {desde:desde>HOY?HOY:desde,hasta:HOY};
}
const dentro=(k,r)=>k>=r.desde&&k<=r.hasta;
const activo=k=>((B.dias[k]&&B.dias[k].seg)||0)>=60||B.ev.some(e=>e.dia===k);

function datos(p){
  const r=rango(p);
  const dias=new Set([...Object.keys(B.dias),...B.ev.map(e=>e.dia)].filter(k=>dentro(k,r)&&activo(k)));
  let seg=0;Object.entries(B.dias).forEach(([k,v])=>{if(dentro(k,r))seg+=v.seg||0});
  let racha=0,actual=0;
  for(let k=r.desde;k<=r.hasta;k=masDias(k,1)){if(dias.has(k)){actual++;racha=Math.max(racha,actual)}else actual=0}
  const ev=B.ev.filter(e=>dentro(e.dia,r));
  const avance=WORLDS.map((w,i)=>{
    const ts=temasDe(i);
    const dem=ts.filter(t=>demostrado(t.id)),ref=ts.filter(t=>enRefuerzo(t.id));
    const auto=ts.filter(t=>!demostrado(t.id)&&!enRefuerzo(t.id)&&S.tem[t.id]);
    const sin=ts.filter(t=>!S.sesiones[t.id]&&!enRefuerzo(t.id)&&!S.tem[t.id]);
    return {w:i,total:ts.length,dem,ref,auto,sin};
  });
  const refuerzo=Object.keys(S.refuerzo).map(id=>{const t=deId(id);return t&&{...t,...S.refuerzo[id]}}).filter(Boolean)
    .sort((a,b)=>debilidad(a.id)-debilidad(b.id)||(b.t||0)-(a.t||0));
  const examenes=B.ev.filter(e=>e.tipo==='examen'&&deEste(e)).sort((a,b)=>a.t-b.t);
  return {r,dias:dias.size,seg,racha,misiones:ev.filter(e=>e.tipo==='mision').length,lecciones:ev.filter(e=>e.tipo==='leccion').length,
    avance,refuerzo,examenes,exPeriodo:examenes.filter(e=>dentro(e.dia,r))};
}
const evidencia=x=>{
  const f=x.dia?` del ${corta(x.dia)}`:'';
  return x.fuente==='examen'?`Examen${f}: ${x.ok} de ${x.n}`:`Misión${f}: ${x.ok} de ${x.n}`;
};
function sugerencias(d){
  if(d.refuerzo.length)return d.refuerzo.slice(0,3);
  /* Sin temas por reforzar: siguientes temas sin practicar. */
  return d.avance.flatMap(a=>a.sin.map(t=>({...deId(t.id),nuevo:true}))).slice(0,3);
}
function render(){
  const p=$('periodo').value,d=datos(p);
  const periodo=d.r.desde===d.r.hasta?larga(d.r.hasta):`${larga(d.r.desde)} al ${larga(d.r.hasta)}`;
  const anteriores=WORLDS.map((w,i)=>({w:i,g:S.examenes[exKey(i)],n:d.examenes.filter(e=>e.w===i).length})).filter(x=>x.g&&x.g.intentos>x.n);
  const sug=sugerencias(d);
  poner($('reporte'),
    h('header',{cls:'rep-head'},
      h('p',{cls:'eyebrow'},`Reporte de práctica en casa · ${NOMBRE_TRIM[TRIM]}`),
      h('h1',{},`${ALUMNO} · ${GRADO}`),
      h('p',{},h('b',{},'Periodo: '),periodo),
      h('p',{cls:'intro'},`Generado el ${larga(HOY)}`)),

    h('section',{cls:'rep-sec'},h('h2',{},'1. Constancia en el periodo'),
      h('div',{cls:'rep-kpis'},
        [['Días trabajados',String(d.dias)],['Tiempo total',tiempo(d.seg)],['Promedio por día trabajado',d.dias?tiempo(d.seg/d.dias):'—'],['Racha más larga',`${d.racha} ${d.racha===1?'día':'días'}`],['Misiones terminadas',String(d.misiones)],['Lecciones estudiadas',String(d.lecciones)]]
          .map(([k,v])=>h('div',{},h('b',{},v),h('span',{},k))))),

    h('section',{cls:'rep-sec'},h('h2',{},'2. Avance por materia'),h('p',{cls:'intro'},'Acumulado desde que empezó a usar la página.'),
      h('div',{cls:'tabla-wrap'},h('table',{cls:'tabla rep-tabla'},
        h('tr',{},['Materia','Temas','Demostrados','Por reforzar','Solo autoevaluación','Sin practicar'].map(t=>h('th',{},t))),
        d.avance.map(a=>h('tr',{},h('td',{},materia(a.w)),h('td',{},String(a.total)),h('td',{},String(a.dem.length)),h('td',{cls:a.ref.length?'rep-alerta':''},String(a.ref.length)),h('td',{},String(a.auto.length)),h('td',{},String(a.sin.length)))),
        h('tr',{cls:'rep-total'},h('td',{},'Total'),...['total','dem','ref','auto','sin'].map(k=>h('td',{},String(d.avance.reduce((n,a)=>n+(k==='total'?a.total:a[k].length),0)))))))),

    h('section',{cls:'rep-sec'},h('h2',{},'3. Exámenes de práctica en el periodo'),
      d.exPeriodo.length?h('div',{cls:'tabla-wrap'},h('table',{cls:'tabla rep-tabla'},
        h('tr',{},['Fecha','Materia','Calificación','Aciertos','Cambio','Temas con errores'].map(t=>h('th',{},t))),
        d.exPeriodo.map(e=>{const prev=[...d.examenes].reverse().find(x=>x.w===e.w&&x.t<e.t);
          const c=prev?(e.nota>prev.nota?`Subió ${Math.round((e.nota-prev.nota)*10)/10}`:e.nota<prev.nota?`Bajó ${Math.round((prev.nota-e.nota)*10)/10}`:'Igual'):'Primero';
          const f=(e.temas||[]).filter(x=>x.ok<x.n).map(x=>x.titulo).join(', ');
          return h('tr',{},h('td',{},corta(e.dia)),h('td',{},materia(e.w)),h('td',{},h('b',{},String(e.nota))),h('td',{},`${e.ok} de ${e.n}`),h('td',{},c),h('td',{},e.temas?(f||'Ninguno'):'—'))}))):
        h('p',{},'No presentó exámenes en este periodo.'),
      anteriores.length?h('p',{cls:'intro'},`Exámenes anteriores a la bitácora: ${anteriores.map(x=>`${materia(x.w)} (mejor calificación ${x.g.mejor})`).join(' · ')}.`):null),

    h('section',{cls:'rep-sec'},h('h2',{},'4. Temas por reforzar'),h('p',{cls:'intro'},'Situación actual, del más débil al menos débil, con la evidencia de dónde salió cada uno.'),
      d.refuerzo.length?WORLDS.map((w,i)=>{const l=d.refuerzo.filter(x=>x.w===i);return l.length?h('div',{cls:'rep-grupo'},h('h3',{},w.name),
        h('ul',{},l.map(x=>h('li',{},h('span',{},x.titulo),h('span',{cls:'rep-evid'},evidencia(x))))) ):null}):h('p',{},'No hay temas por reforzar en este momento.')),

    h('section',{cls:'rep-sec'},h('h2',{},'5. Temas demostrados'),h('p',{cls:'intro'},'Sacó 4 o 5 de 5 en la misión del tema y no ha tenido errores después en un examen.'),
      d.avance.some(a=>a.dem.length)?d.avance.map(a=>a.dem.length?h('div',{cls:'rep-grupo'},h('h3',{},materia(a.w)),h('p',{},a.dem.map(t=>t.t).join(' · '))):null):h('p',{},'Todavía no hay temas demostrados.')),

    h('section',{cls:'rep-sec rep-sug'},h('h2',{},'6. Sugerencia para la próxima semana'),
      sug.length?h('ol',{},sug.map(x=>h('li',{},h('b',{},x.titulo),` (${materia(x.w)})`,x.nuevo?' · tema nuevo':` · ${evidencia(x)}`))):h('p',{},'¡Completó todo el temario! Conviene repasar con exámenes de práctica.'),
      h('p',{},sug.length&&!sug[0].nuevo?'En cada tema: leer juntos la lección y después hacer su misión de repaso. Con 4 o 5 aciertos, el tema deja de estar por reforzar.':'Seguir con una misión de 10 minutos al día.'),
      h('p',{cls:'intro'},'Lo que más ayuda: sesiones cortas (10 minutos) casi todos los días, mejor que una sesión larga el fin de semana.')),

    h('footer',{cls:'rep-pie'},
      h('p',{},h('b',{},'Cómo leer este reporte. '),'«Demostrado»: sacó 4 o 5 de 5 en la misión del tema. «Por reforzar»: menos de 4 de 5 en su misión, o errores en ese tema en un examen de práctica (cada tema tiene 1 o 2 preguntas por examen, así que es una alerta, no un diagnóstico). «Solo autoevaluación»: marcó que lo entiende, pero todavía no lo demuestra en una misión. El tiempo cuenta solo mientras la página está en uso.'),
      h('p',{},'Práctica en casa con Misión Trimestre. No sustituye la evaluación de la escuela.')));
  return {d,periodo,sug};
}
function resumen(){
  const {d,periodo,sug}=render();
  const tot=k=>d.avance.reduce((n,a)=>n+(k==='total'?a.total:a[k].length),0);
  const ex=d.exPeriodo.map(e=>`${materia(e.w)} ${e.nota} (${corta(e.dia)})`).join(', ');
  return [
    `Reporte de práctica en casa · ${ALUMNO} · ${GRADO} · ${NOMBRE_TRIM[TRIM]}`,
    `Periodo: ${periodo}`,
    `Trabajó ${d.dias} ${d.dias===1?'día':'días'} (${tiempo(d.seg)} en total) y terminó ${d.misiones} ${d.misiones===1?'misión':'misiones'}.`,
    `Temas demostrados: ${tot('dem')} de ${tot('total')}. Por reforzar: ${tot('ref')}.`,
    ex?`Exámenes de práctica: ${ex}.`:'Sin exámenes en el periodo.',
    sug.length?`Para la próxima semana: ${sug.map(x=>`${x.titulo} (${materia(x.w)})`).join('; ')}.`:'',
    'Práctica en casa con Misión Trimestre; no sustituye la evaluación de la escuela.'
  ].filter(Boolean).join('\n');
}
$('periodo').onchange=render;
$('imprimir').onclick=()=>{try{window.print()}catch(e){}};
$('copiar').onclick=async()=>{
  const t=resumen(),aviso=$('copiado');
  try{await navigator.clipboard.writeText(t);aviso.textContent='Resumen copiado. Ya puedes pegarlo en un mensaje.'}
  catch(e){const a=h('textarea',{});a.value=t;document.body.append(a);a.select();
    try{document.execCommand('copy');aviso.textContent='Resumen copiado. Ya puedes pegarlo en un mensaje.'}catch(_){aviso.textContent='No se pudo copiar. Selecciona el texto del reporte.'}a.remove()}
};
render();
