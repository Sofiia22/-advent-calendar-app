export const STORY_COLORS = {
  night: "#071225",
  navy: "#112B4A",
  blue: "#547DA5",
  cream: "#F7F1E7",
  card: "#FFFDF8",
  gold: "#D7AB48",
  paleGold: "#F8E9B7",
  olive: "#73805A",
  sage: "#DCE8D8",
  purple: "#665780",
  palePurple: "#EEE8F4",
  coral: "#C87561",
  paleCoral: "#F7E4DC",
  teal: "#397A72",
  ink: "#24364A",
  muted: "#737675",
  border: "#E8DDC8",
  white: "#FFFFFF",
};

export const STORY_SHADOW = {
  shadowColor: STORY_COLORS.night,
  shadowOffset: { width: 0, height: 7 },
  shadowOpacity: 0.1,
  shadowRadius: 16,
  elevation: 4,
} as const;
