import { Redirect, useLocalSearchParams } from "expo-router";

import { AdventStoryFlow } from "../../components/advent/AdventStoryFlow";
import { DayOneScreen } from "../../components/advent/DayOneScreen";
import { PlaceholderDayScreen } from "../../components/advent/PlaceholderDayScreen";
import { getAdventDay } from "../../data/adventDays";
import { getAdventStory } from "../../data/adventStories";
import { useAdvent } from "../../state/AdventContext";

export default function AdventDayScreen() {
  const { day } = useLocalSearchParams<{ day: string }>();
  const { completedDays, currentDay, selectedLanguage } = useAdvent();
  const dayNumber = Number(day);
  const entry = getAdventStory(dayNumber, selectedLanguage);
  const dayMeta = getAdventDay(dayNumber);
  const isAvailable = completedDays.includes(dayNumber) || dayNumber === currentDay;

  if (!Number.isInteger(dayNumber) || !dayMeta || !isAvailable) {
    return <Redirect href="/home" />;
  }

  if (dayNumber === 1) {
    return <DayOneScreen />;
  }

  return entry
    ? <AdventStoryFlow story={entry.story} images={entry.images} />
    : <PlaceholderDayScreen day={dayMeta} />;
}
