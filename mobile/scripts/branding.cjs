// Deterministic vector master; no third-party imagery or generated lettering.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const out = path.join(__dirname, '../assets/branding');
fs.mkdirSync(out, { recursive: true });
const star = '<path d="M512 170 L530 366 L686 388 L530 411 L512 572 L494 411 L338 388 L494 366Z" fill="#FFE3A0"/><path d="M433 309 L512 373 L591 309 L528 388 L591 467 L512 404 L433 467 L496 388Z" fill="#F6C769"/><circle cx="512" cy="388" r="9" fill="#FFF8E7"/>';
const book = '<path d="M260 624 Q376 584 500 650 L500 813 Q378 749 260 787Z M524 650 Q648 584 764 624 L764 787 Q646 749 524 813Z" fill="#F6D99A"/><path d="M282 647 Q384 617 478 667 M546 667 Q640 617 742 647" fill="none" stroke="#B17F2B" stroke-width="7"/><path d="M512 648 V818" stroke="#FFF6D8" stroke-width="10"/>';
const wrap = body => `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">${body}</svg>`;
const icon = wrap('<defs><radialGradient id="night"><stop stop-color="#233762"/><stop offset="1" stop-color="#101A3A"/></radialGradient></defs><path fill="url(#night)" d="M0 0H1024V1024H0Z"/>'+star+book+'<circle cx="260" cy="328" r="4" fill="#F6D99A"/><circle cx="756" cy="462" r="5" fill="#F6D99A"/>');
async function main(){
  await sharp({create:{width:1,height:1,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).png().toFile(path.join(out,'splash-transparent.png'));
  fs.writeFileSync(path.join(out,'app-icon.svg'),icon);
  await sharp(Buffer.from(icon)).flatten({background:'#101A3A'}).png().toFile(path.join(out,'app-icon.png'));
  await sharp(Buffer.from(wrap(`<g transform="translate(154 154) scale(.7)">${star+book}</g>`))).png().toFile(path.join(out,'adaptive-icon.png'));
  await sharp(Buffer.from(wrap(`<g transform="translate(154 154) scale(.7)">${star+book}</g>`))).ensureAlpha().tint('#FFFFFF').png().toFile(path.join(out,'monochrome-icon.png'));
  await sharp(Buffer.from(icon)).resize(512,512).flatten({background:'#101A3A'}).png().toFile(path.join(out,'play-icon-512.png'));
  const feature=wrap('<path fill="#101A3A" d="M0 0H1024V1024H0Z"/>'+star+book);
  await sharp(Buffer.from(feature)).resize(500,500).extend({left:262,right:262,top:0,bottom:0,background:'#101A3A'}).flatten({background:'#101A3A'}).png().toFile(path.join(out,'play-feature-1024x500.png'));
  console.log('Generated 1024px app icon, adaptive/monochrome assets, Play icon and feature graphic.');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
