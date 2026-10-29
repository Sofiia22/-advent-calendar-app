import { DAY_FOUR_CONTENT, DAY_FOUR_ICONS, DAY_FOUR_STORY_IMAGES } from "../../data/day4";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayFourScreen() {
  return (
    <IllustratedDayScreen
      contentByLanguage={DAY_FOUR_CONTENT}
      dayNumber={4}
      icons={DAY_FOUR_ICONS}
      storyImages={DAY_FOUR_STORY_IMAGES}
    />
  );
}
