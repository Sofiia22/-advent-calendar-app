import { DAY_TWENTY_TWO_CONTENT, DAY_TWENTY_TWO_ICONS, DAY_TWENTY_TWO_STORY_IMAGES } from "../../data/day22Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";
export function DayTwentyTwoScreen() {
  return <IllustratedDayScreen dayNumber={22} contentByLanguage={DAY_TWENTY_TWO_CONTENT} icons={DAY_TWENTY_TWO_ICONS} storyImages={DAY_TWENTY_TWO_STORY_IMAGES} />;
}
