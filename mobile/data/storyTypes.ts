export type AdventStoryContent = {
  day: number;
  book: string;
  theme: string;
  title: string;
  reference: string;
  keyVerse: string;

  story: readonly string[];

  christConnection: {
    title: string;
    paragraphs: readonly string[];
    references: string;
  };

  questions: readonly string[];
  prayer: readonly string[];
  familyChallenge: readonly string[];

  captions: {
    journey: string;
    lamb: string;
  };

  experience?: {
    todaysQuestion: string;
    todaysTruth: string;
    completedMessage?: string;
    timeline?: readonly string[];
  };
};

export type AdventStorySection = {
  id: string;
  text: readonly string[];
  image?: "journey" | "lamb";
  imageAlt?: string;
};

export type AdventStory = {
  id: string;
  day: number;
  title: string;
  bibleReference: string;
  book: string;
  theme: string;
  todaysQuestion: string;
  sections: readonly AdventStorySection[];
  todaysTruth: string;
  bigStory: {
    title: string;
    text: readonly string[];
    bibleReferences: readonly string[];
    timeline?: readonly { label: string }[];
  };
  discussionQuestions: readonly string[];
  prayer: readonly string[];
  familyChallenge: readonly string[];
  completedMessage?: string;
};
