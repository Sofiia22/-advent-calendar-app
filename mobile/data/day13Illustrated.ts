import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_THIRTEEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_THIRTEEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day13/story/01-anointing.jpg"),
  require("../assets/advent/day13/story/02-shepherd.jpg"),
  require("../assets/advent/day13/story/03-harp.jpg"),
  require("../assets/advent/day13/story/04-goliath.jpg"),
  require("../assets/advent/day13/story/05-jonathan.jpg"),
  require("../assets/advent/day13/story/06-lament.jpg"),
  require("../assets/advent/day13/story/07-king.jpg"),
  require("../assets/advent/day13/story/08-repentance.jpg"),
  require("../assets/advent/day13/story/09-absalom.jpg"),
  require("../assets/advent/day13/story/10-solomon.jpg"),
];
export const DAY_THIRTEEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 13",
    "title": "Давид — від пастуха до царя",
    "subtitle": "Бог дивиться на серце",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Людина дивиться на лице, а Господь дивиться на серце».",
      "reference": "1 Самуїлова 16:7"
    },
    "storyPages": [
      {
        "title": "Бог обирає Давида",
        "paragraphs": [
          "Коли цар Саул перестав слухатися Бога, Господь послав пророка Самуїла до Вифлеєма, у дім Єссея. Самуїл мав помазати нового царя. Єссей привів своїх синів, і Самуїл спочатку подумав, що найстарший, високий і сильний Еліав, напевно, і є Божим вибором. Але Господь сказав Самуїлові не дивитися на зовнішність, бо Бог дивиться не так, як люди: люди дивляться на лице, а Господь дивиться на серце.",
          "Перед Самуїлом пройшли сім синів Єссея, але жодного з них Бог не вибрав. Тоді Самуїл запитав, чи всі сини тут. Єссей відповів, що залишився ще наймолодший — Давид, але він пасе овець. Коли Давида покликали, Господь сказав: «Устань, помаж його, бо це він».",
          "Самуїл узяв ріг з оливою і помазав Давида серед його братів. Від того дня Дух Господній зійшов на Давида. Так Давид, простий пастух із Вифлеєма, був вибраний Богом."
        ],
        "imageIndex": 0
      },
      {
        "title": "Пастух, який довіряє Богові",
        "paragraphs": [
          "Давид жив серед полів і пагорбів, пас овець свого батька й навчився довіряти Богові. Він захищав отару від лева й ведмедя, був сміливим, уважним і вірним у малому. Давид умів грати на арфі, співав Господу і славив Його. Саме в ті роки він добре зрозумів, що Бог — його Пастир. Тому пізніше він міг сказати: «Господь — Пастир мій, тому в недостатку не буду»."
        ],
        "imageIndex": 1
      },
      {
        "title": "Давид грає для Саула",
        "paragraphs": [
          "Тим часом цар Саул ставав усе неспокійнішим. Його серце було без миру, і слуги помітили, що йому стане легше, якщо хтось буде гарно грати на арфі. Один зі слуг згадав про Давида, сина Єссея: він умів грати, був хоробрий, розумний, приємний з вигляду, і — що найважливіше — Господь був із ним. Давида привели до Саула. Коли Давид грав на арфі, Саул заспокоювався, і злий дух відступав від нього. Так Давид став служити при царському дворі."
        ],
        "imageIndex": 2
      },
      {
        "title": "Давид і Голіаф",
        "paragraphs": [
          "Незабаром Ізраїль знову опинився перед ворогом. Филистимляни зібралися на війну, а з їхнього табору виходив велетень Голіаф із Ґату. Він був дуже високий і сильний, озброєний з голови до ніг, і сорок днів глузував з війська Ізраїлю та зневажав живого Бога.",
          "Усі боялися його, навіть цар Саул.",
          "Одного дня Єссей послав Давида до братів на поле бою, щоб занести їм хліб і сир та довідатися про них. Прийшовши, Давид почув слова Голіафа і здивувався: як може цей необрізаний филистимлянин зневажати військо живого Бога? Давид не міг мовчати. Йому сказали, що цар нагородить того, хто переможе Голіафа, але Давида турбувала не нагорода — його боліло те, що ворог зневажає Господа.",
          "Давида привели до Саула. Саул сумнівався, бо Давид був ще юнаком. Але Давид розповів, як Бог допомагав йому, коли він пас овець і бився з левом та ведмедем. Той самий Господь, сказав Давид, визволить його і тепер. Саул дав Давидові свою зброю, але Давид не звик до неї і відмовився. Він узяв лише свій посох, пращу і п’ять гладких каменів із потоку.",
          "Коли Давид вийшов назустріч Голіафові, велетень насміхався з нього. Але Давид відповів йому, що той іде з мечем, списом та щитом, а він іде в Ім’я Господа Саваота, Бога війська Ізраїлевого, Якого Голіаф зневажив. Давид сказав, що битва належить Господу. Потім він побіг назустріч филистимлянинові, поклав камінь у пращу, пустив його — і камінь влучив Голіафові в чоло. Велетень упав обличчям на землю. Давид підбіг, узяв меч Голіафа і відтяв йому голову. Побачивши це, филистимляни втекли, а ізраїльтяни погналися за ними. Так Бог дав перемогу не силою людської зброї, а вірою юного Давида."
        ],
        "imageIndex": 3
      },
      {
        "title": "Дружба з Йонатаном",
        "paragraphs": [
          "Після цієї перемоги Давида полюбив Йонатан, син Саула. Але Саул дедалі більше заздрив Давидові. Коли люди почали співати: «Саул побив тисячі, а Давид — десятки тисяч», серце царя наповнилося ревнощами. Хоч Давид вірно служив, Саул не раз намагався вбити його.",
          "Давидові довелося багато терпіти. Він не поспішав силою брати те, що Бог обіцяв йому.",
          "Він чекав Божого часу і вчився покладатися на Господа навіть тоді, коли шлях був важкий."
        ],
        "imageIndex": 4
      },
      {
        "title": "Сльози за Саулом і Йонатаном",
        "paragraphs": [
          "Пізніше филистимляни знову напали, і в битві на горі Гілбоа загинули Саул і його сини, серед них Йонатан. Коли Давид почув про це, він не зрадів смертю того, хто переслідував його. Навпаки, він гірко плакав за Саулом і Йонатаном. Давид оплакував їх, склав пісню жалоби й особливо сумував за своїм другом Йонатаном. Давид не тримав у серці злоби. Він шанував помазаника Господнього й любив свого друга."
        ],
        "imageIndex": 5
      },
      {
        "title": "Давид стає царем",
        "paragraphs": [
          "Після цього настав час здійснення Божої обітниці. Давид став царем. Спочатку він царював над Юдою, а згодом Бог утвердив його над усім Ізраїлем. Давид здобув Єрусалим і зробив його своїм містом. Це було важливе місце для народу, і Давид хотів, щоб там шанували Господа. Він зростав у силі, бо Господь був із ним."
        ],
        "imageIndex": 6
      },
      {
        "title": "Божа обітниця Давидові",
        "paragraphs": [
          "Коли Давид оселився у своєму домі, він захотів збудувати дім для Господа. Йому здавалося неправильним, що він живе в кедровому палаці, а ковчег Божий перебуває в наметі. Але через пророка Натана Бог сказав Давидові, що не він збудує храм. Проте Господь дав йому велику обітницю: Бог Сам утвердить дім Давида, і з його роду прийде Цар, Чиє царство стоятиме навіки. Давид смиренно прийняв це слово і прославив Господа."
        ],
        "imageIndex": null
      },
      {
        "title": "Гріх і покаяння",
        "paragraphs": [
          "Та навіть такий великий цар, як Давид, не був безгрішним. Одного разу він побачив Вірсавію, дружину Урії, і вчинив тяжкий гріх. Давид узяв її собі, а щоб приховати свій гріх, наказав поставити Урію там, де битва була найтяжча, і Урія загинув. Те, що зробив Давид, було злим в очах Господа.",
          "Тоді Бог послав до Давида пророка Натана. Натан розповів йому притчу про багатого чоловіка, який, маючи багато овець, забрав у бідного його єдину овечку. Давид сильно обурився і сказав, що такий чоловік заслуговує покарання. Тоді Натан промовив: «Ти — той чоловік». Давид зрозумів свій гріх. Він не виправдовувався, а смиренно визнав: «Згрішив я перед Господом». Бог простив Давида, але сказав, що наслідки гріха все одно прийдуть у його дім.",
          "Дитя, яке народилося, тяжко захворіло. Давид постив, молився і лежав на землі, благаючи Бога про милість. Але дитя померло. Коли Давид дізнався про це, він умився, змінив одяг, поклонився Господу і сказав, що не може повернути дитину назад, але сам одного дня піде до неї. Давид навчився приймати не лише прощення Бога, а й Його справедливе покарання."
        ],
        "imageIndex": 7
      },
      {
        "title": "Давид і Авесалом",
        "paragraphs": [
          "Пізніше в домі Давида сталися нові труднощі. Один із його синів, Авесалом, повстав проти батька. Багато людей пішли за Авесаломом, і Давидові довелося залишити Єрусалим. Йому було боляче не лише як цареві, а ще більше як батькові. Коли почалася битва, Давид наказав воєначальникам поводитися лагідно з Авесаломом заради нього. Але під час бою Авесалом загинув. Його голова заплуталася в гілках великого дуба, і він став легкою здобиччю для воїнів. Коли Давид почув про смерть сина, його серце розбилося. Він плакав і вигукував: «Сину мій Авесаломе! Коли б то я помер замість тебе!» Навіть після бунту Давид любив свого сина.",
          "Після цього Давид повернувся до Єрусалима. Дорога назад була непростою, але Бог не залишив його. Давид учився прощати, терпіти і далі вести народ. За все життя він пережив і великі перемоги, і тяжкі поразки, але в усьому вчився приходити до Бога."
        ],
        "imageIndex": 8
      },
      {
        "title": "Настанови Соломонові",
        "paragraphs": [
          "Коли Давид постарів, він добре розумів, що храм для Господа збудує не він, а його син Соломон. Давид зібрав багато матеріалів для майбутнього Божого дому, благословив Соломона й заповідав йому шукати Господа всім серцем. Давид нагадував, що Бог бачить серце людини і знає всі її думки. Він закликав Соломона бути сильним, мужнім і вірним Богові.",
          "Так завершувалося життя Давида — пастуха, музиканта, воїна, царя, поета і людини, яка знала і перемоги, і падіння, і сльози, і покаяння. Він не був досконалим, але любив Господа, умів каятися і знову повертатися до Бога. Саме тому Давида називали чоловіком за Божим серцем. Через його рід Бог виконав ще більшу обітницю: у майбутньому з роду Давида прийшов Ісус Христос — Цар, Чиє царство не матиме кінця."
        ],
        "imageIndex": 9
      },
      {
        "title": "Що ми запам’ятаємо",
        "paragraphs": [
          "Давид був не просто хоробрим хлопцем, який переміг Голіафа. Він був пастухом, який довіряв Богові, царем, який любив Господа, і людиною, яка вміла каятися, коли грішила.",
          "Бог був із Давидом у полі, у палаці, у битві, у сльозах і в старості."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Чому Бог обрав Давида, а не його старших братів?",
      "Як Давид піклувався про батькових овець?",
      "Як гра Давида на арфі допомагала Саулові?",
      "На кого Давид покладався, виходячи проти Голіафа?",
      "Як Йонатан ставився до Давида?",
      "Чому Давид сумував за Саулом і Йонатаном?",
      "Яку обітницю Бог дав Давидові?",
      "Як Давид відповів на докір пророка Натана?",
      "Чого Давид навчав свого сина Соломона?",
      "Чого історія Давида навчає нас про серце, довіру та покаяння?"
    ],
    "promise": {
      "body": "Бог пообіцяв утвердити дім Давида. З його роду мав прийти Цар, Чиє царство стоятиме навіки. Давид не був досконалим, але Божа вірність не змінилася.",
      "keyLine": "Бог виконує Свої обітниці."
    },
    "connection": {
      "body": "Давид був пастухом і царем. Через багато поколінь із його роду народився Ісус Христос.\n\nДавид довіряв Богові, але також грішив і потребував прощення. Ісус — безгрішний Спаситель, Який прийшов спасти нас від гріха.\n\nБожа обітниця Давидові веде нас до Різдва й до Ісуса — Царя, Чиє царство не матиме кінця.",
      "keyLine": "Ісус — обіцяний Цар із роду Давида."
    },
    "familyChallenge": {
      "intro": "Зберіться всією сім’єю за чаєм або вечерею й прочитайте 1 Самуїлова 16:7.",
      "instruction": "Нехай кожен назве одну добру рису іншого члена сім’ї — те, що не видно зовні, але проявляється у вчинках.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговоріть: «Що означає мати серце, яке любить Бога?» «Як Давид поводився, коли зрозумів, що згрішив?»",
      "ending": "Оберіть один добрий вчинок на завтра. Якщо потрібно, попросіть одне в одного пробачення. Завершіть спільною молитвою.",
      "prayer": "«Боже, допоможи нам любити Тебе всім серцем, чинити добро й просити прощення, коли помиляємося»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 13",
      "completed": "День 13 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 13",
    "title": "David — From Shepherd to King",
    "subtitle": "God Looks at the Heart",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“Man looks at the outward appearance, but the LORD looks at the heart.”",
      "reference": "1 Samuel 16:7"
    },
    "storyPages": [
      {
        "title": "God Chooses David",
        "paragraphs": [
          "When King Saul stopped obeying God, the Lord sent the prophet Samuel to Bethlehem, to the house of Jesse. Samuel was to anoint a new king. Jesse brought his sons before him, and at first Samuel thought that the eldest, tall and strong Eliab, must surely be God's choice. But the Lord told Samuel not to look at outward appearance, because God does not see as people see: people look at the outward appearance, but the Lord looks at the heart.",
          "Seven of Jesse's sons passed before Samuel, but God did not choose any of them. Samuel then asked whether all the sons were present. Jesse answered that the youngest, David, was still out tending the sheep. When David was called, the Lord said, “Arise, anoint him, for this is the one.”",
          "Samuel took the horn of oil and anointed David in the presence of his brothers. From that day on, the Spirit of the Lord came upon David. In this way David, an ordinary shepherd from Bethlehem, was chosen by God."
        ],
        "imageIndex": 0
      },
      {
        "title": "A Shepherd Who Trusts God",
        "paragraphs": [
          "David lived among fields and hills, cared for his father's sheep, and learned to trust God. He protected the flock from a lion and a bear and was brave, watchful, and faithful in small things.",
          "David could play the harp, sang to the Lord, and praised Him. During those years he came to understand deeply that God was his Shepherd. So later he could say, “The Lord is my shepherd; I shall not want.”"
        ],
        "imageIndex": 1
      },
      {
        "title": "David Plays for Saul",
        "paragraphs": [
          "Meanwhile, King Saul grew increasingly troubled. His heart had no peace, and his servants noticed that beautiful harp music might bring him relief. One servant remembered David, Jesse's son: he could play well, was brave, sensible, pleasant in appearance, and—most importantly—the Lord was with him. David was brought to Saul. Whenever David played the harp, Saul felt relief and the evil spirit departed from him. Thus David began to serve in the royal court."
        ],
        "imageIndex": 2
      },
      {
        "title": "David and Goliath",
        "paragraphs": [
          "Soon Israel faced an enemy again. The Philistines gathered for war, and a giant named Goliath from Gath came out of their camp. He was extremely tall and strong, armed from head to foot, and for forty days he mocked Israel's army and defied the living God. Everyone feared him, even King Saul.",
          "One day Jesse sent David to his brothers on the battlefield to bring them bread and cheese and find out how they were doing. On arriving, David heard Goliath's words and was astonished: how could this uncircumcised Philistine defy the army of the living God? David could not remain silent. He was told that the king would reward the man who defeated Goliath, but David was not concerned about the reward—he was grieved that the enemy was insulting the Lord.",
          "David was brought before Saul. Saul was doubtful because David was still a young man. But David told him how God had helped him while he tended the sheep and fought a lion and a bear.",
          "That same Lord, David said, would deliver him now. Saul offered David his armor, but David was not accustomed to it and refused it. He took only his staff, his sling, and five smooth stones from the brook.",
          "When David went out to meet Goliath, the giant mocked him. But David answered that Goliath came with a sword, a spear, and a shield, while he came in the name of the Lord of hosts, the God of Israel's armies, whom Goliath had defied. David said that the battle belonged to the Lord.",
          "Then he ran toward the Philistine, put a stone in his sling, and sent it flying—and the stone struck Goliath in the forehead. The giant fell facedown. David ran up, took Goliath's sword, and cut off his head. Seeing this, the Philistines fled and the Israelites pursued them. So God gave victory, not through the strength of human weapons, but through young David's faith."
        ],
        "imageIndex": 3
      },
      {
        "title": "Friendship with Jonathan",
        "paragraphs": [
          "After this victory, Jonathan, Saul's son, grew to love David. But Saul became increasingly jealous of him. When people began to sing, “Saul has slain his thousands, and David his ten thousands,”",
          "the king's heart filled with envy. Though David served faithfully, Saul tried more than once to kill him. David had to endure much suffering. He did not rush to seize by force what God had promised him. He waited for God's time and learned to rely on the Lord even when the road was hard."
        ],
        "imageIndex": 4
      },
      {
        "title": "Tears for Saul and Jonathan",
        "paragraphs": [
          "Later the Philistines attacked again, and Saul and his sons, including Jonathan, died in battle on Mount Gilboa. When David heard the news, he did not rejoice at the death of the man who had persecuted him. Instead, he wept bitterly for Saul and Jonathan. David mourned them, composed a song of lament, and grieved especially for his friend Jonathan. He did not harbor bitterness in his heart. He honored the Lord's anointed and loved his friend."
        ],
        "imageIndex": 5
      },
      {
        "title": "David Becomes King",
        "paragraphs": [
          "Then the time came for God's promise to be fulfilled. David became king. At first he ruled over Judah, and later God established him over all Israel. David captured Jerusalem and made it his city. It was an important place for the people, and David wanted the Lord to be honored there.",
          "He grew stronger, because the Lord was with him."
        ],
        "imageIndex": 6
      },
      {
        "title": "God’s Promise to David",
        "paragraphs": [
          "After David settled in his own house, he wanted to build a house for the Lord. It seemed wrong to him that he lived in a cedar palace while God's ark remained in a tent. But through the prophet Nathan, God told David that he would not be the one to build the temple. Yet the Lord gave him a great promise: God Himself would establish David's house, and from his family line would come a King whose kingdom would last forever. David humbly received this word and praised the Lord."
        ],
        "imageIndex": null
      },
      {
        "title": "Sin and Repentance",
        "paragraphs": [
          "Yet even a great king like David was not without sin. One day he saw Bathsheba, Uriah's wife, and committed a grave sin. David took her for himself, and to conceal his sin he ordered Uriah to be placed where the battle was fiercest; Uriah was killed. What David had done was evil in the Lord's sight.",
          "Then God sent the prophet Nathan to David. Nathan told him a parable about a rich man who had many sheep but took the only lamb belonging to a poor man. David was deeply outraged and said that such a man deserved punishment. Then Nathan declared, “You are the man!”",
          "David recognized his sin. He did not try to justify himself but humbly confessed, “I have sinned against the Lord.” God forgave David, yet told him that the consequences of his sin would still come upon his household.",
          "The child who was born became seriously ill. David fasted, prayed, and lay on the ground, pleading with God for mercy. But the child died. When David learned this, he washed, changed his clothes, worshiped the Lord, and said that he could not bring the child back, but that one day he himself would go to the child. David learned to accept not only God's forgiveness but also His just discipline."
        ],
        "imageIndex": 7
      },
      {
        "title": "David and Absalom",
        "paragraphs": [
          "Later more trouble came into David's household. One of his sons, Absalom, rebelled against his father. Many people followed Absalom, and David was forced to leave Jerusalem. He was hurt not only as a king but even more as a father. When battle began, David ordered his commanders to deal gently with Absalom for his sake. But Absalom died in the fighting. His head became caught in the branches of a great oak, leaving him helpless before the soldiers. When David heard that his son was dead, his heart broke. He wept and cried, “O my son Absalom! If only I had died in your place!” Even after the rebellion, David loved his son.",
          "Afterward David returned to Jerusalem. The journey back was not easy, but God did not abandon him. David learned to forgive, to endure, and to continue leading the people. Over his lifetime he experienced great victories and painful defeats, but through it all he learned to come to God."
        ],
        "imageIndex": 8
      },
      {
        "title": "Instructions for Solomon",
        "paragraphs": [
          "When David grew old, he understood that his son Solomon, not he, would build the temple for the Lord. David gathered many materials for God's future house, blessed Solomon, and urged him to seek the Lord with his whole heart. David reminded him that God sees the human heart and knows every thought. He called Solomon to be strong, courageous, and faithful to God.",
          "Thus the life of David drew to a close—the life of a shepherd, musician, warrior, king, poet, and a man who knew victories and failures, tears and repentance. He was not perfect, but he loved the Lord, knew how to repent, and kept returning to God. That is why David was called a man after God's own heart. Through his family line God fulfilled an even greater promise: in time Jesus Christ came from David's line—the King whose kingdom will have no end."
        ],
        "imageIndex": 9
      },
      {
        "title": "What We Remember",
        "paragraphs": [
          "David was not merely a brave boy who defeated Goliath. He was a shepherd who trusted God, a king who loved the Lord, and a person who knew how to repent when he sinned. God was with David in the fields, in the palace, in battle, in tears, and in old age."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Why did God choose David rather than his older brothers?",
      "How did David care for his father’s sheep?",
      "How did David’s harp playing help Saul?",
      "Whom did David trust when he faced Goliath?",
      "How did Jonathan treat David?",
      "Why did David mourn Saul and Jonathan?",
      "What promise did God give David?",
      "How did David respond to Nathan’s rebuke?",
      "What did David teach his son Solomon?",
      "What does David’s story teach us about the heart, trust, and repentance?"
    ],
    "promise": {
      "body": "God promised to establish David’s house. From his family line would come a King whose kingdom would last forever. David was not perfect, but God remained faithful.",
      "keyLine": "God keeps His promises."
    },
    "connection": {
      "body": "David was a shepherd and a king. Many generations later, Jesus Christ was born from his family line.\n\nDavid trusted God, but he also sinned and needed forgiveness. Jesus is the sinless Savior who came to save us from sin.\n\nGod’s promise to David leads us to Christmas and to Jesus — the King whose kingdom will have no end.",
      "keyLine": "Jesus is the promised King from David’s family line."
    },
    "familyChallenge": {
      "intro": "Gather as a family over tea or dinner and read 1 Samuel 16:7.",
      "instruction": "Let everyone name one good quality in another family member — something we cannot see on the outside but can see through their actions.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Discuss: “What does it mean to have a heart that loves God?” “How did David respond when he recognized his sin?”",
      "ending": "Choose one kind action for tomorrow. If needed, apologize to one another. Finish with a prayer together.",
      "prayer": "“God, help us love You with our whole hearts, do what is good, and ask for forgiveness when we do wrong.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 13",
      "completed": "Day 13 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 13",
    "title": "Давид — от пастуха до царя",
    "subtitle": "Бог смотрит на сердце",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Человек смотрит на лице, а Господь смотрит на сердце».",
      "reference": "1 Царств 16:7"
    },
    "storyPages": [
      {
        "title": "Бог избирает Давида",
        "paragraphs": [
          "Когда царь Саул перестал слушаться Бога, Господь послал пророка Самуила в Вифлеем, в дом Иессея. Самуил должен был помазать нового царя. Иессей привёл своих сыновей, и сначала Самуил подумал, что старший, высокий и сильный Елиав, наверное, и есть Божий избранник. Но Господь сказал Самуилу не смотреть на внешность, потому что Бог смотрит не так, как люди: человек смотрит на лицо, а Господь смотрит на сердце.",
          "Перед Самуилом прошли семь сыновей Иессея, но ни одного из них Бог не избрал. Тогда Самуил спросил, все ли сыновья здесь. Иессей ответил, что остался ещё младший — Давид, но он пасёт овец. Когда Давида позвали, Господь сказал: «Встань, помажь его, ибо это он». Самуил взял рог с елеем и помазал Давида среди его братьев. С того дня Дух Господень сошёл на Давида. Так Давид, простой пастух из Вифлеема, был избран Богом."
        ],
        "imageIndex": 0
      },
      {
        "title": "Пастух, доверяющий Богу",
        "paragraphs": [
          "Давид жил среди полей и холмов, пас овец своего отца и научился доверять Богу. Он защищал стадо от льва и медведя, был смелым, внимательным и верным в малом. Давид умел играть на арфе, пел Господу и прославлял Его. Именно в те годы он глубоко понял, что Бог — его Пастырь. Поэтому позже он мог сказать: «Господь — Пастырь мой; я ни в чём не буду нуждаться»."
        ],
        "imageIndex": 1
      },
      {
        "title": "Давид играет для Саула",
        "paragraphs": [
          "Тем временем царь Саул становился всё беспокойнее. В его сердце не было мира, и слуги заметили, что ему станет легче, если кто-нибудь будет хорошо играть на арфе. Один из слуг вспомнил о Давиде, сыне Иессея: тот умел играть, был храбрым, рассудительным, приятным на вид и — самое главное — Господь был с ним. Давида привели к Саулу. Когда Давид играл на арфе, Саулу становилось легче, и злой дух отступал от него. Так Давид начал служить при царском дворе."
        ],
        "imageIndex": 2
      },
      {
        "title": "Давид и Голиаф",
        "paragraphs": [
          "Вскоре Израиль снова оказался перед лицом врага. Филистимляне собрались на войну, а из их стана выходил великан Голиаф из Гефа. Он был очень высоким и сильным, вооружённым с головы до ног, и сорок дней насмехался над израильским войском и поносил живого Бога. Все его боялись, даже царь Саул.",
          "Однажды Иессей послал Давида к братьям на поле битвы, чтобы отнести им хлеб и сыр и узнать, как они поживают. Придя туда, Давид услышал слова Голиафа и удивился: как этот необрезанный филистимлянин смеет поносить войско живого Бога? Давид не мог молчать. Ему сказали, что царь наградит того, кто победит Голиафа, но Давида волновала не награда — ему было больно оттого, что враг оскорбляет Господа.",
          "Давида привели к Саулу. Саул сомневался, ведь Давид был ещё юношей. Но Давид рассказал, как Бог помогал ему, когда он пас овец и сражался со львом и медведем. Тот же Господь, сказал Давид, избавит его и теперь. Саул предложил Давиду свои доспехи, но Давид не привык к ним и отказался. Он взял только свой посох, пращу и пять гладких камней из ручья.",
          "Когда Давид вышел навстречу Голиафу, великан стал насмехаться над ним. Но Давид ответил, что Голиаф идёт с мечом, копьём и щитом, а он идёт во имя Господа Саваофа, Бога воинств Израиля, Которого Голиаф поносил. Давид сказал, что битва принадлежит Господу. Затем он побежал навстречу филистимлянину, вложил камень в пращу, метнул его — и камень попал Голиафу в лоб. Великан упал лицом на землю. Давид подбежал, взял меч Голиафа и отсёк ему голову. Увидев это, филистимляне побежали, а израильтяне бросились за ними в погоню. Так Бог даровал победу не силой человеческого оружия, а верой юного Давида."
        ],
        "imageIndex": 3
      },
      {
        "title": "Дружба с Ионафаном",
        "paragraphs": [
          "После этой победы Ионафан, сын Саула, полюбил Давида. Но Саул всё сильнее завидовал Давиду. Когда люди стали петь: «Саул победил тысячи, а Давид — десятки тысяч», сердце царя наполнилось завистью. Хотя Давид верно служил, Саул не раз пытался убить его.",
          "Давиду пришлось много страдать. Он не спешил силой захватить то, что Бог обещал ему.",
          "Он ждал Божьего времени и учился полагаться на Господа, даже когда путь был трудным."
        ],
        "imageIndex": 4
      },
      {
        "title": "Слёзы о Сауле и Ионафане",
        "paragraphs": [
          "Позже филистимляне снова напали, и в сражении на горе Гелвуе погибли Саул и его сыновья, в том числе Ионафан. Услышав об этом, Давид не обрадовался смерти человека, который его преследовал. Напротив, он горько плакал о Сауле и Ионафане. Давид оплакивал их, сложил плачевную песнь и особенно скорбел о своём друге Ионафане.",
          "Давид не хранил в сердце злобы. Он чтил помазанника Господня и любил своего друга."
        ],
        "imageIndex": 5
      },
      {
        "title": "Давид становится царём",
        "paragraphs": [
          "После этого наступило время исполнения Божьего обещания. Давид стал царём. Сначала он царствовал над Иудеей, а позднее Бог утвердил его над всем Израилем. Давид завоевал Иерусалим и сделал его своим городом. Это было важное место для народа, и Давид хотел, чтобы там почитали Господа. Он становился всё сильнее, потому что Господь был с ним."
        ],
        "imageIndex": 6
      },
      {
        "title": "Божье обещание Давиду",
        "paragraphs": [
          "Когда Давид поселился в своём доме, он захотел построить дом для Господа. Ему казалось неправильным, что он живёт в кедровом дворце, а ковчег Божий находится в шатре. Но через пророка Нафана Бог сказал Давиду, что не он построит храм. Однако Господь дал ему великое обещание: Бог Сам утвердит дом Давида, и из его рода придёт Царь, Чьё царство пребудет вечно. Давид смиренно принял это слово и прославил Господа."
        ],
        "imageIndex": null
      },
      {
        "title": "Грех и покаяние",
        "paragraphs": [
          "Но даже такой великий царь, как Давид, не был безгрешным. Однажды он увидел Вирсавию, жену Урии, и совершил тяжкий грех. Давид взял её себе, а чтобы скрыть свой грех, приказал поставить Урию там, где сражение было самым ожесточённым, и Урия погиб. То, что сделал Давид, было злом в очах Господа.",
          "Тогда Бог послал к Давиду пророка Нафана. Нафан рассказал ему притчу о богатом человеке, у которого было много овец, но который забрал у бедняка его единственную овечку. Давид сильно возмутился и сказал, что такой человек заслуживает наказания.",
          "Тогда Нафан произнёс: «Ты — тот человек!» Давид осознал свой грех. Он не стал оправдываться, а смиренно признался: «Согрешил я пред Господом». Бог простил Давида, но сказал, что последствия греха всё равно придут в его дом.",
          "Родившийся ребёнок тяжело заболел. Давид постился, молился и лежал на земле, умоляя Бога о милости. Но ребёнок умер. Когда Давид узнал об этом, он умылся, переоделся, поклонился Господу и сказал, что не может вернуть ребёнка назад, но сам однажды пойдёт к нему. Давид учился принимать не только Божье прощение, но и Его справедливое наказание."
        ],
        "imageIndex": 7
      },
      {
        "title": "Давид и Авессалом",
        "paragraphs": [
          "Позднее в доме Давида произошли новые беды. Один из его сыновей, Авессалом, восстал против отца. Многие люди последовали за Авессаломом, и Давиду пришлось покинуть Иерусалим. Ему было больно не только как царю, но ещё больше как отцу. Когда началась битва, Давид приказал военачальникам пощадить Авессалома ради него. Но во время сражения Авессалом погиб. Его голова запуталась в ветвях большого дуба, и он стал беззащитным перед воинами. Когда Давид услышал о смерти сына, его сердце разбилось.",
          "Он плакал и восклицал: «Сын мой Авессалом! О, кто дал бы мне умереть вместо тебя!»",
          "Даже после мятежа Давид любил своего сына.",
          "После этого Давид вернулся в Иерусалим. Обратный путь был нелёгким, но Бог не оставил его. Давид учился прощать, терпеть и продолжать вести народ. За свою жизнь он пережил и великие победы, и тяжёлые поражения, но во всём учился обращаться к Богу."
        ],
        "imageIndex": 8
      },
      {
        "title": "Наставления Соломону",
        "paragraphs": [
          "Когда Давид состарился, он хорошо понимал, что храм для Господа построит не он, а его сын Соломон. Давид собрал много материалов для будущего Божьего дома, благословил Соломона и заповедал ему искать Господа всем сердцем. Давид напоминал, что Бог видит сердце человека и знает все его мысли. Он призывал Соломона быть сильным, мужественным и верным Богу.",
          "Так подходила к концу жизнь Давида — пастуха, музыканта, воина, царя, поэта и человека, знавшего победы и падения, слёзы и покаяние. Он не был совершенным, но любил Господа, умел каяться и снова возвращаться к Богу. Именно поэтому Давида называли человеком по сердцу Божьему. Через его род Бог исполнил ещё более великое обещание: со временем из рода Давида пришёл Иисус Христос — Царь, Чьему царству не будет конца."
        ],
        "imageIndex": 9
      },
      {
        "title": "Что мы запомним",
        "paragraphs": [
          "Давид был не просто храбрым юношей, который победил Голиафа. Он был пастухом, доверявшим Богу, царём, любившим Господа, и человеком, который умел каяться, когда грешил. Бог был с Давидом в поле, во дворце, в битве, в слезах и в старости."
        ],
        "imageIndex": null
      }
    ],
    "questions": [
      "Почему Бог избрал Давида, а не его старших братьев?",
      "Как Давид заботился об овцах своего отца?",
      "Как игра Давида на арфе помогала Саулу?",
      "На кого Давид полагался, выходя против Голиафа?",
      "Как Ионафан относился к Давиду?",
      "Почему Давид скорбел о Сауле и Ионафане?",
      "Какое обещание Бог дал Давиду?",
      "Как Давид ответил на обличение пророка Нафана?",
      "Чему Давид учил своего сына Соломона?",
      "Чему история Давида учит нас о сердце, доверии и покаянии?"
    ],
    "promise": {
      "body": "Бог обещал утвердить дом Давида. Из его рода должен был прийти Царь, Чьё царство пребудет вечно. Давид не был совершенным, но Божья верность не изменилась.",
      "keyLine": "Бог исполняет Свои обещания."
    },
    "connection": {
      "body": "Давид был пастухом и царём. Много поколений спустя из его рода родился Иисус Христос.\n\nДавид доверял Богу, но также грешил и нуждался в прощении. Иисус — безгрешный Спаситель, Который пришёл спасти нас от греха.\n\nБожье обещание Давиду ведёт нас к Рождеству и к Иисусу — Царю, Чьё царство не будет иметь конца.",
      "keyLine": "Иисус — обещанный Царь из рода Давида."
    },
    "familyChallenge": {
      "intro": "Соберитесь всей семьёй за чаем или ужином и прочитайте 1 Царств 16:7.",
      "instruction": "Пусть каждый назовёт одно доброе качество другого члена семьи — то, что не видно снаружи, но проявляется в поступках.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Поговорите: «Что значит иметь сердце, которое любит Бога?» «Как Давид поступил, когда осознал свой грех?»",
      "ending": "Выберите один добрый поступок на завтра. Если нужно, попросите друг у друга прощения. Завершите общей молитвой.",
      "prayer": "«Боже, помоги нам любить Тебя всем сердцем, делать добро и просить прощения, когда поступаем неправильно»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 13",
      "completed": "День 13 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

