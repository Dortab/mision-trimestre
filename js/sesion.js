/* Mi misión de hoy: un tema, una idea por pantalla, 5 preguntas y un cierre claro. */
const PREGUNTAS_SESION=5;
/* Excepción temporal (16 nov 2026): estos temas todavía no tienen 5 preguntas de opción múltiple.
   Mientras Contenido pedagógico entrega las que faltan, completan su misión con sus preguntas de verdadero o falso.
   Al llegar a 5 o más de opción múltiple, se quitan de esta lista. */
const EXCEPCION_VF=['tema-0-0','tema-0-2','tema-0-3'];
let sesion=null;

const temasTodos=()=>TEMAS.flatMap((l,w)=>l.map((t,i)=>({...t,w,i,id:temaId(w,i)})).filter(t=>!t.nota));

/* Estado de cada tema en Mi misión de hoy:
   'hecha' (terminó la misión), 'empezada' (le dio Empezar y no terminó) o 'pendiente'.
   Una misión terminada con menos de 4 aciertos al primer intento queda además «por reforzar». */
S.iniciadas=S.iniciadas||{};
const estado=t=>S.sesiones[t.id]?'hecha':(S.iniciadas[t.id]?'empezada':'pendiente');
const reforzar=t=>enRefuerzo(t.id);
/* Un tema por reforzar no se vuelve a proponer el mismo día en que se falló. */
const falloHoy=t=>reforzar(t)&&S.refuerzo[t.id].dia===diaClave();
const motivoRefuerzo=t=>S.refuerzo[t.id].fuente==='examen'?'examen':'refuerzo';

/* Orden de la misión del día:
   1) lo que quedó a medias;
   2) un tema por reforzar (el más antiguo, nunca el mismo día en que se falló);
   3) temas nuevos, equilibrando materias.
   Mientras haya temas nuevos, máximo 1 de cada 2 misiones es de refuerzo.
   Cuando ya no hay nuevos ni refuerzos disponibles, propone repasos. */
function siguienteTema(){
  const todos=temasTodos(),h_=S.sesiones;
  const empezadas=todos.filter(t=>estado(t)==='empezada').sort((a,b)=>S.iniciadas[a.id]-S.iniciadas[b.id]);
  if(empezadas.length)return {t:empezadas[0],motivo:'empezada'};
  const refuerzos=todos.filter(t=>reforzar(t)&&!falloHoy(t)).sort((a,b)=>desdeRefuerzo(a.id)-desdeRefuerzo(b.id));
  const nuevos=todos.filter(t=>estado(t)==='pendiente'&&!reforzar(t));
  if(refuerzos.length&&(!nuevos.length||!S.ultimaFueRefuerzo))return {t:refuerzos[0],motivo:motivoRefuerzo(refuerzos[0])};
  if(nuevos.length){
    const vistos=w=>todos.filter(t=>t.w===w&&estado(t)!=='pendiente').length;
    const mundos=[...new Set(nuevos.map(t=>t.w))].sort((a,b)=>vistos(a)-vistos(b)||a-b);
    return {t:nuevos.find(t=>t.w===mundos[0]),motivo:'nuevo'};
  }
  const orden=todos.filter(t=>estado(t)==='hecha'&&t.id!==S.ultimaSesion&&!falloHoy(t)).sort((a,b)=>h_[a.id].ok-h_[b.id].ok||h_[a.id].n-h_[b.id].n);
  return {t:orden[0]||todos.find(t=>!falloHoy(t))||todos[0],motivo:'repaso'};
}
/* Banco de misión del tema: preguntas de opción múltiple de los bancos (k:'banco') y las de la gráfica
   o el mosaico que no dependen de la figura. La Guía no usa ninguna de estas. */
function bancoDe(t){
  const vf=EXCEPCION_VF.includes(t.id);
  return WORLDS[t.w].retos.filter(r=>r.k==='banco'||r.k==='chart'||r.k==='mosaic'||(vf&&r.k==='tf'))
    .flatMap(r=>(r.q||[]).filter(q=>q.t===t.i&&!DEPENDE.test(q.s||'')).map(q=>({...q,reto:r.id,o:q.o||[q.v?'Verdadero':'Falso',q.v?'Falso':'Verdadero']})));
}
/* Cada misión toma 5 preguntas distintas a las del último intento.
   Si el banco todavía no alcanza, primero van las que no salieron la última vez;
   después, opción múltiple antes que verdadero o falso, y las que falló antes primero. */
