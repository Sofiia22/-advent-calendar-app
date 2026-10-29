import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ReactNode, useRef, useState } from "react";
import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DAY_ONE_CONTENT, DAY_ONE_ICONS, DAY_ONE_STORY_IMAGES, IllustratedDayContent } from "../../data/day1";
import { LanguageId, useAdvent } from "../../state/AdventContext";
import { colors, fonts, radius, shadows } from "../../theme/tokens";
import { useAppFonts } from "../../theme/useAppFonts";

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
  eyebrow: string;
  centered?: boolean;
};

function SectionFrame({ children, icon, index, title, eyebrow, centered = false }: SectionFrameProps) {
  return (
    <View style={[styles.card, TONES[index], centered && styles.centeredCard]}>
      <View style={styles.sectionHeading}>
        <View style={styles.sectionIconWrap}>
          <Image source={icon} resizeMode="contain" style={styles.sectionIcon} />
        </View>
        <View style={styles.sectionHeadingCopy}>
          <Text style={styles.sectionEyebrow}>{eyebrow}</Text>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      </View>
      <View style={[styles.sectionContent, centered && styles.centeredContent]}>{children}</View>
    </View>
  );
}

type IllustratedDayScreenProps = {
  dayNumber: number;
  contentByLanguage: Record<LanguageId, IllustratedDayContent>;
  icons: typeof DAY_ONE_ICONS;
  storyImages: readonly ImageSourcePropType[];
};

