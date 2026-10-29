import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_ELEVEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_ELEVEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day11/story/01-rahab.jpg"),
  require("../assets/advent/day11/story/02-jordan.jpg"),
  require("../assets/advent/day11/story/03-jericho.jpg"),
  require("../assets/advent/day11/story/04-joshua.jpg"),
];
export const DAY_ELEVEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 11",
    "title": "Бог виконує Свої обітниці",
    "subtitle": "Ісус Навин веде народ до обіцяної землі",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«А я та дім мій будемо служити Господеві».",
      "reference": "Ісус Навин 24:15"
    },
    "storyPages": [
      {
        "title": "Рахав — віра, яка рятує",
        "paragraphs": [
          "Після смерті Мойсея новим провідником ізраїльського народу став Ісус Навин. Господь наказав йому перевести народ через річку Йордан і ввійти до землі Ханаанської, яку Він давно обіцяв Авраамові, Ісаакові та Якову.",
          "На шляху ізраїльтян стояло велике укріплене місто Єрихон. Навколо нього височіли міцні кам'яні стіни, а його мешканці боялися ізраїльського народу.",
          "Ісус Навин таємно послав двох розвідників оглянути землю та місто.",
          "Коли розвідники прийшли до Єрихона, вони зупинилися в домі жінки на ім'я Рахав. Її дім знаходився біля міського муру.",
          "Але цар Єрихона довідався, що до міста прийшли ізраїльські розвідники. Він послав людей до Рахав, наказавши видати їх.",
          "Рахав сховала розвідників на даху свого будинку серед стебел льону. Коли посланці царя прийшли до неї, вона сказала, що ті чоловіки вже пішли, і направила переслідувачів в інший бік.",
          "Після цього Рахав піднялася на дах і сказала розвідникам, що знає: Господь віддав цю землю ізраїльтянам.",
          "Вона чула, як Бог висушив перед ними Червоне море, коли вони виходили з Єгипту, і як допоміг їм перемогти могутніх царів.",
          "Рахав зрозуміла, що Господь ізраїльтян — справжній Бог, Який володарює на небі й на землі.",
          "Вона попросила розвідників пообіцяти, що, коли ізраїльтяни захоплять Єрихон, вони збережуть життя їй та її родині.",
          "Розвідники погодилися за умови, що Рахав нікому не розповість про їхнє завдання.",
          "Вони наказали їй прив'язати до вікна червону мотузку, щоб ізраїльтяни могли впізнати її дім.",
          "Рахав допомогла чоловікам спуститися по мотузці через вікно міського муру й порадила сховатися в горах, поки переслідувачі не повернуться.",
          "Розвідники благополучно повернулися до Ісуса Навина та розповіли все, що сталося.",
          "Рахав повірила в Господа й поклалася на Його милість. І Бог не забув її."
        ],
        "imageIndex": 0
      },
      {
        "title": "Перехід через Йордан",
        "paragraphs": [
          "Нарешті настав час ізраїльтянам увійти до обіцяної землі.",
          "Але перед ними лежала широка річка Йордан. У цей час року вода піднялася й вийшла з берегів.",
          "Як же весь народ міг перейти на інший бік?",
          "Господь наказав Ісусові Навину, щоб священники взяли ковчег завіту й першими пішли до річки.",
          "Ковчег нагадував ізраїльтянам про Божу присутність серед них.",
          "Коли священники, які несли ковчег, ступили ногами у воду, сталося велике чудо.",
          "Вода, що текла зверху, зупинилася, а нижче за течією вода відійшла. Посеред річки з'явився сухий шлях.",
          "Священники з ковчегом стояли посеред Йордану, поки весь народ переходив на другий берег.",
          "Бог знову показав Свою могутність, як колись біля Червоного моря.",
          "Після переходу Ісус Навин наказав узяти дванадцять каменів із середини річки й поставити їх на згадку про чудо.",
          "Коли діти в майбутньому запитуватимуть, що означають ці камені, батьки зможуть розповісти їм, як Господь провів Свій народ через Йордан."
        ],
        "imageIndex": 1
      },
      {
        "title": "Падіння Єрихона",
        "paragraphs": [
          "Незабаром ізраїльтяни підійшли до Єрихона.",
          "Місто мало високі й міцні стіни. Люди зачинили його ворота, боячись ізраїльтян.",
          "Але Господь дав Ісусові Навину незвичайний план.",
          "Шість днів ізраїльські воїни мали один раз на день обходити місто. Перед ковчегом завіту йшли сім священників із сурмами.",
          "Народ мав мовчати й не вигукувати нічого, поки Ісус Навин не подасть знак.",
          "Ізраїльтяни точно виконували Боже повеління.",
          "На сьомий день вони встали рано-вранці й обійшли місто сім разів.",
          "Коли священники засурмили, Ісус Навин наказав народові голосно вигукнути.",
          "І тоді сталося диво!",
          "Міцні стіни Єрихона впали.",
          "Ізраїльтяни ввійшли до міста й здобули перемогу, яку Господь дав їм.",
          "Але серед зруйнованого міста був один дім, мешканців якого врятували.",
          "Це був дім Рахав.",
          "Вона виконала домовленість і прив'язала до свого вікна червону мотузку. Ізраїльські розвідники вивели її та її родину в безпечне місце.",
          "Рахав отримала милість і залишилася жити серед ізраїльського народу.",
          "Господь виконав Свою обітницю й показав, що перемога залежить не від людської сили, а від Нього."
        ],
        "imageIndex": 2
      },
      {
        "title": "Останні настанови Ісуса Навина",
        "paragraphs": [
          "Минуло багато років.",
          "Ісус Навин постарів. За його життя ізраїльтяни здобули численні перемоги, оселилися в обіцяній землі й отримали свої наділи.",
          "Господь виконав Свою обітницю, дану їхнім прабатькам.",
          "Ісус Навин знав, що незабаром помре, тому зібрав старійшин і весь народ Ізраїля.",
          "Він нагадав їм про все, що Господь зробив для них.",
          "Бог визволив їхніх батьків із Єгипту, провів через пустелю та Йордан і дав їм землю, якої вони не здобули власною силою.",
          "Ісус Навин закликав народ залишатися вірним Господу, виконувати Його Закон і не поклонятися чужим богам.",
          "Він попередив ізраїльтян, що непослух та ідолопоклонство принесуть їм великі біди.",
          "Потім Ісус Навин поставив перед ними важливий вибір.",
          "Він сказав, що вони повинні вирішити, кому служитимуть.",
          "А сам проголосив: «А я та дім мій будемо служити Господеві» (Ісус Навин 24:15).",
          "Народ відповів, що також хоче служити Господу, Який визволив його та вів усіма дорогами.",
          "Ісус Навин закликав людей відкинути чужих богів і звернути свої серця до Господа.",
          "Після цього він уклав із народом завіт і поставив великий камінь як свідчення їхнього рішення.",
          "Незабаром Ісус Навин помер у віці ста десяти років.",
          "Та Божа історія не закінчилася.",
          "Господь продовжував здійснювати Свій великий задум. Через народ Ізраїля одного дня мав прийти обіцяний Спаситель — Ісус Христос.",
          "Бог дотримується Свого слова. Його обітниці завжди здійснюються."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Кого Ісус Навин послав до Єрихона?",
      "Як Рахав допомогла розвідникам?",
      "Чому Рахав повірила в Бога Ізраїля?",
      "Який знак Рахав мала залишити у своєму вікні?",
      "Як ізраїльтяни перейшли через Йордан?",
      "Для чого вони встановили дванадцять каменів?",
      "Що Бог наказав робити біля стін Єрихона?",
      "Як була врятована родина Рахав?",
      "Який вибір Ісус Навин запропонував народові?"
    ],
    "promise": {
      "body": "Багато років тому Бог пообіцяв Авраамові дати його нащадкам землю Ханаанську. Авраам не побачив повного виконання цієї обітниці за свого життя. Минуло багато поколінь, але Бог не забув Своїх слів.\n\nЗа часів Ісуса Навина Господь привів ізраїльтян до обіцяної землі й дав їм спадщину.",
      "keyLine": "Бог завжди виконує Свої обітниці, навіть коли нам доводиться довго чекати."
    },
    "connection": {
      "body": "Рахав жила в Єрихоні й не належала до ізраїльського народу. Але вона почула про могутні діла Господа, повірила в Нього й попросила про милість.\n\nКоли Єрихон був зруйнований, Рахав та її родина були врятовані.\n\nІсторія Рахав на цьому не закінчилася. У Євангелії від Матвія 1:5 ми читаємо її ім'я в родоводі Ісуса Христа.\n\nЦе нагадує нам, що Божа милість простягається до людей із різних народів. Через віру Рахав стала частиною дивовижної історії, яка веде до народження Спасителя.",
      "keyLine": "Ісус прийшов, щоб спасти грішників із усіх народів."
    },
    "familyChallenge": {
      "intro": "Зберіться всією сім'єю за чаєм або вечерею.",
      "instruction": "Прочитайте разом Ісуса Навина 24:15: «А я та дім мій будемо служити Господеві».\n\nІсус Навин зробив важливий вибір — він вирішив, що його сім'я служитиме Господу.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговоріть разом: «Що означає служити Богові не тільки в церкві, але й удома?»\n\n«Який один добрий вчинок наша сім'я може зробити цього тижня, щоб показати Божу любов?»\n\nВиберіть одну спільну добру справу: допомогти комусь, відвідати самотню людину, підтримати того, хто переживає труднощі, або зробити щось корисне для інших.",
      "ending": "Завершіть короткою молитвою, попросивши Бога допомогти вашій сім'ї жити так, щоб прославляти Його.\n\nСлужити Господу — це не лише наші слова, а й щоденні вчинки.",
      "prayer": "«Боже, допоможи нашій сім’ї служити Тобі та показувати Твою любов щоденними вчинками»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 11",
      "completed": "День 11 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 11",
    "title": "God Keeps His Promises",
    "subtitle": "Joshua Leads the People into the Promised Land",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“But as for me and my house, we will serve the LORD.” (NKJV)",
      "reference": "Joshua 24:15"
    },
    "storyPages": [
      {
        "title": "Rahab — Faith That Saves",
        "paragraphs": [
          "After Moses died, Joshua became the new leader of the Israelites. The Lord commanded him to lead the people across the Jordan River and into Canaan, the land He had long ago promised to Abraham, Isaac, and Jacob.",
          "A large fortified city called Jericho stood in their way. Strong stone walls surrounded it, and its people were afraid of the Israelites.",
          "Joshua secretly sent two spies to explore the land and the city.",
          "When the spies entered Jericho, they stayed at the house of a woman named Rahab. Her house was built into the city wall.",
          "But the king of Jericho learned that Israelite spies had entered the city. He sent men to Rahab's house and ordered her to bring them out.",
          "Rahab hid the spies on her roof among stalks of flax. When the king's messengers arrived, she told them that the men had already left and directed the pursuers elsewhere.",
          "Afterward, Rahab went up to the roof and told the spies that she knew the Lord had given the land to the Israelites.",
          "She had heard how God dried up the Red Sea before them when they left Egypt and how He helped them defeat powerful kings.",
          "Rahab understood that the God of Israel was the true God, who rules over heaven and earth.",
          "She asked the spies to promise that when the Israelites captured Jericho, they would spare her life and the lives of her family.",
          "The spies agreed, on the condition that Rahab would not reveal their mission.",
          "They instructed her to tie a scarlet cord in her window so the Israelites could recognize her house.",
          "Rahab helped the men climb down by a rope through the window in the city wall. She advised them to hide in the hills until their pursuers returned.",
          "The spies safely returned to Joshua and told him everything that had happened.",
          "Rahab believed in the Lord and trusted in His mercy. And God did not forget her."
        ],
        "imageIndex": 0
      },
      {
        "title": "Crossing the Jordan",
        "paragraphs": [
          "At last, the time had come for the Israelites to enter the Promised Land.",
          "But the Jordan River stood before them. At that time of year, its waters had risen and overflowed its banks.",
          "How could the whole nation cross to the other side?",
          "The Lord commanded Joshua to have the priests carry the ark of the covenant and go first toward the river.",
          "The ark reminded the Israelites of God's presence among them.",
          "When the priests carrying the ark stepped into the water, a great miracle happened.",
          "The water flowing from upstream stopped, while the water downstream flowed away. A dry path appeared through the river.",
          "The priests carrying the ark stood in the middle of the Jordan until all the people had crossed to the other side.",
          "God once again showed His mighty power, just as He had done at the Red Sea.",
          "After the crossing, Joshua commanded the people to take twelve stones from the riverbed and set them up as a memorial of the miracle.",
          "When children asked in the future what the stones meant, their parents could tell them how the Lord had led His people across the Jordan."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Fall of Jericho",
        "paragraphs": [
          "Before long, the Israelites approached Jericho.",
          "The city had tall, strong walls. Its people had shut the gates because they were afraid of the Israelites.",
          "But the Lord gave Joshua an unusual plan.",
          "For six days, the Israelite soldiers were to march around the city once each day. Seven priests carrying trumpets walked before the ark of the covenant.",
          "The people were to remain silent until Joshua gave the command to shout.",
          "The Israelites carefully obeyed God's instructions.",
          "On the seventh day, they rose early in the morning and marched around the city seven times.",
          "When the priests blew their trumpets, Joshua commanded the people to shout loudly.",
          "And then a miracle happened!",
          "The mighty walls of Jericho fell.",
          "The Israelites entered the city and gained the victory the Lord had given them.",
          "But among the ruins there was one household whose members were rescued.",
          "It was Rahab's household.",
          "She had kept her agreement and tied the scarlet cord in her window. The Israelite spies brought her and her family to safety.",
          "Rahab received mercy and came to live among the people of Israel.",
          "The Lord fulfilled His promise and showed that victory depended not on human strength but on Him."
        ],
        "imageIndex": 2
      },
      {
        "title": "Joshua's Final Instructions",
        "paragraphs": [
          "Many years passed.",
          "Joshua grew old. During his lifetime, the Israelites had won many victories, settled in the Promised Land, and received their portions of land.",
          "The Lord had fulfilled the promise He made to their ancestors.",
          "Joshua knew that he would soon die, so he gathered the elders and all the people of Israel.",
          "He reminded them of everything the Lord had done for them.",
          "God had delivered their fathers from Egypt, led them through the wilderness and across the Jordan, and given them land they had not obtained by their own strength.",
          "Joshua urged the people to remain faithful to the Lord, obey His Law, and refuse to worship other gods.",
          "He warned the Israelites that disobedience and idolatry would bring great trouble upon them.",
          "Then Joshua placed an important choice before them.",
          "He told them that they must decide whom they would serve.",
          "As for himself, he declared: “But as for me and my house, we will serve the LORD” (Joshua 24:15, NKJV).",
          "The people answered that they also wanted to serve the Lord, who had delivered them and led them on all their journeys.",
          "Joshua called on them to put away foreign gods and turn their hearts toward the Lord.",
          "He then made a covenant with the people and set up a large stone as a witness to their decision.",
          "Soon afterward, Joshua died at the age of one hundred and ten.",
          "But God's story was not over.",
          "The Lord continued carrying out His great plan. One day, through the people of Israel, the promised Savior — Jesus Christ — would come.",
          "God keeps His word. His promises always come true."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Whom did Joshua send to Jericho?",
      "How did Rahab help the spies?",
      "Why did Rahab believe in the God of Israel?",
      "What sign did Rahab have to leave in her window?",
      "How did the Israelites cross the Jordan River?",
      "Why did they set up twelve stones?",
      "What did God command them to do around Jericho?",
      "How was Rahab's family rescued?",
      "What choice did Joshua place before the people?"
    ],
    "promise": {
      "body": "Many years earlier, God had promised Abraham that He would give the land of Canaan to his descendants.\n\nAbraham did not see the complete fulfillment of this promise during his lifetime. Many generations passed, but God did not forget His words.\n\nIn Joshua's time, the Lord brought the Israelites into the Promised Land and gave them their inheritance.",
      "keyLine": "God always keeps His promises, even when we have to wait a long time."
    },
    "connection": {
      "body": "Rahab lived in Jericho and was not an Israelite. But she heard about the mighty works of the Lord, believed in Him, and asked for mercy.\n\nWhen Jericho was destroyed, Rahab and her family were rescued.\n\nBut Rahab's story did not end there. In Matthew 1:5, we find her name in the genealogy of Jesus Christ.\n\nThis reminds us that God's mercy reaches people from different nations. Through faith, Rahab became part of the wonderful story leading to the birth of the Savior.",
      "keyLine": "Jesus came to save sinners from every nation."
    },
    "familyChallenge": {
      "intro": "Gather together over tea or dinner.",
      "instruction": "Read Joshua 24:15: “But as for me and my house, we will serve the LORD.”\n\nJoshua made an important choice — he decided that his household would serve the Lord.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Talk together: “What does it mean to serve God not only at church but also at home?”\n\n“What is one good thing our family can do this week to show God's love?”\n\nChoose one act of kindness to do together: help someone, visit a lonely person, encourage someone going through a difficult time, or do something helpful for others.",
      "ending": "Finish with a short prayer, asking God to help your family live in a way that honors Him.\n\nServing the Lord is not only about our words but also our everyday actions.",
      "prayer": "“God, help our family serve You and show Your love through our everyday actions.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 11",
      "completed": "Day 11 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 11",
    "title": "Бог исполняет Свои обещания",
    "subtitle": "Иисус Навин ведёт народ в Обетованную землю",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«А я и дом мой будем служить Господу».",
      "reference": "Иисус Навин 24:15"
    },
    "storyPages": [
      {
        "title": "Раав — вера, которая спасает",
        "paragraphs": [
          "После смерти Моисея новым вождём израильского народа стал Иисус Навин. Господь повелел ему перевести народ через реку Иордан и войти в Ханаанскую землю, которую Он давно обещал Аврааму, Исааку и Иакову.",
          "На пути израильтян стоял большой укреплённый город Иерихон. Вокруг него возвышались крепкие каменные стены, а его жители боялись израильского народа.",
          "Иисус Навин тайно послал двух разведчиков осмотреть землю и город.",
          "Когда разведчики пришли в Иерихон, они остановились в доме женщины по имени Раав. Её дом находился у городской стены.",
          "Но царь Иерихона узнал, что в город пришли израильские разведчики. Он послал людей к Раав и приказал выдать их.",
          "Раав спрятала разведчиков на крыше своего дома среди стеблей льна. Когда посланники царя пришли к ней, она сказала, что те люди уже ушли, и направила преследователей в другую сторону.",
          "После этого Раав поднялась на крышу и сказала разведчикам, что знает: Господь отдал эту землю израильтянам.",
          "Она слышала, как Бог осушил перед ними Красное море, когда они выходили из Египта, и как помог им победить могущественных царей.",
          "Раав поняла, что Господь израильтян — истинный Бог, Который владычествует на небе и на земле.",
          "Она попросила разведчиков пообещать, что, когда израильтяне захватят Иерихон, они сохранят жизнь ей и её семье.",
          "Разведчики согласились при условии, что Раав никому не расскажет об их задании.",
          "Они велели ей привязать к окну алую верёвку, чтобы израильтяне могли узнать её дом.",
          "Раав помогла мужчинам спуститься по верёвке через окно в городской стене и посоветовала спрятаться в горах, пока преследователи не вернутся.",
          "Разведчики благополучно вернулись к Иисусу Навину и рассказали обо всём, что произошло.",
          "Раав поверила в Господа и положилась на Его милость. И Бог не забыл её."
        ],
        "imageIndex": 0
      },
      {
        "title": "Переход через Иордан",
        "paragraphs": [
          "Наконец пришло время израильтянам войти в Обетованную землю.",
          "Но перед ними лежала широкая река Иордан. В это время года вода поднялась и вышла из берегов.",
          "Как же весь народ мог перейти на другую сторону?",
          "Господь повелел Иисусу Навину, чтобы священники взяли ковчег завета и первыми пошли к реке.",
          "Ковчег напоминал израильтянам о Божьем присутствии среди них.",
          "Когда священники, несшие ковчег, ступили ногами в воду, произошло великое чудо.",
          "Вода, текущая сверху, остановилась, а ниже по течению вода ушла. Посреди реки появился сухой путь.",
          "Священники с ковчегом стояли посреди Иордана, пока весь народ переходил на другой берег.",
          "Бог снова показал Своё могущество, как когда-то у Красного моря.",
          "После перехода Иисус Навин велел взять двенадцать камней со дна реки и установить их в память о чуде.",
          "Когда дети в будущем спросят, что означают эти камни, родители смогут рассказать им, как Господь провёл Свой народ через Иордан."
        ],
        "imageIndex": 1
      },
      {
        "title": "Падение Иерихона",
        "paragraphs": [
          "Вскоре израильтяне подошли к Иерихону.",
          "Город имел высокие и крепкие стены. Люди закрыли его ворота, боясь израильтян.",
          "Но Господь дал Иисусу Навину необычный план.",
          "Шесть дней израильские воины должны были один раз в день обходить город. Перед ковчегом завета шли семь священников с трубами.",
          "Народ должен был молчать и ничего не выкрикивать, пока Иисус Навин не подаст знак.",
          "Израильтяне точно исполняли Божье повеление.",
          "На седьмой день они встали рано утром и обошли город семь раз.",
          "Когда священники затрубили, Иисус Навин велел народу громко воскликнуть.",
          "И тогда произошло чудо!",
          "Крепкие стены Иерихона пали.",
          "Израильтяне вошли в город и одержали победу, которую Господь дал им.",
          "Но среди разрушенного города был один дом, жителей которого спасли.",
          "Это был дом Раав.",
          "Она выполнила договорённость и привязала к своему окну алую верёвку. Израильские разведчики вывели её и её семью в безопасное место.",
          "Раав получила милость и осталась жить среди израильского народа.",
          "Господь исполнил Своё обещание и показал, что победа зависит не от человеческой силы, а от Него."
        ],
        "imageIndex": 2
      },
      {
        "title": "Последние наставления Иисуса Навина",
        "paragraphs": [
          "Прошло много лет.",
          "Иисус Навин состарился. За его жизнь израильтяне одержали многочисленные победы, поселились в Обетованной земле и получили свои земельные уделы.",
          "Господь исполнил обещание, данное их праотцам.",
          "Иисус Навин знал, что скоро умрёт, поэтому собрал старейшин и весь народ Израиля.",
          "Он напомнил им обо всём, что Господь сделал для них.",
          "Бог освободил их отцов из Египта, провёл через пустыню и Иордан и дал им землю, которую они не приобрели собственной силой.",
          "Иисус Навин призвал народ оставаться верным Господу, исполнять Его Закон и не поклоняться чужим богам.",
          "Он предупредил израильтян, что непослушание и идолопоклонство принесут им большие беды.",
          "Затем Иисус Навин поставил перед ними важный выбор.",
          "Он сказал, что они должны решить, кому будут служить.",
          "А сам провозгласил: «А я и дом мой будем служить Господу» (Иисус Навин 24:15).",
          "Народ ответил, что тоже хочет служить Господу, Который освободил его и вёл по всем дорогам.",
          "Иисус Навин призвал людей отвергнуть чужих богов и обратить свои сердца к Господу.",
          "После этого он заключил с народом завет и поставил большой камень как свидетельство их решения.",
          "Вскоре Иисус Навин умер в возрасте ста десяти лет.",
          "Но Божья история не закончилась.",
          "Господь продолжал осуществлять Свой великий замысел. Через народ Израиля однажды должен был прийти обещанный Спаситель — Иисус Христос.",
          "Бог держит Своё слово. Его обещания всегда исполняются."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Кого Иисус Навин послал в Иерихон?",
      "Как Раав помогла разведчикам?",
      "Почему Раав поверила в Бога Израиля?",
      "Какой знак Раав должна была оставить в своём окне?",
      "Как израильтяне перешли через Иордан?",
      "Для чего они установили двенадцать камней?",
      "Что Бог повелел делать возле стен Иерихона?",
      "Как была спасена семья Раав?",
      "Какой выбор Иисус Навин предложил народу?"
    ],
    "promise": {
      "body": "Много лет назад Бог обещал Аврааму дать его потомкам Ханаанскую землю. Авраам не увидел полного исполнения этого обещания при своей жизни. Прошло много поколений, но Бог не забыл Своих слов.\n\nВо времена Иисуса Навина Господь привёл израильтян в Обетованную землю и дал им наследие.",
      "keyLine": "Бог всегда исполняет Свои обещания, даже когда нам приходится долго ждать."
    },
    "connection": {
      "body": "Раав жила в Иерихоне и не принадлежала к израильскому народу. Но она услышала о великих делах Господа, поверила в Него и попросила о милости.\n\nКогда Иерихон был разрушен, Раав и её семья были спасены.\n\nНо история Раав на этом не закончилась. В Евангелии от Матфея 1:5 мы находим её имя в родословии Иисуса Христа.\n\nЭто напоминает нам, что Божья милость распространяется на людей из разных народов. Благодаря вере Раав стала частью удивительной истории, ведущей к рождению Спасителя.",
      "keyLine": "Иисус пришёл спасти грешников из всех народов."
    },
    "familyChallenge": {
      "intro": "Соберитесь всей семьёй за чаем или ужином.",
      "instruction": "Прочитайте Иисуса Навина 24:15: «А я и дом мой будем служить Господу».\n\nИисус Навин сделал важный выбор — он решил, что его семья будет служить Господу.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговорите вместе: «Что значит служить Богу не только в церкви, но и дома?»\n\n«Какое одно доброе дело наша семья может сделать на этой неделе, чтобы показать Божью любовь?»\n\nВыберите одно доброе дело, которое вы сделаете вместе: помочь кому-то, посетить одинокого человека, поддержать того, кто переживает трудности, или сделать что-то полезное для других.",
      "ending": "Завершите короткой молитвой, попросив Бога помочь вашей семье жить так, чтобы прославлять Его.\n\nСлужение Господу проявляется не только в наших словах, но и в повседневных поступках.",
      "prayer": "«Боже, помоги нашей семье служить Тебе и показывать Твою любовь ежедневными поступками»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 11",
      "completed": "День 11 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

