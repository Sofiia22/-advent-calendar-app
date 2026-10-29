import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_EIGHTEEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_EIGHTEEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day18/story/01-hezekiah-prayer.jpg"),
  require("../assets/advent/day18/story/02-angel.jpg"),
  require("../assets/advent/day18/story/03-jerusalem.jpg"),
  require("../assets/advent/day18/story/04-exile.jpg"),
];
export const DAY_EIGHTEEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 18",
    "title": "Надія на Господа — історія Єзекії",
    "subtitle": "Довіра Богові та доля Юдеї",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "2 Царів 18:5",
      "verse": "«На Господа, Бога Ізраїлевого, він надіявся»."
    },
    "storyPages": [
      {
        "title": "Цар, котрий покладав надію на Господа",
        "paragraphs": [
          "Тепер я розповім вам про іншого царя, царя народу юдейського, котрого називали Єзекією. Ви пам’ятаєте, що після царя Соломона, сина Давида, царство розділилося на Ізраїльське та Юдейське. Сьогодні ми розмовлятимемо про царя Юдейського. Єзекії було двадцять п’ять років, коли він зацарював у Єрусалимі, і царював він двадцять дев’ять років. Він робив бажане для Господа, боровся з ідолопоклонством: усував пагірки, нищив священні стовпи, зрубував Астарту та розбив мідного змія, якому люди кадили. Він покладав надію на Бога, і такого, як він, не було поміж царями юдейськими.",
          "Єзекія прихилився до Господа і не відступав від Нього, виконував заповіді, котрі Господь дав Мойсеєві. Господь був із ним, і Єзекія діяв розсудливо. Він не став підкорятися цареві асирійському й перестав служити йому. На чотирнадцятому році царювання Єзекії асирійський цар Санхерів пішов війною проти укріплених міст Юдеї та здобув їх. Єзекія передав цареві Асирії: «Завинив я; відступи від мене, і що накладеш на мене, те понесу». Санхерів зажадав триста талантів срібла і тридцять талантів золота.",
          "Єзекія віддав срібло з Дому Господнього та царських скарбниць. Він навіть зняв золото з дверей і одвірків храму, які сам обклав золотом, і віддав його асирійському цареві. Та цар Асирії не заспокоївся: послав військо до Єрусалима і вимагав, щоб місто здалося, хоча Єзекія вже сплатив данину. Посланці асирійського царя глузували з надії Єзекії на Господа і переконували народ, що ніхто не врятує їх від сили Асирії.",
          "Цар Єзекія, котрий покладав надію на Господа, послав слуг до пророка Ісаї. Ісая передав слова Господа: «Не бійся слів, які ти чув, якими слуги царя асирійського зневажали Мене. Я зроблю так, що він почує звістку та повернеться у свою землю, і там упаде від меча».",
          "Асирійський цар і далі пихато ставився до віри Єзекії. Єзекія молився, а Ісая, син Амосів, передав йому Господню відповідь: «Я почув те, про що ти молився до Мене щодо Санхеріва. Я обороню це місто, щоб урятувати його заради Себе і заради Давида, раба Мого»."
        ],
        "imageIndex": 0
      },
      {
        "title": "Господь захищає Єрусалим",
        "paragraphs": [
          "І сталося тієї ночі: ангел Господній уразив в асирійському таборі сто вісімдесят п’ять тисяч. Уранці люди побачили мертві тіла. Санхерів повернувся до Ніневії. Згодом, коли він поклонявся у храмі свого бога, двоє його синів убили його мечем і втекли до краю Араратського.",
          "Так Господь зупинив пихатого царя Асирії, котрий покладав надію на власну силу та зброю."
        ],
        "imageIndex": 1
      },
      {
        "title": "Останній цар юдейський",
        "paragraphs": [
          "Седекії було двадцять один рік, коли він зацарював у Єрусалимі, і царював він одинадцять років. Він робив зло в Господніх очах, і гнів Господній був над Юдеєю та Єрусалимом. Седекія і народ не покладали надії на Господа, як Єзекія. Через непослух і відступництво Бог допустив, щоб вони опинилися під владою вавилонського царя Навуходоносора.",
          "Навуходоносор із військом прийшов до Єрусалима, оточив його та тримав в облозі. У місті почався такий голод, що людям бракувало хліба. Коли місто було проламане, Седекія спробував утекти, але його схопили та привели до вавилонського царя в Рівлу, де його судили. Синів Седекії вбили в нього на очах, а його самого осліпили, закували в кайдани й відвели до Вавилону.",
          "Після цього начальник царської охорони, слуга вавилонського царя, прийшов до Єрусалима і спалив Дім Господній та інші будівлі, зруйнував стіни міста. Він забрав із храму дорогоцінні речі, зокрема срібні та золоті посудини, і вивіз їх до Вавилону."
        ],
        "imageIndex": 2
      },
      {
        "title": "Зруйнований Єрусалим і полон",
        "paragraphs": [
          "Багатьох жителів Юдеї переселили до Вавилону. Так царство Юдейське зазнало спустошення: народ залишив вірність істинному Богові, Який вивів його з єгипетського рабства, і звернувся до ідолів."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Скільки років було Єзекії, коли він став царем, і скільки він царював?",
      "Що Єзекія зробив для боротьби з ідолопоклонством?",
      "На Кого покладав надію Єзекія?",
      "Хто напав на міста Юдеї і яку данину вимагав?",
      "До кого звернувся Єзекія під час небезпеки?",
      "Як Господь відповів через пророка Ісаю?",
      "Що сталося з асирійським військом?",
      "Як звали останнього царя Юдеї?",
      "Що сталося з Єрусалимом і його народом?"
    ],
    "promise": {
      "body": "Господь почув молитву Єзекії та пообіцяв захистити Єрусалим (2 Царів 19:20, 34). Бог вірний Своєму слову; ми можемо звертатися до Нього в молитві, довіряючи Його мудрості.",
      "keyLine": "Бог вірний Своєму слову; ми можемо довіряти Його мудрості."
    },
    "connection": {
      "body": "Єзекія довіряв Господу, але жоден земний цар не міг назавжди врятувати людей від гріха. Ісус Христос, обіцяний Нащадок Давида, є досконалим Царем. Своєю смертю й воскресінням Він переміг гріх і смерть; Його Царству немає кінця.",
      "keyLine": "Ісус Христос — досконалий Цар, і Його Царству немає кінця."
    },
    "familyChallenge": {
      "intro": "Поговоріть усією сім’єю: що найбільше тривожить кожного з вас?",
      "instruction": "До кого ви звертаєтеся по допомогу? Як на практиці можна виявляти довіру Богові? Після розмови нехай кожен назве одну потребу й помоліться за неї разом.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Головна думка: ми не контролюємо все, але можемо довіряти Господу.",
      "ending": "Помоліться разом",
      "prayer": "Господи, навчи нас довіряти Тобі й приносити Тобі наші тривоги."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 18",
      "completed": "День 18 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 18",
    "title": "Trusting in the Lord — The Story of Hezekiah",
    "subtitle": "Trusting God and the Fate of Judah",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "2 Kings 18:5 (NKJV, excerpt)",
      "verse": "“He trusted in the LORD God of Israel.”"
    },
    "storyPages": [
      {
        "title": "The King Who Trusted in the Lord",
        "paragraphs": [
          "Now I will tell you about another king, a king of the people of Judah, named Hezekiah. You remember that after King Solomon, David’s son, the kingdom was divided into Israel and Judah. Today we will talk about a king of Judah. Hezekiah was twenty-five years old when he became king in Jerusalem, and he reigned twenty-nine years. He did what was right in the sight of the Lord and opposed idol worship. He removed the high places, broke the sacred pillars, cut down the wooden image, and shattered the bronze serpent to which people had been burning incense. He trusted God, and among the kings of Judah there was no one like him in this respect.",
          "Hezekiah held fast to the Lord and did not turn away from Him. He obeyed the commandments God had given through Moses. The Lord was with him, and he acted wisely. He rebelled against the king of Assyria and no longer served him. In the fourteenth year of Hezekiah’s reign, Sennacherib, king of Assyria, marched against the fortified cities of Judah and captured them. Hezekiah sent him this message: “I have done wrong. Turn away from me; whatever you impose on me I will pay.” Sennacherib demanded three hundred talents of silver and thirty talents of gold.",
          "Hezekiah gave him the silver found in the house of the Lord and the royal treasuries. He even stripped the gold from the doors and doorposts of the temple, which he had previously overlaid with gold, and gave it to the Assyrian king. But the king of Assyria was not satisfied. He sent his forces to Jerusalem and demanded that the city surrender, although Hezekiah had already paid the tribute. The Assyrian representatives mocked Hezekiah’s trust in the Lord and told the people that no one could save them from Assyria’s power.",
          "King Hezekiah, who trusted in the Lord, sent his servants to the prophet Isaiah. Isaiah delivered God’s message: “Do not be afraid of the words you have heard, with which the servants of the king of Assyria have blasphemed Me. I will make him hear a report and return to his own land, and there he will fall by the sword.”",
          "The Assyrian king continued to mock Hezekiah’s faith. Hezekiah prayed, and Isaiah, the son of Amoz, brought him the Lord’s answer: “I have heard your prayer concerning Sennacherib. I will defend this city and save it for My own sake and for the sake of David My servant.”"
        ],
        "imageIndex": 0
      },
      {
        "title": "The Lord Defends Jerusalem",
        "paragraphs": [
          "That night, the angel of the Lord struck down one hundred and eighty-five thousand in the Assyrian camp. In the morning, people saw the dead bodies. Sennacherib returned to Nineveh. Later, while worshiping in the temple of his god, he was killed with a sword by two of his sons, who fled to the land of Ararat.",
          " Thus the Lord stopped the proud Assyrian king, who had trusted in his own strength and weapons."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Last King of Judah",
        "paragraphs": [
          "Zedekiah was twenty-one years old when he became king in Jerusalem, and he reigned eleven years. He did evil in the sight of the Lord, and the Lord’s anger was upon Judah and Jerusalem. Zedekiah and the people did not trust the Lord as Hezekiah had. Because of their disobedience and unfaithfulness, God allowed them to fall under the power of Nebuchadnezzar, king of Babylon.",
          "Nebuchadnezzar came with his army, surrounded Jerusalem, and besieged it. The famine in the city became so severe that people had no bread. When the city walls were breached, Zedekiah tried to escape, but he was captured and brought before the king of Babylon at Riblah, where judgment was pronounced. Zedekiah’s sons were killed before his eyes. Then he was blinded, bound with bronze fetters, and taken to Babylon.",
          "Afterward, the commander of the royal guard, a servant of the Babylonian king, came to Jerusalem. He burned the house of the Lord and other buildings and broke down the city walls. The valuable things of the temple, including silver and gold vessels, were taken away to Babylon."
        ],
        "imageIndex": 2
      },
      {
        "title": "Jerusalem Destroyed and the Exile",
        "paragraphs": [
          "Many people of Judah were carried away into exile in Babylon. Thus the kingdom of Judah was devastated: the people had turned away from the true God, who had brought them out of slavery in Egypt, and had worshiped idols."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "How old was Hezekiah when he became king, and how many years did he reign?",
      "How did Hezekiah oppose idol worship?",
      "In whom did Hezekiah trust?",
      "Who attacked Judah’s cities, and what tribute did he demand?",
      "To whom did Hezekiah turn in danger?",
      "What did the Lord say through Isaiah?",
      "What happened to the Assyrian army?",
      "What was the name of Judah’s last king?",
      "What happened to Jerusalem and its people?"
    ],
    "promise": {
      "body": "The Lord heard Hezekiah’s prayer and promised to defend Jerusalem (2 Kings 19:20, 34). God is faithful to His word; we can pray to Him and trust His wisdom.",
      "keyLine": "God is faithful to His word; we can trust His wisdom."
    },
    "connection": {
      "body": "Hezekiah trusted the Lord, but no earthly king could save people from sin forever. Jesus Christ, the promised descendant of David, is the perfect King. Through His death and resurrection He defeated sin and death, and His Kingdom will never end.",
      "keyLine": "Jesus Christ is the perfect King, and His Kingdom will never end."
    },
    "familyChallenge": {
      "intro": "Talk together as a family: What worries each of you most?",
      "instruction": "Whom do you turn to for help? What does trusting God look like in daily life? Let each person share one need and pray about it together.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Big idea: we cannot control everything, but we can trust the Lord.",
      "ending": "Pray together",
      "prayer": "Lord, teach us to trust You and bring our worries to You."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 18",
      "completed": "Day 18 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 18",
    "title": "Упование на Господа — история Езекии",
    "subtitle": "Доверие Богу и судьба Иудеи",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "4 Царств 18:5 (Синодальный перевод, фрагмент)",
      "verse": "«На Господа, Бога Израилева, уповал он»."
    },
    "storyPages": [
      {
        "title": "Царь, который уповал на Господа",
        "paragraphs": [
          "Теперь я расскажу вам о другом царе, царе иудейского народа, которого звали Езекией. Вы помните, что после царя Соломона, сына Давида, царство разделилось на Израильское и Иудейское. Сегодня мы будем говорить о царе Иудейском. Езекии было двадцать пять лет, когда он стал царём в Иерусалиме, и царствовал он двадцать девять лет. Он делал угодное Господу и боролся с идолопоклонством: отменил высоты, сокрушил статуи, срубил дубраву и истребил медного змея, которому народ кадил. Он уповал на Бога, и в этом ему не было подобного среди царей Иудейских.",
          "Езекия прилепился к Господу и не отступал от Него. Он исполнял заповеди, которые Господь дал через Моисея. Господь был с ним, и Езекия поступал благоразумно. Он восстал против царя Ассирийского и перестал служить ему. На четырнадцатом году царствования Езекии ассирийский царь Сеннахирим пошёл войной против укреплённых городов Иудеи и взял их. Езекия передал ему: «Виновен я; отойди от меня; что наложишь на меня, я внесу». Сеннахирим потребовал триста талантов серебра и тридцать талантов золота.",
          "Езекия отдал серебро из дома Господня и царских сокровищниц. Он даже снял золото с дверей и дверных косяков храма, которые сам прежде позолотил, и отдал ассирийскому царю. Но царь Ассирийский не успокоился. Он послал войско к Иерусалиму и потребовал, чтобы город сдался, хотя Езекия уже заплатил дань. Ассирийские посланники насмехались над упованием Езекии на Господа и убеждали народ, что никто не спасёт его от силы Ассирии.",
          "Царь Езекия, который уповал на Господа, послал слуг к пророку Исаии. Исаия передал слова Господа: «Не бойся слов, которые ты слышал, которыми слуги царя Ассирийского хулили Меня. Я сделаю так, что он услышит весть и возвратится в свою землю, и там падёт от меча».",
          "Ассирийский царь продолжал надменно относиться к вере Езекии. Езекия молился, и Исаия, сын Амосов, передал ему ответ Господа: «Я услышал то, о чём ты молился Мне относительно Сеннахирима. Я буду охранять этот город, чтобы спасти его ради Себя и ради Давида, раба Моего»."
        ],
        "imageIndex": 0
      },
      {
        "title": "Господь защищает Иерусалим",
        "paragraphs": [
          "И случилось в ту ночь: ангел Господень поразил в ассирийском стане сто восемьдесят пять тысяч. Утром люди увидели мёртвые тела. Сеннахирим вернулся в Ниневию. Позже, когда он поклонялся в храме своего бога, двое его сыновей убили его мечом и убежали в землю Араратскую.",
          " Так Господь остановил гордого царя Ассирии, который полагался на собственную силу и оружие."
        ],
        "imageIndex": 1
      },
      {
        "title": "Последний царь Иудейский",
        "paragraphs": [
          "Седекии был двадцать один год, когда он воцарился в Иерусалиме, и царствовал он одиннадцать лет. Он делал неугодное в очах Господних, и гнев Господа был над Иудеей и Иерусалимом. Седекия и народ не уповали на Господа, как Езекия. Из-за их непослушания и неверности Бог допустил, чтобы они оказались под властью Навуходоносора, царя Вавилонского.",
          "Навуходоносор с войском пришёл к Иерусалиму, окружил его и держал в осаде. В городе начался настолько сильный голод, что людям не хватало хлеба. Когда в стене города был сделан пролом, Седекия попытался бежать, но его схватили и привели к царю Вавилонскому в Ривлу, где над ним произнесли суд. Сыновей Седекии убили на его глазах, а его самого ослепили, заковали в медные оковы и отвели в Вавилон.",
          "После этого начальник царских телохранителей, слуга вавилонского царя, пришёл в Иерусалим и сжёг дом Господень и другие здания, разрушил городские стены. Ценные предметы храма, в том числе серебряные и золотые сосуды, были увезены в Вавилон."
        ],
        "imageIndex": 2
      },
      {
        "title": "Разрушенный Иерусалим и плен",
        "paragraphs": [
          "Многих жителей Иудеи переселили в Вавилон. Так Иудейское царство было опустошено: народ отступил от истинного Бога, Который вывел его из рабства Египетского, и стал поклоняться идолам."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Сколько лет было Езекии, когда он стал царём, и сколько лет он царствовал?",
      "Как Езекия боролся с идолопоклонством?",
      "На Кого уповал Езекия?",
      "Кто напал на города Иудеи и какую дань потребовал?",
      "К кому обратился Езекия во время опасности?",
      "Что Господь ответил через пророка Исаию?",
      "Что случилось с ассирийским войском?",
      "Как звали последнего царя Иудеи?",
      "Что произошло с Иерусалимом и его народом?"
    ],
    "promise": {
      "body": "Господь услышал молитву Езекии и обещал защитить Иерусалим (4 Царств 19:20, 34). Бог верен Своему слову; мы можем обращаться к Нему в молитве и доверять Его мудрости.",
      "keyLine": "Бог верен Своему слову; мы можем доверять Его мудрости."
    },
    "connection": {
      "body": "Езекия доверял Господу, но ни один земной царь не мог навсегда спасти людей от греха. Иисус Христос, обещанный Потомок Давида, — совершенный Царь. Своей смертью и воскресением Он победил грех и смерть, и Его Царству не будет конца.",
      "keyLine": "Иисус Христос — совершенный Царь, и Его Царству не будет конца."
    },
    "familyChallenge": {
      "intro": "Поговорите всей семьёй: что больше всего беспокоит каждого из вас?",
      "instruction": "К кому вы обращаетесь за помощью? Как на деле проявлять доверие Богу? Пусть каждый назовёт одну нужду, и помолитесь о ней вместе.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Главная мысль: мы не можем контролировать всё, но можем уповать на Господа.",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, научи нас доверять Тебе и приносить Тебе наши тревоги."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 18",
      "completed": "День 18 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

