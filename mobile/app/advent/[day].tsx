import { Redirect, useLocalSearchParams } from "expo-router";

import { AdventStoryFlow } from "../../components/advent/AdventStoryFlow";
import { DayFourScreen } from "../../components/advent/DayFourScreen";
import { DayFiveScreen } from "../../components/advent/DayFiveScreen";
import { DaySixScreen } from "../../components/advent/DaySixScreen";
import { DaySevenScreen } from "../../components/advent/DaySevenScreen";
import { DayEightScreen } from "../../components/advent/DayEightScreen";
import { DayNineScreen } from "../../components/advent/DayNineScreen";
import { DayTenScreen } from "../../components/advent/DayTenScreen";
import { DayElevenScreen } from "../../components/advent/DayElevenScreen";
import { DayTwelveScreen } from "../../components/advent/DayTwelveScreen";
import { DayThirteenScreen } from "../../components/advent/DayThirteenScreen";
import { DayFourteenScreen } from "../../components/advent/DayFourteenScreen";
import { DayFifteenScreen } from "../../components/advent/DayFifteenScreen";
import { DaySixteenScreen } from "../../components/advent/DaySixteenScreen";
import { DaySeventeenScreen } from "../../components/advent/DaySeventeenScreen";
import { DayEighteenScreen } from "../../components/advent/DayEighteenScreen";
import { DayNineteenScreen } from "../../components/advent/DayNineteenScreen";
import { DayTwentyScreen } from "../../components/advent/DayTwentyScreen";
import { DayTwentyOneScreen } from "../../components/advent/DayTwentyOneScreen";
import { DayTwentyTwoScreen } from "../../components/advent/DayTwentyTwoScreen";
import { DayTwentyThreeScreen } from "../../components/advent/DayTwentyThreeScreen";
import { DayTwentyFourScreen } from "../../components/advent/DayTwentyFourScreen";
import { DayOneScreen } from "../../components/advent/DayOneScreen";
import { DayThreeScreen } from "../../components/advent/DayThreeScreen";
import { DayTwoScreen } from "../../components/advent/DayTwoScreen";
import { PlaceholderDayScreen } from "../../components/advent/PlaceholderDayScreen";
import { getAdventDay } from "../../data/adventDays";
import { getAdventStory } from "../../data/adventStories";
import { useAdvent } from "../../state/AdventContext";

export function generateStaticParams() { return Array.from({length:24}, (_,i)=>({day:String(i+1)})); }

export default function AdventDayScreen() {
  const { day } = useLocalSearchParams<{ day: string }>();
  const { canOpenDay, selectedLanguage, isHydrated } = useAdvent();
  const dayNumber = Number(day);
  const entry = getAdventStory(dayNumber, selectedLanguage);
  const dayMeta = getAdventDay(dayNumber);
  const isAvailable = canOpenDay(dayNumber);

  if (!isHydrated) return null;

  if (!Number.isInteger(dayNumber) || !dayMeta || !isAvailable) {
    return <Redirect href="/home" />;
  }

  if (dayNumber === 1) {
    return <DayOneScreen />;
  }

  if (dayNumber === 2) {
    return <DayTwoScreen />;
  }

  if (dayNumber === 3) {
    return <DayThreeScreen />;
  }

  if (dayNumber === 4) {
    return <DayFourScreen />;
  }

  if (dayNumber === 5) {
    return <DayFiveScreen />;
  }

  if (dayNumber === 6) {
    return <DaySixScreen />;
  }

  if (dayNumber === 7) {
    return <DaySevenScreen />;
  }

  if (dayNumber === 8) {
    return <DayEightScreen />;
  }

  if (dayNumber === 9) {
    return <DayNineScreen />;
  }

  if (dayNumber === 10) {
    return <DayTenScreen />;
  }

  if (dayNumber === 11) {
    return <DayElevenScreen />;
  }

  if (dayNumber === 12) {
    return <DayTwelveScreen />;
  }

  if (dayNumber === 13) {
    return <DayThirteenScreen />;
  }

  if (dayNumber === 14) {
    return <DayFourteenScreen />;
  }
  if (dayNumber === 15) {
    return <DayFifteenScreen />;
  }
  if (dayNumber === 16) {
    return <DaySixteenScreen />;
  }
  if (dayNumber === 17) {
    return <DaySeventeenScreen />;
  }
  if (dayNumber === 18) {
    return <DayEighteenScreen />;
  }
  if (dayNumber === 19) {
    return <DayNineteenScreen />;
  }
  if (dayNumber === 20) {
    return <DayTwentyScreen />;
  }
  if (dayNumber === 21) {
    return <DayTwentyOneScreen />;
  }
  if (dayNumber === 22) {
    return <DayTwentyTwoScreen />;
  }
  if (dayNumber === 23) {
    return <DayTwentyThreeScreen />;
  }
  if (dayNumber === 24) {
    return <DayTwentyFourScreen />;
  }

  return entry
    ? <AdventStoryFlow story={entry.story} images={entry.images} />
    : <PlaceholderDayScreen day={dayMeta} />;
}
