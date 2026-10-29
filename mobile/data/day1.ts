import { ImageSourcePropType } from "react-native";

import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";

type StoryPage = {
  title: string;
  paragraphs: string[];
  imageIndex?: number | null;
};

export type IllustratedDayContent = {
  dayLabel: string;
  title: string;
  subtitle: string;
  sectionTitles: {
    scripture: string;
    bibleStory: string;
    questions: string;
    promise: string;
    connection: string;
    familyChallenge: string;
  };
  scripture: { verse: string; reference: string };
  storyPages: StoryPage[];
  questions: string[];
  promise: { body: string; keyLine: string };
  connection: { body: string; keyLine: string };
  familyChallenge: {
    intro: string;
    instruction: string;
    examplesLabel: string;
    examples: string[];
    reflection: string;
    ending: string;
    prayer: string;
  };
  navigation: {
    section: string;
    of: string;
    back: string;
    next: string;
    complete: string;
    completed: string;
    journeyContinues: string;
    backToJourney: string;
  };
};

export const DAY_ONE_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day1/story/01-light.jpg"),
  require("../assets/advent/day1/story/02-sky-water-air.jpg"),
  require("../assets/advent/day1/story/03-land-seas-plants.jpg"),
  require("../assets/advent/day1/story/04-sun-moon-stars.jpg"),
  require("../assets/advent/day1/story/05-fish-birds.jpg"),
  require("../assets/advent/day1/story/06-animals-people.jpg"),
  require("../assets/advent/day1/story/07-rest.jpg"),
] as const;

export const DAY_ONE_ICONS = ADVENT_SECTION_ICONS;

