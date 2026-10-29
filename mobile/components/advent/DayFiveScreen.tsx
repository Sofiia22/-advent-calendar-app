import { DAY_FIVE_CONTENT, DAY_FIVE_ICONS, DAY_FIVE_STORY_IMAGES } from "../../data/day5Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayFiveScreen() {
  return <IllustratedDayScreen dayNumber={5} contentByLanguage={DAY_FIVE_CONTENT} icons={DAY_FIVE_ICONS} storyImages={DAY_FIVE_STORY_IMAGES} />;
}
