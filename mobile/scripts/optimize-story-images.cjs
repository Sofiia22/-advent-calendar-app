// Bulk mechanical asset optimization. Originals are never overwritten or removed.
// Only opaque story/connection illustrations are converted; icons/logos keep alpha.
const fs=require('node:fs');const path=require('node:path');const sharp=require('sharp');
const root=path.resolve(__dirname,'..');
const mapping=new Map();let before=0,after=0;
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
async function main(){
  for(const file of walk(path.join(root,'assets/advent')).filter(f=>/\/(story|connection)\/.*\.png$/.test(f))){
    const stats=await sharp(file).stats();if(!stats.isOpaque)continue;
    const target=file.replace(/\.png$/,'.jpg');
    await sharp(file).jpeg({quality:94,mozjpeg:true,chromaSubsampling:'4:4:4'}).toFile(target);
    const oldSize=fs.statSync(file).size,newSize=fs.statSync(target).size;
    if(newSize>=oldSize)continue;
    mapping.set(file,target);before+=oldSize;after+=newSize;
  }
  let edited=0;
  for(const dir of ['data','components'])for(const file of walk(path.join(root,dir)).filter(f=>/\.tsx?$/.test(f))){
    const source=fs.readFileSync(file,'utf8');
    const next=source.replace(/require\((["'])(\.[^"']+\.png)\1\)/g,(all,q,ref)=>mapping.has(path.resolve(path.dirname(file),ref))?`require(${q}${ref.replace(/\.png$/,'.jpg')}${q})`:all);
    if(next!==source){fs.writeFileSync(file,next);edited++;}
  }
  const report={images:mapping.size,sourceModulesUpdated:edited,originalBytes:before,optimizedBytes:after,originalsPreserved:true,format:'JPEG quality 94, 4:4:4; opaque illustrations only'};
  fs.mkdirSync(path.join(root,'release'),{recursive:true});fs.writeFileSync(path.join(root,'release/image-optimization.json'),JSON.stringify(report,null,2));console.log(report);
}
main().catch(e=>{console.error(e);process.exitCode=1;});
