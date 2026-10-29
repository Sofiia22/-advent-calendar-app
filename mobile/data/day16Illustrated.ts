import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_SIXTEEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_SIXTEEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day16/story/01-bears.jpg"),
  require("../assets/advent/day16/story/02-oil.jpg"),
  require("../assets/advent/day16/story/03-son-restored.jpg"),
  require("../assets/advent/day16/story/04-servant-girl.jpg"),
];
export const DAY_SIXTEEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 16",
    "title": "Єлисей — Бог чує і допомагає",
    "subtitle": "Божа турбота, віра і послух",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Псалом 33:18",
      "verse": "«Кличуть праведні, і Господь їх чує, і з усіх утисків їхніх визволяє їх»."
    },
    "storyPages": [
      {
        "title": "Ведмедиці — насмішка над Божим пророком",
        "paragraphs": [
          "Єлисей був Божим пророком. Побожні люди любили його, але були й такі, хто не хотів слухати Божого слова і навіть насміхався з нього. Одного дня пророк наблизився до міста, мешканці якого поклонялися ідолам. Назустріч йому вибігла група дітей. Вони помітили, що в Єлисея не було волосся на голові, і почали глузувати: «Іди звідси, лисий!» Так вони зневажали не лише людину, а й пророка, якого послав Господь.",
          "Єлисей обернувся до них і виголосив суд Господнім Ім’ям. Із лісу вийшли дві ведмедиці, і сорок двоє з тих дітей зазнали тяжкого покарання. Це сувора й сумна історія. Вона показує, що не можна легковажно ставитися до Бога, Його Слова та Його посланців. Бог бажає, щоб ми навчалися поваги й слухняності, а не робили жорстокість чи зневагу приводом для сміху."
        ],
        "imageIndex": 0
      },
      {
        "title": "Горщики з олією — допомога вдові",
        "paragraphs": [
          "Одного разу до Єлисея прийшла бідна вдова. Її чоловік помер, залишивши борги. Тепер позикодавець погрожував забрати двох її синів у рабство. Жінка була у відчаї та розповіла пророкові про свою біду. Єлисей запитав, що є в її домі. Вона відповіла, що не має нічого, крім невеликої посудини з олією.",
          "Тоді пророк звелів піти до сусідів, попросити якомога більше порожніх посудин, повернутися додому й зачинити двері за собою та синами. Після цього вона мала наливати олію в усі посудини, одну за одною. Вдова послухалася. Сини приносили горщики, а вона наповнювала їх олією. Маленька посудина не порожніла! Вони наповнили один горщик, другий, третій і багато інших. Нарешті мати попросила ще одну посудину, але син відповів, що більше немає жодної. Тоді олія перестала текти.",
          "Жінка з радістю прийшла до Єлисея. Він порадив продати олію, сплатити борги й жити разом із синами на решту коштів. Тепер її діти могли залишитися вдома. Бог побачив нужду цієї сім’ї та дивовижно подбав про неї. І сьогодні ми можемо приносити Йому свої переживання й довіряти Його турботі."
        ],
        "imageIndex": 1
      },
      {
        "title": "Горниця — син, повернений до життя",
        "paragraphs": [
          "Єлисей багато подорожував, навчаючи людей Божого Закону. У місті Шунемі одна заможна жінка часто запрошувала його поїсти. Вона сказала чоловікові, що Єлисей — святий Божий чоловік, і запропонувала облаштувати для нього невелику кімнату з  ліжком, столом, стільцем та світильником. Відтоді пророк міг зупинятися в їхньому домі.",
          "Вдячний за гостинність, Єлисей хотів чимось допомогти жінці. Слуга Ґехазі помітив, що в неї не було дітей, а чоловік був уже старим. Єлисей покликав жінку та сказав, що через рік вона триматиме на руках сина. Вона боялася повірити, але все сталося саме так. Народився хлопчик, якого батьки дуже любили.",
          "Минув час. Одного дня син пішов до батька на поле, де працювали женці, і раптом почав скаржитися на голову. Слуга відніс його матері. Вона тримала дитину на колінах до полудня, але хлопчик помер. Мати поклала його на ліжко пророка, зачинила двері й поспішила до Єлисея на гору Кармел. Побачивши її здалеку, пророк послав Ґехазі довідатися, чи все гаразд. Жінка ж, прийшовши до Єлисея, припала до його ніг і розповіла про горе.",
          "Єлисей послав свого слугу з палицею, наказавши покласти її на обличчя хлопчика. Проте дитина не ожила. Пророк сам прийшов у дім, зайшов до кімнати, зачинив двері та молився до Господа. Він схилився над дитиною; її тіло почало зігріватися. Після того як він підвівся, пройшовся кімнатою й знову схилився над хлопчиком, той чхнув сім разів і розплющив очі. Бог повернув йому життя! Єлисей покликав матір: «Візьми свого сина».",
          "Вона впала до його ніг із вдячністю, а потім обійняла дитину. Її горе змінилося радістю. Господь почув молитву пророка."
        ],
        "imageIndex": 2
      },
      {
        "title": "Маленька служниця — зцілення Неємана",
        "paragraphs": [
          "Сирійські воїни колись захопили маленьку ізраїльську дівчинку й забрали її далеко від рідного дому. Вона стала служницею дружини Неємана, відомого сирійського воєначальника. Неєман був хоробрим, але хворів на проказу. Дівчинка не забула свого Бога й сказала господині, що в Самарії є Божий пророк, який міг би допомогти її чоловікові.",
          "Неєман розповів про це цареві Сирії, дістав листа до ізраїльського царя й вирушив із дорогими подарунками. Цар Ізраїлю злякався: як він може зцілити людину? Але Єлисей попросив прислати воєначальника до нього. Неєман приїхав із кіньми та колісницею й очікував урочистої зустрічі. Натомість пророк послав слугу зі словами: «Піди, обмийся сім разів у Йордані — і очистишся».",
          "Неєман розгнівався. Він уявляв, що Єлисей вийде, молитиметься та зробить щось велике; до того ж річки його батьківщини здавалися йому кращими за Йордан. Він уже хотів поїхати, але слуги переконали його: якби пророк наказав зробити щось важке, хіба він не послухався б? Тим більше варто виконати таке просте прохання! Неєман послухався, сім разів занурився в Йордан — і став чистим. Його тіло було здоровим, наче в дитини. Він повернувся до Єлисея, визнав, що Господь є істинним Богом, і захотів віддячити подарунками. Але пророк відмовився: Божу милість не можна купити.",
          "Слуга Єлисея Ґехазі пожадливо побіг за Неєманом і збрехав, ніби його господар просить срібла й одягу для двох молодих пророків. Він отримав подарунки, сховав їх, а повернувшись, знову збрехав Єлисеєві, що нікуди не ходив. Пророк знав правду. Через обман і жадібність проказа Неємана перейшла на Ґехазі. Маленька дівчинка, хоча й не мала багатства чи влади, виявила віру; натомість слуга пророка, який бачив численні чудеса, обрав неправду. І дитина може свідчити про Бога, а кожному з нас потрібно берегти серце від жадібності."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Чому діти глузували з Єлисея?",
      "Як Господь допоміг бідній вдові?",
      "Чому жінка зробила кімнату для пророка?",
      "Як повернулося життя її синові?",
      "Як маленька дівчинка допомогла Неєманові?",
      "Чому Неєман спершу не хотів слухатися?",
      "Що сталося після його послуху?",
      "Чого навчає приклад Ґехазі?"
    ],
    "promise": {
      "body": "Бог чує молитви тих, хто звертається до Нього, і дбає про Своїх дітей. Навіть коли ми не бачимо виходу, можемо довіряти Йому.",
      "keyLine": "Бог чує молитви й дбає про Своїх дітей."
    },
    "connection": {
      "body": "Єлисей був Божим пророком: через нього Бог забезпечував людей, зцілював хворих і повернув дитині життя. Багато років потому прийшов Ісус Христос. Він теж зцілював і воскрешав, але Він більше ніж пророк — Син Божий, Який прийшов спасти людей від гріха. Історії Єлисея спрямовують наш погляд до Спасителя.",
      "keyLine": "Історії Єлисея спрямовують наш погляд до Спасителя."
    },
    "familyChallenge": {
      "intro": "КОМУ Я МОЖУ РОЗПОВІСТИ ПРО БОГА?",
      "instruction": "Маленька служниця допомогла Неєманові дізнатися про Господа. Поговоріть усією сім’єю: хто поруч із вами потребує доброго слова, підтримки або молитви? Нехай кожен назве одну людину, якій хоче допомогти чи розповісти про Ісуса. Помоліться за них разом.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помоліться разом",
      "prayer": "Господи, допоможи нам довіряти Тобі й розповідати іншим про Твою любов."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 16",
      "completed": "День 16 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 16",
    "title": "Elisha — God Hears and Helps",
    "subtitle": "God’s Care, Faith, and Obedience",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Psalm 34:17 (NKJV)",
      "verse": "“The righteous cry out, and the LORD hears, And delivers them out of all their troubles.”"
    },
    "storyPages": [
      {
        "title": "The Bears — Mocking God’s Prophet",
        "paragraphs": [
          "Elisha was a prophet of God. People who loved the Lord respected him, but others did not want to listen to God’s word and even made fun of him. One day, as Elisha approached a town where people worshiped idols, a group of young people came out to meet him. They noticed that he had little or no hair and began to mock him, shouting, “Go up, you baldhead!” Their words showed contempt not only for Elisha but also for the God who sent him.",
          "Elisha turned toward them and pronounced judgment in the name of the Lord. Two female bears came out of the woods, and forty-two of the mockers suffered a terrible punishment. This is a serious and sad account. It reminds us that mocking God and treating His word or His servants with contempt is not a harmless joke. We should learn reverence, respect, and obedience instead of making others the target of cruelty."
        ],
        "imageIndex": 0
      },
      {
        "title": "The Jars of Oil — God Helps a Widow",
        "paragraphs": [
          "One day a poor widow came to Elisha. Her husband had died and left debts she could not pay. Now a creditor threatened to take her two sons as slaves. The woman was distressed and told the prophet what had happened. Elisha asked what she had in her house. She answered that she had nothing except one small jar of oil.",
          "Elisha told her to visit her neighbors and borrow as many empty vessels as possible. Then she was to go inside with her sons, close the door, and pour oil into all the vessels, setting each full one aside. The widow obeyed. Her sons brought the jars while she poured. Amazingly, the little jar did not run dry! They filled one vessel after another. At last she asked a son for another vessel, but he replied that none were left. Only then did the oil stop flowing.",
          "The widow hurried to Elisha with the wonderful news. He told her to sell the oil, pay her debt, and live with her children on what remained. Her sons no longer had to be taken away. God had seen the family's need and provided for them in an extraordinary way. We, too, can bring Him our worries and trust His care, even when we cannot see a solution."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Upper Room — A Son Restored to Life",
        "paragraphs": [
          "Elisha traveled from place to place teaching God's people. In Shunem a wealthy woman often welcomed him into her home and offered him food. She told her husband that Elisha was a holy man of God and suggested building a small upper room for him with a bed, a table, a chair, and a lamp. Whenever the prophet visited, he could rest there.",
          "Grateful for their kindness, Elisha wanted to do something for the family. His servant Gehazi observed that the woman had no child and her husband was old. Elisha called her and promised that about a year later she would hold a son in her arms. She hardly dared believe it,  but the promise came true. A baby boy was born, and his parents loved him dearly.",
          "Years later, the boy went to his father in the fields where the harvesters worked. Suddenly he cried that his head hurt. A servant carried him to his mother. She held him on her lap until noon, but he died. Overcome with grief, she laid him on the prophet's bed, shut the door, and hurried to Elisha at Mount Carmel. Seeing her from a distance, Elisha sent Gehazi to ask whether all was well. When she reached the prophet she fell at his feet and poured out her sorrow.",
          "Elisha first sent Gehazi with his staff and ordered him to place it on the child's face, but the boy did not awaken. Elisha himself went to the house, entered the room, shut the door, and prayed to the Lord. He stretched himself over the child, and the boy's body began to grow warm. Elisha walked around the room and stretched himself over him again. Then the child sneezed seven times and opened his eyes. God had restored his life! Elisha called for the mother and said, “Pick up your son.” She bowed in gratitude and took her beloved child into her arms. Her grief turned to joy. The Lord had heard the prophet's prayer."
        ],
        "imageIndex": 2
      },
      {
        "title": "The Little Servant Girl — Naaman Is Healed",
        "paragraphs": [
          "Syrian soldiers had taken a young Israelite girl captive and carried her far from home. She served the wife of Naaman, an important commander of the Syrian army. Naaman was a brave and respected soldier, but he suffered from leprosy. The girl had not forgotten the Lord. She told her mistress that a prophet in Samaria could help her master.",
          "Naaman told the king of Syria. With a letter to the king of Israel and expensive gifts of silver, gold, and clothes, he began his journey. The king of Israel was frightened when he read the letter: how could he cure a man of leprosy? But Elisha sent word that Naaman should come to him. The commander arrived with horses and chariots, expecting a grand welcome. Instead the prophet sent a messenger: “Go and wash in the Jordan seven times, and you will be clean.”",
          "Naaman became angry. He had imagined Elisha coming outside, praying dramatically, and doing something impressive. Surely the rivers back home were better than the Jordan! He was ready to leave, but his servants spoke wisely: if the prophet had asked him to do something difficult, would he not have done it? Why not obey this simple instruction? Naaman listened, dipped seven times into the Jordan, and was healed. His skin became clean like that of a little child. He returned to Elisha, confessed that the God of Israel is the true God, and offered gifts in gratitude. Elisha refused them, for God's mercy was not something to buy.",
          "Yet Gehazi, Elisha's servant, greedily ran after Naaman. He lied, claiming his master needed silver and clothing for two young prophets. Naaman gave him gifts, which Gehazi hid away. When he returned to Elisha, he lied again and said he had gone nowhere. But Elisha knew the truth. Because of his greed and deceit, Naaman's leprosy came upon Gehazi. The little captive girl, with no wealth or power, had shown great faith, while a servant who had seen God's miracles chose dishonesty. Even a child can tell others about God, and everyone must guard the heart against greed."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Why did the young people mock Elisha?",
      "How did God help the poor widow?",
      "Why did the woman prepare a room for the prophet?",
      "How was her son restored to life?",
      "How did the little girl help Naaman?",
      "Why was Naaman reluctant to obey at first?",
      "What happened when he obeyed?",
      "What do we learn from Gehazi?"
    ],
    "promise": {
      "body": "God hears those who call on Him and cares for His children. Even when we do not see a way forward, we can trust Him.",
      "keyLine": "God hears those who call on Him and cares for His children."
    },
    "connection": {
      "body": "Elisha was a prophet through whom God provided for people, healed the sick, and restored a child to life. Many years later Jesus Christ came. He also healed people and raised the dead, but He is more than a prophet: He is the Son of God who came to save people from sin. These stories point us toward the Savior.",
      "keyLine": "These stories point us toward the Savior."
    },
    "familyChallenge": {
      "intro": "WHO CAN I TELL ABOUT GOD?",
      "instruction": "The little servant girl helped Naaman learn about the Lord. Talk as a family: who around you needs a kind word, encouragement, or prayer? Have each person name someone they want to help or tell about Jesus. Pray for those people together.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Pray together",
      "prayer": "Lord, help us trust You and tell others about Your love."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 16",
      "completed": "Day 16 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 16",
    "title": "Елисей — Бог слышит и помогает",
    "subtitle": "Божья забота, вера и послушание",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Псалом 33:18 (Синодальный перевод)",
      "verse": "«Взывают праведные, и Господь слышит, и от всех скорбей их избавляет их»."
    },
    "storyPages": [
      {
        "title": "Медведицы — насмешки над Божьим пророком",
        "paragraphs": [
          "Елисей был Божьим пророком. Благочестивые люди любили его, но другие не хотели слушать Божье слово и даже насмехались над ним. Однажды пророк подошёл к городу, жители которого поклонялись идолам. Навстречу ему выбежала группа детей. Увидев, что на голове Елисея почти нет волос, они начали кричать: «Иди отсюда, плешивый!»",
          "Их слова выражали неуважение не только к человеку, но и к Богу, Который послал пророка. Елисей обернулся и произнёс суд во имя Господа. Из леса вышли две медведицы, и сорок два человека из тех, кто насмехался, понесли страшное наказание. Это суровая и печальная история. Она напоминает нам, что неуважение к Богу, Его Слову и Его посланникам — не безобидная шутка. Мы должны учиться благоговению, уважению и послушанию, а не насмехаться над другими."
        ],
        "imageIndex": 0
      },
      {
        "title": "Сосуды с маслом — помощь вдове",
        "paragraphs": [
          "Однажды к Елисею пришла бедная вдова. Её муж умер, оставив долги, которые она не могла выплатить. Теперь заимодавец хотел забрать двух её сыновей в рабы. Женщина была в отчаянии и рассказала пророку о своей беде. Елисей спросил, что у неё есть дома. Она ответила: ничего, кроме небольшого сосуда с маслом.",
          "Пророк велел попросить у соседей как можно больше пустых сосудов, вернуться домой, закрыть дверь за собой и своими сыновьями и разливать масло по сосудам. Вдова послушалась. Сыновья приносили сосуды, а она наполняла их маслом. И произошло чудо: её маленький сосуд не пустел! Она наполнила первый, второй, третий и много других. Наконец женщина попросила ещё сосуд, но сын сказал, что больше ничего нет.",
          "Только тогда масло перестало течь. Вдова поспешила к Елисею с радостной вестью. Он велел продать масло, уплатить долг и жить с детьми на оставшиеся деньги. Теперь сыновей не должны были забрать. Господь увидел нужду семьи и чудесно позаботился о ней. И мы можем доверять Ему наши переживания, даже если пока не видим решения."
        ],
        "imageIndex": 1
      },
      {
        "title": "Горница — сын, возвращённый к жизни",
        "paragraphs": [
          "Елисей переходил из города в город, обучая людей Божьему Закону. В Сонаме одна состоятельная женщина часто приглашала его к себе поесть. Она сказала мужу, что Елисей — святой человек Божий, и предложила устроить для него небольшую комнату с постелью, столом, стулом и светильником. Теперь пророк мог останавливаться в их доме.",
          " Благодарный за гостеприимство, Елисей хотел помочь этой семье. Его слуга Гиезий заметил, что у женщины нет детей, а муж уже стар. Елисей позвал её и сказал, что примерно через год она будет держать сына на руках. Женщина боялась поверить, но всё случилось по слову пророка: у неё родился мальчик. Родители очень любили ребёнка.",
          "Прошли годы. Однажды мальчик отправился к отцу в поле, где работали жнецы. Вдруг он пожаловался на сильную боль в голове. Слуга отнёс его матери. Она держала сына на коленях до полудня, но мальчик умер. Убитая горем мать положила его на постель пророка, закрыла дверь и поспешила к Елисею на гору Кармил. Увидев её издалека, пророк послал Гиезия узнать, всё ли благополучно. Когда женщина добралась до Елисея, она припала к его ногам и рассказала о горе.",
          "Сначала Елисей послал Гиезия со своим посохом и велел положить его на лицо ребёнка, но мальчик не ожил. Тогда пророк сам пришёл в дом, вошёл в комнату, закрыл дверь и молился Господу. Он склонился над мальчиком, и тело ребёнка начало согреваться. Елисей прошёл по комнате и снова наклонился над ним. Вдруг мальчик чихнул семь раз и открыл глаза! Бог вернул ему жизнь. Елисей позвал мать и сказал: «Возьми сына твоего». Она поклонилась до земли и с радостью обняла ребёнка. Её горе сменилось радостью: Господь услышал молитву пророка."
        ],
        "imageIndex": 2
      },
      {
        "title": "Маленькая служанка — исцеление Неемана",
        "paragraphs": [
          "Сирийские воины захватили маленькую израильскую девочку и увели далеко от родного дома. Она стала служанкой жены Неемана, известного сирийского военачальника. Нееман был храбрым и уважаемым человеком, но страдал проказой. Девочка не забыла Господа. Она сказала своей госпоже, что в Самарии есть Божий пророк, который мог бы помочь её хозяину.",
          "Нееман рассказал всё сирийскому царю. Взяв письмо к царю Израиля и дорогие подарки — серебро, золото и одежды, — он отправился в путь. Израильский царь испугался, прочитав письмо: как он может исцелить человека от проказы? Но Елисей велел прислать Неемана к нему. Военачальник приехал с конями и колесницей, ожидая торжественной встречи. Вместо этого пророк послал слугу со словами: «Пойди, омойся семь раз в Иордане — и будешь чист».",
          "Нееман разгневался. Он представлял, что Елисей выйдет, совершит молитву и сделает нечто великое. Ему казалось, что реки на его родине гораздо лучше Иордана. Он уже собирался уехать, но слуги сказали: если бы пророк попросил сделать что-нибудь трудное, разве он не согласился бы? Тем более стоит исполнить простое повеление.",
          "Нееман послушался, семь раз окунулся в Иордан и исцелился. Его кожа стала чистой, как у маленького ребёнка. Он вернулся к Елисею, признал истинным Богом Господа и предложил подарки, но пророк отказался: Божью милость нельзя купить. Однако Гиезий, слуга Елисея, из жадности побежал вслед за Нееманом. Он солгал, будто хозяин просит серебра и одежды для двух молодых пророков. Полученные подарки он спрятал, а вернувшись домой, снова солгал Елисею, сказав, что никуда не  ходил. Но пророк знал правду. За алчность и обман проказа Неемана перешла на Гиезия. Маленькая пленная девочка, не имея ни богатства, ни власти, проявила веру; а слуга, видевший множество Божьих чудес, выбрал ложь. Даже ребёнок может рассказать о Боге, а каждому нужно хранить своё сердце от жадности."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Почему дети насмехались над Елисеем?",
      "Как Господь помог бедной вдове?",
      "Почему женщина устроила комнату для пророка?",
      "Как её сын вернулся к жизни?",
      "Как маленькая девочка помогла Нееману?",
      "Почему Нееман сначала не хотел слушаться?",
      "Что произошло после его послушания?",
      "Чему учит история Гиезия?"
    ],
    "promise": {
      "body": "Бог слышит молитвы тех, кто обращается к Нему, и заботится о Своих детях. Даже когда мы не видим выхода, можем доверять Ему.",
      "keyLine": "Бог слышит молитвы и заботится о Своих детях."
    },
    "connection": {
      "body": "Елисей был Божьим пророком: через него Бог восполнял нужды людей, исцелял больных и возвратил ребёнка к жизни. Много лет спустя пришёл Иисус Христос. Он тоже исцелял и воскрешал, но Он больше, чем пророк: Он Сын Божий, пришедший спасти людей от греха. Истории Елисея направляют наш взгляд ко Спасителю.",
      "keyLine": "Истории Елисея направляют наш взгляд ко Спасителю."
    },
    "familyChallenge": {
      "intro": "КОМУ Я МОГУ РАССКАЗАТЬ О БОГЕ?",
      "instruction": "Маленькая служанка помогла Нееману узнать о Господе. Поговорите всей семьёй: кто рядом с вами нуждается в добром слове, поддержке или молитве? Пусть каждый назовёт человека, которому хотел бы помочь или рассказать об Иисусе. Помолитесь за них вместе.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, помоги нам доверять Тебе и рассказывать другим о Твоей любви."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 16",
      "completed": "День 16 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

