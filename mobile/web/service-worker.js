/* Generated version and immutable URLs are injected by build-pwa.cjs. */
const VERSION='__PWA_VERSION__';
const SHELL='advent-shell-'+VERSION, RUNTIME='advent-runtime-'+VERSION;
const PRECACHE=__PRECACHE__;
self.addEventListener('install',event=>event.waitUntil(caches.open(SHELL).then(cache=>cache.addAll(PRECACHE))));
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  // Keep already viewed hashed images/fonts across releases; never migrate HTML.
  const next=await caches.open(RUNTIME);
  for(const name of await caches.keys())if(name.startsWith('advent-runtime-')&&name!==RUNTIME){const old=await caches.open(name);for(const request of await old.keys())if(/\/assets\/|\/_expo\/static\//.test(new URL(request.url).pathname)){try{await next.put(request,await old.match(request));}catch{/* Browser quota may evict optional images. */}}}
  for(const name of await caches.keys())if((name.startsWith('advent-shell-')||name.startsWith('advent-runtime-'))&&name!==SHELL&&name!==RUNTIME)await caches.delete(name);
  await self.clients.claim();
})()));
async function remember(request,response){
  if(response.ok){try{const cache=await caches.open(RUNTIME);await cache.put(request,response.clone());const keys=await cache.keys();if(keys.length>240)await cache.delete(keys[0]);}catch{/* Storage pressure must never break online reading. */}}
  return response;
}
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin||url.pathname.startsWith('/.netlify/')||['/sw.js','/pwa-version.json'].includes(url.pathname))return;
  event.respondWith((async()=>{
    if(request.mode==='navigate'){
      const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),4000);
      try{return await remember(request,await fetch(request,{signal:controller.signal}));}
      catch{for(const client of await self.clients.matchAll())client.postMessage({type:'OFFLINE_FALLBACK'});return (await caches.match(url.pathname))||(await caches.match(url.pathname+'.html'))||(await caches.match('/index.html'))||new Response('Offline. Please reconnect to open the app for the first time.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});}
      finally{clearTimeout(timer);}
    }
    const cached=await caches.match(request);if(cached)return cached;
    try{return await remember(request,await fetch(request));}
    catch{
      if(request.destination==='image')return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="640" height="360" fill="#101A3A"/><text x="320" y="180" text-anchor="middle" fill="#f6d99a" font-size="28">Offline · Зображення · Image</text></svg>',{headers:{'Content-Type':'image/svg+xml'}});
      return Response.error();
    }
  })());
});
