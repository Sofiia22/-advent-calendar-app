import { ImageSourcePropType } from "react-native";

type StoryMoment = {
  caption: string;
  image: ImageSourcePropType;
};

export const DAY_ONE = {
  dayLabel: "Day 1",
  title: "God Created Us",
  subtitle: "Sin Entered the World — God Promised a Savior",
  icons: {
    scripture: require("../assets/advent/day1/icons/scripture.png"),
    bibleStory: require("../assets/advent/day1/icons/bible-story.png"),
    questions: require("../assets/advent/day1/icons/questions.png"),
    promise: require("../assets/advent/day1/icons/promise.png"),
    connection: require("../assets/advent/day1/icons/connection.png"),
    familyChallenge: require("../assets/advent/day1/icons/family-challenge.png"),
  },
  scripture: {
    title: "Scripture",
    verse:
      "“So God created man in His own image; in the image of God He created him; male and female He created them.”",
    reference: "Genesis 1:27",
  },
  bibleStory: {
    title: "Bible Story",
    intro:
      "God made Adam and Eve and placed them in a beautiful garden. Everything was good, and they lived in joy with God.",
    paragraphs: [
      "In the Garden of Eden, Adam and Eve had everything they needed. God told them they could eat from every tree except one — the tree of the knowledge of good and evil.",
      "But Satan came in the form of a serpent and tempted Eve. He told her that if she ate the fruit, she would become like God. Eve listened to the serpent, ate the fruit, and gave some to Adam.",
      "As soon as they sinned, everything changed. They felt shame and fear. They tried to hide from God and covered themselves with leaves.",
      "Because of their disobedience, sin entered the world. Adam and Eve had to leave the garden.",
      "But even then, God did not leave them without hope. He promised that one day a Savior would come.",
    ],
    moments: [
      {
        image: require("../assets/advent/day1/story/01-eden.png"),
        caption: "Adam and Eve in God’s beautiful garden",
      },
      {
        image: require("../assets/advent/day1/story/02-temptation.png"),
        caption: "The serpent tempts Eve",
      },
      {
        image: require("../assets/advent/day1/story/03-hiding.png"),
        caption: "Adam and Eve hide from God",
      },
      {
        image: require("../assets/advent/day1/story/04-expulsion.png"),
        caption: "They are sent out of the garden",
      },
      {
        image: require("../assets/advent/day1/story/05-hope.png"),
        caption: "God gives hope and promise",
      },
    ] satisfies StoryMoment[],
  },
  questions: {
    title: "Questions",
    items: [
      "Which tree were Adam and Eve not allowed to eat from?",
      "Who tempted Eve?",
      "Why did Adam and Eve hide?",
      "What happened after they sinned?",
      "What hope did God give them?",
    ],
  },
  promise: {
    title: "Promise",
    paragraphs: [
      "God did not leave people without hope.",
      "He promised that one day a Savior would come.",
    ],
    keyLine: "God promised a Savior.",
  },
  connection: {
    title: "Connection",
    image: require("../assets/advent/day1/connection/day1-connection.png"),
    paragraphs: [
      "The Christmas story did not begin in Bethlehem.",
      "It began long before that, in the Garden of Eden, when God promised to send a Savior.",
      "Jesus is the promised Savior.",
    ],
    keyLine: "This promise points to Jesus.",
  },
  familyChallenge: {
    title: "Family Challenge",
    paragraphs: [
      "Have a cozy family tea time today.",
      "Make tea, hot chocolate, or another favorite drink. Put your phones away and sit together as a family.",
    ],
    promptLabel: "Ask each person:",
    prompt: "“What are you thankful to God for today?”",
    ending: "Finish with a short family prayer.",
  },
} as const;
