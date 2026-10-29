import { DAY_FIFTEEN_CONTENT, DAY_FIFTEEN_ICONS, DAY_FIFTEEN_STORY_IMAGES } from "../../data/day15Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayFifteenScreen() {
  return <IllustratedDayScreen dayNumber={15} contentByLanguage={DAY_FIFTEEN_CONTENT} icons={DAY_FIFTEEN_ICONS} storyImages={DAY_FIFTEEN_STORY_IMAGES} />;
}
