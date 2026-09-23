import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { STORY_COLORS, STORY_SHADOW } from "./storyTheme";

type Props = { day: number; message?: string; labels: { heading: string; greatJob: string; completed: string; tomorrow: string; calendar: string }; onTomorrow: () => void; onCalendar: () => void; hasTomorrow: boolean };

export function DayComplete({ day, message, labels, onTomorrow, onCalendar, hasTomorrow }: Props) {
  return (
    <View style={styles.content}>
      <LinearGradient colors={["#E0F0E7", "#F8F3E8"]} style={styles.card}>
        <View style={styles.badge}><Ionicons name="checkmark" size={38} color="#FFFFFF" /></View>
        <Text style={styles.eyebrow}>{labels.heading}</Text>
        <Text style={styles.title}>{labels.greatJob}</Text>
        <Text style={styles.completed}>{labels.completed}</Text>
        {message && <Text style={styles.message}>{message}</Text>}

        {hasTomorrow && (
          <Pressable onPress={onTomorrow} style={({ pressed }) => [styles.primary, pressed && styles.pressed]}>
            <Text style={styles.primaryText}>{labels.tomorrow}</Text><Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
          </Pressable>
        )}
        <Pressable onPress={onCalendar} style={({ pressed }) => [styles.secondary, pressed && styles.pressed]}>
          <Ionicons name="trail-sign-outline" size={18} color={STORY_COLORS.teal} /><Text style={styles.secondaryText}>{labels.calendar}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { width: "100%", maxWidth: 720, alignSelf: "center", flex: 1, justifyContent: "center", padding: 18 },
  card: { alignItems: "center", borderRadius: 30, paddingHorizontal: 24, paddingVertical: 40, ...STORY_SHADOW },
  badge: { width: 76, height: 76, borderRadius: 38, alignItems: "center", justifyContent: "center", backgroundColor: STORY_COLORS.teal, shadowColor: STORY_COLORS.teal, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 13, elevation: 5 },
  eyebrow: { marginTop: 22, color: STORY_COLORS.teal, fontFamily: "CrimsonPro_700Bold", fontSize: 12, letterSpacing: 1.7 },
  title: { marginTop: 11, color: STORY_COLORS.navy, fontFamily: "CrimsonPro_700Bold", fontSize: 36 },
  completed: { marginTop: 5, color: STORY_COLORS.ink, fontFamily: "CrimsonPro_600SemiBold", fontSize: 20 },
  message: { maxWidth: 450, marginTop: 13, color: STORY_COLORS.muted, textAlign: "center", fontFamily: "CrimsonPro_400Regular", fontSize: 16, lineHeight: 24 },
  primary: { width: "100%", maxWidth: 380, minHeight: 55, marginTop: 27, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 9, borderRadius: 17, backgroundColor: STORY_COLORS.teal },
  primaryText: { color: "#FFFFFF", fontFamily: "CrimsonPro_700Bold", fontSize: 17 },
  secondary: { minHeight: 52, marginTop: 8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingHorizontal: 20 },
  secondaryText: { color: STORY_COLORS.teal, fontFamily: "CrimsonPro_700Bold", fontSize: 16 },
  pressed: { opacity: 0.82, transform: [{ scale: 0.99 }] },
});
