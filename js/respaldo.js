/* Página «Respaldo de avance» (respaldo.html).
   Todo el avance vive en este navegador; aquí se saca una copia y se recupera en otro dispositivo.
   Sin cuentas ni servidores: la copia es un archivo o un código que la familia guarda donde quiera (WhatsApp, correo, Drive).
   La fecha del último respaldo y el aviso de «ya toca respaldar» viven en js/grados.js (ultimoRespaldo, necesitaRespaldo). */
(()=>{
const PREFIJO='universo-spark';
const cajaG=document.getElementById('guardar'),cajaR=document.getElementById('recuperar-caja');
if(!cajaG||!cajaR)return;
const el=(t,a={},...k)=>{const e=document.createElement(t);for(const x in a){if(x==='cls')e.className=a[x];else if(x.startsWith('on'))e.addEventListener(x.slice(2),a[x]);else e.setAttribute(x,a[x])}k.flat().forEach(c=>c!=null&&e.append(c));return e};
const valida=k=>k===PREFIJO||/^universo-spark-g[1-6]$/.test(k);

/* El botón de regreso lleva a «Mi base» si ya hay grado elegido; si no, a la entrada. */
const volver=document.getElementById('volver');
if(volver&&typeof GRADO!=='undefined'&&GRADO){volver.href='base.html';volver.textContent='Mi base'}

function recolectar(){
  const datos={};
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(valida(k))datos[k]=localStorage.getItem(k)}
  return datos;
}
/* Resumen legible: nombre y misiones hechas en cada grado. */
function resumen(datos){
  let perfil={};try{perfil=JSON.parse(datos[PREFIJO]||'{}')}catch(e){}
  const grados=Object.keys(datos).filter(k=>k!==PREFIJO).sort().map(k=>{
    let s={};try{s=JSON.parse(datos[k])}catch(e){}
    return {g:+k.slice(-1),misiones:Object.keys(s.sesiones||{}).length,examenes:Object.keys(s.examenes||{}).length};
  }).filter(x=>x.misiones||x.examenes);
  const nombre=(perfil.nombre||'').trim()||'tripulante';
  const total=grados.reduce((a,x)=>a+x.misiones+x.examenes,0);
  const texto=grados.length?grados.map(x=>`${x.g}.º: ${x.misiones} ${x.misiones===1?'misión':'misiones'}`).join(' · '):'todavía sin misiones';
  return {nombre,total,texto};
}

/* El código: JSON comprimido (si el navegador puede) y en base64 para pegarlo en un chat. */
const b64=bytes=>{let s='';bytes.forEach(b=>s+=String.fromCharCode(b));return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')};
const deb64=t=>{t=t.replace(/-/g,'+').replace(/_/g,'/');while(t.length%4)t+='=';return Uint8Array.from(atob(t),c=>c.charCodeAt(0))};
async function pasar(bytes,flujo){return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(flujo)).arrayBuffer())}
async function aCodigo(paquete){
  const bytes=new TextEncoder().encode(JSON.stringify(paquete));
  if(window.CompressionStream)return 'SPARK1.'+b64(await pasar(bytes,new CompressionStream('gzip')));
  return 'SPARK0.'+b64(bytes);
}
async function deCodigo(t){
  t=t.trim().replace(/\s+/g,'');
  const m=t.match(/^SPARK([01])\.([A-Za-z0-9_-]+)$/);
  if(!m)throw new Error('formato');
  let bytes=deb64(m[2]);
  if(m[1]==='1'){if(!window.DecompressionStream)throw new Error('navegador');bytes=await pasar(bytes,new DecompressionStream('gzip'))}
  return JSON.parse(new TextDecoder().decode(bytes));
}
const paquete=()=>({app:'universo-spark',version:1,fecha:new Date().toISOString(),datos:recolectar()});
function revisar(p){
  if(!p||p.app!=='universo-spark'||typeof p.datos!=='object')throw new Error('formato');
  const datos={};
  Object.entries(p.datos).forEach(([k,v])=>{if(valida(k)&&typeof v==='string'){JSON.parse(v);datos[k]=v}});
  if(!Object.keys(datos).length)throw new Error('vacío');
  return {...p,datos};
}
const marcar=()=>{try{localStorage.setItem(MARCA_RESPALDO,new Date().toISOString())}catch(e){}};
const fechaCorta=iso=>new Date(iso).toLocaleDateString('es-MX',{day:'numeric',month:'long',year:'numeric'});
const zonaEstado=()=>el('p',{cls:'resp-estado',role:'status','aria-live':'polite'});
const decir=(zona,t,tipo='')=>{zona.textContent=t;zona.className='resp-estado '+tipo};

