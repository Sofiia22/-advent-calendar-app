const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process'),crypto=require('node:crypto'),sharp=require('sharp');
const root=path.resolve(__dirname,'..');
async function build(){
  const icons=path.join(root,'public/icons');fs.mkdirSync(icons,{recursive:true});
  for(const size of [192,512,180])await sharp(path.join(root,'assets/branding/app-icon.png')).resize(size,size).png().toFile(path.join(icons,size===180?'apple-touch-icon.png':`icon-${size}.png`));
  await sharp(path.join(root,'assets/branding/app-icon.png')).resize(384,384).extend({top:64,bottom:64,left:64,right:64,background:'#101A3A'}).png().toFile(path.join(icons,'maskable-512.png'));
  cp.execFileSync(process.platform==='win32'?'npx.cmd':'npx',['expo','export','--platform','web','--output-dir','dist'],{cwd:root,stdio:'inherit',env:{...process.env,EAS_BUILD_PROFILE:'production',EXPO_PUBLIC_RELEASE_CHANNEL:'production',EXPO_PUBLIC_ADVENT_TESTING:'false'}});
  const out=path.join(root,'dist');
  fs.copyFileSync(path.join(out,'+not-found.html'),path.join(out,'404.html'));
  const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?walk(path.join(dir,d.name)):[path.join(dir,d.name)]);
  const files=walk(out).filter(f=>!f.endsWith('.map'));
  const version=crypto.createHash('sha256').update(process.env.PWA_RELEASE_TAG||'');for(const f of files.sort()){version.update(path.relative(out,f));version.update(fs.readFileSync(f));}
  const id=version.digest('hex').slice(0,16);
  // All routes/text/JS/fonts offline; illustrations cached when viewed, not a forced 100 MB download.
  const precache=files.filter(f=>/\.(html|js|css|ttf|woff2?)$/.test(f)||f.includes('/icons/')||f.endsWith('manifest.webmanifest')).map(f=>'/'+path.relative(out,f).split(path.sep).join('/'));
  let worker=fs.readFileSync(path.join(root,'web/service-worker.js'),'utf8').replace('__PWA_VERSION__',id).replace('__PRECACHE__',JSON.stringify(precache));
  fs.writeFileSync(path.join(out,'sw.js'),worker);
  fs.writeFileSync(path.join(out,'pwa-version.json'),JSON.stringify({version:id}));
  console.log(`PWA ${id}: ${precache.length} shell assets; ${files.length} files. No deployment performed.`);
}
build().catch(error=>{console.error(error);process.exitCode=1;});
