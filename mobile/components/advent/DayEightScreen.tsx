import { DAY_EIGHT_CONTENT, DAY_EIGHT_ICONS, DAY_EIGHT_STORY_IMAGES } from "../../data/day8Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayEightScreen() {
  return <IllustratedDayScreen dayNumber={8} contentByLanguage={DAY_EIGHT_CONTENT} icons={DAY_EIGHT_ICONS} storyImages={DAY_EIGHT_STORY_IMAGES} />;
}
