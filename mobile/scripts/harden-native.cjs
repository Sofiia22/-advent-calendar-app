// Mechanical post-generation change: never produce a release signed by Expo's debug key.
const fs = require('node:fs');
const path = require('node:path');
const file = path.join(__dirname,'../android/app/build.gradle');
if (fs.existsSync(file)) {
  let source=fs.readFileSync(file,'utf8');
  source=source.replace(/(release\s*\{[\s\S]*?)signingConfig signingConfigs\.debug/, '$1signingConfig null // Unsigned until the owner configures a real upload key.');
  fs.writeFileSync(file,source);
}
// A background-only Expo splash can leave a dangling Android drawable reference.
// Preserve the clean navy launch screen instead of introducing another logo.
const res = path.join(__dirname, '../android/app/src/main/res');
if (fs.existsSync(res)) {
  const styles = path.join(res, 'values/styles.xml');
  const hasLogo = fs.readdirSync(res).some(dir => dir.startsWith('drawable') &&
    fs.statSync(path.join(res, dir)).isDirectory() &&
    fs.readdirSync(path.join(res, dir)).some(name => name.startsWith('splashscreen_logo.')));
  if (!hasLogo && fs.existsSync(styles)) {
    const xml = fs.readFileSync(styles, 'utf8');
    fs.writeFileSync(styles, xml.replace('@drawable/splashscreen_logo', '@android:color/transparent'));
  }
}
console.log('Local release signing does not use a debug key. EAS manages real credentials after owner login.');
