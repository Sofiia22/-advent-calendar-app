import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getTranslations } from "../../i18n/translations";
import { useAdvent } from "../../state/AdventContext";
import { colors, fonts } from "../../theme/tokens";

const ITEMS = [
  { path: "/home", icon: "trail-sign-outline" as const, key: "journey" as const },
  { path: "/church", icon: "home-outline" as const, key: "church" as const },
  { path: "/settings", icon: "settings-outline" as const, key: "settings" as const },
];

export function BottomNavigation() {
  const pathname = usePathname();
  const { selectedLanguage } = useAdvent();
  const t = getTranslations(selectedLanguage);

  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.nav}>
        {ITEMS.map((item) => {
          const selected = pathname === item.path;
          return (
            <Pressable
              key={item.path}
              onPress={() => router.replace(item.path)}
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              accessibilityLabel={t[item.key]}
              style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            >
              <View style={[styles.iconWrap, selected && styles.iconSelected]}>
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={selected ? colors.navy : colors.muted}
                />
              </View>
              <Text style={[styles.label, selected && styles.labelSelected]}>{t[item.key]}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: colors.paper },
  nav: {
    height: 68,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.paper,
  },
  item: { flex: 1, alignItems: "center", justifyContent: "center", gap: 2 },
  pressed: { opacity: 0.65 },
  iconWrap: { width: 38, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 },
  iconSelected: { backgroundColor: colors.gold },
  label: { color: colors.muted, fontFamily: fonts.bodySemiBold, fontSize: 11 },
  labelSelected: { color: colors.navy, fontFamily: fonts.bodyBold },
});
