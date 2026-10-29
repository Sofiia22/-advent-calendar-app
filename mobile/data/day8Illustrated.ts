import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_EIGHT_ICONS = ADVENT_SECTION_ICONS;
export const DAY_EIGHT_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day8/story/01-basket.jpg"),
  require("../assets/advent/day8/story/02-shepherd.jpg"),
  require("../assets/advent/day8/story/03-burning-bush.jpg"),
];
export const DAY_EIGHT_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 8",
    "title": "Мойсей — Бог має план",
    "subtitle": "Від очеретяного кошика до Божого покликання",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Я буду з тобою!»",
      "reference": "Вихід 3:12"
    },
    "storyPages": [
      {
        "title": "Кошичок з очерету",
        "paragraphs": [
          "Ви вже знаєте, що Йосип і його брати довгий час щасливо жили в Єгипті. Нарешті вони постаріли й померли, але після них залишилися численні нащадки. Так що в Єгипті опинилося багато тисяч євреїв. Все це були онуки й правнуки Якова.",
          "Ви ще знаєте, що Яків мав два імені. Друге ім’я його — Ізраїль. Це ім’я дав Бог. Тому всі сини Якова називалися дітьми Ізраїля, а нащадки його продовжували називатися синами Ізраїлевими, або ізраїльтянами.",
          "Вони, як ви вже знаєте, не жили на землі ханаанській, а поселилися в Єгипті, тому що там був неврожай, і вони пішли звідти, щоб мати їжу. В Єгипті вони пасли своїх овець.",
          "Але ось помер і на престол став інший фараон. Він не знав Йосипа і зненавидів ізраїльтян.",
          "Новий фараон бачив, що ізраїльський народ ставав дуже численним, і боявся, що одного дня вони можуть об’єднатися з ворогами Єгипту.",
          "Тому він примушував ізраїльтян виконувати тяжку працю. Вони виготовляли цеглу, будували міста й працювали під наглядом жорстоких наглядачів.",
          "Але що більше єгиптяни пригноблювали ізраїльтян, то численнішим ставав їхній народ.",
          "Тоді фараон видав страшний наказ: усіх новонароджених хлопчиків ізраїльського народу потрібно було кидати в річку.",
          "Одна благочестива ізраїльська жінка народила сина. Вона належала до народу Ізраїля, любила Бога й довіряла Йому.",
          "Жінка знала про жорстокий наказ фараона, тому вирішила врятувати свого хлопчика. Вона ховала його вдома протягом трьох місяців.",
          "Але дитина росла, і приховувати її ставало дедалі важче.",
          "Тоді мати зробила невеликий кошик з очерету, обмазала його смолою, щоб він не пропускав воду, поклала в нього немовля й віднесла до річки Ніл.",
          "Вона поставила кошик серед очерету біля берега. Старша сестра хлопчика залишилася неподалік, щоб побачити, що з ним станеться.",
          "Незабаром до річки прийшла дочка фараона зі своїми служницями. Вона помітила кошик серед очерету й наказала принести його.",
          "Коли царівна відкрила кошик, то побачила маленького хлопчика, який плакав.",
          "Їй стало шкода немовляти. Вона зрозуміла, що це одна з ізраїльських дітей.",
          "Тоді сестра хлопчика підійшла й запитала: «Чи не покликати тобі годувальницю з єврейських жінок, щоб вона вигодувала для тебе дитину?»",
          "Царівна погодилася.",
          "Дівчинка побігла й покликала власну матір хлопчика.",
          "Так Бог улаштував, що мати знову отримала можливість доглядати свого сина.",
          "Коли хлопчик підріс, мати привела його до дочки фараона. Царівна прийняла його як свого сина й назвала Мойсеєм, тому що витягла його з води.",
          "Так Бог зберіг життя дитині, якій у майбутньому належало виконати велике завдання."
        ],
        "imageIndex": 0
      },
      {
        "title": "Вибір Мойсея",
        "paragraphs": [
          "Мойсей виріс у палаці фараона. Він мав гарний одяг, їжу, навчався єгипетської мудрості й користувався багатьма привілеями.",
          "Але Мойсей знав, що він не єгиптянин. Він належав до народу Ізраїля.",
          "Мойсей бачив, як тяжко працюють ізраїльтяни та як жорстоко з ними поводяться єгипетські наглядачі.",
          "Він не хотів забувати свій народ і Бога своїх батьків.",
          "Одного разу Мойсей побачив, як єгиптянин б’є ізраїльтянина. Мойсей розгнівався й, заступившись за свого співвітчизника, убив єгиптянина, а його тіло сховав у піску.",
          "Наступного дня він побачив двох ізраїльтян, які сварилися, і спробував їх примирити.",
          "Але один із них запитав: «Хто поставив тебе начальником і суддею над нами? Чи не хочеш ти вбити мене, як убив єгиптянина?»",
          "Мойсей зрозумів, що про його вчинок уже стало відомо.",
          "Незабаром про це почув і фараон. Він захотів убити Мойсея, тому Мойсей утік з Єгипту до Мідіянського краю.",
          "Тепер у нього не було царського палацу, дорогого одягу й багатства. Він опинився в чужій землі.",
          "Одного разу Мойсей сів біля криниці. Туди прийшли сім дочок мідіянського священника, щоб напоїти батькову отару.",
          "Але інші пастухи почали відганяти дівчат від води.",
          "Мойсей заступився за них і допоміг напоїти овець.",
          "Коли дівчата повернулися додому, їхній батько здивувався, чому вони прийшли так рано.",
          "Вони розповіли йому про незнайомця, який захистив їх і допоміг із худобою.",
          "Батько запросив Мойсея до свого дому.",
          "Мойсей залишився жити в нього й одружився з його дочкою Ціппорою. Згодом у них народився син.",
          "Так Мойсей став пастухом. Багато років він доглядав отари в пустелі.",
          "А тим часом ізраїльтяни продовжували страждати в Єгипті. Вони тяжко працювали, плакали й благали Бога про допомогу.",
          "Господь чув їхні молитви.",
          "Він пам’ятав Свою обітницю Авраамові, Ісаакові та Якову й мав намір визволити Свій народ."
        ],
        "imageIndex": 1
      },
      {
        "title": "Палаючий терновий кущ",
        "paragraphs": [
          "Одного разу Мойсей пас отару свого тестя й прийшов до гори Хорив.",
          "Раптом він побачив щось незвичайне.",
          "Серед пустелі горів терновий кущ. Полум’я охоплювало його гілки, але сам кущ не згорав.",
          "Мойсей дуже здивувався.",
          "«Піду й подивлюся на це велике диво, чому кущ не згорає», — подумав він.",
          "Коли Мойсей наблизився, Господь покликав його з-посеред куща: «Мойсею, Мойсею!»",
          "Він відповів: «Ось я!»",
          "Бог сказав йому не наближатися й зняти взуття, бо місце, на якому він стоїть, є святою землею.",
          "Господь сказав: «Я Бог батька твого, Бог Авраама, Бог Ісаака й Бог Якова».",
          "Мойсей закрив своє обличчя, бо боявся дивитися на Бога.",
          "Тоді Господь сказав йому, що бачив страждання Свого народу в Єгипті, чув його плач і знає його скорботи.",
          "Бог вирішив визволити ізраїльтян із рабства й привести їх до доброї землі, яку обіцяв їхнім прабатькам.",
          "Для цього Він покликав Мойсея.",
          "Господь наказав йому повернутися до Єгипту, піти до фараона й вивести ізраїльський народ.",
          "Але Мойсей злякався.",
          "«Хто я такий, щоб іти до фараона й вивести синів Ізраїлевих із Єгипту?» — запитав він.",
          "Бог відповів: «Я буду з тобою!»",
          "Мойсей також запитав, що йому сказати ізраїльтянам, коли вони захочуть дізнатися ім’я Бога, Який послав його.",
          "Бог відповів: «Я Той, Хто є».",
          "Господь наказав Мойсеєві сказати народові, що Бог їхніх батьків послав його, щоб визволити їх із Єгипту.",
          "Та Мойсей усе ще сумнівався. Він боявся, що люди не повірять йому.",
          "Тоді Бог дав йому особливі знамення.",
          "Мойсей кинув свій посох на землю, і той перетворився на змія. Коли ж він за Божим наказом узяв змія за хвіст, той знову став посохом.",
          "Потім Бог дав йому ще одне знамення, щоб народ повірив, що Господь справді послав його.",
          "Але Мойсей сказав, що не вміє добре говорити.",
          "Бог нагадав йому, що саме Він створив людські уста й може навчити людину говорити.",
          "Господь пообіцяв бути з ним і допомагати йому.",
          "Коли Мойсей продовжував вагатися, Бог призначив його брата Аарона допомагати йому говорити перед народом і фараоном.",
          "Тоді Мойсей погодився виконати Боже доручення.",
          "Він повернувся до Єгипту, щоб разом з Аароном розповісти ізраїльтянам про Божу обітницю визволення.",
          "Бог не забув Свого народу. Він чув його молитви й уже готував шлях до спасіння."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Чому фараон наказав кидати новонароджених ізраїльських хлопчиків у річку?",
      "Як мама Мойсея намагалася врятувати свого сина?",
      "Хто знайшов маленького Мойсея в кошику?",
      "Чому Мойсей змушений був утекти з Єгипту?",
      "Що незвичайного Мойсей побачив біля гори Хорив?",
      "Яке завдання Бог доручив Мойсеєві?",
      "Що Бог пообіцяв Мойсеєві, коли той боявся?"
    ],
    "promise": {
      "body": "Бог пообіцяв Авраамові, Ісаакові та Якову піклуватися про їхніх нащадків. Минуло багато років, і ізраїльтяни опинилися в рабстві, але Бог не забув Своєї обітниці.\n\nВін бачив їхні страждання, чув їхні молитви й покликав Мойсея, щоб визволити Свій народ.\n\nБог також пообіцяв Мойсеєві бути з ним і допомагати йому виконати це завдання.",
      "keyLine": "Бог завжди вірний Своїм обітницям, навіть коли нам доводиться довго чекати."
    },
    "connection": {
      "body": "Коли народ Ізраїля страждав у Єгипті, Бог почув його молитви й покликав Мойсея, щоб визволити людей із рабства.\n\nЩе маленьким немовлям Мойсей був урятований від жорстокого наказу фараона. Бог зберіг його життя, адже мав для нього особливе завдання.\n\nЧерез багато років народився Ісус. Цар Ірод теж намагався вбити маленьких дітей, але Бог зберіг життя Ісуса.\n\nМойсей був посланий, щоб вивести ізраїльтян із Єгипту. Ісус прийшов, щоб визволити нас із рабства гріха.\n\nБог сказав Мойсеєві: «Я буду з тобою». А через народження Ісуса здійснилася ще більша обітниця — Еммануїл, що означає «З нами Бог» (Матвія 1:23).",
      "keyLine": "Мойсей був Божим слугою, посланим для визволення Ізраїля. Ісус — Божий Син, наш Спаситель."
    },
    "familyChallenge": {
      "intro": "Зберіться всією сім’єю ввечері, вимкніть телевізор, відкладіть телефони й посидьте одну хвилину в повній тиші.",
      "instruction": "Після цього нехай кожен розповість, які звуки він почув, хоча раніше їх не помічав.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Потім поговоріть: «Чому нам іноді важко зупинитися й уважно слухати?» «Як ми можемо навчитися уважніше слухати Боже Слово?»",
      "ending": "Згадайте, як Мойсей зупинився біля палаючого куща і почув Божий поклик.\n\nПрочитайте разом Вихід 3:4 і завершіть короткою молитвою, попросивши Бога допомогти вашій сім’ї бути уважною до Його Слова.\n\nБог промовляє до нас через Своє Слово. Важливо знаходити час, щоб його слухати.",
      "prayer": "«Боже, допоможи нашій сім’ї уважно слухати Твоє Слово та виконувати його»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 8",
      "completed": "День 8 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 8",
    "title": "Moses — God Has a Plan",
    "subtitle": "From the Basket of Reeds to God’s Calling",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“I will certainly be with you.”",
      "reference": "Exodus 3:12"
    },
    "storyPages": [
      {
        "title": "The Basket of Reeds",
        "paragraphs": [
          "You already know that Joseph and his brothers lived happily in Egypt for many years. Eventually, they grew old and died, but they left many descendants. Thousands of Hebrews now lived in Egypt. They were the grandchildren and great-grandchildren of Jacob.",
          "You also know that Jacob had two names. His second name was Israel, a name God had given him. That is why Jacob's sons were called the children of Israel, and their descendants continued to be called the Israelites.",
          "As you know, they were no longer living in Canaan. They had settled in Egypt because there had been a famine in their own land, and they had gone to Egypt to find food. There, they cared for their flocks of sheep.",
          "But eventually, a new Pharaoh came to the throne. He did not know Joseph and came to hate the Israelites.",
          "The new Pharaoh saw that the people of Israel were becoming very numerous. He was afraid that one day they might join Egypt's enemies.",
          "So he forced the Israelites to work very hard. They made bricks, built cities, and worked under cruel overseers.",
          "Yet the more the Egyptians oppressed the Israelites, the more numerous they became.",
          "Then Pharaoh gave a terrible command: all newborn Israelite boys were to be thrown into the river.",
          "A godly Israelite woman gave birth to a son. She belonged to the people of Israel, loved God, and trusted Him.",
          "The woman knew about Pharaoh's cruel command, so she decided to save her little boy. She hid him at home for three months.",
          "But the baby kept growing, and hiding him became more and more difficult.",
          "So his mother made a small basket out of reeds and coated it with pitch to keep the water out. She placed her baby inside and carried the basket to the Nile River.",
          "She set the basket among the reeds near the riverbank. The boy's older sister stayed nearby to see what would happen to him.",
          "Soon Pharaoh's daughter came down to the river with her servants. She noticed the basket among the reeds and ordered someone to bring it to her.",
          "When the princess opened the basket, she found a little baby boy crying.",
          "She felt sorry for him and realized that he was one of the Hebrew children.",
          "Then the boy's sister approached and asked: \"Shall I go and find a Hebrew woman to nurse the baby for you?\" The princess agreed.",
          "The girl ran and brought the baby's own mother.",
          "In this wonderful way, God arranged for the mother to care for her son again.",
          "When the boy had grown older, his mother brought him to Pharaoh's daughter. The princess accepted him as her own son and named him Moses because she had drawn him out of the water.",
          "And so God preserved the life of a child who would one day be given a very important task."
        ],
        "imageIndex": 0
      },
      {
        "title": "Moses Makes a Choice",
        "paragraphs": [
          "Moses grew up in Pharaoh's palace. He had fine clothes, plenty of food, received an Egyptian education, and enjoyed many privileges.",
          "But Moses knew that he was not an Egyptian. He belonged to the people of Israel.",
          "Moses saw how hard the Israelites had to work and how cruelly the Egyptian overseers treated them.",
          "He did not want to forget his own people or the God of his fathers.",
          "One day, Moses saw an Egyptian beating an Israelite. Moses became angry and, while defending his fellow Israelite, killed the Egyptian and hid his body in the sand.",
          "The next day, he saw two Israelites fighting and tried to make peace between them.",
          "But one of them asked: \"Who made you a ruler and a judge over us? Are you going to kill me as you killed the Egyptian?\" Moses realized that people already knew what he had done.",
          "Soon Pharaoh heard about it too. He wanted to kill Moses, so Moses fled from Egypt to the land of Midian.",
          "Now Moses had no royal palace, expensive clothes, or riches. He was a stranger in a foreign land.",
          "One day, Moses sat down beside a well. Seven daughters of a Midianite priest came there to draw water for their father's flock.",
          "But some other shepherds began driving the girls away from the water.",
          "Moses defended them and helped water their sheep.",
          "When the girls returned home, their father was surprised that they had come back so early.",
          "They told him about a stranger who had protected them and helped with their animals.",
          "Their father invited Moses into his home.",
          "Moses stayed with him and married his daughter Zipporah. Later, they had a son.",
          "Moses became a shepherd. For many years, he looked after flocks in the wilderness.",
          "Meanwhile, the Israelites continued to suffer in Egypt. They worked terribly hard, wept, and cried out to God for help.",
          "The Lord heard their prayers.",
          "He remembered His promise to Abraham, Isaac, and Jacob and intended to deliver His people."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Burning Bush",
        "paragraphs": [
          "One day, Moses was tending his father-in-law's flock and came to Mount Horeb.",
          "Suddenly, he saw something extraordinary.",
          "A thornbush was burning in the wilderness. Flames surrounded its branches, but the bush was not being consumed.",
          "Moses was amazed.",
          "\"I will go over and look at this great sight,\" he thought. \"Why isn't the bush burning up?\" As Moses approached, the Lord called to him from the middle of the bush: \"Moses, Moses!\" He answered: \"Here I am!\" God told him not to come any closer and to take off his sandals because the place where he was standing was holy ground.",
          "The Lord said: \"I am the God of your father—the God of Abraham, the God of Isaac, and the God of Jacob.\" Moses hid his face because he was afraid to look at God.",
          "Then the Lord told him that He had seen the suffering of His people in Egypt, heard their cries, and knew their sorrows.",
          "God had decided to deliver the Israelites from slavery and lead them to the good land He had promised their ancestors.",
          "For this task, He called Moses.",
          "The Lord commanded Moses to return to Egypt, go to Pharaoh, and lead the people of Israel out of the country.",
          "But Moses was afraid.",
          "\"Who am I that I should go to Pharaoh and bring the children of Israel out of Egypt?\" he asked.",
          "God answered: \"I will certainly be with you!\" Moses also asked what he should tell the Israelites if they wanted to know the name of the God who had sent him.",
          "God replied: \"I AM WHO I AM.\" The Lord instructed Moses to tell the people that the God of their fathers had sent him to deliver them from Egypt.",
          "But Moses still had doubts. He was afraid the people would not believe him.",
          "So God gave him special signs.",
          "Moses threw his staff onto the ground, and it became a snake. Then, when he took the snake by its tail as God commanded, it became a staff again.",
          "God gave him another sign as well, so that the people would believe the Lord had truly sent him.",
          "But Moses said that he was not a good speaker.",
          "God reminded him that He was the One who had made the human mouth and that He could teach a person what to say.",
          "The Lord promised to be with Moses and help him.",
          "When Moses continued to hesitate, God appointed his brother Aaron to help him speak to the people and to Pharaoh.",
          "Then Moses agreed to carry out God's command.",
          "He returned to Egypt so that he and Aaron could tell the Israelites about God's promise to deliver them.",
          "God had not forgotten His people. He heard their prayers and was already preparing the way for their rescue."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Why did Pharaoh order the newborn Israelite boys to be thrown into the river?",
      "How did Moses’ mother try to save her son?",
      "Who found baby Moses in the basket?",
      "Why did Moses have to flee from Egypt?",
      "What unusual sight did Moses see near Mount Horeb?",
      "What task did God give Moses?",
      "What did God promise Moses when he was afraid?"
    ],
    "promise": {
      "body": "God had promised Abraham, Isaac, and Jacob that He would care for their descendants. Many years passed, and the Israelites became slaves, but God did not forget His promise.\n\nHe saw their suffering, heard their prayers, and called Moses to deliver His people.\n\nGod also promised Moses that He would be with him and help him accomplish this task.",
      "keyLine": "God is always faithful to His promises, even when we have to wait a long time."
    },
    "connection": {
      "body": "When the people of Israel were suffering in Egypt, God heard their prayers and called Moses to deliver them from slavery.\n\nAs a tiny baby, Moses was saved from Pharaoh’s cruel command. God preserved his life because He had a special task for him.\n\nMany years later, Jesus was born. King Herod also tried to kill young children, but God protected Jesus.\n\nMoses was sent to lead the Israelites out of Egypt. Jesus came to deliver us from the slavery of sin.\n\nGod told Moses, “I will certainly be with you.” And through the birth of Jesus, an even greater promise was fulfilled — Immanuel, meaning “God with us” (Matthew 1:23).",
      "keyLine": "Moses was God’s servant, sent to deliver Israel. Jesus is God’s Son, our Savior."
    },
    "familyChallenge": {
      "intro": "Gather together as a family in the evening. Turn off the TV, put away your phones, and sit in complete silence for one minute.",
      "instruction": "Afterward, let everyone share which sounds they heard that they hadn't noticed before.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Then talk together: “Why is it sometimes hard to stop and listen carefully?” “How can we learn to listen more carefully to God’s Word?”",
      "ending": "Remember how Moses stopped beside the burning bush and heard God calling him.\n\nRead Exodus 3:4 together and finish with a short prayer, asking God to help your family pay attention to His Word.\n\nGod speaks to us through His Word. It is important to make time to listen.",
      "prayer": "“God, help our family listen carefully to Your Word and follow it.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 8",
      "completed": "Day 8 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 8",
    "title": "Моисей — у Бога есть план",
    "subtitle": "От корзинки из тростника до Божьего призвания",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Я буду с тобою».",
      "reference": "Исход 3:12"
    },
    "storyPages": [
      {
        "title": "Корзинка из тростника",
        "paragraphs": [
          "Вы уже знаете, что Иосиф и его братья долгое время счастливо жили в Египте. Наконец они состарились и умерли, но после них осталось многочисленное потомство. Так в Египте оказалось много тысяч евреев. Все они были внуками и правнуками Иакова.",
          "Вы также знаете, что у Иакова было два имени. Его второе имя — Израиль. Это имя дал ему Бог.",
          "Поэтому все сыновья Иакова назывались детьми Израиля, а их потомки продолжали называться сынами Израилевыми, или израильтянами.",
          "Как вы уже знаете, они больше не жили в Ханаанской земле, а поселились в Египте, потому что на их родине был голод и они отправились в Египет, чтобы найти пищу. Там они пасли свои стада овец.",
          "Но со временем на престол взошёл другой фараон. Он не знал Иосифа и возненавидел израильтян.",
          "Новый фараон видел, что израильский народ становился очень многочисленным, и боялся, что однажды они могут объединиться с врагами Египта.",
          "Поэтому он заставлял израильтян выполнять тяжёлую работу. Они делали кирпичи, строили города и трудились под надзором жестоких надсмотрщиков.",
          "Но чем сильнее египтяне угнетали израильтян, тем многочисленнее становился их народ.",
          "Тогда фараон издал страшный приказ: всех новорождённых мальчиков израильского народа следовало бросать в реку.",
          "Одна благочестивая израильская женщина родила сына. Она принадлежала к народу Израиля, любила Бога и доверяла Ему.",
          "Женщина знала о жестоком приказе фараона, поэтому решила спасти своего мальчика. Она прятала его дома в течение трёх месяцев.",
          "Но ребёнок рос, и скрывать его становилось всё труднее.",
          "Тогда мать сделала небольшую корзинку из тростника, обмазала её смолой, чтобы она не пропускала воду, положила в неё младенца и отнесла к реке Нил.",
          "Она поставила корзинку среди тростника возле берега. Старшая сестра мальчика осталась неподалёку, чтобы увидеть, что с ним произойдёт.",
          "Вскоре к реке пришла дочь фараона со своими служанками. Она заметила корзинку среди тростника и велела принести её.",
          "Когда царевна открыла корзинку, то увидела маленького плачущего мальчика.",
          "Ей стало жалко младенца. Она поняла, что это один из еврейских детей.",
          "Тогда сестра мальчика подошла и спросила: «Не позвать ли тебе кормилицу из еврейских женщин, чтобы она выкормила для тебя ребёнка?»",
          "Царевна согласилась.",
          "Девочка побежала и позвала родную мать мальчика.",
          "Так Бог устроил, что мать снова получила возможность заботиться о своём сыне.",
          "Когда мальчик подрос, мать привела его к дочери фараона. Царевна приняла его как своего сына и назвала Моисеем, потому что вынула его из воды.",
          "Так Бог сохранил жизнь ребёнку, которому в будущем предстояло выполнить великое поручение."
        ],
        "imageIndex": 0
      },
      {
        "title": "Выбор Моисея",
        "paragraphs": [
          "Моисей вырос во дворце фараона. У него была красивая одежда, еда, он обучался египетской мудрости и пользовался многими привилегиями.",
          "Но Моисей знал, что он не египтянин. Он принадлежал к народу Израиля.",
          "Моисей видел, как тяжело работают израильтяне и как жестоко обращаются с ними египетские надсмотрщики.",
          "Он не хотел забывать свой народ и Бога своих отцов.",
          "Однажды Моисей увидел, как египтянин избивает израильтянина. Моисей разгневался и, защищая своего соплеменника, убил египтянина, а его тело спрятал в песке.",
          "На следующий день он увидел двух израильтян, которые ссорились, и попытался их примирить.",
          "Но один из них спросил: «Кто поставил тебя начальником и судьёй над нами? Не хочешь ли ты убить меня, как убил египтянина?»",
          "Моисей понял, что о его поступке уже стало известно.",
          "Вскоре об этом услышал и фараон. Он захотел убить Моисея, поэтому Моисей убежал из Египта в Мадиамскую землю.",
          "Теперь у него не было царского дворца, дорогой одежды и богатства. Он оказался в чужой стране.",
          "Однажды Моисей сел возле колодца. Туда пришли семь дочерей мадиамского священника, чтобы напоить стадо своего отца.",
          "Но другие пастухи начали отгонять девушек от воды.",
          "Моисей заступился за них и помог напоить овец.",
          "Когда девушки вернулись домой, их отец удивился, почему они пришли так рано.",
          "Они рассказали ему о незнакомце, который защитил их и помог со скотом.",
          "Отец пригласил Моисея в свой дом.",
          "Моисей остался жить у него и женился на его дочери Сепфоре. Впоследствии у них родился сын.",
          "Так Моисей стал пастухом. Многие годы он пас стада в пустыне.",
          "А тем временем израильтяне продолжали страдать в Египте. Они тяжело работали, плакали и взывали к Богу о помощи.",
          "Господь слышал их молитвы.",
          "Он помнил Своё обещание Аврааму, Исааку и Иакову и намеревался освободить Свой народ."
        ],
        "imageIndex": 1
      },
      {
        "title": "Горящий терновый куст",
        "paragraphs": [
          "Однажды Моисей пас стадо своего тестя и пришёл к горе Хорив.",
          "Вдруг он увидел нечто необыкновенное.",
          "Посреди пустыни горел терновый куст. Пламя охватывало его ветви, но сам куст не сгорал.",
          "Моисей очень удивился.",
          "«Пойду и посмотрю на это великое явление, почему куст не сгорает», — подумал он.",
          "Когда Моисей приблизился, Господь позвал его из середины куста: «Моисей! Моисей!»",
          "Он ответил: «Вот я!»",
          "Бог велел ему не приближаться и снять обувь, потому что место, на котором он стоял, было святой землёй.",
          "Господь сказал: «Я Бог отца твоего, Бог Авраама, Бог Исаака и Бог Иакова».",
          "Моисей закрыл своё лицо, потому что боялся смотреть на Бога.",
          "Тогда Господь сказал ему, что видел страдания Своего народа в Египте, слышал его плач и знает его скорби.",
          "Бог решил освободить израильтян из рабства и привести их в хорошую землю, которую обещал их праотцам.",
          "Для этого Он призвал Моисея.",
          "Господь повелел ему вернуться в Египет, пойти к фараону и вывести израильский народ.",
          "Но Моисей испугался.",
          "«Кто я, чтобы мне идти к фараону и вывести сынов Израилевых из Египта?» — спросил он.",
          "Бог ответил: «Я буду с тобою!»",
          "Моисей также спросил, что ему сказать израильтянам, если они захотят узнать имя Бога, Который послал его.",
          "Бог ответил: «Я есмь Сущий».",
          "Господь повелел Моисею сказать народу, что Бог их отцов послал его, чтобы освободить их из Египта.",
          "Но Моисей всё ещё сомневался. Он боялся, что люди не поверят ему.",
          "Тогда Бог дал ему особые знамения.",
          "Моисей бросил свой посох на землю, и тот превратился в змея. Когда же он по Божьему повелению взял змея за хвост, тот снова стал посохом.",
          "Затем Бог дал ему ещё одно знамение, чтобы народ поверил, что Господь действительно послал его.",
          "Но Моисей сказал, что не умеет хорошо говорить.",
          "Бог напомнил ему, что именно Он сотворил человеческие уста и может научить человека говорить.",
          "Господь пообещал быть с ним и помогать ему.",
          "Когда Моисей продолжал колебаться, Бог назначил его брата Аарона помогать ему говорить перед народом и фараоном.",
          "Тогда Моисей согласился исполнить Божье поручение.",
          "Он вернулся в Египет, чтобы вместе с Аароном рассказать израильтянам о Божьем обещании освобождения.",
          "Бог не забыл Свой народ. Он слышал его молитвы и уже готовил путь к спасению."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Почему фараон приказал бросать новорождённых израильских мальчиков в реку?",
      "Как мама Моисея пыталась спасти своего сына?",
      "Кто нашёл маленького Моисея в корзинке?",
      "Почему Моисею пришлось бежать из Египта?",
      "Что необычного Моисей увидел возле горы Хорив?",
      "Какое поручение Бог дал Моисею?",
      "Что Бог пообещал Моисею, когда тот боялся?"
    ],
    "promise": {
      "body": "Бог обещал Аврааму, Исааку и Иакову заботиться об их потомках. Прошло много лет, и израильтяне оказались в рабстве, но Бог не забыл Своего обещания.\n\nОн видел их страдания, слышал их молитвы и призвал Моисея, чтобы освободить Свой народ.\n\nБог также пообещал Моисею быть с ним и помогать ему выполнить это поручение.",
      "keyLine": "Бог всегда верен Своим обещаниям, даже когда нам приходится долго ждать."
    },
    "connection": {
      "body": "Когда народ Израиля страдал в Египте, Бог услышал его молитвы и призвал Моисея, чтобы освободить людей из рабства.\n\nЕщё маленьким младенцем Моисей был спасён от жестокого приказа фараона. Бог сохранил его жизнь, потому что у Него было для Моисея особое поручение.\n\nЧерез много лет родился Иисус. Царь Ирод тоже пытался убить маленьких детей, но Бог сохранил жизнь Иисуса.\n\nМоисей был послан, чтобы вывести израильтян из Египта. Иисус пришёл, чтобы освободить нас от рабства греха.\n\nБог сказал Моисею: «Я буду с тобою». А через рождение Иисуса исполнилось ещё более великое обещание — Еммануил, что означает «С нами Бог» (Матфея 1:23).",
      "keyLine": "Моисей был Божьим слугой, посланным для освобождения Израиля. Иисус — Божий Сын, наш Спаситель."
    },
    "familyChallenge": {
      "intro": "Соберитесь всей семьёй вечером, выключите телевизор, отложите телефоны и посидите одну минуту в полной тишине.",
      "instruction": "После этого пусть каждый расскажет, какие звуки он услышал, хотя раньше не обращал на них внимания.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Затем поговорите: «Почему нам иногда трудно остановиться и внимательно слушать?» «Как мы можем научиться внимательнее слушать Божье Слово?»",
      "ending": "Вспомните, как Моисей остановился возле горящего куста и услышал Божий призыв.\n\nПрочитайте вместе Исход 3:4 и завершите короткой молитвой, попросив Бога помочь вашей семье быть внимательной к Его Слову.\n\nБог говорит с нами через Своё Слово. Важно находить время, чтобы слушать его.",
      "prayer": "«Боже, помоги нашей семье внимательно слушать Твоё Слово и исполнять его»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 8",
      "completed": "День 8 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

