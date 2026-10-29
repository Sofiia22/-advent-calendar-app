// Inspect the manifests actually installed by CocoaPods, not just app.json.
const fs = require('node:fs');
const path = require('node:path');
const plist = require('plist');
const root = path.resolve(__dirname, '..');
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(item => item.isDirectory() ? walk(path.join(dir,item.name)) : [path.join(dir,item.name)]);
}
const app = path.join(root,'ios/AdventBibleJourney/PrivacyInfo.xcprivacy');
const pods = path.join(root,'ios/Pods');
if(!fs.existsSync(app)||!fs.existsSync(pods)) throw new Error('Install Pods before checking native privacy manifests.');
const records = [app, ...walk(pods).filter(file=>file.endsWith('PrivacyInfo.xcprivacy'))].map(file => {
  const info=plist.parse(fs.readFileSync(file,'utf8'));
  return {file:path.relative(root,file),tracking:info.NSPrivacyTracking===true,collectedData:info.NSPrivacyCollectedDataTypes||[],requiredReasonAPIs:info.NSPrivacyAccessedAPITypes||[]};
});
const findings = records.filter(record=>record.tracking||record.collectedData.length);
const report={checkedAt:new Date().toISOString(),manifests:records.length,declaredTrackingOrCollection:findings.length,records,note:'Manifest declarations are not a substitute for runtime traffic inspection or store privacy-form review.'};
fs.writeFileSync(path.join(root,'release/ios-privacy-manifests.json'),JSON.stringify(report,null,2)+'\n');
console.log(`${records.length} installed iOS manifests inspected; ${findings.length} declare tracking or collected data.`);
