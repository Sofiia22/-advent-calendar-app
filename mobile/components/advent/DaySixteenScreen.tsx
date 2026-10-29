import { DAY_SIXTEEN_CONTENT, DAY_SIXTEEN_ICONS, DAY_SIXTEEN_STORY_IMAGES } from "../../data/day16Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DaySixteenScreen() {
  return <IllustratedDayScreen dayNumber={16} contentByLanguage={DAY_SIXTEEN_CONTENT} icons={DAY_SIXTEEN_ICONS} storyImages={DAY_SIXTEEN_STORY_IMAGES} />;
}
