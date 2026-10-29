import { DAY_TWENTY_ONE_CONTENT, DAY_TWENTY_ONE_ICONS, DAY_TWENTY_ONE_STORY_IMAGES } from "../../data/day21Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";
export function DayTwentyOneScreen() {
  return <IllustratedDayScreen dayNumber={21} contentByLanguage={DAY_TWENTY_ONE_CONTENT} icons={DAY_TWENTY_ONE_ICONS} storyImages={DAY_TWENTY_ONE_STORY_IMAGES} />;
}
