/* Estado y utilidades que comparten la página de inicio y la guía. */
/* Cofres de constancia: uno cada 5 chispas (una chispa por misión terminada). Al acabar la lista, vuelve a empezar. */
const CADA_CHISPAS=5;
const PREMIOS_CHISPA=['Elegir la música del carro','15 minutos extra de juego','Elegir el postre','Escoger la cena del viernes','Una salida al parque','Noche de juego de mesa'];
const CHESTS=['Tiempo extra de juego','Elegir la cena','Armar un set','Plan especial en familia','Noche de película','Elegir el postre','Premio mayor'];
let S={done:{},pts:{},sesPts:{},ganadas:{},fallas:{},tem:{},examenes:{},exActual:{},sesiones:{},iniciadas:{},refuerzo:{},chispas:0,rewards:CHESTS.slice(),premiosChispa:PREMIOS_CHISPA.slice(),fields:{},world:0,conReloj:false};
try{const raw=localStorage.getItem(KEY);if(raw)S={...S,...JSON.parse(raw)}}catch(e){}
S.trim=TRIM;if(!(S.world<WORLDS.length))S.world=0;
while(S.rewards.length<CHESTS.length)S.rewards.push(CHESTS[S.rewards.length]);
/* Temas por reforzar: una sola regla para examen, mapa de misiones y reporte.
   Entra si saca menos de 4 de 5 en su misión o si falla alguna pregunta del tema en un examen.
   Sale cuando vuelve a hacer la misión de ese tema con 4 o 5 aciertos. */
const MIN_DOMINIO=4;
S.refuerzo=S.refuerzo||{};
Object.entries(S.sesiones||{}).forEach(([id,s])=>{if(s.ok<MIN_DOMINIO&&!S.refuerzo[id])S.refuerzo[id]={fuente:'mision',ok:s.ok,n:5}});
const enRefuerzo=id=>!!S.refuerzo[id];
const debilidad=id=>{const r=S.refuerzo[id];return r&&r.n?r.ok/r.n:1};
const demostrado=id=>!!S.sesiones[id]&&S.sesiones[id].ok>=MIN_DOMINIO&&!enRefuerzo(id);
function marcarRefuerzo(id,datos){S.refuerzo[id]={...datos,t:Date.now(),dia:diaClave()}}
const premioChispa=n=>(S.premiosChispa[(n-1)%S.premiosChispa.length]||'').trim()||'Un premio sorpresa';
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};

function h(t,a={},...k){const e=document.createElement(t);for(const x in a){if(x==='html')e.innerHTML=a[x];else if(x==='cls')e.className=a[x];else if(x.startsWith('on'))e.addEventListener(x.slice(2),a[x]);else e.setAttribute(x,a[x])}k.flat().forEach(c=>c!=null&&e.append(c));return e}
const $=id=>document.getElementById(id);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
/* Un reto superado vale 100 XP; uno sin terminar conserva lo que sumó en el reto y en las misiones. */
const ptsReto=id=>Math.min(100,(S.pts[id]||0)+(S.sesPts[id]||0));
const xp=()=>WORLDS.reduce((n,w)=>n+w.retos.reduce((m,r)=>m+(S.done[r.id]?100:ptsReto(r.id)),0),0);
const TOTAL_XP=WORLDS.reduce((n,w)=>n+w.retos.length,0)*100;
/* Los temas y exámenes del 1.er trimestre conservan sus claves de siempre para no perder el avance. */
const temaId=(w,i)=>TRIM===1?`tema-${w}-${i}`:`tema-t${TRIM}-${w}-${i}`;
const exKey=w=>TRIM===1?w:`t${TRIM}-${w}`;
const temasDe=w=>TEMAS[w].map((t,i)=>({...t,id:temaId(w,i)})).filter(t=>!t.nota);
const TOTAL_TEMAS=WORLDS.reduce((n,_,w)=>n+temasDe(w).length,0);
/* Cada materia tiene siempre el mismo color, en cualquier grado y trimestre. */
const COLOR_MATERIA={'Ciencias':0,'Lenguajes':1,'Matemáticas':2,'Geografía':3,'Historia':4,'Civismo':5,'Conocimiento del medio':3};
const colorW=(w,tr)=>{const n=mundoDe(w,tr||TRIM);return n in COLOR_MATERIA?COLOR_MATERIA[n]:w};
let stop=()=>{};
/* Botones para cambiar de trimestre desde cualquier página. Guardan la elección y recargan. */
const selectorTrim=()=>h('div',{cls:'trims',role:'group','aria-label':'Trimestre'},Object.keys(TRIMESTRES).map(Number).map(n=>
  h('button',{cls:'btn trim'+(n===TRIM?' main':''),'aria-pressed':n===TRIM?'true':'false',
    onclick:()=>{if(n===TRIM)return;S.trim=n;S.world=0;save();location.hash='';location.reload()}},NOMBRE_TRIM[n])));

/* Sonidos estilo videojuego de 8 bits. Se generan en el navegador, no necesitan archivos.
   'ok' acierto: moneda. 'bad' error: dos tonos que bajan, sin regañar.
   'win' reto o bloque superado: subir de nivel. 'cofre' cofre abierto: fanfarria. */
