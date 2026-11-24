/* Universo SPARK · copia de respaldo en el celular (service worker).
   Siempre pide primero la versión del servidor, así cada cambio publicado se ve de inmediato.
   Solo si no hay señal, o el servidor tarda más de 4 segundos, entrega la copia guardada.
   Si algo falla aquí dentro, la petición sigue su camino normal: este archivo nunca debe impedir que la página cargue. */
const CACHE='spark-2.2.0';
const ESPERA=4000;
/* Páginas y archivos básicos que se guardan desde la primera visita, para que la app abra sin señal.
   El contenido de cada grado se guarda cuando se abre por primera vez. */
const BASICOS=['./','index.html','base.html','guia.html','mision.html','bitacora.html','reporte.html','respaldo.html','manifest.webmanifest',
  'css/estilos.css','imagenes/spark_saludo.jpeg','imagenes/icono-192.png',
  ...['grados','comun','trimestre','voz','entrada','inicio','ayuda','juegos','examen','guia','sesion','bitacora','reporte','instalar','respaldo'].map(f=>`js/${f}.js`)];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(BASICOS.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

async function responder(r){
  const red=fetch(r).then(resp=>{
    if(resp.ok){const copia=resp.clone();caches.open(CACHE).then(c=>c.put(r,copia)).catch(()=>{})}
    return resp;
  });
  let reloj;
  const tarde=new Promise(ok=>{reloj=setTimeout(ok,ESPERA)}).then(()=>caches.match(r)).then(g=>g||red);
  try{
    const resp=await Promise.race([red,tarde]);
    clearTimeout(reloj);
    return resp;
  }catch(err){
    clearTimeout(reloj);
    const guardada=await caches.match(r).catch(()=>null);
    if(guardada)return guardada;
    throw err;
  }
}

self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(responder(r).catch(()=>fetch(r)));
});
