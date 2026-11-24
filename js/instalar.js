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

if(ios)mostrar('',el('b',{},'Pon a SPARK en tu pantalla de inicio'),
  el('p',{},'En Safari toca ',el('b',{},'Compartir'),' (el cuadro con la flecha hacia arriba) y luego ',el('b',{},'Agregar a inicio'),'. Cuando abras SPARK desde su ícono, te saludará para confirmar que quedó instalado.'));
})();
