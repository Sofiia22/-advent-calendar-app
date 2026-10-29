import { DAY_TWELVE_CONTENT, DAY_TWELVE_ICONS, DAY_TWELVE_STORY_IMAGES } from "../../data/day12Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayTwelveScreen() {
  return <IllustratedDayScreen dayNumber={12} contentByLanguage={DAY_TWELVE_CONTENT} icons={DAY_TWELVE_ICONS} storyImages={DAY_TWELVE_STORY_IMAGES} />;
}
