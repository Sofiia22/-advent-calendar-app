import {
  Baloo2_600SemiBold,
  Baloo2_700Bold,
} from "@expo-google-fonts/baloo-2";
import {
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { useFonts } from "expo-font";

export function useAppFonts() {
  return useFonts({
    Baloo2_600SemiBold,
    Baloo2_700Bold,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });
}
