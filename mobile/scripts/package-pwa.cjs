const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..'),stage=fs.mkdtempSync(path.join(os.tmpdir(),'advent-pwa-package-'));
try{
  fs.cpSync(path.join(root,'dist'),path.join(stage,'deploy/dist'),{recursive:true});
  fs.mkdirSync(path.join(stage,'deploy/netlify/functions'),{recursive:true});
  fs.copyFileSync(path.join(root,'netlify/functions/review.cjs'),path.join(stage,'deploy/netlify/functions/review.cjs'));
  fs.copyFileSync(path.join(root,'netlify.toml'),path.join(stage,'deploy/netlify.toml'));
  fs.writeFileSync(path.join(stage,'deploy/START.txt'),'PREBUILT PWA — not publicly deployed.\nAfter owner approval and Netlify login, open this deploy folder in a terminal.\nUse: npx netlify-cli@latest deploy --no-build --prod --site-name YOUR-APPROVED-SITE-NAME\nReplace the site name. --no-build is required for this prebuilt package.\nNever use Netlify Drop: deploy the included review function too.\nSet REVIEW_PASSWORD (20+ random chars) and REVIEW_SESSION_SECRET (32+ independent random chars) in Netlify Functions environment variables, then redeploy. Never use EXPO_PUBLIC_ for these secrets.\nNo Apple/Google/Expo account needed for PWA.\nFull source/build instructions remain in the project release/PWA_RELEASE.md.\n');
  cp.execFileSync('zip',['-qr',path.join(stage,'package.zip'),'deploy'],{cwd:stage});
  fs.copyFileSync(path.join(stage,'package.zip'),path.join(root,'release/AdventBibleJourney-PWA-ready.zip'));
  console.log('Created release/AdventBibleJourney-PWA-ready.zip. Not deployed.');
}finally{fs.rmSync(stage,{recursive:true});}
