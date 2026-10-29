import { DAY_TWENTY_CONTENT, DAY_TWENTY_ICONS, DAY_TWENTY_STORY_IMAGES } from "../../data/day20Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayTwentyScreen() {
  return <IllustratedDayScreen dayNumber={20} contentByLanguage={DAY_TWENTY_CONTENT} icons={DAY_TWENTY_ICONS} storyImages={DAY_TWENTY_STORY_IMAGES} />;
}
