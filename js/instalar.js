/* Instalar SPARK en la pantalla de inicio del celular, como una app.
   Android y computadoras con Chrome o Edge: el navegador avisa que se puede instalar y mostramos un botón.
   iPhone y iPad: Safari no tiene botón, así que explicamos cómo hacerlo desde Compartir.
   Cada paso confirma qué pasó: «instalando», «¡listo!» o «no se instaló».
   La primera vez que SPARK se abre como app, una bienvenida confirma que la instalación funcionó (en iPhone es la única confirmación posible). */
(()=>{
const el=(t,a={},...k)=>{const e=document.createElement(t);for(const x in a){if(x==='cls')e.className=a[x];else if(x.startsWith('on'))e.addEventListener(x.slice(2),a[x]);else e.setAttribute(x,a[x])}k.flat().forEach(c=>c!=null&&e.append(c));return e};
const yaInstalada=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
const BIENVENIDA='universo-spark-app-bienvenida';

/* ---------- Bienvenida al abrir como app por primera vez ---------- */
if(yaInstalada){
  let vista=true;try{vista=!!localStorage.getItem(BIENVENIDA);if(!vista)localStorage.setItem(BIENVENIDA,new Date().toISOString())}catch(e){}
  if(!vista){
    const aviso=el('div',{cls:'app-bienvenida',role:'status'},
      el('img',{src:'imagenes/icono-192.png',alt:'',width:'48',height:'48'}),
      el('div',{},el('b',{},'🎉 ¡SPARK quedó instalado!'),el('p',{},'Ya lo abres desde su ícono, sin buscarlo en el navegador.')),
      el('button',{cls:'btn small',type:'button','aria-label':'Cerrar aviso',onclick:()=>aviso.remove()},'✕'));
    document.body.append(aviso);
    setTimeout(()=>aviso.remove(),9000);
  }
  return;
}

const caja=document.getElementById('instalar');
if(!caja)return;
const ios=/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const mostrar=(tipo,...contenido)=>{
  caja.className='aviso-app'+(tipo?' '+tipo:'');
  caja.replaceChildren(el('img',{src:'imagenes/icono-192.png',alt:'',width:'56',height:'56'}),el('div',{},...contenido));
  caja.hidden=false;
};
let aviso=null,instalada=false;

function exito(){
  if(instalada)return;instalada=true;
  mostrar('ok',el('b',{},'✅ ¡SPARK se instaló!'),
    el('p',{},'Busca el ícono del robot SPARK en tu pantalla de inicio (puede tardar unos segundos en aparecer). Desde ahí se abre como app, aunque no haya señal.'));
}
function ofrecer(){
  aviso=window.avisoInstalar;if(!aviso||instalada)return;
  mostrar('',el('b',{},'Pon a SPARK en tu pantalla de inicio'),
    el('p',{},'Así lo abres con un toque, como cualquier app, y funciona aunque no haya señal. Tu celular te pedirá confirmar.'),
    el('button',{cls:'btn main',type:'button',onclick:async()=>{
      if(!aviso)return;aviso.prompt();
      const r=await aviso.userChoice.catch(()=>({}));
      aviso=window.avisoInstalar=null;
      if(r.outcome==='accepted'){
        mostrar('',el('b',{},'⏳ Instalando SPARK…'),el('p',{},'Tu celular está agregando el ícono. Tarda unos segundos.'));
        setTimeout(exito,4000);   /* por si el navegador no avisa al terminar */
      }else{
        mostrar('neutro',el('b',{},'No se instaló.'),el('p',{},'No pasa nada: puedes seguir usando SPARK desde el navegador. Si cambias de opinión, vuelve a esta página más tarde y aparecerá el botón otra vez.'));
      }
    }},'📲 Instalar SPARK'));
}
addEventListener('spark-instalable',ofrecer);
ofrecer();
addEventListener('appinstalled',exito);

/* ---------- iPhone y iPad: Apple no permite un botón que instale directo.
   El botón abre una guía con los pasos exactos según el navegador y la versión de iOS. ---------- */
const ICONO_COMPARTIR='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>';
const ICONO_PUNTOS='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7.5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="16.5" cy="12" r="1.6" fill="currentColor"/></svg>';
const icono=svg=>el('span',{cls:'guia-icono'}).appendChild(Object.assign(document.createElement('span'),{innerHTML:svg})).parentNode;
function pasosIOS(){
  const ua=navigator.userAgent;
  if(/FBAN|FBAV|Instagram|Line\/|TikTok|musical_ly|Snapchat|Twitter|LinkedInApp/i.test(ua))return {tipo:'app',pasos:[
    ['Estás dentro de otra app (Facebook, Instagram…), y desde ahí no se puede instalar.'],
    ['Toca el menú ',icono(ICONO_PUNTOS),' de esta pantalla y elige ',el('b',{},'Abrir en Safari'),', o copia el enlace y pégalo en Safari.'],
    ['Ya en Safari, toca otra vez ',el('b',{},'📲 Instalar SPARK'),' y sigue los pasos.']]};
  if(/CriOS|FxiOS|EdgiOS/.test(ua))return {tipo:'otro',pasos:[
    ['Toca el botón ',el('b',{},'Compartir '),icono(ICONO_COMPARTIR),' en la barra de direcciones.'],
    ['Busca y toca ',el('b',{},'Agregar a inicio'),'. Si no aparece, desliza la lista hacia abajo o toca ',el('b',{},'Más'),'.'],
    ['Toca ',el('b',{},'Agregar'),'.'],
    ['¿No encuentras la opción? Abre esta misma página en ',el('b',{},'Safari'),' y vuelve a tocar 📲 Instalar SPARK.']]};
  const v=+((ua.match(/Version\/(\d+)/)||[])[1]||0);
  if(v>=26)return {tipo:'safari26',pasos:[
    ['Toca el botón ',icono(ICONO_PUNTOS),' (tres puntos) junto a la barra de direcciones.'],
    ['Toca ',el('b',{},'Compartir '),icono(ICONO_COMPARTIR),'.'],
    ['Desliza hacia abajo y toca ',el('b',{},'Agregar a inicio'),'.'],
    ['Deja encendida la opción de abrirlo como app web y toca ',el('b',{},'Agregar'),'.']]};
  return {tipo:'safari',pasos:[
    ['Toca el botón ',el('b',{},'Compartir '),icono(ICONO_COMPARTIR),' en la barra de abajo (en iPad está arriba, a la derecha).'],
    ['Desliza hacia abajo y toca ',el('b',{},'Agregar a inicio'),'.'],
    ['Toca ',el('b',{},'Agregar'),' arriba a la derecha.']]};
}
function abrirGuia(){
  const {tipo,pasos}=pasosIOS();
  const cerrar=()=>{fondo.remove();document.removeEventListener('keydown',esc)};
  const esc=e=>{if(e.key==='Escape')cerrar()};
  const fondo=el('div',{cls:'guia-fondo',onclick:e=>{if(e.target===fondo)cerrar()}},
    el('div',{cls:'guia-ios',role:'dialog','aria-modal':'true','aria-labelledby':'guia-titulo','data-tipo':tipo},
      el('div',{cls:'guia-cabeza'},el('img',{src:'imagenes/icono-192.png',alt:'',width:'48',height:'48'}),
        el('div',{},el('h2',{id:'guia-titulo'},'Instalar SPARK en tu iPhone'),el('p',{},'Apple no permite instalar con un solo botón, pero son pocos pasos:'))),
      el('ol',{cls:'guia-pasos'},...pasos.map(p=>el('li',{},...p))),
      tipo==='app'?el('button',{cls:'btn',type:'button',onclick:async e=>{try{await navigator.clipboard.writeText(location.href);e.target.textContent='✅ Enlace copiado'}catch(_){e.target.textContent=location.href}}},'🔗 Copiar enlace'):null,
      el('p',{cls:'guia-nota'},'Al terminar, abre SPARK desde su ícono en la pantalla de inicio: te saludará para confirmar que quedó instalado. Solo se agrega un acceso directo; no se descarga ningún programa.'),
      el('button',{cls:'btn main',type:'button',onclick:cerrar},'Entendido')));
  document.body.append(fondo);document.addEventListener('keydown',esc);
  fondo.querySelector('.btn.main').focus();
}
if(ios)mostrar('',el('b',{},'Pon a SPARK en tu pantalla de inicio'),
  el('p',{},'Así lo abres con un toque, como cualquier app, y funciona aunque no haya señal.'),
  el('button',{cls:'btn main',type:'button',onclick:abrirGuia},'📲 Instalar SPARK'));
})();
