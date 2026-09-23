import { Ionicons } from "@expo/vector-icons";
import { useEffect, useMemo, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from "react-native-svg";

import { ADVENT_DAYS } from "../../data/adventDays";
import { LanguageId } from "../../state/AdventContext";
import { colors, fonts, shadows } from "../../theme/tokens";

export type MilestoneState = "completed" | "current" | "locked";

type Props = {
  width: number;
  currentDay: number;
  completedDays: number[];
  language: LanguageId;
  labels: { day: (value: number) => string; current: string; completed: string; locked: string };
  onDayPress: (day: number, state: MilestoneState) => void;
};

const TOP = 92;
const STEP = 126;
const HEIGHT = TOP * 2 + STEP * 23;

function pointFor(index: number, width: number) {
  const lane = index % 4;
  const xRatios = [0.24, 0.7, 0.76, 0.3];
  return { x: width * xRatios[lane], y: TOP + index * STEP };
}

function buildPath(width: number, throughDay = 24) {
  const points = ADVENT_DAYS.slice(0, throughDay).map((_, index) => pointFor(index, width));
  if (!points.length) return "";
  return points.slice(1).reduce((path, point, index) => {
    const previous = points[index];
    const middleY = (previous.y + point.y) / 2;
    return `${path} C ${previous.x} ${middleY}, ${point.x} ${middleY}, ${point.x} ${point.y}`;
  }, `M ${points[0].x} ${points[0].y}`);
}

function Milestone({
  day,
  x,
  y,
  width,
  state,
  language,
  labels,
  onPress,
}: {
  day: (typeof ADVENT_DAYS)[number];
  x: number;
  y: number;
  width: number;
  state: MilestoneState;
  language: LanguageId;
  labels: Props["labels"];
  onPress: () => void;
}) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (state !== "current") return;
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.08, duration: 1150, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 1150, useNativeDriver: true }),
      ]),
    );
    animation.start();
    return () => animation.stop();
  }, [pulse, state]);

  const isLeft = x < width / 2;
  const cardWidth = Math.min(184, width * 0.46);
  const left = isLeft ? x + 42 : x - cardWidth - 42;
  const stateLabel = state === "current" ? labels.current : state === "completed" ? labels.completed : labels.locked;

  return (
    <View pointerEvents="box-none" style={[styles.milestoneRow, { top: y - 47 }]}> 
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${labels.day(day.id)}. ${day.title[language]}. ${stateLabel}`}
        style={({ pressed }) => [styles.touchArea, { left: x - 36 }, pressed && styles.pressed]}
      >
        <Animated.View
          style={[
            styles.marker,
            state === "completed" && styles.markerCompleted,
            state === "current" && styles.markerCurrent,
            state === "locked" && styles.markerLocked,
            state === "current" && { transform: [{ scale: pulse }] },
          ]}
        >
          {state === "locked" ? (
            <Ionicons name="lock-closed" size={17} color="rgba(23,35,63,0.45)" />
          ) : (
            <Text style={styles.symbol}>{day.symbol}</Text>
          )}
          <View style={[styles.numberBadge, state === "current" && styles.numberBadgeCurrent]}>
            <Text style={[styles.number, state === "current" && styles.numberCurrent]}>{day.id}</Text>
          </View>
        </Animated.View>
      </Pressable>

      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.labelCard,
          { left, width: cardWidth },
          state === "current" && styles.labelCardCurrent,
          state === "locked" && styles.labelCardLocked,
          pressed && styles.pressed,
        ]}
      >
        <Text style={[styles.state, state === "current" && styles.stateCurrent]}>{stateLabel}</Text>
        <Text numberOfLines={2} style={[styles.title, state === "locked" && styles.titleLocked]}>
          {day.title[language]}
        </Text>
      </Pressable>
    </View>
  );
}

export function PromiseTrail({ width, currentDay, completedDays, language, labels, onDayPress }: Props) {
  const fullPath = useMemo(() => buildPath(width), [width]);
  const completedThrough = Math.max(1, Math.min(currentDay, 24));
  const litPath = useMemo(() => buildPath(width, completedThrough), [completedThrough, width]);

  return (
    <View style={[styles.container, { width, height: HEIGHT }]}>
      <Svg width={width} height={HEIGHT} style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="trail" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#D6C59E" />
            <Stop offset="1" stopColor="#B6A27B" />
          </LinearGradient>
          <LinearGradient id="litTrail" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor={colors.gold} />
            <Stop offset="1" stopColor={colors.goldDeep} />
          </LinearGradient>
        </Defs>
        <Path d={fullPath} fill="none" stroke="rgba(72,65,56,0.18)" strokeWidth={18} strokeLinecap="round" />
        <Path d={fullPath} fill="none" stroke="url(#trail)" strokeWidth={10} strokeDasharray="3 12" strokeLinecap="round" />
        <Path d={litPath} fill="none" stroke="rgba(244,201,93,0.24)" strokeWidth={22} strokeLinecap="round" />
        <Path d={litPath} fill="none" stroke="url(#litTrail)" strokeWidth={7} strokeLinecap="round" />
        {Array.from({ length: 22 }, (_, index) => (
          <Circle key={index} cx={(index * 83) % width} cy={65 + index * 121} r={index % 3 === 0 ? 2.3 : 1.4} fill="rgba(255,255,255,0.72)" />
        ))}
      </Svg>

      <View style={[styles.hill, styles.hillOne]} />
      <View style={[styles.hill, styles.hillTwo]} />
      <View style={[styles.hill, styles.hillThree]} />

      {ADVENT_DAYS.map((day, index) => {
        const state: MilestoneState = completedDays.includes(day.id)
          ? "completed"
          : day.id === currentDay
            ? "current"
            : "locked";
        const point = pointFor(index, width);
        return (
          <Milestone
            key={day.id}
            day={day}
            x={point.x}
            y={point.y}
            width={width}
            state={state}
            language={language}
            labels={labels}
            onPress={() => onDayPress(day.id, state)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { overflow: "hidden", backgroundColor: "#ECF7EE" },
  hill: { position: "absolute", width: 270, height: 170, borderRadius: 160, backgroundColor: "rgba(169,199,161,0.34)" },
  hillOne: { top: 370, left: -120, transform: [{ rotate: "14deg" }] },
  hillTwo: { top: 1260, right: -145, backgroundColor: "rgba(143,211,232,0.24)" },
  hillThree: { top: 2310, left: -115, backgroundColor: "rgba(244,201,93,0.18)" },
  milestoneRow: { position: "absolute", left: 0, right: 0, height: 94 },
  touchArea: { position: "absolute", top: 7, width: 72, height: 72, alignItems: "center", justifyContent: "center", zIndex: 2 },
  marker: { width: 64, height: 64, borderRadius: 22, alignItems: "center", justifyContent: "center", borderWidth: 4, borderColor: colors.paper, backgroundColor: "#7BB9D0", transform: [{ rotate: "-3deg" }], ...shadows.soft },
  markerCompleted: { backgroundColor: "#78B88A", borderColor: "#FFF2B5" },
  markerCurrent: { width: 72, height: 72, borderRadius: 25, backgroundColor: "#FFD968", borderColor: colors.paper, ...shadows.glow },
  markerLocked: { backgroundColor: "#E8E5D7", borderColor: "rgba(255,255,255,0.92)", shadowOpacity: 0 },
  symbol: { fontSize: 27, transform: [{ rotate: "3deg" }] },
  numberBadge: { position: "absolute", right: -5, bottom: -5, minWidth: 24, height: 24, paddingHorizontal: 4, alignItems: "center", justifyContent: "center", borderRadius: 12, backgroundColor: colors.paper, borderWidth: 2, borderColor: colors.gold },
  numberBadgeCurrent: { backgroundColor: colors.navy, borderColor: colors.navy },
  number: { color: colors.navy, fontFamily: fonts.bodyBold, fontSize: 11 },
  numberCurrent: { color: colors.gold },
  labelCard: { position: "absolute", top: 5, minHeight: 72, justifyContent: "center", paddingHorizontal: 14, paddingVertical: 9, borderRadius: 21, backgroundColor: "rgba(255,253,246,0.96)", borderWidth: 2, borderColor: "rgba(169,199,161,0.58)" },
  labelCardCurrent: { backgroundColor: "#FFF8D8", borderColor: colors.gold, ...shadows.soft },
  labelCardLocked: { opacity: 0.68, backgroundColor: "rgba(255,252,245,0.9)", borderColor: "rgba(143,211,232,0.46)" },
  state: { marginBottom: 2, color: "#67906F", fontFamily: fonts.bodyBold, fontSize: 10 },
  stateCurrent: { color: "#A06E00" },
  title: { color: colors.ink, fontFamily: fonts.headingBold, fontSize: 15, lineHeight: 18 },
  titleLocked: { color: colors.muted },
  pressed: { opacity: 0.75, transform: [{ scale: 0.98 }] },
});
