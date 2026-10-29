import { DAY_TEN_CONTENT, DAY_TEN_ICONS, DAY_TEN_STORY_IMAGES } from "../../data/day10Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayTenScreen() {
  return <IllustratedDayScreen dayNumber={10} contentByLanguage={DAY_TEN_CONTENT} icons={DAY_TEN_ICONS} storyImages={DAY_TEN_STORY_IMAGES} />;
}
