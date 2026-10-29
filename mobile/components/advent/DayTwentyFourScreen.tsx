import { DAY_TWENTY_FOUR_CONTENT, DAY_TWENTY_FOUR_ICONS, DAY_TWENTY_FOUR_STORY_IMAGES } from "../../data/day24Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";
export function DayTwentyFourScreen() {
  return <IllustratedDayScreen dayNumber={24} contentByLanguage={DAY_TWENTY_FOUR_CONTENT} icons={DAY_TWENTY_FOUR_ICONS} storyImages={DAY_TWENTY_FOUR_STORY_IMAGES} />;
}
