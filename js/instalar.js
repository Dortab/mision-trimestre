/* Instalar SPARK en la pantalla de inicio del celular, como una app.
   Android y computadoras con Chrome o Edge: el navegador avisa que se puede instalar y mostramos un botón.
   iPhone y iPad: Safari no tiene botón, así que explicamos cómo hacerlo desde Compartir.
   Si SPARK ya está instalada y abierta como app, no se muestra nada. */
(()=>{
const caja=document.getElementById('instalar');
if(!caja)return;
const yaInstalada=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
if(yaInstalada)return;
const el=(t,a={},...k)=>{const e=document.createElement(t);for(const x in a){if(x==='cls')e.className=a[x];else if(x.startsWith('on'))e.addEventListener(x.slice(2),a[x]);else e.setAttribute(x,a[x])}k.flat().forEach(c=>c!=null&&e.append(c));return e};
const ios=/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const mostrar=(...contenido)=>{caja.replaceChildren(el('img',{src:'imagenes/icono-192.png',alt:'',width:'56',height:'56'}),el('div',{},...contenido));caja.hidden=false};
let aviso=null;

function ofrecer(){
  aviso=window.avisoInstalar;if(!aviso)return;
  mostrar(el('b',{},'Pon a SPARK en tu pantalla de inicio'),
    el('p',{},'Así lo abres con un toque, como cualquier app, y funciona aunque no haya señal.'),
    el('button',{cls:'btn main',type:'button',onclick:async()=>{
      if(!aviso)return;aviso.prompt();
      const r=await aviso.userChoice.catch(()=>({}));
      aviso=window.avisoInstalar=null;if(r.outcome==='accepted')caja.hidden=true;
    }},'📲 Instalar SPARK'));
}
addEventListener('spark-instalable',ofrecer);
ofrecer();
addEventListener('appinstalled',()=>{caja.hidden=true});

if(ios)mostrar(el('b',{},'Pon a SPARK en tu pantalla de inicio'),
  el('p',{},'En Safari toca ',el('b',{},'Compartir'),' (el cuadro con la flecha hacia arriba) y luego ',el('b',{},'Agregar a inicio'),'. Así lo abres con un toque, como cualquier app.'));
})();
