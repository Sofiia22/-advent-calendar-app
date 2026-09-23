import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { StoryControls } from "./StoryControls";
import { STORY_COLORS, STORY_SHADOW } from "./storyTheme";

type Props = { prayer: readonly string[]; labels: { heading: string; intro: string; previous: string; complete: string }; onNext: () => void; onPrevious: () => void };

export function StoryPrayer({ prayer, labels, onNext, onPrevious }: Props) {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.glow}><Ionicons name="heart-outline" size={31} color={STORY_COLORS.gold} /></View>
          <Text style={styles.eyebrow}>{labels.heading}</Text>
          <Text style={styles.intro}>{labels.intro}</Text>
          <View style={styles.divider} />
          {prayer.map((paragraph, index) => <Text key={index} style={styles.paragraph}>{paragraph}</Text>)}
        </View>
      </View>
      <StoryControls quiet previousLabel={labels.previous} nextLabel={labels.complete} onPrevious={onPrevious} onNext={onNext} />
    </>
  );
}

const styles = StyleSheet.create({
  content: { width: "100%", maxWidth: 720, alignSelf: "center", paddingHorizontal: 18, paddingTop: 26 },
  card: { alignItems: "center", borderRadius: 28, borderWidth: 1, borderColor: STORY_COLORS.border, backgroundColor: "#FFF9ED", paddingHorizontal: 24, paddingVertical: 32, ...STORY_SHADOW },
  glow: { width: 62, height: 62, borderRadius: 31, alignItems: "center", justifyContent: "center", backgroundColor: "#FFF0C8" },
  eyebrow: { marginTop: 17, color: "#A37A28", fontFamily: "CrimsonPro_700Bold", fontSize: 12, letterSpacing: 1.8 },
  intro: { marginTop: 7, color: STORY_COLORS.muted, fontFamily: "Lora_400Regular_Italic", fontSize: 13 },
  divider: { width: 42, height: 2, marginVertical: 20, backgroundColor: "rgba(215,171,72,0.35)" },
  paragraph: { width: "100%", marginBottom: 14, color: STORY_COLORS.ink, textAlign: "center", fontFamily: "CrimsonPro_400Regular", fontSize: 18, lineHeight: 28 },
});
