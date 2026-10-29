import { DAY_FOURTEEN_CONTENT, DAY_FOURTEEN_ICONS, DAY_FOURTEEN_STORY_IMAGES } from "../../data/day14Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayFourteenScreen() {
  return <IllustratedDayScreen dayNumber={14} contentByLanguage={DAY_FOURTEEN_CONTENT} icons={DAY_FOURTEEN_ICONS} storyImages={DAY_FOURTEEN_STORY_IMAGES} />;
}
