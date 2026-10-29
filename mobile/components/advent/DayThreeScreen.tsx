import { DAY_THREE_CONTENT, DAY_THREE_ICONS, DAY_THREE_STORY_IMAGES } from "../../data/day3";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayThreeScreen() {
  return (
    <IllustratedDayScreen
      contentByLanguage={DAY_THREE_CONTENT}
      dayNumber={3}
      icons={DAY_THREE_ICONS}
      storyImages={DAY_THREE_STORY_IMAGES}
    />
  );
}
