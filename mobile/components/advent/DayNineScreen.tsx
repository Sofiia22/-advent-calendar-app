import { DAY_NINE_CONTENT, DAY_NINE_ICONS, DAY_NINE_STORY_IMAGES } from "../../data/day9Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayNineScreen() {
  return <IllustratedDayScreen dayNumber={9} contentByLanguage={DAY_NINE_CONTENT} icons={DAY_NINE_ICONS} storyImages={DAY_NINE_STORY_IMAGES} />;
}
