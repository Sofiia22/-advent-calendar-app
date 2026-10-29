import { DAY_SEVENTEEN_CONTENT, DAY_SEVENTEEN_ICONS, DAY_SEVENTEEN_STORY_IMAGES } from "../../data/day17Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DaySeventeenScreen() {
  return <IllustratedDayScreen dayNumber={17} contentByLanguage={DAY_SEVENTEEN_CONTENT} icons={DAY_SEVENTEEN_ICONS} storyImages={DAY_SEVENTEEN_STORY_IMAGES} />;
}
