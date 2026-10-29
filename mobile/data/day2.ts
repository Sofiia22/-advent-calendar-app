import { ImageSourcePropType } from "react-native";

import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";

type StoryMoment = {
  caption: string;
  image: ImageSourcePropType;
};

export const DAY_TWO = {
  dayLabel: "Day 2",
  title: "God Created Us",
  subtitle: "Sin Entered the World — God Promised a Savior",
  icons: ADVENT_SECTION_ICONS,
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
        image: require("../assets/advent/day2/story/01-eden.jpg"),
        caption: "Adam and Eve in God’s beautiful garden",
      },
      {
        image: require("../assets/advent/day2/story/02-temptation.jpg"),
        caption: "The serpent tempts Eve",
      },
      {
        image: require("../assets/advent/day2/story/03-hiding.jpg"),
        caption: "Adam and Eve hide from God",
      },
      {
        image: require("../assets/advent/day2/story/04-expulsion.jpg"),
        caption: "They are sent out of the garden",
      },
      {
        image: require("../assets/advent/day2/story/05-hope.jpg"),
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
    image: require("../assets/advent/day2/connection/day2-connection.jpg"),
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
