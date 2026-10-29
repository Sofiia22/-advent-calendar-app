// Inspect libraries from the actual AAB, not only Gradle source settings.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const cp = require('node:child_process');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const bundle = path.resolve(process.argv[2] || path.join(root, 'release/AdventBibleJourney-1.0.0-unsigned.aab'));
const tool = process.env.ANDROID_READELF;
if (!tool || !fs.existsSync(tool)) throw new Error('Set ANDROID_READELF to the installed NDK llvm-readelf.');
const entries = cp.execFileSync('unzip', ['-Z1', bundle], {encoding:'utf8'}).trim().split('\n');
const libraries = entries.filter(name => /^base\/lib\/(arm64-v8a|x86_64)\/[^/]+\.so$/.test(name));
if (!libraries.length) throw new Error('No 64-bit native libraries found in AAB.');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'advent-elf-check-'));
const records = [];
try {
  for (const entry of libraries) {
    const file = path.join(temp, 'library.so');
    fs.writeFileSync(file, cp.execFileSync('unzip', ['-p', bundle, entry], {maxBuffer:128*1024*1024}));
    const rows = cp.execFileSync(tool, ['-Wl',file], {encoding:'utf8'}).split('\n').map(line=>line.trim().split(/\s+/));
    const loads = rows.filter(row=>row[0]==='LOAD');
    const relro = rows.find(row=>row[0]==='GNU_RELRO');
    if (!loads.length) throw new Error('Missing ELF LOAD segments: '+entry);
    const loadAligned = loads.every(row=>BigInt(row.at(-1))>=16384n);
    const endAligned = !relro || (BigInt(relro[2])+BigInt(relro[5]))%16384n===0n;
    // Official guidance also permits RELRO occupying its own LOAD segment.
    const ownLoad = !relro || loads.some(row=>BigInt(row[2])===BigInt(relro[2])&&BigInt(row[5])===BigInt(relro[5]));
    records.push({entry,loadAligned,relroEndAligned:endAligned,relroOwnLoad:ownLoad,pass:loadAligned&&(endAligned||ownLoad)});
  }
} finally {
  // Exact task-created temporary directory only; never a user/workspace directory.
  fs.rmSync(temp,{recursive:true});
}
const failures = records.filter(record=>!record.pass);
const report = {
  checkedAt:new Date().toISOString(),artifact:path.basename(bundle),bytes:fs.statSync(bundle).size,
  sha256:crypto.createHash('sha256').update(fs.readFileSync(bundle)).digest('hex'),
  checkedLibraries:records.length,failures:failures.length,records,
  reference:'https://developer.android.com/guide/practices/page-sizes',
  limitations:'Static ELF checks only. Not APK ZIP alignment, Play validation or execution on a 16 KB device.'
};
fs.writeFileSync(path.join(root,'release/android-native-check.json'),JSON.stringify(report,null,2)+'\n');
console.log(`${records.length} AAB 64-bit libraries checked; ${failures.length} ELF alignment failures.`);
if (failures.length) process.exitCode=1;