/* ---------- Guardar ---------- */
const estadoG=zonaEstado(),salida=el('div',{cls:'resp-salida'}),avisoG=el('p',{cls:'resp-aviso'}),actualG=el('p');
function pintarGuardar(){
  const r=resumen(recolectar()),ultimo=ultimoRespaldo(),dias=ultimo?Math.floor((Date.now()-new Date(ultimo))/864e5):null;
  actualG.replaceChildren('En este dispositivo: ',el('b',{},r.nombre),` · ${r.texto}.`);
  avisoG.textContent=!r.total?'Cuando haya misiones terminadas, conviene guardar aquí una copia.'
    :ultimo?(dias>=DIAS_RESPALDO?`El último respaldo fue hace ${dias} días. Conviene guardar uno nuevo.`:`Último respaldo: ${fechaCorta(ultimo)}.`)
    :'Todavía no hay ninguna copia guardada.';
  avisoG.className='resp-aviso'+(necesitaRespaldo()?' urgente':'');
}
async function guardarArchivo(){
  const p=paquete(),r=resumen(p.datos);
  const nombreArchivo=`SPARK-respaldo-${r.nombre.normalize('NFD').replace(/[^\w]+/g,'-').replace(/^-|-$/g,'')||'tripulante'}-${p.fecha.slice(0,10)}.json`;
  const archivo=new File([JSON.stringify(p,null,1)],nombreArchivo,{type:'application/json'});
  try{
    if(navigator.canShare&&navigator.canShare({files:[archivo]})){
      await navigator.share({files:[archivo],title:'Respaldo de Universo SPARK',text:`Avance de ${r.nombre} en Universo SPARK (${r.texto}).`});
      marcar();pintarGuardar();decir(estadoG,'Listo: guarden ese archivo en un lugar seguro.','ok');return;
    }
  }catch(e){if(e.name==='AbortError')return}
  const a=el('a',{href:URL.createObjectURL(archivo),download:nombreArchivo});
  document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  marcar();pintarGuardar();decir(estadoG,`Se descargó «${nombreArchivo}». Guárdenlo en un lugar seguro, por ejemplo mándenlo a su WhatsApp o correo.`,'ok');
}
async function copiarCodigo(){
  const codigo=await aCodigo(paquete());
  let copiado=false;
  try{await navigator.clipboard.writeText(codigo);copiado=true}catch(e){}
  marcar();pintarGuardar();
  const area=el('textarea',{cls:'resp-codigo',readonly:'',rows:'3','aria-label':'Código de respaldo'});area.value=codigo;
  salida.replaceChildren(area);
  if(!copiado){area.focus();area.select()}
  decir(estadoG,copiado?'Código copiado. Péguenlo en un chat con ustedes mismos o en una nota para no perderlo.':'Seleccionen el código y cópienlo. Péguenlo en un chat con ustedes mismos o en una nota.','ok');
}
pintarGuardar();
cajaG.replaceChildren(actualG,avisoG,
  el('div',{cls:'row resp-botones'},
    el('button',{cls:'btn main',type:'button',onclick:guardarArchivo},'💾 Guardar archivo de respaldo'),
    el('button',{cls:'btn',type:'button',onclick:copiarCodigo},'🔑 Copiar código de respaldo')),
  salida,estadoG);

/* ---------- Recuperar ---------- */
const estadoR=zonaEstado(),confirmar=el('div',{cls:'resp-confirmar adultos',hidden:''});
let pendiente=null;
async function leerArchivo(f){
  try{preparar(revisar(JSON.parse(await f.text())))}
  catch(e){decir(estadoR,'Ese archivo no es un respaldo de SPARK. Revisen que sea el archivo .json que guardaron.','mal')}
}
async function leerCodigo(t){
  if(!t.trim())return decir(estadoR,'Primero peguen el código de respaldo.','mal');
  try{preparar(revisar(await deCodigo(t)))}
  catch(e){decir(estadoR,e.message==='navegador'?'Este navegador no puede abrir ese código. Usen el archivo de respaldo o actualicen el navegador.':'Ese código no parece completo. Cópienlo de nuevo, sin cortar el principio ni el final.','mal')}
}
function preparar(p){
  pendiente=p;
  const r=resumen(p.datos),actual=resumen(recolectar());
  confirmar.replaceChildren(...[
    el('p',{},el('b',{},`Respaldo de ${r.nombre}`),` del ${fechaCorta(p.fecha)}: ${r.texto}.`),
    actual.total?el('p',{cls:'resp-ojo'},`Ojo: esto reemplaza el avance que hay ahora en este dispositivo (${actual.nombre}: ${actual.texto}).`):null,
    el('div',{cls:'row'},
      el('button',{cls:'btn main',type:'button',onclick:aplicar},'Sí, recuperar este avance'),
      el('button',{cls:'btn',type:'button',onclick:()=>{pendiente=null;confirmar.replaceChildren();confirmar.hidden=true;decir(estadoR,'')}},'Cancelar'))].filter(Boolean));
  confirmar.hidden=false;decir(estadoR,'');
  confirmar.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function aplicar(){
  if(!pendiente)return;
  const borrar=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(valida(k))borrar.push(k)}
  try{
    borrar.forEach(k=>localStorage.removeItem(k));
    Object.entries(pendiente.datos).forEach(([k,v])=>localStorage.setItem(k,v));
    localStorage.setItem(MARCA_RESPALDO,pendiente.fecha);
  }catch(e){return decir(estadoR,'No se pudo guardar en este navegador. Revisen que no esté en modo privado.','mal')}
  let perfil={};try{perfil=JSON.parse(pendiente.datos[PREFIJO]||'{}')}catch(e){}
  location.href=perfil.grado?'base.html':'index.html';
}
const archivo=el('input',{type:'file',accept:'.json,application/json',cls:'resp-archivo',onchange:e=>{const f=e.target.files[0];if(f)leerArchivo(f);e.target.value=''}});
const pegar=el('textarea',{cls:'resp-codigo',rows:'3',placeholder:'Peguen aquí el código que empieza con SPARK…','aria-label':'Código de respaldo para recuperar'});
cajaR.replaceChildren(
  el('p',{},'¿Ya usaban SPARK en otro celular o computadora? Elijan el archivo de respaldo o peguen el código.'),
  el('div',{cls:'row'},el('button',{cls:'btn',type:'button',onclick:()=>archivo.click()},'📂 Elegir archivo'),archivo),
  pegar,
  el('div',{cls:'row'},el('button',{cls:'btn',type:'button',onclick:()=>leerCodigo(pegar.value)},'Usar este código')),
  confirmar,estadoR);
})();
