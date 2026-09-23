import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { STORY_COLORS } from "./storyTheme";

export type StoryStage =
  | "cover"
  | "story"
  | "truth"
  | "bigStory"
  | "discussion"
  | "prayer"
  | "complete";

type StoryProgressProps = {
  stage: StoryStage;
  labels: readonly string[];
  day: number;
  completedDays: readonly number[];
};

const STAGES: StoryStage[] = [
  "cover",
  "story",
  "truth",
  "bigStory",
  "discussion",
  "prayer",
  "complete",
];

export function StoryProgress({
  stage,
  labels,
  day,
  completedDays,
}: StoryProgressProps) {
  const activeIndex = STAGES.indexOf(stage);

  return (
    <View style={styles.wrapper}>
      <View style={styles.stageRow}>
        {labels.map((label, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;
          return (
            <View key={label} style={styles.stageItem}>
              <View
                style={[
                  styles.stageDot,
                  isPast && styles.stageDotPast,
                  isActive && styles.stageDotActive,
                ]}
              >
                {isPast ? (
                  <Ionicons name="checkmark" size={11} color="#FFFFFF" />
                ) : (
                  <Text style={[styles.stageNumber, isActive && styles.stageNumberActive]}>
                    {index + 1}
                  </Text>
                )}
              </View>
              <Text numberOfLines={1} style={[styles.stageLabel, isActive && styles.stageLabelActive]}>
                {label}
              </Text>
            </View>
          );
        })}
      </View>

      {stage === "cover" && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.days}
        >
          {Array.from({ length: 24 }, (_, index) => index + 1).map((item) => {
            const isCurrent = item === day;
            const isCompleted = completedDays.includes(item);
            return (
              <View
                key={item}
                style={[
                  styles.day,
                  isCompleted && styles.dayCompleted,
                  isCurrent && styles.dayCurrent,
                ]}
              >
                {isCompleted ? (
                  <Ionicons name="checkmark" size={12} color="#FFFFFF" />
                ) : (
                  <Text style={[styles.dayText, isCurrent && styles.dayTextCurrent]}>{item}</Text>
                )}
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: STORY_COLORS.card, borderBottomWidth: 1, borderBottomColor: STORY_COLORS.border },
  stageRow: { flexDirection: "row", paddingHorizontal: 10, paddingTop: 10, paddingBottom: 8 },
  stageItem: { flex: 1, alignItems: "center", minWidth: 0 },
  stageDot: { width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E2D7" },
  stageDotPast: { backgroundColor: STORY_COLORS.olive },
  stageDotActive: { backgroundColor: STORY_COLORS.gold, transform: [{ scale: 1.12 }] },
  stageNumber: { color: STORY_COLORS.muted, fontFamily: "CrimsonPro_600SemiBold", fontSize: 11 },
  stageNumberActive: { color: STORY_COLORS.night },
  stageLabel: { marginTop: 4, color: STORY_COLORS.muted, fontFamily: "CrimsonPro_600SemiBold", fontSize: 8 },
  stageLabelActive: { color: STORY_COLORS.navy },
  days: { gap: 7, paddingHorizontal: 16, paddingBottom: 10 },
  day: { width: 26, height: 26, borderRadius: 13, alignItems: "center", justifyContent: "center", backgroundColor: "#EFE9DE" },
  dayCompleted: { backgroundColor: STORY_COLORS.olive },
  dayCurrent: { borderWidth: 2, borderColor: STORY_COLORS.gold, backgroundColor: STORY_COLORS.paleGold },
  dayText: { color: STORY_COLORS.muted, fontFamily: "CrimsonPro_600SemiBold", fontSize: 11 },
  dayTextCurrent: { color: STORY_COLORS.night },
});
