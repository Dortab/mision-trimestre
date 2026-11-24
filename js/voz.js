/* Lectura en voz alta con la voz del navegador (no cuesta ni necesita archivos).
   - Botón 🔊 en cada lección, tarjeta y pregunta.
   - En 1.º y 2.º lee solo al aparecer cada pantalla; de 3.º a 6.º es opcional (se activa en la barra).
   - No dice el nombre del niño: en algunos navegadores la voz se genera en servidores externos. */
(()=>{
if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window))return;
const sintesis=window.speechSynthesis;
let voz=null,listo=false,conBarra=false;

/* Elige la mejor voz en español: México, luego latinoamericana, luego cualquiera. Prefiere las del propio dispositivo. */
function elegirVoz(){
  const vs=sintesis.getVoices().filter(v=>/^es/i.test(v.lang));
  const nivel=v=>{const l=v.lang.toLowerCase().replace('_','-');return l==='es-mx'?0:/es-(us|419|co|ar|cl|pe|ve|gt|cr|pa|do|ec|bo|py|uy|hn|ni|sv|pr|cu)/.test(l)?1:l==='es-es'?3:2};
  vs.sort((a,b)=>nivel(a)-nivel(b)||(b.localService-a.localService));
  voz=vs[0]||null;
  document.documentElement.classList.toggle('con-voz',!!voz);
  if(voz&&listo){procesar(document.body);ponerInterruptor()}
}
elegirVoz();
if('onvoiceschanged' in sintesis)sintesis.addEventListener('voiceschanged',elegirVoz);

/* ¿Lee solo al aparecer? En 1.º y 2.º sí, salvo que la familia lo apague; de 3.º en adelante, solo si lo activan. */
const autoVoz=()=>S.vozAuto===undefined?GRADO<=2:!!S.vozAuto;

