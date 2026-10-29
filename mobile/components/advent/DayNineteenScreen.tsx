import { DAY_NINETEEN_CONTENT, DAY_NINETEEN_ICONS, DAY_NINETEEN_STORY_IMAGES } from "../../data/day19Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayNineteenScreen() {
  return <IllustratedDayScreen dayNumber={19} contentByLanguage={DAY_NINETEEN_CONTENT} icons={DAY_NINETEEN_ICONS} storyImages={DAY_NINETEEN_STORY_IMAGES} />;
}
