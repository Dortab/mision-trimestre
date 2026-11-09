/* Examen de práctica: sin ayudas durante la prueba, con calificación y revisión al final. */
const TAM_EXAMEN=20;
let ex=null;

/* Toma una pregunta de cada tema y completa con otras al azar. */
function armarExamen(){
  const banco=EXAMENES[S.world].map((qs,t)=>shuffle(qs).map(q=>({...q,tema:t})));
  const lista=[...banco.map(b=>b[0]),...shuffle(banco.flatMap(b=>b.slice(1)))].slice(0,TAM_EXAMEN);
  const preguntas=shuffle(lista).map(q=>({...q,ops:shuffle(q.o.map((t,n)=>({t,ok:n===0})))}));
  ex={preguntas,resp:Array(preguntas.length).fill(null),i:0,fin:false,confirmar:false,pausa:false};
  S.exActual[S.world]=ex;save();
}
const totalExamen=()=>Math.min(TAM_EXAMEN,EXAMENES[S.world].flat().length);
const calificacion=(ok,n)=>Math.round(ok/n*100)/10;
function mensajeExamen(c){
  if(c>=9)return 'Excelente. Dominas este mundo.';
  if(c>=8)return 'Muy bien. Repasa lo que falló y estarás todavía mejor.';
  if(c>=6)return 'Vas por buen camino. Estudia los temas marcados.';
  return 'Todavía falta práctica. Regresa a la explicación de los temas marcados y vuelve a intentarlo.';
}
function renderExamen(){
  if(!ex)return introExamen();
  if(ex.fin)return resultadoExamen();
  if(ex.pausa)return pausaExamen();
  preguntaExamen();
}
/* Descanso entre bloques de 5 preguntas. El examen queda guardado. */
const POR_BLOQUE=5;
function pausaExamen(){
  const hecho=(ex.i+1)/POR_BLOQUE,total=Math.ceil(ex.preguntas.length/POR_BLOQUE);
  $('contenido').replaceChildren(h('article',{cls:'tarjeta cierre'},
    h('p',{cls:'count'},`Bloque ${hecho} de ${total} terminado`),
    h('h2',{},'Hora de un descanso'),
    h('p',{},'Levántate, estírate y toma agua. Tu examen queda guardado.'),
    h('div',{cls:'row centro'},h('button',{cls:'btn main grande',onclick:()=>{ex.pausa=false;ex.i++;save();renderExamen();arriba()}},'Seguir con el examen'))));
}
function introExamen(){
  const g=S.examenes[S.world];
  $('contenido').replaceChildren(h('article',{cls:'leccion'},
    h('p',{cls:'count'},'Examen de práctica'),
    h('h3',{},`Demuestra lo que sabes de ${WORLDS[S.world].name}`),
    h('ul',{cls:'reglas'},
      h('li',{},`Son ${totalExamen()} preguntas sobre todos los temas de este mundo, en bloques de 5 con descansos.`),
      h('li',{},'Si te sales, tu examen queda guardado para continuarlo.'),
      h('li',{},'No verás si acertaste hasta terminar, como en una evaluación real.'),
      h('li',{},'Puedes regresar y cambiar tus respuestas antes de entregar.'),
      h('li',{},'Tu calificación será del 0 al 10. Cada intento trae preguntas en distinto orden.')),
    g?h('p',{cls:'clave'},h('b',{},`Mejor calificación: ${g.mejor}`),` · Intentos: ${g.intentos}`):null,
    h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>{armarExamen();renderExamen();arriba()}},'Empezar examen'))));
}
function preguntaExamen(){
  const q=ex.preguntas[ex.i],n=ex.preguntas.length,falta=ex.resp.filter(r=>r===null).length;
  const entregar=()=>{if(falta&&!ex.confirmar){ex.confirmar=true;preguntaExamen();return}terminarExamen()};
  const ir=i=>{ex.i=i;ex.confirmar=false;save();preguntaExamen();arriba()};
  const siguiente=()=>{if((ex.i+1)%POR_BLOQUE===0){ex.pausa=true;ex.confirmar=false;save();pausaExamen();arriba()}else ir(ex.i+1)};
  $('contenido').replaceChildren(
    h('div',{cls:'nums'},ex.preguntas.map((_,i)=>h('button',{cls:'num'+(ex.resp[i]!==null?' hecho':''),'aria-current':i===ex.i?'true':'false','aria-label':`Pregunta ${i+1}`,onclick:()=>ir(i)},String(i+1)))),
    h('article',{cls:'leccion'},
      h('p',{cls:'count'},`Bloque ${Math.floor(ex.i/POR_BLOQUE)+1} de ${Math.ceil(n/POR_BLOQUE)} · Pregunta ${ex.i+1} de ${n} · Contestadas: ${n-falta}`),
      h('p',{cls:'stem',html:q.s}),
      h('div',{cls:'opts'},q.ops.map((o,k)=>h('button',{cls:'opt'+(ex.resp[ex.i]===k?' elegida':''),'aria-pressed':ex.resp[ex.i]===k?'true':'false',html:o.t,onclick:()=>{ex.resp[ex.i]=k;ex.confirmar=false;save();preguntaExamen()}})))),
    ex.confirmar?h('p',{cls:'fb n',role:'status'},`Te ${falta===1?'falta 1 pregunta':`faltan ${falta} preguntas`} por contestar. Toca «Entregar examen» otra vez para terminar de todos modos.`):null,
    h('div',{cls:'row nav-tema'},
      ex.i>0?h('button',{cls:'btn',onclick:()=>ir(ex.i-1)},'Anterior'):null,
      ex.i<n-1?h('button',{cls:'btn main',onclick:siguiente},'Siguiente'):null,
      h('button',{cls:(ex.i===n-1?'btn main':'btn'),onclick:entregar},'Entregar examen')));
}
function terminarExamen(){
  const ok=ex.preguntas.filter((q,i)=>ex.resp[i]!==null&&q.ops[ex.resp[i]].ok).length;
  ex.fin=true;ex.ok=ok;ex.nota=calificacion(ok,ex.preguntas.length);
  const g=S.examenes[S.world]||{mejor:0,intentos:0};
  S.examenes[S.world]={mejor:Math.max(g.mejor,ex.nota),intentos:g.intentos+1,ultima:ex.nota};
  ex.record=ex.nota>g.mejor&&g.intentos>0;
  delete S.exActual[S.world];
  save();resultadoExamen();arriba();
}
function resultadoExamen(){
  const n=ex.preguntas.length,mal=ex.preguntas.filter((q,i)=>ex.resp[i]===null||!q.ops[ex.resp[i]].ok);
  const temas=[...new Set(mal.map(q=>q.tema))].sort((a,b)=>a-b),lista=lecciones();
  $('contenido').replaceChildren(
    h('article',{cls:'leccion nota-caja'},
      h('p',{cls:'count'},'Tu calificación'),
      h('p',{cls:'nota'},String(ex.nota)),
      h('p',{},`Acertaste ${ex.ok} de ${n}. ${mensajeExamen(ex.nota)}`),
      ex.record?h('p',{cls:'fb y'},'¡Nueva mejor calificación!'):null,
      h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>{armarExamen();renderExamen();arriba()}},'Hacer otro examen'))),
    temas.length?h('section',{cls:'leccion'},h('h3',{},'Temas que debes repasar'),
      h('div',{cls:'opts'},temas.map(t=>h('button',{cls:'opt',onclick:()=>repasarTema(t)},lista[t].t)))):null,
    h('section',{cls:'leccion'},h('h3',{},'Revisión del examen'),
      h('ol',{cls:'revision'},ex.preguntas.map((q,i)=>{
        const r=ex.resp[i],bien=r!==null&&q.ops[r].ok,correcta=q.ops.find(o=>o.ok);
        return h('li',{cls:bien?'r-bien':'r-mal'},
          h('p',{cls:'stem',html:q.s}),
          bien?null:h('p',{html:`<b>Tu respuesta:</b> ${r===null?'Sin contestar':q.ops[r].t}`}),
          h('p',{html:`<b>Respuesta correcta:</b> ${correcta.t}`}),
          h('p',{cls:'intro',html:q.y}))}))));
}
function repasarTema(t){paso='aprende';temaActual=t;renderPaso();arriba()}
