import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { AdventStory } from "../../data/storyTypes";
import { StoryControls } from "./StoryControls";
import { STORY_COLORS, STORY_SHADOW } from "./storyTheme";

type Props = { bigStory: AdventStory["bigStory"]; labels: { heading: string; previous: string; continue: string }; onNext: () => void; onPrevious: () => void };

export function BigStoryTimeline({ items }: { items: NonNullable<AdventStory["bigStory"]["timeline"]> }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.timeline}>
      {items.map((item, index) => (
        <View key={`${item.label}-${index}`} style={styles.timelineStep}>
          <View style={[styles.timelineNode, index === items.length - 1 && styles.timelineNodeLast]}>
            {index === items.length - 1 ? <Ionicons name="star" size={17} color={STORY_COLORS.night} /> : <Text style={styles.timelineInitial}>{item.label.charAt(0)}</Text>}
          </View>
          <Text style={[styles.timelineLabel, index === items.length - 1 && styles.timelineLabelLast]}>{item.label}</Text>
          {index < items.length - 1 && <Ionicons name="arrow-forward" size={17} color="rgba(255,255,255,0.44)" style={styles.arrow} />}
        </View>
      ))}
    </ScrollView>
  );
}

export function BigStoryConnection({ bigStory, labels, onNext, onPrevious }: Props) {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.labelRow}><Ionicons name="sparkles" size={18} color="#EAC85D" /><Text style={styles.eyebrow}>{labels.heading}</Text></View>
          <Text style={styles.title}>{bigStory.title}</Text>
          {bigStory.text.map((paragraph, index) => <Text key={index} style={styles.paragraph}>{paragraph}</Text>)}
          {!!bigStory.timeline?.length && <BigStoryTimeline items={bigStory.timeline} />}
          <View style={styles.references}>{bigStory.bibleReferences.map((reference) => <Text key={reference} style={styles.reference}>{reference}</Text>)}</View>
        </View>
      </View>
      <StoryControls previousLabel={labels.previous} nextLabel={labels.continue} onPrevious={onPrevious} onNext={onNext} />
    </>
  );
}

const styles = StyleSheet.create({
  content: { width: "100%", maxWidth: 720, alignSelf: "center", paddingHorizontal: 18, paddingTop: 24 },
  card: { overflow: "hidden", borderRadius: 28, backgroundColor: STORY_COLORS.purple, paddingTop: 25, paddingBottom: 25, ...STORY_SHADOW },
  labelRow: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 23 },
  eyebrow: { color: "#F3D77A", fontFamily: "CrimsonPro_700Bold", fontSize: 12, letterSpacing: 1.7 },
  title: { marginTop: 16, paddingHorizontal: 23, color: "#FFFFFF", fontFamily: "CrimsonPro_700Bold", fontSize: 28, lineHeight: 34 },
  paragraph: { marginTop: 15, paddingHorizontal: 23, color: "rgba(255,255,255,0.82)", fontFamily: "CrimsonPro_400Regular", fontSize: 17, lineHeight: 27 },
  timeline: { alignItems: "flex-start", paddingHorizontal: 23, paddingTop: 27, paddingBottom: 8 },
  timelineStep: { width: 103, alignItems: "center" },
  timelineNode: { width: 46, height: 46, borderRadius: 23, alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: "rgba(255,255,255,0.42)", backgroundColor: "rgba(255,255,255,0.12)" },
  timelineNodeLast: { borderColor: "#F2D164", backgroundColor: "#F2D164" },
  timelineInitial: { color: "#FFFFFF", fontFamily: "CrimsonPro_700Bold", fontSize: 19 },
  timelineLabel: { marginTop: 7, color: "rgba(255,255,255,0.75)", textAlign: "center", fontFamily: "CrimsonPro_600SemiBold", fontSize: 11 },
  timelineLabelLast: { color: "#F3D77A" },
  arrow: { position: "absolute", top: 15, right: -9 },
  references: { flexDirection: "row", flexWrap: "wrap", gap: 7, marginTop: 21, paddingHorizontal: 23 },
  reference: { color: "#F3D77A", fontFamily: "CrimsonPro_600SemiBold", fontSize: 11, letterSpacing: 0.5 },
});
