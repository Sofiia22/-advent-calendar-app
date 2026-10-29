import { DAY_SEVEN_CONTENT, DAY_SEVEN_ICONS, DAY_SEVEN_STORY_IMAGES } from "../../data/day7Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DaySevenScreen() {
  return <IllustratedDayScreen dayNumber={7} contentByLanguage={DAY_SEVEN_CONTENT} icons={DAY_SEVEN_ICONS} storyImages={DAY_SEVEN_STORY_IMAGES} />;
}
