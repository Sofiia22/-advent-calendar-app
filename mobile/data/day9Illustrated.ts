import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_NINE_ICONS = ADVENT_SECTION_ICONS;
export const DAY_NINE_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day9/story/01-pharaoh.jpg"),
  require("../assets/advent/day9/story/02-plagues.jpg"),
  require("../assets/advent/day9/story/03-passover.jpg"),
  require("../assets/advent/day9/story/04-sea.jpg"),
  require("../assets/advent/day9/story/05-manna.jpg"),
];
export const DAY_NINE_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 9",
    "title": "Бог відкриває шлях",
    "subtitle": "Від єгипетського рабства до Божої турботи в пустелі",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Не бійтеся! Стійте, і побачите спасіння Господнє».",
      "reference": "Вихід 14:13"
    },
    "storyPages": [
      {
        "title": "Мойсей та Аарон перед фараоном",
        "paragraphs": [
          "Мойсей та його брат Аарон прийшли до фараона, щоб передати йому Боже повеління: «Відпусти Мій народ, щоб він служив Мені».",
          "Але фараон був гордим і не хотів слухатися Господа. Він відповів, що не знає Господа й не відпустить ізраїльтян.",
          "Замість того щоб полегшити життя народу, фараон наказав зробити його працю ще важчою.",
          "Раніше ізраїльтянам давали солому для виготовлення цегли, а тепер вони мусили самі шукати солому й водночас робити стільки ж цегли, як раніше.",
          "Люди були виснажені й засмучені. Вони почали нарікати на Мойсея та Аарона, бо після їхньої розмови з фараоном стало ще важче.",
          "Але Бог не забув Своєї обітниці. Він сказав Мойсеєві, що визволить Свій народ із єгипетського рабства.",
          "Господь послав Мойсея та Аарона знову до фараона й дав їм знамення, щоб показати Свою силу.",
          "Аарон кинув свій посох перед фараоном, і той перетворився на змія. Єгипетські чарівники зробили щось подібне, але посох Аарона поглинув їхні посохи.",
          "Незважаючи на це, серце фараона залишилося твердим."
        ],
        "imageIndex": 0
      },
      {
        "title": "Перші покарання",
        "paragraphs": [
          "Тоді Бог почав посилати покарання на Єгипет.",
          "Спочатку вода в річці Ніл перетворилася на кров. Риба загинула, вода стала непридатною для пиття, і єгиптянам довелося шукати іншу воду.",
          "Але фараон не послухався.",
          "Потім уся земля наповнилася жабами. Вони були в будинках, спальнях і навіть там, де готували їжу.",
          "Фараон попросив Мойсея помолитися, щоб жаби зникли, і пообіцяв відпустити народ.",
          "Мойсей помолився, і жаби загинули. Але щойно фараонові стало легше, він порушив свою обіцянку.",
          "Після цього Бог послав безліч дрібних комах, а потім рої мух, які наповнили єгипетські домівки.",
          "Згодом тяжка хвороба вразила худобу єгиптян. Потім на людях і тваринах з'явилися болючі нариви.",
          "Але фараон усе одно не хотів відпустити ізраїльтян.",
          "Тоді на Єгипет обрушився страшний град. Разом із градом спалахували блискавки, а рослини та дерева зазнали великої шкоди.",
          "Фараон знову визнав, що вчинив неправильно, і попросив Мойсея помолитися.",
          "Та коли град припинився, він знову не дотримав свого слова.",
          "Фараон бачив Божу силу, але не хотів упокоритися перед Господом."
        ],
        "imageIndex": 1
      },
      {
        "title": "Останні покарання",
        "paragraphs": [
          "Бог послав Мойсея до фараона ще раз. Господь попередив, що якщо фараон не відпустить народ, на Єгипет прийдуть нові покарання.",
          "Незабаром величезні зграї сарани вкрили землю. Сарана з'їла рослини та все, що залишилося після граду.",
          "Фараон знову просив про допомогу, але знову не виконав своєї обіцянки.",
          "Тоді Бог послав на Єгипет густу темряву. Три дні єгиптяни майже нічого не могли бачити. Але там, де жили ізраїльтяни, було світло.",
          "Попри все це, фараон відмовлявся відпускати народ.",
          "Нарешті Господь оголосив останнє й найстрашніше покарання: у єгипетських сім'ях помруть первістки.",
          "Проте Бог дав ізраїльтянам особливий наказ, щоб вони могли уникнути цього покарання.",
          "Кожна сім'я мала взяти ягня без вади. У визначений вечір його потрібно було заколоти, а кров'ю позначити одвірки свого будинку.",
          "Потім сім'я мала зібратися всередині дому, приготувати ягня й їсти його разом із прісним хлібом та гіркими травами.",
          "Це була перша Пасха.",
          "Господь сказав, що коли побачить кров на дверях, то омине цей дім, і покарання не торкнеться його первістка.",
          "Ізраїльтяни повірили Божому слову й виконали Його повеління.",
          "Тієї ночі в Єгипті був великий плач, адже в багатьох домівках померли первістки.",
          "Тоді фараон нарешті покликав Мойсея та Аарона й наказав ізраїльтянам залишити Єгипет.",
          "Народ швидко зібрався в дорогу. Вони взяли свої речі, худобу та тісто, яке ще не встигло вкиснути.",
          "Після багатьох років рабства ізраїльтяни нарешті виходили з Єгипту.",
          "Господь вивів Свій народ могутньою рукою, як і обіцяв."
        ],
        "imageIndex": 2
      },
      {
        "title": "Червоне море",
        "paragraphs": [
          "Ізраїльтяни вирушили в далеку подорож до землі, яку Бог обіцяв їхнім прабатькам.",
          "Господь Сам показував їм шлях. Удень Він вів їх у стовпі хмари, а вночі — у стовпі вогню, щоб освітлювати дорогу.",
          "Народ дійшов до Червоного моря й зупинився біля берега.",
          "Тим часом фараон пожалкував, що відпустив ізраїльтян.",
          "Він зібрав військо, бойові колісниці та вирушив наздоганяти їх.",
          "Коли ізраїльтяни побачили єгипетське військо, вони дуже злякалися.",
          "Попереду було море, позаду наближалися воїни фараона. Здавалося, виходу немає.",
          "Люди почали нарікати на Мойсея й говорили, що краще було залишитися в Єгипті, ніж загинути в пустелі.",
          "Але Мойсей сказав їм: «Не бійтеся! Стійте, і побачите спасіння Господнє» (Вихід 14:13, скорочено).",
          "Господь наказав Мойсеєві простягнути руку над морем.",
          "Мойсей виконав Боже повеління, і Господь послав сильний вітер, який дув усю ніч.",
          "Вода розступилася, і посеред моря утворився сухий шлях.",
          "Ізраїльтяни пішли морським дном, а вода стояла стіною праворуч і ліворуч від них.",
          "Господь захищав Свій народ. Хмара відділяла ізраїльтян від єгипетського війська, не дозволяючи ворогам наблизитися.",
          "Коли ізраїльтяни перейшли на другий берег, єгиптяни спробували наздогнати їх морським шляхом.",
          "Але Господь наказав Мойсеєві знову простягнути руку над морем.",
          "Вода повернулася на своє місце й покрила єгипетське військо.",
          "Ізраїльтяни побачили, як могутньо Господь урятував їх, і повірили Йому.",
          "Тоді Мойсей та народ заспівали Господеві пісню подяки.",
          "Вони славили Бога, Який визволив їх із рабства й провів через море."
        ],
        "imageIndex": 3
      },
      {
        "title": "Манна в пустелі",
        "paragraphs": [
          "Після переходу через Червоне море ізраїльтяни продовжили свою подорож пустелею.",
          "Там було важко знайти їжу та воду. Люди почали хвилюватися й нарікати на Мойсея та Аарона.",
          "Вони згадували Єгипет, де, хоч і були рабами, мали що їсти.",
          "Але Господь не залишив Свого народу без допомоги.",
          "Він пообіцяв послати їм їжу з неба.",
          "Увечері до табору прилетіло багато перепелів, і люди могли їсти м'ясо.",
          "А вранці, коли зійшла роса, на землі з'явилося щось дрібне, схоже на маленькі білі крупинки.",
          "Ізраїльтяни здивовано запитували одне одного: «Що це?»",
          "Мойсей пояснив, що це хліб, який Господь дав їм для їжі.",
          "Цю небесну поживу назвали манною.",
          "Вона була схожа на дрібне насіння й мала приємний солодкуватий смак.",
          "Щоранку люди мали збирати стільки манни, скільки було потрібно їхнім сім'ям на один день.",
          "Бог навчав їх щодня довіряти Йому.",
          "Не потрібно було накопичувати манну зі страху, що завтра не буде їжі. Господь Сам піклувався про завтрашній день.",
          "Лише перед днем відпочинку ізраїльтяни мали зібрати подвійну порцію, бо сьомого дня манна не випадала.",
          "Так Бог годував Свій народ у пустелі.",
          "Він визволив ізраїльтян із Єгипту, провів через море й тепер щодня забезпечував їх усім необхідним.",
          "Господь не тільки показав Свою силу, але й навчав народ довіряти Йому."
        ],
        "imageIndex": 4
      }
    ],
    "questions": [
      "Чому фараон не хотів відпускати ізраїльтян?",
      "Які покарання Бог послав на Єгипет?",
      "Що Бог наказав ізраїльтянам зробити під час першої Пасхи?",
      "Як Господь показував народові шлях у пустелі?",
      "Чому ізраїльтяни злякалися біля Червоного моря?",
      "Як Бог урятував їх від єгипетського війська?",
      "Яку їжу Господь послав народові в пустелі?",
      "Чого Бог навчав ізраїльтян через ці події?"
    ],
    "promise": {
      "body": "Бог пообіцяв Авраамові, Ісаакові та Якову піклуватися про їхніх нащадків. Минуло багато років, і ізраїльтяни стали рабами в Єгипті. Але Господь не забув Своєї обітниці.\n\nВін визволив народ із рабства, провів його через море й годував у пустелі.",
      "keyLine": "Навіть коли ми не бачимо виходу, Бог залишається вірним Своїм обітницям."
    },
    "connection": {
      "body": "Коли Бог готувався визволити ізраїльтян із Єгипту, Він наказав кожній сім'ї взяти ягня без вади. Кров ягняти на дверях була знаком, завдяки якому їхні первістки були збережені від суду.\n\nЧерез багато століть Бог послав Свого Сина — Ісуса Христа.\n\nІван Хреститель, побачивши Ісуса, сказав: «Оце Агнець Божий, що на Себе гріх світу бере!» — Івана 1:29.\n\nІзраїльтяни були визволені з єгипетського рабства. Ісус прийшов, щоб визволити нас із рабства гріха.",
      "keyLine": "Пасхальне ягня вказувало на Спасителя, Який мав прийти."
    },
    "familyChallenge": {
      "intro": "Зберіться всією сім'єю за вечерею. Покладіть посеред столу невеликий шматочок хліба.",
      "instruction": "Згадайте, як Бог щодня посилав ізраїльтянам манну, щоб вони мали що їсти.\n\nНехай кожен назве одну річ, за яку сьогодні хоче подякувати Богові.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Потім поговоріть: «Чому іноді ми забуваємо дякувати за звичайні речі, які маємо щодня?»\n\n«Що допомагає нам довіряти Богові, коли ми хвилюємося про завтрашній день?»",
      "ending": "Завершіть спільною молитвою подяки.\n\nБог піклувався про Свій народ щодня. Ми теж можемо довіряти Йому кожного дня.",
      "prayer": "«Боже, дякуємо за хліб, Твою турботу і все, що Ти даєш нам щодня. Допоможи нам довіряти Тобі»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 9",
      "completed": "День 9 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 9",
    "title": "God Makes a Way",
    "subtitle": "From Slavery in Egypt to God’s Care in the Wilderness",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“Do not be afraid. Stand still, and see the salvation of the LORD.”",
      "reference": "Exodus 14:13"
    },
    "storyPages": [
      {
        "title": "Moses and Aaron Before Pharaoh",
        "paragraphs": [
          "Moses and his brother Aaron came to Pharaoh to deliver God's command: “Let My people go, that they may serve Me.”",
          "But Pharaoh was proud and refused to obey the Lord. He said that he did not know the Lord and would not let the Israelites go.",
          "Instead of making life easier for the people, Pharaoh ordered their work to become even harder.",
          "Previously, the Israelites had been given straw to make bricks. Now they had to gather their own straw while still producing the same number of bricks.",
          "The people were exhausted and discouraged. They began complaining to Moses and Aaron because their lives had become even more difficult after the brothers had spoken to Pharaoh.",
          "But God had not forgotten His promise. He told Moses that He would deliver His people from slavery in Egypt.",
          "The Lord sent Moses and Aaron back to Pharaoh and gave them a sign to demonstrate His power.",
          "Aaron threw down his staff before Pharaoh, and it became a serpent. The Egyptian magicians did something similar, but Aaron's staff swallowed their staffs.",
          "Even so, Pharaoh's heart remained hard."
        ],
        "imageIndex": 0
      },
      {
        "title": "The First Plagues",
        "paragraphs": [
          "Then God began sending plagues upon Egypt.",
          "First, the water of the Nile River turned into blood. The fish died, the water became undrinkable, and the Egyptians had to search for water elsewhere.",
          "But Pharaoh refused to obey.",
          "Next, the whole land was filled with frogs. They were in houses, bedrooms, and even places where food was prepared.",
          "Pharaoh asked Moses to pray for the frogs to disappear and promised to let the people go.",
          "Moses prayed, and the frogs died. But as soon as Pharaoh felt relief, he broke his promise.",
          "After that, God sent countless tiny insects, followed by swarms of flies that filled the Egyptian homes.",
          "Then a terrible disease struck the Egyptians' livestock. Later, painful boils appeared on people and animals.",
          "Still, Pharaoh refused to release the Israelites.",
          "Then a dreadful hailstorm struck Egypt. Lightning flashed through the storm, and plants and trees suffered great damage.",
          "Once again, Pharaoh admitted that he had done wrong and asked Moses to pray.",
          "But when the hail stopped, he went back on his word.",
          "Pharaoh had seen God's power, yet he would not humble himself before the Lord."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Last Plagues",
        "paragraphs": [
          "God sent Moses to Pharaoh once again. The Lord warned that if Pharaoh refused to let the people go, more plagues would come upon Egypt.",
          "Soon enormous swarms of locusts covered the land. The locusts ate the plants and everything that remained after the hailstorm.",
          "Pharaoh begged for help again, but once more he failed to keep his promise.",
          "Then God sent thick darkness over Egypt. For three days, the Egyptians could hardly see anything.",
          "But there was light where the Israelites lived.",
          "Despite all this, Pharaoh still refused to let the people go.",
          "Finally, the Lord announced the last and most terrible plague: the firstborn in the Egyptian households would die.",
          "However, God gave the Israelites special instructions so they could be spared from this judgment.",
          "Each family was to choose a lamb without blemish. On the appointed evening, they were to kill it and put some of its blood on the doorposts of their house.",
          "Then the family was to gather inside, prepare the lamb, and eat it with unleavened bread and bitter herbs.",
          "This was the first Passover.",
          "The Lord said that when He saw the blood on the doorway, He would pass over that house, and its firstborn would be spared.",
          "The Israelites believed God's word and obeyed His instructions.",
          "That night, there was great sorrow throughout Egypt because the firstborn had died in many homes.",
          "At last, Pharaoh called Moses and Aaron and ordered the Israelites to leave Egypt.",
          "The people quickly prepared for the journey. They took their belongings, livestock, and dough that had not yet risen.",
          "After many years of slavery, the Israelites were finally leaving Egypt.",
          "The Lord brought His people out with His mighty hand, just as He had promised."
        ],
        "imageIndex": 2
      },
      {
        "title": "The Red Sea",
        "paragraphs": [
          "The Israelites began their long journey toward the land God had promised their ancestors.",
          "The Lord Himself showed them the way. During the day, He led them in a pillar of cloud, and at night, in a pillar of fire to light their path.",
          "The people reached the Red Sea and stopped near its shore.",
          "Meanwhile, Pharaoh regretted letting the Israelites go.",
          "He gathered his army and chariots and set out to pursue them.",
          "When the Israelites saw the Egyptian army approaching, they became terrified.",
          "The sea was in front of them, and Pharaoh's soldiers were closing in behind them. There seemed to be no way out.",
          "The people began complaining to Moses, saying that it would have been better to remain in Egypt than to die in the wilderness.",
          "But Moses told them: “Do not be afraid. Stand still, and see the salvation of the LORD” (Exodus 14:13, excerpt, NKJV).",
          "The Lord commanded Moses to stretch out his hand over the sea.",
          "Moses obeyed, and the Lord sent a strong wind that blew throughout the night.",
          "The waters divided, and a dry path appeared through the sea.",
          "The Israelites walked along the seabed, with walls of water standing on their right and left.",
          "The Lord protected His people. The cloud stood between the Israelites and the Egyptian army, preventing their enemies from approaching.",
          "After the Israelites had crossed to the other side, the Egyptians tried to follow them through the sea.",
          "But the Lord commanded Moses to stretch out his hand over the water once more.",
          "The waters returned to their place and covered the Egyptian army.",
          "The Israelites saw how powerfully the Lord had saved them, and they believed in Him.",
          "Then Moses and the people sang a song of thanksgiving to the Lord.",
          "They praised God for delivering them from slavery and leading them through the sea."
        ],
        "imageIndex": 3
      },
      {
        "title": "Manna in the Wilderness",
        "paragraphs": [
          "After crossing the Red Sea, the Israelites continued their journey through the wilderness.",
          "Food and water were difficult to find. The people began to worry and complain against Moses and Aaron.",
          "They remembered Egypt, where, although they had been slaves, they had food to eat.",
          "But the Lord did not leave His people without help.",
          "He promised to send them food from heaven.",
          "That evening, many quail flew into the camp, and the people had meat to eat.",
          "In the morning, when the dew had lifted, something small appeared on the ground, resembling tiny white flakes.",
          "The Israelites looked at one another in surprise and asked: “What is it?”",
          "Moses explained that this was the bread the Lord had given them to eat.",
          "They called this heavenly food manna.",
          "It looked like tiny seeds and had a pleasant, slightly sweet taste.",
          "Every morning, the people were to gather enough manna for their families for that day.",
          "God was teaching them to trust Him daily.",
          "They did not need to store up manna out of fear that there would be no food tomorrow. The Lord Himself would take care of the next day.",
          "Only before the day of rest were the Israelites to gather a double portion, because no manna would fall on the seventh day.",
          "In this way, God fed His people in the wilderness.",
          "He had delivered the Israelites from Egypt, led them through the sea, and now provided what they needed each day.",
          "The Lord not only showed His power but also taught His people to trust Him."
        ],
        "imageIndex": 4
      }
    ],
    "questions": [
      "Why did Pharaoh refuse to let the Israelites go?",
      "What plagues did God send upon Egypt?",
      "What did God command the Israelites to do at the first Passover?",
      "How did the Lord guide His people through the wilderness?",
      "Why were the Israelites afraid at the Red Sea?",
      "How did God save them from the Egyptian army?",
      "What food did the Lord provide in the wilderness?",
      "What was God teaching the Israelites through these events?"
    ],
    "promise": {
      "body": "God promised Abraham, Isaac, and Jacob that He would care for their descendants. Many years passed, and the Israelites became slaves in Egypt. But the Lord did not forget His promise.\n\nHe delivered His people from slavery, led them through the sea, and fed them in the wilderness.",
      "keyLine": "Even when we cannot see a way forward, God remains faithful to His promises."
    },
    "connection": {
      "body": "When God was about to deliver the Israelites from Egypt, He commanded each family to choose a lamb without blemish. The lamb's blood on their doorposts was the sign by which their firstborn were spared from judgment.\n\nMany centuries later, God sent His Son, Jesus Christ.\n\nWhen John the Baptist saw Jesus, he said: “Behold! The Lamb of God who takes away the sin of the world!” — John 1:29 (NKJV).\n\nThe Israelites were delivered from slavery in Egypt. Jesus came to deliver us from the slavery of sin.",
      "keyLine": "The Passover lamb pointed forward to the Savior who was to come."
    },
    "familyChallenge": {
      "intro": "Gather around the dinner table and place a small piece of bread in the center.",
      "instruction": "Remember how God provided manna for the Israelites every day so they would have food to eat.\n\nLet everyone name one thing they want to thank God for today.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Then talk together: “Why do we sometimes forget to be thankful for the ordinary things we have every day?”\n\n“What helps us trust God when we feel worried about tomorrow?”",
      "ending": "Finish with a prayer of thanksgiving.\n\nGod cared for His people every day. We can trust Him each day, too.",
      "prayer": "“God, thank You for our daily bread, Your care, and all You give us. Help us trust You.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 9",
      "completed": "Day 9 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 9",
    "title": "Бог открывает путь",
    "subtitle": "От египетского рабства до Божьей заботы в пустыне",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Не бойтесь, стойте — и увидите спасение Господне».",
      "reference": "Исход 14:13"
    },
    "storyPages": [
      {
        "title": "Моисей и Аарон перед фараоном",
        "paragraphs": [
          "Моисей и его брат Аарон пришли к фараону, чтобы передать ему Божье повеление: «Отпусти народ Мой, чтобы он совершил Мне служение».",
          "Но фараон был гордым и не хотел слушаться Господа. Он ответил, что не знает Господа и не отпустит израильтян.",
          "Вместо того чтобы облегчить жизнь народа, фараон приказал сделать его работу ещё тяжелее. Раньше израильтянам давали солому для изготовления кирпичей, а теперь они должны были сами искать солому и при этом делать столько же кирпичей, сколько раньше.",
          "Люди были измучены и огорчены. Они начали жаловаться на Моисея и Аарона, потому что после их разговора с фараоном жить стало ещё тяжелее.",
          "Но Бог не забыл Своего обещания. Он сказал Моисею, что освободит Свой народ из египетского рабства.",
          "Господь снова послал Моисея и Аарона к фараону и дал им знамение, чтобы показать Свою силу.",
          "Аарон бросил свой посох перед фараоном, и тот превратился в змея. Египетские волхвы сделали нечто подобное, но посох Аарона поглотил их посохи.",
          "Несмотря на это, сердце фараона оставалось ожесточённым."
        ],
        "imageIndex": 0
      },
      {
        "title": "Первые казни",
        "paragraphs": [
          "Тогда Бог начал посылать казни на Египет.",
          "Сначала вода в реке Нил превратилась в кровь. Рыба погибла, вода стала непригодной для питья, и египтянам пришлось искать другую воду.",
          "Но фараон не послушался.",
          "Затем вся земля наполнилась жабами. Они были в домах, спальнях и даже там, где готовили пищу.",
          "Фараон попросил Моисея помолиться, чтобы жабы исчезли, и пообещал отпустить народ.",
          "Моисей помолился, и жабы погибли. Но как только фараону стало легче, он нарушил своё обещание.",
          "После этого Бог послал множество мелких насекомых, а затем рои мух, которые наполнили египетские дома.",
          "Позже тяжёлая болезнь поразила скот египтян. Затем на людях и животных появились болезненные нарывы.",
          "Но фараон всё равно не хотел отпускать израильтян.",
          "Тогда на Египет обрушился страшный град. Вместе с градом сверкали молнии, а растения и деревья сильно пострадали.",
          "Фараон снова признал, что поступил неправильно, и попросил Моисея помолиться.",
          "Но когда град прекратился, он опять не сдержал своего слова.",
          "Фараон видел Божью силу, но не хотел смириться перед Господом."
        ],
        "imageIndex": 1
      },
      {
        "title": "Последние казни",
        "paragraphs": [
          "Бог снова послал Моисея к фараону. Господь предупредил, что если фараон не отпустит народ, на Египет придут новые наказания.",
          "Вскоре огромные стаи саранчи покрыли землю. Саранча съела растения и всё, что осталось после града.",
          "Фараон снова просил о помощи, но вновь не выполнил своего обещания.",
          "Тогда Бог послал на Египет густую тьму. Три дня египтяне почти ничего не могли видеть. Но там, где жили израильтяне, был свет.",
          "Несмотря на всё это, фараон отказывался отпускать народ.",
          "Наконец Господь объявил последнюю и самую страшную казнь: в египетских семьях умрут первенцы.",
          "Однако Бог дал израильтянам особое повеление, чтобы они могли избежать этого наказания.",
          "Каждая семья должна была выбрать агнца без порока. В назначенный вечер его следовало заколоть, а кровью помазать косяки дверей своего дома.",
          "Затем семья должна была собраться внутри дома, приготовить агнца и есть его вместе с пресным хлебом и горькими травами.",
          "Это была первая Пасха.",
          "Господь сказал, что, увидев кровь на дверях, Он пройдёт мимо этого дома и его первенец будет сохранён.",
          "Израильтяне поверили Божьему слову и исполнили Его повеление.",
          "Той ночью в Египте был великий плач, потому что во многих домах умерли первенцы.",
          "Тогда фараон наконец позвал Моисея и Аарона и приказал израильтянам покинуть Египет.",
          "Народ быстро собрался в дорогу. Люди взяли свои вещи, скот и тесто, которое ещё не успело подняться.",
          "После многих лет рабства израильтяне наконец выходили из Египта.",
          "Господь вывел Свой народ могущественной рукой, как и обещал."
        ],
        "imageIndex": 2
      },
      {
        "title": "Красное море",
        "paragraphs": [
          "Израильтяне отправились в далёкое путешествие к земле, которую Бог обещал их праотцам.",
          "Господь Сам указывал им путь. Днём Он вёл их в столпе облачном, а ночью — в столпе огненном, чтобы освещать дорогу.",
          "Народ дошёл до Красного моря и остановился на берегу.",
          "Тем временем фараон пожалел, что отпустил израильтян.",
          "Он собрал войско, боевые колесницы и отправился догонять их.",
          "Когда израильтяне увидели приближающееся египетское войско, они очень испугались.",
          "Впереди было море, позади приближались воины фараона. Казалось, выхода нет.",
          "Люди начали жаловаться Моисею и говорили, что лучше было остаться в Египте, чем погибнуть в пустыне.",
          "Но Моисей сказал им: «Не бойтесь, стойте — и увидите спасение Господне» (Исход 14:13, сокращено).",
          "Господь приказал Моисею простереть руку над морем.",
          "Моисей исполнил Божье повеление, и Господь послал сильный ветер, который дул всю ночь.",
          "Вода расступилась, и посреди моря появился сухой путь.",
          "Израильтяне пошли по морскому дну, а вода стояла стеной справа и слева от них.",
          "Господь защищал Свой народ. Облако отделяло израильтян от египетского войска, не позволяя врагам приблизиться.",
          "Когда израильтяне перешли на другой берег, египтяне попытались догнать их через море.",
          "Но Господь приказал Моисею снова простереть руку над морем.",
          "Вода возвратилась на своё место и покрыла египетское войско.",
          "Израильтяне увидели, как могущественно Господь спас их, и поверили Ему.",
          "Тогда Моисей и народ запели Господу песнь благодарения.",
          "Они прославляли Бога, Который освободил их из рабства и провёл через море."
        ],
        "imageIndex": 3
      },
      {
        "title": "Манна в пустыне",
        "paragraphs": [
          "После перехода через Красное море израильтяне продолжили путешествие по пустыне.",
          "Там было трудно найти пищу и воду. Люди начали беспокоиться и жаловаться на Моисея и Аарона.",
          "Они вспоминали Египет, где, хотя и были рабами, имели пищу.",
          "Но Господь не оставил Свой народ без помощи.",
          "Он пообещал послать им пищу с неба.",
          "Вечером в стан прилетело много перепелов, и люди могли есть мясо.",
          "А утром, когда сошла роса, на земле появилось нечто мелкое, похожее на маленькие белые крупинки.",
          "Израильтяне удивлённо спрашивали друг друга: «Что это?»",
          "Моисей объяснил, что это хлеб, который Господь дал им в пищу.",
          "Эту небесную пищу назвали манной.",
          "Она была похожа на мелкие семена и имела приятный сладковатый вкус.",
          "Каждое утро люди должны были собирать столько манны, сколько требовалось их семьям на один день.",
          "Бог учил их ежедневно доверять Ему.",
          "Не нужно было накапливать манну из страха, что завтра не будет еды. Господь Сам заботился о завтрашнем дне.",
          "Только перед днём покоя израильтяне должны были собрать двойную порцию, потому что в седьмой день манна не выпадала.",
          "Так Бог кормил Свой народ в пустыне.",
          "Он освободил израильтян из Египта, провёл через море и теперь каждый день обеспечивал их всем необходимым.",
          "Господь не только показал Свою силу, но и учил народ доверять Ему."
        ],
        "imageIndex": 4
      }
    ],
    "questions": [
      "Почему фараон не хотел отпускать израильтян?",
      "Какие казни Бог послал на Египет?",
      "Что Бог повелел израильтянам сделать во время первой Пасхи?",
      "Как Господь указывал народу путь в пустыне?",
      "Почему израильтяне испугались возле Красного моря?",
      "Как Бог спас их от египетского войска?",
      "Какую пищу Господь послал народу в пустыне?",
      "Чему Бог учил израильтян через эти события?"
    ],
    "promise": {
      "body": "Бог обещал Аврааму, Исааку и Иакову заботиться об их потомках. Прошло много лет, и израильтяне стали рабами в Египте. Но Господь не забыл Своего обещания.\n\nОн освободил народ из рабства, провёл его через море и кормил в пустыне.",
      "keyLine": "Даже когда мы не видим выхода, Бог остаётся верен Своим обещаниям."
    },
    "connection": {
      "body": "Когда Бог готовился освободить израильтян из Египта, Он повелел каждой семье выбрать агнца без порока. Кровь агнца на дверях была знаком, благодаря которому их первенцы были сохранены от суда.\n\nЧерез много столетий Бог послал Своего Сына — Иисуса Христа.\n\nИоанн Креститель, увидев Иисуса, сказал: «Вот Агнец Божий, Который берет на Себя грех мира». — Иоанна 1:29.\n\nИзраильтяне были освобождены из египетского рабства. Иисус пришёл, чтобы освободить нас от рабства греха.",
      "keyLine": "Пасхальный агнец указывал на Спасителя, Который должен был прийти."
    },
    "familyChallenge": {
      "intro": "Соберитесь всей семьёй за ужином. Положите посередине стола небольшой кусочек хлеба.",
      "instruction": "Вспомните, как Бог каждый день посылал израильтянам манну, чтобы у них была пища.\n\nПусть каждый назовёт одну вещь, за которую сегодня хочет поблагодарить Бога.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Затем поговорите: «Почему иногда мы забываем благодарить за обычные вещи, которые имеем каждый день?»\n\n«Что помогает нам доверять Богу, когда мы переживаем о завтрашнем дне?»",
      "ending": "Завершите общей молитвой благодарности.\n\nБог заботился о Своём народе каждый день. Мы тоже можем доверять Ему каждый день.",
      "prayer": "«Боже, спасибо за хлеб, Твою заботу и всё, что Ты даёшь нам каждый день. Помоги нам доверять Тебе»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 9",
      "completed": "День 9 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};
