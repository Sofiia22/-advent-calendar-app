import { DAY_SIX_CONTENT, DAY_SIX_ICONS, DAY_SIX_STORY_IMAGES } from "../../data/day6Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DaySixScreen() {
  return <IllustratedDayScreen dayNumber={6} contentByLanguage={DAY_SIX_CONTENT} icons={DAY_SIX_ICONS} storyImages={DAY_SIX_STORY_IMAGES} />;
}
