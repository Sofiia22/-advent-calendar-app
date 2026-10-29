import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_FIFTEEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_FIFTEEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day15/story/01-ravens.jpg"),
  require("../assets/advent/day15/story/02-widow.jpg"),
  require("../assets/advent/day15/story/03-carmel.jpg"),
  require("../assets/advent/day15/story/04-rain.jpg"),
  require("../assets/advent/day15/story/05-vineyard.jpg"),
  require("../assets/advent/day15/story/06-obadiah.jpg"),
  require("../assets/advent/day15/story/07-gentle-voice.jpg"),
  require("../assets/advent/day15/story/08-chariot.jpg"),
  require("../assets/advent/day15/story/09-captain.jpg"),
];
export const DAY_FIFTEEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 15",
    "title": "Ілля — вірність живому Богові",
    "subtitle": "Бог чує молитви й не залишає Своїх",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "Ілля був людиною, подібною до нас, і ревно молився, щоб не було дощу; потім помолився знову, і небо дало дощ. (Переказ Якова 5:17–18; для дослівного читання відкрийте Біблію.)",
      "reference": "Якова 5:17–18"
    },
    "storyPages": [
      {
        "title": "Круки і потік Керіт",
        "paragraphs": [
          "За часів царя Ахава народ Ізраїлю дедалі більше відступав від Господа. Ахав та його дружина Єзавель підтримували поклоніння Ваалові й переслідували Божих пророків. Тоді до царя прийшов пророк Ілля з Ґілеаду. Він оголосив, що за словом Господа на землі не буде ні роси, ні дощу, доки Бог знову не звелить. Ахав почув грізне попередження, а Ілля за Божим наказом пішов на схід і сховався біля потоку Керіт.",
          "Там пророк пив воду з потоку, а вранці й увечері круки приносили йому хліб і м’ясо. Так Господь піклувався про Свого слугу, коли навколо починався голод. Довго не було дощу, і потік поступово висох. Але Бог не залишив Іллю. Він наказав йому йти до Сарепти, де одна вдова мала прогодувати його."
        ],
        "imageIndex": 0
      },
      {
        "title": "Вдова із Сарепти",
        "paragraphs": [
          "Біля міської брами Ілля побачив удову, яка збирала дрова. Він попросив у неї трохи води, а потім і шматок хліба. Жінка відповіла, що в неї є лише жменя борошна в посудині й трохи олії в глечику. Вона збиралася приготувати останню їжу для себе й сина; після цього вони чекали голодної смерті. Ілля сказав їй не боятися: спочатку приготувати маленький коржик для нього, а потім для себе й дитини.",
          "Пророк передав обітницю Господа: борошно не закінчиться і олія не вичерпається, доки Бог не пошле дощу. Вдова послухалася Божого слова. День за днем її родина та Ілля мали їжу, хоча голод тривав. Згодом її син тяжко захворів і помер. У скорботі мати звернулася до пророка. Ілля взяв дитину до верхньої кімнати, поклав на своє ліжко й ревно молився Господу.",
          "Бог почув його молитву й повернув хлопчикові життя. Ілля віддав живого сина матері. Тепер жінка сказала, що справді знає: Ілля — Божий чоловік, і слово Господа в його устах — правда."
        ],
        "imageIndex": 1
      },
      {
        "title": "Зустріч з Авдієм",
        "paragraphs": [
          "Минув тривалий час посухи. Господь наказав Іллі знову з’явитися перед Ахавом, обіцяючи послати дощ. Тим часом цар шукав воду й траву для коней та мулів. Він послав свого управителя Авдія оглянути землю. Авдій боявся Господа і раніше сховав сто Божих пророків у печерах, годувавши їх хлібом і водою, коли Єзавель намагалася їх убити.",
          "На дорозі Авдій зустрів Іллю, упізнав його й упав перед ним. Пророк попросив повідомити цареві, що він тут. Авдій злякався: Ахав усюди шукав Іллю, і якщо пророк раптом зникне, цар може стратити вісника. Ілля запевнив його, що неодмінно зустрінеться з Ахавом. Коли вони побачилися, цар назвав Іллю винуватцем біди Ізраїлю. Пророк відповів, що справжня причина лиха — непослух Ахава та його дому, які залишили Божі заповіді й пішли за Ваалами.",
          "Ілля звелів зібрати народ і пророків Ваала на горі Кармел."
        ],
        "imageIndex": 5
      },
      {
        "title": "Два жертовники на Кармелі",
        "paragraphs": [
          "На горі Кармел Ілля звернувся до народу: як довго вони будуть вагатися між двома дорогами? Якщо Господь — Бог, потрібно йти за Ним; якщо Ваал — то за Ваалом. Люди мовчали. Ілля запропонував випробування: приготувати двох тельців на двох жертовниках, але не підпалювати дров. Бог, Який відповість вогнем, і є правдивий Бог. Пророки Ваала першими готували жертву.",
          "Від ранку до полудня вони кликали свого бога, танцювали навколо жертовника, голосно кричали й навіть ранили себе. Але відповіді не було. Тоді Ілля відновив зруйнований жертовник Господа, взяв дванадцять каменів за числом колін Ізраїля, поклав дрова й жертву. Він наказав тричі вилити на все воду, так що вона заповнила й рів навколо.",
          "Ілля молився, щоб народ пізнав Господа і зрозумів, що Бог повертає їхні серця до Себе. І Господь відповів вогнем: він поглинув жертву, дрова, каміння, порох і навіть воду. Люди впали ниць і вигукнули: «Господь — Він Бог!» Пророки Ваала були схоплені, і Ілля здійснив над ними суд, як описано в біблійній розповіді."
        ],
        "imageIndex": 2
      },
      {
        "title": "Дощ після посухи",
        "paragraphs": [
          "Після подій на Кармелі Ілля сказав Ахавові, що чути шум великого дощу. Однак небо ще залишалося ясним. Пророк піднявся на вершину гори, нахилився до землі та молився. Він послав слугу поглянути в бік моря. Слуга повернувся й повідомив, що нічого не бачить. Ілля послав його знову — так сталося сім разів. Нарешті слуга побачив маленьку хмарку, схожу на людську долоню, яка піднімалася з моря.",
          "Ілля наказав передати Ахавові, щоб той запряг колісницю та вирушав, поки дощ не перешкодив дорозі. Незабаром небо вкрилося темними хмарами, здійнявся вітер і полила сильна злива. Господь виконав Своє слово. Ілля, зміцнений Божою силою, побіг перед колісницею Ахава аж до Єзреелу. Так народ побачив, що не Ваал, а живий Господь посилає дощ."
        ],
        "imageIndex": 3
      },
      {
        "title": "Божий голос і нове доручення",
        "paragraphs": [
          "Коли Єзавель дізналася про те, що сталося з пророками Ваала, вона погрожувала вбити Іллю. Пророк злякався й утік у пустелю. Виснажений, він сів під кущем і просив у Бога смерті. Але Господь не відкинув Свого слугу. Ангел розбудив Іллю, дав йому хліб та воду й дозволив відпочити. Після цього пророк ішов сорок днів і ночей до гори Хорив.",
          "Там він розповів Богові про свою ревність і самотність. Він побачив сильний вітер, землетрус і вогонь, але після них почув тихий лагідний голос. Господь дав йому нове доручення і сказав, що в Ізраїлі залишилися люди, які не схилили колін перед Ваалом. Ілля мав також покликати Єлисея, щоб той став пророком після нього. Він знайшов Єлисея за оранкою і накинув на нього свій плащ.",
          "Єлисей попрощався з рідними й пішов служити Іллі."
        ],
        "imageIndex": 6
      },
      {
        "title": "Виноградник Навота",
        "paragraphs": [
          "Поряд із царським палацом у Єзреелі був виноградник Навота. Ахав хотів заволодіти ним, щоб посадити там город. Він запропонував власникові кращий виноградник або гроші. Але Навот відповів, що не може віддати спадщину своїх батьків. Ахав повернувся додому засмучений, ліг на ліжко, відвернув обличчя і не хотів їсти. Єзавель пообіцяла здобути для нього виноградник.",
          "Від імені царя вона написала листи старійшинам міста. На її наказ Навота несправедливо звинуватили через неправдивих свідків, вивели за місто й побили камінням. Дізнавшись про смерть Навота, Ахав пішов заволодіти землею. Але там його зустрів Ілля зі словом Господа. Пророк викрив царя: той допустив убивство й привласнив чужу спадщину.",
          "Ілля оголосив Божий суд над домом Ахава та Єзавеллю. Ахав упокорився, розірвав одяг, надів веретище й постив; через це Господь відклав частину оголошеного лиха до часу після його смерті. Бог бачив і кривду Навота, і стан серця царя."
        ],
        "imageIndex": 4
      },
      {
        "title": "Три військові начальники",
        "paragraphs": [
          "Після смерті Ахава царем став його син Ахазія. Одного разу Ахазія впав крізь ґрати верхньої кімнати й тяжко захворів. Замість звернутися до Господа, він послав посланців запитати у Ваал-Зевува, бога Екрона, чи одужає. Ангел Господній послав Іллю зустріти цих людей. Пророк передав слово, що цар не встане зі свого ліжка і помре, адже шукав відповіді не в Бога Ізраїля.",
          "Ахазія наказав схопити Іллю. Перший начальник із п’ятдесятьма воїнами знайшов пророка на верхівці гори й наказав спуститися. Ілля відповів, що коли він Божий чоловік, нехай зійде вогонь із неба; так і сталося. Те саме сталося з другим начальником і його людьми. Третій начальник підійшов інакше: став навколішки та благав пощадити його й воїнів.",
          "Ангел сказав Іллі не боятися і йти з ним. Ілля прийшов до царя й повторив Божий вирок. Ахазія помер відповідно до слова Господа. Ця історія показує серйозність Божого слова, а також різницю між гордою зухвалістю та смиренним проханням."
        ],
        "imageIndex": 8
      },
      {
        "title": "Вогняна колісниця",
        "paragraphs": [
          "Наблизився час, коли Господь мав забрати Іллю. Він ішов із Єлисеєм, але кілька разів просив молодшого пророка залишитися. Єлисей щоразу відповідав, що не покине його. Вони пройшли через Ґілґал, Бет-Ел і Єрихон та підійшли до Йордану. П’ятдесят синів пророчих здалеку спостерігали за ними. Ілля згорнув свій плащ і вдарив ним по воді.",
          "Вода розступилася, й обидва перейшли річку по сухому дну. Тоді Ілля запитав Єлисея, що він бажає отримати перед їхнім розлученням. Єлисей попросив подвійної частки його духа — як духовної спадщини для подальшого служіння. Ілля сказав, що це важке прохання, але якщо Єлисей побачить, як його буде взято, воно здійсниться. Коли вони йшли та розмовляли, раптом з’явилися вогняна колісниця й вогняні коні, які розділили їх, а Ілля піднявся у вихорі на небо.",
          "Єлисей бачив усе й вигукнув: «Батьку мій, батьку мій!» Він підняв плащ Іллі, який упав, і повернувся до Йордану. Вдаривши ним по воді й покликавши Господа, він побачив, як вода знову розступилася. Так стало зрозуміло, що Бог, Який діяв через Іллю, тепер супроводжує Єлисея."
        ],
        "imageIndex": 7
      }
    ],
    "questions": [
      "Що Ілля оголосив Ахавові?",
      "Як Бог годував Іллю біля потоку?",
      "Що залишалося у вдови та як Бог подбав про неї?",
      "Що сталося з її сином?",
      "Чому Авдій боявся повідомляти Ахавові про Іллю?",
      "Яке випробування відбулося на Кармелі?",
      "Скільки разів слуга дивився на море?",
      "Як Господь подбав про виснаженого Іллю?",
      "Чому Навот не віддав виноградника?",
      "Як відрізнялася поведінка третього військового начальника?",
      "Про що Єлисей попросив Іллю?",
      "Що показує нам історія Іллі про Бога?"
    ],
    "promise": {
      "body": "Навіть коли потік висох, їжі бракувало або Ілля почувався самотнім, Господь бачив його потреби. Він давав їжу, силу, напрям і помічників. Бог не обіцяє, що не буде труднощів, але Він залишається вірним Своєму слову.",
      "keyLine": "Бог не залишає Своїх"
    },
    "connection": {
      "body": "Ілля був великим пророком, але він залишався людиною, яка втомлювалася, боялася й потребувала Божої допомоги. Ісус Христос — більший за пророків: Він досконало відкрив нам Отця. Пізніше Ілля з’явився з Мойсеєм під час Преображення Ісуса (Матвія 17:1–8), і голос із хмари звелів слухати Божого Сина. Ілля закликав народ повернутися до Господа; Ісус прийшов спасти Свій народ від гріхів. Різдво нагадує нам, що Бог послав Свого Сина, Якого ми покликані слухати.",
      "keyLine": "Ілля та Ісус"
    },
    "familyChallenge": {
      "intro": "Чий голос я слухаю?",
      "instruction": "",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "",
      "prayer": "Господи, допоможи нам слухати Тебе й мужньо виконувати Твоє слово."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 15",
      "completed": "День 15 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 15",
    "title": "Elijah — Faithful to the Living God",
    "subtitle": "God Hears Prayer and Never Abandons His Own",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "Elijah was a man with a nature like ours. He earnestly prayed that it would not rain, and later he prayed again and the sky gave rain. (Paraphrase of James 5:17–18; read the exact verses in your Bible.)",
      "reference": "James 5:17–18"
    },
    "storyPages": [
      {
        "title": "Ravens and the Brook Cherith",
        "paragraphs": [
          "During the reign of King Ahab, Israel was turning farther away from the Lord. Ahab and his wife Jezebel encouraged the worship of Baal and persecuted the Lord’s prophets. Elijah, a prophet from Gilead, came before the king and announced that there would be neither dew nor rain except at the word of the Lord. Then God told Elijah to hide east of the Jordan beside the Brook Cherith.",
          "There he drank from the brook, while ravens brought him bread and meat morning and evening. Even as famine began throughout the land, God cared for His servant. In time the brook dried up because there had been no rain. Yet the Lord had not forgotten Elijah. He instructed him to go to Zarephath, where a widow would provide for him."
        ],
        "imageIndex": 0
      },
      {
        "title": "The Widow of Zarephath",
        "paragraphs": [
          "At the city gate Elijah met a widow gathering sticks. He asked for water and a piece of bread. She replied that she had only a handful of flour and a little oil left; she was preparing one last meal for herself and her son. Elijah told her not to be afraid. She was to make a small cake for him first, then prepare food for herself and her child.",
          "The Lord promised that the flour and oil would not run out until rain returned. The woman obeyed, and day after day there was enough food for all three of them. Later her son became gravely ill and died. The distressed mother spoke to Elijah, who carried the child upstairs, laid him on his bed, and earnestly prayed to God. The Lord heard his prayer and restored the boy’s life.",
          "Elijah brought the living child back to his mother. She now declared that she knew Elijah was a man of God and that the word of the Lord in his mouth was true."
        ],
        "imageIndex": 1
      },
      {
        "title": "Meeting Obadiah",
        "paragraphs": [
          "After a long drought, God told Elijah to appear before Ahab because He would send rain. Meanwhile, Ahab and his steward Obadiah were searching for grass and water for the royal animals. Obadiah feared the Lord. When Jezebel sought to kill the prophets, he had hidden one hundred of them in caves and supplied them with bread and water.",
          "Obadiah met Elijah on the road, recognized him, and bowed before him. Elijah asked him to tell Ahab that the prophet had returned. Obadiah was afraid: the king had searched everywhere for Elijah, and if Elijah vanished again, the messenger might be killed. Elijah promised he would indeed meet Ahab. When they met, Ahab accused Elijah of troubling Israel.",
          "Elijah answered that Ahab and his family had brought trouble by abandoning God’s commands and following Baal. He commanded that the people and prophets of Baal gather on Mount Carmel."
        ],
        "imageIndex": 5
      },
      {
        "title": "Two Altars on Mount Carmel",
        "paragraphs": [
          "On Mount Carmel Elijah asked the people how long they would waver between two opinions. If the Lord was God, they must follow Him; if Baal was god, they should follow Baal. No one answered. Elijah proposed a test: two bulls would be prepared on two altars, but no one would light the wood. The God who answered by fire would be shown to be the true God.",
          "The prophets of Baal called to their god from morning until noon. They leaped around their altar, shouted, and wounded themselves, but no one answered. Elijah repaired the broken altar of the Lord with twelve stones representing Israel’s tribes. He arranged the wood and offering, then had water poured over them three times until the trench was full.",
          "He prayed that the people would know the Lord and that He was turning their hearts back. Fire from God fell and consumed the offering, the wood, the stones, the dust, and even the water. The people fell on their faces, crying, “The LORD, He is God!” The prophets of Baal were seized and judged, as the biblical account records."
        ],
        "imageIndex": 2
      },
      {
        "title": "Rain after the Drought",
        "paragraphs": [
          "Elijah told Ahab that he heard the sound of heavy rain, although the sky was still clear. Elijah went to the top of Carmel, bowed down, and prayed. He sent his servant to look toward the sea. The servant returned saying that he saw nothing. Elijah sent him again, seven times in all. Finally the servant saw a little cloud rising from the sea, as small as a man’s hand.",
          "Elijah told Ahab to prepare his chariot and leave before the rain stopped him. Soon dark clouds filled the sky, the wind rose, and heavy rain began to fall. God had fulfilled His word. Strengthened by the Lord, Elijah ran ahead of Ahab’s chariot toward Jezreel. The people had seen that the living Lord, not Baal, sends the rain."
        ],
        "imageIndex": 3
      },
      {
        "title": "God’s Gentle Voice and a New Calling",
        "paragraphs": [
          "When Jezebel heard what had happened to the prophets of Baal, she threatened Elijah’s life. Afraid and exhausted, he fled into the wilderness and sat beneath a broom tree, asking God to let him die. But the Lord did not abandon His servant. An angel woke him, provided bread and water, and allowed him to rest. Elijah then traveled forty days and nights to Mount Horeb.",
          "There he told God that he felt alone in his zeal for the Lord. A mighty wind came, followed by an earthquake and fire; afterward Elijah heard a gentle, quiet voice. God gave him further work to do and assured him that some in Israel had never bowed to Baal. Elijah was also to call Elisha to follow him as a prophet. He found Elisha plowing and threw his mantle over him.",
          "Elisha said goodbye to his family and went to serve alongside Elijah."
        ],
        "imageIndex": 6
      },
      {
        "title": "Naboth’s Vineyard",
        "paragraphs": [
          "Beside the royal palace in Jezreel lay a vineyard owned by Naboth. Ahab wanted it for a vegetable garden and offered him another vineyard or money. Naboth refused because it was the inheritance of his fathers. Ahab went home resentful, lay on his bed, turned his face away, and refused to eat. Jezebel promised to obtain the vineyard.",
          "She wrote letters in the king’s name to the city elders, arranging for false witnesses to accuse Naboth. He was taken outside the city and stoned to death. Hearing of his death, Ahab went to claim the land. Elijah met him there with the word of the Lord. He confronted Ahab with the murder and theft and announced God’s judgment on Ahab’s house and Jezebel.",
          "Ahab humbled himself, tore his garments, wore sackcloth, and fasted. Because of his humbling, God postponed part of the announced disaster until after his lifetime. The Lord had seen both the injustice suffered by Naboth and the response of the king."
        ],
        "imageIndex": 4
      },
      {
        "title": "Three Military Captains",
        "paragraphs": [
          "After Ahab died, his son Ahaziah became king. Ahaziah fell through the lattice of an upper room and was badly injured. Rather than seek the Lord, he sent messengers to ask Baal-Zebub, the god of Ekron, whether he would recover. The angel of the Lord sent Elijah to intercept them with a warning: the king would not rise from his bed, because he had sought another god instead of Israel’s God.",
          "Ahaziah ordered Elijah to be arrested. The first captain arrived with fifty soldiers and commanded the prophet to come down from the hilltop. Elijah replied that if he was a man of God, fire should come down from heaven; it did. The same happened to a second captain and his men. The third captain came in humility, knelt, and begged that his life and the soldiers’ lives be spared.",
          "The angel told Elijah not to fear and to go with him. Elijah stood before the king and repeated the Lord’s message. Ahaziah died according to God’s word. The story shows the seriousness of His word and the contrast between arrogance and humble pleading."
        ],
        "imageIndex": 8
      },
      {
        "title": "The Chariot of Fire",
        "paragraphs": [
          "The time approached when the Lord would take Elijah away. Elijah traveled with Elisha, repeatedly urging the younger prophet to stay behind. Elisha always answered that he would not leave him. They went through Gilgal, Bethel, and Jericho to the Jordan, while fifty sons of the prophets watched from a distance. Elijah rolled up his mantle and struck the river.",
          "Its waters parted, and they crossed on dry ground. Elijah asked what he could do for Elisha before being taken away. Elisha requested a double portion of his spirit, like the inheritance of an eldest son for the prophetic ministry. Elijah said it was a difficult request, but it would be granted if Elisha saw him taken away. As they walked and talked, chariots and horses of fire suddenly separated them, and Elijah went up to heaven in a whirlwind.",
          "Elisha watched and cried, “My father, my father!” He picked up Elijah’s fallen mantle and returned to the Jordan. When he struck the water and called on the Lord, the river parted again. Everyone could see that the God who had worked through Elijah was now with Elisha."
        ],
        "imageIndex": 7
      }
    ],
    "questions": [
      "What warning did Elijah give Ahab?",
      "How did God feed Elijah at the brook?",
      "What did the widow have left, and how did God provide?",
      "What happened to her son?",
      "Why was Obadiah afraid to tell Ahab about Elijah?",
      "What test took place on Mount Carmel?",
      "How many times did the servant look toward the sea?",
      "How did God care for an exhausted Elijah?",
      "Why did Naboth refuse to sell his vineyard?",
      "How was the third captain different?",
      "What did Elisha ask for?",
      "What does Elijah’s story teach us about God?"
    ],
    "promise": {
      "body": "Even when the brook dried up, food was scarce, or Elijah felt completely alone, the Lord knew his needs. He provided food, strength, guidance, and companionship. God does not promise that life will be without trouble, but He remains faithful to His word.",
      "keyLine": "God Does Not Abandon His Own"
    },
    "connection": {
      "body": "Elijah was a great prophet, yet he was a human being who grew tired, became afraid, and needed God’s help. Jesus Christ is greater than the prophets: He perfectly revealed the Father. Later Elijah appeared with Moses at Jesus’ transfiguration (Matthew 17:1–8), and a voice from the cloud told the disciples to listen to God’s Son. Elijah called Israel to return to the Lord; Jesus came to save His people from their sins. Christmas reminds us that God sent His Son, whom we are called to hear and follow.",
      "keyLine": "Elijah and Jesus"
    },
    "familyChallenge": {
      "intro": "Whose Voice Will I Follow?",
      "instruction": "",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "",
      "prayer": "Lord, help us listen to You and courageously obey Your word."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 15",
      "completed": "Day 15 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 15",
    "title": "Илия — верность живому Богу",
    "subtitle": "Бог слышит молитвы и не оставляет Своих",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "Илия был человеком, подобным нам. Он усердно молился, чтобы не было дождя, а затем помолился снова, и небо дало дождь. (Пересказ Иакова 5:17–18; точный текст прочитайте в Библии.)",
      "reference": "Иакова 5:17–18"
    },
    "storyPages": [
      {
        "title": "Вороны и поток Хораф",
        "paragraphs": [
          "Во времена царя Ахава народ Израиля всё дальше уходил от Господа. Ахав и его жена Иезавель поддерживали поклонение Ваалу и преследовали Божьих пророков. Тогда к царю пришёл пророк Илия из Галаада и объявил, что по слову Господа не будет ни росы, ни дождя, пока Бог не повелит иначе. Господь велел Илии уйти на восток и укрыться у потока Хораф.",
          "Там пророк пил воду из потока, а утром и вечером вороны приносили ему хлеб и мясо. Когда по всей земле начался голод, Бог заботился о Своём слуге. Но дождей долго не было, и поток высох. Господь не оставил Илию: Он повелел ему идти в Сарепту, где одна вдова должна была кормить его."
        ],
        "imageIndex": 0
      },
      {
        "title": "Вдова из Сарепты",
        "paragraphs": [
          "Возле городских ворот Илия встретил вдову, собиравшую дрова. Он попросил воды и кусок хлеба. Женщина ответила, что у неё осталась лишь горсть муки и немного масла. Она собиралась приготовить последнюю еду для себя и сына, а потом им грозила голодная смерть. Илия велел ей не бояться: сначала приготовить небольшой хлеб для него, затем для себя и ребёнка.",
          "Пророк передал обещание Господа, что мука не закончится и масло не иссякнет, пока не пойдёт дождь. Вдова послушалась, и каждый день у них была еда. Позже её сын тяжело заболел и умер. Убитая горем женщина обратилась к Илии. Пророк взял ребёнка, отнёс в верхнюю комнату, положил на свою постель и усердно помолился Богу. Господь услышал молитву и вернул мальчику жизнь.",
          "Илия отдал живого сына матери, и женщина признала, что Илия — человек Божий, а слово Господа в его устах истинно."
        ],
        "imageIndex": 1
      },
      {
        "title": "Встреча с Авдием",
        "paragraphs": [
          "После долгой засухи Бог повелел Илии снова явиться Ахаву и обещал послать дождь. Тем временем царь искал воду и траву для коней и мулов. Он послал своего домоправителя Авдия осматривать землю. Авдий боялся Господа. Когда Иезавель истребляла пророков, он спрятал сто из них в пещерах и снабжал хлебом и водой. По дороге Авдий встретил Илию, узнал его и поклонился.",
          "Пророк попросил сообщить царю о своём возвращении. Авдий испугался, ведь Ахав повсюду искал Илию: если пророк исчезнет, царь может наказать вестника. Илия обещал обязательно встретиться с Ахавом. Увидев пророка, Ахав назвал его виновником бед Израиля. Илия ответил, что беду навлекли сам царь и его дом, оставившие Божьи заповеди ради Ваала.",
          "Он велел собрать народ и пророков Ваала на горе Кармил."
        ],
        "imageIndex": 5
      },
      {
        "title": "Два жертвенника на Кармиле",
        "paragraphs": [
          "На горе Кармил Илия спросил народ, долго ли люди будут хромать на оба колена: если Господь — Бог, нужно идти за Ним; если Ваал — за Ваалом. Народ молчал. Илия предложил испытание: приготовить двух тельцов на двух жертвенниках, не поджигая дров. Истинным Богом будет признан Тот, Кто ответит огнём. Пророки Ваала с утра до полудня взывали к своему богу, скакали вокруг жертвенника, кричали и ранили себя, но ответа не последовало.",
          "Тогда Илия восстановил разрушенный жертвенник Господа, сложив его из двенадцати камней по числу колен Израиля. Он уложил дрова и жертву и велел трижды вылить на них воду; вода наполнила и ров вокруг. Илия помолился, чтобы народ узнал истинного Господа и понял, что Бог обращает их сердца к Себе. Тогда сошёл огонь Господень и поглотил жертву, дрова, камни, прах и воду.",
          "Люди пали ниц, восклицая: «Господь есть Бог!» Пророки Ваала были схвачены, и над ними совершился суд, о котором рассказывает Писание."
        ],
        "imageIndex": 2
      },
      {
        "title": "Дождь после засухи",
        "paragraphs": [
          "Илия сказал Ахаву, что слышит шум сильного дождя, хотя небо ещё было ясным. Пророк поднялся на вершину Кармила, склонился к земле и молился. Он послал слугу посмотреть в сторону моря. Слуга вернулся, сказав, что ничего не видит. Илия посылал его снова — всего семь раз. Наконец слуга заметил маленькое облачко, величиной с человеческую ладонь, поднимавшееся с моря.",
          "Илия велел передать Ахаву, чтобы тот запряг колесницу и выехал, пока дождь не остановил его. Вскоре небо потемнело, поднялся ветер и начался сильный ливень. Господь исполнил Своё слово. Укреплённый Божьей силой, Илия побежал перед колесницей Ахава к Изреелю. Народ увидел, что дождь посылает живой Господь, а не Ваал."
        ],
        "imageIndex": 3
      },
      {
        "title": "Тихий голос Бога и новое призвание",
        "paragraphs": [
          "Узнав о судьбе пророков Ваала, Иезавель пригрозила убить Илию. Он испугался, убежал в пустыню и, изнемогая, сел под можжевеловым кустом, прося у Бога смерти. Но Господь не оставил Своего слугу. Ангел разбудил его, дал хлеб и воду и позволил отдохнуть. После этого Илия шёл сорок дней и ночей до горы Хорив. Там он рассказал Богу о своей ревности и одиночестве.",
          "Были сильный ветер, землетрясение и огонь, но затем послышалось веяние тихого ветра. Господь дал Илии новое поручение и сказал, что в Израиле сохранились люди, не преклонившие колен перед Ваалом. Илия должен был также призвать Елисея, который станет пророком после него. Он нашёл Елисея за пахотой и набросил на него свою милоть. Елисей простился с близкими и пошёл служить Илии."
        ],
        "imageIndex": 6
      },
      {
        "title": "Виноградник Навуфея",
        "paragraphs": [
          "Возле царского дворца в Изрееле находился виноградник Навуфея. Ахав хотел сделать на его месте огород и предложил владельцу другой виноградник или деньги. Навуфей отказался: это было наследство его отцов. Ахав вернулся домой огорчённым, лёг на постель, отвернулся и отказывался есть. Иезавель обещала добыть виноградник. От имени царя она написала письма старейшинам города.",
          "По её приказу лжесвидетели несправедливо обвинили Навуфея; его вывели за город и побили камнями. Узнав о его смерти, Ахав отправился завладеть землёй. Но там его встретил Илия со словом Господа. Пророк обличил царя в допущенном убийстве и захвате чужого наследства и объявил Божий суд над домом Ахава и Иезавелью. Ахав смирился: разорвал одежды, надел вретище и постился.",
          "Господь увидел его смирение и отложил часть предсказанного бедствия до времени после его смерти. Бог видел и несправедливость, совершённую против Навуфея, и состояние царского сердца."
        ],
        "imageIndex": 4
      },
      {
        "title": "Три военачальника",
        "paragraphs": [
          "После смерти Ахава царём стал его сын Охозия. Однажды он упал сквозь решётку верхней комнаты и тяжело заболел. Вместо того чтобы обратиться к Господу, он послал людей вопросить Веельзевула, божество Аккарона, выздоровеет ли он. Ангел Господень велел Илии встретить посланников и сказать, что царь не встанет с постели и умрёт, потому что не искал ответа у Бога Израилева.",
          "Охозия приказал привести Илию. Первый пятидесятник с пятьюдесятью воинами нашёл пророка на вершине горы и велел сойти. Илия ответил, что если он человек Божий, пусть сойдёт огонь с неба; так и случилось. То же произошло со вторым отрядом. Третий пятидесятник смиренно преклонил колени и умолял пощадить его и людей. Ангел велел Илии не бояться и идти с ним.",
          "Пророк предстал перед царём и повторил Божий приговор. Охозия умер согласно слову Господа. Эта история показывает серьёзность Божьего слова и противопоставляет гордую дерзость смиренной просьбе."
        ],
        "imageIndex": 8
      },
      {
        "title": "Огненная колесница",
        "paragraphs": [
          "Наступало время, когда Господь должен был взять Илию. Он шёл с Елисеем и несколько раз просил младшего пророка остаться, но Елисей всякий раз отвечал, что не оставит его. Они прошли Галгал, Вефиль и Иерихон и подошли к Иордану, а пятьдесят сынов пророческих наблюдали издалека. Илия свернул милоть и ударил ею по воде. Вода расступилась, и оба перешли реку по сухому дну.",
          "Илия спросил, чего Елисей хочет до его взятия. Елисей попросил двойную часть его духа — как духовное наследство для служения. Илия сказал, что это трудная просьба, но если Елисей увидит, как его возьмут, она исполнится. Пока они шли и беседовали, явились огненная колесница и огненные кони, разделившие их, а Илия вознёсся в вихре на небо.",
          "Елисей увидел это и воскликнул: «Отец мой, отец мой!» Он поднял упавшую милоть Илии и вернулся к Иордану. Ударив ею по воде и призвав Господа, он увидел, что вода снова расступилась. Так стало ясно, что Бог, действовавший через Илию, теперь пребывает с Елисеем."
        ],
        "imageIndex": 7
      }
    ],
    "questions": [
      "Что Илия объявил Ахаву?",
      "Как Бог кормил Илию у потока?",
      "Что оставалось у вдовы и как Бог позаботился о ней?",
      "Что произошло с её сыном?",
      "Почему Авдий боялся сообщать Ахаву об Илии?",
      "Какое испытание произошло на Кармиле?",
      "Сколько раз слуга смотрел в сторону моря?",
      "Как Господь позаботился об измученном Илии?",
      "Почему Навуфей не отдал виноградник?",
      "Чем отличался третий военачальник?",
      "О чём Елисей попросил Илию?",
      "Чему история Илии учит нас о Боге?"
    ],
    "promise": {
      "body": "Даже когда поток пересох, еды не хватало или Илия чувствовал себя совсем одиноким, Господь знал его нужды. Он давал пищу, силы, направление и помощников. Бог не обещает жизни без трудностей, но всегда остаётся верным Своему слову.",
      "keyLine": "Бог не оставляет Своих"
    },
    "connection": {
      "body": "Илия был великим пророком, но оставался человеком, который уставал, боялся и нуждался в Божьей помощи. Иисус Христос больше пророков: Он совершенно открыл нам Отца. Позднее Илия явился с Моисеем при Преображении Иисуса (Матфея 17:1–8), и голос из облака повелел слушать Божьего Сына. Илия призывал Израиль обратиться к Господу; Иисус пришёл спасти Свой народ от грехов. Рождество напоминает, что Бог послал Своего Сына, Которого мы призваны слушать.",
      "keyLine": "Илия и Иисус"
    },
    "familyChallenge": {
      "intro": "Чей голос я слушаю?",
      "instruction": "",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "",
      "prayer": "Господи, помоги нам слушать Тебя и смело исполнять Твоё слово."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 15",
      "completed": "День 15 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

