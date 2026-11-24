/* Universo SPARK: grados disponibles, perfil del tripulante y grado activo.
   Cada grado vive en grados/<n>/ y se carga solo cuando se elige. Su avance se guarda aparte. */
const GRADOS={
  1:{nombre:'1.º de primaria',corto:'1.º',lema:'Leer, contar y conocer mi cuerpo',activo:true,archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 3 de la SEP para 1.º de primaria.'},
  2:{nombre:'2.º de primaria',corto:'2.º',lema:'Escribir, sumar y cuidar mi entorno',activo:true,archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 3 de la SEP para 2.º de primaria.'},
  3:{nombre:'3.º de primaria',corto:'3.º',lema:'Fracciones, ecosistemas y mi entidad',activo:true,
     archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 4 de la SEP para 3.º de primaria.'},
  4:{nombre:'4.º de primaria',corto:'4.º',lema:'Decimales, nutrición y el mapa de México',activo:true,
     archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 4 de la SEP para 4.º de primaria.'},
  5:{nombre:'5.º de primaria',corto:'5.º',lema:'Independencia, biodiversidad y porcentajes',activo:true,
     archivos:['trimestre1','trimestre2','trimestre3'],
     fuente:()=>'Basada en el Programa Sintético de la Fase 5 de la SEP para 5.º de primaria.'},
  6:{nombre:'6.º de primaria',corto:'6.º',lema:'Cuerpo humano, π, Revolución y democracia',activo:true,
     archivos:['datos','temas','examenes','practica','trimestre2','trimestre3'],
     fuente:t=>t===1?'Basada en el temario de evaluación del 1.er trimestre de 6.º.':
       'Basada en los libros de 6.º (Universo Luca y Nova) y en el Programa Sintético de la Fase 5 de la SEP.'}
};
const PERFIL_KEY='universo-spark';
const leerPerfil=()=>{try{return JSON.parse(localStorage.getItem(PERFIL_KEY)||'{}')||{}}catch(e){return{}}};
const guardarPerfil=p=>{try{localStorage.setItem(PERFIL_KEY,JSON.stringify(p))}catch(e){}};
const claveGrado=g=>`universo-spark-g${g}`;

/* Quien ya usaba la versión anterior (solo 6.º) conserva su avance y entra directo a 6.º */
(()=>{try{
  const viejo=localStorage.getItem('mision-trimestre-v1');
  if(viejo&&!localStorage.getItem(claveGrado(6))){
    localStorage.setItem(claveGrado(6),viejo);
    const p=leerPerfil();if(!p.grado){p.grado=6;guardarPerfil(p)}
  }
}catch(e){}})();

const PERFIL=leerPerfil();
const GRADO=GRADOS[PERFIL.grado]&&GRADOS[PERFIL.grado].activo?+PERFIL.grado:0;
const KEY=GRADO?claveGrado(GRADO):null;
/* 1.º y 2.º usan letra y botones más grandes, exámenes y retos más cortos y dibujos en las lecciones. */
const PEQUES=GRADO>0&&GRADO<=2;
if(PEQUES)document.documentElement.classList.add('peques');
/* La tipografía de jeroglíficos solo la usa 6.º; los demás grados no la descargan. */
if(GRADO===6){const l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs&display=swap';document.head.append(l)}
/* Nombre para hablarle: el que escribió o «tripulante». */
const nombreTripulante=()=>(PERFIL.nombre||'').trim()||'tripulante';
const tieneNombre=()=>!!(PERFIL.nombre||'').trim();

/* Carga los datos del grado y luego el motor y la página, en orden.
   Sin grado elegido, regresa a la entrada. */
function cargar(...pagina){
  if(!GRADO){location.replace('index.html');return}
  const lista=[...GRADOS[GRADO].archivos.map(a=>`grados/${GRADO}/${a}.js`),'js/trimestre.js','js/comun.js',...pagina.map(p=>`js/${p}.js`)];
  lista.forEach(src=>{const s=document.createElement('script');s.src=src;s.async=false;document.body.append(s)});
}

/* Respaldo de avance (respaldo.html). Aquí vive la regla de «ya toca respaldar», que usan la barra, la misión y la página. */
const MARCA_RESPALDO='universo-spark-respaldo',DIAS_RESPALDO=7;
const ultimoRespaldo=()=>{try{return localStorage.getItem(MARCA_RESPALDO)}catch(e){return null}};
function hayAvance(){
  try{for(let g=1;g<=6;g++){const s=JSON.parse(localStorage.getItem(claveGrado(g))||'{}');if(Object.keys(s.sesiones||{}).length||Object.keys(s.examenes||{}).length)return true}}catch(e){}
  return false;
}
/* Toca respaldar si hay avance y nunca se ha guardado una copia, o la última tiene 7 días o más. */
function necesitaRespaldo(){
  if(!hayAvance())return false;
  const u=ultimoRespaldo();
  return !u||(Date.now()-new Date(u))/864e5>=DIAS_RESPALDO;
}
/* Acceso 💾 siempre visible en la barra de arriba (en «Mi base», junto al XP). Con un punto rojo cuando toca respaldar. */
(function(){
  if(/respaldo\.html$/.test(location.pathname))return;
  const lugar=document.querySelector('.barra-in')||document.querySelector('.hud .xp-row');
  if(!lugar)return;
  const a=document.createElement('a');
  a.className='btn small resp-ir'+(necesitaRespaldo()?' pendiente':'');a.href='respaldo.html';
  a.setAttribute('aria-label',necesitaRespaldo()?'Respaldo de avance: ya toca guardar una copia':'Respaldo de avance');
  a.innerHTML='💾<span class="sonido-txt"> Respaldo</span>';
  lugar.append(a);
})();
/* El navegador avisa muy pronto que SPARK se puede instalar; lo guardamos para que js/instalar.js muestre el botón aunque cargue después. */
addEventListener('beforeinstallprompt',e=>{e.preventDefault();window.avisoInstalar=e;dispatchEvent(new Event('spark-instalable'))});
/* Guarda una copia de la app en el celular para que abra rápido y funcione sin señal (ver sw.js). */
if('serviceWorker' in navigator&&location.protocol==='https:')
  addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

/* Diagnóstico de velocidad: abre cualquier página con ?diag al final de la dirección.
   Aparece aunque la página no termine de cargar y se actualiza solo durante 30 s.
   Queda activo en todas las páginas hasta cerrar la pestaña; ?nodiag lo apaga. */
const VERSION_APP='2.2.0';
(function(){
  try{
    if(/[?&]nodiag/.test(location.search))sessionStorage.removeItem('spark-diag');
    else if(/[?&]diag/.test(location.search))sessionStorage.setItem('spark-diag','1');
    if(!sessionStorage.getItem('spark-diag'))return;
  }catch(e){return}
  const t0=Date.now();let caja,texto='';
  function medir(){
    const ms=v=>v>0?Math.round(v)+' ms':'—';
    const n=performance.getEntriesByType('navigation')[0]||{};
    const fcp=(performance.getEntriesByType('paint').find(e=>e.name==='first-contentful-paint')||{}).startTime;
    const c=navigator.connection||{};
    const sw=navigator.serviceWorker&&navigator.serviceWorker.controller?'sí':'no';
    const nombre=u=>{try{const x=new URL(u);return x.host===location.host?x.pathname.split('/').slice(-2).join('/'):x.host}catch(e){return u}};
    const recursos=performance.getEntriesByType('resource').map(r=>({n:nombre(r.name),dur:r.duration,guardado:r.transferSize===0&&r.decodedBodySize>0}));
    const lento=[...recursos].sort((a,b)=>b.dur-a.dur).slice(0,8);
    const lineas=[
      `SPARK ${VERSION_APP} · ${location.pathname.split('/').pop()||'index.html'} · ${new Date().toLocaleTimeString('es-MX')}`,
      `Navegador: ${navigator.userAgent.replace(/^Mozilla\/5\.0 /,'').slice(0,90)}`,
      `Red: ${c.effectiveType||'?'} · ${c.downlink?c.downlink+' Mbps':'?'} · RTT ${c.rtt?c.rtt+' ms':'?'} · copia activa: ${sw}`,
      `Servidor: DNS ${ms(n.domainLookupEnd-n.domainLookupStart)} · conexión ${ms(n.connectEnd-n.connectStart)} · primera respuesta ${ms(n.responseStart-n.requestStart)} · HTML completo ${ms(n.responseEnd)}`,
      `Primera pintura ${ms(fcp)} · página lista ${ms(n.domContentLoadedEventEnd)} · todo cargado ${n.loadEventEnd?ms(n.loadEventEnd):'todavía no ('+Math.round((Date.now()-t0)/1000)+' s)'}`,
      `Contenido de SPARK en pantalla: ${document.querySelector('.mundo,.st,.tarjeta,.leccion,#grados .mundo')?'sí':'no'} · errores: ${errores.length?errores.join(' | '):'ninguno'}`,
      `Archivos terminados: ${recursos.length} (${recursos.filter(r=>r.guardado).length} desde la copia del celular)`,
      'Los más lentos:',...lento.map(r=>`  ${ms(r.dur).padStart(8)}  ${r.n}${r.guardado?' (copia)':''}`)];
    texto=lineas.join('\n');
    if(!caja){
      caja=document.createElement('div');
      caja.style.cssText='position:fixed;left:8px;right:8px;bottom:8px;z-index:99999;background:#111;color:#9f9;font:12px/1.45 monospace;padding:10px 12px;border-radius:10px;white-space:pre-wrap;max-height:60vh;overflow:auto;box-shadow:0 4px 20px #0008';
      const b=document.createElement('button');b.textContent='Copiar';b.style.cssText='float:right;margin-left:8px;font:inherit;padding:4px 10px';
      b.onclick=()=>{try{navigator.clipboard.writeText(texto);b.textContent='Copiado'}catch(e){b.textContent='Selecciona y copia'}};
      const x=document.createElement('button');x.textContent='✕';x.style.cssText='float:right;font:inherit;padding:4px 10px';x.onclick=()=>{caja.remove();clearInterval(rep)};
      caja.append(x,b,document.createElement('span'));(document.body||document.documentElement).append(caja);
    }
    caja.lastChild.textContent=texto;
  }
  const errores=[];
  addEventListener('error',e=>errores.push((e.message||(e.target&&(e.target.src||e.target.href))||'error').toString().slice(0,80)),true);
  const rep=setInterval(()=>{medir();if(Date.now()-t0>30000)clearInterval(rep)},2000);
  addEventListener('DOMContentLoaded',()=>setTimeout(medir,300));
  addEventListener('load',()=>setTimeout(medir,300));
})();
