export const colors = {
  navy: "#101A3A",
  navySoft: "#1B2B55",
  gold: "#F4C95D",
  goldDeep: "#D8A93C",
  cream: "#FFF7E6",
  paper: "#FFFCF5",
  sky: "#8FD3E8",
  sage: "#A9C7A1",
  ink: "#17233F",
  muted: "#70798B",
  line: "#E5DCC9",
  white: "#FFFFFF",
  danger: "#A4473E",
} as const;

export const fonts = {
  body: "NunitoSans_400Regular",
  bodySemiBold: "NunitoSans_600SemiBold",
  bodyBold: "NunitoSans_700Bold",
  heading: "Baloo2_600SemiBold",
  headingBold: "Baloo2_700Bold",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 12,
  md: 18,
  lg: 26,
  pill: 999,
} as const;

export const shadows = {
  soft: {
    shadowColor: colors.navy,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 5,
  },
  glow: {
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;
