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
/* Al cerrar cada bloque de 5: resultado parcial, qué repasar y descanso.
   Un bloque calificado ya no se puede cambiar. El examen queda guardado. */
const POR_BLOQUE=5;
const bloqueDe=i=>Math.floor(i/POR_BLOQUE);
const cerrado=i=>(ex.cerrados||[]).includes(bloqueDe(i));
const correcta=(q,i)=>ex.resp[i]!==null&&q.ops[ex.resp[i]].ok;
function mensajeBloque(ok,n){
  if(ok===n)return '¡Bloque perfecto! Sigue así.';
  if(ok>=n-1)return 'Muy bien. Revisa la que fallaste antes de seguir.';
  if(ok>=Math.ceil(n/2))return 'Vas bien. Lee con calma lo que fallaste: te va a servir en el resto del examen.';
  return 'Este bloque costó trabajo. Lee lo que fallaste y, si quieres, abre la explicación del tema antes de seguir.';
}
function pausaExamen(){
  const b=bloqueDe(ex.i),total=Math.ceil(ex.preguntas.length/POR_BLOQUE);
  if(!cerrado(ex.i)){ex.cerrados=[...(ex.cerrados||[]),b];save()}
  const idx=[];for(let i=b*POR_BLOQUE;i<Math.min((b+1)*POR_BLOQUE,ex.preguntas.length);i++)idx.push(i);
  const ok=idx.filter(i=>correcta(ex.preguntas[i],i)).length,mal=idx.filter(i=>!correcta(ex.preguntas[i],i));
  const lista=lecciones();
  $('contenido').replaceChildren(h('article',{cls:'tarjeta cierre'},
    h('p',{cls:'count'},`Bloque ${b+1} de ${total} terminado`),
    h('h2',{},'Resultado parcial'),
    h('p',{cls:'nota'},`${ok} de ${idx.length}`),
    h('p',{},mensajeBloque(ok,idx.length))),
    mal.length?h('section',{cls:'leccion parcial'},h('h3',{},'Para repasar'),
      h('ol',{cls:'revision'},mal.map(i=>{
        const q=ex.preguntas[i],r=ex.resp[i],buena=q.ops.find(o=>o.ok),t=lista[q.tema];
        return h('li',{cls:'r-mal'},
          h('p',{cls:'stem',html:`${i+1}. ${q.s}`}),
          h('p',{html:`<b>Tu respuesta:</b> ${r===null?'Sin contestar':q.ops[r].t}`}),
          h('p',{html:`<b>Respuesta correcta:</b> ${buena.t}`}),
          h('p',{cls:'intro',html:q.y}),
          t?h('button',{cls:'btn small liga',onclick:()=>verTema(q.tema)},`Repasa: Tema ${q.tema+1}, ${t.t}`):null)}))):null,
    b+1<total?h('article',{cls:'tarjeta cierre'},
      h('h3',{},'Hora de un descanso'),
      h('p',{},'Levántate, estírate y toma agua. Tu examen queda guardado.'),
      h('div',{cls:'row centro'},h('button',{cls:'btn main grande',onclick:()=>{ex.pausa=false;ex.i=Math.min(ex.i+1,ex.preguntas.length-1);save();renderExamen();arriba()}},'Seguir con el examen'))):
    h('div',{cls:'row centro'},h('button',{cls:'btn main grande',onclick:()=>{ex.pausa=false;terminarExamen()}},'Ver mi calificación')));
}
function introExamen(){
  const g=S.examenes[S.world];
  $('contenido').replaceChildren(h('article',{cls:'leccion'},
    h('p',{cls:'count'},'Examen de práctica'),
    h('h3',{},`Demuestra lo que sabes de ${WORLDS[S.world].name}`),
    h('ul',{cls:'reglas'},
      h('li',{},`Son ${totalExamen()} preguntas sobre todos los temas de este mundo, en bloques de 5 con descansos.`),
      h('li',{},'Si te sales, tu examen queda guardado para continuarlo.'),
      h('li',{},'Al terminar cada bloque de 5 verás cuántas acertaste y qué debes repasar.'),
      h('li',{},'Puedes cambiar tus respuestas mientras estás en el bloque. Cuando se califica, ya no.'),
      h('li',{},'Tu calificación será del 0 al 10. Cada intento trae preguntas en distinto orden.')),
    g?h('p',{cls:'clave'},h('b',{},`Mejor calificación: ${g.mejor}`),` · Intentos: ${g.intentos}`):null,
    h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>{armarExamen();renderExamen();arriba()}},'Empezar examen'))));
}
function preguntaExamen(){
  const q=ex.preguntas[ex.i],n=ex.preguntas.length,falta=ex.resp.filter(r=>r===null).length;
  const entregar=()=>{if(falta&&!ex.confirmar){ex.confirmar=true;preguntaExamen();return}terminarExamen()};
  const ir=i=>{ex.i=i;ex.confirmar=false;save();preguntaExamen();arriba()};
  const bloqueVa=bloqueDe(ex.i),faltanBloque=ex.preguntas.map((_,i)=>i).filter(i=>bloqueDe(i)===bloqueVa&&ex.resp[i]===null).length;
  const finBloque=(ex.i+1)%POR_BLOQUE===0||ex.i===n-1;
  const siguiente=()=>{
    if(finBloque&&!cerrado(ex.i)){
      if(faltanBloque&&!ex.confirmar){ex.confirmar='bloque';preguntaExamen();return}
      const idx=ex.preguntas.map((_,i)=>i).filter(i=>bloqueDe(i)===bloqueVa),ok=idx.filter(i=>correcta(ex.preguntas[i],i)).length;
      sonido(ok>=idx.length-1?'win':(ok?'ok':'bad'));
      ex.pausa=true;ex.confirmar=false;save();pausaExamen();arriba();return}
    ir(ex.i+1)};
  const soloVer=cerrado(ex.i);
  $('contenido').replaceChildren(
    h('div',{cls:'nums'},ex.preguntas.map((_,i)=>h('button',{cls:'num'+(ex.resp[i]!==null?' hecho':''),'aria-current':i===ex.i?'true':'false','aria-label':`Pregunta ${i+1}`,onclick:()=>ir(i)},String(i+1)))),
    h('article',{cls:'leccion'},
      h('p',{cls:'count'},`Bloque ${Math.floor(ex.i/POR_BLOQUE)+1} de ${Math.ceil(n/POR_BLOQUE)} · Pregunta ${ex.i+1} de ${n} · Contestadas: ${n-falta}`),
      h('p',{cls:'stem',html:q.s}),
      h('div',{cls:'opts'},q.ops.map((o,k)=>h('button',{cls:'opt'+(soloVer?(o.ok?' good':(ex.resp[ex.i]===k?' bad':'')):(ex.resp[ex.i]===k?' elegida':'')),'aria-pressed':ex.resp[ex.i]===k?'true':'false',...(soloVer?{disabled:''}:{}),html:o.t,onclick:()=>{ex.resp[ex.i]=k;ex.confirmar=false;save();preguntaExamen()}}))),
      soloVer?h('p',{cls:'intro'},'Este bloque ya está calificado. Aquí ves tu respuesta y la correcta.'):null),
    ex.confirmar==='bloque'?h('p',{cls:'fb n',role:'status'},`Te ${faltanBloque===1?'falta 1 pregunta':`faltan ${faltanBloque} preguntas`} de este bloque. Toca «Ver resultado del bloque» otra vez para calificarlo así.`):
    ex.confirmar?h('p',{cls:'fb n',role:'status'},`Te ${falta===1?'falta 1 pregunta':`faltan ${falta} preguntas`} por contestar. Toca «Entregar examen» otra vez para terminar de todos modos.`):'',
    h('div',{cls:'row nav-tema'},
      ex.i>0?h('button',{cls:'btn',onclick:()=>ir(ex.i-1)},'Anterior'):null,
      ex.i<n-1?h('button',{cls:'btn main',onclick:siguiente},finBloque&&!cerrado(ex.i)?'Ver resultado del bloque':'Siguiente'):null,
      h('button',{cls:(ex.i===n-1?'btn main':'btn'),onclick:entregar},'Entregar examen')));
}
/* Aciertos por tema en un examen terminado, del más débil al menos débil. */
function porTema(e){
  const m={};
  e.preguntas.forEach((q,i)=>{const r=m[q.tema]||(m[q.tema]={t:q.tema,ok:0,n:0});r.n++;if(e.resp[i]!==null&&q.ops[e.resp[i]].ok)r.ok++});
  return Object.values(m).sort((a,b)=>a.ok/a.n-b.ok/b.n||b.n-a.n||a.t-b.t);
}
function terminarExamen(){
  const ok=ex.preguntas.filter((q,i)=>ex.resp[i]!==null&&q.ops[ex.resp[i]].ok).length;
  ex.fin=true;ex.ok=ok;ex.nota=calificacion(ok,ex.preguntas.length);
  const g=S.examenes[S.world]||{mejor:0,intentos:0};
  S.examenes[S.world]={mejor:Math.max(g.mejor,ex.nota),intentos:g.intentos+1,ultima:ex.nota};
  ex.record=ex.nota>g.mejor&&g.intentos>0;
  const lista=lecciones(),temas=porTema(ex);
  temas.filter(x=>x.ok<x.n).forEach(x=>marcarRefuerzo(temaId(S.world,x.t),{fuente:'examen',ok:x.ok,n:x.n,w:S.world}));
  registrar('examen',{w:S.world,nota:ex.nota,ok,n:ex.preguntas.length,temas:temas.map(x=>({i:x.t,titulo:lista[x.t].t,ok:x.ok,n:x.n}))});
  delete S.exActual[S.world];
  save();resultadoExamen();arriba();
}
/* Dónde trabajar: cada tema con errores, sus aciertos y qué hacer. */
function dondeTrabajar(){
  const lista=lecciones(),mal=porTema(ex).filter(x=>x.ok<x.n);
  if(!mal.length)return h('section',{cls:'leccion'},h('h3',{},'Dónde trabajar'),h('p',{},'¡No fallaste ningún tema! Sigue con misiones de temas nuevos.'));
  const fila=x=>{const t=lista[x.t],id=temaId(S.world,x.t);
    return h('li',{cls:'trabajar'},
      h('div',{cls:'trabajar-h'},h('span',{},`Tema ${x.t+1}: ${t.t}`),h('b',{cls:'trabajar-n'+(x.ok===0?' cero':'')},`${x.ok} de ${x.n}`)),
      h('div',{cls:'row'},
        h('button',{cls:'btn small',onclick:()=>repasarTema(x.t)},'Ver la lección'),
        t.nota?null:h('a',{cls:'btn small main',href:`mision.html#${id}`},'Hacer misión de repaso')))};
  const top=mal.slice(0,3),resto=mal.slice(3);
  return h('section',{cls:'leccion'},
    h('h3',{},'Dónde trabajar'),
    h('p',{cls:'intro'},'Estos temas tuvieron errores y quedaron «por reforzar». Cada tema tuvo 1 o 2 preguntas, así que tómalo como una alerta. Un tema deja de estar por reforzar cuando sacas 4 o 5 en su misión.'),
    h('h4',{cls:'trabajar-tit'},'Empiecen por aquí'),
    h('ol',{cls:'trabajar-lista'},top.map(fila)),
    resto.length?h('h4',{cls:'trabajar-tit'},'También conviene repasar'):null,
    resto.length?h('ol',{cls:'trabajar-lista',start:'4'},resto.map(fila)):null);
}
function resultadoExamen(){
  const n=ex.preguntas.length;
  $('contenido').replaceChildren(
    h('article',{cls:'leccion nota-caja'},
      h('p',{cls:'count'},'Tu calificación'),
      h('p',{cls:'nota'},String(ex.nota)),
      h('p',{},`Acertaste ${ex.ok} de ${n}. ${mensajeExamen(ex.nota)}`),
      ex.record?h('p',{cls:'fb y'},'¡Nueva mejor calificación!'):'',
      h('div',{cls:'row'},h('button',{cls:'btn main',onclick:()=>{armarExamen();renderExamen();arriba()}},'Hacer otro examen'))),
    dondeTrabajar(),
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
