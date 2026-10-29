import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_FIVE_ICONS = ADVENT_SECTION_ICONS;
export const DAY_FIVE_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day5/story/01-stars.jpg"),
  require("../assets/advent/day5/story/02-visitors.jpg"),
  require("../assets/advent/day5/story/03-isaac.jpg"),
  require("../assets/advent/day5/story/04-mountain.jpg"),
  require("../assets/advent/day5/story/05-provision.jpg"),
];

export const DAY_FIVE_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 5",
    "title": "Ісаак — Бог подбає",
    "subtitle": "Обіцяний син і Божа турбота",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Бог нагледить Собі ягня на цілопалення, сину мій!»",
      "reference": "Буття 22:8"
    },
    "storyPages": [
      {
        "title": "Обітниця під зорями",
        "paragraphs": [
          "Авраам і Сарра жили в шатрі на землі Ханаану. Вони не мали дітей. Авраам і Сарра були вже досить похилого віку. Авраамові було майже сто років, а Сарра мала майже дев’яносто років.",
          "Одного разу вночі Бог сказав Авраамові: «Поглянь на небо. Що ти бачиш?» Небо рясніло зорями, і їх було так багато, що й підрахувати несила. Бог сказав: «Ти матимеш багато дітей, так врешті-решт нащадків твоїх буде більше, аніж зірок на небі; вони будуть жити на землі ханаанській, а нечестиві народи будуть вигнані з того краю».",
          "Того часу Авраам не мав жодного сина, але він повірив, що Бог зробить те, що обіцяв. Авраам повів себе добре, повіривши всякому слову Господа, тому що Бог завжди каже правду і завжди виконує Слово Своє."
        ]
      },
      {
        "title": "Троє гостей",
        "paragraphs": [
          "Одного разу Авраам сидів у своєму наметі. Наближався полудень. Було дуже жарко, але намет стояв у тіні дерев. Авраам побачив людей, що підходили до намету. Він побіг до них назустріч, поклонився їм і сказав до одного із подорожніх: «Пане, прошу тебе зайди до намету мого, і дозволь мені принести трохи води і обмити ноги ваші, і хліба, щоб зміцнити серця ваші. Ви відпочинете в тіні дерева, і тоді продовжуватимете свою мандрівку».",
          "Тоді три мужі дали згоду відпочити в Авраама. Як ви гадаєте, що це за люди були? Це були ангели. Вони зійшли з неба, щоб принести Авраамові радість від Бога: тому що ви і самі знаєте, що Бог посилає ангелів звіщати людям Свою волю.",
          "Ангели сіли біля намету в тіні дерева. Сарра залишалася в наметі. Авраам сказав Саррі: «Візьми муки і зроби нам пошвидше прісні хліби». Тоді Авраам взяв годоване теля і сказав одному із слуг своїх: «Швидше приготуй нам його». Коли все було готове, Авраам приніс масла, молока й теля приготовлене і поклав усе це перед мандрівниками під деревом. Вони стали їсти. Авраам стояв біля них.",
          "І коли вони їли, то запитали: «Де Сарра, дружина твоя?» Авраам відповів: «Вона в наметі». Тоді один із мужів сказав: «Сарра матиме сина».",
          "Сарра чула слова ангелів і не могла повірити, що вона справді народить сина в такому віці. Вона в душі засміялася. Ангел сказав: «Чому це засміялася Сарра? Вона таки справді народить сина». Тоді Сарра сказала: «Я не сміялася», — тому що вона злякалася. Але Ангел сказав їй: «Ні, ти сміялася».",
          "Потім три мужі встали і пішли далі. Авраам трохи провів їх і повернувся до свого намету. Як на вашу думку, чи згадав Бог Свою обіцянку?"
        ]
      },
      {
        "title": "Обіцяний син",
        "paragraphs": [
          "Через рік Сарра народила сина. Ім’я йому — Ісаак. Він був слухняним сином, і Бог любив його. Авраам і Сарра теж були задоволені ним.",
          "Отже, Бог виконав обітницю Свою. Він сказав, що в Авраама і Сарри буде син, і Він дав їм сина. Авраам добре зробив, що повірив обітниці Божій, а Богові приємно було, що він повірив Словам Його, тому і зараховано це йому у праведність (Рим. 4:20–22).",
          "Сарра знала, що вірний Той, Хто обіцяв (Євр. 11:11). Спочатку Сарра не повірила, але потім і вона повірила Слову Божому, і Бог був задоволений нею.",
          "І ви, дітки, теж повинні вірити всім обітницям Божим. Що ж обіцяв вам Бог? Він обіцяв дати Духа Святого, якщо ви будете про це прохати."
        ]
      },
      {
        "title": "Дорога на гору",
        "paragraphs": [
          "Нарешті Ісаак виріс. Він поселився у своєму шатрі, окремо від батька. Всі троє вони любили Бога і любили одне одного. Це була щаслива сім’я.",
          "Ви вже знаєте, що Авраам був людиною багатою — він мав багато всякого добра. Але серце його дорожило тільки одним скарбом. Яким саме? Сином його, улюбленим сином його Ісааком. Авраам любив його понад усе. Але Бога Авраам любив сильніше.",
          "Бог забажав випробувати, чи любить Його Авраам понад усе на світі. Ви вже знаєте, що Авраам приносив Богові в жертву ягнят. І ось Бог сказав Авраамові: «Візьми свого сина, якого ти любиш, єдинородженого твого і принеси його в жертву на одній із гір, на яку Я вкажу тобі».",
          "Важко було Авраамові зробити це. Але він хотів виконати все, що йому Бог звелів, тому що Авраам любив Бога всім серцем своїм.",
          "Ось чому Авраам нарубав дров, поклав їх на віслюка і наказав двом своїм слугам йти за ним, і Ісаакові теж. Сарра залишилася вдома.",
          "Три дні йшли вони вчотирьох, нарешті прийшли до високої гори. Тут Авраам сказав слугам своїм: «Ви залишайтеся тут з віслюком, а я і син підемо туди поклонитися Богові».",
          "Він зняв дрова з віслюка і поклав їх на плечі сина. Потім він взяв з собою вогню і ножа і пішов на гору з Ісааком.",
          "Ісаак не знав, що батько хоче його принести в жертву, він думав, що батько принесе в жертву Богові ягня. Тому він сказав: «Отче!»",
          "Авраам відповів: «Ось я, сину мій».",
          "Ісаак продовжував: «Ось вогонь і дрова, — а де ж ягня для жертви всеспалення?»",
          "— «Сину мій, — сказав Авраам, — Бог нагледить Собі ягня».",
          "Авраам не сказав, що Бог звелів йому принести в жертву сина Ісаака."
        ]
      },
      {
        "title": "Бог дає заміну",
        "paragraphs": [
          "Нарешті вони піднялися на верховину. Авраам взяв каміння і зробив з нього жертовника, потім зняв дрова з плечей Ісаака і поклав на жертовник. Тепер Ісаак зрозумів, хто повинен був замінити ягня.",
          "Авраам зав’язав руки і ноги Ісаакові мотузкою, якою були зв’язані дрова, і поклав сина свого на дрова жертовника.",
          "Коли Авраам уже взяв ножа і підняв руку, щоб зарізати сина свого, він раптом почув голос: «Аврааме! Аврааме!»",
          "Це Ангел Господній кликав до нього з неба, кажучи: «Не піднімай руки твоєї на підлітка і не роби над ним нічого, тому що тепер Бог знає, що ти любиш Його, і не пошкодував сина свого єдинородженого».",
          "О, з якою радістю розв’язав Авраам мотузок і як він радів, що йому не потрібно було приносити в жертву сина свого.",
          "Цієї ж миті Авраам побачив позаду себе барана. Він пішов, взяв барана і приніс його в жертву Богові замість Ісаака. Авраам щиросердно дякував Богові за те, що Він повернув йому сина.",
          "Тоді ангел вдруге покликав Авраама з небес і сказав: «Бог бачить і радіє, що ти не пожалкував свого сина і тому Бог благословить тебе і всіх нащадків твоїх, і один із нащадків твоїх буде Спасителем усіх народів землі».",
          "Про кого говорив тут ангел? Він говорив про Ісуса, що Господь Ісус одного разу народиться на землі Дитям, принесе людям спасіння і доведе їх до Царства Небесного.",
          "«Авраамові дані були обітниці і насінню його. Не сказано: і нащадкам, якби про багатьох, але як про одного, і насінню твоєму, Котре суть Христос» (Гал. 3:16).",
          "Довгий час по тому у Діви Марії, як ви знаєте, народився Син і Він був Сином Божим.",
          "Коли ангел перестав говорити, Авраам і Ісаак спустилися з гори. Вони знайшли слуг і віслюка там, де вони їх залишили, і звідти пішли додому до Сарри.",
          "Чи любите ви Бога більше за все на світі? Так, ви повинні любити Його більше від усього, тому що Бог дав вам усе, що маєте.",
          "«Хто дотримується Моїх заповідей і виконує їх, той любить Мене» (Івана 14:21)."
        ]
      }
    ],
    "questions": [
      "Скільки онуків і правнуків обіцяв Бог дати Авраамові?",
      "З якою метою три ангели у вигляді мандрівників прийшли до Авраама?",
      "Як Авраам прийняв їх?",
      "Що вони звістили?",
      "Чи повірила Сарра цьому відразу?",
      "Чи Бог виконав Свою обітницю?",
      "Як назвали сина?",
      "Чому Бог прихильно відносився до Авраама?",
      "Чому Бог звелів Авраамові принести в жертву свого сина?",
      "Чи виконав Авраам веління Боже?",
      "Що сказав Авраам своєму синові, коли вони піднімалися на верховину?",
      "Що зупинило Авраама принести Ісаака в жертву?",
      "Чому діти повинні любити Бога більше від усього на світі?"
    ],
    "promise": {
      "body": "Бог дав Авраамові обіцяного сина — Ісаака. А на горі Він дав барана замість Ісаака. Авраам довірився Богові, навіть коли ще не знав, як Бог подбає.",
      "keyLine": "Бог знає, чого ми потребуємо. Бог подбає."
    },
    "connection": {
      "body": "Авраам сказав Ісаакові: «Бог нагледить Собі ягня». І Бог справді дав барана, який став жертвою замість Ісаака.\n\nЦя історія допомагає нам побачити ще більшу Божу обітницю. Через багато років Бог послав у світ Свого Сина — Ісуса. Ісус прийшов, щоб віддати Своє життя за наші гріхи.\n\nІсаак був урятований, бо Бог дав заміну. А через Ісуса Бог дав спасіння нам.",
      "keyLine": "Бог Сам дав те, що було потрібно для нашого спасіння."
    },
    "familyChallenge": {
      "intro": "Влаштуйте вдома маленький «Provision Hunt» — пошук Божої турботи.",
      "instruction": "Знайдіть у домі 5 речей, через які Бог піклується про вашу сім’ю.",
      "examplesLabel": "Наприклад:",
      "examples": [
        "їжу",
        "воду",
        "одяг",
        "ліжко",
        "Біблію",
        "дах над головою",
        "улюблену іграшку"
      ],
      "reflection": "Складіть усе разом або просто назвіть знайдені речі. Потім запитайте: «Чи завжди ми помічаємо, скільки Бог уже дав нам?»",
      "ending": "Прочитайте: «Бог нагледить Собі ягня…» — Буття 22:8. І скажіть разом:",
      "prayer": "«Боже, дякуємо, що Ти знаєш, чого ми потребуємо, і піклуєшся про нас»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 5",
      "completed": "День 5 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 5",
    "title": "Isaac — God Provides",
    "subtitle": "The promised son and God’s care",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“My son, God will provide for Himself the lamb for a burnt offering.”",
      "reference": "Genesis 22:8"
    },
    "storyPages": [
      {
        "title": "The Promise Beneath the Stars",
        "paragraphs": [
          "Abraham and Sarah lived in a tent in the land of Canaan. They had no children. Abraham and Sarah were already quite old. Abraham was almost one hundred years old, and Sarah was almost ninety years old.",
          "One night God said to Abraham, “Look at the sky. What do you see?” The sky was filled with stars, and there were so many that they could not be counted.",
          "God said, “You will have many children, and eventually your descendants will be more numerous than the stars in the sky; they will live in the land of Canaan, and the wicked nations will be driven out of that land.”",
          "At that time Abraham did not have a single son, but he believed that God would do what He had promised. Abraham did well by believing every word of the Lord, because God always tells the truth and always fulfills His Word."
        ]
      },
      {
        "title": "Three Visitors",
        "paragraphs": [
          "One day Abraham was sitting in his tent. Noon was approaching. It was very hot, but the tent stood in the shade of the trees.",
          "Abraham saw some people approaching the tent. He ran to meet them, bowed before them, and said to one of the travelers:",
          "“Sir, please come into my tent and allow me to bring a little water to wash your feet, and some bread so that you may refresh yourselves. You can rest in the shade of the tree, and then continue your journey.”",
          "Then the three men agreed to rest with Abraham.",
          "Who do you think these people were? They were angels. They came down from heaven to bring Abraham joy from God, because you yourselves know that God sends angels to make His will known to people.",
          "The angels sat near the tent in the shade of the tree. Sarah remained in the tent.",
          "Abraham said to Sarah:",
          "“Take some flour and quickly make us some unleavened bread.”",
          "Then Abraham took a fattened calf and said to one of his servants:",
          "“Prepare it for us quickly.”",
          "When everything was ready, Abraham brought butter, milk, and the prepared calf and placed everything before the travelers under the tree. They began to eat. Abraham stood beside them.",
          "While they were eating, they asked:",
          "“Where is Sarah, your wife?”",
          "Abraham answered:",
          "“She is in the tent.”",
          "Then one of the men said:",
          "“Sarah will have a son.”",
          "Sarah heard the words of the angels and could not believe that she would truly give birth to a son at such an age. She laughed to herself.",
          "The angel said:",
          "“Why did Sarah laugh? She truly will give birth to a son.”",
          "Then Sarah said:",
          "“I did not laugh,” because she was afraid.",
          "But the Angel said to her:",
          "“No, you did laugh.”",
          "Then the three men got up and continued on their way. Abraham accompanied them for a little while and returned to his tent.",
          "What do you think—did God remember His promise?"
        ]
      },
      {
        "title": "The Promised Son",
        "paragraphs": [
          "A year later Sarah gave birth to a son. His name was Isaac. He was an obedient son, and God loved him. Abraham and Sarah were also pleased with him.",
          "So God fulfilled His promise. He said that Abraham and Sarah would have a son, and He gave them a son.",
          "Abraham did well by believing God’s promise, and God was pleased that he believed His words, and therefore it was credited to him as righteousness (Rom. 4:20–22).",
          "Sarah knew that He who had promised was faithful (Heb. 11:11). At first Sarah did not believe, but later she too believed the Word of God, and God was pleased with her.",
          "And you, children, should also believe all of God’s promises.",
          "What has God promised you?",
          "He has promised to give the Holy Spirit if you ask Him for it."
        ]
      },
      {
        "title": "The Journey Up the Mountain",
        "paragraphs": [
          "At last Isaac grew up. He settled in his own tent, apart from his father. All three of them loved God and loved one another. It was a happy family.",
          "You already know that Abraham was a wealthy man—he had many possessions. But his heart treasured only one thing. What was it? His son, his beloved son Isaac.",
          "Abraham loved him more than anything. But Abraham loved God even more.",
          "God wanted to test whether Abraham loved Him more than everything else in the world.",
          "You already know that Abraham offered lambs to God as sacrifices. Then God said to Abraham:",
          "“Take your son, whom you love, your only son, and offer him as a sacrifice on one of the mountains that I will show you.”",
          "It was difficult for Abraham to do this. But he wanted to do everything God commanded him, because Abraham loved God with all his heart.",
          "So Abraham cut some wood, loaded it on a donkey, and told two of his servants to go with him, along with Isaac. Sarah stayed at home.",
          "The four of them traveled for three days and finally came to a high mountain.",
          "There Abraham said to his servants:",
          "“You stay here with the donkey, while I and the boy go over there to worship God.”",
          "He took the wood off the donkey and placed it on his son’s shoulders. Then he took fire and a knife and went up the mountain with Isaac.",
          "Isaac did not know that his father wanted to offer him as a sacrifice. He thought his father would offer a lamb to God.",
          "So he said:",
          "“Father!”",
          "Abraham answered:",
          "“Here I am, my son.”",
          "Isaac continued:",
          "“Here are the fire and the wood, but where is the lamb for the burnt offering?”",
          "“My son,” Abraham said, “God will provide Himself a lamb.”",
          "Abraham did not tell Isaac that God had commanded him to offer his son Isaac as a sacrifice."
        ]
      },
      {
        "title": "God Provides a Substitute",
        "paragraphs": [
          "At last they reached the top.",
          "Abraham took stones and built an altar from them. Then he took the wood from Isaac’s shoulders and placed it on the altar.",
          "Now Isaac understood who was to take the place of the lamb.",
          "Abraham tied Isaac’s hands and feet with the rope that had been used to tie the wood and laid his son on the wood of the altar.",
          "When Abraham had already taken the knife and raised his hand to kill his son, he suddenly heard a voice:",
          "“Abraham! Abraham!”",
          "It was the Angel of the Lord calling to him from heaven, saying:",
          "“Do not lay your hand on the boy, and do nothing to him, for now God knows that you love Him and have not withheld your only son.”",
          "Oh, with what joy Abraham untied the rope, and how glad he was that he did not have to offer his son as a sacrifice!",
          "At that very moment Abraham saw a ram behind him. He went, took the ram, and offered it to God as a sacrifice instead of Isaac.",
          "Abraham sincerely thanked God for giving his son back to him.",
          "Then the angel called to Abraham from heaven a second time and said:",
          "“God sees and rejoices that you did not spare your son, and therefore God will bless you and all your descendants, and one of your descendants will be the Savior of all the nations of the earth.”",
          "Whom was the angel speaking about here?",
          "He was speaking about Jesus—that one day the Lord Jesus would be born on earth as a Child, would bring salvation to people, and lead them to the Kingdom of Heaven.",
          "“Now to Abraham and his Seed were the promises made. He does not say, ‘And to seeds,’ as of many, but as of one, ‘And to your Seed,’ who is Christ” (Gal. 3:16).",
          "A long time later, as you know, the Virgin Mary gave birth to a Son, and He was the Son of God.",
          "When the angel finished speaking, Abraham and Isaac came down from the mountain. They found the servants and the donkey where they had left them, and from there they went home to Sarah.",
          "Do you love God more than everything in the world?",
          "Yes, you should love Him more than anything, because God has given you everything you have.",
          "“He who has My commandments and keeps them, it is he who loves Me” (John 14:21)."
        ]
      }
    ],
    "questions": [
      "How many grandchildren and great-grandchildren did God promise to give Abraham?",
      "For what purpose did the three angels, appearing as travelers, come to Abraham?",
      "How did Abraham receive them?",
      "What did they announce?",
      "Did Sarah believe it right away?",
      "Did God fulfill His promise?",
      "What was the son named?",
      "Why did God look favorably upon Abraham?",
      "Why did God command Abraham to offer his son as a sacrifice?",
      "Did Abraham obey God’s command?",
      "What did Abraham say to his son as they were going up the mountain?",
      "What stopped Abraham from offering Isaac as a sacrifice?",
      "Why should children love God more than anything else in the world?"
    ],
    "promise": {
      "body": "God gave Abraham his promised son, Isaac. On the mountain, He provided a ram in Isaac’s place. Abraham trusted God even before he could see how God would provide.",
      "keyLine": "God knows what we need. God provides."
    },
    "connection": {
      "body": "Abraham told Isaac: “God will provide for Himself the lamb.” And God did provide a ram to take Isaac’s place.\n\nThis story points us to an even greater promise. Many years later, God sent His Son, Jesus, into the world. Jesus came to give His life for our sins.\n\nIsaac was spared because God provided a substitute. And through Jesus, God provided salvation for us.",
      "keyLine": "God Himself provided what we needed to be saved."
    },
    "familyChallenge": {
      "intro": "Have a little “Provision Hunt” at home — a search for God’s care.",
      "instruction": "Find 5 things in your home that remind you how God cares for your family.",
      "examplesLabel": "For example:",
      "examples": [
        "food",
        "water",
        "clothes",
        "a bed",
        "a Bible",
        "a home",
        "a favorite toy"
      ],
      "reflection": "Gather the things together or simply name them. Then ask: “Do we always notice how much God has already given us?”",
      "ending": "Read together: “God will provide for Himself the lamb…” — Genesis 22:8. Then thank God together:",
      "prayer": "“God, thank You for knowing what we need and caring for us.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 5",
      "completed": "Day 5 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 5",
    "title": "Исаак — Бог усмотрит",
    "subtitle": "Обещанный сын и Божья забота",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Бог усмотрит Себе агнца для всесожжения, сын мой».",
      "reference": "Бытие 22:8"
    },
    "storyPages": [
      {
        "title": "Обещание под звёздами",
        "paragraphs": [
          "Авраам и Сарра жили в шатре в земле Ханаанской. У них не было детей. Авраам и Сарра были уже довольно преклонного возраста. Аврааму было почти сто лет, а Сарре — почти девяносто лет.",
          "Однажды ночью Бог сказал Аврааму:",
          "«Посмотри на небо. Что ты видишь?»",
          "Небо было усеяно звёздами, и их было так много, что невозможно было сосчитать.",
          "Бог сказал:",
          "«У тебя будет много детей, и в конце концов потомков твоих будет больше, чем звёзд на небе; они будут жить в земле Ханаанской, а нечестивые народы будут изгнаны из той земли».",
          "В то время у Авраама не было ни одного сына, но он поверил, что Бог сделает то, что обещал.",
          "Авраам поступил хорошо, поверив каждому слову Господа, потому что Бог всегда говорит правду и всегда исполняет Своё Слово."
        ]
      },
      {
        "title": "Трое гостей",
        "paragraphs": [
          "Однажды Авраам сидел в своём шатре. Приближался полдень. Было очень жарко, но шатёр стоял в тени деревьев.",
          "Авраам увидел людей, приближавшихся к шатру. Он побежал им навстречу, поклонился им и сказал одному из путников:",
          "«Господин, прошу тебя, зайди в мой шатёр и позволь мне принести немного воды, чтобы омыть ваши ноги, и хлеба, чтобы подкрепить ваши сердца. Вы отдохнёте в тени дерева, а затем продолжите свой путь».",
          "Тогда три мужа согласились отдохнуть у Авраама.",
          "Как вы думаете, кто были эти люди? Это были ангелы. Они сошли с неба, чтобы принести Аврааму радость от Бога, потому что вы и сами знаете, что Бог посылает ангелов возвещать людям Свою волю.",
          "Ангелы сели возле шатра в тени дерева. Сарра оставалась в шатре.",
          "Авраам сказал Сарре:",
          "«Возьми муки и поскорее приготовь нам пресные хлебы».",
          "Затем Авраам взял откормленного телёнка и сказал одному из своих слуг:",
          "«Поскорее приготовь его для нас».",
          "Когда всё было готово, Авраам принёс масло, молоко и приготовленного телёнка и поставил всё это перед путниками под деревом.",
          "Они стали есть. Авраам стоял рядом с ними.",
          "Когда они ели, то спросили:",
          "«Где Сарра, жена твоя?»",
          "Авраам ответил:",
          "«Она в шатре».",
          "Тогда один из мужей сказал:",
          "«У Сарры будет сын».",
          "Сарра услышала слова ангелов и не могла поверить, что она действительно родит сына в таком возрасте. Она в душе засмеялась.",
          "Ангел сказал:",
          "«Почему засмеялась Сарра? Она действительно родит сына».",
          "Тогда Сарра сказала:",
          "«Я не смеялась», — потому что испугалась.",
          "Но Ангел сказал ей:",
          "«Нет, ты смеялась».",
          "Затем три мужа встали и пошли дальше. Авраам немного проводил их и вернулся в свой шатёр.",
          "Как вы думаете, вспомнил ли Бог Своё обещание?"
        ]
      },
      {
        "title": "Обещанный сын",
        "paragraphs": [
          "Через год Сарра родила сына. Имя ему — Исаак. Он был послушным сыном, и Бог любил его. Авраам и Сарра также были довольны им.",
          "Итак, Бог исполнил Своё обещание. Он сказал, что у Авраама и Сарры будет сын, и Он дал им сына.",
          "Авраам поступил хорошо, поверив Божьему обещанию, и Богу было приятно, что он поверил Его словам, поэтому это было вменено ему в праведность (Рим. 4:20–22).",
          "Сарра знала, что верен Тот, Кто обещал (Евр. 11:11). Сначала Сарра не поверила, но затем и она поверила Слову Божьему, и Бог был доволен ею.",
          "И вы, дети, тоже должны верить всем Божьим обещаниям.",
          "Что же Бог обещал вам?",
          "Он обещал дать Святого Духа, если вы будете просить об этом."
        ]
      },
      {
        "title": "Дорога на гору",
        "paragraphs": [
          "Наконец Исаак вырос. Он поселился в своём шатре, отдельно от отца. Все трое любили Бога и любили друг друга. Это была счастливая семья.",
          "Вы уже знаете, что Авраам был богатым человеком — у него было много всякого добра. Но сердце его дорожило только одним сокровищем.",
          "Каким именно?",
          "Его сыном, его любимым сыном Исааком.",
          "Авраам любил его больше всего. Но Бога Авраам любил ещё сильнее.",
          "Бог захотел испытать, любит ли Авраам Его больше всего на свете.",
          "Вы уже знаете, что Авраам приносил Богу в жертву ягнят.",
          "И вот Бог сказал Аврааму:",
          "«Возьми своего сына, которого ты любишь, единородного твоего, и принеси его в жертву на одной из гор, которую Я укажу тебе».",
          "Тяжело было Аврааму сделать это. Но он хотел исполнить всё, что повелел ему Бог, потому что Авраам любил Бога всем своим сердцем.",
          "Поэтому Авраам нарубил дров, положил их на осла и велел двум своим слугам идти за ним, а также Исааку.",
          "Сарра осталась дома.",
          "Три дня шли они вчетвером и наконец пришли к высокой горе.",
          "Там Авраам сказал своим слугам:",
          "«Вы оставайтесь здесь с ослом, а я и сын пойдём туда поклониться Богу».",
          "Он снял дрова с осла и положил их на плечи сына. Затем взял с собой огонь и нож и пошёл на гору вместе с Исааком.",
          "Исаак не знал, что отец хочет принести его в жертву. Он думал, что отец принесёт Богу в жертву ягнёнка.",
          "Поэтому он сказал:",
          "«Отец!»",
          "Авраам ответил:",
          "«Вот я, сын мой».",
          "Исаак продолжил:",
          "«Вот огонь и дрова, а где же ягнёнок для жертвы всесожжения?»",
          "«Сын мой, — сказал Авраам, — Бог усмотрит Себе ягнёнка».",
          "Авраам не сказал Исааку, что Бог повелел ему принести в жертву своего сына Исаака."
        ]
      },
      {
        "title": "Бог даёт замену",
        "paragraphs": [
          "Наконец они поднялись на вершину.",
          "Авраам взял камни и сделал из них жертвенник, затем снял дрова с плеч Исаака и положил их на жертвенник.",
          "Теперь Исаак понял, кто должен был заменить ягнёнка.",
          "Авраам связал руки и ноги Исаака верёвкой, которой были связаны дрова, и положил своего сына на дрова жертвенника.",
          "Когда Авраам уже взял нож и поднял руку, чтобы заколоть своего сына, он вдруг услышал голос:",
          "«Авраам! Авраам!»",
          "Это Ангел Господень звал его с неба, говоря:",
          "«Не поднимай руки твоей на отрока и не делай над ним ничего, потому что теперь Бог знает, что ты любишь Его и не пожалел своего единородного сына».",
          "О, с какой радостью Авраам развязал верёвку и как радовался тому, что ему не нужно было приносить в жертву своего сына!",
          "В ту же минуту Авраам увидел позади себя барана. Он пошёл, взял барана и принёс его в жертву Богу вместо Исаака.",
          "Авраам от всего сердца благодарил Бога за то, что Он вернул ему сына.",
          "Тогда ангел во второй раз позвал Авраама с небес и сказал:",
          "«Бог видит и радуется, что ты не пожалел своего сына, и поэтому Бог благословит тебя и всех потомков твоих, и один из потомков твоих будет Спасителем всех народов земли».",
          "О ком говорил здесь ангел?",
          "Он говорил об Иисусе — о том, что однажды Господь Иисус родится на земле Младенцем, принесёт людям спасение и приведёт их в Царство Небесное.",
          "«Аврааму даны были обетования и семени его. Не сказано: и потомкам, как о многих, но как об одном, и семени твоему, Которое есть Христос» (Гал. 3:16).",
          "Много времени спустя у Девы Марии, как вы знаете, родился Сын, и Он был Сыном Божьим.",
          "Когда ангел перестал говорить, Авраам и Исаак спустились с горы. Они нашли слуг и осла там, где оставили их, и оттуда пошли домой к Сарре.",
          "Любите ли вы Бога больше всего на свете?",
          "Да, вы должны любить Его больше всего, потому что Бог дал вам всё, что вы имеете.",
          "«Кто соблюдает Мои заповеди и исполняет их, тот любит Меня» (Иоанна 14:21)."
        ]
      }
    ],
    "questions": [
      "Сколько внуков и правнуков Бог обещал дать Аврааму?",
      "С какой целью три ангела в образе путников пришли к Аврааму?",
      "Как Авраам принял их?",
      "Что они возвестили?",
      "Поверила ли Сарра этому сразу?",
      "Исполнил ли Бог Своё обещание?",
      "Как назвали сына?",
      "Почему Бог благосклонно относился к Аврааму?",
      "Почему Бог повелел Аврааму принести в жертву своего сына?",
      "Исполнил ли Авраам Божье повеление?",
      "Что сказал Авраам своему сыну, когда они поднимались на вершину?",
      "Что остановило Авраама от принесения Исаака в жертву?",
      "Почему дети должны любить Бога больше всего на свете?"
    ],
    "promise": {
      "body": "Бог дал Аврааму обещанного сына — Исаака. А на горе Он дал овна вместо Исаака. Авраам доверился Богу, даже когда ещё не знал, как Бог позаботится.",
      "keyLine": "Бог знает, в чём мы нуждаемся. Бог заботится о нас."
    },
    "connection": {
      "body": "Авраам сказал Исааку: «Бог усмотрит Себе агнца». И Бог действительно дал овна, который был принесён в жертву вместо Исаака.\n\nЭта история помогает нам увидеть ещё большее Божье обещание. Много лет спустя Бог послал в мир Своего Сына — Иисуса. Иисус пришёл, чтобы отдать Свою жизнь за наши грехи.\n\nИсаак был спасён, потому что Бог дал замену. А через Иисуса Бог дал спасение нам.",
      "keyLine": "Бог Сам дал то, что было необходимо для нашего спасения."
    },
    "familyChallenge": {
      "intro": "Устройте дома маленький «поиск Божьей заботы».",
      "instruction": "Пусть дети найдут в доме 5 вещей, через которые Бог заботится о вашей семье.",
      "examplesLabel": "Например:",
      "examples": [
        "еду",
        "воду",
        "одежду",
        "кровать",
        "Библию",
        "дом",
        "любимую игрушку"
      ],
      "reflection": "Соберите найденные вещи вместе или просто назовите их. Затем спросите: «Всегда ли мы замечаем, сколько Бог уже дал нам?»",
      "ending": "Прочитайте вместе: «Бог усмотрит Себе агнца…» — Бытие 22:8. И закончите короткой молитвой:",
      "prayer": "«Боже, спасибо Тебе за то, что Ты знаешь, в чём мы нуждаемся, и заботишься о нас»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 5",
      "completed": "День 5 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};