/* Convierte el texto de la pantalla en algo que la voz lea bien. */
const NUM=['cero','un','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce'];
const DEN={2:['medio','medios'],3:['tercio','tercios'],4:['cuarto','cuartos'],5:['quinto','quintos'],6:['sexto','sextos'],7:['séptimo','séptimos'],8:['octavo','octavos'],9:['noveno','novenos'],10:['décimo','décimos'],12:['doceavo','doceavos'],16:['dieciseisavo','dieciseisavos'],100:['centésimo','centésimos'],1000:['milésimo','milésimos']};
const fraccion=(a,b)=>{a=+a;b=+b;const d=DEN[b];if(!d)return ` ${a} sobre ${b} `;return ` ${NUM[a]||a} ${a===1?d[0]:d[1]} `};
const ORD={1:'primero',2:'segundo',3:'tercero',4:'cuarto',5:'quinto',6:'sexto'};
function textoDe(el){
  const c=el.cloneNode(true);
  c.querySelectorAll('.voz-btn,.sr-ignorar').forEach(x=>x.remove());
  c.querySelectorAll('.fr').forEach(f=>{const i=f.querySelectorAll('i');f.replaceWith(i.length===2?fraccion(i[0].textContent,i[1].textContent):f.textContent)});
  c.querySelectorAll('*').forEach(e=>{e.before(' ');e.after(' ')});
  return limpiar(c.textContent);
}
function limpiar(t){
  if(tieneNombre()){const n=PERFIL.nombre.trim();t=t.split(', '+n).join('').split(n).join('')}
  return t
    .replace(/\p{Extended_Pictographic}|️/gu,'')
    .replace(/(\d) (?=\d{3}\b)/g,'$1')
    .replace(/\$\s?([\d.,]+)/g,'$1 pesos')
    .replace(/(\d)\.er\b/g,'primer').replace(/(\d)\.º/g,(m,d)=>ORD[d]||d)
    .replace(/km²/g,' kilómetros cuadrados').replace(/cm²/g,' centímetros cuadrados').replace(/m²/g,' metros cuadrados')
    .replace(/(\d)\s?km\b/g,'$1 kilómetros').replace(/(\d)\s?cm\b/g,'$1 centímetros').replace(/(\d)\s?mm\b/g,'$1 milímetros')
    .replace(/(\d)\s?kg\b/g,'$1 kilogramos').replace(/(\d)\s?ml\b/g,'$1 mililitros').replace(/(\d)\s?m\b/g,'$1 metros')
    .replace(/(\d)\s?g\b/g,'$1 gramos').replace(/(\d)\s?L\b/g,'$1 litros').replace(/(\d)\s?t\b/g,'$1 toneladas')
    .replace(/°C/g,' grados').replace(/°/g,' grados').replace(/%/g,' por ciento')
    .replace(/\s?\+\s?/g,' más ').replace(/\s?=\s?/g,' es igual a ').replace(/\s?−\s?/g,' menos ').replace(/(\d) - (\d)/g,'$1 menos $2').replace(/×/g,' por ').replace(/÷/g,' entre ').replace(/≈/g,' aproximadamente ').replace(/π/g,' pi ')
    .replace(/\s>\s/g,' mayor que ').replace(/\s<\s/g,' menor que ').replace(/^>$/,'mayor que').replace(/^<$/,'menor que')
    .replace(/→/g,', luego, ').replace(/[«»"“”]/g,'').replace(/·/g,', ').replace(/—/g,', ')
    .replace(/\s+/g,' ').trim();
}

/* Partes que se leen: [{t: texto, el: elemento que se resalta}] */
function partesLeccion(art){
  return [...art.querySelectorAll('h2,h3,h4,p,li')]
    .filter(e=>!e.closest('.row,label,button,.nums,.voz-btn')&&!e.classList.contains('count'))
    .map(e=>({t:textoDe(e),el:e})).filter(p=>p.t);
}
function partesPregunta(stem){
  const partes=[{t:textoDe(stem),el:stem}];
  let opts=stem.nextElementSibling;
  while(opts&&!opts.classList.contains('opts'))opts=opts.nextElementSibling;
  if(opts){const bs=[...opts.querySelectorAll('.opt')];
    if(bs.length===2&&/verdadero/i.test(bs[0].textContent))partes.push({t:'¿Verdadero o falso?',el:opts});
    else bs.forEach((b,i)=>partes.push({t:`Opción ${i+1}: ${textoDe(b)}`,el:b}));}
  return partes;
}

/* Habla una lista de partes, resaltando cada una mientras se lee. */
let leyendo=null,ultimoAuto='',ultimoT=0,pendiente=null,desbloqueado=false;
function callar(){sintesis.cancel();if(leyendo)leyendo.classList.remove('leyendo');leyendo=null;document.querySelectorAll('.voz-btn[aria-pressed="true"]').forEach(b=>b.setAttribute('aria-pressed','false'))}
function hablar(partes,boton){
  callar();
  if(!voz||!partes.length)return;
  if(boton)boton.setAttribute('aria-pressed','true');
  partes.forEach((p,i)=>{
    const u=new SpeechSynthesisUtterance(p.t);
    u.voice=voz;u.lang=voz.lang;u.rate=1;u.pitch=1;
    u.onstart=()=>{if(leyendo)leyendo.classList.remove('leyendo');leyendo=p.el;if(p.el&&p.el.isConnected)p.el.classList.add('leyendo')};
    u.onend=u.onerror=()=>{if(i===partes.length-1){if(leyendo)leyendo.classList.remove('leyendo');leyendo=null;if(boton)boton.setAttribute('aria-pressed','false')}};
    sintesis.speak(u);
  });
}
/* Lectura automática: no repite el mismo texto seguido y espera el primer toque si el navegador lo exige (iPhone). */
function autoLeer(partes){
  if(!autoVoz()||S.mudo||!partes.length)return;
  const clave=partes.map(p=>p.t).join('|');
  if(clave===ultimoAuto&&Date.now()-ultimoT<60000)return;
  ultimoAuto=clave;ultimoT=Date.now();
  if(desbloqueado)hablar(partes);else pendiente=partes;
}
['pointerdown','keydown','touchstart'].forEach(e=>addEventListener(e,()=>{
  if(desbloqueado)return;desbloqueado=true;
  if(pendiente){const p=pendiente;pendiente=null;setTimeout(()=>hablar(p),0)}
},{capture:true,passive:true}));
/* Si el niño toca una respuesta o navega, se calla para no encimar voces. */
document.addEventListener('click',e=>{if(e.target.closest('.opt,.btn.main,.etapa,.num,.st,a'))callar()},true);
addEventListener('pagehide',callar);

function boton(etiqueta,obtener,grande){
  const b=h('button',{cls:'voz-btn'+(grande?' grande':''),type:'button','aria-pressed':'false','aria-label':etiqueta,title:etiqueta},grande?'🔊 Escuchar':'🔊');
  b.addEventListener('click',e=>{e.stopPropagation();if(b.getAttribute('aria-pressed')==='true')return callar();hablar(obtener(),b)});
  return b;
}

/* Agrega botones a lo que va apareciendo en pantalla y, si toca, lo lee solo. */
const LECTURA='article.leccion,article.tarjeta';
function procesar(raiz){
  if(!voz||!(raiz instanceof Element))return;
  const nuevos=[];
  const arts=[...(raiz.matches(LECTURA)?[raiz]:[]),...raiz.querySelectorAll(LECTURA)];
  arts.forEach(a=>{
    if(a.dataset.voz||a.querySelector('.stem'))return;
    a.dataset.voz='1';
    const obtener=()=>partesLeccion(a);
    if(!obtener().length)return;
    a.prepend(boton('Escuchar en voz alta',obtener,true));
    nuevos.push(obtener());
  });
  const stems=[...(raiz.matches('.stem')?[raiz]:[]),...raiz.querySelectorAll('.stem')];
  stems.forEach(s=>{
    if(s.dataset.voz)return;
    s.dataset.voz='1';
    const obtener=()=>partesPregunta(s);
    s.append(' ',boton('Escuchar la pregunta',obtener));
    /* En las listas de revisión del examen solo se pone el botón; no se leen todas seguidas. */
    if(!s.closest('section.leccion'))nuevos.push(obtener());
  });
  if(nuevos.length)autoLeer(nuevos.flat());
}
/* La retroalimentación (Correcto / Todavía no…) se lee sola en modo automático. */
function leerRespuesta(fb){
  if(!fb.classList.contains('fb')||!/\b(y|n)\b/.test(fb.className)||!fb.textContent.trim())return;
  autoLeer([{t:textoDe(fb),el:fb}]);
}
new MutationObserver(ms=>{
  ms.forEach(m=>{
    if(m.type==='childList'){
      m.addedNodes.forEach(n=>procesar(n));
      if(m.target.classList&&m.target.classList.contains('fb'))leerRespuesta(m.target);
    }
  });
}).observe(document.body,{childList:true,subtree:true});
setTimeout(()=>{listo=true;if(voz){procesar(document.body);ponerInterruptor()}},0);

/* Interruptor en la barra: «Leer solo». Solo aparece si el dispositivo tiene voz en español. */
function ponerInterruptor(){
  const lugar=document.querySelector('.barra-in')||document.querySelector('.hud .xp-row');
  if(!lugar||conBarra)return;conBarra=true;
  const b=h('button',{cls:'btn small voz-auto',type:'button'});
  const pintar=()=>{const on=autoVoz();b.innerHTML=on?'🗣️<span class="sonido-txt"> Leer solo: sí</span>':'🗣️<span class="sonido-txt"> Leer solo: no</span>';
    b.setAttribute('aria-pressed',String(on));b.setAttribute('aria-label',on?'Lectura automática prendida. Toca para apagarla':'Lectura automática apagada. Toca para prenderla')};
  b.addEventListener('click',()=>{S.vozAuto=!autoVoz();save();pintar();if(!S.vozAuto)callar()});
  pintar();lugar.append(b);
}
window.VOZ={hablar,callar,limpiar,textoDe,elegida:()=>voz};
})();
