import { DAY_EIGHTEEN_CONTENT, DAY_EIGHTEEN_ICONS, DAY_EIGHTEEN_STORY_IMAGES } from "../../data/day18Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayEighteenScreen() {
  return <IllustratedDayScreen dayNumber={18} contentByLanguage={DAY_EIGHTEEN_CONTENT} icons={DAY_EIGHTEEN_ICONS} storyImages={DAY_EIGHTEEN_STORY_IMAGES} />;
}
