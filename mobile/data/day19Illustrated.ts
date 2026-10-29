import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_NINETEEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_NINETEEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day19-daniel/story/01-golden-image.jpg"),
  require("../assets/advent/day19-daniel/story/02-furnace.jpg"),
  require("../assets/advent/day19-daniel/story/03-writing.jpg"),
  require("../assets/advent/day19-daniel/story/04-interpretation.jpg"),
];
export const DAY_NINETEEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 19",
    "title": "Вірність Богові — вогняна піч і напис на стіні",
    "subtitle": "Історії Даниїла 3 і 5",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Даниїла 3:17–18; 5:22–23",
      "verse": "Прочитайте разом зазначені уривки з Біблії."
    },
    "storyPages": [
      {
        "title": "Золотий ідол",
        "paragraphs": [
          "Цар Навуходоносор не знав істинного Бога. Він був язичником і вирішив зробити великого золотого ідола заввишки шістдесят ліктів і завширшки шість ліктів. Цього ідола поставили на полі Деїр поблизу Вавилона. Цар послав своїх слуг скликати всіх начальників та урядовців на урочисте відкриття. Коли всі зібралися, оголосили наказ царя: як тільки залунають музичні інструменти, усі повинні впасти й поклонитися золотому ідолу.",
          "Хто не поклониться, того вкинуть до розжареної печі. У Вавилоні жили три юдейські чоловіки — Седрах, Мисах і Авденаго. Вони служили живому Богові й тому не поклонилися золотому ідолу. Про це донесли Навуходоносорові. Цар викликав їх і запитав, чому вони не виконали його наказу. Він ще раз пригрозив вогненною піччю.",
          "Седрах, Мисах і Авденаго відповіли цареві: «Немаємо потреби відповідати тобі. Наш Бог, Якому ми служимо, може врятувати нас із печі розжареної вогнем і від твоєї руки, царю. Та, якщо і не буде цього, то знай, царю, що ми твоїм богам служити не будемо і золотому ідолу не поклонимося»."
        ],
        "imageIndex": 0
      },
      {
        "title": "Бог рятує у вогняній печі",
        "paragraphs": [
          "Тоді цар дуже розгнівався й наказав розпалити піч у сім разів сильніше. Найсильніші воїни зв’язали трьох чоловіків та вкинули їх у вогонь. Полум’я було таким гарячим, що вбило воїнів, які підводили їх до печі. Раптом цар підвівся в подиві: замість трьох він бачив чотирьох чоловіків, які вільно ходили серед вогню й не мали жодної шкоди.",
          "Вигляд четвертого був подібний до Божого сина. Цар покликав Седраха, Мисаха й Авденаго вийти з печі. Усі побачили, що вогонь не мав влади над їхніми тілами, не обпалив волосся, не пошкодив одежі, і навіть запаху вогню не було. Навуходоносор благословив Бога Седраха, Мисаха й Авденаго, Який послав Свого ангела і врятував слуг, що покладалися на Нього.",
          "Цар визнав, що вони воліли віддати свої тіла вогню, але не служити іншому богові, крім свого Бога. Він наказав шанувати їхнього Бога і підніс цих трьох чоловіків у Вавилонській області."
        ],
        "imageIndex": 1
      },
      {
        "title": "Напис на стіні",
        "paragraphs": [
          "Після Навуходоносора у Вавилоні царював Валтасар. Він улаштував великий бенкет для тисячі своїх вельмож і пив перед ними вино. Цар наказав принести золотий і срібний посуд, який Навуходоносор забрав із храму в Єрусалимі, щоб із нього пили цар, його вельможі, жінки та наложниці. Вони пили вино й славили богів із золота, срібла, міді, заліза, дерева та каменю.",
          "Тієї ж миті з’явилися пальці людської руки й почали писати на стіні царського палацу, навпроти світильника. Цар побачив руку, яка писала, і дуже злякався: його обличчя змінилося, думки його збентежилися, коліна затремтіли. Він наказав покликати мудреців Вавилона, щоб вони прочитали напис і пояснили його, та ніхто не зміг."
        ],
        "imageIndex": 2
      },
      {
        "title": "Даниїл пояснює напис",
        "paragraphs": [
          "Цариця згадала про Даниїла, в якому, за її словами, був дух мудрості. Даниїла привели до царя. Валтасар пообіцяв одягнути його в багряницю, дати золотий ланцюг і зробити третім володарем у царстві, якщо він пояснить напис. Даниїл відповів, що цар може залишити подарунки собі, однак він прочитає напис і розповість його значення.",
          "Даниїл нагадав Валтасарові, що Всевишній Бог дав Навуходоносорові царство, велич і славу. Коли ж серце царя загордилося, він був упокорений, доки не визнав, що Всевишній панує над людським царством. Валтасар знав цю історію, але не впокорив свого серця. Він звеличився проти Господа неба, пив із посуду Його храму і славив бездушних ідолів, а Бога, у руці Якого його дихання й усі шляхи, не прославив.",
          "Тому Бог послав руку, що написала на стіні: «МЕНЕ, МЕНЕ, ТЕКЕЛ, УПАРСІН». Даниїл пояснив: МЕНЕ — Бог обчислив дні царства і поклав йому кінець; ТЕКЕЛ — царя зважено на вазі й знайдено легким; ПЕРЕС — царство поділене й віддане мідянам та персам. Валтасар виконав обіцянку щодо Даниїла, хоча почув страшний присуд.",
          "Тієї самої ночі Валтасара, царя халдейського, було вбито. Його царство перейшло до іншого володаря."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Чому Навуходоносор наказав усім поклонитися золотому ідолу?",
      "Що відповіли Седрах, Мисах і Авденаго?",
      "Що цар побачив усередині печі?",
      "Чому Валтасар злякався напису на стіні?",
      "Які слова були написані та що вони означали?",
      "Чим відрізняється довіра живому Богові від поклоніння ідолам?"
    ],
    "promise": {
      "body": "Бог здатний врятувати Своїх людей, але ми покликані залишатися вірними Йому незалежно від обставин (Дан. 3:17–18). Це приклад віри, а не обіцянка, що кожне випробування завершиться чудесним порятунком.",
      "keyLine": "Ми покликані залишатися вірними Богові незалежно від обставин."
    },
    "connection": {
      "body": "Седрах, Мисах і Авденаго не зрадили Бога навіть перед загрозою смерті. Валтасар, навпаки, знав про Божу владу, але не впокорився. Ісус Христос досконало залишився вірним Отцеві. Через Нього ми отримуємо прощення та нове серце, щоб шанувати Бога понад усе.",
      "keyLine": "Ісус Христос досконало залишився вірним Отцеві."
    },
    "familyChallenge": {
      "intro": "Вірність і смирення",
      "instruction": "Складіть удома дві короткі фрази: «Я довірятиму Богові, навіть якщо…» і «Я прославлю Бога сьогодні, коли…». Нехай кожен доповнить їх, а потім помоліться разом про вірність і смирення.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помоліться разом",
      "prayer": "Господи, навчи нас вірності та смирення."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 19",
      "completed": "День 19 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 19",
    "title": "Faithful to God — The Furnace and the Writing on the Wall",
    "subtitle": "The Stories of Daniel 3 and 5",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection to Jesus",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Daniel 3:17–18; 5:22–23",
      "verse": "Read these Bible passages together."
    },
    "storyPages": [
      {
        "title": "The Golden Image",
        "paragraphs": [
          "King Nebuchadnezzar did not know the true God. He worshiped false gods and decided to make an enormous image of gold, sixty cubits high and six cubits wide. The image was set up on the plain of Dura near Babylon. The king called together the rulers and officials for the dedication. When everyone gathered, a command was announced: as soon as the musical instruments sounded, everyone had to fall down and worship the golden image.",
          "Anyone who refused would be thrown into a burning fiery furnace. Three Jewish men in Babylon—Shadrach, Meshach, and Abed-Nego—served the living God, so they would not bow to the image. Their refusal was reported to Nebuchadnezzar. The king summoned them, demanded an explanation, and again threatened them with the furnace.",
          "Shadrach, Meshach, and Abed-Nego answered that the God they served was able to deliver them from the furnace and from the king’s hand. But even if He did not, they would not serve the king’s gods or worship the golden image."
        ],
        "imageIndex": 0
      },
      {
        "title": "God Delivers in the Furnace",
        "paragraphs": [
          "The king became furious and ordered the furnace heated seven times hotter than usual. His strongest soldiers bound the three men and threw them into the flames. The fire was so fierce that it killed the soldiers who carried them. Suddenly the king rose in amazement. Instead of three men, he saw four walking freely inside the fire, unharmed; the fourth looked like a son of the gods.",
          "He called Shadrach, Meshach, and Abed-Nego out. Everyone saw that the fire had not harmed their bodies or hair or clothes; they did not even smell of smoke. Nebuchadnezzar blessed the God of Shadrach, Meshach, and Abed-Nego, who had sent His angel to deliver His servants who trusted Him. He acknowledged their willingness to surrender their bodies rather than worship another god, commanded respect for their God, and promoted the three men in Babylon."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Writing on the Wall",
        "paragraphs": [
          "Later Belshazzar ruled in Babylon. He held a great feast for a thousand of his lords and drank wine before them. He ordered gold and silver vessels taken from the temple in Jerusalem to be brought so he, his nobles, wives, and concubines could drink from them. They drank and praised gods made of gold, silver, bronze, iron, wood, and stone.",
          "At that very moment, the fingers of a human hand appeared and wrote on the wall of the royal palace opposite the lampstand. The king watched the hand and was terrified. His face grew pale, his thoughts troubled him, and his knees shook. He summoned Babylon’s wise men to read and explain the writing, but none could do so."
        ],
        "imageIndex": 2
      },
      {
        "title": "Daniel Explains the Writing",
        "paragraphs": [
          "The queen remembered Daniel, a man known for extraordinary wisdom. Daniel was brought before Belshazzar, who promised him purple clothing, a gold chain, and authority as third ruler in the kingdom if he explained the writing. Daniel told the king to keep his rewards but said he would read and interpret the words.",
          "Daniel reminded Belshazzar that the Most High God had given Nebuchadnezzar his kingdom, majesty, and glory. When that king became proud, he was humbled until he recognized God’s rule. Belshazzar knew this story but had not humbled his heart. He exalted himself against the Lord of heaven, used the temple vessels to praise idols, and did not honor the God who held his breath and all his ways.",
          "Therefore God sent the hand to write: “MENE, MENE, TEKEL, UPHARSIN.” Daniel explained: MENE—God had numbered the days of the kingdom and brought it to an end; TEKEL—the king had been weighed and found wanting; PERES—the kingdom was divided and given to the Medes and Persians. Belshazzar gave Daniel the promised honors even after hearing the judgment.",
          "That same night Belshazzar, king of the Chaldeans, was killed, and the kingdom passed to another ruler."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Why did Nebuchadnezzar command everyone to worship the image?",
      "What did Shadrach, Meshach, and Abed-Nego answer?",
      "What did the king see inside the furnace?",
      "Why was Belshazzar terrified by the writing?",
      "What words were written, and what did they mean?",
      "How is trusting the living God different from worshiping idols?"
    ],
    "promise": {
      "body": "God is able to deliver His people, yet we are called to remain faithful whatever happens (Daniel 3:17–18). This is an example of faith, not a promise that every trial will end in a miraculous rescue.",
      "keyLine": "We are called to remain faithful to God whatever happens."
    },
    "connection": {
      "body": "Shadrach, Meshach, and Abed-Nego refused to deny God, even when threatened with death. Belshazzar knew of God’s power but refused to humble himself. Jesus Christ remained perfectly faithful to the Father. Through Him we receive forgiveness and a new heart to honor God above everything.",
      "keyLine": "Jesus Christ remained perfectly faithful to the Father."
    },
    "familyChallenge": {
      "intro": "Faithfulness and Humility",
      "instruction": "As a family, complete two sentences: “I will trust God even if…” and “Today I will honor God when…”. Let each person answer and then pray together for faithfulness and humility.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Pray together",
      "prayer": "Lord, teach us faithfulness and humility."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 19",
      "completed": "Day 19 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 19",
    "title": "Верность Богу — огненная печь и надпись на стене",
    "subtitle": "Истории Даниила 3 и 5",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Даниила 3:17–18; 5:22–23",
      "verse": "Прочитайте вместе указанные отрывки из Библии."
    },
    "storyPages": [
      {
        "title": "Золотой истукан",
        "paragraphs": [
          "Царь Навуходоносор не знал истинного Бога. Он поклонялся ложным богам и решил сделать огромного золотого истукана высотой в шестьдесят локтей и шириной в шесть локтей. Истукана поставили на поле Деир недалеко от Вавилона. Царь созвал начальников и чиновников на торжественное открытие. Когда все собрались, объявили царский приказ: как только зазвучат музыкальные инструменты, все должны пасть и поклониться золотому истукану.",
          "Кто откажется, того бросят в раскалённую печь. В Вавилоне жили трое иудеев — Седрах, Мисах и Авденаго. Они служили живому Богу и поэтому не поклонились истукану. Об этом донесли Навуходоносору. Царь вызвал их, спросил, почему они не исполнили приказ, и снова пригрозил огненной печью. Седрах, Мисах и Авденаго ответили, что Бог, Которому они служат, силен спасти их из печи и от руки царя.",
          "Но даже если Он этого не сделает, они не станут служить царским богам и поклоняться золотому истукану."
        ],
        "imageIndex": 0
      },
      {
        "title": "Бог спасает в огненной печи",
        "paragraphs": [
          "Царь сильно разгневался и приказал разжечь печь в семь раз сильнее обычного. Самые сильные воины связали троих мужчин и бросили их в огонь. Пламя было настолько жарким, что убило воинов, которые подводили их к печи. Неожиданно царь встал в изумлении: вместо троих он увидел четверых, свободно ходивших посреди огня без всякого вреда.",
          "Четвёртый был видом подобен сыну богов. Царь позвал Седраха, Мисаха и Авденаго выйти. Все увидели, что огонь не повредил их телам, волосам и одежде; даже запаха дыма не было. Навуходоносор благословил Бога Седраха, Мисаха и Авденаго, пославшего Своего ангела спасти служителей, которые полагались на Него.",
          "Царь признал, что они предпочли отдать свои тела огню, но не поклониться чужому богу, повелел уважать их Бога и возвысил троих в Вавилоне."
        ],
        "imageIndex": 1
      },
      {
        "title": "Надпись на стене",
        "paragraphs": [
          "Позднее в Вавилоне царствовал Валтасар. Он устроил большой пир для тысячи своих вельмож и пил перед ними вино. Он приказал принести золотые и серебряные сосуды, взятые из Иерусалимского храма, чтобы из них пили он сам, вельможи, жёны и наложницы. Они пили вино и славили богов из золота, серебра, меди, железа, дерева и камня.",
          "В тот же миг появились пальцы человеческой руки и стали писать на стене царского дворца напротив светильника. Царь увидел пишущую руку и сильно испугался: лицо его изменилось, мысли пришли в смятение, колени задрожали. Он позвал вавилонских мудрецов прочесть и объяснить надпись, но никто не смог."
        ],
        "imageIndex": 2
      },
      {
        "title": "Даниил объясняет надпись",
        "paragraphs": [
          "Царица вспомнила Даниила, которого знали как мудрого человека. Даниила привели к Валтасару. Царь обещал ему багряную одежду, золотую цепь и положение третьего правителя в царстве, если он разъяснит надпись. Даниил сказал, что царь может оставить себе подарки, но надпись он прочтёт и объяснит. Даниил напомнил Валтасару: Всевышний Бог дал Навуходоносору царство, величие и славу.",
          "Когда его сердце возгордилось, Бог смирил его, пока он не признал власть Всевышнего. Валтасар знал эту историю, но не смирил сердце. Он превознёсся против Господа небесного, пил из сосудов Его храма и прославлял бездушных идолов, но Бога, в руке Которого его дыхание и все пути, не прославил. Поэтому Бог послал руку, написавшую: «МЕНЕ, МЕНЕ, ТЕКЕЛ, УПАРСИН».",
          "Даниил объяснил: МЕНЕ — Бог исчислил дни царства и положил ему конец; ТЕКЕЛ — царя взвесили на весах и нашли очень лёгким; ПЕРЕС — царство разделено и отдано мидянам и персам. Валтасар выполнил обещание Даниилу, несмотря на услышанный приговор. В ту же ночь Валтасар, царь халдейский, был убит, а его царство перешло к другому правителю."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Почему Навуходоносор велел всем поклониться истукану?",
      "Что ответили Седрах, Мисах и Авденаго?",
      "Что царь увидел в раскалённой печи?",
      "Почему Валтасар испугался надписи на стене?",
      "Какие слова появились на стене и что они значили?",
      "Чем доверие живому Богу отличается от поклонения идолам?"
    ],
    "promise": {
      "body": "Бог силён избавить Свой народ, но мы призваны оставаться Ему верными при любых обстоятельствах (Дан. 3:17–18). Это пример веры, а не обещание чудесного избавления от каждого испытания.",
      "keyLine": "Мы призваны оставаться верными Богу при любых обстоятельствах."
    },
    "connection": {
      "body": "Седрах, Мисах и Авденаго не отреклись от Бога даже перед лицом смерти. Валтасар знал о Божьей власти, но не смирился. Иисус Христос оставался совершенно верным Отцу. Через Него мы получаем прощение и новое сердце, чтобы чтить Бога превыше всего.",
      "keyLine": "Иисус Христос оставался совершенно верным Отцу."
    },
    "familyChallenge": {
      "intro": "Верность и смирение",
      "instruction": "Вместе завершите две фразы: «Я буду доверять Богу, даже если…» и «Сегодня я прославлю Бога, когда…». Пусть каждый ответит, а затем помолитесь о верности и смирении.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, научи нас верности и смирению."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 19",
      "completed": "День 19 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

