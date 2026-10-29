import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_SEVEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_SEVEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day7/story/01-coat.jpg"),
  require("../assets/advent/day7/story/02-dreams.jpg"),
  require("../assets/advent/day7/story/03-pit.jpg"),
  require("../assets/advent/day7/story/04-slavery.jpg"),
  require("../assets/advent/day7/story/05-prison.jpg"),
  require("../assets/advent/day7/story/06-pharaoh.jpg"),
  require("../assets/advent/day7/story/07-grain.jpg"),
  require("../assets/advent/day7/story/08-brothers.jpg"),
  require("../assets/advent/day7/story/09-forgiveness.jpg"),
  require("../assets/advent/day7/story/10-reunion.jpg"),
];
export const DAY_SEVEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 7",
    "title": "Йосип — Бог обертає зло на добро",
    "subtitle": "Від глибокої ями до управителя Єгипту",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Ви задумували були на мене зло, та Бог задумав те на добре».",
      "reference": "Буття 50:20"
    },
    "storyPages": [
      {
        "title": "Різнокольоровий одяг",
        "paragraphs": [
          "Яків знову побачив свого батька Ісаака. Згодом Ісаак помер, і Яків разом із братом Ісавом поховали його в тій самій печері, де вже були поховані Авраам і Сарра.",
          "Яків залишився в Ханаані зі своїми дітьми. У нього було дванадцять синів. Наймолодшими були Йосип і Веніямин. Йосип був старшим із двох синів Рахілі, яку Яків дуже любив.",
          "Десять старших синів Якова пасли отари кіз і овець та не завжди слухалися батька. Йосип дуже засмучувався їхніми поганими вчинками й розповідав про них батькові. Яків любив Йосипа більше за інших синів і подарував йому гарний різнокольоровий одяг. Через це брати заздрили Йосипові. Заздрість — недобре почуття: Господь бажає, щоб ми любили одне одного."
        ],
        "imageIndex": 0
      },
      {
        "title": "Сни Йосипа",
        "paragraphs": [
          "Одного разу Йосипові наснилося, ніби він разом із братами в’яже снопи на полі. Його сніп підвівся, а снопи братів вклонилися йому. Коли Йосип розповів сон, брати запитали: «Невже ти будеш царювати над нами?» Вони зненавиділи його ще більше.",
          "Пізніше Йосип побачив інший сон: сонце, місяць та одинадцять зірок вклонялися йому.",
          "Батько запитав: «Невже я, твоя мати і твої брати прийдемо вклонитися тобі до землі?»",
          "Але Яків запам’ятав цей сон і роздумував над ним."
        ],
        "imageIndex": 1
      },
      {
        "title": "Глибока яма",
        "paragraphs": [
          "Коли брати пішли далеко від дому пасти худобу, Яків послав Йосипа дізнатися, як вони поживають. Йосип охоче вирушив у дорогу. Він довго шукав братів, поки один чоловік не підказав йому, куди вони пішли.",
          "Брати побачили Йосипа здалеку й сказали: «Ось іде сновидець!» Вони вирішили вбити його, кинути в яму, а батькові сказати, що його розірвав звір. Старший брат Рувим не хотів смерті Йосипа. Він порадив кинути його в яму, сподіваючись потім визволити й повернути батькові.",
          "Коли Йосип прийшов, брати зняли з нього різнокольоровий одяг і кинули його в глибоку яму. Він залишився там сам, голодний і стомлений. Брати не виявили жалю. Йосип не розумів, чому вони так жорстоко вчинили, але Господь бачив усе."
        ],
        "imageIndex": 2
      },
      {
        "title": "НЕВОЛЯ",
        "paragraphs": [
          "Поки брати обідали, наблизилися купці з верблюдами, які прямували до Єгипту. Юда запропонував продати їм Йосипа. Брати погодилися, витягли його з ями й продали за двадцять срібняків. Йосип благав відпустити його до батька, але вони не послухали.",
          "Коли Рувим повернувся до ями, Йосипа там уже не було. Він дуже засмутився, бо хотів його врятувати. Брати вбили козеня, забруднили його кров’ю різнокольоровий одяг Йосипа й послали батькові. Яків упізнав одяг і вирішив, що його улюбленого сина розірвав дикий звір.",
          "Батько гірко плакав. Сини намагалися втішити його, приховуючи свій учинок, але Бог знав правду. Йосипа ж привезли до Єгипту й продали чоловікові на ім’я Потіфар. Він став рабом у чужій країні, далеко від рідних, але Бог не залишив його."
        ],
        "imageIndex": 3
      },
      {
        "title": "ЙОСИП У ДОМІ ПОТІФАРА",
        "paragraphs": [
          "Потіфар був багатим і впливовим єгиптянином. Йосип старанно, сумлінно й чесно виконував усі його доручення. Господь благословляв працю Йосипа, і Потіфар помічав, як усе вдається. Згодом він доручив Йосипові піклуватися про весь свій дім і майно.",
          "Хоч Йосип потрапив у рабство через жорстокість братів, він не перестав любити Бога й чинити правильно. Дружина Потіфара неодноразово намагалася схилити його до гріха, але Йосип відмовлявся. Він розумів, що це був би гріх перед Богом, і сказав: «Як же я вчиню це велике зло і згрішу перед Богом?» (Буття 39:9).",
          "Одного разу жінка схопила Йосипа за одяг, але він вирвався й утік, залишивши одяг у її руках. Розгнівана жінка неправдиво звинуватила його перед чоловіком. Потіфар повірив їй і наказав ув’язнити Йосипа. Той знову страждав через чужий гріх, хоча не зробив нічого поганого, але Господь був із ним і у в’язниці."
        ],
        "imageIndex": null
      },
      {
        "title": "ЙОСИП У В’ЯЗНИЦІ",
        "paragraphs": [
          "У в’язниці Йосип залишався чесним, слухняним і вірним Богові. Начальник в’язниці довірив йому наглядати за іншими в’язнями.",
          "Одного разу туди потрапили два слуги фараона — головний чашник і головний пекар.",
          "Обидва побачили незвичайні сни, яких не могли зрозуміти. Йосип сказав, що пояснення снів належить Богові.",
          "Чашникові наснилася виноградна лоза з трьома гілками. На ній дозрів виноград, який він вичавив у чашу фараона. Йосип пояснив, що за три дні фараон поверне його на службу.",
          "Він попросив чашника згадати про нього перед фараоном.",
          "Пекареві наснилося, що він несе на голові три кошики з хлібом, а птахи їдять із верхнього кошика. Йосип пояснив, що через три дні пекаря стратять.",
          "Усе сталося саме так: чашника повернули на службу, а пекаря стратили. Проте чашник забув про Йосипа. Минуло ще два роки, і Йосип залишався у в’язниці. Люди забули його, але Бог — ні."
        ],
        "imageIndex": 4
      },
      {
        "title": "Сни фараона",
        "paragraphs": [
          "Одного разу фараон побачив два незвичайні сни. Спочатку він побачив біля Нілу сім здорових, ситих корів, а потім сім худих, які з’їли ситих. У другому сні сім повних колосків були поглинуті сімома тонкими, висушеними вітром.",
          "Фараон покликав мудреців і ворожбитів Єгипту, але ніхто не зміг пояснити сни. Тоді чашник згадав Йосипа. Фараон наказав привести його з в’язниці. Йосип поголився, змінив одяг і став перед фараоном. Він пояснив, що сам не має такої мудрості, але Бог відкриє значення снів.",
          "Сім здорових корів і добрих колосків означали сім років великого достатку; сім худих корів і порожніх колосків — сім років страшного голоду після них. Йосип порадив призначити мудрого управителя, який збиратиме зерно під час добрих років і збереже їжу на час голоду."
        ],
        "imageIndex": 5
      },
      {
        "title": "Запаси на час голоду",
        "paragraphs": [
          "Фараон зрозумів, що Бог дав Йосипові особливу мудрість. Він призначив його управителем над усім Єгиптом, дав перстень, коштовний одяг і золотий ланцюг. Йосипові було тридцять років. Колишній раб і в’язень став одним із найвпливовіших людей країни.",
          "Протягом семи врожайних років Йосип збирав зерно в містах. Коли настав голод, у Єгипті були запаси, і люди з багатьох країн приходили купувати їжу. Одного дня прийшли також його брати."
        ],
        "imageIndex": 6
      },
      {
        "title": "БРАТИ ПРИХОДЯТЬ ДО ЄГИПТУ",
        "paragraphs": [
          "Голод настав і в Ханаані. Яків послав десятьох синів купувати зерно в Єгипті, але Веніямина залишив удома, боячись нещастя.",
          "Брати прийшли до Йосипа, який керував продажем зерна. Вони його не впізнали: минуло багато років, він був дорослим чоловіком у єгипетському одязі та мав високе становище.",
          "Йосип одразу впізнав їх. Вони вклонилися йому до землі, і він згадав сни про снопи та зорі.",
          "Не відкриваючи себе, Йосип розпитав братів про родину. Вони сказали, що наймолодший брат залишився з батьком, а одного брата вже немає. Йосип удав, що підозрює їх у шпигунстві, і наказав привести Веніямина, бажаючи перевірити братів.",
          "У неволі брати згадували, як колись не послухали благань Йосипа, і говорили, що тепер страждають за свій гріх. Йосип розумів їхню мову, відійшов і заплакав.",
          "Він відпустив братів із зерном, але залишив Симеона до їхнього повернення й наказав покласти гроші назад у їхні мішки. У дорозі брати знайшли гроші й злякалися. Вдома вони розповіли все батькові та пояснили, що мусять привести Веніямина. Яків не хотів відпускати його: після втрати Йосипа він боявся втратити й наймолодшого сина."
        ],
        "imageIndex": 7
      },
      {
        "title": "ДРУГА ПОДОРОЖ БРАТІВ",
        "paragraphs": [
          "Голод посилювався, привезена їжа закінчувалася. Яків знову попросив синів їхати по зерно, але вони нагадали, що мусять узяти Веніямина. Юда пообіцяв відповідати за його повернення. Нарешті Яків погодився. Брати взяли гроші, подарунки та Веніямина.",
          "Побачивши Веніямина, Йосип наказав привести братів до свого дому й приготувати обід.",
          "Вони боялися, що їх покарають за гроші в мішках, але слуга заспокоїв їх. До них привели Симеона.",
          "Коли Йосип прийшов, брати піднесли подарунки й знову вклонилися. Він запитав про здоров’я старого батька, потім побачив Веніямина. Не стримавши сліз, вийшов до іншої кімнати й заплакав.",
          "Повернувшись, він наказав посадити братів за віком — від найстаршого до наймолодшого. Вони дивувалися, звідки він знає їхній вік. Веніяминові дали значно більше їжі. Йосип хотів побачити, чи заздритимуть брати Веніяминові, як колись заздрили йому."
        ],
        "imageIndex": null
      },
      {
        "title": "СРІБНА ЧАША ТА ВИПРОБУВАННЯ БРАТІВ",
        "paragraphs": [
          "Коли брати збиралися додому, Йосип наказав наповнити їхні мішки зерном, повернути гроші, а в мішок Веніямина покласти свою срібну чашу.",
          "Невдовзі їх наздогнав слуга та звинуватив у крадіжці. Брати були певні, що нічого не вкрали, і дозволили обшукати мішки. Чашу знайшли у Веніямина. Усі засмутилися й повернулися до Йосипа.",
          "Йосип сказав, що Веніямин залишиться рабом, а решта може повертатися до батька. Це було випробування: колись вони продали Йосипа в рабство; чи залишать тепер Веніямина заради власного порятунку?",
          "Але тепер брати вчинили інакше. Юда благав відпустити Веніямина, розповів, як любить його старий батько і яким страшним горем стане його втрата. Юда запропонував залишитися рабом замість Веніямина. Він був готовий постраждати сам, щоб молодший брат повернувся додому. Йосип побачив, що серця братів змінилися."
        ],
        "imageIndex": null
      },
      {
        "title": "ЙОСИП ВІДКРИВАЄТЬСЯ БРАТАМ",
        "paragraphs": [
          "Йосип більше не міг стримувати почуттів. Він наказав усім єгиптянам вийти з кімнати, а сам голосно заплакав і сказав: «Я — Йосип! Чи живий ще мій батько?»",
          "Брати злякалися й не могли повірити, що перед ними стоїть той, кого вони продали в рабство. Але Йосип лагідно покликав їх ближче і сказав, що не хоче мститися. Вони вчинили проти нього зло, та Бог обернув це на добро: Йосип зміг врятувати від голоду батька, братів і багато інших людей.",
          "Йосип обійняв Веніямина й заплакав, потім поцілував усіх братів. Вони теж плакали й розмовляли з ним. Йосип простив їх. Брати чекали покарання, а отримали прощення й любов."
        ],
        "imageIndex": 8
      },
      {
        "title": "ЯКІВ ПЕРЕСЕЛЯЄТЬСЯ ДО ЄГИПТУ",
        "paragraphs": [
          "Фараон зрадів, почувши про братів Йосипа, і дозволив запросити до Єгипту всю родину.",
          "Він обіцяв їм добру землю. Йосип передав братам подарунки, одяг і вози для переїзду.",
          "Повернувшись додому, брати сказали Якову: «Йосип живий! Він володар над усім Єгиптом!» Спочатку Яків не повірив, але, побачивши вози і почувши розповідь синів, ожив духом. Він захотів побачити Йосипа до своєї смерті.",
          "Яків зібрав родину й вирушив до Єгипту. Бог підбадьорив його й пообіцяв бути з ним.",
          "Йосип виїхав назустріч батькові. Після довгих років розлуки вони обійнялися й плакали.",
          "Яків був щасливий знову побачити сина живим.",
          "Родина оселилася в землі Ґошен, де були добрі пасовища. Фараон прийняв Якова, а той благословив його. Яків прожив у Єгипті ще сімнадцять років, благословив синів і нащадків, а після смерті Йосип поховав його в Ханаані, у родинній печері.",
          "Після смерті батька брати знову боялися помсти Йосипа. Але він заплакав, коли почув їхні слова, заспокоїв їх і сказав: «Ви задумували були на мене зло, та Бог задумав те на добре, щоб зробити, як бачите сьогодні, — щоб заховати при житті великий народ!» (Буття 50:20).",
          "Йосип пообіцяв піклуватися про братів та їхніх дітей. Він не хотів відплачувати злом за зло, бо навчився довіряти Богові та прощати."
        ],
        "imageIndex": 9
      },
      {
        "title": "БОЖИЙ ЗАДУМ",
        "paragraphs": [
          "Колись Йосип був хлопцем, якого брати ненавиділи й продали в рабство. Він пережив несправедливість, самотність, неправдиві звинувачення та ув’язнення. Але Господь був із ним за всіх обставин.",
          "Йосип не знав, чому все відбувається, проте Бог мав Свій задум. Через багато років він побачив, як Господь використав навіть зло братів, щоб врятувати багатьох людей від голоду.",
          "Бог також виконував обітницю, дану Авраамові, Ісаакові та Якову, і продовжував піклуватися про їхніх нащадків. Через багато поколінь із цього народу мав народитися Спаситель — Ісус Христос."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Чому брати заздрили Йосипові?",
      "Що брати зробили з Йосипом?",
      "Як Йосип поводився в домі Потіфара та у в’язниці?",
      "Як Бог допоміг Йосипові стати управителем Єгипту?",
      "Чому брати не впізнали Йосипа, коли прийшли купувати зерно?",
      "Що зробив Йосип, коли відкрився своїм братам?",
      "Як Бог використав зло, яке брати вчинили проти Йосипа, для добра?"
    ],
    "promise": {
      "body": "Колись Йосип був хлопцем, якого брати ненавиділи й продали в рабство. Він пережив несправедливість, самотність, неправдиві звинувачення та ув’язнення. Але Господь був із ним за всіх обставин.\n\nЙосип не знав, чому все відбувається, проте Бог мав Свій задум. Через багато років він побачив, як Господь використав навіть зло братів, щоб врятувати багатьох людей від голоду.\n\nБог також виконував обітницю, дану Авраамові, Ісаакові та Якову, і продовжував піклуватися про їхніх нащадків. Через багато поколінь із цього народу мав народитися Спаситель — Ісус Христос.",
      "keyLine": "Бог може обернути навіть найбільше зло на добро."
    },
    "connection": {
      "body": "Брати відкинули Йосипа й продали його в рабство. Він пережив багато страждань, хоча не заслужив їх.\n\nАле Бог був із Йосипом і підніс його до високого становища в Єгипті. Через нього Бог урятував багато людей від голоду, навіть тих братів, які вчинили проти нього зло.\n\nЧерез багато років прийшов Ісус Христос. Його також відкинули люди, Він страждав, хоча не вчинив жодного гріха.\n\nАле через смерть і воскресіння Ісуса Бог відкрив шлях спасіння для грішників.\n\nЙосип урятував людей від голоду й простив своїх братів. Ісус прийшов, щоб урятувати нас від гріха й дарувати нам прощення.",
      "keyLine": "Бог може обернути навіть найбільше зло на добро."
    },
    "familyChallenge": {
      "intro": "Зберіться всією сім’єю за чаєм, какао або улюбленими солодощами.",
      "instruction": "Згадайте, як брати несправедливо вчинили з Йосипом, але він згодом простив їх.\n\nНехай кожен поділиться думками: «Чому іноді так важко пробачити людині, яка нас образила?»",
      "examplesLabel": "",
      "examples": [],
      "reflection": "А потім поговоріть: «Як ми можемо показати прощення у своїй сім’ї?»",
      "ending": "Якщо потрібно, попросіть одне в одного пробачення та завершіть розмову спільною молитвою.\n\nПрощення — це любов, яку ми показуємо на ділі.",
      "prayer": "«Боже, допоможи нам прощати одне одного, любити та довіряти Тобі у важкі часи»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 7",
      "completed": "День 7 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 7",
    "title": "Joseph — God Turns Evil into Good",
    "subtitle": "From the Deep Pit to Ruler of Egypt",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“But as for you, you meant evil against me; but God meant it for good.”",
      "reference": "Genesis 50:20"
    },
    "storyPages": [
      {
        "title": "The Coat of Many Colors",
        "paragraphs": [
          "Jacob saw his father Isaac again. Later Isaac died, and Jacob and his brother Esau buried him in the same cave where Abraham and Sarah had been buried.",
          "Jacob stayed in Canaan with his children. He had twelve sons. The two youngest were Joseph and Benjamin, the sons of Rachel, whom Jacob loved deeply. Joseph was the older of the two.",
          "Jacob’s ten older sons cared for the sheep and goats, but they did not always obey their father.",
          "Joseph was troubled by their bad behavior and told Jacob about it. Jacob loved Joseph more than his other sons and gave him a beautiful coat of many colors. This made the brothers jealous.",
          "Jealousy is a bad feeling: the Lord wants us to love one another."
        ],
        "imageIndex": 0
      },
      {
        "title": "Joseph’s Dreams",
        "paragraphs": [
          "One day Joseph dreamed that he and his brothers were tying sheaves of grain in a field. His sheaf stood upright, and the others bowed down to it. The brothers asked, “Are you really going to rule over us?” They hated him even more.",
          "Later Joseph dreamed that the sun, moon, and eleven stars bowed down to him. His father asked, “Will your mother and I and your brothers really come and bow down to the ground before you?” Jacob remembered and thought about the dream."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Deep Pit",
        "paragraphs": [
          "When the brothers went far from home to graze their flocks, Jacob sent Joseph to check on them. Joseph gladly set out. He searched for a long time until a man told him where his brothers had gone.",
          "Seeing him in the distance, the brothers said, “Here comes the dreamer!” They planned to kill him, throw him into a pit, and tell Jacob that a wild animal had torn him apart. Reuben, the oldest brother, did not want Joseph to die. He suggested throwing him into a pit, hoping to rescue him later and return him to their father.",
          "When Joseph arrived, the brothers took off his colorful coat and threw him into a deep pit. He was left alone, hungry and exhausted. They showed no mercy. Joseph did not understand their cruelty, but the Lord saw everything."
        ],
        "imageIndex": 2
      },
      {
        "title": "SOLD INTO SLAVERY",
        "paragraphs": [
          "While the brothers were eating, merchants approached with camels, traveling toward Egypt.",
          "Judah suggested selling Joseph to them. The brothers agreed, pulled him from the pit, and sold him for twenty pieces of silver. Joseph begged them to send him home, but they would not listen.",
          "When Reuben returned, the pit was empty. He was deeply upset, for he had wanted to save Joseph. The brothers killed a young goat, stained Joseph’s colorful coat with its blood, and sent it to Jacob. Their father recognized it and believed a wild animal had killed his beloved son.",
          "Jacob wept bitterly. His sons tried to comfort him while hiding their terrible deed, but God knew the truth. Joseph was taken to Egypt and sold to a man named Potiphar. He became a slave in a foreign land, far from his family, yet God did not abandon him."
        ],
        "imageIndex": 3
      },
      {
        "title": "JOSEPH IN POTIPHAR’S HOUSE",
        "paragraphs": [
          "Potiphar was a wealthy and powerful Egyptian. Joseph worked diligently and honestly, faithfully doing everything his master asked. The Lord blessed Joseph’s work, and Potiphar noticed how well everything went. Eventually he entrusted his entire house and property to Joseph.",
          "Although Joseph was enslaved because of his brothers’ cruelty, he continued loving God and choosing what was right. Potiphar’s wife repeatedly tempted him to sin, but Joseph refused. He understood that this would be a sin against God. He said, “How then can I do this great wickedness, and sin against God?” (Genesis 39:9).",
          "One day she grabbed Joseph’s garment, but he escaped, leaving it behind in her hands. Angry, she falsely accused him to her husband. Potiphar believed her and had Joseph imprisoned. Once again Joseph suffered through someone else’s sin, although he had done no wrong. But the Lord was with him even in prison."
        ],
        "imageIndex": null
      },
      {
        "title": "JOSEPH IN PRISON",
        "paragraphs": [
          "In prison Joseph remained honest, obedient, and faithful to God. The prison keeper trusted him to care for the other prisoners.",
          "One day two of Pharaoh’s servants — the chief cupbearer and chief baker — were imprisoned.",
          "Both had unusual dreams they could not understand. Joseph told them that interpretations belong to God.",
          "The cupbearer dreamed of a grapevine with three branches. Grapes ripened, and he squeezed them into Pharaoh’s cup. Joseph explained that in three days the cupbearer would return to his position, and asked him to remember Joseph before Pharaoh.",
          "The baker dreamed he was carrying three baskets of bread on his head, and birds ate from the top basket. Joseph explained that the baker would be executed in three days.",
          "Everything happened exactly as Joseph had said: the cupbearer was restored and the baker executed. But the cupbearer forgot Joseph. Another two years passed with Joseph still in prison.",
          "People forgot him, but God did not."
        ],
        "imageIndex": 4
      },
      {
        "title": "Pharaoh’s Dreams",
        "paragraphs": [
          "One day Pharaoh had two unusual dreams. First, he saw seven healthy, well-fed cows by the Nile, followed by seven thin cows that ate the healthy ones. In his second dream seven full heads of grain were swallowed by seven thin ones, dried by the wind.",
          "Pharaoh summoned Egypt’s wise men and magicians, but none could explain the dreams. Then the cupbearer remembered Joseph. Pharaoh had Joseph brought from prison. Joseph shaved, changed his clothes, and appeared before Pharaoh. He explained that his own wisdom was not enough, but God would reveal the meaning.",
          "The seven healthy cows and good heads of grain represented seven years of great abundance; the thin cows and empty heads of grain represented seven years of terrible famine afterward.",
          "Joseph advised Pharaoh to appoint a wise administrator to collect grain during the good years and store food for the famine."
        ],
        "imageIndex": 5
      },
      {
        "title": "Grain for the Famine",
        "paragraphs": [
          "Pharaoh recognized that God had given Joseph special wisdom. He made him ruler over Egypt, giving him a signet ring, fine clothes, and a gold chain. Joseph was thirty years old. A former slave and prisoner had become one of the most powerful men in the country.",
          "During the seven fruitful years Joseph collected grain in the cities. When famine came, Egypt had stores of food, and people came from many countries to buy grain. One day Joseph’s brothers came too."
        ],
        "imageIndex": 6
      },
      {
        "title": "THE BROTHERS COME TO EGYPT",
        "paragraphs": [
          "Famine also struck Canaan. Jacob sent ten of his sons to buy grain in Egypt, but kept Benjamin at home, fearing something might happen to him.",
          "The brothers came before Joseph, who was in charge of selling grain. They did not recognize him: many years had passed, and he was a grown man dressed like an Egyptian and holding great authority. But Joseph recognized them. They bowed to the ground, and he remembered his dreams of sheaves and stars.",
          "Without revealing his identity, Joseph asked about their family. They explained that the youngest brother was with their father, while another brother was no longer living with them.",
          "Joseph pretended to suspect them of being spies and demanded that they bring Benjamin, wishing to test them.",
          "While in custody, the brothers remembered that they had ignored Joseph’s pleas years ago and said they were suffering because of their sin. Joseph understood their words, turned away, and wept.",
          "He sent them home with grain but kept Simeon until they returned, and secretly put their money back in their sacks. The brothers discovered it during the journey and became frightened. At home they told Jacob everything and explained that they must bring Benjamin.",
          "Jacob refused at first: after losing Joseph, he feared losing his youngest son too."
        ],
        "imageIndex": 7
      },
      {
        "title": "THE BROTHERS’ SECOND JOURNEY",
        "paragraphs": [
          "The famine grew worse, and their food ran out. Jacob asked his sons to return for grain, but they reminded him they must take Benjamin. Judah promised to take responsibility for bringing him home. At last Jacob agreed. The brothers took money, gifts, and Benjamin.",
          "When Joseph saw Benjamin, he ordered the brothers brought to his house and a meal prepared.",
          "They feared punishment over the money found in their sacks, but Joseph’s servant reassured them. Simeon was reunited with them.",
          "When Joseph arrived, the brothers presented their gifts and bowed again. He asked about their elderly father, then saw Benjamin. Unable to hold back his tears, he went into another room and wept.",
          "Returning, he seated the brothers in order from oldest to youngest. They were amazed that he knew their ages. Benjamin received much more food than the others. Joseph was watching to see whether his brothers would envy Benjamin as they had once envied him."
        ],
        "imageIndex": null
      },
      {
        "title": "THE SILVER CUP AND THE BROTHERS’ TEST",
        "paragraphs": [
          "As the brothers prepared to leave, Joseph ordered grain put into their sacks, their money returned, and his silver cup hidden in Benjamin’s sack.",
          "Soon his servant caught up with them and accused them of theft. Sure they had stolen nothing, the brothers let him search. The cup was found in Benjamin’s sack. They were distressed and returned to Joseph.",
          "Joseph declared that Benjamin would remain a slave while the others could return to their father. This was a test: years before they had sold Joseph into slavery. Would they now abandon Benjamin to save themselves?",
          "This time they acted differently. Judah pleaded for Benjamin’s release, explaining how much their elderly father loved him and how terribly he would suffer without him. Judah offered to become a slave in Benjamin’s place. He was willing to suffer so his younger brother could go home. Joseph saw that his brothers’ hearts had changed."
        ],
        "imageIndex": null
      },
      {
        "title": "JOSEPH REVEALS HIMSELF",
        "paragraphs": [
          "Joseph could no longer contain his feelings. He sent the Egyptians out of the room, wept loudly, and said, “I am Joseph! Does my father still live?”",
          "The brothers were terrified. They could scarcely believe they were facing the brother they had sold into slavery. But Joseph gently called them closer and said he did not want revenge. They had done evil to him, yet God had brought good from it: Joseph could now save his father, his brothers, and many other people from famine.",
          "Joseph embraced Benjamin and wept, then kissed all his brothers. They too wept and talked with him. Joseph forgave them. They had expected punishment but received forgiveness and love."
        ],
        "imageIndex": 8
      },
      {
        "title": "JACOB MOVES TO EGYPT",
        "paragraphs": [
          "Pharaoh was pleased to hear about Joseph’s brothers. He invited the entire family to Egypt and promised them good land. Joseph sent his brothers home with gifts, clothing, and wagons for the move.",
          "Back home they told Jacob, “Joseph is alive! He is ruler over all Egypt!” Jacob did not believe them at first, but seeing the wagons and hearing their account revived his spirit. He wanted to see Joseph before he died.",
          "Jacob gathered the family and left for Egypt. God encouraged him and promised to be with him.",
          "Joseph went out to meet his father. After many years apart, they embraced and wept. Jacob was overjoyed to see his son alive.",
          "The family settled in Goshen, where the pastures were good. Pharaoh received Jacob, and Jacob blessed him. Jacob lived another seventeen years in Egypt and blessed his sons and descendants. After Jacob’s death, Joseph buried him in the family cave in Canaan.",
          "After their father died, the brothers again feared Joseph would take revenge. But Joseph wept when he heard their words and reassured them: “But as for you, you meant evil against me; but God meant it for good, in order to bring it about as it is this day, to save many people alive.”",
          "(Genesis 50:20).",
          "Joseph promised to care for his brothers and their children. He would not repay evil with evil, for he had learned to trust God and forgive."
        ],
        "imageIndex": 9
      },
      {
        "title": "GOD’S PLAN",
        "paragraphs": [
          "Joseph had once been a boy whose brothers hated him and sold him into slavery. He faced injustice, loneliness, false accusations, and imprisonment. Yet the Lord was with him in every circumstance.",
          "Joseph did not know why these things were happening, but God had a plan. Years later he saw how the Lord had used even his brothers’ evil actions to save many people from famine.",
          "God was also fulfilling the promise made to Abraham, Isaac, and Jacob, continuing to care for their descendants. Many generations later, the Savior — Jesus Christ — would be born from this people."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Why were Joseph’s brothers jealous of him?",
      "What did Joseph’s brothers do to him?",
      "How did Joseph behave in Potiphar’s house and in prison?",
      "How did God help Joseph become a ruler in Egypt?",
      "Why didn’t Joseph’s brothers recognize him when they came to buy grain?",
      "What did Joseph do when he revealed himself to his brothers?",
      "How did God use the evil Joseph’s brothers had done to bring about good?"
    ],
    "promise": {
      "body": "Joseph had once been a boy whose brothers hated him and sold him into slavery. He faced injustice, loneliness, false accusations, and imprisonment. Yet the Lord was with him in every circumstance.\n\nJoseph did not know why these things were happening, but God had a plan. Years later he saw how the Lord had used even his brothers’ evil actions to save many people from famine.\n\nGod was also fulfilling the promise made to Abraham, Isaac, and Jacob, continuing to care for their descendants. Many generations later, the Savior — Jesus Christ — would be born from this people.",
      "keyLine": "God can turn even the greatest evil into good."
    },
    "connection": {
      "body": "Joseph’s brothers rejected him and sold him into slavery. He suffered greatly, even though he did not deserve it.\n\nBut God was with Joseph and raised him to a position of authority in Egypt. Through Joseph, God saved many people from famine, including the very brothers who had treated him so cruelly.\n\nMany years later, Jesus Christ came. He too was rejected by people and suffered, even though He had never sinned.\n\nBut through Jesus’ death and resurrection, God opened the way of salvation for sinners.\n\nJoseph saved people from famine and forgave his brothers. Jesus came to save us from sin and offer us forgiveness.",
      "keyLine": "God can turn even the greatest evil into good."
    },
    "familyChallenge": {
      "intro": "Gather around the table with some tea, hot cocoa, or your favorite treats.",
      "instruction": "Remember how Joseph’s brothers treated him unfairly, yet he later forgave them.\n\nLet everyone share their thoughts: “Why is it sometimes so hard to forgive someone who has hurt us?”",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Then talk about: “How can we show forgiveness in our family?”",
      "ending": "If needed, take a moment to apologize to one another and finish with a prayer together.\n\nForgiveness is love put into action.",
      "prayer": "“God, help us forgive one another, love each other, and trust You in difficult times.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 7",
      "completed": "Day 7 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 7",
    "title": "Иосиф — Бог обращает зло во благо",
    "subtitle": "От глубокой ямы до правителя Египта",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Вот, вы умышляли против меня зло; но Бог обратил это в добро».",
      "reference": "Бытие 50:20"
    },
    "storyPages": [
      {
        "title": "Разноцветная одежда",
        "paragraphs": [
          "Иаков снова увидел своего отца Исаака. Позже Исаак умер, и Иаков вместе с братом Исавом похоронили его в той же пещере, где уже были похоронены Авраам и Сарра.",
          "Иаков остался в Ханаане со своими детьми. У него было двенадцать сыновей. Самыми младшими были Иосиф и Вениамин, сыновья Рахили, которую Иаков очень любил. Иосиф был старшим из этих двоих.",
          "Десять старших сыновей Иакова пасли стада овец и коз, но не всегда слушались отца.",
          "Иосиф огорчался из-за их плохих поступков и рассказывал о них отцу. Иаков любил Иосифа больше других сыновей и подарил ему красивую разноцветную одежду. Из-за этого братья завидовали Иосифу. Зависть — плохое чувство: Господь хочет, чтобы мы любили друг друга."
        ],
        "imageIndex": 0
      },
      {
        "title": "Сны Иосифа",
        "paragraphs": [
          "Однажды Иосифу приснилось, будто он вместе с братьями связывает снопы на поле. Его сноп поднялся, а снопы братьев поклонились ему. Услышав сон, братья спросили: «Неужели ты будешь царствовать над нами?» И возненавидели его ещё больше.",
          "Позже Иосиф увидел другой сон: солнце, луна и одиннадцать звёзд поклонялись ему.",
          "Отец спросил: «Неужели я, твоя мать и твои братья придём поклониться тебе до земли?»",
          "Но Иаков запомнил сон и размышлял о нём."
        ],
        "imageIndex": 1
      },
      {
        "title": "Глубокая яма",
        "paragraphs": [
          "Когда братья ушли далеко от дома пасти скот, Иаков послал Иосифа узнать, как они поживают. Иосиф охотно отправился в путь. Долго он искал братьев, пока один человек не подсказал ему, куда они ушли.",
          "Братья увидели Иосифа издалека и сказали: «Вот идёт сновидец!» Они задумали убить его, бросить в яму, а отцу сказать, что его растерзал зверь. Старший брат Рувим не хотел смерти Иосифа. Он посоветовал бросить его в яму, надеясь позднее спасти его и вернуть отцу.",
          "Когда Иосиф пришёл, братья сняли с него разноцветную одежду и бросили в глубокую яму. Он остался один, голодный и измученный. Братья не проявили жалости. Иосиф не понимал их жестокости, но Господь видел всё."
        ],
        "imageIndex": 2
      },
      {
        "title": "РАБСТВО",
        "paragraphs": [
          "Пока братья обедали, подошли купцы с верблюдами, направлявшиеся в Египет. Иуда предложил продать им Иосифа. Братья согласились, вытащили его из ямы и продали за двадцать серебряников. Иосиф умолял отпустить его домой, но они не слушали.",
          "Когда Рувим вернулся, яма была пуста. Он очень огорчился, потому что хотел спасти Иосифа. Братья убили козлёнка, испачкали его кровью разноцветную одежду Иосифа и отправили её Иакову. Отец узнал одежду и решил, что любимого сына растерзал дикий зверь.",
          "Иаков горько плакал. Сыновья пытались утешить его, скрывая свой страшный поступок, но Бог знал правду. Иосифа привезли в Египет и продали человеку по имени Потифар. Он стал рабом в чужой стране, вдали от родных, но Бог не оставил его."
        ],
        "imageIndex": 3
      },
      {
        "title": "ИОСИФ В ДОМЕ ПОТИФАРА",
        "paragraphs": [
          "Потифар был богатым и влиятельным египтянином. Иосиф добросовестно и честно трудился, выполняя все его поручения. Господь благословлял работу Иосифа, и Потифар замечал, как всё хорошо получается. Со временем он доверил Иосифу весь свой дом и имущество.",
          "Хотя Иосиф попал в рабство из-за жестокости братьев, он продолжал любить Бога и поступать правильно. Жена Потифара неоднократно склоняла его ко греху, но Иосиф отказывался. Он понимал, что это будет грех перед Богом, и сказал: «Как же сделаю я сие великое зло и согрешу пред Богом?» (Бытие 39:9).",
          "Однажды женщина схватила Иосифа за одежду, но он вырвался и убежал, оставив её у неё в руках. Разгневавшись, она ложно обвинила Иосифа перед мужем. Потифар поверил ей и приказал заключить Иосифа в темницу. Он снова страдал из-за чужого греха, хотя не сделал ничего дурного, но Господь был с ним даже в темнице."
        ],
        "imageIndex": null
      },
      {
        "title": "ИОСИФ В ТЕМНИЦЕ",
        "paragraphs": [
          "В темнице Иосиф оставался честным, послушным и верным Богу. Начальник темницы доверил ему присматривать за другими заключёнными.",
          "Однажды туда попали два слуги фараона — главный виночерпий и главный хлебодар.",
          "Оба увидели необычные сны, которых не понимали. Иосиф сказал, что истолкования принадлежат Богу.",
          "Виночерпию приснилась виноградная лоза с тремя ветвями. На ней созрел виноград, который он выжал в чашу фараона. Иосиф объяснил, что через три дня фараон вернёт его на службу, и попросил вспомнить о нём перед фараоном.",
          "Хлебодару приснилось, что он несёт на голове три корзины с хлебом, а птицы клюют хлеб из верхней корзины. Иосиф объяснил, что через три дня хлебодар будет казнён.",
          "Всё случилось именно так: виночерпия вернули на службу, а хлебодара казнили. Но виночерпий забыл об Иосифе. Прошло ещё два года, и Иосиф оставался в темнице. Люди забыли его, но Бог — нет."
        ],
        "imageIndex": 4
      },
      {
        "title": "Сны фараона",
        "paragraphs": [
          "Однажды фараон увидел два необычных сна. Сначала ему приснились семь здоровых, упитанных коров возле Нила, а потом семь худых коров, которые съели упитанных. Во втором сне семь полных колосьев были поглощены семью тонкими, иссушенными ветром.",
          "Фараон позвал египетских мудрецов и волхвов, но никто не смог объяснить сны. Тогда виночерпий вспомнил об Иосифе. Фараон приказал привести его из темницы. Иосиф побрился, сменил одежду и предстал перед фараоном. Он объяснил, что сам не обладает такой мудростью, но Бог откроет значение снов.",
          "Семь здоровых коров и хороших колосьев означали семь лет великого изобилия; семь худых коров и пустых колосьев — семь лет страшного голода после них. Иосиф посоветовал назначить мудрого управляющего, чтобы тот собирал зерно в хорошие годы и сохранял пищу на время голода."
        ],
        "imageIndex": 5
      },
      {
        "title": "Запасы на время голода",
        "paragraphs": [
          "Фараон понял, что Бог дал Иосифу особую мудрость. Он поставил его правителем над Египтом, дал перстень, дорогую одежду и золотую цепь. Иосифу было тридцать лет.",
          "Бывший раб и узник стал одним из самых влиятельных людей страны.",
          "В течение семи урожайных лет Иосиф собирал зерно в городах. Когда наступил голод, в Египте были запасы, и люди из многих стран приходили покупать пищу. Однажды пришли и братья Иосифа."
        ],
        "imageIndex": 6
      },
      {
        "title": "БРАТЬЯ ПРИХОДЯТ В ЕГИПЕТ",
        "paragraphs": [
          "Голод наступил и в Ханаане. Иаков послал десятерых сыновей купить зерно в Египте, но Вениамина оставил дома, опасаясь несчастья.",
          "Братья пришли к Иосифу, который руководил продажей зерна. Они не узнали его: прошло много лет, он стал взрослым мужчиной в египетской одежде и занимал высокое положение. Но Иосиф узнал их. Они поклонились ему до земли, и он вспомнил сны о снопах и звёздах.",
          "Не открывая себя, Иосиф расспрашивал братьев о семье. Они сказали, что младший брат остался с отцом, а одного брата уже нет. Иосиф сделал вид, что подозревает их в шпионаже, и велел привести Вениамина, желая испытать братьев.",
          "Под стражей братья вспоминали, как когда-то не послушали мольбы Иосифа, и говорили, что теперь страдают за свой грех. Иосиф понимал их речь, отошёл и заплакал.",
          "Он отпустил братьев с зерном, но оставил Симеона до их возвращения и велел положить деньги обратно в мешки. В дороге братья нашли деньги и испугались. Дома они рассказали всё отцу и объяснили, что должны привести Вениамина. Иаков не хотел отпускать его: после потери Иосифа он боялся лишиться и младшего сына."
        ],
        "imageIndex": 7
      },
      {
        "title": "ВТОРОЕ ПУТЕШЕСТВИЕ БРАТЬЕВ",
        "paragraphs": [
          "Голод усиливался, привезённая еда заканчивалась. Иаков снова попросил сыновей поехать за зерном, но они напомнили, что должны взять Вениамина. Иуда обещал отвечать за его возвращение. Наконец Иаков согласился. Братья взяли деньги, подарки и Вениамина.",
          "Увидев Вениамина, Иосиф велел привести братьев в свой дом и приготовить обед. Они боялись наказания за деньги в мешках, но слуга успокоил их. К ним привели Симеона.",
          "Когда Иосиф пришёл, братья преподнесли подарки и снова поклонились. Он спросил о здоровье старого отца, а затем увидел Вениамина. Не сдержав слёз, он вышел в другую комнату и заплакал.",
          "Вернувшись, Иосиф велел посадить братьев по возрасту — от старшего до младшего.",
          "Они удивлялись, откуда он знает их возраст. Вениамину дали намного больше еды.",
          "Иосиф хотел увидеть, будут ли братья завидовать Вениамину, как раньше завидовали ему."
        ],
        "imageIndex": null
      },
      {
        "title": "СЕРЕБРЯНАЯ ЧАША И ИСПЫТАНИЕ БРАТЬЕВ",
        "paragraphs": [
          "Когда братья собирались домой, Иосиф велел наполнить мешки зерном, вернуть деньги, а в мешок Вениамина положить свою серебряную чашу.",
          "Вскоре их догнал слуга и обвинил в краже. Братья были уверены, что ничего не украли, и позволили обыскать мешки. Чашу нашли у Вениамина. Все огорчились и вернулись к Иосифу.",
          "Иосиф сказал, что Вениамин останется рабом, а остальные могут вернуться к отцу. Это было испытание: когда-то они продали Иосифа в рабство; оставят ли теперь Вениамина ради своего спасения?",
          "Но теперь братья поступили иначе. Иуда умолял отпустить Вениамина, рассказал, как любит его старый отец и каким страшным горем станет его потеря. Иуда предложил остаться рабом вместо Вениамина. Он был готов пострадать сам, лишь бы младший брат вернулся домой. Иосиф увидел, что сердца братьев изменились."
        ],
        "imageIndex": null
      },
      {
        "title": "ИОСИФ ОТКРЫВАЕТСЯ БРАТЬЯМ",
        "paragraphs": [
          "Иосиф больше не мог сдерживать чувства. Он велел египтянам выйти из комнаты, громко заплакал и сказал: «Я — Иосиф! Жив ли ещё отец мой?»",
          "Братья испугались и не могли поверить, что перед ними тот, кого они продали в рабство.",
          "Но Иосиф ласково позвал их ближе и сказал, что не хочет мстить. Они сделали ему зло, но Бог обратил его во благо: Иосиф смог спасти от голода отца, братьев и множество других людей.",
          "Иосиф обнял Вениамина и заплакал, затем поцеловал всех братьев. Они тоже плакали и разговаривали с ним. Иосиф простил их. Братья ожидали наказания, а получили прощение и любовь."
        ],
        "imageIndex": 8
      },
      {
        "title": "ИАКОВ ПЕРЕСЕЛЯЕТСЯ В ЕГИПЕТ",
        "paragraphs": [
          "Фараон обрадовался, узнав о братьях Иосифа, и позволил пригласить в Египет всю семью. Он обещал им хорошую землю. Иосиф передал братьям подарки, одежду и повозки для переезда.",
          "Вернувшись домой, братья сказали Иакову: «Иосиф жив! Он правитель над всем Египтом!» Сначала Иаков не поверил, но, увидев повозки и услышав рассказ сыновей, воспрянул духом. Он захотел увидеть Иосифа до своей смерти.",
          "Иаков собрал семью и отправился в Египет. Бог ободрил его и обещал быть с ним. Иосиф выехал навстречу отцу. После долгих лет разлуки они обнялись и плакали. Иаков был счастлив вновь увидеть сына живым.",
          "Семья поселилась в земле Гесем, где были хорошие пастбища. Фараон принял Иакова, а тот благословил его. Иаков прожил в Египте ещё семнадцать лет, благословил сыновей и потомков, а после его смерти Иосиф похоронил его в Ханаане, в семейной пещере.",
          "После смерти отца братья снова опасались мести Иосифа. Но он заплакал, услышав их слова, успокоил их и сказал: «Вот, вы умышляли против меня зло; но Бог обратил это в добро, чтобы сделать то, что теперь есть: сохранить жизнь великому числу людей»",
          "(Бытие 50:20).",
          "Иосиф пообещал заботиться о братьях и их детях. Он не хотел воздавать злом за зло, потому что научился доверять Богу и прощать."
        ],
        "imageIndex": 9
      },
      {
        "title": "БОЖИЙ ЗАМЫСЕЛ",
        "paragraphs": [
          "Когда-то Иосиф был мальчиком, которого братья ненавидели и продали в рабство. Он пережил несправедливость, одиночество, ложные обвинения и заключение. Но Господь был с ним при любых обстоятельствах.",
          "Иосиф не знал, почему всё происходит, однако у Бога был Свой замысел. Через много лет он увидел, как Господь использовал даже зло братьев, чтобы спасти многих от голода.",
          "Бог также исполнял обещание, данное Аврааму, Исааку и Иакову, и продолжал заботиться об их потомках. Через много поколений из этого народа должен был родиться Спаситель — Иисус Христос."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Почему братья завидовали Иосифу?",
      "Что братья сделали с Иосифом?",
      "Как Иосиф вёл себя в доме Потифара и в темнице?",
      "Как Бог помог Иосифу стать правителем Египта?",
      "Почему братья не узнали Иосифа, когда пришли покупать зерно?",
      "Что сделал Иосиф, когда открылся своим братьям?",
      "Как Бог использовал зло, которое братья совершили против Иосифа, во благо?"
    ],
    "promise": {
      "body": "Когда-то Иосиф был мальчиком, которого братья ненавидели и продали в рабство. Он пережил несправедливость, одиночество, ложные обвинения и заключение. Но Господь был с ним при любых обстоятельствах.\n\nИосиф не знал, почему всё происходит, однако у Бога был Свой замысел. Через много лет он увидел, как Господь использовал даже зло братьев, чтобы спасти многих от голода.\n\nБог также исполнял обещание, данное Аврааму, Исааку и Иакову, и продолжал заботиться об их потомках. Через много поколений из этого народа должен был родиться Спаситель — Иисус Христос.",
      "keyLine": "Бог может обратить даже самое большое зло во благо."
    },
    "connection": {
      "body": "Братья отвергли Иосифа и продали его в рабство. Он пережил много страданий, хотя не заслужил их.\n\nНо Бог был с Иосифом и возвысил его до высокого положения в Египте. Через него Бог спас многих людей от голода, даже тех братьев, которые совершили против него зло.\n\nЧерез много лет пришёл Иисус Христос. Его тоже отвергли люди, Он страдал, хотя не совершил никакого греха.\n\nНо через смерть и воскресение Иисуса Бог открыл путь спасения для грешников.\n\nИосиф спас людей от голода и простил своих братьев. Иисус пришёл, чтобы спасти нас от греха и даровать нам прощение.",
      "keyLine": "Бог может обратить даже самое большое зло во благо."
    },
    "familyChallenge": {
      "intro": "Соберитесь всей семьёй за чашкой чая, какао или любимыми сладостями.",
      "instruction": "Вспомните, как братья несправедливо поступили с Иосифом, но впоследствии он простил их.\n\nПусть каждый поделится мыслями: «Почему иногда так трудно простить человека, который нас обидел?»",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Затем поговорите: «Как мы можем проявлять прощение в нашей семье?»",
      "ending": "Если нужно, попросите друг у друга прощения и завершите разговор совместной молитвой.\n\nПрощение — это любовь, проявленная в поступках.",
      "prayer": "«Боже, помоги нам прощать друг друга, любить и доверять Тебе в трудные времена»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 7",
      "completed": "День 7 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

