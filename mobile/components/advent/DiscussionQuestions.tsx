import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { StoryControls } from "./StoryControls";
import { STORY_COLORS, STORY_SHADOW } from "./storyTheme";

type Props = { questions: readonly string[]; familyChallenge: readonly string[]; labels: { heading: string; intro: string; familyChallenge: string; previous: string; continue: string }; onNext: () => void; onPrevious: () => void };

export function DiscussionQuestions({ questions, familyChallenge, labels, onNext, onPrevious }: Props) {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.icon}><Ionicons name="chatbubbles-outline" size={26} color={STORY_COLORS.coral} /></View>
        <Text style={styles.heading}>{labels.heading}</Text>
        <Text style={styles.intro}>{labels.intro}</Text>
        <View style={styles.list}>
          {questions.map((question, index) => (
            <View key={`${question}-${index}`} style={styles.questionCard}>
              <View style={styles.number}><Text style={styles.numberText}>{index + 1}</Text></View>
              <Text style={styles.question}>{question}</Text>
            </View>
          ))}
        </View>
        {!!familyChallenge.length && (
          <View style={styles.challenge}>
            <View style={styles.challengeHeading}>
              <Ionicons name="people-outline" size={20} color={STORY_COLORS.navy} />
              <Text style={styles.challengeTitle}>{labels.familyChallenge}</Text>
            </View>
            {familyChallenge.map((paragraph, index) => <Text key={index} style={styles.challengeText}>{paragraph}</Text>)}
          </View>
        )}
      </View>
      <StoryControls previousLabel={labels.previous} nextLabel={labels.continue} onPrevious={onPrevious} onNext={onNext} />
    </>
  );
}

const styles = StyleSheet.create({
  content: { width: "100%", maxWidth: 720, alignSelf: "center", paddingHorizontal: 18, paddingTop: 26 },
  icon: { width: 50, height: 50, borderRadius: 25, alignItems: "center", justifyContent: "center", backgroundColor: STORY_COLORS.paleCoral },
  heading: { marginTop: 15, color: STORY_COLORS.navy, fontFamily: "CrimsonPro_700Bold", fontSize: 32 },
  intro: { marginTop: 5, color: STORY_COLORS.muted, fontFamily: "Lora_400Regular_Italic", fontSize: 13 },
  list: { gap: 13, marginTop: 20 },
  questionCard: { flexDirection: "row", alignItems: "flex-start", borderRadius: 21, borderWidth: 1, borderColor: "#EBCFC7", backgroundColor: STORY_COLORS.card, padding: 18, ...STORY_SHADOW },
  number: { width: 34, height: 34, borderRadius: 17, alignItems: "center", justifyContent: "center", backgroundColor: STORY_COLORS.coral },
  numberText: { color: "#FFFFFF", fontFamily: "CrimsonPro_700Bold", fontSize: 15 },
  question: { flex: 1, marginLeft: 13, color: STORY_COLORS.ink, fontFamily: "CrimsonPro_600SemiBold", fontSize: 18, lineHeight: 26 },
  challenge: { marginTop: 17, borderRadius: 21, backgroundColor: "#EDF1E7", padding: 19 },
  challengeHeading: { flexDirection: "row", alignItems: "center", gap: 8 },
  challengeTitle: { color: STORY_COLORS.navy, fontFamily: "CrimsonPro_700Bold", fontSize: 16 },
  challengeText: { marginTop: 11, color: STORY_COLORS.ink, fontFamily: "CrimsonPro_400Regular", fontSize: 16, lineHeight: 24 },
});
