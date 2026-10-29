// Local-only production-output harness. Never included in dist or deployed.
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),readline=require('node:readline');
const {handler}=require('../netlify/functions/review.cjs');
const root=path.resolve(__dirname,'../dist');let offline=false,dateFixture='';
process.env.REVIEW_PASSWORD='fixture-only-review-password-2026';
process.env.REVIEW_SESSION_SECRET='fixture-only-session-key-not-for-deployment';
const server=http.createServer(async(req,res)=>{
  if(offline){req.socket.destroy();return;}
  const url=new URL(req.url,'http://localhost');
  if(url.pathname==='/.netlify/functions/review'){
    let body='';for await(const chunk of req){body+=chunk;if(body.length>4096){res.writeHead(413).end();return;}}
    const response=await handler({httpMethod:req.method,headers:req.headers,body});res.writeHead(response.statusCode,response.headers).end(response.body);return;
  }
  let file=path.resolve(root,'.'+decodeURIComponent(url.pathname));
  if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403).end();return;}
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file)&&fs.existsSync(file+'.html'))file+='.html';
  if(!fs.existsSync(file)){res.writeHead(404).end('Not found');return;}
  const types={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.webmanifest':'application/manifest+json','.png':'image/png','.jpg':'image/jpeg','.ttf':'font/ttf'};
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
  if(dateFixture&&file.endsWith('.html')){const script=`<script>/* LOCAL QA ONLY */{const OriginalDate=Date;const fixed=new OriginalDate(${JSON.stringify(dateFixture)}).getTime();window.Date=class extends OriginalDate{constructor(...args){if(args.length)super(...args);else super(fixed);}static now(){return fixed;}};}</script>`;res.end(fs.readFileSync(file,'utf8').replace('<head>','<head>'+script));}else fs.createReadStream(file).pipe(res);
});
server.listen(19013,'127.0.0.1',()=>console.log('Local PWA QA http://localhost:19013 PID '+process.pid));
readline.createInterface({input:process.stdin}).on('line',line=>{if(line==='offline'||line==='online'){offline=line==='offline';console.log('QA network '+line);}if(line.startsWith('date ')){const value=line.slice(5);if(value==='real'||/^2026-\d\d-\d\dT\d\d:\d\d:\d\d$/.test(value)){dateFixture=value==='real'?'':value;console.log('QA date '+(dateFixture||'real'));}}if(line==='stop')server.close(()=>process.exit());});