let AUDIO=null,SALIDA=null;
function audio(){
  AUDIO=AUDIO||new (window.AudioContext||window.webkitAudioContext)();
  if(AUDIO.state==='suspended')AUDIO.resume().catch(()=>{});
  if(!SALIDA){
    /* Compresor para que ningún sonido salga más fuerte que otro, y un eco muy corto. */
    const comp=AUDIO.createDynamicsCompressor();comp.threshold.value=-16;comp.ratio.value=4;comp.connect(AUDIO.destination);
    const eco=AUDIO.createDelay();eco.delayTime.value=.09;
    const ret=AUDIO.createGain();ret.gain.value=.15;
    eco.connect(ret).connect(eco);ret.connect(comp);
    SALIDA=AUDIO.createGain();SALIDA.gain.value=1;SALIDA.connect(comp);SALIDA.connect(eco);
  }
  return AUDIO;
}
/* Una nota de consola: onda cuadrada, ataque instantáneo y caída corta. */
function nota(f,ini,dur,{vol=.09,forma='square',hasta=0,vibrato=0}={}){
  const ac=audio(),t=ac.currentTime+ini,o=ac.createOscillator(),g=ac.createGain();
  o.type=forma;o.frequency.setValueAtTime(f,t);
  if(hasta)o.frequency.exponentialRampToValueAtTime(hasta,t+dur);
  if(vibrato){const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=7;lg.gain.value=vibrato;l.connect(lg).connect(o.frequency);l.start(t);l.stop(t+dur+.05)}
  g.gain.setValueAtTime(vol,t);
  g.gain.setValueAtTime(vol,t+dur*.6);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(g).connect(SALIDA);o.start(t);o.stop(t+dur+.05);
}
const arpegio=(fs,ini,paso,dur,op)=>fs.forEach((f,i)=>nota(f,ini+i*paso,dur,op));
function sonido(tipo){
  if(S.mudo)return;
  try{
    if(tipo==='ok'){
      nota(988,0,.08);nota(1319,.07,.32);                       // moneda
    }else if(tipo==='bad'){
      nota(392,0,.13,{forma:'triangle',vol:.28});
      nota(262,.13,.28,{forma:'triangle',vol:.28,hasta:220});   // «uh-oh»
    }else if(tipo==='win'){
      arpegio([523,659,784,1047,1319,1568],.12,.06,.1);         // subir de nivel
      nota(2093,.5,.5,{vol:.08,vibrato:12});
      nota(131,.12,.5,{forma:'triangle',vol:.25});
    }else if(tipo==='cofre'){
      nota(262,0,.35,{forma:'triangle',vol:.25,hasta:1047});    // el cofre se abre
      arpegio([523,659,784,1047],.35,.07,.12);
      arpegio([587,740,880,1175],.65,.07,.12);
      arpegio([659,831,988,1319],.95,.07,.12);
      [1047,1319,1568].forEach(f=>nota(f,1.3,.9,{vol:.06,vibrato:10}));
      nota(131,1.3,.9,{forma:'triangle',vol:.25});
    }
  }catch(e){}
}
/* Botón para prender o apagar el sonido. Se agrega solo en la barra de arriba o en el panel de inicio. */
(function(){
  const lugar=document.querySelector('.barra-in')||document.querySelector('.hud .xp-row');
  if(!lugar)return;
  const b=h('button',{cls:'btn small sonido',type:'button'});
  const pintar=()=>{b.innerHTML=S.mudo?'🔇<span class="sonido-txt"> Sin sonido</span>':'🔊<span class="sonido-txt"> Sonido</span>';b.setAttribute('aria-label',S.mudo?'Sonido apagado. Toca para prenderlo':'Sonido prendido. Toca para apagarlo')};
  b.addEventListener('click',()=>{S.mudo=!S.mudo;save();pintar();sonido('ok')});
  pintar();lugar.append(b);
})();

/* Bitácora: guarda por día el tiempo activo y lo que hizo (misiones, lecciones, retos y exámenes).
   Cada registro lleva fecha e identificador único para poder exportarlo y combinarlo después. */
const diaClave=(d=new Date())=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
function bit(){
  const b=S.bitacora||(S.bitacora={});
  b.v=1;b.dias=b.dias||{};b.ev=b.ev||[];
  return b;
}
function registrar(tipo,datos){
  const ahora=Date.now();
  bit().ev.push({id:ahora.toString(36)+Math.random().toString(36).slice(2,7),t:ahora,dia:diaClave(),tipo,tr:TRIM,...datos});
  save();
}
/* Tiempo activo: suma cada 15 segundos solo si la página está a la vista
   y hubo actividad en los últimos 3 minutos. La bitácora no cuenta como tiempo de estudio. */
(function(){
  if(document.body.dataset.reloj==='no')return;
  const PASO=15,INACTIVO=180000;
  let ultimo=Date.now();
  ['pointerdown','keydown','scroll','touchstart','wheel'].forEach(e=>addEventListener(e,()=>{ultimo=Date.now()},{passive:true}));
  setInterval(()=>{
    if(document.hidden||Date.now()-ultimo>INACTIVO)return;
    const d=bit().dias,k=diaClave();
    d[k]=d[k]||{seg:0};d[k].seg+=PASO;save();
  },PASO*1000);
})();
