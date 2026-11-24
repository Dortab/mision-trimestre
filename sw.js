/* Universo SPARK · copia de respaldo en el celular (service worker).
   Siempre pide primero la versión del servidor, así cada cambio publicado se ve de inmediato.
   Solo si no hay señal, o el servidor tarda más de 4 segundos, entrega la copia guardada.
   Si algo falla aquí dentro, la petición sigue su camino normal: este archivo nunca debe impedir que la página cargue. */
const CACHE='spark-2.0.2';
const ESPERA=4000;

self.addEventListener('install',()=>self.skipWaiting());
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
