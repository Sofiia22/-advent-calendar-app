import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { STORY_COLORS } from "./storyTheme";

type StoryControlsProps = {
  nextLabel: string;
  previousLabel?: string;
  onNext: () => void;
  onPrevious?: () => void;
  quiet?: boolean;
};

export function StoryControls({ nextLabel, previousLabel, onNext, onPrevious, quiet }: StoryControlsProps) {
  return (
    <View style={styles.row}>
      {onPrevious ? (
        <Pressable onPress={onPrevious} style={({ pressed }) => [styles.previous, pressed && styles.pressed]}>
          <Ionicons name="arrow-back" size={18} color={STORY_COLORS.navy} />
          <Text style={styles.previousText}>{previousLabel}</Text>
        </Pressable>
      ) : (
        <View style={styles.spacer} />
      )}

      <Pressable onPress={onNext} style={({ pressed }) => [styles.next, pressed && styles.pressed]}>
        <LinearGradient
          colors={quiet ? [STORY_COLORS.teal, "#285F59"] : ["#F4CE62", STORY_COLORS.gold]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.nextGradient}
        >
          <Text style={[styles.nextText, quiet && styles.nextTextLight]}>{nextLabel}</Text>
          <Ionicons name="arrow-forward" size={18} color={quiet ? "#FFFFFF" : STORY_COLORS.night} />
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { width: "100%", maxWidth: 720, alignSelf: "center", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10, paddingHorizontal: 18, paddingTop: 18, paddingBottom: 28 },
  previous: { minHeight: 52, flexDirection: "row", alignItems: "center", gap: 7, paddingHorizontal: 8 },
  previousText: { color: STORY_COLORS.navy, fontFamily: "CrimsonPro_600SemiBold", fontSize: 16 },
  spacer: { width: 1 },
  next: { overflow: "hidden", borderRadius: 17, flexShrink: 1 },
  nextGradient: { minHeight: 54, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 9, paddingHorizontal: 23 },
  nextText: { color: STORY_COLORS.night, fontFamily: "CrimsonPro_700Bold", fontSize: 17 },
  nextTextLight: { color: "#FFFFFF" },
  pressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
});
