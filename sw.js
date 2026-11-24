/* Universo SPARK · copia en el celular (service worker).
   Cada archivo se entrega al instante desde la copia guardada y, al mismo tiempo, se pide la versión
   del servidor para la próxima visita. Si el servidor trae una versión distinta (se publicó un cambio),
   se borra la copia completa para no mezclar archivos viejos con nuevos: la siguiente página llega fresca.
   Para forzar que todos descarguen de nuevo, cambia el número de CACHE. */
const CACHE='spark-2.0.1';
const BASICOS=['./','index.html','base.html','guia.html','mision.html','bitacora.html','reporte.html',
  'css/estilos.css','imagenes/spark_saludo.jpeg',
  ...['grados','comun','trimestre','voz','entrada','inicio','ayuda','juegos','examen','guia','sesion','bitacora','reporte'].map(f=>`js/${f}.js`)];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(BASICOS)).catch(()=>{}));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

const version=r=>r&&(r.headers.get('etag')||r.headers.get('last-modified'))||'';
async function borrarPropios(c){
  for(const r of await c.keys())if(new URL(r.url).origin===location.origin)await c.delete(r);
}
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url),propio=u.origin===location.origin,fuente=/^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if(!propio&&!fuente)return;
  e.respondWith((async()=>{
    const c=await caches.open(CACHE);
    const guardada=await c.match(r,{ignoreSearch:false});
    const red=fetch(r).then(async resp=>{
      if(resp.ok||resp.type==='opaque'){
        if(propio&&guardada&&version(guardada)&&version(resp)&&version(guardada)!==version(resp))await borrarPropios(c);
        await c.put(r,resp.clone());
      }
      return resp;
    });
    if(guardada){e.waitUntil(red.catch(()=>{}));return guardada}
    return red;
  })());
});
