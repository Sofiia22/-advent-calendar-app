import { DAY_THIRTEEN_CONTENT, DAY_THIRTEEN_ICONS, DAY_THIRTEEN_STORY_IMAGES } from "../../data/day13Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayThirteenScreen() {
  return <IllustratedDayScreen dayNumber={13} contentByLanguage={DAY_THIRTEEN_CONTENT} icons={DAY_THIRTEEN_ICONS} storyImages={DAY_THIRTEEN_STORY_IMAGES} />;
}
