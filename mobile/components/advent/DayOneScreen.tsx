import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ReactNode, useRef, useState } from "react";
import {
  Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent,
  Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DAY_ONE } from "../../data/day1";
import { useAdvent } from "../../state/AdventContext";
import { colors, fonts, radius, shadows } from "../../theme/tokens";
import { useAppFonts } from "../../theme/useAppFonts";

const SECTIONS = [
  { title: DAY_ONE.scripture.title, icon: DAY_ONE.icons.scripture },
  { title: DAY_ONE.bibleStory.title, icon: DAY_ONE.icons.bibleStory },
  { title: DAY_ONE.questions.title, icon: DAY_ONE.icons.questions },
  { title: DAY_ONE.promise.title, icon: DAY_ONE.icons.promise },
  { title: DAY_ONE.connection.title, icon: DAY_ONE.icons.connection },
  { title: DAY_ONE.familyChallenge.title, icon: DAY_ONE.icons.familyChallenge },
] as const;

const TONES = [
  { backgroundColor: "#F0F9FC", borderColor: "#C9E6EE" },
  { backgroundColor: colors.paper, borderColor: colors.line },
  { backgroundColor: "#F0F9FC", borderColor: "#C9E6EE" },
  { backgroundColor: "#FFF7DD", borderColor: "#ECD38D" },
  { backgroundColor: "#EAF3F0", borderColor: "#B8D6CD" },
  { backgroundColor: "#FFF2E5", borderColor: "#EBCBB1" },
] as const;

type SectionFrameProps = {
  children: ReactNode;
  icon: ImageSourcePropType;
  index: number;
  title: string;
};

