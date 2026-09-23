import { ImageSourcePropType } from "react-native";

import { LanguageId } from "../state/AdventContext";
import { DAY_5_BY_LANGUAGE } from "./day5";
import { AdventStory, AdventStoryContent } from "./storyTypes";

export type AdventStoryImages = {
  hero: ImageSourcePropType;
  journey?: ImageSourcePropType;
  lamb?: ImageSourcePropType;
};

export type AdventStoryEntry = {
  story: AdventStory;
  images: AdventStoryImages;
};

const DAY_5_IMAGES: AdventStoryImages = {
  hero: require("../assets/images/day5-moriah-hero.jpg"),
  journey: require("../assets/images/day5-moriah-journey.jpg"),
  lamb: require("../assets/images/day5-lambs.jpg"),
};

/** Keeps the existing content library usable while the UI consumes one model. */
export function adaptLegacyStory(content: AdventStoryContent): AdventStory {
  return {
    id: `advent-${content.day}`,
    day: content.day,
    title: content.title,
    bibleReference: content.reference,
    book: content.book,
    theme: content.theme,
    todaysQuestion: content.experience?.todaysQuestion ?? content.keyVerse,
    sections: content.story.map((paragraph, index) => {
      const image = index === 1 ? "journey" : index === 3 ? "lamb" : undefined;
      return {
        id: `day-${content.day}-scene-${index + 1}`,
        text: [paragraph],
        image,
        imageAlt: image ? content.captions[image] : undefined,
      };
    }),
    todaysTruth: content.experience?.todaysTruth ?? content.theme,
    bigStory: {
      title: content.christConnection.title,
      text: content.christConnection.paragraphs,
      bibleReferences: content.christConnection.references.split(" · "),
      timeline: content.experience?.timeline?.map((label) => ({ label })),
    },
    discussionQuestions: content.questions,
    prayer: content.prayer,
    familyChallenge: content.familyChallenge,
    completedMessage: content.experience?.completedMessage,
  };
}

const STORY_LIBRARY: Partial<
  Record<number, { content: Record<LanguageId, AdventStoryContent>; images: AdventStoryImages }>
> = {
  5: { content: DAY_5_BY_LANGUAGE, images: DAY_5_IMAGES },
};

export function getAdventStory(
  day: number,
  language: LanguageId,
): AdventStoryEntry | undefined {
  const entry = STORY_LIBRARY[day];
  if (!entry) return undefined;

  return {
    story: adaptLegacyStory(entry.content[language]),
    images: entry.images,
  };
}

export function hasAdventStory(day: number) {
  return Boolean(STORY_LIBRARY[day]);
}
