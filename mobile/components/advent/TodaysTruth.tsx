import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { StoryControls } from "./StoryControls";
import { STORY_COLORS, STORY_SHADOW } from "./storyTheme";

type Props = { truth: string; labels: { heading: string; remember: string; previous: string; continue: string }; onNext: () => void; onPrevious: () => void };

export function TodaysTruth({ truth, labels, onNext, onPrevious }: Props) {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.icon}><Ionicons name="bulb-outline" size={30} color={STORY_COLORS.olive} /></View>
          <Text style={styles.eyebrow}>{labels.heading}</Text>
          <Text style={styles.truth}>{truth}</Text>
          <View style={styles.divider} />
          <Text style={styles.remember}>{labels.remember}</Text>
        </View>
      </View>
      <StoryControls previousLabel={labels.previous} nextLabel={labels.continue} onPrevious={onPrevious} onNext={onNext} />
    </>
  );
}

const styles = StyleSheet.create({
  content: { width: "100%", maxWidth: 720, alignSelf: "center", flex: 1, justifyContent: "center", paddingHorizontal: 18, paddingTop: 28 },
  card: { alignItems: "center", borderRadius: 28, borderWidth: 1, borderColor: "#C9D8C3", backgroundColor: STORY_COLORS.sage, paddingHorizontal: 25, paddingVertical: 42, ...STORY_SHADOW },
  icon: { width: 64, height: 64, borderRadius: 32, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(255,255,255,0.68)" },
  eyebrow: { marginTop: 22, color: STORY_COLORS.olive, fontFamily: "CrimsonPro_700Bold", fontSize: 12, letterSpacing: 1.8 },
  truth: { marginTop: 15, maxWidth: 530, textAlign: "center", color: STORY_COLORS.navy, fontFamily: "CrimsonPro_700Bold", fontSize: 30, lineHeight: 38 },
  divider: { width: 44, height: 2, marginTop: 25, backgroundColor: "rgba(115,128,90,0.35)" },
  remember: { marginTop: 14, color: STORY_COLORS.muted, fontFamily: "Lora_400Regular_Italic", fontSize: 12 },
});
