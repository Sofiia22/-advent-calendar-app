import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Alert, ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PromiseTrail, MilestoneState } from "../components/journey/PromiseTrail";
import { BottomNavigation } from "../components/navigation/BottomNavigation";
import { getAdventDay } from "../data/adventDays";
import { getTranslations } from "../i18n/translations";
import { useAdvent } from "../state/AdventContext";
import { colors, fonts, radius } from "../theme/tokens";
import { useAppFonts } from "../theme/useAppFonts";

const STARS = [
  ["8%", 24, 2], ["17%", 72, 3], ["31%", 34, 2], ["45%", 91, 2],
  ["57%", 20, 3], ["70%", 61, 2], ["82%", 30, 3], ["92%", 84, 2],
] as const;

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const { completedDays, currentDay, isHydrated, selectedLanguage } = useAdvent();
  const [fontsLoaded] = useAppFonts();
  const t = getTranslations(selectedLanguage);
  const trailWidth = Math.min(width, 720);
  const current = getAdventDay(currentDay);

  if (!fontsLoaded || !isHydrated) return <View style={styles.loading} />;

  const openDay = (day: number, state: MilestoneState) => {
    if (state === "locked") {
      Alert.alert(t.notYetTitle, t.notYetMessage);
      return;
    }
    router.push(`/advent/${day}`);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={["#213B69", "#426F9B", "#74B9D1"]} style={styles.header}>
          <View style={[styles.headerBlob, styles.headerBlobLeft]} />
          <View style={[styles.headerBlob, styles.headerBlobRight]} />
          {STARS.map(([left, top, size], index) => (
            <View key={index} style={[styles.star, { left, top, width: size, height: size }]} />
          ))}
          <View style={styles.brandRow}>
            <View style={styles.brandMark}><Text style={styles.brandStar}>✦</Text></View>
            <View>
              <Text style={styles.brandTitle}>{t.appName}</Text>
              <Text style={styles.brandSubtitle}>{t.promiseTrail}</Text>
            </View>
          </View>
          <View style={styles.progressRow}>
            <View>
              <Text style={styles.progressLabel}>{t.yourJourney}</Text>
              <Text style={styles.progressValue}>{t.dayOf(currentDay, 24)}</Text>
            </View>
            <View style={styles.progressStars}>
              {Array.from({ length: 8 }, (_, index) => (
                <Text key={index} style={[styles.progressStar, index < Math.ceil((completedDays.length / 24) * 8) && styles.progressStarLit]}>✦</Text>
              ))}
            </View>
          </View>
        </LinearGradient>

        <ImageBackground source={require("../assets/images/promise-trail-hero-v2.png")} style={styles.destination} imageStyle={styles.destinationImage}>
          <LinearGradient colors={["rgba(16,26,58,0.02)", "rgba(16,26,58,0.08)", "rgba(16,26,58,0.58)"]} locations={[0, 0.55, 1]} style={StyleSheet.absoluteFill} />
          <View style={styles.destinationCopy}>
            <View style={styles.destinationPill}>
              <Text style={styles.destinationEyebrow}>{t.destination}</Text>
            </View>
            <Text style={styles.destinationTitle}>{completedDays.length === 24 ? t.promisedSavior : t.destinationHidden}</Text>
          </View>
        </ImageBackground>

        <View style={styles.intro}>
          <Text style={styles.eyebrow}>{t.promiseTrail}</Text>
          <Text style={styles.heading}>{t.followThePromise}</Text>
          <Text style={styles.description}>{t.trailDescription}</Text>
          <View style={styles.currentCard}>
            <View style={styles.currentSymbol}><Text style={styles.currentSymbolText}>{current?.symbol}</Text></View>
            <View style={styles.currentCopy}>
              <Text style={styles.currentLabel}>{t.currentStop}</Text>
              <Text style={styles.currentTitle}>{current?.title[selectedLanguage]}</Text>
            </View>
            <Pressable onPress={() => openDay(currentDay, "current")} accessibilityRole="button" accessibilityLabel={t.openTodaysStory} style={({ pressed }) => [styles.continueButton, pressed && styles.pressed]}>
              <Ionicons name="arrow-forward" size={21} color={colors.navy} />
            </Pressable>
          </View>
        </View>

        <View style={styles.trailShell}>
          <PromiseTrail
            width={trailWidth}
            currentDay={currentDay}
            completedDays={completedDays}
            language={selectedLanguage}
            labels={{ day: t.dayLabel, current: t.today, completed: t.done, locked: t.locked }}
            onDayPress={openDay}
          />
          <View style={styles.trailEnd}>
            <Text style={styles.trailEndStar}>✦</Text>
            <Text style={styles.trailEndTitle}>{t.thePromiseAwaits}</Text>
            <Text style={styles.trailEndText}>{t.oneDayAtATime}</Text>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#213B69" },
  loading: { flex: 1, backgroundColor: "#DFF1F3" },
  scroll: { flex: 1, backgroundColor: colors.cream },
  scrollContent: { alignItems: "center" },
  header: { width: "100%", minHeight: 210, paddingHorizontal: 20, paddingTop: 18, paddingBottom: 30, overflow: "hidden" },
  headerBlob: { position: "absolute", borderRadius: 999, backgroundColor: "rgba(255,255,255,0.10)" },
  headerBlobLeft: { width: 150, height: 150, left: -70, bottom: -85 },
  headerBlobRight: { width: 120, height: 120, right: -42, top: -48 },
  star: { position: "absolute", borderRadius: 4, backgroundColor: colors.white, opacity: 0.7 },
  brandRow: { flexDirection: "row", alignItems: "center", alignSelf: "center" },
  brandMark: { width: 48, height: 48, marginRight: 11, alignItems: "center", justifyContent: "center", borderWidth: 3, borderColor: "rgba(255,247,230,0.78)", borderRadius: 24, backgroundColor: "rgba(244,201,93,0.22)" },
  brandStar: { color: "#FFF2A8", fontSize: 27 },
  brandTitle: { color: colors.white, fontFamily: fonts.headingBold, fontSize: 25, lineHeight: 28 },
  brandSubtitle: { maxWidth: 240, color: "#FFF2B5", fontFamily: fonts.bodySemiBold, fontSize: 10, lineHeight: 13 },
  progressRow: { marginTop: 27, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 14, borderRadius: 20, backgroundColor: "rgba(16,26,58,0.20)" },
  progressLabel: { color: "rgba(255,255,255,0.78)", fontFamily: fonts.bodySemiBold, fontSize: 11 },
  progressValue: { marginTop: 1, color: colors.white, fontFamily: fonts.headingBold, fontSize: 27, lineHeight: 30 },
  progressStars: { flexDirection: "row", gap: 4 },
  progressStar: { color: "rgba(255,255,255,0.28)", fontSize: 12 },
  progressStarLit: { color: colors.gold },
  destination: { width: "100%", height: 250, alignItems: "center", justifyContent: "flex-end" },
  destinationImage: { opacity: 1 },
  destinationCopy: { width: "100%", alignItems: "center", paddingHorizontal: 18, paddingBottom: 20 },
  destinationPill: { paddingHorizontal: 13, paddingVertical: 5, borderRadius: radius.pill, backgroundColor: "rgba(255,247,230,0.92)" },
  destinationEyebrow: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 10 },
  destinationTitle: { maxWidth: 520, marginTop: 7, color: colors.white, fontFamily: fonts.headingBold, fontSize: 22, lineHeight: 25, textAlign: "center", textShadowColor: "rgba(16,26,58,0.45)", textShadowRadius: 5 },
  intro: { width: "100%", maxWidth: 720, paddingHorizontal: 20, paddingTop: 27, paddingBottom: 26, backgroundColor: "#FFF9EC" },
  eyebrow: { color: "#65966D", fontFamily: fonts.bodyBold, fontSize: 12 },
  heading: { marginTop: 4, color: colors.navy, fontFamily: fonts.headingBold, fontSize: 33, lineHeight: 37 },
  description: { maxWidth: 590, marginTop: 7, color: "#5D6B76", fontFamily: fonts.body, fontSize: 16, lineHeight: 23 },
  currentCard: { marginTop: 20, minHeight: 92, padding: 13, flexDirection: "row", alignItems: "center", borderRadius: 24, borderWidth: 2, borderColor: "rgba(244,201,93,0.72)", backgroundColor: "#FFFDF6" },
  currentSymbol: { width: 62, height: 62, alignItems: "center", justifyContent: "center", borderRadius: 21, backgroundColor: "#FFE28A", transform: [{ rotate: "-3deg" }] },
  currentSymbolText: { fontSize: 29, transform: [{ rotate: "3deg" }] },
  currentCopy: { flex: 1, paddingHorizontal: 12 },
  currentLabel: { color: "#65966D", fontFamily: fonts.bodyBold, fontSize: 11 },
  currentTitle: { marginTop: 2, color: colors.ink, fontFamily: fonts.headingBold, fontSize: 18, lineHeight: 21 },
  continueButton: { width: 48, height: 48, alignItems: "center", justifyContent: "center", borderRadius: 18, backgroundColor: colors.gold },
  trailShell: { width: "100%", maxWidth: 720, alignItems: "center", overflow: "hidden", borderTopWidth: 1, borderTopColor: "rgba(105,124,97,0.16)" },
  trailEnd: { width: "100%", alignItems: "center", marginTop: -54, paddingTop: 38, paddingBottom: 38, backgroundColor: "#C8DABB" },
  trailEndStar: { color: colors.goldDeep, fontSize: 38 },
  trailEndTitle: { color: colors.navy, fontFamily: fonts.headingBold, fontSize: 23 },
  trailEndText: { marginTop: 2, color: colors.muted, fontFamily: fonts.body, fontSize: 14 },
  pressed: { opacity: 0.72, transform: [{ scale: 0.97 }] },
});
