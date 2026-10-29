import { DAY_ELEVEN_CONTENT, DAY_ELEVEN_ICONS, DAY_ELEVEN_STORY_IMAGES } from "../../data/day11Illustrated";
import { IllustratedDayScreen } from "./DayOneScreen";

export function DayElevenScreen() {
  return <IllustratedDayScreen dayNumber={11} contentByLanguage={DAY_ELEVEN_CONTENT} icons={DAY_ELEVEN_ICONS} storyImages={DAY_ELEVEN_STORY_IMAGES} />;
}
