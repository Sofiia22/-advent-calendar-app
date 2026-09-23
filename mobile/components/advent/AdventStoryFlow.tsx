import {
  CrimsonPro_400Regular,
  CrimsonPro_600SemiBold,
  CrimsonPro_700Bold,
} from "@expo-google-fonts/crimson-pro";
import { Lora_400Regular_Italic } from "@expo-google-fonts/lora";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AdventStoryImages } from "../../data/adventStories";
import { AdventStory } from "../../data/storyTypes";
import { getTranslations } from "../../i18n/translations";
import { useAdvent } from "../../state/AdventContext";
import { AdventStoryCover } from "./AdventStoryCover";
import { BigStoryConnection } from "./BigStoryConnection";
import { DayComplete } from "./DayComplete";
import { DiscussionQuestions } from "./DiscussionQuestions";
import { StoryPrayer } from "./StoryPrayer";
import { StoryProgress, StoryStage } from "./StoryProgress";
import { StoryReader } from "./StoryReader";
import { STORY_COLORS } from "./storyTheme";
import { TodaysTruth } from "./TodaysTruth";

type Props = { story: AdventStory; images: AdventStoryImages };

const STAGE_ORDER: StoryStage[] = ["cover", "story", "truth", "bigStory", "discussion", "prayer", "complete"];

export function AdventStoryFlow({ story, images }: Props) {
  const { completeDay, completedDays, isHydrated, selectedLanguage } = useAdvent();
  const t = getTranslations(selectedLanguage);
  const [stage, setStage] = useState<StoryStage>("cover");
  const [scene, setScene] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const [fontsLoaded] = useFonts({ CrimsonPro_400Regular, CrimsonPro_600SemiBold, CrimsonPro_700Bold, Lora_400Regular_Italic });

  if (!fontsLoaded || !isHydrated) return <View style={styles.loading} />;

  const moveTo = (nextStage: StoryStage) => {
    setStage(nextStage);
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ y: 0, animated: false }));
  };

  const goBack = () => {
    if (stage === "cover") return router.back();
    if (stage === "story" && scene > 0) {
      setScene((value) => value - 1);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
      return;
    }
    const previous = STAGE_ORDER[STAGE_ORDER.indexOf(stage) - 1];
    if (stage === "truth") setScene(story.sections.length - 1);
    moveTo(previous);
  };

  const nextStoryScene = () => {
    if (scene < story.sections.length - 1) {
      setScene((value) => value + 1);
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    } else moveTo("truth");
  };

  const complete = async () => {
    await completeDay(story.day);
    moveTo("complete");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar style="light" />
      <View style={styles.navigation}>
        <Pressable onPress={goBack} accessibilityRole="button" style={styles.backButton}>
          <Ionicons name="chevron-back" size={20} color={STORY_COLORS.gold} />
          <Text style={styles.backText}>{stage === "cover" ? t.december : t.previous}</Text>
        </Pressable>
        <View style={styles.navTitleWrap}>
          <Text numberOfLines={1} style={styles.navTitle}>{story.title}</Text>
          <Text style={styles.navDay}>{t.dayLabel(story.day)}</Text>
        </View>
        <View style={styles.navSpacer} />
      </View>

      <StoryProgress stage={stage} labels={t.storyProgress} day={story.day} completedDays={completedDays} />
      <ScrollView ref={scrollRef} style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {stage === "cover" && <AdventStoryCover story={story} hero={images.hero} labels={{ day: t.dayOfTwentyFour(story.day), todaysQuestion: t.todaysQuestion, begin: t.beginStory }} onBegin={() => moveTo("story")} />}
        {stage === "story" && <StoryReader story={story} scene={scene} images={images} labels={{ heading: t.theBibleStory, previous: t.previous, next: t.next, finish: t.finishStory }} onPrevious={goBack} onNext={nextStoryScene} />}
        {stage === "truth" && <TodaysTruth truth={story.todaysTruth} labels={{ heading: t.todaysTruth, remember: t.holdOntoThis, previous: t.previous, continue: t.continue }} onPrevious={goBack} onNext={() => moveTo("bigStory")} />}
        {stage === "bigStory" && <BigStoryConnection bigStory={story.bigStory} labels={{ heading: t.theBigStory, previous: t.previous, continue: t.continue }} onPrevious={goBack} onNext={() => moveTo("discussion")} />}
        {stage === "discussion" && <DiscussionQuestions questions={story.discussionQuestions} familyChallenge={story.familyChallenge} labels={{ heading: t.talkAboutIt, intro: t.talkIntro, familyChallenge: t.familyChallenge, previous: t.previous, continue: t.continue }} onPrevious={goBack} onNext={() => moveTo("prayer")} />}
        {stage === "prayer" && <StoryPrayer prayer={story.prayer} labels={{ heading: t.letsPray, intro: t.prayerIntro, previous: t.previous, complete: t.finishDay }} onPrevious={goBack} onNext={() => void complete()} />}
        {stage === "complete" && <DayComplete day={story.day} message={story.completedMessage} labels={{ heading: t.doneForToday, greatJob: t.greatJob, completed: t.completedDay(story.day), tomorrow: t.seeTomorrow, calendar: t.backToCalendar }} onTomorrow={() => router.replace(`/advent/${story.day + 1}`)} onCalendar={() => router.replace("/home")} hasTomorrow={story.day < 24} />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: STORY_COLORS.night },
  loading: { flex: 1, backgroundColor: STORY_COLORS.cream },
  navigation: { height: 56, flexDirection: "row", alignItems: "center", paddingHorizontal: 14, backgroundColor: STORY_COLORS.night },
  backButton: { width: 92, minHeight: 44, flexDirection: "row", alignItems: "center" },
  backText: { color: STORY_COLORS.gold, fontFamily: "CrimsonPro_600SemiBold", fontSize: 14 },
  navTitleWrap: { flex: 1, alignItems: "center" },
  navTitle: { maxWidth: "100%", color: "#FFFFFF", fontFamily: "CrimsonPro_600SemiBold", fontSize: 15 },
  navDay: { marginTop: 1, color: "rgba(255,255,255,0.48)", fontFamily: "CrimsonPro_400Regular", fontSize: 10 },
  navSpacer: { width: 92 },
  scroll: { flex: 1, backgroundColor: STORY_COLORS.cream },
  scrollContent: { flexGrow: 1 },
});
