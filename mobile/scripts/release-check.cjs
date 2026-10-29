const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { load } = require('./ts-loader.cjs');
const root = path.resolve(__dirname, '..');
const report = { checkedAt: new Date().toISOString(), days: [], errors: [], assetsChecked: 0 };
const { ADVENT_DAYS } = load(path.join(root, 'data/adventDays.ts'));
assert.deepEqual(Array.from(ADVENT_DAYS, d => d.id), Array.from({length:24}, (_,i)=>i+1));
function shape(value) { return Array.isArray(value) ? ['array'] : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k,v])=>[k,shape(v)])) : typeof value; }
for (let day = 1; day <= 24; day++) {
  const file = day === 2 ? 'day2Translations.ts' : `day${day}${day >= 5 ? 'Illustrated' : ''}.ts`;
  try {
    const mod = load(path.join(root, 'data', file));
    const content = Object.entries(mod).find(([key]) => key.endsWith('_CONTENT') || key === 'DAY_TWO_BY_LANGUAGE')?.[1];
    const languages = ['uk','en','ru'].filter(lang => content?.[lang]);
    if (languages.length !== 3) throw new Error(`Only ${languages.join(',') || 'legacy English'} present`);
    for (const lang of languages) {
      const c = content[lang];
      assert.ok(c.title && c.scripture && c.questions && c.promise && c.connection && c.familyChallenge, `${lang}: missing section`);
      assert.ok(c.storyPages?.length || c.bibleStory?.paragraphs?.length, `${lang}: empty story`);
      assert.deepEqual(shape(c), shape(content.en), `${lang}: different field structure`);
      if(c.storyPages) for(const page of c.storyPages) assert.ok(page.title && page.paragraphs.length, `${lang}: empty story page`);
    }
    report.days.push({day, languages, status:'pass'});
  } catch(e) { report.errors.push(`Day ${day}: ${e.message}`); report.days.push({day,status:'fail'}); }
}
function scan(dir) { for(const item of fs.readdirSync(dir,{withFileTypes:true})) { if(['node_modules','.expo','ios','android','release','dist'].includes(item.name)) continue; const file=path.join(dir,item.name); if(item.isDirectory()) scan(file); else if(/\.tsx?$/.test(file)) { const text=fs.readFileSync(file,'utf8'); for(const m of text.matchAll(/require\(["'](\.[^"']+\.(?:png|jpg|jpeg|ttf|otf))["']\)/g)){report.assetsChecked++; if(!fs.existsSync(path.resolve(path.dirname(file),m[1]))) report.errors.push(`Missing asset ${file}: ${m[1]}`); } } } }
scan(root);
const { translations } = load(path.join(root,'i18n/translations.ts'));
for(const lang of ['uk','ru']) assert.deepEqual(Object.keys(translations[lang]).sort(),Object.keys(translations.en).sort());
fs.mkdirSync(path.join(root,'release'),{recursive:true});
fs.writeFileSync(path.join(root,'release/content-check.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(report.errors.length) process.exitCode=1;
