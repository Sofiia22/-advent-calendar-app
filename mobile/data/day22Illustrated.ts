import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_TWENTY_TWO_ICONS = ADVENT_SECTION_ICONS;
export const DAY_TWENTY_TWO_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day22/story/01-cyrus.jpg"),
  require("../assets/advent/day22/story/02-return.jpg"),
  require("../assets/advent/day22/story/03-foundation.jpg"),
  require("../assets/advent/day22/story/04-temple.jpg"),
];
export const DAY_TWENTY_TWO_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 22",
    "title": "Повернення до Єрусалима",
    "subtitle": "Бог виконує Свої обіцянки",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Ездри 1:3; 6:14–22; Єремії 29:10; Михея 5:1",
      "verse": "Прочитайте разом зазначені уривки з Біблії."
    },
    "storyPages": [
      {
        "title": "Кір дозволяє повернутися",
        "paragraphs": [
          "Я вже розповів вам, як важко було ізраїльтянам у полоні вавилонському. Вони дуже прагнули повернутися на батьківщину, на землю ханаанську, та царі вавилонські їх не відпускали. Проте Бог обіцяв їм, що вони повернуться на батьківщину. Він сказав: «По семидесяти роках Вавилонського полону, Я до вас завітаю, і здійсню Своє добре Слово про вас, щоб повернути вас до цього місця» (Єр. 29:10).",
          "Тепер окрім Дарія у Вавилоні був ще інший цар. Його називали Кіром. Бог дав на розум Кіру відпустити ізраїльтян додому, тому що Бог згадав Свою обіцянку. Отже, Кір об'являє ізраїльтянам, що він дозволяє їм повернутися до рідних місць і дозволяє відновити храм Єрусалимський. Кір повернув їм всі золоті речі і посуд, який взяв з храму цар Навуходоносор: тарілки, чаші, золотий і срібний посуд — все він їм повернув."
        ],
        "imageIndex": 0
      },
      {
        "title": "Дорога додому",
        "paragraphs": [
          "О, як раділи ізраїльтяни поверненню з полону вавилонського! Та коли вони повернулися до Єрусалиму, то вони побачили, що стіни його були зруйновані і будинки спалені. Ви пригадуєте, що та частина народу ізраїльського, на чолі якої стояв цар ізраїльський, не повернулася з полону до Ханаану. Та ізраїльтян, на чолі з царем юдейським, Бог повернув з полону вавилонського."
        ],
        "imageIndex": 1
      },
      {
        "title": "Відбудова храму",
        "paragraphs": [
          "Повернувшись до Єрусалиму, вони відновили жертвоприношення і принесли безліч жертв Господеві, щоб гідно вшанувати Його за визволення з полону. Вони розпочали відновлення храму. Священики були в білому одязі, сурмили сурмами, співаки співали і грали на музичних інструментах; вони співали псалми, кажучи: «Вшановуйте Господа, бо Він добрий і ласка Його навіки!»",
          "Коли заклали першого каменя, то священики засурмили, а співаки знову заспівали й народ вигукував в захваті."
        ],
        "imageIndex": 2
      },
      {
        "title": "Очікування Спасителя",
        "paragraphs": [
          "Народ ізраїльський будував храм багато років, нарешті будівля була закінчена і народ повсюди радів тріумфально. Цей храм не був таким пишним, як храм Соломона і слава Божа не з'являлася в храмі і не наповнила його. Ізраїльтяни довгий час пробули на землі Ханаану, замість того, щоб їх називати ізраїльтянами, їх тепер стали називати євреями.",
          "Бог посилав їм час від часу пророків, котрі вчили їх і нагадували обіцянку Богом Авраамові, що свого часу народиться Спас, Котрий буде царем Ізраїля. Таку саму обіцянку Бог дав і Давидові, сказавши йому, що Спаситель з'явиться від одного з його нащадків. Всі знали від пророків, що Спаситель народиться у Віфлеємі: «І ти, Віфлеєме-Ефрато... із тебе мені вийде той, що Владика в Ізраїлі» (Мих. 5:1).",
          "Нарешті, Він дійсно прийшов на землю і помер, і воскрес, і Він знову прийде. До Нього прийдуть всі, хто вірив обіцянці Божій і в надії очікували на Нього. Невдовзі ви дізнаєтеся за Спасителя світу дуже багато чого."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Ким був Кір? Що він дозволив зробити ізраїльтянам?",
      "Що Кір повернув ізраїльтянам?",
      "Що робили священики, коли закладали перший камінь храму?",
      "Яку обітницю Божу нагадували пророки?",
      "Де, за пророцтвом, мав народитися Спаситель?",
      "Чи справді Спаситель прийшов?",
      "Чи прийде Він знову?",
      "Хто прийде до Нього?"
    ],
    "promise": {
      "body": "Бог вірний Своєму слову. Він виконав обіцянку повернути народ із полону та послав обіцяного Спасителя.",
      "keyLine": "Бог вірний Своєму слову."
    },
    "connection": {
      "body": "Повернення народу й відбудова храму нагадують нам, що Бог не забуває Своїх обіцянок. Його обітниці Авраамові й Давидові ведуть нас до Ісуса Христа.",
      "keyLine": "Божі обітниці Авраамові й Давидові ведуть нас до Ісуса Христа."
    },
    "familyChallenge": {
      "intro": "Будуємо й дякуємо",
      "instruction": "Побудуйте разом невеликий «храм» із кубиків або конструктора. За кожен покладений кубик назвіть одну Божу обіцянку або причину подякувати Йому. Завершіть короткою сімейною молитвою.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помоліться разом",
      "prayer": "Господи, дякуємо за Твою вірність і за обіцяного Спасителя."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 22",
      "completed": "День 22 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 22",
    "title": "Return to Jerusalem",
    "subtitle": "God Keeps His Promises",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection to Jesus",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Ezra 1:3; 6:14–22; Jeremiah 29:10; Micah 5:2",
      "verse": "Read these Bible passages together."
    },
    "storyPages": [
      {
        "title": "Cyrus Allows the Return",
        "paragraphs": [
          "I have already told you how difficult life was for the Israelites in Babylonian captivity. They longed to return to their homeland, the land of Canaan, but the Babylonian kings would not let them go. Yet God had promised that they would return. He said that after seventy years in Babylon He would visit them and fulfill His good word by bringing them back (Jeremiah 29:10).",
          "Then another king ruled in Babylon, named Cyrus. God moved Cyrus to allow the Israelites to return home, for God remembered His promise. Cyrus announced that they could return to their own land and rebuild the temple in Jerusalem. He also returned the gold and silver vessels and other objects that King Nebuchadnezzar had taken from the temple."
        ],
        "imageIndex": 0
      },
      {
        "title": "The Journey Home",
        "paragraphs": [
          "How joyful the Israelites were to leave Babylonian captivity! But when they reached Jerusalem, they saw that its walls had been destroyed and its houses burned. Remember that the people of the northern kingdom of Israel had not returned from captivity to Canaan. God brought back the people of Judah from Babylon."
        ],
        "imageIndex": 1
      },
      {
        "title": "Rebuilding the Temple",
        "paragraphs": [
          "Back in Jerusalem, they restored the sacrifices and offered many offerings to the Lord, honoring Him for delivering them. They began rebuilding the temple. The priests wore white garments and sounded trumpets, while the singers sang psalms and played musical instruments, praising the Lord because He is good and His mercy endures forever.",
          "When the foundation was laid, the priests sounded the trumpets, the singers sang again, and the people shouted with joy."
        ],
        "imageIndex": 2
      },
      {
        "title": "Waiting for the Savior",
        "paragraphs": [
          "The people worked on the temple for many years. At last the building was finished, and the people rejoiced. This temple was not as magnificent as Solomon’s temple, and the glory of God did not visibly fill it as before. The Israelites lived for a long time in Canaan, and they came to be called Jews. From time to time God sent prophets to teach them and remind them of His promise to Abraham: a Savior would one day come, who would be King of Israel.",
          "God made the same promise to David, declaring that the Savior would come from among his descendants. The prophets also foretold that the Savior would be born in Bethlehem (Micah 5:2 in English Bibles). At last He truly came to earth, died, rose again, and will come again. All who trusted God's promise and waited for Him in hope will come to Him.",
          "Soon you will learn much more about the Savior of the world."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Who was Cyrus, and what did he allow the Israelites to do?",
      "What did Cyrus return to them?",
      "What did the priests and singers do when the temple foundation was laid?",
      "What promise did the prophets remind the people about?",
      "Where would the Savior be born?",
      "Did the Savior truly come?",
      "Will He come again?",
      "Who will come to Him?"
    ],
    "promise": {
      "body": "God is faithful to His word. He kept His promise to bring His people home and sent the promised Savior.",
      "keyLine": "God is faithful to His word."
    },
    "connection": {
      "body": "The return from exile and the rebuilding of the temple remind us that God does not forget His promises. His promises to Abraham and David point us to Jesus Christ.",
      "keyLine": "God’s promises to Abraham and David point us to Jesus Christ."
    },
    "familyChallenge": {
      "intro": "Build and Give Thanks",
      "instruction": "Build a small “temple” with blocks as a family. With each block, share one promise from God or one thing you thank Him for. Finish with a family prayer.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Pray together",
      "prayer": "Lord, thank You for Your faithfulness and for the promised Savior."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 22",
      "completed": "Day 22 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 22",
    "title": "Возвращение в Иерусалим",
    "subtitle": "Бог исполняет Свои обещания",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Ездра 1:3; 6:14–22; Иеремия 29:10; Михей 5:2",
      "verse": "Прочитайте вместе указанные отрывки из Библии."
    },
    "storyPages": [
      {
        "title": "Кир разрешает вернуться",
        "paragraphs": [
          "Я уже рассказывал вам, как тяжело было израильтянам в вавилонском плену. Они очень хотели вернуться на родину, в землю Ханаанскую, но вавилонские цари не отпускали их. Однако Бог обещал им, что они вернутся. Он сказал, что после семидесяти лет вавилонского плена посетит их и исполнит Свое доброе слово, чтобы возвратить их на это место (Иер. 29:10).",
          "В то время в Вавилоне появился другой царь по имени Кир. Бог побудил Кира отпустить израильтян домой, потому что помнил Свое обещание. Кир объявил израильтянам, что разрешает им вернуться на родину и восстановить Иерусалимский храм. Он также вернул все золотые и серебряные предметы и сосуды, которые царь Навуходоносор забрал из храма."
        ],
        "imageIndex": 0
      },
      {
        "title": "Дорога домой",
        "paragraphs": [
          "Как радовались израильтяне возвращению из вавилонского плена! Но, придя в Иерусалим, они увидели разрушенные стены и сожженные дома. Вы помните, что народ северного Израильского царства не вернулся из своего плена в Ханаан. Бог возвратил из Вавилона жителей Иудеи."
        ],
        "imageIndex": 1
      },
      {
        "title": "Восстановление храма",
        "paragraphs": [
          "Вернувшись в Иерусалим, они восстановили жертвоприношения и принесли множество жертв Господу, благодаря Его за освобождение. Они начали восстанавливать храм. Священники были в белых одеждах и трубили в трубы, певцы пели псалмы и играли на музыкальных инструментах, прославляя Господа, потому что Он благ и милость Его вовек.",
          "Когда положили первый камень основания, священники затрубили, певцы снова запели, а народ радостно восклицал."
        ],
        "imageIndex": 2
      },
      {
        "title": "Ожидание Спасителя",
        "paragraphs": [
          "Израильтяне строили храм много лет. Наконец здание было закончено, и народ торжественно радовался. Этот храм был не так великолепен, как храм Соломона, и слава Божья не наполнила его видимым образом, как прежде. Израильтяне долго жили в Ханаане, и со временем их стали называть иудеями. Бог время от времени посылал им пророков, которые учили их и напоминали Божье обещание Аврааму о Спасителе, Который однажды придет и будет Царем Израиля.",
          "Такое же обещание Бог дал Давиду: Спаситель произойдет из его потомков. Пророки предсказывали, что Спаситель родится в Вифлееме (Мих. 5:2). Наконец Он действительно пришел на землю, умер, воскрес и снова придет. К Нему придут все, кто верил Божьему обещанию и с надеждой ожидал Его. Скоро вы узнаете еще очень многое о Спасителе мира."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Кем был Кир и что он разрешил сделать израильтянам?",
      "Что Кир возвратил израильтянам?",
      "Что делали священники и певцы, когда закладывали основание храма?",
      "О каком Божьем обещании напоминали пророки?",
      "Где должен был родиться Спаситель?",
      "Действительно ли Спаситель пришел?",
      "Придет ли Он снова?",
      "Кто придет к Нему?"
    ],
    "promise": {
      "body": "Бог верен Своему слову. Он исполнил обещание вернуть народ из плена и послал обещанного Спасителя.",
      "keyLine": "Бог верен Своему слову."
    },
    "connection": {
      "body": "Возвращение из плена и восстановление храма напоминают, что Бог не забывает Своих обещаний. Обетования Аврааму и Давиду указывают на Иисуса Христа.",
      "keyLine": "Божьи обетования Аврааму и Давиду указывают на Иисуса Христа."
    },
    "familyChallenge": {
      "intro": "Строим и благодарим",
      "instruction": "Постройте всей семьей маленький «храм» из кубиков. Добавляя каждый кубик, называйте одно Божье обещание или причину поблагодарить Его. Закончите семейной молитвой.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, благодарим за Твою верность и за обещанного Спасителя."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 22",
      "completed": "День 22 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