function preguntasDe(t){
  const ultimo=new Set(((S.sesiones[t.id]||{}).q||[]).map(x=>x[0]));
  const peso=q=>{const k=claveQ(q);return (ultimo.has(k)?10:0)+('v' in q?2:0)+((S.fallas[q.reto]||[]).includes(k)?0:1)};
  return shuffle(shuffle(bancoDe(t)).sort((a,b)=>peso(a)-peso(b)).slice(0,PREGUNTAS_SESION));
}
function renderHud(){
  const x=xp();$('xp').textContent=x;$('xp-total').textContent=TOTAL_XP;$('bar').style.width=(x/TOTAL_XP*100)+'%';
  $('xp-next').textContent=x>=TOTAL_XP?'Misión completa':`Faltan ${500-(x%500)} XP para el siguiente cofre`;
}
/* Cada pregunta da XP una sola vez: 20 al primer intento y 10 al segundo.
   Para «por reforzar» y «demostrado» solo cuenta el acierto al primer intento (v===1). */
function acierto(r,p,n,q,v){
  const k=claveQ(q);
  sesion.aciertos++;
  if(v===1){sesion.ok1++;sesion.res[k]=1}
  if(S.ganadas[k])return;
  sumarXP(()=>{S.ganadas[k]=1;S.sesPts[q.reto]=(S.sesPts[q.reto]||0)+Math.round(20*v)});
}
function pintar(...nodos){
  $('mision').replaceChildren(h('div',{cls:'sesion','data-w':sesion.t.w},nodos));
  window.scrollTo(0,0);
}
const motivoDe=t=>estado(t)==='empezada'?'empezada':(reforzar(t)?motivoRefuerzo(t):(estado(t)==='hecha'?'repaso':'nuevo'));
/* El niño puede elegir cualquier tema desde el mapa, aunque lo haya fallado hoy. */
function nuevaSesion(elegido){
  const s=elegido?{t:elegido,motivo:motivoDe(elegido)}:siguienteTema();
  sesion={...s,eraRefuerzo:reforzar(s.t),aciertos:0,ok1:0,res:{},preguntas:[],xp0:xp(),tarjeta:0,ejemplo:0};
  S.world=s.t.w;save();
  presentar();
}
const TEXTO_MOTIVO={
  nuevo:'Un tema nuevo para hoy.',
  empezada:'Esta misión la empezaste y no la terminaste. ¡Vamos a acabarla!',
  repaso:'Este tema vuelve para que hoy te salga mejor.',
  refuerzo:'Este tema quedó por reforzar. ¡Hoy te va a salir mejor!',
  examen:'En tu examen este tema salió con errores. ¡Vamos a reforzarlo!'};
