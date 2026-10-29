import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ParentalLink } from '../components/ParentalLink';
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomNavigation } from "../components/navigation/BottomNavigation";
import { getTranslations } from "../i18n/translations";
import { CHURCH_ADDRESS, CHURCH_CONTENT, CHURCH_NAME, CHURCH_YOUTUBE } from "../data/church";
import { useAdvent } from "../state/AdventContext";
import { colors, fonts, radius, shadows } from "../theme/tokens";
import { useAppFonts } from "../theme/useAppFonts";

export default function ChurchScreen() {
  const { isHydrated, selectedLanguage } = useAdvent();
  const [fontsLoaded] = useAppFonts();
  const t = getTranslations(selectedLanguage);
  const content = CHURCH_CONTENT[selectedLanguage];

  if (!fontsLoaded || !isHydrated) return <View style={styles.loading} />;

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={["#071126", colors.navy, "#283E65"]} style={styles.hero}>
          <Text style={styles.star}>✦</Text>
          <Text style={styles.eyebrow}>{t.supportedBy}</Text>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.subtitle}>{CHURCH_NAME}</Text>
        </LinearGradient>

        <View style={styles.logoCard}>
          <Image source={require("../assets/church/transfiguration-logo.png")} resizeMode="contain" accessibilityLabel={CHURCH_NAME} style={styles.logo} />
        </View>

        <View style={styles.card}>
          <View style={styles.icon}><Ionicons name="people-outline" size={24} color={colors.navy} /></View>
          <Text style={styles.cardTitle}>{content.welcome}</Text>
          {content.paragraphs.map((paragraph) => <Text key={paragraph} style={styles.paragraph}>{paragraph}</Text>)}
          <Text style={styles.blessing}>{content.blessing}</Text>
        </View>

        <View style={[styles.card, styles.goldCard]}>
          <Text style={styles.quote}>“</Text>
          <Text style={styles.cardText}>{content.verse}</Text>
          <Text style={styles.reference}>{content.reference}</Text>
          <Text style={styles.ornament}>✦</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="location-outline" size={26} color={colors.goldDeep} />
          <Text style={styles.cardTitle}>{content.address}</Text>
          <Text selectable style={styles.cardText}>{CHURCH_ADDRESS}</Text>
          <ParentalLink url={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CHURCH_ADDRESS)}`}><Text style={styles.mapLink}>{content.maps} ↗</Text></ParentalLink>
          <ParentalLink url={CHURCH_YOUTUBE}><Text style={styles.youtube}><Ionicons name="logo-youtube" size={22} color={colors.white} /> {content.youtube} ↗</Text></ParentalLink>
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.navy },
  loading: { flex: 1, backgroundColor: colors.navy },
  scroll: { flex: 1, backgroundColor: colors.cream },
  content: { paddingBottom: 36 },
  hero: { minHeight: 250, alignItems: "center", justifyContent: "center", paddingHorizontal: 26, paddingVertical: 38 },
  star: { color: colors.gold, fontSize: 38, textShadowColor: colors.gold, textShadowRadius: 14 },
  eyebrow: { marginTop: 8, color: colors.gold, fontFamily: fonts.bodyBold, fontSize: 10, letterSpacing: 2, textTransform: "uppercase" },
  title: { maxWidth: 560, marginTop: 7, color: colors.white, fontFamily: fonts.headingBold, fontSize: 31, lineHeight: 34, textAlign: "center" },
  subtitle: { maxWidth: 520, marginTop: 8, color: "rgba(255,255,255,0.68)", fontFamily: fonts.body, fontSize: 14, lineHeight: 20, textAlign: "center" },
  logoCard: { width: "88%", maxWidth: 620, minHeight: 126, marginTop: -24, alignSelf: "center", alignItems: "center", justifyContent: "center", borderRadius: radius.lg, backgroundColor: colors.paper, ...shadows.soft },
  logo: { width: 240, height: 240, maxWidth: "90%", marginVertical: 20 },
  paragraph: { width: "100%", marginTop: 17, color: colors.ink, fontFamily: fonts.body, fontSize: 16, lineHeight: 26 },
  blessing: { marginTop: 22, color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 17, lineHeight: 26, textAlign: "center" },
  reference: { marginTop: 12, color: colors.goldDeep, fontFamily: fonts.bodyBold, fontSize: 14 },
  mapLink: { marginTop: 14, color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 15, textDecorationLine: "underline", padding: 10 },
  youtube: { marginTop: 16, paddingVertical: 16, paddingHorizontal: 20, borderRadius: radius.md, backgroundColor: colors.navy, color: colors.white, fontFamily: fonts.bodyBold, fontSize: 16, textAlign: "center", overflow: "hidden" },
  card: { width: "88%", maxWidth: 620, marginTop: 18, alignSelf: "center", alignItems: "center", padding: 24, borderWidth: 1, borderColor: colors.line, borderRadius: radius.lg, backgroundColor: colors.paper },
  goldCard: { backgroundColor: "#FFF0C8", borderColor: "rgba(216,169,60,0.45)" },
  icon: { width: 48, height: 48, alignItems: "center", justifyContent: "center", borderRadius: 24, backgroundColor: "rgba(143,211,232,0.28)" },
  cardTitle: { marginTop: 12, color: colors.navy, fontFamily: fonts.headingBold, fontSize: 23, textAlign: "center" },
  cardText: { marginTop: 7, color: colors.muted, fontFamily: fonts.body, fontSize: 15, lineHeight: 23, textAlign: "center" },
  quote: { height: 30, color: colors.goldDeep, fontFamily: fonts.headingBold, fontSize: 52, lineHeight: 48 },
  ornament: { marginTop: 12, color: colors.goldDeep, fontSize: 18 },
  about: { width: "88%", maxWidth: 620, marginTop: 28, alignSelf: "center", paddingHorizontal: 4 },
  aboutTitle: { color: colors.navy, fontFamily: fonts.headingBold, fontSize: 21 },
  aboutText: { marginTop: 5, color: colors.muted, fontFamily: fonts.body, fontSize: 14, lineHeight: 21 },
});
