const { withAndroidManifest, AndroidConfig } = require('expo/config-plugins');

// expo-notifications includes Firebase transitively. This app only schedules
// on-device reminders, so never auto-register an installation for remote push.
module.exports = config => withAndroidManifest(config, mod => {
  const app = AndroidConfig.Manifest.getMainApplicationOrThrow(mod.modResults);
  for (const name of ['firebase_messaging_auto_init_enabled', 'firebase_analytics_collection_enabled']) {
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(app, name, 'false');
  }
  return mod;
});
