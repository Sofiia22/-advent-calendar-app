// Keep test unlocks in dedicated testing builds; never in the store production profile.
module.exports = ({ config }) => {
  const profile = process.env.EAS_BUILD_PROFILE || 'local';
  const testing = profile === 'testing' && process.env.EXPO_PUBLIC_ADVENT_TESTING === 'true';
  if (profile === 'production' && (process.env.EXPO_PUBLIC_ADVENT_TESTING === 'true' || process.env.EXPO_PUBLIC_RELEASE_CHANNEL === 'testing')) throw new Error('Production must not enable Advent test unlock.');
  return { ...config, extra: { ...config.extra, releaseTesting: testing } };
};
