import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_TWELVE_ICONS = ADVENT_SECTION_ICONS;
export const DAY_TWELVE_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day12/story/01-naomi-ruth.jpg"),
  require("../assets/advent/day12/story/02-gleaning.jpg"),
  require("../assets/advent/day12/story/03-boaz.jpg"),
  require("../assets/advent/day12/story/04-samuel.jpg"),
];
export const DAY_TWELVE_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 12",
    "title": "Бог піклується про Своїх людей",
    "subtitle": "Історії Рут і Самуїла",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Нехай Господь віддасть тобі за твоє діло, і нехай буде повна нагорода твоя від Господа, Бога Ізраїлевого, під крила Якого ти прийшла сховатися!»",
      "reference": "Рут 2:12"
    },
    "storyPages": [
      {
        "title": "Рут — жінка з країни Моав",
        "paragraphs": [
          "У Вифлеємі жив чоловік на ім’я Елімелех зі своєю дружиною Ноомі та двома синами. Одного разу в Ізраїльській землі настав голод. Людям бракувало їжі, тому Елімелех вирішив переселитися разом із сім’єю до Моавського краю.",
          "Там вони оселилися й почали нове життя. Але невдовзі трапилося велике горе — Елімелех помер, і Ноомі залишилася вдовою.",
          "Згодом її два сини одружилися з моавитянками. Одну звали Орпа, а другу — Рут. Минуло близько десяти років. Та горе знову прийшло в цю сім’ю: обидва сини Ноомі померли. Тепер Ноомі залишилася без чоловіка й синів. Поруч із нею були лише дві молоді невістки.",
          "Одного дня Ноомі почула, що Господь знову дав хліб Своєму народові в Юдеї. Вона вирішила повернутися до рідного Вифлеєма. Орпа й Рут вирушили разом із нею.",
          "Дорогою Ноомі зупинилася й сказала невісткам, щоб вони повернулися до своїх матерів. Вона хотіла, щоб вони мали можливість знову вийти заміж і влаштувати своє життя. Обидві жінки плакали, бо любили Ноомі й не хотіли залишати її.",
          "Зрештою Орпа попрощалася зі свекрухою та повернулася до свого народу. Але Рут не хотіла йти.",
          "Ноомі знову попросила її повернутися, та Рут відповіла: «Куди підеш ти, туди піду й я, а де житимеш ти, там житиму й я. Народ твій буде моїм народом, а Бог твій — моїм Богом» (Рут 1:16, близький переказ).",
          "Рут вирішила залишитися з Ноомі. Вона була готова покинути свою батьківщину й піти в незнайому землю, щоб піклуватися про жінку, яка стала їй рідною. Так дві вдови разом прийшли до Вифлеєма."
        ],
        "imageIndex": 0
      },
      {
        "title": "Рут на полі Боаза",
        "paragraphs": [
          "Коли Ноомі та Рут повернулися до Вифлеєма, саме почалися жнива ячменю. Жінки були бідними.",
          "У них не було достатньо їжі, тому Рут вирішила піти в поле й збирати колоски, які залишалися після женців."
        ],
        "imageIndex": 1
      },
      {
        "title": "Боаз піклується про Рут",
        "paragraphs": [
          "Божий Закон дозволяв бідним людям, вдовам і чужинцям збирати такі колоски, щоб вони мали чим харчуватися.",
          "Рут прийшла на поле, яке належало багатому й шанованому чоловікові на ім’я Боаз. Він був родичем покійного чоловіка Ноомі. Боаз прийшов оглянути свої поля й помітив молоду жінку, яка старанно працювала за женцями. Він запитав своїх слуг, хто вона.",
          "Йому розповіли, що це моавитянка Рут, яка повернулася разом із Ноомі та віддано піклується про неї. Боаз покликав Рут і лагідно заговорив до неї. Він сказав їй не ходити на чужі поля, а залишатися тут, поряд із його служницями. Він також наказав своїм працівникам не ображати Рут і дозволив їй пити воду, яку приносили для женців.",
          "Рут була здивована такою добротою. Вона запитала, чому Боаз так добре ставиться до неї, хоча вона чужинка. Боаз відповів, що чув про все, що Рут зробила для своєї свекрухи після смерті чоловіка. Він знав, що вона залишила батьківщину й прийшла до народу, якого раніше не знала.",
          "Боаз побажав, щоб Господь винагородив її за вірність: «Нехай Господь віддасть тобі за твоє діло, і нехай буде повна нагорода твоя від Господа, Бога Ізраїлевого, під крила Якого ти прийшла сховатися!» (Рут 2:12, близький переказ).",
          "Під час обіду Боаз запросив Рут поїсти разом із женцями. А потім наказав своїм працівникам залишати для неї більше колосків, щоб вона могла зібрати достатньо зерна.",
          "Рут працювала до вечора. Вона назбирала багато ячменю й повернулася до Ноомі. Коли Ноомі побачила, скільки зерна принесла Рут, то дуже здивувалася. Вона запитала, на чиєму полі Рут працювала.",
          "Дізнавшись, що це було поле Боаза, Ноомі зраділа, бо знала, що він — їхній близький родич. Вона побачила в цьому Божу турботу про них."
        ],
        "imageIndex": 2
      },
      {
        "title": "Боаз і Рут — Божий добрий задум",
        "paragraphs": [
          "Боаз був не лише добрим, а й праведним чоловіком, який поважав Божий Закон. За звичаєм того часу близький родич міг допомогти родині померлого, викупивши її спадкову землю й узявши на себе сімейні обов’язки.",
          "Ноомі бажала, щоб Рут знайшла добрий дім і мала чоловіка, який піклуватиметься про неї. Вона пояснила Рут, як звернутися до Боаза з проханням про захист і допомогу відповідно до їхніх звичаїв.",
          "Боаз поставився до Рут із великою повагою. Він знав, що вона чесна й доброчесна жінка. Однак існував інший родич, який мав ближче право викупу.",
          "Боаз не захотів діяти нечесно. Він зібрав старійшин міста й відкрито вирішив цю справу. Коли ближчий родич відмовився від свого права, Боаз узяв на себе обов’язок викупителя. Він одружився з Рут.",
          "Так Бог дав Рут нову сім’ю, а Ноомі — велику радість. Через деякий час у Боаза й Рут народився син. Його назвали Оведом.",
          "Жінки Вифлеєма раділи разом із Ноомі, адже Господь не залишив її без підтримки. Овед виріс і став батьком Єссея, а Єссей — батьком Давида, майбутнього царя Ізраїля.",
          "Минуть століття, і з роду Давида народиться Ісус Христос. Отже, Рут, яка колись була чужинкою з Моаву, стала частиною родоводу обіцяного Спасителя.",
          "Бог не забув про двох бідних вдів. Через їхню історію Він здійснював Свій великий задум спасіння."
        ],
        "imageIndex": null
      },
      {
        "title": "Самуїл — благочестива мати",
        "paragraphs": [
          "У ті часи в Ізраїлі жив чоловік на ім’я Елкана. Його дружину звали Анна. Анна любила Господа, але мала велике горе: у неї не було дітей. Вона дуже хотіла мати дитину й часто сумувала через це.",
          "Щороку Елкана зі своєю сім’єю ходив до Шіло, де знаходилося місце поклоніння Господу. Там вони приносили жертви й молилися.",
          "Одного разу Анна була особливо засмучена. Вона прийшла до Господнього дому й почала щиро молитися. У сльозах Анна просила Бога дати їй сина. Вона пообіцяла, що, якщо Господь почує її молитву, то присвятить дитину Йому на все життя.",
          "Анна молилася тихо. Її губи рухалися, але голосу майже не було чути. Священник Ілій, який сидів неподалік, побачив її та спочатку неправильно зрозумів, що відбувається.",
          "Але Анна пояснила, що вона дуже засмучена й виливає перед Господом свою душу. Тоді Ілій побажав їй миру й сказав, щоб Бог Ізраїля виконав її прохання.",
          "Після цього Анна пішла додому. Її серце заспокоїлося, і вона більше не була такою сумною. Вона довірила свою потребу Господу."
        ],
        "imageIndex": null
      },
      {
        "title": "Народження Самуїла",
        "paragraphs": [
          "Бог почув молитву Анни. Через деякий час у неї народився син. Вона назвала його Самуїлом, бо просила його в Господа.",
          "Анна була дуже щаслива й вдячна Богові. Вона не забула своєї обіцянки.",
          "Коли Самуїл підріс і вже не потребував материнського годування, Анна привела його до Божого дому в Шіло. Вона прийшла до священника Ілія й сказала, що саме за цю дитину колись молилася Господу.",
          "Тепер Анна присвячувала Самуїла на служіння Богові. Вона повернулася додому, а хлопчик залишився при святині, де навчався служити Господу під наглядом Ілія.",
          "Щороку Анна приходила відвідати свого сина й приносила йому маленький одяг, який шила для нього. Господь також благословив Анну іншими дітьми.",
          "Самуїл ріс, навчався і служив перед Господом."
        ],
        "imageIndex": 3
      },
      {
        "title": "Бог кличе Самуїла",
        "paragraphs": [
          "Однієї ночі, коли Самуїл уже підріс, він спав поблизу Божої святині. Раптом він почув голос, який кликав його на ім’я: «Самуїле!»",
          "Хлопчик подумав, що його кличе священник Ілій. Він швидко підвівся, прибіг до нього й сказав: «Ось я, бо ти кликав мене».",
          "Але Ілій відповів, що не кликав його, і наказав повернутися спати. Невдовзі голос почувся знову.",
          "Самуїл знову прибіг до Ілія, але той знову відповів, що не кликав його.",
          "Коли це сталося втретє, Ілій зрозумів, що Самуїла кличе Господь. Священник пояснив хлопчикові, що наступного разу він повинен відповісти: «Говори, Господи, бо раб Твій слухає» (1 Самуїлова 3:9, близький переказ).",
          "Самуїл повернувся на своє місце. І коли Господь знову покликав його, хлопчик відповів так, як навчив Ілій.",
          "Бог промовив до Самуїла й відкрив йому Своє слово. Згодом увесь Ізраїль дізнався, що Господь поставив Самуїла Своїм пророком.",
          "Хлопчик, про якого Анна колись так щиро молилася, виріс і став Божим служителем. Господь почув молитву матері й приготував її сина для важливої справи у Своєму народі."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Чому Ноомі зі своєю сім’єю переселилася до Моаву?",
      "Чому Рут вирішила залишитися з Ноомі?",
      "Як Рут знаходила їжу для себе та Ноомі?",
      "Хто такий Боаз і як він допоміг Рут?",
      "Як Бог благословив Рут і Боаза?",
      "Ким став правнук Боаза та Рут — Давид?",
      "Про що Анна молилася Господу?",
      "Яку обіцянку Анна дала Богові?",
      "Як звали сина Анни?",
      "Хто допоміг Самуїлові зрозуміти, що його кличе Господь?",
      "Чого ці історії навчають нас про Божу турботу?"
    ],
    "promise": {
      "body": "Рут залишила свою батьківщину й довірилася Богові Ізраїля. Вона не знала, що чекає на неї у Вифлеємі, але Господь не залишив її саму. Він подбав про Рут і Ноомі та подарував їм нову радість.\n\nАнна багато років чекала на дитину й виливала своє серце перед Господом. Бог почув її молитву й подарував їй сина, який згодом став Його пророком.\n\nЦі історії нагадують нам, що Господь знає наші потреби й здійснює Свій добрий задум, навіть коли ми ще не бачимо, як усе складеться.",
      "keyLine": "Бог не забуває Своїх людей. Ми можемо довіряти Йому в кожній життєвій обставині."
    },
    "connection": {
      "body": "Рут була чужинкою, яка прийшла до Ізраїля, довірившись Господу. Боаз виявив до неї милість, подбав про неї та став її родичем-викупителем.\n\nЗгодом у Боаза й Рут народився син Овед. Від нього походив Єссей, а від Єссея — цар Давид.\n\nБагато століть потому в родині Давида народився Ісус Христос. Євангеліє від Матвія 1:5–6 прямо згадує Рут у Його родоводі.\n\nІсторія Рут указує нам на Ісуса, нашого Викупителя. Боаз допоміг Рут і її сім’ї, а Христос прийшов здійснити значно більше — викупити грішників і примирити їх із Богом.",
      "keyLine": "Різдво нагадує, що Бог виконує Свій задум спасіння навіть через долі звичайних людей."
    },
    "familyChallenge": {
      "intro": "Зберіться всією сім’єю в тихому місці. Відкладіть телефони та вимкніть телевізор.\n\nПротягом однієї хвилини посидьте в тиші й прислухайтеся до звуків навколо.",
      "instruction": "Потім запитайте одне одного: «Що ви почули, коли навколо стало тихо?»\n\nЗгадайте, як маленький Самуїл навчився відповідати Господу: «Говори, Господи, бо раб Твій слухає» (1 Самуїлова 3:9).",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговоріть разом: «Що заважає нам уважно слухати інших людей?» «Як ми можемо слухати Бога сьогодні?»\n\nПоясніть дітям, що сьогодні ми слухаємо Бога насамперед через Його Слово — Біблію.\n\nНехай кожен член сім’ї назве одну річ, у якій він хоче цього тижня краще слухатися Божого Слова.",
      "ending": "Завершіть короткою молитвою: «Господи, допоможи нам уважно слухати Твоє Слово й виконувати його. Амінь».\n\nСлухати Бога — означає не лише знати Його Слово, а й жити відповідно до нього.",
      "prayer": "«Господи, допоможи нам уважно слухати Твоє Слово й виконувати його. Амінь»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 12",
      "completed": "День 12 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 12",
    "title": "God Cares for His People",
    "subtitle": "The Stories of Ruth and Samuel",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“The LORD repay your work, and a full reward be given you by the LORD God of Israel, under whose wings you have come for refuge.”",
      "reference": "Ruth 2:12"
    },
    "storyPages": [
      {
        "title": "Ruth — A Woman from Moab",
        "paragraphs": [
          "A man named Elimelech lived in Bethlehem with his wife Naomi and their two sons. One day, a famine came upon the land of Israel. Food was scarce, so Elimelech decided to move with his family to the country of Moab.",
          "They settled there and began a new life. But before long, tragedy struck: Elimelech died, leaving Naomi a widow.",
          "Later, her two sons married Moabite women. One was named Orpah, and the other was Ruth. About ten years passed. Then sorrow came to the family again. Both of Naomi’s sons died. Naomi was left without her husband or sons. Only her two young daughters-in-law remained with her.",
          "One day, Naomi heard that the Lord had once again provided food for His people in Judah. She decided to return to her hometown of Bethlehem. Orpah and Ruth started the journey with her.",
          "Along the way, Naomi stopped and told them to return to their mothers’ homes. She hoped they could marry again and begin new lives. Both women wept because they loved Naomi and did not want to leave her.",
          "At last, Orpah said goodbye to her mother-in-law and returned to her people. But Ruth refused to leave.",
          "Naomi urged her once more to go back, but Ruth answered: “Wherever you go, I will go; and wherever you lodge, I will lodge. Your people shall be my people, and your God, my God” (Ruth 1:16, NKJV, excerpt).",
          "Ruth chose to remain with Naomi. She was willing to leave her homeland and travel to an unfamiliar country to care for the woman who had become her family. And so the two widows arrived in Bethlehem together."
        ],
        "imageIndex": 0
      },
      {
        "title": "Ruth in Boaz’s Field",
        "paragraphs": [
          "When Naomi and Ruth returned to Bethlehem, the barley harvest had just begun. The women were poor and did not have enough food. Ruth decided to go into the fields and gather the stalks of grain left behind by the harvesters.",
          "God’s Law allowed poor people, widows, and foreigners to gather leftover grain so they would have something to eat."
        ],
        "imageIndex": 1
      },
      {
        "title": "Boaz Cares for Ruth",
        "paragraphs": [
          "Ruth came to a field belonging to a wealthy and respected man named Boaz. He was a relative of Naomi’s deceased husband. When Boaz came to inspect his fields, he noticed a young woman working diligently behind the harvesters. He asked his servants who she was.",
          "They told him that she was Ruth, the Moabite woman who had returned with Naomi and was faithfully caring for her. Boaz called Ruth over and spoke kindly to her. He told her not to go to other fields but to stay close to his female workers. He also instructed his men not to mistreat Ruth and allowed her to drink the water provided for the harvesters.",
          "Ruth was surprised by his kindness. She asked why he treated her so well, even though she was a foreigner. Boaz explained that he had heard everything Ruth had done for her mother-in-law after her husband’s death. He knew she had left her homeland and come to live among people she had not known before.",
          "Boaz prayed that the Lord would reward her faithfulness: “The LORD repay your work, and a full reward be given you by the LORD God of Israel, under whose wings you have come for refuge” (Ruth 2:12, NKJV).",
          "At mealtime, Boaz invited Ruth to eat with the harvesters. He then instructed his workers to leave extra grain for her so she could gather enough food.",
          "Ruth worked until evening. She collected a generous amount of barley and returned to Naomi. When Naomi saw how much grain Ruth had brought home, she was amazed. She asked whose field Ruth had worked in.",
          "When she heard that it belonged to Boaz, Naomi rejoiced because she knew he was a close relative of their family. She recognized God’s care for them."
        ],
        "imageIndex": 2
      },
      {
        "title": "Boaz and Ruth — God’s Good Plan",
        "paragraphs": [
          "Boaz was not only kind but also a righteous man who respected God’s Law. According to the customs of that time, a close relative could help the family of someone who had died by redeeming the family’s land and taking on certain family responsibilities.",
          "Naomi wanted Ruth to find a secure home and a husband who would care for her. She explained how Ruth could approach Boaz to ask for his protection and help according to their customs.",
          "Boaz treated Ruth with great respect. He knew she was an honorable and virtuous woman. However, another relative had the first right of redemption.",
          "Boaz did not want to act dishonestly. He gathered the elders of the city and settled the matter openly.",
          "When the closer relative gave up his right, Boaz accepted the responsibility of becoming the family redeemer. He married Ruth.",
          "In this way, God gave Ruth a new family and brought great joy to Naomi. After some time, Boaz and Ruth had a son. They named him Obed.",
          "The women of Bethlehem rejoiced with Naomi because the Lord had not left her without family support.",
          "Obed grew up and became the father of Jesse, and Jesse became the father of David, the future king of Israel.",
          "Centuries later, Jesus Christ would be born from David’s family line. So Ruth, who had once been a foreigner from Moab, became part of the family line of the promised Savior.",
          "God had not forgotten the two poor widows. Through their story, He was carrying out His great plan of salvation."
        ],
        "imageIndex": null
      },
      {
        "title": "Samuel — A Godly Mother",
        "paragraphs": [
          "In those days, a man named Elkanah lived in Israel. His wife’s name was Hannah. Hannah loved the Lord, but she carried a deep sorrow: she had no children. She longed to have a child and was often deeply saddened.",
          "Every year, Elkanah and his family traveled to Shiloh, where there was a place of worship dedicated to the Lord. There they offered sacrifices and prayed.",
          "One day, Hannah was especially distressed. She went to the house of the Lord and began to pray earnestly. Through her tears, Hannah asked God to give her a son. She promised that if the Lord heard her prayer, she would dedicate the child to Him for his entire life.",
          "Hannah prayed silently. Her lips moved, but her voice could hardly be heard. Eli, the priest who was sitting nearby, saw her and at first misunderstood what was happening.",
          "But Hannah explained that she was deeply troubled and was pouring out her heart before the Lord. Then Eli wished her peace and said that the God of Israel would grant her request.",
          "Afterward, Hannah went home. Her heart was at peace, and she was no longer as sorrowful as before.",
          "She had entrusted her need to the Lord."
        ],
        "imageIndex": null
      },
      {
        "title": "The Birth of Samuel",
        "paragraphs": [
          "God heard Hannah’s prayer. After some time, she gave birth to a son. She named him Samuel because she had asked for him from the Lord.",
          "Hannah was overjoyed and deeply thankful to God. She did not forget her promise.",
          "When Samuel had grown old enough to be weaned, Hannah brought him to the house of God in Shiloh.",
          "She came to Eli the priest and explained that this was the very child she had once prayed for.",
          "Now Hannah was dedicating Samuel to the Lord’s service. She returned home, while the boy remained at the sanctuary, learning to serve the Lord under Eli’s care.",
          "Every year, Hannah visited her son and brought him a little robe that she had made for him. The Lord also blessed Hannah with more children.",
          "Samuel grew, learned, and served before the Lord."
        ],
        "imageIndex": 3
      },
      {
        "title": "God Calls Samuel",
        "paragraphs": [
          "One night, when Samuel had grown older, he was sleeping near the sanctuary of God. Suddenly, he heard a voice calling his name: “Samuel!”",
          "The boy thought that Eli the priest was calling him. He quickly got up, ran to Eli, and said: “Here I am, for you called me.”",
          "But Eli replied that he had not called him and told him to go back to sleep. Before long, Samuel heard the voice again. He ran to Eli once more, but Eli again said that he had not called him.",
          "When it happened a third time, Eli understood that the Lord was calling Samuel. The priest explained that the next time Samuel heard the voice, he should answer: “Speak, LORD, for Your servant hears” (1 Samuel 3:9, NKJV, excerpt).",
          "Samuel returned to his place. When the Lord called him again, the boy answered as Eli had instructed.",
          "God spoke to Samuel and revealed His word to him. In time, all Israel recognized that the Lord had established Samuel as His prophet.",
          "The child for whom Hannah had once prayed so earnestly grew up to become a servant of God. The Lord heard a mother’s prayer and prepared her son for an important role among His people."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Why did Naomi and her family move to Moab?",
      "Why did Ruth choose to stay with Naomi?",
      "How did Ruth find food for herself and Naomi?",
      "Who was Boaz, and how did he help Ruth?",
      "How did God bless Ruth and Boaz?",
      "Who did their great-grandson David become?",
      "What did Hannah pray to the Lord for?",
      "What promise did Hannah make to God?",
      "What was the name of Hannah’s son?",
      "Who helped Samuel understand that the Lord was calling him?",
      "What do these stories teach us about God’s care?"
    ],
    "promise": {
      "body": "Ruth left her homeland and placed her trust in the God of Israel. She did not know what awaited her in Bethlehem, but the Lord did not leave her alone. He cared for Ruth and Naomi and brought new joy into their lives.\n\nHannah waited a long time for a child and poured out her heart before the Lord. God heard her prayer and gave her a son who would later become His prophet.\n\nThese stories remind us that the Lord knows our needs and carries out His good plan, even when we cannot yet see how everything will unfold.",
      "keyLine": "God does not forget His people. We can trust Him in every circumstance of life."
    },
    "connection": {
      "body": "Ruth was a foreigner who came to Israel trusting in the Lord. Boaz showed her mercy, cared for her, and became her family redeemer.\n\nLater, Boaz and Ruth had a son named Obed. He became the father of Jesse, and Jesse became the father of King David.\n\nMany centuries later, Jesus Christ was born into David’s family line. Matthew 1:5–6 specifically mentions Ruth in His genealogy.\n\nRuth’s story points us to Jesus, our Redeemer. Boaz helped Ruth and her family, but Christ came to accomplish something far greater — to redeem sinners and reconcile them to God.",
      "keyLine": "Christmas reminds us that God carries out His plan of salvation even through the lives of ordinary people."
    },
    "familyChallenge": {
      "intro": "Gather your family in a quiet place. Put away your phones and turn off the television.\n\nSit quietly for one minute and listen to the sounds around you.",
      "instruction": "Then ask one another: “What did you hear when everything became quiet?”\n\nRemember how young Samuel learned to answer the Lord: “Speak, LORD, for Your servant hears” (1 Samuel 3:9, NKJV, excerpt).",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Talk together: “What keeps us from listening carefully to other people?” “How can we listen to God today?”\n\nExplain to the children that today we listen to God primarily through His Word — the Bible.\n\nLet each family member name one way they want to obey God’s Word more faithfully this week.",
      "ending": "Finish with a short prayer: “Lord, help us listen carefully to Your Word and obey it. Amen.”\n\nListening to God means not only knowing His Word but also living according to it.",
      "prayer": "“Lord, help us listen carefully to Your Word and obey it. Amen.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 12",
      "completed": "Day 12 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 12",
    "title": "Бог заботится о Своих людях",
    "subtitle": "Истории Руфи и Самуила",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Да воздаст Господь за это дело твое, и да будет тебе полная награда от Господа Бога Израилева, к Которому ты пришла, чтоб успокоиться под Его крылами!»",
      "reference": "Руфь 2:12"
    },
    "storyPages": [
      {
        "title": "Руфь — женщина из страны Моав",
        "paragraphs": [
          "В Вифлееме жил человек по имени Елимелех со своей женой Ноеминью и двумя сыновьями.",
          "Однажды в Израильской земле наступил голод. Людям не хватало пищи, поэтому Елимелех решил переселиться вместе с семьёй в Моавитскую землю.",
          "Там они поселились и начали новую жизнь. Но вскоре случилось большое горе: Елимелех умер, и Ноеминь осталась вдовой.",
          "Позже два её сына женились на моавитянках. Одну звали Орфа, а другую — Руфь. Прошло около десяти лет. Но горе снова пришло в эту семью: оба сына Ноемини умерли. Теперь Ноеминь осталась без мужа и сыновей. Рядом с ней были только две молодые невестки.",
          "Однажды Ноеминь услышала, что Господь снова дал хлеб Своему народу в Иудее. Она решила вернуться в родной Вифлеем. Орфа и Руфь отправились вместе с ней.",
          "По дороге Ноеминь остановилась и попросила невесток вернуться в дома своих матерей. Она хотела, чтобы они смогли снова выйти замуж и устроить свою жизнь. Обе женщины плакали, потому что любили Ноеминь и не хотели оставлять её.",
          "Наконец Орфа попрощалась со свекровью и вернулась к своему народу. Но Руфь не захотела уходить. Ноеминь снова попросила её вернуться, однако Руфь ответила: «Куда ты пойдешь, туда и я пойду, и где ты жить будешь, там и я буду жить; народ твой будет моим народом, и твой Бог — моим Богом» (Руфь 1:16, Синодальный перевод, отрывок).",
          "Руфь решила остаться с Ноеминью. Она была готова оставить свою родину и отправиться в незнакомую землю, чтобы заботиться о женщине, которая стала ей родной. Так две вдовы вместе пришли в Вифлеем."
        ],
        "imageIndex": 0
      },
      {
        "title": "Руфь на поле Вооза",
        "paragraphs": [
          "Когда Ноеминь и Руфь вернулись в Вифлеем, как раз началась жатва ячменя. Женщины были бедны. У них не было достаточно пищи, поэтому Руфь решила пойти в поле и собирать колосья, оставшиеся после жнецов.",
          "Божий Закон позволял бедным людям, вдовам и чужеземцам собирать такие колосья, чтобы им было чем питаться."
        ],
        "imageIndex": 1
      },
      {
        "title": "Вооз заботится о Руфи",
        "paragraphs": [
          "Руфь пришла на поле, принадлежавшее богатому и уважаемому человеку по имени Вооз. Он был родственником покойного мужа Ноемини. Вооз пришёл осмотреть свои поля и заметил молодую женщину, которая старательно работала за жнецами. Он спросил у своих слуг, кто она.",
          "Ему рассказали, что это моавитянка Руфь, которая вернулась вместе с Ноеминью и преданно заботится о ней. Вооз подозвал Руфь и ласково заговорил с ней. Он сказал ей не ходить на чужие поля, а оставаться здесь, рядом с его служанками. Он также приказал своим работникам не обижать Руфь и разрешил ей пить воду, приготовленную для жнецов.",
          "Руфь была удивлена такой добротой. Она спросила, почему Вооз так хорошо относится к ней, хотя она чужеземка. Вооз ответил, что слышал обо всём, что Руфь сделала для своей свекрови после смерти мужа. Он знал, что она оставила родину и пришла к народу, которого прежде не знала.",
          "Вооз пожелал, чтобы Господь вознаградил её за верность: «Да воздаст Господь за это дело твое, и да будет тебе полная награда от Господа Бога Израилева, к Которому ты пришла, чтоб успокоиться под Его крылами!» (Руфь 2:12, Синодальный перевод).",
          "Во время обеда Вооз пригласил Руфь поесть вместе со жнецами. А затем приказал своим работникам оставлять для неё больше колосьев, чтобы она могла собрать достаточно зерна.",
          "Руфь трудилась до вечера. Она собрала много ячменя и вернулась к Ноемини. Когда Ноеминь увидела, сколько зерна принесла Руфь, она очень удивилась. Она спросила, на чьём поле Руфь работала.",
          "Узнав, что это было поле Вооза, Ноеминь обрадовалась, потому что знала, что он их близкий родственник. Она увидела в этом Божью заботу о них."
        ],
        "imageIndex": 2
      },
      {
        "title": "Вооз и Руфь — Божий добрый замысел",
        "paragraphs": [
          "Вооз был не только добрым, но и праведным человеком, который уважал Божий Закон. По обычаю того времени близкий родственник мог помочь семье умершего, выкупив её наследственную землю и взяв на себя семейные обязанности.",
          "Ноеминь хотела, чтобы Руфь нашла хороший дом и имела мужа, который заботился бы о ней. Она объяснила Руфи, как обратиться к Воозу с просьбой о защите и помощи согласно их обычаям.",
          "Вооз отнёсся к Руфи с большим уважением. Он знал, что она честная и добродетельная женщина.",
          "Однако был другой родственник, имевший первоочередное право выкупа.",
          "Вооз не захотел поступать нечестно. Он собрал старейшин города и открыто решил этот вопрос.",
          "Когда более близкий родственник отказался от своего права, Вооз принял на себя обязанности искупителя. Он женился на Руфи.",
          "Так Бог дал Руфи новую семью, а Ноемини — большую радость. Через некоторое время у Вооза и Руфи родился сын. Его назвали Овидом.",
          "Женщины Вифлеема радовались вместе с Ноеминью, ведь Господь не оставил её без поддержки.",
          "Овид вырос и стал отцом Иессея, а Иессей — отцом Давида, будущего царя Израиля.",
          "Пройдут столетия, и из рода Давида родится Иисус Христос. Таким образом, Руфь, которая когда-то была чужеземкой из Моава, стала частью родословия обещанного Спасителя.",
          "Бог не забыл о двух бедных вдовах. Через их историю Он осуществлял Свой великий замысел спасения."
        ],
        "imageIndex": null
      },
      {
        "title": "Самуил — благочестивая мать",
        "paragraphs": [
          "В те времена в Израиле жил человек по имени Елкана. Его жену звали Анна. Анна любила Господа, но у неё было большое горе: она не имела детей. Она очень хотела иметь ребёнка и часто печалилась из-за этого.",
          "Каждый год Елкана со своей семьёй ходил в Силом, где находилось место поклонения Господу.",
          "Там они приносили жертвы и молились.",
          "Однажды Анна была особенно огорчена. Она пришла в дом Господень и начала искренне молиться. Со слезами Анна просила Бога дать ей сына. Она пообещала, что, если Господь услышит её молитву, то посвятит ребёнка Ему на всю жизнь.",
          "Анна молилась тихо. Её губы двигались, но голоса почти не было слышно. Священник Илий, который сидел неподалёку, увидел её и сначала неправильно понял, что происходит.",
          "Но Анна объяснила, что она очень огорчена и изливает перед Господом свою душу. Тогда Илий пожелал ей мира и сказал, чтобы Бог Израиля исполнил её просьбу.",
          "После этого Анна пошла домой. Её сердце успокоилось, и она уже не была такой печальной. Она доверила свою нужду Господу."
        ],
        "imageIndex": null
      },
      {
        "title": "Рождение Самуила",
        "paragraphs": [
          "Бог услышал молитву Анны. Через некоторое время у неё родился сын. Она назвала его Самуилом, потому что просила его у Господа.",
          "Анна была очень счастлива и благодарна Богу. Она не забыла своего обещания.",
          "Когда Самуил подрос и уже не нуждался в материнском кормлении, Анна привела его в дом Божий в Силоме. Она пришла к священнику Илию и сказала, что именно об этом ребёнке когда-то молилась Господу.",
          "Теперь Анна посвящала Самуила на служение Богу. Она вернулась домой, а мальчик остался при святилище, где учился служить Господу под присмотром Илия.",
          "Каждый год Анна приходила навестить своего сына и приносила ему маленькую одежду, которую шила для него. Господь также благословил Анну другими детьми.",
          "Самуил рос, учился и служил перед Господом."
        ],
        "imageIndex": 3
      },
      {
        "title": "Бог призывает Самуила",
        "paragraphs": [
          "Однажды ночью, когда Самуил уже подрос, он спал возле Божьего святилища. Вдруг он услышал голос, который звал его по имени: «Самуил!»",
          "Мальчик подумал, что его зовёт священник Илий. Он быстро поднялся, прибежал к нему и сказал: «Вот я, ты звал меня».",
          "Но Илий ответил, что не звал его, и велел вернуться спать. Вскоре голос послышался снова.",
          "Самуил снова прибежал к Илию, но тот опять сказал, что не звал его.",
          "Когда это произошло в третий раз, Илий понял, что Самуила призывает Господь. Священник объяснил мальчику, что в следующий раз он должен ответить: «Говори, Господи, ибо слышит раб Твой» (1 Царств 3:9, Синодальный перевод).",
          "Самуил вернулся на своё место. И когда Господь снова позвал его, мальчик ответил так, как научил Илий.",
          "Бог заговорил с Самуилом и открыл ему Своё слово. Со временем весь Израиль узнал, что Господь поставил Самуила Своим пророком.",
          "Мальчик, о котором Анна когда-то так искренне молилась, вырос и стал Божьим служителем.",
          "Господь услышал молитву матери и приготовил её сына для важного служения среди Своего народа."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Почему Ноеминь со своей семьёй переселилась в Моав?",
      "Почему Руфь решила остаться с Ноеминью?",
      "Как Руфь находила пищу для себя и Ноемини?",
      "Кто такой Вооз и как он помог Руфи?",
      "Как Бог благословил Руфь и Вооза?",
      "Кем стал их правнук Давид?",
      "О чём Анна молилась Господу?",
      "Какое обещание Анна дала Богу?",
      "Как звали сына Анны?",
      "Кто помог Самуилу понять, что его зовёт Господь?",
      "Чему эти истории учат нас о Божьей заботе?"
    ],
    "promise": {
      "body": "Руфь оставила свою родину и доверилась Богу Израиля. Она не знала, что ожидает её в Вифлееме, но Господь не оставил её одну. Он позаботился о Руфи и Ноемини и подарил им новую радость.\n\nАнна долго ждала ребёнка и изливала своё сердце перед Господом. Бог услышал её молитву и подарил ей сына, который впоследствии стал Его пророком.\n\nЭти истории напоминают нам, что Господь знает наши нужды и осуществляет Свой добрый замысел, даже когда мы ещё не видим, как всё сложится.",
      "keyLine": "Бог не забывает Своих людей. Мы можем доверять Ему в любых жизненных обстоятельствах."
    },
    "connection": {
      "body": "Руфь была чужеземкой, которая пришла в Израиль, доверившись Господу. Вооз проявил к ней милость, позаботился о ней и стал её родственником-искупителем.\n\nПозже у Вооза и Руфи родился сын Овид. От него произошёл Иессей, а от Иессея — царь Давид.\n\nМного столетий спустя в семье Давида родился Иисус Христос. Евангелие от Матфея 1:5–6 прямо упоминает Руфь в Его родословии.\n\nИстория Руфи указывает нам на Иисуса, нашего Искупителя. Вооз помог Руфи и её семье, а Христос пришёл совершить гораздо большее — искупить грешников и примирить их с Богом.",
      "keyLine": "Рождество напоминает нам, что Бог осуществляет Свой замысел спасения даже через судьбы обычных людей."
    },
    "familyChallenge": {
      "intro": "Соберитесь всей семьёй в тихом месте. Отложите телефоны и выключите телевизор.\n\nПосидите одну минуту в тишине и прислушайтесь к окружающим звукам.",
      "instruction": "Затем спросите друг друга: «Что вы услышали, когда вокруг стало тихо?»\n\nВспомните, как маленький Самуил научился отвечать Господу: «Говори, Господи, ибо слышит раб Твой» (1 Царств 3:9).",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговорите вместе: «Что мешает нам внимательно слушать других людей?» «Как мы можем слушать Бога сегодня?»\n\nОбъясните детям, что сегодня мы слушаем Бога прежде всего через Его Слово — Библию.\n\nПусть каждый член семьи назовёт одну вещь, в которой он хочет на этой неделе лучше исполнять Божье Слово.",
      "ending": "Завершите короткой молитвой: «Господи, помоги нам внимательно слушать Твоё Слово и исполнять его. Аминь».\n\nСлушать Бога — значит не только знать Его Слово, но и жить согласно ему.",
      "prayer": "«Господи, помоги нам внимательно слушать Твоё Слово и исполнять его. Аминь»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 12",
      "completed": "День 12 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