export const DAY_ONE_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  uk: {
    dayLabel: "День 1",
    title: "Бог створив світ",
    subtitle: "Усе почалося з Божого слова",
    sectionTitles: {
      scripture: "Писання",
      bibleStory: "Біблійна історія",
      questions: "Запитання",
      promise: "Обітниця",
      connection: "Зв’язок з Ісусом",
      familyChallenge: "Сімейне завдання",
    },
    scripture: {
      verse: "«На початку Бог створив Небо та землю».",
      reference: "Буття 1:1",
    },
    storyPages: [
      {
        title: "День 1 — Світло",
        paragraphs: [
          "Ви, напевно, вже чули, любі діти, що світ створив Бог. Людина може виготовляти різні речі, але для цього їй завжди потрібен матеріал.",
          "Уявіть порожню кімнату, де немає нічого, з чого можна зробити навіть простий ящик. Людина не змогла б його виготовити. А Бог створив світ із нічого.",
          "«Бо сказав Він — і сталося». Псалом 32:9. Ніхто не може творити так, як Бог. Він — єдиний Творець і створив усе.",
          "Бог сказав: «Хай станеться світло!» — і сталося світло. Так минув перший день.",
        ],
      },
      {
        title: "День 2 — Небо, вода і повітря",
        paragraphs: [
          "На другий день Бог відділив воду вгорі від води внизу.",
          "Вода вгорі утворює хмари. Бог також наповнив простір повітрям. Повітря ми не можемо побачити, але воно всюди навколо нас.",
        ],
      },
      {
        title: "День 3 — Суша, моря і рослини",
        paragraphs: [
          "На третій день за Божим словом із-під води з’явилася суша. Вода зібралася в місцях, які Бог визначив для неї.",
          "Бог назвав сушу землею, а зібрання вод — морями. Потім Бог наказав землі виростити рослини.",
          "З’явилися трава, різні рослини, дерева і квіти.",
        ],
      },
      {
        title: "День 4 — Сонце, місяць і зорі",
        paragraphs: [
          "На четвертий день Бог створив сонце, місяць і зорі.",
          "Він визначив сонцю сходити вранці й заходити ввечері. Уночі світять місяць і зорі.",
          "Зірок на небі так багато, що ми навіть не можемо їх порахувати.",
        ],
      },
      {
        title: "День 5 — Риби і птахи",
        paragraphs: [
          "На п’ятий день Бог почав створювати живих істот.",
          "Він сказав — і води наповнилися рибами, а в небі та на деревах з’явилися птахи.",
        ],
      },
      {
        title: "День 6 — Тварини і люди",
        paragraphs: [
          "На шостий день за Божим словом на землі з’явилися тварини: вівці, корови, коні та безліч інших звірів. З’явилися також маленькі істоти — бджоли, мурахи й черв’яки.",
          "Після цього Бог сказав: «Створімо людину за образом Нашим, за подобою Нашою».",
          "Євангеліє від Івана говорить про Божого Сина: «Споконвіку було Слово… Усе через Нього повстало». Івана 1:1–3.",
          "Бог створив людину, дав їй тіло й душу та здатність пізнавати Його. Потім Він створив жінку й доручив Адамові та Єві піклуватися про створений світ.",
        ],
      },
      {
        title: "День 7 — Бог завершив Свою працю",
        paragraphs: [
          "Коли Бог завершив Свою працю, Він подивився на все, що створив. Усе було дуже добре.",
          "Особливо щасливими були Адам і Єва, тому що вони могли пізнавати Бога, думати про Нього і славити Його.",
          "На сьомий день Бог уже нічого не створював. Він завершив Свою працю і спочив від усіх Своїх справ.",
          "Серед усього земного творіння саме людям Бог дав можливість свідомо славити Його. Коли ми славимо Бога, ми згадуємо Його велич і все, що Він зробив.",
          "«Бо шість день творив Господь небо та землю, море та все, що в них, а дня сьомого спочив». Вихід 20:11.",
        ],
      },
    ],
    questions: [
      "Чому Бога називають Творцем?",
      "Чи можуть ангели або люди творити так, як Бог?",
      "Що Бог створив у перший день?",
      "Що Бог створив у другий день?",
      "Що з’явилося на третій день?",
      "Що Бог створив на четвертий день?",
      "Що Бог створив на п’ятий і шостий дні?",
      "Що сталося на сьомий день?",
      "Яке Боже творіння може свідомо славити Бога?",
    ],
    promise: {
      body: "Бог не залишився далеко від Свого творіння. Божий Син, через Якого все постало, прийшов до людей.",
      keyLine: "Той, Хто створив світ, прийшов у цей світ.",
    },
    connection: {
      body: "Ісус був з Богом від самого початку. Усе постало через Нього, а згодом Він прийшов у створений Ним світ, щоб бути нашим Спасителем.",
      keyLine: "Творець став нашим Спасителем.",
    },
    familyChallenge: {
      intro: "Вийдіть усією сім’єю на коротку прогулянку — у двір, парк або просто навколо дому.",
      instruction: "Спробуйте разом знайти хоча б 7 речей, які створив Бог.",
      examplesLabel: "Наприклад:",
      examples: ["небо", "хмари", "дерево", "квітку", "птаха", "воду", "людину"],
      reflection: "Нехай кожен назве одну річ, яка йому особливо подобається у Божому творінні.",
      ending: "А наприкінці скажіть разом:",
      prayer: "«Боже, дякуємо Тобі за прекрасний світ, який Ти створив». ",
    },
    navigation: { section: "Розділ", of: "з", back: "Назад", next: "Далі", complete: "Завершити День 1", completed: "День 1 завершено", journeyContinues: "Ваша адвент-подорож триває.", backToJourney: "До подорожі" },
  },
  en: {
    dayLabel: "Day 1",
    title: "God Created the World",
    subtitle: "Everything began with God’s word",
    sectionTitles: { scripture: "Scripture", bibleStory: "Bible Story", questions: "Questions", promise: "Promise", connection: "Connection", familyChallenge: "Family Challenge" },
    scripture: { verse: "“In the beginning God created the heavens and the earth.”", reference: "Genesis 1:1" },
    storyPages: [
      { title: "Day 1 — Light", paragraphs: [
        "Dear children, you have probably heard that God created the world. People can make many things, but they always need materials to work with.",
        "Imagine an empty room with nothing from which to make even a simple box. A person could not make it. God, however, created the world out of nothing.",
        "“For He spoke, and it was done.” Psalm 33:9. No one can create in this way except God. He is the one Creator, and He created everything.",
        "God said, “Let there be light.” And there was light. That was the first day.",
      ] },
      { title: "Day 2 — Sky, Water, and Air", paragraphs: [
        "On the second day, God separated the waters above from the waters below.",
        "The water above forms clouds, and God filled the space around the earth with air. We cannot see the air, but it is all around us.",
      ] },
      { title: "Day 3 — Land, Seas, and Plants", paragraphs: [
        "On the third day, at God’s command, dry land appeared from beneath the water. The waters gathered into the places God had prepared for them.",
        "God called the dry land Earth, and the gathered waters He called Seas. Then God commanded the earth to produce plants.",
        "Grass, plants, trees, and beautiful flowers began to grow.",
      ] },
      { title: "Day 4 — Sun, Moon, and Stars", paragraphs: [
        "On the fourth day, God made the sun, moon, and stars.",
        "He appointed the sun to rise in the morning and set in the evening. At night, the moon and stars shine in the sky.",
        "There are so many stars that we cannot even count them all.",
      ] },
      { title: "Day 5 — Fish and Birds", paragraphs: [
        "On the fifth day, God created living creatures.",
        "At His command, the waters became filled with fish, and birds appeared in the sky and among the trees.",
      ] },
      { title: "Day 6 — Animals and People", paragraphs: [
        "On the sixth day, God created the animals of the earth — sheep, cattle, horses, every kind of wild animal, and even the smallest creatures.",
        "Then God said, “Let Us make man in Our image, according to Our likeness.”",
        "The Gospel of John says of God’s Son: “In the beginning was the Word… All things were made through Him.” John 1:1–3.",
        "God created human beings, gave them a body and a soul, and the ability to know Him. He made a woman and gave Adam and Eve responsibility for the world He had created.",
      ] },
      { title: "Day 7 — God Finished His Work", paragraphs: [
        "When God finished His work, He looked at everything He had made. Everything was very good.",
        "Adam and Eve were especially blessed because they could know God, think about Him, and praise Him.",
        "On the seventh day, God did not create anything more. His work of creation was complete, and He rested from all His work.",
        "Of all God’s earthly creation, human beings were given the special ability to consciously praise Him. When we praise God, we remember His greatness and all He has done.",
        "“For in six days the LORD made the heavens and the earth, the sea, and all that is in them, and rested the seventh day.” Exodus 20:11.",
      ] },
    ],
    questions: ["Why is God called the Creator?", "Can angels or people create the way God can?", "What did God create on the first day?", "What did God create on the second day?", "What appeared on the third day?", "What did God create on the fourth day?", "What did God create on the fifth and sixth days?", "What happened on the seventh day?", "Which of God’s earthly creatures can consciously praise Him?"],
    promise: { body: "God did not remain far from His creation. God’s Son, through whom all things were made, came to live among us.", keyLine: "The One who created the world came into the world." },
    connection: { body: "Jesus was with God from the beginning. Everything was made through Him, and later He came into the world He created to be our Savior.", keyLine: "The Creator became our Savior." },
    familyChallenge: {
      intro: "Take a short family walk outside — in your yard, a park, or around your neighborhood.",
      instruction: "Try to find at least 7 things God created.", examplesLabel: "For example:",
      examples: ["the sky", "clouds", "a tree", "a flower", "a bird", "water", "a person"],
      reflection: "Let everyone choose one part of creation they especially love.", ending: "At the end, say together:",
      prayer: "“God, thank You for the beautiful world You created.”",
    },
    navigation: { section: "Section", of: "of", back: "Back", next: "Next", complete: "Complete Day 1", completed: "Day 1 complete", journeyContinues: "Your Advent journey continues.", backToJourney: "Back to Journey" },
  },
  ru: {
    dayLabel: "День 1",
    title: "Бог сотворил мир",
    subtitle: "Всё началось с Божьего слова",
    sectionTitles: { scripture: "Писание", bibleStory: "Библейская история", questions: "Вопросы", promise: "Обещание", connection: "Связь с Иисусом", familyChallenge: "Семейное задание" },
    scripture: { verse: "«В начале сотворил Бог небо и землю».", reference: "Бытие 1:1" },
    storyPages: [
      { title: "День 1 — Свет", paragraphs: [
        "Вы, наверное, уже слышали, дорогие дети, что мир сотворён Богом. Люди могут делать разные вещи, но для этого им всегда нужны материалы.",
        "Представьте пустую комнату, где не из чего сделать даже простой ящик. Человек не смог бы его изготовить. Бог же сотворил мир из ничего.",
        "«Ибо Он сказал, — и сделалось». Псалом 32:9. Никто не может творить таким образом, кроме Бога. Он — единственный Творец и сотворил всё.",
        "Бог сказал: «Да будет свет». И появился свет. Это был первый день.",
      ] },
      { title: "День 2 — Небо, вода и воздух", paragraphs: [
        "Во второй день Бог отделил воды вверху от вод внизу.",
        "Вода вверху образует облака, а пространство вокруг земли Бог наполнил воздухом. Мы не видим воздух, но он находится повсюду вокруг нас.",
      ] },
      { title: "День 3 — Суша, моря и растения", paragraphs: [
        "На третий день по Божьему слову из-под воды появилась суша. Воды собрались в места, которые Бог определил для них.",
        "Бог назвал сушу землёй, а собрание вод — морями. Затем Бог повелел земле произрастить растения.",
        "Появились трава, разные растения, деревья и прекрасные цветы.",
      ] },
      { title: "День 4 — Солнце, луна и звёзды", paragraphs: [
        "На четвёртый день Бог сотворил солнце, луну и звёзды.",
        "Он определил солнцу восходить утром и заходить вечером. Ночью на небе светят луна и звёзды.",
        "Звёзд настолько много, что мы даже не можем их сосчитать.",
      ] },
      { title: "День 5 — Рыбы и птицы", paragraphs: [
        "На пятый день Бог сотворил живые существа.",
        "По Его слову воды наполнились рыбами, а в небе и на деревьях появились птицы.",
      ] },
      { title: "День 6 — Животные и люди", paragraphs: [
        "На шестой день Бог сотворил животных земли — овец, коров, лошадей, всевозможных зверей и даже самых маленьких существ.",
        "Затем Бог сказал: «Сотворим человека по образу Нашему и по подобию Нашему».",
        "В Евангелии от Иоанна сказано о Божьем Сыне: «В начале было Слово… Всё чрез Него начало быть». Иоанна 1:1–3.",
        "Бог сотворил людей, дал им тело и душу и способность познавать Его. Затем Он создал женщину и поручил Адаму и Еве заботиться о сотворённом мире.",
      ] },
      { title: "День 7 — Бог завершил Свою работу", paragraphs: [
        "Когда Бог завершил Свои дела, Он посмотрел на всё, что сотворил. Всё было очень хорошо.",
        "Адам и Ева были особенно счастливы, потому что могли познавать Бога, думать о Нём и прославлять Его.",
        "На седьмой день Бог уже ничего не создавал. Его дело творения было завершено, и Он почил от всех Своих дел.",
        "Из всего земного творения именно людям Бог дал способность осознанно славить Его. Когда мы славим Бога, мы вспоминаем Его величие и всё, что Он сделал.",
        "«Ибо в шесть дней создал Господь небо и землю, море и всё, что в них, а в день седьмой почил». Исход 20:11.",
      ] },
    ],
    questions: ["Почему Бога называют Творцом?", "Могут ли ангелы или люди творить так, как Бог?", "Что Бог сотворил в первый день?", "Что Бог сотворил во второй день?", "Что появилось в третий день?", "Что Бог сотворил в четвёртый день?", "Что Бог сотворил в пятый и шестой дни?", "Что произошло в седьмой день?", "Какое Божье творение может осознанно прославлять Бога?"],
    promise: { body: "Бог не остался далеко от Своего творения. Божий Сын, через Которого всё было создано, пришёл жить среди нас.", keyLine: "Тот, Кто сотворил мир, пришёл в этот мир." },
    connection: { body: "Иисус был с Богом от самого начала. Всё было создано через Него, а затем Он пришёл в сотворённый Им мир, чтобы стать нашим Спасителем.", keyLine: "Творец стал нашим Спасителем." },
    familyChallenge: {
      intro: "Выйдите всей семьёй на короткую прогулку — во двор, парк или просто вокруг дома.",
      instruction: "Попробуйте вместе найти хотя бы 7 вещей, которые создал Бог.", examplesLabel: "Например:",
      examples: ["небо", "облака", "дерево", "цветок", "птицу", "воду", "человека"],
      reflection: "Пусть каждый назовёт одну часть Божьего творения, которая ему особенно нравится.", ending: "А в конце скажите вместе:",
      prayer: "«Боже, спасибо Тебе за прекрасный мир, который Ты создал». ",
    },
    navigation: { section: "Раздел", of: "из", back: "Назад", next: "Далее", complete: "Завершить День 1", completed: "День 1 завершён", journeyContinues: "Ваше адвент-путешествие продолжается.", backToJourney: "К путешествию" },
  },
};
