import { DAY_TWENTY_THREE_CONTENT, DAY_TWENTY_THREE_ICONS, DAY_TWENTY_THREE_STORY_IMAGES } from "../../data/day23Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";
export function DayTwentyThreeScreen() {
  return <IllustratedDayScreen dayNumber={23} contentByLanguage={DAY_TWENTY_THREE_CONTENT} icons={DAY_TWENTY_THREE_ICONS} storyImages={DAY_TWENTY_THREE_STORY_IMAGES} />;
}
