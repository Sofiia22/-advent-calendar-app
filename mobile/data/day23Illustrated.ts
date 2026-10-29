import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_TWENTY_THREE_ICONS = ADVENT_SECTION_ICONS;
export const DAY_TWENTY_THREE_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day23/story/01-zechariah.jpg"),
  require("../assets/advent/day23/story/02-john.jpg"),
  require("../assets/advent/day23/story/03-mary.jpg"),
];
export const DAY_TWENTY_THREE_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 23",
    "title": "Обіцянка Спасителя",
    "subtitle": "Захарія, Єлизавета, Марія та народження Ісуса",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Луки 1:37; Матвія 1:21",
      "verse": "Луки 1:37 — «Бо для Бога нема неможливої жадної речі!» (цитата за перекладом Огієнка). Матвія 1:21 — Марія народить Сина, Якого назвуть Ісусом, бо Він спасе Свій народ від гріхів. (Переказ змісту.)"
    },
    "storyPages": [
      {
        "title": "Ангел звіщає Захарії",
        "paragraphs": [
          "В цій історії ми дізнаємося про події, пов’язані з приходом на землю Господа Ісуса Христа. Передусім розповімо про благочестивого чоловіка на ім’я Захарія. Він був священиком і служив Богові разом зі своєю дружиною Єлизаветою. Вони любили Господа, намагалися виконувати Його заповіді й прожили багато років.",
          "Однак у них не було дітей, і тепер обоє були вже старенькими. Вони продовжували молитися й покладати надію на Бога. Одного разу Захарія прийшов до Єрусалима, щоб виконати священницьке служіння в храмі. Священики кидали жереб, визначаючи, кому належить увійти до святині та покадити фіміамом. Цього разу жереб випав Захарії.",
          "Він увійшов до храму, а весь народ тим часом молився назовні. Перед жертовником кадіння раптом з’явився ангел Господній, що стояв праворуч від нього. Захарія злякався. Ангел промовив: «Не бійся, Захаріє, бо почута твоя молитва. Твоя дружина Єлизавета народить тобі сина, і ти назвеш його Іваном». Ангел розповів, що багато людей радітимуть його народженню.",
          "Іван буде великим перед Господом, сповненим Святого Духа ще від материнського лона. Він поверне багатьох людей до Господа і приготує народ до приходу Месії. Захарія не міг повірити почутому. Він запитав, як це станеться, адже він і його дружина вже старі. Ангел відповів, що він — Гавриїл, який стоїть перед Богом і посланий звістити цю радісну новину.",
          "Через те, що Захарія не повірив його словам, він залишиться німим до дня, коли все обіцяне здійсниться. Коли Захарія вийшов із храму, люди чекали на нього й дивувалися, чому він так затримався. Він намагався пояснити все знаками, бо говорити вже не міг. Люди зрозуміли, що в храмі йому було видіння. Після закінчення служіння Захарія повернувся додому.",
          "Через деякий час Єлизавета завагітніла. Бог згадав про них і виявив Свою милість."
        ],
        "imageIndex": 0
      },
      {
        "title": "Радісна звістка Марії",
        "paragraphs": [
          "На шостому місяці вагітності Єлизавети Бог послав ангела Гавриїла до міста Назарета, до діви Марії, зарученої з Йосипом, чоловіком із роду Давида. Ангел привітав її та сказав, що Господь із нею. Марія стривожилася від таких слів, але ангел промовив: «Не бійся, Маріє, бо ти знайшла благодать у Бога». Ангел сповістив, що Марія народить Сина і дасть Йому ім’я Ісус.",
          "Він буде великий, назветься Сином Всевишнього; Господь дасть Йому престол Його батька Давида, і Його царству не буде кінця. Марія запитала, як це станеться, оскільки вона ще не жила з чоловіком. Ангел пояснив, що Святий Дух зійде на неї і сила Всевишнього осінить її. Тому народжене Немовля буде святе, Син Божий.",
          "Для Бога немає нічого неможливого. Марія відповіла з покорою: «Ось я, раба Господня; нехай буде мені за словом твоїм». Марія пішла до гірської країни, до дому Захарії та Єлизавети. Щойно Єлизавета почула Маріїне привітання, дитина заворушилася в її лоні, а Єлизавета сповнилася Святого Духа й благословила Марію.",
          "Вона назвала Марію благословенною серед жінок і прославила її віру в Господню обіцянку. Марія також прославила Бога за Його милосердя та великі діла. Приблизно три місяці Марія була в Єлизавети, а потім повернулася додому."
        ],
        "imageIndex": 2
      },
      {
        "title": "Народження Івана",
        "paragraphs": [
          "Настав час, і Єлизавета народила сина. Сусіди та родичі раділи разом із нею, бо Господь виявив велику милість. На восьмий день, коли хлопчика обрізували, усі хотіли назвати його на честь батька Захарією. Однак Єлизавета сказала: «Ні, він буде називатися Іваном». Усі дивувалися, тому що серед їхніх родичів не було такого імені.",
          "Тоді вони звернулися до Захарії. Він попросив дощечку і написав: «Іван — ім’я йому». Тієї ж миті Захарія знову зміг говорити та почав благословляти Бога. Люди дивувалися й запитували, ким же буде ця дитина. Захарія, сповнений Святого Духа, пророкував про спасіння, яке Бог готує Своєму народові, і про служіння Івана, що приготує шлях Господеві."
        ],
        "imageIndex": 1
      },
      {
        "title": "Різдво Спасителя",
        "paragraphs": [
          "Минув час. За наказом римського імператора Августа проводився перепис населення. Тому Йосип із Назарета пішов до Вифлеєма, міста Давида, разом із Марією, яка чекала дитину. Поки вони були там, настав час народити. Марія народила свого первістка, сповила Його й поклала в ясла, бо для них не знайшлося місця в заїзді.",
          "Тієї ночі неподалік пастухи стерегли свої отари в полі. Перед ними постав ангел Господній, і слава Божа осяяла їх. Пастухи злякалися, але ангел сказав: «Не бійтеся, бо я звіщаю вам велику радість, що буде всім людям: сьогодні в місті Давидовім народився вам Спаситель, Який є Христос Господь». Ангел дав їм знак: вони знайдуть Немовля в пелюшках, покладене в яслах.",
          "Раптом з’явилося численне небесне військо, що прославляло Бога. Коли ангели відійшли на небо, пастухи вирушили до Вифлеєма. Там вони знайшли Марію, Йосипа й Немовля, Яке лежало в яслах. Побачивши Його, вони розповіли людям про звістку ангела. Усі дивувалися почутому, а Марія зберігала ці слова у своєму серці й роздумувала над ними.",
          "Пастухи повернулися, славлячи й хвалячи Бога за все побачене та почуте. Так Господь почав здійснювати Свою давню обітницю про Спасителя."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Ким були Захарія та Єлизавета і чому вони молилися Богові?",
      "Що сталося із Захарією в храмі?",
      "Яке ім’я ангел звелів дати дитині Захарії?",
      "Чому Захарія не міг говорити і коли він знову заговорив?",
      "Що ангел Гавриїл сповістив Марії?",
      "Як Єлизавета зустріла Марію?",
      "Чому Йосип і Марія вирушили до Вифлеєма?",
      "Де народився Ісус і куди Марія поклала Його?",
      "Кому ангел першим сповістив радісну новину про народження Спасителя?",
      "Що робили пастухи після того, як побачили Ісуса?"
    ],
    "promise": {
      "body": "Бог не забуває Своїх обіцянок. Він пообіцяв послати Спасителя й виконав Своє слово, пославши Ісуса Христа. Ми можемо довіряти Йому навіть тоді, коли доводиться чекати.",
      "keyLine": "Бог не забуває Своїх обіцянок."
    },
    "connection": {
      "body": "Народження Івана було приготуванням дороги для Ісуса. Ангел сказав, що Син Марії буде царювати повіки й Його царству не буде кінця. Ісус прийшов не просто як дитина в яслах, а як обіцяний Месія — Спаситель від гріха.",
      "keyLine": "Ісус — обіцяний Месія, Спаситель від гріха."
    },
    "familyChallenge": {
      "intro": "Добра новина",
      "instruction": "Спробуйте гру «Добра новина»: кожен член сім’ї по черзі розповідає одному з інших одну частину історії — ангел у храмі, звістка Марії, народження Івана, шлях у Вифлеєм, пастухи й ясла. Наприкінці разом подякуйте Богові за Ісуса.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помоліться разом",
      "prayer": "Господи, дякуємо Тобі за Ісуса та за вірність Твоєму слову."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 23",
      "completed": "День 23 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 23",
    "title": "The Promised Savior",
    "subtitle": "Zechariah, Elizabeth, Mary, and the Birth of Jesus",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection to Jesus",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Luke 1:37; Matthew 1:21",
      "verse": "Luke 1:37 (NKJV) — “For with God nothing will be impossible.” Matthew 1:21 — Jesus came to save His people from their sins. (Summary.)"
    },
    "storyPages": [
      {
        "title": "The Angel Speaks to Zechariah",
        "paragraphs": [
          "This story tells of the events leading to the coming of Jesus Christ. There was a godly priest named Zechariah and his wife Elizabeth. They loved the Lord and tried to obey His commandments. They had grown old without having children, but they continued to pray and trust God. One day Zechariah went to Jerusalem to serve in the temple.",
          "The priests cast lots to determine who would enter the sanctuary to burn incense, and the lot fell to Zechariah. While the people prayed outside, he entered the temple. Suddenly an angel of the Lord appeared on the right side of the altar of incense. Zechariah was frightened. The angel said, “Do not be afraid, Zechariah, for your prayer is heard.”",
          "Elizabeth would bear him a son, and he was to call him John. Many would rejoice at his birth. John would be great in the sight of the Lord, filled with the Holy Spirit, turn many hearts back to God, and prepare a people for the Lord. Zechariah wondered how this was possible because both he and his wife were old.",
          "The angel replied that he was Gabriel, who stands in the presence of God and had been sent with this good news. Because Zechariah did not believe, he would be unable to speak until the promise came to pass. When Zechariah finally came out, the people wondered why he had stayed inside so long. He could only communicate by signs, and they realized that he had seen a vision.",
          "He returned home after his service. In due time Elizabeth became pregnant, and she rejoiced in God’s kindness toward her."
        ],
        "imageIndex": 0
      },
      {
        "title": "Good News for Mary",
        "paragraphs": [
          "In the sixth month of Elizabeth’s pregnancy, God sent Gabriel to Nazareth, to a virgin named Mary, who was engaged to Joseph, a descendant of David. The angel greeted her and said that the Lord was with her. Mary was troubled, but Gabriel reassured her: “Do not be afraid, Mary, for you have found favor with God.”",
          "Mary would have a Son and call His name Jesus. He would be great, called the Son of the Highest, receive the throne of David, and reign forever. Mary asked how this could happen, since she was a virgin. Gabriel explained that the Holy Spirit would come upon her and the power of the Highest would overshadow her; therefore the child would be holy, the Son of God.",
          "Nothing is impossible with God. Mary humbly answered that she was the Lord’s servant and was willing for His word to be fulfilled. Mary hurried to the hill country to visit Zechariah and Elizabeth. When Elizabeth heard Mary’s greeting, her unborn child leaped, and Elizabeth was filled with the Holy Spirit.",
          "She blessed Mary for believing what the Lord had promised. Mary also praised God for His mercy and mighty works. She stayed about three months before returning home."
        ],
        "imageIndex": 2
      },
      {
        "title": "The Birth of John",
        "paragraphs": [
          "When Elizabeth’s son was born, her neighbors and relatives celebrated God’s mercy. On the eighth day they wanted to name the boy Zechariah after his father, but Elizabeth said that his name would be John. Everyone was surprised. They asked Zechariah, and he wrote on a tablet, “His name is John.” Immediately he could speak again and began praising God.",
          "The neighbors were amazed. Filled with the Holy Spirit, Zechariah spoke about God’s promised salvation and the special work John would do to prepare the way of the Lord."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Birth of the Savior",
        "paragraphs": [
          "Later the Roman emperor Augustus ordered a census. Joseph traveled from Nazareth to Bethlehem, the city of David, with Mary, who was expecting a child. While they were there, the time came for her to give birth. She gave birth to her firstborn Son, wrapped Him in cloths, and laid Him in a manger because there was no room for them in the guest lodging.",
          "That night shepherds were watching their flocks in nearby fields. An angel of the Lord appeared, and the glory of the Lord shone around them. They were afraid, but the angel announced good news of great joy for all people: in David’s city a Savior had been born, Christ the Lord. They would find the baby wrapped in cloths and lying in a manger.",
          "Suddenly a multitude of heavenly angels praised God. When the angels departed, the shepherds went to Bethlehem. They found Mary, Joseph, and the baby lying in the manger. They told others what the angel had said, and everyone marveled. Mary treasured these words and pondered them in her heart. The shepherds returned praising and glorifying God for everything they had heard and seen.",
          "God was fulfilling His ancient promise of the Savior."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Who were Zechariah and Elizabeth, and what had they prayed for?",
      "What happened to Zechariah in the temple?",
      "What name did the angel give to Zechariah’s son?",
      "Why could Zechariah not speak, and when was his voice restored?",
      "What did Gabriel announce to Mary?",
      "How did Elizabeth welcome Mary?",
      "Why did Joseph and Mary travel to Bethlehem?",
      "Where was Jesus born and where was He laid?",
      "Who first received the angels’ message about the Savior’s birth?",
      "What did the shepherds do after seeing Jesus?"
    ],
    "promise": {
      "body": "God keeps His promises. He promised a Savior and fulfilled His word by sending Jesus Christ. We can trust Him even while we wait.",
      "keyLine": "God keeps His promises."
    },
    "connection": {
      "body": "John was born to prepare the way for Jesus. The angel said Mary’s Son would reign forever. Jesus came not merely as a baby in a manger but as the promised Messiah, our Savior from sin.",
      "keyLine": "Jesus is the promised Messiah, our Savior from sin."
    },
    "familyChallenge": {
      "intro": "Good News Relay",
      "instruction": "Play “Good News Relay.” Each family member tells one part of the story: the angel in the temple, the message to Mary, the birth of John, the journey to Bethlehem, and the shepherds at the manger. Finish by thanking God together for Jesus.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Pray together",
      "prayer": "Lord, thank You for Jesus and for keeping Your word."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 23",
      "completed": "Day 23 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 23",
    "title": "Обещанный Спаситель",
    "subtitle": "Захария, Елисавета, Мария и рождение Иисуса",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Луки 1:37; Матфея 1:21",
      "verse": "Луки 1:37 (Синодальный) — «ибо у Бога не останется бессильным никакое слово». Матфея 1:21 — Иисус спасёт Своих людей от их грехов. (Пересказ.)"
    },
    "storyPages": [
      {
        "title": "Ангел возвещает Захарии",
        "paragraphs": [
          "В этой истории мы узнаём о событиях, связанных с приходом на землю Господа Иисуса Христа. Жил благочестивый священник по имени Захария со своей женой Елисаветой. Они любили Господа и стремились исполнять Его повеления. Они состарились, но детей у них не было. И всё же они продолжали молиться Богу и надеяться на Него.",
          "Однажды Захария пришёл в Иерусалим служить в храме. Священники бросали жребий, чтобы определить, кто должен войти во святилище для каждения фимиама. Жребий выпал Захарии. Пока народ молился снаружи, он вошёл в храм. Неожиданно справа от жертвенника кадильного появился ангел Господень. Захария испугался.",
          "Ангел сказал: «Не бойся, Захария, ибо услышана молитва твоя». Елисавета родит ему сына, которого следует назвать Иоанном. Многие возрадуются его рождению. Иоанн будет велик перед Господом, исполнится Святого Духа, обратит многих к Богу и приготовит народ к приходу Мессии. Захария спросил, как это может случиться, ведь они с женой уже стары.",
          "Ангел ответил, что он — Гавриил, предстоящий пред Богом, и послан возвестить эту радостную весть. Поскольку Захария не поверил этим словам, он не сможет говорить до их исполнения. Когда Захария вышел из храма, люди удивлялись, почему он так задержался. Он мог объясняться только знаками, и народ понял, что он видел видение.",
          "Закончив своё служение, Захария вернулся домой. Вскоре Елисавета зачала ребёнка и радовалась Божьей милости."
        ],
        "imageIndex": 0
      },
      {
        "title": "Радостная весть Марии",
        "paragraphs": [
          "На шестом месяце беременности Елисаветы Бог послал Гавриила в Назарет к деве по имени Мария, обручённой с Иосифом, потомком Давида. Ангел приветствовал её и сказал, что Господь с нею. Мария смутилась, но ангел успокоил её: «Не бойся, Мария, ибо Ты обрела благодать у Бога». Мария родит Сына и наречёт Ему имя Иисус.",
          "Он будет велик, наречётся Сыном Всевышнего, получит престол Давида и будет царствовать вовеки. Мария спросила, как это возможно, ведь она ещё не жила с мужем. Гавриил объяснил, что Святой Дух найдёт на неё и сила Всевышнего осенит её, поэтому Младенец будет свят и наречётся Сыном Божиим. У Бога не останется бессильным никакое слово.",
          "Мария смиренно согласилась исполнить волю Господа. Мария отправилась в нагорную страну к Захарии и Елисавете. Как только Елисавета услышала её приветствие, младенец взыграл в её чреве, а сама Елисавета исполнилась Святого Духа. Она благословила Марию за её веру в Божье обещание. Мария прославила Господа за Его милость и великие дела.",
          "Примерно через три месяца она возвратилась домой."
        ],
        "imageIndex": 2
      },
      {
        "title": "Рождение Иоанна",
        "paragraphs": [
          "Когда у Елисаветы родился сын, родные и соседи радовались вместе с нею. На восьмой день мальчику хотели дать имя Захария в честь отца. Но Елисавета сказала: «Нет, назвать его Иоанном». Все удивились, ведь никто из родственников так не назывался. Они обратились к Захарии. Он попросил дощечку и написал: «Иоанн имя ему».",
          "Тотчас он снова заговорил и стал благословлять Бога. Люди дивились и спрашивали, кем будет этот ребёнок. Исполненный Святого Духа, Захария пророчествовал о Божьем спасении и о том, как Иоанн приготовит путь Господу."
        ],
        "imageIndex": 1
      },
      {
        "title": "Рождение Спасителя",
        "paragraphs": [
          "Спустя некоторое время римский император Август велел провести перепись. Поэтому Иосиф отправился из Назарета в Вифлеем, город Давида, вместе с Марией, ожидавшей ребёнка. Пока они находились там, пришло время родов. Мария родила Сына Первенца, спеленала Его и положила в ясли, потому что для них не нашлось места в гостинице.",
          "Ночью неподалёку пастухи стерегли свои стада. Им явился ангел Господень, и слава Господня осияла их. Пастухи испугались, но ангел возвестил великую радость для всех людей: в городе Давидовом родился Спаситель, Который есть Христос Господь. Они найдут Младенца в пеленах, лежащего в яслях. Вдруг появилось множество небесного воинства, славящего Бога.",
          "Когда ангелы отошли на небо, пастухи поспешили в Вифлеем. Там они нашли Марию, Иосифа и Младенца, лежащего в яслях. Они рассказали о словах ангела, и все слушавшие удивлялись. Мария сохраняла эти слова, слагая их в сердце. Пастухи возвратились, славя и хваля Бога за всё увиденное и услышанное. Господь исполнял Своё давнее обещание о Спасителе."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Кем были Захария и Елисавета и о чём они молились?",
      "Что произошло с Захарией в храме?",
      "Какое имя ангел велел дать сыну Захарии?",
      "Почему Захария не мог говорить и когда вновь заговорил?",
      "Какую весть Гавриил сообщил Марии?",
      "Как Елисавета встретила Марию?",
      "Почему Иосиф и Мария отправились в Вифлеем?",
      "Где родился Иисус и куда Его положили?",
      "Кто первым услышал весть о рождении Спасителя?",
      "Что сделали пастухи после встречи с Иисусом?"
    ],
    "promise": {
      "body": "Бог исполняет Свои обещания. Он обещал Спасителя и исполнил Своё слово, послав Иисуса Христа. Мы можем доверять Ему даже тогда, когда приходится ждать.",
      "keyLine": "Бог исполняет Свои обещания."
    },
    "connection": {
      "body": "Иоанн родился, чтобы приготовить путь Иисусу. Ангел возвестил, что Сын Марии будет царствовать вечно. Иисус пришёл не просто как Младенец в яслях, а как обещанный Мессия — Спаситель от греха.",
      "keyLine": "Иисус — обещанный Мессия, Спаситель от греха."
    },
    "familyChallenge": {
      "intro": "Добрая весть",
      "instruction": "Сыграйте в «Добрую весть»: каждый член семьи рассказывает одну часть истории — ангел в храме, весть Марии, рождение Иоанна, дорога в Вифлеем, пастухи у яслей. В конце вместе поблагодарите Бога за Иисуса.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, благодарим Тебя за Иисуса и за верность Твоему слову."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 23",
      "completed": "День 23 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

