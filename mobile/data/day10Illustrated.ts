import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_TEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_TEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day10/story/01-provision.jpg"),
  require("../assets/advent/day10/story/02-sinai.jpg"),
  require("../assets/advent/day10/story/03-calf.jpg"),
  require("../assets/advent/day10/story/04-tabernacle.jpg"),
  require("../assets/advent/day10/story/05-spies.jpg"),
  require("../assets/advent/day10/story/06-journey.jpg"),
  require("../assets/advent/day10/story/07-serpent.jpg"),
  require("../assets/advent/day10/story/08-nebo.jpg"),
];
export const DAY_TEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 10",
    "title": "Бог святий і вірний",
    "subtitle": "Бог веде Свій народ",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Бог вірний, що стереже заповіта та милість для тих, хто любить Його».",
      "reference": "Повторення Закону 7:9"
    },
    "storyPages": [
      {
        "title": "Манна та вода зі скелі",
        "paragraphs": [
          "Ізраїльтяни були дуже щасливі, що нарешті звільнилися з рабства в Єгипті. Тепер ними керував лагідний начальник — Мойсей. Але подорож пустелею виявилася нелегкою.",
          "Навколо простягалися піски та каміння. Не було ані полів із зерном, ані садів із фруктами. Люди почали хвилюватися, що їм не вистачить їжі. Вони нарікали на Мойсея й Аарона, згадуючи, як у Єгипті мали хліб та м’ясо.",
          "Але Господь не забув Свого народу. Бог пообіцяв посилати їм хліб із неба. Наступного ранку, коли зійшла роса, ізраїльтяни побачили на землі дрібні білі крупинки. «Що це?» — здивовано запитували вони. Мойсей пояснив, що це хліб, який Господь дав їм для їжі.",
          "Люди назвали його манною. Вона була схожа на маленькі білі зернятка й мала приємний солодкуватий смак. Кожного ранку ізраїльтяни збирали стільки манни, скільки було потрібно їхнім сім’ям. Бог навчав їх щодня довіряти Йому.",
          "Але одного разу народові забракло води. У пустелі стояла страшна спека, і люди почали нарікати на Мойсея. Вони запитували, навіщо він вивів їх із Єгипту, якщо тепер вони можуть загинути від спраги.",
          "Мойсей звернувся до Господа по допомогу. Бог наказав йому взяти посох і вдарити по скелі біля Хориву. Мойсей послухався, і зі скелі потекла вода. Люди змогли напитися.",
          "Господь показав, що Він може подбати про Свій народ навіть там, де, здавалося, неможливо знайти ані їжі, ані води."
        ],
        "imageIndex": 0
      },
      {
        "title": "Гора Сінай і Божі заповіді",
        "paragraphs": [
          "Минуло кілька місяців відтоді, як ізраїльтяни залишили Єгипет. Вони прийшли до великої гори Сінай і розташували свій табір біля її підніжжя.",
          "Тут Бог захотів укласти завіт зі Своїм народом і навчити його жити за Його волею. Мойсей піднявся на гору, де Господь промовляв до нього.",
          "Бог нагадав ізраїльтянам, як Він визволив їх із Єгипту й привів до Себе. Тепер вони мали слухатися Його голосу та берегти Його завіт. Народ відповів, що виконуватиме все, що сказав Господь.",
          "На третій день над горою з’явилася густа хмара. Почулися громи, засяяли блискавки й пролунав гучний звук сурми. Гора затремтіла, і народ дуже злякався.",
          "Бог промовив до ізраїльтян і дав їм Десять заповідей. Вони мали поклонятися лише істинному Богові, не створювати ідолів, не зневажати Його ім’я та пам’ятати день відпочинку.",
          "Бог також наказав шанувати батька й матір, не вбивати, не чинити перелюбу, не красти, не свідчити неправдиво та не бажати того, що належить іншому. Ці заповіді показували народові, як потрібно любити Бога й правильно ставитися до ближніх.",
          "Мойсей залишався на горі сорок днів і сорок ночей. Господь дав йому дві кам’яні таблиці, на яких були записані Божі заповіді. Бог хотів, щоб ізраїльтяни знали Його волю й жили як народ, що належить Йому."
        ],
        "imageIndex": 1
      },
      {
        "title": "Золотий телець",
        "paragraphs": [
          "Поки Мойсей перебував на горі Сінай, ізраїльтяни почали хвилюватися. Минуло багато днів, а Мойсей усе не повертався. Люди прийшли до Аарона й попросили зробити їм бога, який ішов би перед ними.",
          "Аарон зібрав у людей золоті прикраси, розплавив золото й зробив із нього зображення теляти.",
          "Ізраїльтяни почали поклонятися цьому ідолові. Вони приносили жертви, їли, пили й веселилися перед золотим телям.",
          "Який страшний гріх! Адже зовсім недавно вони обіцяли слухатися Господа, Який визволив їх із рабства.",
          "Бог бачив усе, що відбувалося в таборі. Він сказав Мойсеєві, що народ відвернувся від Нього. Мойсей благав Господа помилувати ізраїльтян і пам’ятати Свою обітницю Авраамові, Ісаакові та Якову.",
          "Коли Мойсей спустився з гори й побачив золотого теляти та людей, які танцювали навколо нього, він дуже засмутився й розгнівався. У гніві він кинув кам’яні таблиці, і вони розбилися.",
          "Мойсей знищив золотого теляти й докорив Ааронові та народові за їхній гріх. Ізраїльтяни порушили завіт із Богом. Їхній непослух мав серйозні наслідки.",
          "Але Мойсей продовжував молитися за народ і просити Божого милосердя. Згодом Господь наказав йому витесати дві нові кам’яні таблиці. Бог знову дав Свій закон і продовжив вести ізраїльтян.",
          "Господь показав, що Він святий і не залишає гріх без покарання, але також милостивий до тих, хто навертається до Нього."
        ],
        "imageIndex": 2
      },
      {
        "title": "Скинія — місце поклоніння Богові",
        "paragraphs": [
          "Господь хотів, щоб ізраїльтяни мали особливе місце для поклоніння Йому. Тому Він дав Мойсеєві докладні вказівки щодо будівництва скинії — великого переносного намету.",
          "Ізраїльтяни мандрували пустелею, тому скинію потрібно було влаштувати так, щоб її можна було розібрати й перенести на інше місце. Для будівництва люди добровільно приносили золото, срібло, мідь, тканини, дерево й інші матеріали.",
          "Майстри, яким Бог дав особливі здібності, виготовляли все за Його повелінням. Скинія мала двір, у якому стояв жертовник для цілопалень та умивальник.",
          "У самому наметі було Святе місце зі світильником, столом для хлібів і жертовником кадіння. За особливою завісою знаходилося Святе Святих, де стояв ковчег завіту. У ньому зберігалися кам’яні таблиці Божого закону.",
          "Господь призначив Аарона та його синів священниками. Вони мали служити Богові й приносити жертви за народ.",
          "Коли скинію було завершено, хмара вкрила її, і слава Господня наповнила намет. Так Бог показав, що Він перебуває серед Свого народу.",
          "Проте ізраїльтяни не могли наближатися до Бога як завгодно. Господь святий, і люди повинні були поклонятися Йому так, як Він наказав. Скинія нагадувала їм, що Бог бажає перебувати зі Своїм народом, але гріх відділяє людину від святого Бога."
        ],
        "imageIndex": 3
      },
      {
        "title": "Мандрівка Ізраїля",
        "paragraphs": [
          "Коли настав час вирушати далі, хмара Господня піднялася над скинією. Це був знак, що ізраїльтянам потрібно збиратися в дорогу.",
          "Мойсей і народ продовжили мандрівку пустелею до землі Ханаанської, яку Бог обіцяв дати нащадкам Авраама. Але дорога була нелегкою.",
          "Люди часто нарікали, скаржилися на труднощі й згадували їжу, яку мали в Єгипті. Бог продовжував годувати їх манною, але вони не завжди були вдячними."
        ],
        "imageIndex": 5
      },
      {
        "title": "Дванадцять розвідників",
        "paragraphs": [
          "Коли ізраїльтяни наблизилися до Ханаану, Мойсей послав дванадцять чоловіків розвідати землю.",
          "Розвідники побачили, що вона дуже родюча. Там росли виноград, інжир, гранати й багато інших плодів. Вони навіть принесли величезне виноградне гроно, щоб показати народові багатство цієї землі.",
          "Але десятеро розвідників почали розповідати, що мешканці Ханаану дуже сильні, а їхні міста добре укріплені. Вони злякалися й переконували народ, що завоювати цю землю неможливо.",
          "Лише двоє розвідників — Ісус Навин і Калев — довіряли Божій обітниці. Вони закликали народ не боятися й слухатися Господа, Який обіцяв дати їм цю землю.",
          "Але ізраїльтяни повірили словам наляканих розвідників. Вони почали плакати, нарікати на Мойсея й навіть хотіли повернутися до Єгипту. Цим народ показав своє невірство.",
          "Через непослух ізраїльтяни не змогли відразу ввійти до обіцяної землі. Господь сказав, що вони мандруватимуть пустелею сорок років, поки не виросте нове покоління. Ісус Навин і Калев, які довіряли Богові, мали ввійти до Ханаану.",
          "Бог був вірним Своїй обітниці, але народові потрібно було навчитися довіряти Йому."
        ],
        "imageIndex": 4
      },
      {
        "title": "Мідний змій",
        "paragraphs": [
          "Минали роки, а ізраїльтяни продовжували мандрувати пустелею. Одного разу народ знову почав нарікати на Бога й Мойсея.",
          "Люди скаржилися, що їм набридла дорога й їжа, яку Бог щодня посилав. Тоді серед народу з’явилися отруйні змії. Вони жалили людей, і багато ізраїльтян померло.",
          "Люди зрозуміли, що згрішили, і прийшли до Мойсея. Вони попросили його помолитися, щоб Господь забрав змій. Мойсей молився за народ.",
          "Бог наказав йому зробити мідного змія й підняти його на жердині. Кожен, кого вкусила змія, міг поглянути на мідного змія й залишитися живим.",
          "Мойсей виконав Божий наказ. Ті, хто повірив Божому слову й подивився на піднятого змія, отримували зцілення.",
          "Ця подія стала важливим прообразом майбутнього спасіння через Ісуса Христа. Багато століть потому Ісус сказав, що, як Мойсей підніс змія в пустелі, так має бути піднесений і Син Людський, щоб кожен, хто вірує в Нього, мав вічне життя."
        ],
        "imageIndex": 6
      },
      {
        "title": "Останні дні Мойсея",
        "paragraphs": [
          "Минуло майже сорок років відтоді, як ізраїльтяни вийшли з Єгипту. За цей час виросло нове покоління. Тепер народ стояв неподалік землі, яку Господь обіцяв їхнім прабатькам.",
          "Мойсей постарів. Йому було сто двадцять років. Він багато років служив Господу, керував народом, молився за нього й навчав Божих заповідей.",
          "Але раніше, коли народ нарікав через нестачу води, Мойсей не послухався Божого повеління так, як мав. Через це Господь сказав, що Мойсей не введе ізраїльтян до обіцяної землі.",
          "Перед смертю Мойсей зібрав народ і нагадав йому все, що Господь зробив для нього. Він закликав ізраїльтян любити Бога всім серцем, слухатися Його заповідей і навчати своїх дітей Божого Слова.",
          "Мойсей також попереджав, щоб народ не забував Господа, коли оселиться в добрій землі. Новим провідником ізраїльтян Бог призначив Ісуса Навина.",
          "Мойсей піднявся на гору Нево. Звідти Господь показав йому землю Ханаанську — ту землю, яку колись обіцяв Авраамові, Ісаакові та Якову.",
          "Мойсей побачив її здалеку, але сам не ввійшов до неї. Там, у Моавській землі, Мойсей помер. Бог поховав його, а ізраїльтяни оплакували свого великого провідника.",
          "Та Божий задум не завершився зі смертю Мойсея. Господь і далі залишався зі Своїм народом. Він виконував обітницю, яку дав багато років тому.",
          "Бог завжди вірний, навіть коли люди виявляють невірність."
        ],
        "imageIndex": 7
      }
    ],
    "questions": [
      "Як Бог забезпечував ізраїльтян їжею та водою в пустелі?",
      "Що сталося на горі Сінай і які заповіді Бог дав народові?",
      "Чому ізраїльтяни зробили золотого теляти?",
      "Для чого Бог наказав побудувати скинію?",
      "Що розповіли дванадцять розвідників після повернення з Ханаану?",
      "Чим Ісус Навин і Калев відрізнялися від інших десяти розвідників?",
      "Що потрібно було зробити людям, яких вкусили змії?",
      "Чому Мойсей не ввійшов до обіцяної землі?",
      "Чого всі ці події навчають нас про Бога?"
    ],
    "promise": {
      "body": "Бог пообіцяв Авраамові, Ісаакові та Якову дати їхнім нащадкам землю Ханаанську й бути їхнім Богом.\n\nІзраїльтяни багато разів нарікали, не слухалися Господа й навіть поклонялися ідолам. Через непослух вони довго мандрували пустелею.\n\nАле Бог не забув Своєї обітниці. Він продовжував піклуватися про народ і готував нове покоління до входу в обіцяну землю.",
      "keyLine": "Божа вірність не залежить від мінливості людських почуттів. Бог виконує те, що обіцяв."
    },
    "connection": {
      "body": "У пустелі Бог годував ізраїльтян манною — хлібом із неба. Але через багато років Ісус сказав: «Я — хліб життя» (Івана 6:35). Манна підтримувала земне життя людей, а Ісус дарує вічне життя тим, хто вірить у Нього.\n\nБог наказав побудувати скинію, щоб Його присутність була серед ізраїльтян. А коли прийшов Ісус, Боже Слово стало тілом і перебувало серед людей (Івана 1:14). Через Христа ми можемо наближатися до Бога.\n\nКоли ізраїльтян жалили отруйні змії, Бог наказав Мойсеєві підняти мідного змія. Ті, хто дивився на нього з вірою в Боже слово, залишалися живими.\n\nІсус Сам пояснив зв'язок із цією подією: як Мойсей підняв змія в пустелі, так і Син Людський має бути піднесений, щоб віруючі в Нього мали вічне життя (Івана 3:14–15).",
      "keyLine": "Ісус — не просто новий провідник. Він Божий Син, Який прийшов спасти нас від гріха й привести до Отця."
    },
    "familyChallenge": {
      "intro": "Створіть удома маленький маршрут із подушок, стільців або інших безпечних предметів.\n\nОдин член сім'ї буде провідником, а інший — мандрівником.",
      "instruction": "Мандрівник заплющує очі, а провідник словами допомагає йому пройти простий, безпечний маршрут. Дорослий повинен бути поруч, щоб ніхто не впав.\n\nПісля цього поміняйтеся ролями.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговоріть усією сім'єю: «Що було важче — вести когось чи довіряти тому, хто веде?»\n\n«Чому ізраїльтянам було важко довіряти Богові, хоча вони вже бачили стільки чудес?»\n\n«У яких ситуаціях нам сьогодні потрібно більше довіряти Богові?»",
      "ending": "Завершіть молитвою, попросивши Бога допомогти вам слухатися Його Слова навіть тоді, коли ви ще не знаєте, що буде далі.\n\nМи не завжди бачимо весь шлях, але можемо довіряти Богові, Який знає, куди нас веде.",
      "prayer": "«Боже, допоможи нам довіряти Тобі й слухатися Твого Слова, навіть коли ми не знаємо всього шляху»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 10",
      "completed": "День 10 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 10",
    "title": "God Is Holy and Faithful",
    "subtitle": "God Leads His People",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“He is God, the faithful God who keeps covenant and mercy.”",
      "reference": "Deuteronomy 7:9"
    },
    "storyPages": [
      {
        "title": "Manna and Water from the Rock",
        "paragraphs": [
          "The Israelites were very happy to be free from slavery in Egypt. Moses was now leading them. But their journey through the wilderness was not easy.",
          "Everywhere they looked, they saw sand and rocks. There were no fields of grain or orchards full of fruit. The people began to worry that they would not have enough food. They complained to Moses and Aaron, remembering the bread and meat they had eaten in Egypt.",
          "But the Lord had not forgotten His people. God promised to send them bread from heaven. The next morning, after the dew had disappeared, the Israelites saw tiny white flakes covering the ground.",
          "“What is it?” they asked in amazement. Moses explained that this was the bread the Lord had given them to eat. The people called it manna. It looked like tiny white seeds and had a pleasant, slightly sweet taste.",
          "Every morning, the Israelites gathered enough manna for their families. God was teaching them to trust Him every day.",
          "But one day, the people had no water. The wilderness was terribly hot, and they began complaining to Moses. They asked why he had brought them out of Egypt if they were now going to die of thirst.",
          "Moses cried out to the Lord for help. God commanded him to take his staff and strike the rock at Horeb.",
          "Moses obeyed, and water flowed from the rock. The people were able to drink.",
          "The Lord showed that He could care for His people even where it seemed impossible to find food or water."
        ],
        "imageIndex": 0
      },
      {
        "title": "Mount Sinai and God’s Commandments",
        "paragraphs": [
          "Several months had passed since the Israelites had left Egypt. They came to the great mountain called Sinai and set up camp at its foot.",
          "There, God wanted to make a covenant with His people and teach them to live according to His will. Moses went up the mountain, where the Lord spoke to him.",
          "God reminded the Israelites how He had delivered them from Egypt and brought them to Himself. Now they were to obey His voice and keep His covenant. The people answered that they would do everything the Lord had said.",
          "On the third day, a thick cloud covered the mountain. Thunder roared, lightning flashed, and a loud trumpet sounded. The mountain trembled, and the people were very afraid.",
          "God spoke to the Israelites and gave them the Ten Commandments. They were to worship the one true God, make no idols, honor His name, and remember the day of rest.",
          "God also commanded them to honor their father and mother, not to murder, commit adultery, steal, bear false witness, or desire what belonged to someone else. These commandments showed the people how to love God and treat their neighbors rightly.",
          "Moses remained on the mountain for forty days and forty nights. The Lord gave him two stone tablets on which God’s commandments were written. God wanted the Israelites to know His will and live as a people who belonged to Him."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Golden Calf",
        "paragraphs": [
          "While Moses was on Mount Sinai, the Israelites began to grow worried. Many days had passed, and Moses had not returned. The people came to Aaron and asked him to make a god who would go before them.",
          "Aaron collected their gold jewelry, melted the gold, and made an image of a calf. The Israelites began worshiping this idol. They offered sacrifices, ate, drank, and celebrated before the golden calf.",
          "What a terrible sin! Only a short time earlier, they had promised to obey the Lord who had delivered them from slavery.",
          "God saw everything that was happening in the camp. He told Moses that the people had turned away from Him. Moses pleaded with the Lord to show mercy to the Israelites and remember His promise to Abraham, Isaac, and Jacob.",
          "When Moses came down the mountain and saw the golden calf and the people dancing around it, he was deeply upset and angry. In his anger, he threw down the stone tablets, and they broke.",
          "Moses destroyed the golden calf and rebuked Aaron and the people for their sin. The Israelites had broken their covenant with God. Their disobedience brought serious consequences.",
          "But Moses continued praying for the people and asking for God's mercy. Later, the Lord commanded him to cut two new stone tablets. God gave His law again and continued leading the Israelites.",
          "The Lord showed that He is holy and does not leave sin unpunished, but He is also merciful to those who turn back to Him."
        ],
        "imageIndex": 2
      },
      {
        "title": "The Tabernacle — A Place to Worship God",
        "paragraphs": [
          "The Lord wanted the Israelites to have a special place where they could worship Him. So He gave Moses detailed instructions for building the tabernacle — a large, portable tent.",
          "Because the Israelites were traveling through the wilderness, the tabernacle had to be made so it could be taken apart and carried to another place. The people willingly brought gold, silver, bronze, cloth, wood, and other materials.",
          "Skilled workers, to whom God had given special abilities, made everything according to His instructions.",
          "The tabernacle had a courtyard with an altar for burnt offerings and a basin for washing.",
          "Inside the tent was the Holy Place, containing a lampstand, a table for the bread, and an altar of incense.",
          "Behind a special curtain was the Most Holy Place, where the ark of the covenant stood. The stone tablets of God's law were kept inside the ark.",
          "The Lord appointed Aaron and his sons as priests. They were to serve God and offer sacrifices on behalf of the people.",
          "When the tabernacle was completed, a cloud covered it, and the glory of the Lord filled the tent. In this way, God showed that He was dwelling among His people.",
          "But the Israelites could not approach God in any way they pleased. The Lord is holy, and the people had to worship Him as He commanded. The tabernacle reminded them that God desired to dwell with His people, but sin separates human beings from a holy God."
        ],
        "imageIndex": 3
      },
      {
        "title": "Israel’s Journey",
        "paragraphs": [
          "When it was time to travel again, the cloud of the Lord rose above the tabernacle. This was the sign that the Israelites should prepare to leave.",
          "Moses and the people continued their journey through the wilderness toward Canaan, the land God had promised to Abraham’s descendants. But the journey was difficult.",
          "The people often complained about their troubles and remembered the food they had eaten in Egypt. God continued feeding them with manna, but they were not always thankful."
        ],
        "imageIndex": 5
      },
      {
        "title": "The Twelve Spies",
        "paragraphs": [
          "When the Israelites approached Canaan, Moses sent twelve men to explore the land. The spies discovered that it was very fruitful. Grapes, figs, pomegranates, and many other fruits grew there. They even brought back an enormous cluster of grapes to show the people how rich the land was.",
          "But ten of the spies said that the people living in Canaan were very strong and their cities were well fortified. They became afraid and convinced the Israelites that conquering the land would be impossible.",
          "Only two of the spies — Joshua and Caleb — trusted God’s promise. They encouraged the people not to be afraid but to obey the Lord, who had promised to give them the land.",
          "Yet the Israelites believed the frightened spies. They began weeping, complaining against Moses, and even wanted to return to Egypt. Their response showed their unbelief.",
          "Because of their disobedience, the Israelites could not immediately enter the Promised Land. The Lord said they would wander in the wilderness for forty years until a new generation had grown up. Joshua and Caleb, who had trusted God, would be allowed to enter Canaan.",
          "God remained faithful to His promise, but the people needed to learn to trust Him."
        ],
        "imageIndex": 4
      },
      {
        "title": "The Bronze Serpent",
        "paragraphs": [
          "Years passed, and the Israelites continued traveling through the wilderness. One day, the people once again complained against God and Moses.",
          "They said they were tired of the journey and the food God provided every day. Then poisonous snakes appeared among the people. The snakes bit them, and many Israelites died.",
          "The people realized that they had sinned and came to Moses. They asked him to pray that the Lord would take away the snakes. Moses prayed for the people.",
          "God commanded him to make a bronze serpent and place it on a pole. Anyone who had been bitten by a snake could look at the bronze serpent and live.",
          "Moses obeyed God's command. Those who believed God's word and looked at the raised serpent were healed.",
          "This event became an important picture pointing forward to salvation through Jesus Christ. Many centuries later, Jesus said that just as Moses lifted up the serpent in the wilderness, so the Son of Man must be lifted up, so that whoever believes in Him may have eternal life."
        ],
        "imageIndex": 6
      },
      {
        "title": "The Last Days of Moses",
        "paragraphs": [
          "Almost forty years had passed since the Israelites had left Egypt. During that time, a new generation had grown up. Now the people were standing near the land the Lord had promised their ancestors.",
          "Moses had grown old. He was one hundred and twenty years old. For many years, he had served the Lord, led the people, prayed for them, and taught them God's commandments.",
          "But earlier, when the people complained about having no water, Moses had failed to obey God's command as he should have. Because of this, the Lord told him that he would not lead the Israelites into the Promised Land.",
          "Before his death, Moses gathered the people and reminded them of everything the Lord had done for them.",
          "He encouraged the Israelites to love God with all their hearts, obey His commandments, and teach His Word to their children.",
          "Moses also warned them not to forget the Lord when they settled in the good land. God appointed Joshua as the new leader of the Israelites.",
          "Moses climbed Mount Nebo. From there, the Lord showed him Canaan — the land He had promised long ago to Abraham, Isaac, and Jacob.",
          "Moses saw it from a distance, but he did not enter it. There, in the land of Moab, Moses died. God buried him, and the Israelites mourned their great leader.",
          "But God's plan did not end with Moses' death. The Lord remained with His people and continued fulfilling the promise He had made many years earlier.",
          "God is always faithful, even when people are unfaithful."
        ],
        "imageIndex": 7
      }
    ],
    "questions": [
      "How did God provide food and water for the Israelites in the wilderness?",
      "What happened at Mount Sinai, and what commandments did God give His people?",
      "Why did the Israelites make the golden calf?",
      "Why did God command the people to build the tabernacle?",
      "What did the twelve spies report after returning from Canaan?",
      "How were Joshua and Caleb different from the other ten spies?",
      "What did those who were bitten by snakes need to do?",
      "Why did Moses not enter the Promised Land?",
      "What do all these events teach us about God?"
    ],
    "promise": {
      "body": "God promised Abraham, Isaac, and Jacob that He would give their descendants the land of Canaan and be their God.\n\nThe Israelites repeatedly complained, disobeyed the Lord, and even worshiped idols. Because of their disobedience, they wandered in the wilderness for many years.\n\nBut God did not forget His promise. He continued caring for His people and prepared a new generation to enter the Promised Land.",
      "keyLine": "God's faithfulness does not depend on our changing feelings. God keeps what He promises."
    },
    "connection": {
      "body": "In the wilderness, God fed the Israelites with manna — bread from heaven. Many years later, Jesus said, “I am the bread of life” (John 6:35). Manna sustained the people's earthly lives, but Jesus gives eternal life to those who believe in Him.\n\nGod commanded the Israelites to build the tabernacle so His presence would dwell among them. When Jesus came, the Word became flesh and dwelt among us (John 1:14). Through Christ, we can draw near to God.\n\nWhen poisonous snakes bit the Israelites, God told Moses to lift up a bronze serpent. Those who looked at it, trusting God's word, lived.\n\nJesus Himself explained the connection: just as Moses lifted up the serpent in the wilderness, the Son of Man must be lifted up, so that those who believe in Him may have eternal life (John 3:14–15).",
      "keyLine": "Jesus is more than another leader. He is the Son of God, who came to save us from sin and bring us to the Father."
    },
    "familyChallenge": {
      "intro": "Create a simple path at home using pillows, chairs, or other safe objects.\n\nOne family member will be the guide, and another will be the traveler.",
      "instruction": "The traveler closes their eyes while the guide gives verbal directions along a simple, safe path. An adult should stay nearby to prevent falls.\n\nThen switch roles.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Talk together: “What was harder — guiding someone or trusting the person who was guiding you?”\n\n“Why was it difficult for the Israelites to trust God, even after seeing so many miracles?”\n\n“In what situations do we need to trust God more today?”",
      "ending": "Finish with a prayer, asking God to help you obey His Word even when you do not know what will happen next.\n\nWe cannot always see the whole path, but we can trust the God who knows where He is leading us.",
      "prayer": "“God, help us trust You and follow Your Word, even when we cannot see the whole journey.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 10",
      "completed": "Day 10 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 10",
    "title": "Бог свят и верен",
    "subtitle": "Бог ведёт Свой народ",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Бог верный, Который хранит завет Свой и милость».",
      "reference": "Второзаконие 7:9"
    },
    "storyPages": [
      {
        "title": "Манна и вода из скалы",
        "paragraphs": [
          "Израильтяне были очень счастливы, что наконец освободились из рабства в Египте. Теперь ими руководил кроткий вождь — Моисей. Но путешествие по пустыне оказалось нелёгким.",
          "Вокруг простирались пески и камни. Не было ни полей с зерном, ни садов с фруктами. Люди начали беспокоиться, что им не хватит пищи. Они жаловались Моисею и Аарону, вспоминая, как в Египте у них был хлеб и мясо.",
          "Но Господь не забыл Свой народ. Бог пообещал посылать им хлеб с неба. На следующее утро, когда сошла роса, израильтяне увидели на земле мелкие белые крупинки.",
          "«Что это?» — удивлённо спрашивали они. Моисей объяснил, что это хлеб, который Господь дал им в пищу. Люди назвали его манной. Она была похожа на маленькие белые зёрнышки и имела приятный сладковатый вкус.",
          "Каждое утро израильтяне собирали столько манны, сколько требовалось их семьям. Бог учил их ежедневно доверять Ему.",
          "Но однажды народу не хватило воды. В пустыне стояла страшная жара, и люди начали жаловаться Моисею. Они спрашивали, зачем он вывел их из Египта, если теперь они могут умереть от жажды.",
          "Моисей обратился к Господу за помощью. Бог повелел ему взять посох и ударить по скале у Хорива.",
          "Моисей послушался, и из скалы потекла вода. Люди смогли напиться.",
          "Господь показал, что Он может позаботиться о Своём народе даже там, где, казалось, невозможно найти ни пищи, ни воды."
        ],
        "imageIndex": 0
      },
      {
        "title": "Гора Синай и Божьи заповеди",
        "paragraphs": [
          "Прошло несколько месяцев с тех пор, как израильтяне покинули Египет. Они пришли к большой горе Синай и расположились лагерем у её подножия.",
          "Здесь Бог захотел заключить завет со Своим народом и научить его жить по Своей воле. Моисей поднялся на гору, где Господь говорил с ним.",
          "Бог напомнил израильтянам, как Он освободил их из Египта и привёл к Себе. Теперь они должны были слушаться Его голоса и хранить Его завет. Народ ответил, что исполнит всё, что сказал Господь.",
          "На третий день над горой появилось густое облако. Раздались громы, засверкали молнии и прозвучал громкий звук трубы. Гора содрогнулась, и народ очень испугался.",
          "Бог обратился к израильтянам и дал им Десять заповедей. Они должны были поклоняться только истинному Богу, не создавать идолов, не произносить Его имя напрасно и помнить день покоя.",
          "Бог также повелел почитать отца и мать, не убивать, не прелюбодействовать, не красть, не свидетельствовать ложно и не желать того, что принадлежит другому. Эти заповеди показывали народу, как нужно любить Бога и правильно относиться к ближним.",
          "Моисей оставался на горе сорок дней и сорок ночей. Господь дал ему две каменные скрижали, на которых были записаны Божьи заповеди. Бог хотел, чтобы израильтяне знали Его волю и жили как народ, принадлежащий Ему."
        ],
        "imageIndex": 1
      },
      {
        "title": "Золотой телец",
        "paragraphs": [
          "Пока Моисей находился на горе Синай, израильтяне начали беспокоиться. Прошло много дней, а Моисей всё не возвращался. Люди пришли к Аарону и попросили сделать им бога, который шёл бы перед ними.",
          "Аарон собрал у людей золотые украшения, расплавил золото и сделал из него изображение тельца.",
          "Израильтяне начали поклоняться этому идолу. Они приносили жертвы, ели, пили и веселились перед золотым тельцом.",
          "Какой страшный грех! Ведь совсем недавно они обещали слушаться Господа, Который освободил их из рабства.",
          "Бог видел всё, что происходило в лагере. Он сказал Моисею, что народ отвернулся от Него. Моисей умолял Господа помиловать израильтян и вспомнить Своё обещание Аврааму, Исааку и Иакову.",
          "Когда Моисей спустился с горы и увидел золотого тельца и людей, танцующих вокруг него, он очень огорчился и разгневался. В гневе он бросил каменные скрижали, и они разбились.",
          "Моисей уничтожил золотого тельца и обличил Аарона и народ за их грех. Израильтяне нарушили завет с Богом. Их непослушание имело серьёзные последствия.",
          "Но Моисей продолжал молиться за народ и просить Божьей милости. Позже Господь повелел ему вытесать две новые каменные скрижали. Бог снова дал Свой закон и продолжил вести израильтян.",
          "Господь показал, что Он свят и не оставляет грех без наказания, но также милостив к тем, кто обращается к Нему."
        ],
        "imageIndex": 2
      },
      {
        "title": "Скиния — место поклонения Богу",
        "paragraphs": [
          "Господь хотел, чтобы у израильтян было особое место для поклонения Ему. Поэтому Он дал Моисею подробные указания о строительстве скинии — большого переносного шатра.",
          "Израильтяне путешествовали по пустыне, поэтому скинию нужно было устроить так, чтобы её можно было разобрать и перенести на другое место. Для строительства люди добровольно приносили золото, серебро, медь, ткани, дерево и другие материалы.",
          "Мастера, которым Бог дал особые способности, изготавливали всё по Его повелению. У скинии был двор, где находились жертвенник для всесожжений и умывальник.",
          "В самом шатре располагалось Святое место со светильником, столом для хлебов и жертвенником для курений. За особой завесой находилось Святое Святых, где стоял ковчег завета. В нём хранились каменные скрижали Божьего закона.",
          "Господь назначил Аарона и его сыновей священниками. Они должны были служить Богу и приносить жертвы за народ.",
          "Когда скиния была закончена, облако покрыло её, и слава Господня наполнила шатёр. Так Бог показал, что Он пребывает среди Своего народа.",
          "Однако израильтяне не могли приближаться к Богу как им вздумается. Господь свят, и люди должны были поклоняться Ему так, как Он повелел. Скиния напоминала им, что Бог желает пребывать со Своим народом, но грех отделяет человека от святого Бога."
        ],
        "imageIndex": 3
      },
      {
        "title": "Путешествие Израиля",
        "paragraphs": [
          "Когда пришло время отправляться дальше, облако Господне поднялось над скинией. Это было знаком, что израильтянам нужно собираться в дорогу.",
          "Моисей и народ продолжили путешествие по пустыне к Ханаанской земле, которую Бог обещал дать потомкам Авраама. Но дорога была нелёгкой.",
          "Люди часто жаловались, роптали на трудности и вспоминали пищу, которую имели в Египте. Бог продолжал кормить их манной, но они не всегда были благодарны."
        ],
        "imageIndex": 5
      },
      {
        "title": "Двенадцать разведчиков",
        "paragraphs": [
          "Когда израильтяне приблизились к Ханаану, Моисей послал двенадцать человек разведать землю.",
          "Разведчики увидели, что она очень плодородна. Там росли виноград, инжир, гранаты и многие другие плоды. Они даже принесли огромную виноградную гроздь, чтобы показать народу богатство этой земли.",
          "Но десять разведчиков начали рассказывать, что жители Ханаана очень сильны, а их города хорошо укреплены. Они испугались и убеждали народ, что завоевать эту землю невозможно.",
          "Только двое разведчиков — Иисус Навин и Халев — доверяли Божьему обещанию. Они призывали народ не бояться и слушаться Господа, Который обещал дать им эту землю.",
          "Но израильтяне поверили словам испуганных разведчиков. Они начали плакать, жаловаться Моисею и даже захотели вернуться в Египет. Этим народ показал своё неверие.",
          "Из-за непослушания израильтяне не смогли сразу войти в Обетованную землю. Господь сказал, что они будут странствовать по пустыне сорок лет, пока не вырастет новое поколение. Иисус Навин и Халев, которые доверяли Богу, должны были войти в Ханаан.",
          "Бог был верен Своему обещанию, но народу нужно было научиться доверять Ему."
        ],
        "imageIndex": 4
      },
      {
        "title": "Медный змей",
        "paragraphs": [
          "Проходили годы, а израильтяне продолжали странствовать по пустыне. Однажды народ снова начал роптать на Бога и Моисея.",
          "Люди жаловались, что им надоела дорога и пища, которую Бог посылал каждый день. Тогда среди народа появились ядовитые змеи. Они жалили людей, и многие израильтяне умерли.",
          "Люди поняли, что согрешили, и пришли к Моисею. Они попросили его помолиться, чтобы Господь удалил змей. Моисей молился за народ.",
          "Бог повелел ему сделать медного змея и поднять его на шесте. Каждый, кого ужалила змея, мог посмотреть на медного змея и остаться живым.",
          "Моисей исполнил Божье повеление. Те, кто поверил Божьему слову и посмотрел на поднятого змея, получали исцеление.",
          "Это событие стало важным прообразом будущего спасения через Иисуса Христа. Много столетий спустя Иисус сказал, что, как Моисей вознёс змея в пустыне, так должен быть вознесён и Сын Человеческий, чтобы каждый верующий в Него имел вечную жизнь."
        ],
        "imageIndex": 6
      },
      {
        "title": "Последние дни Моисея",
        "paragraphs": [
          "Прошло почти сорок лет с тех пор, как израильтяне вышли из Египта. За это время выросло новое поколение. Теперь народ стоял неподалёку от земли, которую Господь обещал его праотцам.",
          "Моисей состарился. Ему было сто двадцать лет. Многие годы он служил Господу, руководил народом, молился за него и учил Божьим заповедям.",
          "Но раньше, когда народ роптал из-за недостатка воды, Моисей не послушался Божьего повеления так, как должен был. Из-за этого Господь сказал, что Моисей не введёт израильтян в Обетованную землю.",
          "Перед смертью Моисей собрал народ и напомнил ему всё, что Господь сделал для него. Он призвал израильтян любить Бога всем сердцем, слушаться Его заповедей и учить своих детей Божьему Слову.",
          "Моисей также предупреждал, чтобы народ не забывал Господа, когда поселится в хорошей земле.",
          "Новым вождём израильтян Бог назначил Иисуса Навина.",
          "Моисей поднялся на гору Нево. Оттуда Господь показал ему Ханаанскую землю — ту землю, которую когда-то обещал Аврааму, Исааку и Иакову.",
          "Моисей увидел её издалека, но сам не вошёл в неё. Там, в Моавской земле, Моисей умер. Бог похоронил его, а израильтяне оплакивали своего великого вождя.",
          "Но Божий замысел не завершился со смертью Моисея. Господь и дальше оставался со Своим народом. Он исполнял обещание, которое дал много лет назад.",
          "Бог всегда верен, даже когда люди проявляют неверность."
        ],
        "imageIndex": 7
      }
    ],
    "questions": [
      "Как Бог обеспечивал израильтян пищей и водой в пустыне?",
      "Что произошло на горе Синай и какие заповеди Бог дал народу?",
      "Почему израильтяне сделали золотого тельца?",
      "Для чего Бог повелел построить скинию?",
      "Что рассказали двенадцать разведчиков после возвращения из Ханаана?",
      "Чем Иисус Навин и Халев отличались от остальных десяти разведчиков?",
      "Что нужно было сделать людям, которых ужалили змеи?",
      "Почему Моисей не вошёл в Обетованную землю?",
      "Чему все эти события учат нас о Боге?"
    ],
    "promise": {
      "body": "Бог обещал Аврааму, Исааку и Иакову дать их потомкам Ханаанскую землю и быть их Богом.\n\nИзраильтяне много раз роптали, не слушались Господа и даже поклонялись идолам. Из-за непослушания они долгие годы странствовали по пустыне.\n\nНо Бог не забыл Своего обещания. Он продолжал заботиться о народе и готовил новое поколение к входу в Обетованную землю.",
      "keyLine": "Божья верность не зависит от изменчивости человеческих чувств. Бог исполняет то, что обещал."
    },
    "connection": {
      "body": "В пустыне Бог кормил израильтян манной — хлебом с неба. Но через много лет Иисус сказал: «Я есмь хлеб жизни» (Иоанна 6:35). Манна поддерживала земную жизнь людей, а Иисус дарует вечную жизнь тем, кто верит в Него.\n\nБог повелел построить скинию, чтобы Его присутствие было среди израильтян. Когда пришёл Иисус, Слово стало плотью и обитало среди людей (Иоанна 1:14). Через Христа мы можем приближаться к Богу.\n\nКогда израильтян жалили ядовитые змеи, Бог повелел Моисею поднять медного змея. Те, кто смотрел на него с верой в Божье слово, оставались живы.\n\nИисус Сам объяснил связь с этим событием: как Моисей вознёс змея в пустыне, так и Сын Человеческий должен быть вознесён, чтобы верующие в Него имели вечную жизнь (Иоанна 3:14–15).",
      "keyLine": "Иисус — не просто новый вождь. Он Божий Сын, Который пришёл спасти нас от греха и привести к Отцу."
    },
    "familyChallenge": {
      "intro": "Создайте дома небольшой маршрут из подушек, стульев или других безопасных предметов.\n\nОдин член семьи будет проводником, а другой — путешественником.",
      "instruction": "Путешественник закрывает глаза, а проводник словами помогает ему пройти простой и безопасный маршрут. Взрослый должен находиться рядом, чтобы никто не упал.\n\nЗатем поменяйтесь ролями.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговорите всей семьёй: «Что было труднее — вести кого-то или доверять тому, кто тебя ведёт?»\n\n«Почему израильтянам было трудно доверять Богу, хотя они уже видели столько чудес?»\n\n«В каких ситуациях нам сегодня нужно больше доверять Богу?»",
      "ending": "Завершите молитвой, попросив Бога помочь вам слушаться Его Слова даже тогда, когда вы ещё не знаете, что будет дальше.\n\nМы не всегда видим весь путь, но можем доверять Богу, Который знает, куда нас ведёт.",
      "prayer": "«Боже, помоги нам доверять Тебе и слушаться Твоего Слова, даже когда мы не знаем всего пути»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 10",
      "completed": "День 10 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

