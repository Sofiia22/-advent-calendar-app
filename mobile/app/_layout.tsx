import { Stack, usePathname } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { REVIEW_TEXT } from '../config/review';
import { PwaStatus } from '../components/PwaStatus';
import * as SplashScreen from "expo-splash-screen";
import { AdventIntro } from "../components/AdventIntro";
import { useAppFonts } from "../theme/useAppFonts";

import { AdventProvider, useAdvent } from "../state/AdventContext";
export { AppErrorBoundary as ErrorBoundary } from '../components/AppErrorBoundary';

SplashScreen.preventAutoHideAsync().catch(() => {});

function AppNavigator() {
  const path = usePathname();
  const { isHydrated, selectedLanguage, isPreview, setPreview } = useAdvent();
  const [fontsReady, fontError] = useAppFonts();
  const [introFinished, setIntroFinished] = useState(false);
  const finishIntro = useCallback(() => setIntroFinished(true), []);
  const showIntro = path === '/home' && !introFinished;
  useEffect(() => {
    if (isHydrated && (fontsReady || fontError)) SplashScreen.hideAsync().catch(() => {});
  }, [isHydrated, fontsReady, fontError]);
  return <View style={{ flex: 1, backgroundColor: '#101A3A' }}>
    <PwaStatus />
    {isPreview && <View style={{ paddingTop: 48, paddingBottom: 10, paddingHorizontal: 16, backgroundColor: '#FFF1C9' }}>
      <Text style={{ color: '#101A3A', textAlign: 'center' }}>{REVIEW_TEXT[selectedLanguage].active}</Text>
      <Pressable accessibilityRole="button" onPress={() => { setPreview(false); }} style={{ padding: 10 }}><Text style={{ color: '#101A3A', textAlign: 'center', textDecorationLine: 'underline' }}>{REVIEW_TEXT[selectedLanguage].exit}</Text></Pressable>
    </View>}
    <View style={{ flex: 1 }} aria-hidden={showIntro} accessibilityElementsHidden={showIntro} importantForAccessibility={showIntro ? 'no-hide-descendants' : 'auto'}>
      <Stack screenOptions={{ headerShown: false, animation: 'fade' }} />
    </View>
    {showIntro && isHydrated && (fontsReady || fontError) && <AdventIntro language={selectedLanguage} onFinish={finishIntro} />}
  </View>;
}

export default function RootLayout() {
  return (
    <AdventProvider>
      <AppNavigator />
    </AdventProvider>
  );
}