function SectionFrame({ children, icon, index, title }: SectionFrameProps) {
  return (
    <View style={[styles.card, TONES[index]]}>
      <View style={styles.sectionHeading}>
        <View style={styles.sectionIconWrap}>
          <Image source={icon} resizeMode="contain" style={styles.sectionIcon} />
        </View>
        <View style={styles.sectionHeadingCopy}>
          <Text style={styles.sectionEyebrow}>Section {index + 1} of 6</Text>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      </View>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
}

export function DayOneScreen() {
  const { width } = useWindowDimensions();
  const { completeDay, isDayCompleted, isHydrated } = useAdvent();
  const [fontsLoaded] = useAppFonts();
  const [activeSection, setActiveSection] = useState(0);
  const [activeStory, setActiveStory] = useState(0);
  const tabsRef = useRef<ScrollView>(null);
  const isCompleted = isDayCompleted(1);
  const storyWidth = Math.min(Math.max(width - 72, 260), 620);

  if (!fontsLoaded || !isHydrated) return <View style={styles.loading} />;

  const selectSection = (index: number) => {
    const next = Math.max(0, Math.min(index, SECTIONS.length - 1));
    setActiveSection(next);
    tabsRef.current?.scrollTo({ x: Math.max(0, next * 91 - 20), animated: true });
  };

  const updateStory = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / (storyWidth + 12));
    setActiveStory(Math.max(0, Math.min(index, DAY_ONE.bibleStory.moments.length - 1)));
  };

  const renderSection = () => {
    if (activeSection === 0) return (
      <SectionFrame icon={DAY_ONE.icons.scripture} index={0} title={DAY_ONE.scripture.title}>
        <Text style={styles.verse}>{DAY_ONE.scripture.verse}</Text>
        <View style={styles.referencePill}><Text style={styles.reference}>{DAY_ONE.scripture.reference}</Text></View>
      </SectionFrame>
    );

    if (activeSection === 1) return (
      <SectionFrame icon={DAY_ONE.icons.bibleStory} index={1} title={DAY_ONE.bibleStory.title}>
        <Text style={styles.storyIntro}>{DAY_ONE.bibleStory.intro}</Text>
        <ScrollView horizontal decelerationRate="fast" onMomentumScrollEnd={updateStory}
          showsHorizontalScrollIndicator={false} snapToInterval={storyWidth + 12} style={styles.storyRail}>
          {DAY_ONE.bibleStory.moments.map((moment, index) => (
            <View key={moment.caption} style={[styles.storySlide, { width: storyWidth, marginRight: index < 4 ? 12 : 0 }]}>
              <Image source={moment.image} resizeMode="cover" style={styles.storyImage} />
              <View style={styles.captionRow}>
                <View style={styles.captionNumber}><Text style={styles.captionNumberText}>{index + 1}</Text></View>
                <Text style={styles.caption}>{moment.caption}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View accessibilityLabel={`Story image ${activeStory + 1} of 5`} style={styles.dots}>
          {DAY_ONE.bibleStory.moments.map((moment, index) => (
            <View key={moment.caption} style={[styles.dot, index === activeStory && styles.dotActive]} />
          ))}
        </View>
        <View style={styles.storyTextWrap}>
          {DAY_ONE.bibleStory.paragraphs.map((text) => <Text key={text} style={styles.bodyText}>{text}</Text>)}
        </View>
      </SectionFrame>
    );

    if (activeSection === 2) return (
      <SectionFrame icon={DAY_ONE.icons.questions} index={2} title={DAY_ONE.questions.title}>
        {DAY_ONE.questions.items.map((question, index) => (
          <View key={question} style={styles.questionRow}>
            <View style={styles.questionNumber}><Text style={styles.questionNumberText}>{index + 1}</Text></View>
            <Text style={styles.questionText}>{question}</Text>
          </View>
        ))}
      </SectionFrame>
    );

    if (activeSection === 3) return (
      <SectionFrame icon={DAY_ONE.icons.promise} index={3} title={DAY_ONE.promise.title}>
        {DAY_ONE.promise.paragraphs.map((text) => <Text key={text} style={styles.bodyText}>{text}</Text>)}
        <View style={styles.promiseBox}><Text style={styles.promiseLine}>{DAY_ONE.promise.keyLine}</Text></View>
      </SectionFrame>
    );

    if (activeSection === 4) return (
      <SectionFrame icon={DAY_ONE.icons.connection} index={4} title={DAY_ONE.connection.title}>
        <Image source={DAY_ONE.connection.image} resizeMode="cover" style={styles.connectionImage} />
        <View style={styles.connectionCopy}>
          {DAY_ONE.connection.paragraphs.map((text) => <Text key={text} style={[styles.bodyText, styles.connectionText]}>{text}</Text>)}
        </View>
        <View style={styles.connectionHighlight}>
          <Ionicons name="star" size={18} color={colors.goldDeep} />
          <Text style={styles.connectionHighlightText}>{DAY_ONE.connection.keyLine}</Text>
        </View>
      </SectionFrame>
    );

    return (
      <SectionFrame icon={DAY_ONE.icons.familyChallenge} index={5} title={DAY_ONE.familyChallenge.title}>
        {DAY_ONE.familyChallenge.paragraphs.map((text) => <Text key={text} style={styles.bodyText}>{text}</Text>)}
        <View style={styles.familyPrompt}>
          <Text style={styles.familyPromptLabel}>{DAY_ONE.familyChallenge.promptLabel}</Text>
          <Text style={styles.familyPromptText}>{DAY_ONE.familyChallenge.prompt}</Text>
        </View>
        <Text style={[styles.bodyText, styles.familyEnding]}>{DAY_ONE.familyChallenge.ending}</Text>
        {isCompleted ? (
          <View style={styles.completedCard}>
            <Ionicons name="checkmark-circle" size={25} color={colors.sage} />
            <View style={styles.completedCopy}>
              <Text style={styles.completedTitle}>Day 1 complete</Text>
              <Text style={styles.completedText}>Your Advent journey continues.</Text>
            </View>
          </View>
        ) : null}
      </SectionFrame>
    );
  };

  const handlePrimary = async () => {
    if (activeSection < 5) return selectSection(activeSection + 1);
    if (!isCompleted) return completeDay(1);
    router.replace("/home");
  };

  const primaryLabel = activeSection < 5
    ? `Next: ${SECTIONS[activeSection + 1].title}`
    : isCompleted ? "Back to Journey" : "Complete Day 1";

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <StatusBar style="light" />
      <LinearGradient colors={["#14254B", "#315E7B", "#76B8C7"]} end={{ x: 1, y: 1 }} style={styles.header}>
        <Pressable accessibilityLabel="Go back" onPress={() => router.back()} style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <Ionicons name="chevron-back" size={24} color={colors.white} />
        </Pressable>
        <View style={styles.dayBadge}><Text style={styles.dayBadgeText}>{DAY_ONE.dayLabel}</Text></View>
        <Text style={styles.heroTitle}>{DAY_ONE.title}</Text>
        <Text style={styles.heroSubtitle}>{DAY_ONE.subtitle}</Text>
      </LinearGradient>

      <View style={styles.tabBar}>
        <ScrollView ref={tabsRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabRail}>
          {SECTIONS.map((section, index) => {
            const active = activeSection === index;
            return (
              <Pressable accessibilityRole="tab" accessibilityState={{ selected: active }} key={section.title}
                onPress={() => selectSection(index)} style={[styles.tab, active && styles.tabActive]}>
                <Image source={section.icon} resizeMode="contain" style={styles.tabIcon} />
                <Text numberOfLines={1} style={[styles.tabText, active && styles.tabTextActive]}>{section.title}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView key={activeSection} contentContainerStyle={styles.pageContent} showsVerticalScrollIndicator={false} style={styles.page}>
        {renderSection()}
      </ScrollView>

      <SafeAreaView edges={["bottom"]} style={styles.footerSafeArea}>
        <View style={styles.footer}>
          <Pressable accessibilityLabel="Previous section" disabled={activeSection === 0}
            onPress={() => selectSection(activeSection - 1)}
            style={({ pressed }) => [styles.previousButton, activeSection === 0 && styles.previousDisabled, pressed && styles.pressed]}>
            <Ionicons name="chevron-back" size={20} color={colors.navy} />
            <Text style={styles.previousText}>Back</Text>
          </Pressable>
          <Pressable onPress={() => void handlePrimary()} style={({ pressed }) => [styles.nextButton, pressed && styles.pressed]}>
            <LinearGradient colors={[colors.gold, "#E9B943"]} style={styles.nextGradient}>
              <Text numberOfLines={1} style={styles.nextText}>{primaryLabel}</Text>
              <Ionicons name={activeSection === 5 && !isCompleted ? "checkmark-circle" : "chevron-forward"} size={20} color={colors.navy} />
            </LinearGradient>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#14254B" },
  loading: { flex: 1, backgroundColor: colors.cream },
  header: { alignItems: "center", paddingHorizontal: 52, paddingTop: 12, paddingBottom: 17 },
  backButton: { position: "absolute", left: 14, top: 12, width: 42, height: 42, alignItems: "center", justifyContent: "center", borderRadius: 21, backgroundColor: "rgba(255,255,255,0.13)" },
  dayBadge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: radius.pill, backgroundColor: "rgba(255,255,255,0.16)", borderWidth: 1, borderColor: "rgba(255,255,255,0.26)" },
  dayBadgeText: { color: colors.white, fontFamily: fonts.bodyBold, fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase" },
  heroTitle: { marginTop: 6, color: colors.white, fontFamily: fonts.headingBold, fontSize: 27, lineHeight: 31, textAlign: "center" },
  heroSubtitle: { maxWidth: 540, marginTop: 2, color: "rgba(255,255,255,0.84)", fontFamily: fonts.bodySemiBold, fontSize: 12, lineHeight: 17, textAlign: "center" },
  tabBar: { backgroundColor: colors.paper, borderBottomWidth: 1, borderBottomColor: colors.line },
  tabRail: { paddingHorizontal: 10, paddingVertical: 8, gap: 7 },
  tab: { width: 84, alignItems: "center", paddingHorizontal: 5, paddingVertical: 6, borderRadius: radius.md, borderWidth: 1, borderColor: "transparent" },
  tabActive: { backgroundColor: "#FFF1C7", borderColor: "#E8C763" },
  tabIcon: { width: 34, height: 34 },
  tabText: { width: "100%", marginTop: 2, color: colors.muted, fontFamily: fonts.bodyBold, fontSize: 10, textAlign: "center" },
  tabTextActive: { color: colors.navy },
  page: { flex: 1, backgroundColor: colors.cream },
  pageContent: { flexGrow: 1, width: "100%", maxWidth: 720, alignSelf: "center", padding: 14, paddingBottom: 24 },
  card: { flexGrow: 1, padding: 18, borderWidth: 1, borderRadius: radius.lg, ...shadows.soft },
  sectionHeading: { flexDirection: "row", alignItems: "center" },
  sectionIconWrap: { width: 58, height: 58, alignItems: "center", justifyContent: "center", borderRadius: 19, backgroundColor: "rgba(255,255,255,0.82)" },
  sectionIcon: { width: 50, height: 50 },
  sectionHeadingCopy: { flex: 1, marginLeft: 12 },
  sectionEyebrow: { color: colors.goldDeep, fontFamily: fonts.bodyBold, fontSize: 10, letterSpacing: 1.1, textTransform: "uppercase" },
  sectionTitle: { marginTop: 1, color: colors.navy, fontFamily: fonts.headingBold, fontSize: 25, lineHeight: 29 },
  sectionContent: { marginTop: 16 },
  verse: { color: colors.ink, fontFamily: fonts.heading, fontSize: 23, lineHeight: 34, fontStyle: "italic" },
  referencePill: { alignSelf: "flex-start", marginTop: 16, paddingHorizontal: 14, paddingVertical: 7, borderRadius: radius.pill, backgroundColor: "#DCEFF4" },
  reference: { color: colors.navySoft, fontFamily: fonts.bodyBold, fontSize: 14 },
  storyIntro: { color: colors.navySoft, fontFamily: fonts.bodySemiBold, fontSize: 16, lineHeight: 24 },
  storyRail: { marginTop: 16, overflow: "visible" },
  storySlide: { overflow: "hidden", borderRadius: radius.md, backgroundColor: "#EDF1EC", borderWidth: 1, borderColor: colors.line },
  storyImage: { width: "100%", aspectRatio: 1.5 },
  captionRow: { minHeight: 54, flexDirection: "row", alignItems: "center", paddingHorizontal: 13, paddingVertical: 10 },
  captionNumber: { width: 26, height: 26, alignItems: "center", justifyContent: "center", borderRadius: 13, backgroundColor: colors.gold },
  captionNumberText: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 12 },
  caption: { flex: 1, marginLeft: 9, color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 13, lineHeight: 18 },
  dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginTop: 12 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: colors.line },
  dotActive: { width: 22, backgroundColor: colors.goldDeep },
  storyTextWrap: { marginTop: 16, gap: 11 },
  bodyText: { color: colors.ink, fontFamily: fonts.body, fontSize: 15, lineHeight: 23 },
  questionRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 14 },
  questionNumber: { width: 31, height: 31, alignItems: "center", justifyContent: "center", borderRadius: 16, backgroundColor: colors.sky },
  questionNumberText: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 13 },
  questionText: { flex: 1, marginLeft: 11, paddingTop: 3, color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 16, lineHeight: 23 },
  promiseBox: { marginTop: 18, padding: 18, borderRadius: radius.md, backgroundColor: colors.gold, borderWidth: 1, borderColor: "#D5A637" },
  promiseLine: { color: colors.navy, fontFamily: fonts.headingBold, fontSize: 24, lineHeight: 29, textAlign: "center" },
  connectionImage: { width: "100%", aspectRatio: 1.5, borderRadius: radius.md, backgroundColor: "#DDE8E5" },
  connectionCopy: { marginTop: 16, gap: 7 },
  connectionText: { fontFamily: fonts.bodySemiBold },
  connectionHighlight: { marginTop: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: radius.md, backgroundColor: "rgba(255,255,255,0.82)" },
  connectionHighlightText: { color: colors.navy, fontFamily: fonts.headingBold, fontSize: 19 },
  familyPrompt: { marginTop: 16, padding: 16, borderRadius: radius.md, backgroundColor: "rgba(255,255,255,0.74)", borderLeftWidth: 4, borderLeftColor: colors.goldDeep },
  familyPromptLabel: { color: colors.muted, fontFamily: fonts.bodyBold, fontSize: 12, letterSpacing: 0.6, textTransform: "uppercase" },
  familyPromptText: { marginTop: 4, color: colors.navy, fontFamily: fonts.heading, fontSize: 21, lineHeight: 28 },
  familyEnding: { marginTop: 14, fontFamily: fonts.bodySemiBold },
  completedCard: { marginTop: 18, flexDirection: "row", alignItems: "center", padding: 15, borderRadius: radius.md, backgroundColor: colors.navy },
  completedCopy: { flex: 1, marginLeft: 10 },
  completedTitle: { color: colors.white, fontFamily: fonts.headingBold, fontSize: 17 },
  completedText: { color: "rgba(255,255,255,0.7)", fontFamily: fonts.body, fontSize: 12 },
  footerSafeArea: { backgroundColor: colors.paper },
  footer: { width: "100%", maxWidth: 720, alignSelf: "center", flexDirection: "row", gap: 10, paddingHorizontal: 14, paddingTop: 10, paddingBottom: 10, borderTopWidth: 1, borderTopColor: colors.line },
  previousButton: { minHeight: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 14, borderRadius: radius.md, backgroundColor: "#EBE6D9" },
  previousDisabled: { opacity: 0.35 },
  previousText: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 14 },
  nextButton: { flex: 1, overflow: "hidden", borderRadius: radius.md, ...shadows.glow },
  nextGradient: { minHeight: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingHorizontal: 13 },
  nextText: { flexShrink: 1, color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 14 },
  pressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
});
