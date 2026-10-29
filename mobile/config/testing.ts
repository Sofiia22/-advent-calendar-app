import Constants from 'expo-constants';
// No user-facing switch. EAS testing builds are identifiable in the home screen.
export const TESTING_UNLOCK = (typeof __DEV__ !== 'undefined' && __DEV__ && process.env.EXPO_PUBLIC_ADVENT_TESTING === 'true') || Constants.expoConfig?.extra?.releaseTesting === true || (process.env.EXPO_PUBLIC_RELEASE_CHANNEL === 'testing' && process.env.EXPO_PUBLIC_ADVENT_TESTING === 'true');
