import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AdventDayMeta } from "../../data/adventDays";
import { getTranslations } from "../../i18n/translations";
import { useAdvent } from "../../state/AdventContext";
import { colors, fonts, radius, shadows } from "../../theme/tokens";
import { useAppFonts } from "../../theme/useAppFonts";

const ICONS = ["book-outline", "library-outline", "bulb-outline", "trail-sign-outline", "chatbubble-ellipses-outline", "people-outline"] as const;

export function PlaceholderDayScreen({ day }: { day: AdventDayMeta }) {
  const { completeDay, isDayCompleted, isHydrated, selectedLanguage } = useAdvent();
  const t = getTranslations(selectedLanguage);
  const [fontsLoaded] = useAppFonts();
  const [celebrating, setCelebrating] = useState(false);
  const sparkle = useRef(new Animated.Value(0)).current;
  const alreadyCompleted = isDayCompleted(day.id);

  useEffect(() => {
    if (!celebrating) return;
    Animated.timing(sparkle, { toValue: 1, duration: 900, useNativeDriver: true }).start();
  }, [celebrating, sparkle]);

  if (!fontsLoaded || !isHydrated) return <View style={styles.loading} />;

  const finish = async () => {
    await completeDay(day.id);
    setCelebrating(true);
  };

  const sections = [t.scripture, t.bibleStory, t.reflection, t.promiseConnection, t.thinkAboutIt, t.familyChallenge];

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <StatusBar style="light" />
      <LinearGradient colors={["#071126", colors.navySoft]} style={styles.header}>
        <Pressable onPress={() => router.back()} accessibilityLabel={t.goBack} style={styles.back}>
          <Ionicons name="chevron-back" size={24} color={colors.gold} />
        </Pressable>
        <View style={styles.symbolWrap}><Text style={styles.symbol}>{day.symbol}</Text></View>
        <Text style={styles.day}>{t.dayOfTwentyFour(day.id)}</Text>
        <Text style={styles.title}>{day.title[selectedLanguage]}</Text>
        <View style={styles.connectionPill}>
          <Text style={styles.connectionText}>{t.connectionTypes[day.connectionType]}</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.notice}>
          <Ionicons name="information-circle-outline" size={20} color={colors.goldDeep} />
          <Text style={styles.noticeText}>{t.contentComingSoon}</Text>
        </View>

        {sections.map((heading, index) => (
          <View key={heading} style={styles.card}>
            <View style={styles.cardHeading}>
              <View style={styles.cardIcon}><Ionicons name={ICONS[index]} size={20} color={colors.navy} /></View>
              <Text style={styles.cardTitle}>{heading}</Text>
            </View>
            <Text style={styles.placeholder}>{t.contentPlaceholder}</Text>
          </View>
        ))}

        {celebrating || alreadyCompleted ? (
          <LinearGradient
            colors={day.id === 24 ? ["#443611", colors.navy, "#071126"] : [colors.navySoft, colors.navy]}
            style={[styles.completeCard, day.id === 24 && styles.finaleCard]}
          >
            <Animated.Text style={[styles.sparkles, day.id === 24 && styles.finaleStar, celebrating && { opacity: sparkle, transform: [{ scale: sparkle }] }]}>✦  ✧  ✦</Animated.Text>
            <Text style={styles.completeTitle}>{day.id === 24 ? t.finaleTitle : t.completedDay(day.id)}</Text>
            {day.id === 24 ? <Text style={styles.finaleSubtitle}>{t.finaleSubtitle}</Text> : null}
            <Text style={styles.completeText}>{day.id === 24 ? t.finaleMessage : t.journeyContinues}</Text>
            <Pressable onPress={() => router.replace("/home")} style={styles.homeButton}>
              <Text style={styles.homeButtonText}>{t.journey}</Text>
              <Ionicons name="arrow-forward" size={19} color={colors.navy} />
            </Pressable>
          </LinearGradient>
        ) : (
          <Pressable onPress={() => void finish()} style={({ pressed }) => [styles.completeButton, pressed && styles.pressed]}>
            <LinearGradient colors={[colors.gold, colors.goldDeep]} style={styles.completeGradient}>
              <Ionicons name="checkmark-circle" size={22} color={colors.navy} />
              <Text style={styles.completeButtonText}>{t.completeDay(day.id)}</Text>
            </LinearGradient>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.navy },
  loading: { flex: 1, backgroundColor: colors.navy },
  header: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 26, alignItems: "center" },
  back: { position: "absolute", top: 16, left: 14, width: 44, height: 44, alignItems: "center", justifyContent: "center", borderRadius: 22, backgroundColor: "rgba(255,255,255,0.08)" },
  symbolWrap: { width: 66, height: 66, alignItems: "center", justifyContent: "center", borderRadius: 33, backgroundColor: colors.gold, ...shadows.glow },
  symbol: { fontSize: 31 },
  day: { marginTop: 12, color: colors.gold, fontFamily: fonts.bodyBold, fontSize: 10, letterSpacing: 1.7 },
  title: { maxWidth: 540, marginTop: 4, color: colors.white, fontFamily: fonts.headingBold, fontSize: 29, lineHeight: 33, textAlign: "center" },
  connectionPill: { marginTop: 10, paddingHorizontal: 13, paddingVertical: 6, borderRadius: radius.pill, borderWidth: 1, borderColor: "rgba(244,201,93,0.46)" },
  connectionText: { color: colors.gold, fontFamily: fonts.bodyBold, fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase" },
  scroll: { flex: 1, backgroundColor: colors.cream },
  content: { width: "100%", maxWidth: 720, alignSelf: "center", padding: 18, paddingBottom: 48 },
  notice: { flexDirection: "row", alignItems: "center", gap: 10, padding: 14, borderRadius: radius.md, backgroundColor: "#FFF0C8" },
  noticeText: { flex: 1, color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 13, lineHeight: 18 },
  card: { marginTop: 14, padding: 18, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, backgroundColor: colors.paper, ...shadows.soft },
  cardHeading: { flexDirection: "row", alignItems: "center" },
  cardIcon: { width: 38, height: 38, alignItems: "center", justifyContent: "center", borderRadius: 19, backgroundColor: "rgba(143,211,232,0.28)" },
  cardTitle: { flex: 1, marginLeft: 11, color: colors.navy, fontFamily: fonts.heading, fontSize: 20 },
  placeholder: { marginTop: 14, color: colors.muted, fontFamily: fonts.body, fontSize: 14, lineHeight: 22, fontStyle: "italic" },
  completeButton: { marginTop: 22, overflow: "hidden", borderRadius: radius.md, ...shadows.glow },
  completeGradient: { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 9, paddingHorizontal: 18 },
  completeButtonText: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 16 },
  completeCard: { marginTop: 22, alignItems: "center", padding: 24, borderRadius: radius.lg, backgroundColor: colors.navy },
  finaleCard: { minHeight: 310, justifyContent: "center", borderWidth: 1, borderColor: "rgba(244,201,93,0.48)", ...shadows.glow },
  sparkles: { color: colors.gold, fontSize: 31 },
  finaleStar: { fontSize: 52, textShadowColor: colors.gold, textShadowRadius: 18 },
  completeTitle: { marginTop: 7, color: colors.white, fontFamily: fonts.headingBold, fontSize: 26 },
  finaleSubtitle: { marginTop: 2, color: colors.gold, fontFamily: fonts.bodyBold, fontSize: 12, letterSpacing: 2.1 },
  completeText: { marginTop: 2, color: "rgba(255,255,255,0.7)", fontFamily: fonts.body, fontSize: 14 },
  homeButton: { minHeight: 48, marginTop: 17, paddingHorizontal: 22, flexDirection: "row", alignItems: "center", gap: 8, borderRadius: radius.pill, backgroundColor: colors.gold },
  homeButtonText: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 15 },
  pressed: { opacity: 0.76, transform: [{ scale: 0.99 }] },
});
