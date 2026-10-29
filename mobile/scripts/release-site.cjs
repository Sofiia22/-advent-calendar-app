const fs = require('node:fs');
const path = require('node:path');
const {load}=require('./ts-loader.cjs');
const {LEGAL_CONTENT}=load(path.join(__dirname,'../data/legal.ts'));
const out=path.join(__dirname,'../release/site');fs.mkdirSync(out,{recursive:true});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for(const kind of ['privacy','support']){
  const email='transfigurationbaptistchurch01@gmail.com';
  const sections=Object.entries(LEGAL_CONTENT).map(([lang,c])=>`<section id="${lang}" lang="${lang}"><h2>${escape(kind==='privacy'?c.privacyTitle:c.supportTitle)}</h2>${c[kind].map(p=>`<p>${escape(p).replaceAll(email,`<a href="mailto:${email}">${email}</a>`)}</p>`).join('')}</section>`).join('');
  const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Advent Bible Journey — ${kind==='privacy'?'Privacy Policy':'Support'}</title><link rel="canonical" href="https://baptistslavic.com/advent/${kind}/"><style>body{max-width:760px;margin:40px auto;padding:24px;background:#fff8e8;color:#101a3a;font:18px/1.7 system-ui}section{border-top:1px solid #d4af37;margin-top:32px;scroll-margin-top:20px}a{color:inherit}nav{display:flex;gap:16px;flex-wrap:wrap}</style></head><body><h1>Advent Bible Journey</h1><p>Transfiguration Slavic Baptist Church · Updated / Оновлено / Обновлено: 2026-10-29</p><nav><a href="#en">English</a><a href="#uk">Українська</a><a href="#ru">Русский</a><a href="../privacy/">Privacy</a><a href="../support/">Support</a></nav><main>${sections}</main></body></html>`;
  const destination=path.join(out,'advent',kind);fs.mkdirSync(destination,{recursive:true});
  fs.writeFileSync(path.join(destination,'index.html'),html);
  fs.writeFileSync(path.join(out,`${kind}.html`),html);
}
console.log('Generated trilingual pages for baptistslavic.com/advent/privacy/ and /advent/support/. Not published.');
