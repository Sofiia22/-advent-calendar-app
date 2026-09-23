import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

import { AdventStory } from "../../data/storyTypes";
import { StoryControls } from "./StoryControls";
import { STORY_COLORS, STORY_SHADOW } from "./storyTheme";

type Props = {
  story: AdventStory;
  hero: ImageSourcePropType;
  labels: { day: string; todaysQuestion: string; begin: string };
  onBegin: () => void;
};

export function TodaysQuestionCard({ label, question }: { label: string; question: string }) {
  return (
    <View style={styles.questionCard}>
      <View style={styles.questionIcon}>
        <Ionicons name="sparkles-outline" size={19} color={STORY_COLORS.night} />
      </View>
      <View style={styles.questionCopy}>
        <Text style={styles.eyebrow}>{label}</Text>
        <Text style={styles.question}>{question}</Text>
      </View>
    </View>
  );
}

export function AdventStoryCover({ story, hero, labels, onBegin }: Props) {
  return (
    <>
      <View style={styles.content}>
        <ImageBackground source={hero} style={styles.hero} imageStyle={styles.heroImage}>
          <LinearGradient
            colors={["rgba(7,18,37,0.10)", "rgba(7,18,37,0.18)", "rgba(7,18,37,0.92)"]}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.badge}><Text style={styles.badgeText}>{labels.day}</Text></View>
          <View>
            <Text style={styles.theme}>{story.theme}</Text>
            <Text style={styles.title}>{story.title}</Text>
            <Text style={styles.reference}>{story.bibleReference}</Text>
          </View>
        </ImageBackground>

        <TodaysQuestionCard label={labels.todaysQuestion} question={story.todaysQuestion} />
      </View>
      <StoryControls nextLabel={labels.begin} onNext={onBegin} />
    </>
  );
}

const styles = StyleSheet.create({
  content: { width: "100%", maxWidth: 720, alignSelf: "center", paddingHorizontal: 18, paddingTop: 18 },
  hero: { height: 390, justifyContent: "space-between", overflow: "hidden", borderRadius: 28, padding: 19, ...STORY_SHADOW },
  heroImage: { resizeMode: "cover" },
  badge: { alignSelf: "flex-start", borderRadius: 999, borderWidth: 1, borderColor: "rgba(255,255,255,0.48)", backgroundColor: "rgba(7,18,37,0.62)", paddingHorizontal: 13, paddingVertical: 7 },
  badgeText: { color: STORY_COLORS.paleGold, fontFamily: "CrimsonPro_700Bold", fontSize: 11, letterSpacing: 1.5 },
  theme: { color: STORY_COLORS.paleGold, fontFamily: "CrimsonPro_600SemiBold", fontSize: 12, letterSpacing: 1.2, textTransform: "uppercase" },
  title: { marginTop: 8, maxWidth: 500, color: "#FFFFFF", fontFamily: "CrimsonPro_700Bold", fontSize: 38, lineHeight: 41 },
  reference: { marginTop: 9, color: "rgba(255,255,255,0.82)", fontFamily: "Lora_400Regular_Italic", fontSize: 14 },
  questionCard: { marginTop: 16, flexDirection: "row", alignItems: "flex-start", borderRadius: 23, borderWidth: 1, borderColor: "#ECD99B", backgroundColor: "#FFF8DC", padding: 19, ...STORY_SHADOW },
  questionIcon: { width: 42, height: 42, borderRadius: 21, alignItems: "center", justifyContent: "center", backgroundColor: "#F1CF69" },
  questionCopy: { flex: 1, marginLeft: 14 },
  eyebrow: { color: "#96721B", fontFamily: "CrimsonPro_700Bold", fontSize: 11, letterSpacing: 1.6 },
  question: { marginTop: 7, color: STORY_COLORS.navy, fontFamily: "CrimsonPro_600SemiBold", fontSize: 21, lineHeight: 27 },
});
