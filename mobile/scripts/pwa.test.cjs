const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
test('review access fails closed; password stays server-side; signed cookie expires',async()=>{
  const {handler}=require('../netlify/functions/review.cjs');const previous={...process.env};
  try{
    delete process.env.REVIEW_PASSWORD;delete process.env.REVIEW_SESSION_SECRET;
    assert.equal((await handler({httpMethod:'GET',headers:{}})).statusCode,503);
    process.env.REVIEW_PASSWORD='fixture-only-review-password-2026';process.env.REVIEW_SESSION_SECRET='fixture-only-session-key-not-for-deployment';
    const base={httpMethod:'POST',headers:{host:'test.example',origin:'https://test.example'}};
    assert.equal((await handler({...base,body:JSON.stringify({password:'wrong'})})).statusCode,401);
    assert.equal((await handler({...base,headers:{host:'test.example',origin:'https://other.example'},body:'{}'})).statusCode,403);
    const login=await handler({...base,body:JSON.stringify({password:process.env.REVIEW_PASSWORD})});assert.equal(login.statusCode,200);
    const cookie=login.headers['Set-Cookie'];for(const flag of ['HttpOnly','Secure','SameSite=Lax'])assert.ok(cookie.includes(flag));
    assert.equal(login.headers['Cache-Control'],'no-store');
    const get=token=>handler({httpMethod:'GET',headers:{cookie:token}});
    assert.equal(JSON.parse((await get(cookie)).body).authorized,true);
    assert.equal(JSON.parse((await get(cookie.replace('=', '=tampered'))).body).authorized,false);
    const now=Date.now;try{Date.now=()=>now()+9*60*60*1000;assert.equal(JSON.parse((await get(cookie)).body).authorized,false);}finally{Date.now=now;}
  }finally{process.env=previous;}
});
function cacheStorage(){
  const stores=new Map(),key=r=>new URL(typeof r==='string'?r:r.url,'https://test.example').href;
  const api={keys:async()=>[...stores.keys()],delete:async n=>stores.delete(n),open:async name=>{
    if(!stores.has(name))stores.set(name,new Map());const store=stores.get(name);
    return {addAll:async urls=>{for(const url of urls)store.set(key(url),new Response('shell:'+url));},put:async(req,res)=>store.set(key(req),res.clone()),match:async req=>store.get(key(req))?.clone(),keys:async()=>[...store.keys()].map(url=>({url}))};
  },match:async req=>{for(const store of stores.values())if(store.has(key(req)))return store.get(key(req)).clone();}};
  return api;
}
function worker(version,caches){
  const listeners={},state={offline:false,skipped:false,claimed:false};const self={location:{origin:'https://test.example'},addEventListener:(n,fn)=>listeners[n]=fn,skipWaiting:()=>{state.skipped=true;},clients:{claim:async()=>{state.claimed=true;},matchAll:async()=>[]}};
  const code=fs.readFileSync(path.join(root,'web/service-worker.js'),'utf8').replace('__PWA_VERSION__',version).replace('__PRECACHE__',JSON.stringify(['/index.html','/home.html','/advent/24.html']));
  vm.runInNewContext(code,{self,caches,URL,Response,AbortController,setTimeout,clearTimeout,fetch:async()=>{if(state.offline)throw new Error('offline');return new Response('network');}});
  const lifecycle=async type=>{let pending;listeners[type]({waitUntil:p=>pending=p});await pending;};
  const fetch=async(url,mode='navigate',destination='')=>{let result;listeners.fetch({request:{url:'https://test.example'+url,method:'GET',mode,destination},respondWith:p=>result=p});return result;};
  return {state,lifecycle,fetch,message:data=>listeners.message({data})};
}
test('service worker shell reopens offline, excludes auth, updates only on request and keeps cached images',async()=>{
  const caches=cacheStorage();await caches.open('unrelated-cache');const first=worker('one',caches);
  await first.lifecycle('install');assert.equal(first.state.skipped,false);await first.lifecycle('activate');
  await first.fetch('/assets/illustration.hash.jpg','cors','image');first.state.offline=true;
  assert.equal(await (await first.fetch('/advent/24')).text(),'shell:/advent/24.html');
  assert.equal(await (await first.fetch('/assets/illustration.hash.jpg','cors','image')).text(),'network');
  assert.ok((await (await first.fetch('/assets/missing.jpg','cors','image')).text()).includes('Offline'));
  assert.equal(await first.fetch('/.netlify/functions/review'),undefined);
  const second=worker('two',caches);await second.lifecycle('install');assert.equal(second.state.skipped,false);
  assert.ok((await caches.keys()).includes('advent-shell-one'));
  second.message({type:'ACTIVATE_UPDATE'});assert.equal(second.state.skipped,true);await second.lifecycle('activate');
  assert.ok(!(await caches.keys()).includes('advent-shell-one'));assert.ok((await caches.keys()).includes('unrelated-cache'));
  second.state.offline=true;assert.equal(await(await second.fetch('/assets/illustration.hash.jpg','cors','image')).text(),'network');
});
test('production PWA output contains install metadata, exact day routes and no secret fixture',()=>{
  const out=path.join(root,'dist');if(!fs.existsSync(out))throw new Error('Run npm run build:pwa before test:pwa.');
  const manifest=JSON.parse(fs.readFileSync(path.join(out,'manifest.webmanifest')));
  assert.equal(manifest.name,'Advent Bible Journey');assert.equal(manifest.start_url,'/');assert.equal(manifest.scope,'/');assert.equal(manifest.display,'standalone');
  for(const size of ['192x192','512x512'])assert.ok(manifest.icons.some(icon=>icon.sizes===size));
  for(let day=1;day<=24;day++)assert.ok(fs.existsSync(path.join(out,`advent/${day}.html`)));
  const html=fs.readFileSync(path.join(out,'home.html'),'utf8');assert.ok(html.includes('apple-touch-icon'));assert.ok(html.includes('viewport-fit=cover'));
  const sw=fs.readFileSync(path.join(out,'sw.js'),'utf8');assert.ok(!sw.includes('__PWA_VERSION__'));assert.ok(!sw.includes('__PRECACHE__'));
});