/* Mapa de temas: cada tema es una casilla de color según su estado. Tocarla abre esa misión. */
function mapaTemas(){
  const todos=temasTodos();
  const icono={hecha:'✓',empezada:'◐',pendiente:''};
  const nombre={hecha:'terminada',empezada:'empezada sin terminar',pendiente:'pendiente'};
  return h('section',{cls:'tarjeta mapa'},
    h('h3',{},'Todos los temas'),
    h('div',{cls:'mapa-ley','aria-hidden':'true'},h('span',{},h('i',{cls:'e-hecha'}),'Terminada'),h('span',{},h('i',{cls:'e-empezada'}),'Sin terminar'),h('span',{},h('i',{cls:'e-pendiente'}),'Pendiente'),h('span',{},h('b',{cls:'refuerzo'},'por reforzar'),'menos de 4 aciertos a la primera o errores en el examen')),
    WORLDS.map((w,i)=>{
      const lista=todos.filter(t=>t.w===i),hechas=lista.filter(t=>estado(t)==='hecha').length;
      const d=h('details',{cls:'mapa-mundo','data-w':i},
        h('summary',{},h('span',{},w.name),h('span',{cls:'mapa-cuenta'},`${hechas} de ${lista.length} terminadas`)),
        h('div',{cls:'mapa-temas'},lista.map(t=>{const e=estado(t),r=reforzar(t);
          return h('button',{cls:`mapa-tema e-${e}`,'aria-current':t.id===sesion.t.id?'true':'false',
            'aria-label':`${t.t}: ${nombre[e]}${r?', por reforzar':''}`,onclick:()=>nuevaSesion(t)},
            h('span',{cls:'mapa-ico','aria-hidden':'true'},icono[e]),h('span',{cls:'mapa-txt'},t.t),r?h('b',{cls:'refuerzo'},'por reforzar'):null)})));
      if(i===sesion.t.w)d.open=true;
      return d;
    }));
}
function presentar(){
  const t=sesion.t;
  const porReforzar=temasTodos().filter(x=>reforzar(x)&&x.id!==t.id).sort((a,b)=>desdeRefuerzo(a.id)-desdeRefuerzo(b.id));
  pintar(h('article',{cls:'tarjeta'},
    h('p',{cls:'count'},`SPARK te propone · ${WORLDS[t.w].name}`),
    h('h2',{},t.t),
    h('p',{},TEXTO_MOTIVO[sesion.motivo]),
    h('ul',{cls:'reglas'},h('li',{},'Lees unas tarjetas cortas.'),h('li',{},'Contestas 5 preguntas.'),h('li',{},'Te llevas una chispa de SPARK.')),
    h('div',{cls:'row'},h('button',{cls:'btn main grande',onclick:()=>{S.iniciadas[t.id]=S.iniciadas[t.id]||Date.now();save();sesion.tarjeta=0;tarjetas()}},'Empezar: 10 minutos'),
      porReforzar.length&&!sesion.eraRefuerzo?h('button',{cls:'btn',onclick:()=>nuevaSesion(porReforzar[0])},'Repasar un tema por reforzar'):null)),
    mapaTemas());
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
  sesion.preguntas=q.map(claveQ);sesion.res={};sesion.ok1=0;sesion.aciertos=0;
  pintar(h('article',{cls:'tarjeta'},box));
  quiz({id:'sesion',q,intro:q.some(x=>x.reto==='l4')?PACK:undefined},box,()=>cerrar(q.length));
}
function cerrar(n){
  const t=sesion.t,prev=S.sesiones[t.id]||{n:0,ok:0},ok=sesion.ok1,conPista=sesion.aciertos-ok;
  /* q: cada pregunta de este intento y si la acertó al primer intento (1) o no (0). */
  S.sesiones[t.id]={n:prev.n+1,ok,total:sesion.aciertos,q:sesion.preguntas.map(k=>[k,sesion.res[k]?1:0]),v:VERSION_MISION,dia:diaClave()};
  S.ultimaSesion=t.id;S.ultimaFueRefuerzo=sesion.eraRefuerzo;delete S.iniciadas[t.id];
  S.chispas=(S.chispas||0)+1;
  const domino=ok>=MIN_DOMINIO,salio=domino&&enRefuerzo(t.id);
  if(domino)delete S.refuerzo[t.id];else marcarRefuerzo(t.id,{fuente:'mision',ok,n});
  if(domino)S.tem[t.id]=true;
  save();renderHud();sonido('win');
  const gano=xp()-sesion.xp0,faltan=CADA_CHISPAS-S.chispas%CADA_CHISPAS;
  registrar('mision',{w:t.w,i:t.i,titulo:t.t,ok,conPista,n,xp:gano,domino,v:VERSION_MISION});
  pintar(h('article',{cls:'tarjeta cierre'},
    h('div',{cls:'chispa','aria-hidden':'true'}),
    h('h2',{},'¡Misión cumplida!'),
    h('p',{},`SPARK te dio una chispa. Ya llevas ${S.chispas}.`),
    h('p',{cls:'intro'},S.chispas%CADA_CHISPAS===0?'¡Juntaste 5 chispas y abriste un cofre de constancia!':`Te ${faltan===1?'falta 1 chispa':`faltan ${faltan} chispas`} para tu próximo cofre de constancia.`),
    h('p',{},`Acertaste ${ok} de ${n} a la primera${conPista?` y ${conPista} más con pista`:''}${gano?`. Ganaste ${gano} XP`:''}.`),
    h('p',{},salio?'¡Listo! Este tema ya no está por reforzar.':domino?'¡Este tema ya quedó demostrado!':'Quedó como «por reforzar». SPARK te lo va a proponer otro día para que te salga mejor.'),
    h('p',{cls:'intro'},'Buen trabajo por hoy. Si quieres otra misión, primero levántate y toma agua.'),
    h('div',{cls:'row centro'},h('a',{cls:'btn main grande',href:'index.html'},'Terminar por hoy'),h('a',{cls:'btn',href:'bitacora.html'},'Ver mi bitácora'),h('button',{cls:'btn',onclick:()=>nuevaSesion()},'Otra misión'))));
  if(S.chispas%CADA_CHISPAS===0)setTimeout(()=>abrirCofre(S.chispas/CADA_CHISPAS,'constancia'),700);
}
/* Si llega con un tema en la dirección (por ejemplo, desde el examen), abre esa misión. */
const pedido=temasTodos().find(x=>'#'+x.id===location.hash);
renderHud();nuevaSesion(pedido);