export function IllustratedDayScreen({ dayNumber, contentByLanguage, icons, storyImages }: IllustratedDayScreenProps) {
  const { width } = useWindowDimensions();
  const { completeDay, isDayCompleted, isHydrated, selectedLanguage, setLanguage } = useAdvent();
  const [fontsLoaded] = useAppFonts();
  const [activeSection, setActiveSection] = useState(0);
  const tabsRef = useRef<ScrollView>(null);
  const content = contentByLanguage[selectedLanguage];
  const isCompleted = isDayCompleted(dayNumber);
  const isWideArticle = width >= 620;

  const sections = [
    { title: content.sectionTitles.scripture, icon: icons.scripture },
    { title: content.sectionTitles.bibleStory, icon: icons.bibleStory },
    { title: content.sectionTitles.questions, icon: icons.questions },
    { title: content.sectionTitles.promise, icon: icons.promise },
    { title: content.sectionTitles.connection, icon: icons.connection },
    { title: content.sectionTitles.familyChallenge, icon: icons.familyChallenge },
  ];

  if (!fontsLoaded || !isHydrated) return <View style={styles.loading} />;

  const selectSection = (index: number) => {
    const next = Math.max(0, Math.min(index, sections.length - 1));
    setActiveSection(next);
    tabsRef.current?.scrollTo({ x: Math.max(0, next * 91 - 20), animated: true });
  };

  const sectionEyebrow = `${content.navigation.section} ${activeSection + 1} ${content.navigation.of} 6`;

  const renderSection = () => {
    if (activeSection === 0) return (
      <SectionFrame centered eyebrow={sectionEyebrow} icon={icons.scripture} index={0} title={content.sectionTitles.scripture}>
        <View style={styles.scriptureGlow}>
          <Ionicons name="sparkles" size={24} color={colors.goldDeep} />
          <Text style={styles.verse}>{content.scripture.verse}</Text>
          <View style={styles.referencePill}><Text style={styles.reference}>{content.scripture.reference}</Text></View>
        </View>
      </SectionFrame>
    );

    if (activeSection === 1) return (
      <SectionFrame eyebrow={sectionEyebrow} icon={icons.bibleStory} index={1} title={content.sectionTitles.bibleStory}>
        <View style={styles.articleLead}>
          <Text style={styles.articleLeadText}>{content.subtitle}</Text>
          <View style={styles.articleRule} />
        </View>

        <View style={styles.article}>
          {content.storyPages.map((page, index) => {
            const imageIndex = page.imageIndex === undefined ? index : page.imageIndex;
            const hasIllustration = imageIndex !== null && Boolean(storyImages[imageIndex]);
            const inlineOnWideScreen = hasIllustration && isWideArticle && [1, 2, 4, 5].includes(index);
            const illustrationFirst = page.imageIndex === undefined && (index === 1 || index === 4);
            const illustration = hasIllustration && imageIndex !== null ? (
              <Image
                source={storyImages[imageIndex]}
                resizeMode="cover"
                style={[
                  styles.bookIllustration,
                  inlineOnWideScreen && styles.bookIllustrationInline,
                  !isWideArticle && index % 3 === 1 && styles.bookIllustrationRight,
                  !isWideArticle && index % 3 === 2 && styles.bookIllustrationLeft,
                ]}
              />
            ) : null;
            const passage = (
              <View style={styles.bookCopy}>
                <Text style={styles.bookSubheading}>{page.title}</Text>
                <View style={styles.articleParagraphs}>
                  {page.paragraphs.map((paragraph) => <Text key={paragraph} style={styles.bodyText}>{paragraph}</Text>)}
                </View>
              </View>
            );

            return (
              <View key={page.title} style={[styles.bookPassage, inlineOnWideScreen && styles.bookPassageInline]}>
                {illustrationFirst ? illustration : passage}
                {illustrationFirst ? passage : illustration}
              </View>
            );
          })}
          <View style={styles.articleEnding}>
            <Ionicons name="sparkles" size={20} color={colors.goldDeep} />
            <Text style={styles.articleEndingText}>{content.promise.keyLine}</Text>
          </View>
        </View>
      </SectionFrame>
    );

    if (activeSection === 2) return (
      <SectionFrame eyebrow={sectionEyebrow} icon={icons.questions} index={2} title={content.sectionTitles.questions}>
        {content.questions.map((question, index) => (
          <View key={question} style={styles.questionRow}>
            <View style={styles.questionNumber}><Text style={styles.questionNumberText}>{index + 1}</Text></View>
            <Text style={styles.questionText}>{question}</Text>
          </View>
        ))}
      </SectionFrame>
    );

    if (activeSection === 3) return (
      <SectionFrame centered eyebrow={sectionEyebrow} icon={icons.promise} index={3} title={content.sectionTitles.promise}>
        <Text style={styles.centerBody}>{content.promise.body}</Text>
        <View style={styles.promiseBox}><Text style={styles.promiseLine}>{content.promise.keyLine}</Text></View>
      </SectionFrame>
    );

    if (activeSection === 4) return (
      <SectionFrame centered eyebrow={sectionEyebrow} icon={icons.connection} index={4} title={content.sectionTitles.connection}>
        <View style={styles.connectionSymbol}>
          <Ionicons name="star" size={29} color={colors.goldDeep} />
        </View>
        <Text style={styles.centerBody}>{content.connection.body}</Text>
        <View style={styles.connectionHighlight}><Text style={styles.connectionHighlightText}>{content.connection.keyLine}</Text></View>
      </SectionFrame>
    );

    return (
      <SectionFrame eyebrow={sectionEyebrow} icon={icons.familyChallenge} index={5} title={content.sectionTitles.familyChallenge}>
        <Text style={styles.bodyText}>{content.familyChallenge.intro}</Text>
        <Text style={styles.challengeInstruction}>{content.familyChallenge.instruction}</Text>
        <Text style={styles.examplesLabel}>{content.familyChallenge.examplesLabel}</Text>
        <View style={styles.examplesGrid}>
          {content.familyChallenge.examples.map((example, index) => (
            <View key={example} style={styles.examplePill}>
              <Text style={styles.exampleNumber}>{index + 1}</Text>
              <Text style={styles.exampleText}>{example}</Text>
            </View>
          ))}
        </View>
        <Text style={[styles.bodyText, styles.reflection]}>{content.familyChallenge.reflection}</Text>
        <View style={styles.familyPrayer}>
          <Text style={styles.familyPrayerLabel}>{content.familyChallenge.ending}</Text>
          <Text style={styles.familyPrayerText}>{content.familyChallenge.prayer}</Text>
        </View>
        {isCompleted ? (
          <View style={styles.completedCard}>
            <Ionicons name="checkmark-circle" size={25} color={colors.sage} />
            <View style={styles.completedCopy}>
              <Text style={styles.completedTitle}>{dayNumber === 24 ? (selectedLanguage === 'uk' ? 'З Різдвом! ✦' : selectedLanguage === 'ru' ? 'С Рождеством! ✦' : 'Merry Christmas! ✦') : content.navigation.completed}</Text>
              <Text style={styles.completedText}>{dayNumber === 24 ? (selectedLanguage === 'uk' ? 'Ісус — обіцяний Спаситель! Нехай радість Різдва буде з вашою родиною.' : selectedLanguage === 'ru' ? 'Иисус — обещанный Спаситель! Пусть радость Рождества будет с вашей семьёй.' : 'Jesus is the promised Savior! May the joy of Christmas be with your family.') : content.navigation.journeyContinues}</Text>
            </View>
          </View>
        ) : null}
      </SectionFrame>
    );
  };

  const handlePrimary = async () => {
    if (activeSection < 5) return selectSection(activeSection + 1);
    if (!isCompleted) return completeDay(dayNumber);
    router.replace("/home");
  };

  const primaryLabel = activeSection < 5 ? `${content.navigation.next}: ${sections[activeSection + 1].title}`
    : isCompleted ? content.navigation.backToJourney : content.navigation.complete;

  const handleBack = () => {
    selectSection(activeSection - 1);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <StatusBar style="light" />
      <LinearGradient colors={["#14254B", "#315E7B", "#76B8C7"]} end={{ x: 1, y: 1 }} style={styles.header}>
        <Pressable accessibilityLabel={content.navigation.back} onPress={() => router.canGoBack() ? router.back() : router.replace('/home')} style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <Ionicons name="chevron-back" size={24} color={colors.white} />
        </Pressable>
        <View style={styles.dayBadge}><Text style={styles.dayBadgeText}>{content.dayLabel}</Text></View>
        <Text style={styles.heroTitle}>{content.title}</Text>
        <Text style={styles.heroSubtitle}>{content.subtitle}</Text>
        {(
          <View style={styles.languageChoices}>
            {([{ id: "uk", label: "Українська" }, { id: "en", label: "English" }, { id: "ru", label: "Русский" }] as const).map((language) => (
              <Pressable key={language.id} accessibilityRole="button" accessibilityState={{ selected: selectedLanguage === language.id }} onPress={() => void setLanguage(language.id)} style={[styles.languageChoice, selectedLanguage === language.id && styles.languageChoiceSelected]}>
                <Text style={styles.languageChoiceText}>{language.label}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </LinearGradient>

      <View style={styles.tabBar}>
        <ScrollView ref={tabsRef} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabRail}>
          {sections.map((section, index) => {
            const active = activeSection === index;
            return (
              <Pressable accessibilityRole="tab" accessibilityState={{ selected: active }} key={section.title} onPress={() => selectSection(index)} style={[styles.tab, active && styles.tabActive]}>
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
          <Pressable disabled={activeSection === 0} onPress={handleBack} style={({ pressed }) => [styles.previousButton, activeSection === 0 && styles.disabled, pressed && styles.pressed]}>
            <Ionicons name="chevron-back" size={20} color={colors.navy} />
            <Text style={styles.previousText}>{content.navigation.back}</Text>
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

export function DayOneScreen() {
  return <IllustratedDayScreen dayNumber={1} contentByLanguage={DAY_ONE_CONTENT} icons={DAY_ONE_ICONS} storyImages={DAY_ONE_STORY_IMAGES} />;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#14254B" }, loading: { flex: 1, backgroundColor: colors.cream },
  header: { alignItems: "center", paddingHorizontal: 52, paddingTop: 12, paddingBottom: 17 },
  languageChoices: { flexDirection: "row", gap: 8, flexWrap: "wrap", justifyContent: "center", marginTop: 10 },
  languageChoice: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 18, backgroundColor: "rgba(255,255,255,0.10)", borderWidth: 1, borderColor: "rgba(255,255,255,0.25)" },
  languageChoiceSelected: { backgroundColor: "rgba(255,255,255,0.28)", borderColor: colors.white },
  languageChoiceText: { color: colors.white, fontFamily: fonts.bodySemiBold, fontSize: 13 },
  backButton: { position: "absolute", left: 14, top: 12, width: 42, height: 42, alignItems: "center", justifyContent: "center", borderRadius: 21, backgroundColor: "rgba(255,255,255,0.13)" },
  dayBadge: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: radius.pill, backgroundColor: "rgba(255,255,255,0.16)", borderWidth: 1, borderColor: "rgba(255,255,255,0.26)" },
  dayBadgeText: { color: colors.white, fontFamily: fonts.bodyBold, fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase" },
  heroTitle: { marginTop: 6, color: colors.white, fontFamily: fonts.headingBold, fontSize: 27, lineHeight: 31, textAlign: "center" },
  heroSubtitle: { maxWidth: 540, marginTop: 2, color: "rgba(255,255,255,0.84)", fontFamily: fonts.bodySemiBold, fontSize: 12, lineHeight: 17, textAlign: "center" },
  tabBar: { backgroundColor: colors.paper, borderBottomWidth: 1, borderBottomColor: colors.line },
  tabRail: { paddingHorizontal: 10, paddingVertical: 8, gap: 7 },
  tab: { width: 84, alignItems: "center", paddingHorizontal: 5, paddingVertical: 6, borderRadius: radius.md, borderWidth: 1, borderColor: "transparent" },
  tabActive: { backgroundColor: "#FFF1C7", borderColor: "#E8C763" }, tabIcon: { width: 34, height: 34 },
  tabText: { width: "100%", marginTop: 2, color: colors.muted, fontFamily: fonts.bodyBold, fontSize: 10, textAlign: "center" }, tabTextActive: { color: colors.navy },
  page: { flex: 1, backgroundColor: colors.cream },
  pageContent: { flexGrow: 1, width: "100%", maxWidth: 720, alignSelf: "center", padding: 14, paddingBottom: 24 },
  card: { flexGrow: 1, padding: 18, borderWidth: 1, borderRadius: radius.lg, ...shadows.soft }, centeredCard: { justifyContent: "center" },
  sectionHeading: { flexDirection: "row", alignItems: "center" },
  sectionIconWrap: { width: 58, height: 58, alignItems: "center", justifyContent: "center", borderRadius: 19, backgroundColor: "rgba(255,255,255,0.82)" }, sectionIcon: { width: 50, height: 50 },
  sectionHeadingCopy: { flex: 1, marginLeft: 12 }, sectionEyebrow: { color: colors.goldDeep, fontFamily: fonts.bodyBold, fontSize: 10, letterSpacing: 1.1, textTransform: "uppercase" },
  sectionTitle: { marginTop: 1, color: colors.navy, fontFamily: fonts.headingBold, fontSize: 25, lineHeight: 29 },
  sectionContent: { marginTop: 16 }, centeredContent: { flexGrow: 1, alignItems: "center", justifyContent: "center", paddingVertical: 28 },
  scriptureGlow: { width: "100%", maxWidth: 540, alignItems: "center", padding: 24, borderRadius: radius.lg, backgroundColor: "rgba(255,255,255,0.78)" },
  verse: { marginTop: 13, color: colors.ink, fontFamily: fonts.heading, fontSize: 27, lineHeight: 38, fontStyle: "italic", textAlign: "center" },
  referencePill: { marginTop: 18, paddingHorizontal: 15, paddingVertical: 8, borderRadius: radius.pill, backgroundColor: "#DCEFF4" }, reference: { color: colors.navySoft, fontFamily: fonts.bodyBold, fontSize: 15 },
  articleLead: { marginBottom: 18, alignItems: "center" },
  articleLeadText: { color: colors.muted, fontFamily: fonts.heading, fontSize: 18, lineHeight: 24, textAlign: "center" },
  articleRule: { width: 56, height: 3, marginTop: 10, borderRadius: 2, backgroundColor: colors.gold },
  article: { paddingHorizontal: 5 },
  bookPassage: { marginBottom: 25 },
  bookPassageInline: { flexDirection: "row", alignItems: "flex-start", gap: 20 },
  bookIllustration: { width: "68%", height: 188, alignSelf: "center", marginTop: 14, borderRadius: radius.sm, backgroundColor: "#EDF1EC" },
  bookIllustrationInline: { width: "33%", height: 142, flexShrink: 0, marginTop: 3 },
  bookIllustrationRight: { width: "82%", height: 154, alignSelf: "flex-end" },
  bookIllustrationLeft: { width: "78%", height: 150, alignSelf: "flex-start" },
  bookCopy: { flex: 1 },
  bookSubheading: { color: colors.goldDeep, fontFamily: fonts.headingBold, fontSize: 17, lineHeight: 22 },
  articleParagraphs: { marginTop: 10, gap: 9 },
  articleEnding: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 9, padding: 17, borderRadius: radius.md, backgroundColor: "#FFF1C7" },
  articleEndingText: { flex: 1, color: colors.navy, fontFamily: fonts.headingBold, fontSize: 19, lineHeight: 25, textAlign: "center" },
  bodyText: { color: colors.ink, fontFamily: fonts.body, fontSize: 15, lineHeight: 23 },
  questionRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 14 }, questionNumber: { width: 31, height: 31, alignItems: "center", justifyContent: "center", borderRadius: 16, backgroundColor: colors.sky }, questionNumberText: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 13 }, questionText: { flex: 1, marginLeft: 11, paddingTop: 3, color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 16, lineHeight: 23 },
  centerBody: { maxWidth: 540, color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 18, lineHeight: 28, textAlign: "center" },
  promiseBox: { width: "100%", maxWidth: 540, marginTop: 20, padding: 20, borderRadius: radius.md, backgroundColor: colors.gold, borderWidth: 1, borderColor: "#D5A637" }, promiseLine: { color: colors.navy, fontFamily: fonts.headingBold, fontSize: 25, lineHeight: 31, textAlign: "center" },
  connectionSymbol: { width: 66, height: 66, alignItems: "center", justifyContent: "center", marginBottom: 18, borderRadius: 33, backgroundColor: colors.white, ...shadows.glow },
  connectionHighlight: { width: "100%", maxWidth: 540, marginTop: 20, padding: 17, borderRadius: radius.md, backgroundColor: "rgba(255,255,255,0.82)" }, connectionHighlightText: { color: colors.navy, fontFamily: fonts.headingBold, fontSize: 21, lineHeight: 27, textAlign: "center" },
  challengeInstruction: { marginTop: 14, color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 17, lineHeight: 24 }, examplesLabel: { marginTop: 16, color: colors.muted, fontFamily: fonts.bodyBold, fontSize: 12, textTransform: "uppercase", letterSpacing: 0.7 },
  examplesGrid: { marginTop: 9, flexDirection: "row", flexWrap: "wrap", gap: 8 }, examplePill: { flexDirection: "row", alignItems: "center", paddingHorizontal: 11, paddingVertical: 8, borderRadius: radius.pill, backgroundColor: "rgba(255,255,255,0.78)" }, exampleNumber: { width: 21, height: 21, paddingTop: 2, borderRadius: 11, backgroundColor: colors.gold, color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 11, textAlign: "center" }, exampleText: { marginLeft: 6, color: colors.ink, fontFamily: fonts.bodySemiBold, fontSize: 14 }, reflection: { marginTop: 17 },
  familyPrayer: { marginTop: 16, padding: 16, borderRadius: radius.md, backgroundColor: "rgba(255,255,255,0.74)", borderLeftWidth: 4, borderLeftColor: colors.goldDeep }, familyPrayerLabel: { color: colors.muted, fontFamily: fonts.bodyBold, fontSize: 12 }, familyPrayerText: { marginTop: 6, color: colors.navy, fontFamily: fonts.heading, fontSize: 20, lineHeight: 27 },
  completedCard: { marginTop: 18, flexDirection: "row", alignItems: "center", padding: 15, borderRadius: radius.md, backgroundColor: colors.navy }, completedCopy: { flex: 1, marginLeft: 10 }, completedTitle: { color: colors.white, fontFamily: fonts.headingBold, fontSize: 17 }, completedText: { color: "rgba(255,255,255,0.7)", fontFamily: fonts.body, fontSize: 12 },
  footerSafeArea: { backgroundColor: colors.paper }, footer: { width: "100%", maxWidth: 720, alignSelf: "center", flexDirection: "row", gap: 10, paddingHorizontal: 14, paddingTop: 10, paddingBottom: 10, borderTopWidth: 1, borderTopColor: colors.line },
  previousButton: { minHeight: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 14, borderRadius: radius.md, backgroundColor: "#EBE6D9" }, previousText: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 14 },
  nextButton: { flex: 1, overflow: "hidden", borderRadius: radius.md, ...shadows.glow }, nextGradient: { minHeight: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingHorizontal: 13 }, nextText: { flexShrink: 1, color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 14 },
  disabled: { opacity: 0.35 }, pressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
});
