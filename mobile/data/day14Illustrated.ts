import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_FOURTEEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_FOURTEEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day14/story/01-wisdom.jpg"),
  require("../assets/advent/day14/story/03-idols.jpg"),
  require("../assets/advent/day14/story/04-judgment.jpg"),
  require("../assets/advent/day14/story/05-sheba.jpg"),
];
export const DAY_FOURTEEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 14",
    "title": "Соломон — мудрість і вибір серця",
    "subtitle": "Мудрість, слава і вірність Богові",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«Початок премудрості — страх Господній, а пізнання Святого — розум».",
      "reference": "Приповісті 9:10"
    },
    "storyPages": [
      {
        "title": "Мудрий вибір",
        "paragraphs": [
          "Давид постарів. Настав час, коли царство Ізраїля мало перейти до його сина Соломона. Давид любив Господа й бажав, щоб його син також ходив Божими дорогами. Перед смертю він навчав Соломона бути сильним, мужнім, виконувати Божі заповіді та зберігати вірність Господу.",
          "Коли Соломон став царем, він розумів, що перед ним стоїть дуже велика відповідальність. Йому потрібно було керувати численним народом, розв’язувати складні питання, захищати людей і справедливо судити їх.",
          "Одного разу Соломон пішов до Ґів’ону, де було місце для поклоніння Богові. Там він приніс Господу багато жертв. Тієї ночі Бог з’явився Соломонові уві сні й сказав: «Проси, що Я маю тобі дати».",
          "Яка дивовижна можливість! Соломон міг попросити багатства, довгого життя, слави або перемоги над ворогами. Але він не став просити нічого з цього.",
          "Соломон згадав, як Бог виявляв милість до його батька Давида. Він розумів, що став царем не завдяки своїм здібностям, а завдяки Божій волі. Тому Соломон відповів, що він ще молодий і не знає, як правильно керувати таким великим народом. Він попросив у Господа розумне, слухняне серце, щоб розрізняти добро і зло та справедливо судити Божий народ.",
          "Богові сподобалося це прохання. Господь сказав Соломонові, що оскільки він не просив для себе ні довгого життя, ні багатства, ні загибелі ворогів, але попросив мудрості, то Бог дасть йому мудре й розумне серце, якого не було в інших царів.",
          "Крім того, Господь пообіцяв Соломонові багатство і славу, яких він навіть не просив. А якщо Соломон ходитиме Божими дорогами й виконуватиме Його заповіді, Господь продовжить дні його життя.",
          "Прокинувшись, Соломон зрозумів, що це був сон. Він повернувся до Єрусалима, став перед ковчегом Господнього заповіту, приніс жертви й влаштував частування для своїх слуг. Так почалося царювання Соломона, якому Бог подарував надзвичайну мудрість."
        ],
        "imageIndex": 0
      },
      {
        "title": "Мудрий суд",
        "paragraphs": [
          "Незабаром сталася подія, яка показала всьому народові, яку мудрість Бог дав Соломонові. До царя прийшли дві жінки. Вони жили в одному домі, і в кожної народилася дитина.",
          "Одного разу вночі дитина однієї з жінок померла. Тоді між ними виникла суперечка. Одна жінка стверджувала, що друга вночі поміняла дітей: забрала її живого сина, а замість нього поклала мертвого. Інша жінка заперечувала це. Обидві говорили, що жива дитина належить саме їм.",
          "Ніхто не міг підтвердити, хто з них говорить правду. У домі не було інших свідків. Цар Соломон уважно вислухав обидві сторони. Як йому визначити справжню матір?",
          "Тоді Соломон наказав принести меч. Він промовив, щоб живу дитину розділили навпіл і віддали по половині кожній жінці.",
          "Почувши це, справжня мати злякалася за життя свого сина. Вона почала благати царя не вбивати дитину, а краще віддати її іншій жінці. Вона була готова втратити можливість виховувати свого сина, аби тільки він залишився живим. А друга жінка не заперечувала проти царського наказу.",
          "Тоді Соломон зрозумів, хто справжня мати. Він наказав віддати живу дитину тій жінці, яка благала зберегти їй життя. Коли весь Ізраїль почув про це рішення, люди дивувалися царській мудрості. Вони побачили, що Бог дав Соломонові мудрість для справедливого суду.",
          "Соломон не просто знав багато речей. Він умів розбиратися у складних обставинах і знаходити правильне рішення."
        ],
        "imageIndex": 2
      },
      {
        "title": "Храм Господній",
        "paragraphs": [
          "Ще за життя цар Давид дуже хотів побудувати величний храм для Господа. Але Бог сказав йому, що цей храм побудує його син. Коли Соломон став царем і в Ізраїлі настав мир, він розпочав будівництво Божого дому в Єрусалимі.",
          "Це була величезна й відповідальна праця. Соломон зібрав багато досвідчених майстрів, будівельників і робітників. Для будівництва використовували найкращі матеріали. Цар Хірам із Тиру допомагав доставляти деревину. З Лівану привозили кедрові та кипарисові дерева. Для фундаменту й стін готували великі, добре оброблені камені.",
          "Каміння обтесували ще до того, як його привозили на місце будівництва. Тому під час зведення храму там не було чути шуму молотків, сокир та іншого залізного знаряддя. Храм будували сім років.",
          "Будівля була надзвичайно гарною. Її внутрішні стіни обшили деревом із різьбленими зображеннями квітів, пальм і херувимів. Багато деталей було вкрито чистим золотом.",
          "У храмі були святе місце та Святая Святих — особливе приміщення, куди мали поставити ковчег Божого заповіту. У Святому Святих поставили двох великих херувимів із розпростертими крилами. Соломон також зробив необхідні предмети для поклоніння Богові: золотий жертовник, столи, світильники та інше храмове начиння. Поруч із храмом були подвір’я, жертовник для жертвоприношень і велика мідна посудина для води, яку називали морем.",
          "Коли будівництво завершилося, настав урочистий день посвячення храму. Соломон зібрав старійшин Ізраїля, начальників племен і весь народ. Священники внесли ковчег Божого заповіту до Святого Святих і поставили його на призначене місце. У ковчезі були кам’яні таблиці заповіту, які Мойсей отримав від Бога.",
          "Коли священники вийшли зі святині, дім Господній наповнила хмара. Це було особливим знаком Божої присутності. Соломон став перед народом, благословив його та прославив Господа за те, що Він виконав обіцянку, дану Давидові.",
          "Потім цар став перед Господнім жертовником, підняв руки до неба й почав молитися. Він визнав, що немає іншого Бога, подібного до Господа, Який зберігає заповіт і милість до Своїх слуг.",
          "Соломон добре розумів, що навіть небо й небеса небес не можуть умістити Бога. Тим більше Його не може вмістити храм, збудований людськими руками. Проте він благав Господа вислуховувати молитви людей, які звертатимуться до Нього на цьому місці.",
          "Соломон просив, щоб Бог прощав гріхи, допомагав Своєму народові в бідах, чув покаяння й відповідав на щирі молитви. Він молився навіть за чужинців, які прийдуть із далеких земель, почувши про великого Бога Ізраїля. Цар бажав, щоб усі народи землі пізнали Господа.",
          "Після молитви Соломон знову благословив людей і закликав їх усім серцем бути вірними Богові.",
          "Народ приносив жертви й радів перед Господом. Свято тривало багато днів.",
          "Бог знову з’явився Соломонові й нагадав, що почув його молитву. Але Господь також попередив царя: благословення не означає, що можна відступити від Божих заповідей. Якщо народ та його цар залишать Господа і поклонятимуться іншим богам, на них чекає покарання."
        ],
        "imageIndex": null
      },
      {
        "title": "Слава Соломона і цариця Шеви",
        "paragraphs": [
          "З роками слава про мудрість Соломона поширилася далеко за межі Ізраїля. До нього приходили люди з різних народів, щоб почути його мудрі слова.",
          "Бог дав Соломонові не лише здатність справедливо судити, але й велике знання про навколишній світ. Він складав притчі й пісні, розмірковував про дерева — від величного ліванського кедра до маленької рослини, яка росте на стіні. Він говорив про тварин, птахів, плазунів і риб.",
          "Його царство ставало дедалі багатшим. Соломон будував міста, укріплення та величні будівлі. До Єрусалима привозили золото, срібло, коштовні речі й дорогоцінні матеріали. Багатство та велич царського двору дивували всіх, хто приходив до нього.",
          "Одного разу звістка про Соломона дійшла до цариці Шеви. Вона почула про його надзвичайну мудрість, пов’язану з ім’ям Господа, і вирішила сама переконатися, чи все це правда. Цариця вирушила в далеку подорож до Єрусалима.",
          "Вона прибула з великим почтом, верблюдами, навантаженими пахощами, великою кількістю золота та дорогоцінним камінням. Цариця мала багато складних запитань. Вона хотіла випробувати мудрість Соломона.",
          "Коли вона зустрілася з царем, то розповіла йому все, що було в її серці. Соломон відповів на всі її запитання. Не було нічого такого, чого він не зміг би їй пояснити.",
          "Потім цариця побачила палац Соломона, його слуг, порядок у царському домі, частування, одяг служителів і жертви, які він приносив у Господньому домі. Усе це настільки вразило її, що вона була приголомшена.",
          "Цариця сказала Соломонові, що чула про його мудрість і велич у своїй країні, але не вірила розповідям, доки не побачила все на власні очі. Тепер вона переконалася, що їй розповіли навіть не половину того, що було насправді.",
          "Вона назвала щасливими людей і слуг Соломона, які постійно перебували поруч із ним і могли слухати його мудрість. А найголовніше — цариця прославила Господа, Бога Соломона, Який поставив його царем для справедливого суду й правди.",
          "Цариця подарувала Соломонові золото, пахощі та дорогоцінне каміння. А Соломон дав їй подарунки й усе, чого вона бажала та просила. Після цього цариця Шеви повернулася до своєї країни.",
          "Слава Соломона була великою. Але разом із багатством, владою й успіхом з’явилася небезпека, яку цар не повинен був забувати."
        ],
        "imageIndex": 3
      },
      {
        "title": "Ідоли — серце, яке відвернулося від Бога",
        "paragraphs": [
          "Соломон мав надзвичайну мудрість, багатство і славу. Господь дав йому більше, ніж він колись просив. Але мудрість сама по собі не робить людину слухняною Богові.",
          "Минали роки, і Соломон почав робити те, від чого Господь застерігав Свій народ. Він узяв собі багато дружин із чужих народів, хоча Бог попереджав ізраїльтян не укладати таких шлюбів, які можуть відвернути їхні серця до чужих богів.",
          "Серед дружин Соломона були жінки, які поклонялися ідолам. Спочатку Соломон, можливо, вважав, що це не становить великої небезпеки. Але поступово він почав дозволяти їхнє поклоніння неправдивим богам.",
          "Коли Соломон постарів, його дружини схилили його серце до інших богів. Він уже не був усім серцем відданий Господу, як його батько Давид. Соломон навіть будував місця для поклоніння чужим богам.",
          "Він дозволяв приносити їм жертви й сам чинив те, що було злим в очах Господа. Яке сумне завершення для людини, яка колись просила в Бога мудрості!",
          "Бог з’являвся Соломонові й наказував не ходити за іншими богами, але цар не зберіг цієї заповіді. Тоді Господь сказав Соломонові, що через його невірність царство буде розділене.",
          "Проте заради Давида Бог не зробить цього за життя Соломона. Царство буде забране з рук його сина, але одне плем’я залишиться його нащадкам. Так Бог залишився вірним Своїй обітниці Давидові, хоча Соломон порушив Божі заповіді.",
          "Після смерті Соломона царем став його син Ровоам. Через нерозумні рішення Ровоама більшість ізраїльських племен відокремилися від нього. Царство розділилося на дві частини. Таким чином здійснилося Боже попередження.",
          "Соломон отримав від Бога дивовижний дар мудрості, але наприкінці життя не залишився вірним Господу всім серцем. Його історія навчає нас, що недостатньо добре почати — важливо залишатися вірними Богові до кінця."
        ],
        "imageIndex": 1
      }
    ],
    "questions": [
      "Що Соломон попросив у Бога, коли Господь з’явився йому уві сні?",
      "Чому Богові сподобалося прохання Соломона?",
      "Як Соломон зрозумів, яка з двох жінок була справжньою матір’ю?",
      "Хто раніше хотів побудувати храм для Господа?",
      "Скільки років будували храм?",
      "Що сталося, коли священники внесли ковчег до храму?",
      "Про що Соломон молився під час посвячення храму?",
      "Чому цариця Шеви приїхала до Єрусалима?",
      "Що найбільше вразило царицю?",
      "Як дружини Соломона вплинули на його серце?",
      "Яке покарання Бог оголосив за невірність Соломона?",
      "Чому важливо не лише добре почати, але й залишатися вірним Богові?"
    ],
    "promise": {
      "body": "Бог пообіцяв Давидові, що його царський рід не зникне. Соломон отримав мудрість, побудував храм і став великим царем, але наприкінці життя відступив від Господа. Навіть тоді Бог не забув Своєї обітниці Давидові.",
      "keyLine": "Божа вірність не залежить від людської досконалості. Господь виконує Свої обіцянки."
    },
    "connection": {
      "body": "Біблійний зв’язок: Матвія 12:42. Соломон був наймудрішим царем свого часу. Люди приїжджали здалеку, щоб послухати його слова. Навіть цариця Шеви вирушила в довгу подорож, щоб почути його мудрість.\n\nАле одного дня на землю прийшов Той, Хто більший за Соломона, — Ісус Христос. Ісус Сам сказав, що тут є Більший за Соломона (Матвія 12:42).\n\nСоломон отримав мудрість від Бога, а Христос є Божою мудрістю (1 Коринтян 1:24). Соломон побудував храм, де народ поклонявся Господу, а через Ісуса ми маємо доступ до Отця.",
      "keyLine": "Соломон був недосконалим царем, який згодом відступив від Бога. Але Ісус — досконалий і вірний Цар, Який ніколи не згрішив. На Різдво ми святкуємо народження Царя, Який більший за Соломона. Його мудрість досконала, а Його Царство вічне."
    },
    "familyChallenge": {
      "intro": "Уявіть, що ви можете попросити щось одне: багато грошей, популярність, надзвичайну силу або мудрість.",
      "instruction": "Нехай кожен член сім’ї обере один варіант і пояснить чому. Потім прочитайте 1 Царів 3:9–12 і згадайте, чого Соломон попросив у Бога.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Обговоріть разом: «Чому мудрість важливіша за багатство?» і «Яке рішення нам потрібно прийняти цього тижня, щоб догодити Богові?»",
      "ending": "Закінчіть молитвою: «Господи, навчи нас робити мудрий вибір і залишатися вірними Тобі».",
      "prayer": "«Господи, навчи нас робити мудрий вибір і залишатися вірними Тобі»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 14",
      "completed": "День 14 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 14",
    "title": "Solomon — Wisdom and the Heart’s Choices",
    "subtitle": "Wisdom, Glory, and Faithfulness to God",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“The fear of the LORD is the beginning of wisdom, And the knowledge of the Holy One is understanding.” (NKJV)",
      "reference": "Proverbs 9:10"
    },
    "storyPages": [
      {
        "title": "A Wise Choice",
        "paragraphs": [
          "King David had grown old. The time had come for the kingdom of Israel to pass to his son Solomon. David loved the Lord and wanted his son to walk in God's ways. Before his death, he instructed Solomon to be strong, courageous, obedient to God's commandments, and faithful to the Lord.",
          "When Solomon became king, he understood that he had been given a great responsibility. He needed to govern a large nation, settle difficult disputes, protect the people, and judge them fairly.",
          "One day, Solomon went to Gibeon, where there was a place of worship. There he offered many sacrifices to the Lord. That night, God appeared to Solomon in a dream and said: “Ask! What shall I give you?”",
          "What an extraordinary opportunity! Solomon could have asked for wealth, a long life, fame, or victory over his enemies. But he asked for none of these things.",
          "Solomon remembered how faithfully God had shown mercy to his father David. He understood that he had become king not because of his own abilities, but because of God's will. Solomon answered that he was still young and did not know how to lead such a great nation. He asked the Lord for an understanding, obedient heart so that he could distinguish good from evil and judge God's people fairly.",
          "God was pleased with Solomon's request. The Lord told Solomon that because he had not asked for a long life, riches, or the death of his enemies, but had asked for understanding, God would give him a wise and discerning heart unlike that of any other king.",
          "God also promised Solomon riches and honor that he had not even requested. If Solomon walked in God's ways and kept His commandments, the Lord would also lengthen his days.",
          "When Solomon awoke, he realized that it had been a dream. He returned to Jerusalem, stood before the Ark of the Covenant, offered sacrifices, and prepared a feast for his servants. Thus began the reign of Solomon, the king to whom God had given extraordinary wisdom."
        ],
        "imageIndex": 0
      },
      {
        "title": "A Wise Judgment",
        "paragraphs": [
          "Before long, an event took place that revealed to the whole nation the wisdom God had given Solomon. Two women came before the king. They lived in the same house, and each had given birth to a baby.",
          "One night, the baby of one of the women died. A dispute arose between them. One woman claimed that the other had secretly exchanged the babies during the night, taking her living son and leaving the dead child in his place. The other woman denied it. Both insisted that the living baby belonged to them.",
          "There were no witnesses in the house who could tell the king what had really happened. Solomon listened carefully to both women. How could he discover which one was telling the truth?",
          "Then Solomon ordered a sword to be brought. He commanded that the living child be divided in two and that each woman be given half.",
          "When the real mother heard this, she was terrified for her son's life. She begged the king not to kill the baby but to give him to the other woman instead. She was willing to give up raising her son as long as he could remain alive. The other woman, however, did not object to the king's command.",
          "Then Solomon understood who the real mother was. He ordered that the living baby be given to the woman who had begged for his life to be spared. When all Israel heard about the king's judgment, the people were amazed. They recognized that God had given Solomon wisdom to administer justice.",
          "Solomon did not merely possess great knowledge. He was able to understand difficult situations and make wise decisions."
        ],
        "imageIndex": 2
      },
      {
        "title": "The Temple of the Lord",
        "paragraphs": [
          "During his lifetime, King David had greatly desired to build a magnificent temple for the Lord. But God had told him that his son would build it. When Solomon became king and peace came to Israel, he began building the house of the Lord in Jerusalem.",
          "It was a tremendous undertaking. Solomon gathered skilled craftsmen, builders, and workers. Only the finest materials were used. King Hiram of Tyre helped supply timber. Cedar and cypress wood were brought from Lebanon, while large, carefully prepared stones were used for the foundations and walls.",
          "The stones were shaped before being brought to the construction site. Because of this, no sound of hammer, axe, or other iron tool was heard at the temple while it was being built. Construction continued for seven years.",
          "The temple was magnificent. Its interior walls were covered with beautifully carved wooden panels decorated with flowers, palm trees, and cherubim. Many surfaces were covered with pure gold.",
          "Inside the temple were the Holy Place and the Most Holy Place, the special room where the Ark of the Covenant would stand. Two large cherubim with outstretched wings stood within the Most Holy Place.",
          "Solomon also made the furnishings needed for worship, including the golden altar, tables, lampstands, and other sacred objects. Outside were courtyards, an altar for sacrifices, and a large bronze basin called the Sea.",
          "When the temple was completed, the day came for its dedication. Solomon gathered the elders of Israel, the leaders of the tribes, and the whole assembly. The priests carried the Ark of the Covenant into the Most Holy Place and set it in its appointed position. Inside the ark were the stone tablets of the covenant that Moses had received from God.",
          "When the priests came out of the sanctuary, a cloud filled the house of the Lord. It was a special sign of God's presence. Solomon stood before the people, blessed them, and praised the Lord for fulfilling His promise to David.",
          "Then the king stood before the altar, raised his hands toward heaven, and prayed. He acknowledged that there was no God like the Lord, who faithfully kept His covenant and showed mercy to His servants.",
          "Solomon understood that even heaven and the highest heaven could not contain God, much less a temple built by human hands. Nevertheless, he asked the Lord to hear the prayers offered toward that place.",
          "Solomon prayed that God would forgive sins, help His people in times of trouble, hear their repentance, and answer sincere prayers. He even prayed for foreigners who would come from distant lands because they had heard about the great God of Israel. Solomon wanted all the peoples of the earth to know the Lord.",
          "After praying, he blessed the people again and urged them to remain completely faithful to God. The people offered sacrifices and rejoiced before the Lord. Their celebration continued for many days.",
          "Later, God appeared to Solomon again and reminded him that He had heard his prayer. But the Lord also warned the king that receiving God's blessings did not give anyone permission to disobey His commandments. If the king and the people turned away from the Lord and worshiped other gods, judgment would follow."
        ],
        "imageIndex": null
      },
      {
        "title": "Solomon's Glory and the Queen of Sheba",
        "paragraphs": [
          "As the years passed, Solomon's reputation for wisdom spread far beyond the borders of Israel. People came from many nations to hear his wise words.",
          "God had given Solomon not only the ability to judge fairly but also extraordinary knowledge of the world. He composed proverbs and songs. He spoke about trees, from the majestic cedar of Lebanon to the small plants growing on walls. He also spoke about animals, birds, creeping creatures, and fish.",
          "His kingdom became increasingly wealthy. Solomon built cities, fortifications, and magnificent buildings. Gold, silver, precious stones, and costly materials were brought to Jerusalem. The wealth and splendor of his royal court amazed everyone who visited.",
          "One day, news about Solomon reached the Queen of Sheba. She heard about his remarkable wisdom and his connection with the name of the Lord. She decided to travel to Jerusalem and discover whether the reports were true.",
          "The queen set out on a long journey, accompanied by a large group of attendants and camels carrying spices, great quantities of gold, and precious stones. She had many difficult questions and wanted to test Solomon's wisdom.",
          "When she met the king, she told him everything that was on her mind. Solomon answered all her questions. There was nothing too difficult for him to explain.",
          "The queen also saw his palace, his servants, the organization of his household, the food served at his table, the clothing of his attendants, and his offerings at the house of the Lord. She was overwhelmed by what she saw.",
          "She told Solomon that she had heard about his wisdom and greatness in her own country, but she had not believed the reports until she had seen everything for herself. Now she realized that she had not been told even half of it.",
          "She called Solomon's servants and attendants blessed because they could continually hear his wisdom.",
          "Most importantly, the queen praised the Lord, Solomon's God, who had placed him on the throne to uphold justice and righteousness.",
          "She gave Solomon gifts of gold, spices, and precious stones. Solomon also gave her gifts and whatever she requested. Afterward, the Queen of Sheba returned to her own country.",
          "Solomon's glory was great. But along with wealth, power, and success came a danger that the king should never have forgotten."
        ],
        "imageIndex": 3
      },
      {
        "title": "Idols — A Heart That Turned Away from God",
        "paragraphs": [
          "Solomon possessed extraordinary wisdom, wealth, and honor. The Lord had given him more than he had ever requested. But wisdom alone does not make a person obedient to God.",
          "As the years passed, Solomon began doing the very things against which the Lord had warned His people. He married many women from foreign nations, even though God had warned the Israelites against marriages that would turn their hearts toward other gods.",
          "Some of Solomon's wives worshiped idols. At first, Solomon may have thought that this was not a serious danger. But gradually he began allowing the worship of false gods.",
          "When Solomon grew old, his wives turned his heart toward other gods. He was no longer completely devoted to the Lord as his father David had been. Solomon even built places of worship for foreign gods.",
          "He allowed sacrifices to be offered to them and did what was evil in the sight of the Lord. What a sorrowful ending for someone who had once asked God for wisdom!",
          "God had appeared to Solomon and commanded him not to follow other gods, but the king did not keep that commandment. Then the Lord told Solomon that because of his unfaithfulness, the kingdom would be divided.",
          "However, for David's sake, God would not do this during Solomon's lifetime. The kingdom would be taken from his son, but one tribe would remain under the rule of David's descendants. In this way, God remained faithful to His promise to David, even though Solomon had broken His commandments.",
          "After Solomon died, his son Rehoboam became king. Because of Rehoboam's unwise decisions, most of the tribes of Israel separated from him. The kingdom was divided into two parts. God's warning had come true.",
          "Solomon had received an astonishing gift of wisdom from the Lord, but toward the end of his life, he did not remain faithful to God with all his heart. His story teaches us that it is not enough to begin well — we must remain faithful to God until the end."
        ],
        "imageIndex": 1
      }
    ],
    "questions": [
      "What did Solomon ask God for when the Lord appeared to him in a dream?",
      "Why was God pleased with Solomon’s request?",
      "How did Solomon discover which woman was the real mother?",
      "Who had wanted to build a temple for the Lord before Solomon?",
      "How many years did it take to build the temple?",
      "What happened when the priests brought the ark into the temple?",
      "What did Solomon pray for at the dedication of the temple?",
      "Why did the Queen of Sheba visit Jerusalem?",
      "What amazed the queen most?",
      "How did Solomon’s wives influence his heart?",
      "What judgment did God announce because of Solomon’s unfaithfulness?",
      "Why is it important not only to begin well but to remain faithful to God?"
    ],
    "promise": {
      "body": "God promised David that his royal family line would continue. Solomon received wisdom, built the temple, and became a great king, but toward the end of his life he turned away from the Lord. Even then, God did not forget His promise to David.",
      "keyLine": "God’s faithfulness does not depend on human perfection. The Lord keeps His promises."
    },
    "connection": {
      "body": "Biblical connection: Matthew 12:42. Solomon was the wisest king of his time. People traveled from far away to hear his words. Even the Queen of Sheba made a long journey to listen to his wisdom.\n\nBut one day, Someone greater than Solomon came into the world — Jesus Christ. Jesus Himself said that One greater than Solomon was here (Matthew 12:42).\n\nSolomon received wisdom from God, but Christ is the wisdom of God (1 Corinthians 1:24). Solomon built a temple where people worshiped the Lord, but through Jesus we have access to the Father.",
      "keyLine": "Solomon was an imperfect king who eventually turned away from God. Jesus, however, is the perfect and faithful King who never sinned. At Christmas, we celebrate the birth of the King who is greater than Solomon. His wisdom is perfect, and His Kingdom is everlasting."
    },
    "familyChallenge": {
      "intro": "Imagine you could ask for just one thing: lots of money, popularity, extraordinary strength, or wisdom.",
      "instruction": "Let each family member choose one and explain why. Then read 1 Kings 3:9–12 and remember what Solomon asked God for.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Discuss together: “Why is wisdom more valuable than wealth?” and “What decision can we make this week that would please God?”",
      "ending": "Finish with a prayer: “Lord, teach us to make wise choices and remain faithful to You.”",
      "prayer": "“Lord, teach us to make wise choices and remain faithful to You.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 14",
      "completed": "Day 14 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 14",
    "title": "Соломон — мудрость и выбор сердца",
    "subtitle": "Мудрость, слава и верность Богу",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«Начало мудрости — страх Господень, и познание Святаго — разум». (Синодальный перевод)",
      "reference": "Притчи 9:10"
    },
    "storyPages": [
      {
        "title": "Мудрый выбор",
        "paragraphs": [
          "Давид состарился. Настало время, когда царство Израиля должно было перейти к его сыну Соломону. Давид любил Господа и желал, чтобы его сын тоже ходил Божьими путями. Перед смертью он наставлял Соломона быть сильным, мужественным, исполнять Божьи заповеди и хранить верность Господу.",
          "Когда Соломон стал царём, он понимал, что на него возложена огромная ответственность. Ему предстояло управлять многочисленным народом, разрешать сложные вопросы, защищать людей и справедливо судить их.",
          "Однажды Соломон отправился в Гаваон, где находилось место поклонения Богу. Там он принёс Господу множество жертв. В ту ночь Бог явился Соломону во сне и сказал: «Проси, что дать тебе».",
          "Какая удивительная возможность! Соломон мог попросить богатства, долгой жизни, славы или победы над врагами. Но он не стал просить ничего из этого.",
          "Соломон вспомнил, какую великую милость Бог проявлял к его отцу Давиду. Он понимал, что стал царём не благодаря собственным способностям, а по Божьей воле. Поэтому Соломон ответил, что он ещё молод и не знает, как правильно управлять таким великим народом. Он попросил у Господа разумное, послушное сердце, чтобы различать добро и зло и справедливо судить Божий народ.",
          "Богу понравилась эта просьба. Господь сказал Соломону, что, поскольку он не просил для себя ни долгой жизни, ни богатства, ни гибели врагов, но попросил мудрости, Бог даст ему мудрое и разумное сердце, какого не было у других царей.",
          "Кроме того, Господь пообещал Соломону богатство и славу, о которых он даже не просил. А если Соломон будет ходить Божьими путями и исполнять Его заповеди, Господь продлит дни его жизни.",
          "Проснувшись, Соломон понял, что это был сон. Он вернулся в Иерусалим, встал перед ковчегом завета Господня, принёс жертвы и устроил пир для своих слуг. Так началось царствование Соломона, которому Бог подарил необыкновенную мудрость."
        ],
        "imageIndex": 0
      },
      {
        "title": "Мудрый суд",
        "paragraphs": [
          "Вскоре произошло событие, которое показало всему народу, какую мудрость Бог дал Соломону. К царю пришли две женщины. Они жили в одном доме, и у каждой родился ребёнок.",
          "Однажды ночью ребёнок одной из женщин умер. Тогда между ними возник спор. Одна женщина утверждала, что другая ночью подменила детей: забрала её живого сына, а вместо него положила мёртвого. Другая женщина всё отрицала. Обе утверждали, что живой ребёнок принадлежит именно им.",
          "Никто не мог подтвердить, кто из них говорит правду. В доме не было других свидетелей. Царь Соломон внимательно выслушал обе стороны. Как определить настоящую мать?",
          "Тогда Соломон приказал принести меч. Он повелел разделить живого ребёнка надвое и отдать каждой женщине по половине.",
          "Услышав это, настоящая мать испугалась за жизнь своего сына. Она стала умолять царя не убивать ребёнка, а лучше отдать его другой женщине. Она была готова отказаться от возможности растить сына, лишь бы он остался жив. А другая женщина не возражала против царского приказа.",
          "Тогда Соломон понял, кто настоящая мать. Он повелел отдать живого ребёнка той женщине, которая умоляла сохранить ему жизнь. Когда весь Израиль услышал об этом решении, люди удивлялись царской мудрости. Они увидели, что Бог дал Соломону мудрость для справедливого суда.",
          "Соломон не просто обладал большими знаниями. Он умел разбираться в сложных обстоятельствах и находить правильное решение."
        ],
        "imageIndex": 2
      },
      {
        "title": "Храм Господень",
        "paragraphs": [
          "Ещё при жизни царь Давид очень хотел построить величественный храм для Господа. Но Бог сказал ему, что этот храм построит его сын. Когда Соломон стал царём и в Израиле наступил мир, он начал строительство Божьего дома в Иерусалиме.",
          "Это был огромный и ответственный труд. Соломон собрал множество опытных мастеров, строителей и работников. Для строительства использовали лучшие материалы. Царь Хирам из Тира помогал доставлять древесину. Из Ливана привозили кедровые и кипарисовые деревья.",
          "Для фундамента и стен подготавливали большие, тщательно обработанные камни.",
          "Камни обтёсывали ещё до того, как привозили на место строительства. Поэтому во время возведения храма там не было слышно шума молотков, топоров и других железных инструментов. Храм строили семь лет.",
          "Здание было необыкновенно красивым. Его внутренние стены обшили деревом с резными изображениями цветов, пальм и херувимов. Многие детали были покрыты чистым золотом.",
          "В храме находились Святое место и Святое святых — особое помещение, куда должны были поместить ковчег Божьего завета. В Святом святых поставили двух больших херувимов с распростёртыми крыльями.",
          "Соломон также изготовил необходимые предметы для поклонения Богу: золотой жертвенник, столы, светильники и другую храмовую утварь. Рядом с храмом находились дворы, жертвенник для жертвоприношений и большой медный сосуд для воды, который называли морем.",
          "Когда строительство завершилось, наступил торжественный день посвящения храма. Соломон собрал старейшин Израиля, начальников колен и весь народ. Священники внесли ковчег Божьего завета в Святое святых и поставили его на предназначенное место. В ковчеге находились каменные скрижали завета, которые Моисей получил от Бога.",
          "Когда священники вышли из святилища, дом Господень наполнило облако. Это было особым знаком Божьего присутствия. Соломон встал перед народом, благословил его и прославил Господа за то, что Он исполнил обещание, данное Давиду.",
          "Затем царь встал перед Господним жертвенником, поднял руки к небу и начал молиться. Он признал, что нет другого Бога, подобного Господу, Который хранит завет и милость к Своим рабам.",
          "Соломон прекрасно понимал, что даже небо и небеса небес не могут вместить Бога. Тем более Его не может вместить храм, построенный человеческими руками. Однако он умолял Господа выслушивать молитвы людей, которые будут обращаться к Нему на этом месте.",
          "Соломон просил, чтобы Бог прощал грехи, помогал Своему народу в бедствиях, слышал покаяние и отвечал на искренние молитвы. Он молился даже о чужеземцах, которые придут из далёких стран, услышав о великом Боге Израиля. Царь желал, чтобы все народы земли познали Господа.",
          "После молитвы Соломон снова благословил людей и призвал их всем сердцем оставаться верными Богу. Народ приносил жертвы и радовался перед Господом. Праздник продолжался много дней.",
          "Бог снова явился Соломону и напомнил, что услышал его молитву. Но Господь также предупредил царя: благословение не означает, что можно отступать от Божьих заповедей. Если народ и его царь оставят Господа и станут поклоняться другим богам, их ожидает наказание."
        ],
        "imageIndex": null
      },
      {
        "title": "Слава Соломона и царица Савская",
        "paragraphs": [
          "С годами слава о мудрости Соломона распространилась далеко за пределы Израиля. К нему приходили люди из разных народов, чтобы услышать его мудрые слова.",
          "Бог дал Соломону не только способность справедливо судить, но и обширные знания об окружающем мире. Он составлял притчи и песни, размышлял о деревьях — от величественного ливанского кедра до маленького растения, растущего на стене. Он говорил о животных, птицах, пресмыкающихся и рыбах.",
          "Его царство становилось всё богаче. Соломон строил города, укрепления и величественные здания. В Иерусалим привозили золото, серебро, драгоценные вещи и дорогие материалы.",
          "Богатство и великолепие царского двора удивляли всех, кто приходил к нему.",
          "Однажды весть о Соломоне достигла царицы Савской. Она услышала о его необыкновенной мудрости, связанной с именем Господа, и решила сама убедиться, правда ли всё это. Царица отправилась в далёкое путешествие в Иерусалим.",
          "Она прибыла с большой свитой, верблюдами, нагруженными благовониями, множеством золота и драгоценными камнями. У царицы было много сложных вопросов. Она хотела испытать мудрость Соломона.",
          "Когда она встретилась с царём, то рассказала ему всё, что было у неё на сердце. Соломон ответил на все её вопросы. Не было ничего такого, чего он не смог бы ей объяснить.",
          "Затем царица увидела дворец Соломона, его слуг, порядок в царском доме, угощения, одежду служителей и жертвы, которые он приносил в Господнем доме. Всё это настолько поразило её, что она была изумлена.",
          "Царица сказала Соломону, что слышала о его мудрости и величии в своей стране, но не верила рассказам, пока не увидела всё собственными глазами. Теперь она убедилась, что ей рассказали даже не половину того, что было на самом деле.",
          "Она назвала счастливыми людей и слуг Соломона, которые постоянно находились рядом с ним и могли слушать его мудрость. А самое главное — царица прославила Господа, Бога Соломона, Который поставил его царём для справедливого суда и правды.",
          "Царица подарила Соломону золото, благовония и драгоценные камни. А Соломон дал ей подарки и всё, чего она желала и просила. После этого царица Савская возвратилась в свою страну.",
          "Слава Соломона была велика. Но вместе с богатством, властью и успехом появилась опасность, о которой царь не должен был забывать."
        ],
        "imageIndex": 3
      },
      {
        "title": "Идолы — сердце, отвернувшееся от Бога",
        "paragraphs": [
          "Соломон обладал необыкновенной мудростью, богатством и славой. Господь дал ему больше, чем он когда-то просил. Но мудрость сама по себе не делает человека послушным Богу.",
          "Проходили годы, и Соломон начал делать то, от чего Господь предостерегал Свой народ. Он взял себе много жён из чужих народов, хотя Бог предупреждал израильтян не заключать таких браков, которые могут отвратить их сердца к чужим богам.",
          "Среди жён Соломона были женщины, поклонявшиеся идолам. Сначала Соломон, возможно, считал, что это не представляет большой опасности. Но постепенно он начал позволять им поклоняться ложным богам.",
          "Когда Соломон состарился, его жёны склонили его сердце к другим богам. Он уже не был всем сердцем предан Господу, как его отец Давид. Соломон даже строил места для поклонения чужим богам.",
          "Он позволял приносить им жертвы и сам делал то, что было злом в очах Господа. Какое печальное завершение для человека, который когда-то просил у Бога мудрости!",
          "Бог являлся Соломону и повелевал не следовать за другими богами, но царь не сохранил этой заповеди. Тогда Господь сказал Соломону, что из-за его неверности царство будет разделено.",
          "Однако ради Давида Бог не сделает этого при жизни Соломона. Царство будет отнято у его сына, но одно колено останется под властью потомков Давида. Так Бог остался верен Своему обещанию Давиду, хотя Соломон нарушил Божьи заповеди.",
          "После смерти Соломона царём стал его сын Ровоам. Из-за неразумных решений Ровоама большинство израильских колен отделились от него. Царство разделилось на две части. Таким образом исполнилось Божье предупреждение.",
          "Соломон получил от Бога удивительный дар мудрости, но в конце жизни не остался верным Господу всем сердцем. Его история учит нас тому, что недостаточно хорошо начать — важно оставаться верными Богу до конца."
        ],
        "imageIndex": 1
      }
    ],
    "questions": [
      "Что Соломон попросил у Бога, когда Господь явился ему во сне?",
      "Почему Богу понравилась просьба Соломона?",
      "Как Соломон определил, какая из двух женщин была настоящей матерью?",
      "Кто раньше хотел построить храм для Господа?",
      "Сколько лет строили храм?",
      "Что произошло, когда священники внесли ковчег в храм?",
      "О чём Соломон молился при посвящении храма?",
      "Почему царица Савская приехала в Иерусалим?",
      "Что больше всего поразило царицу?",
      "Как жёны Соломона повлияли на его сердце?",
      "Какое наказание Бог объявил за неверность Соломона?",
      "Почему важно не только хорошо начать, но и оставаться верным Богу?"
    ],
    "promise": {
      "body": "Бог обещал Давиду, что его царский род не исчезнет. Соломон получил мудрость, построил храм и стал великим царём, но в конце жизни отвернулся от Господа. Даже тогда Бог не забыл Своего обещания Давиду.",
      "keyLine": "Божья верность не зависит от человеческого совершенства. Господь исполняет Свои обещания."
    },
    "connection": {
      "body": "Библейская связь: Матфея 12:42. Соломон был самым мудрым царём своего времени. Люди приезжали издалека, чтобы услышать его слова. Даже царица Савская отправилась в долгое путешествие, чтобы послушать его мудрость.\n\nНо однажды в мир пришёл Тот, Кто больше Соломона, — Иисус Христос. Сам Иисус сказал, что здесь Тот, Кто больше Соломона (Матфея 12:42).\n\nСоломон получил мудрость от Бога, а Христос есть Божья премудрость (1 Коринфянам 1:24).\n\nСоломон построил храм, где народ поклонялся Господу, а через Иисуса мы имеем доступ к Отцу.",
      "keyLine": "Соломон был несовершенным царём, который впоследствии отвернулся от Бога. Но Иисус — совершенный и верный Царь, Который никогда не согрешил. На Рождество мы празднуем рождение Царя, Который больше Соломона. Его мудрость совершенна, а Его Царство вечно."
    },
    "familyChallenge": {
      "intro": "Представьте, что вы можете попросить что-то одно: много денег, популярность, необыкновенную силу или мудрость.",
      "instruction": "Пусть каждый член семьи выберет один вариант и объяснит почему. Затем прочитайте 3 Царств 3:9–12 и вспомните, о чём Соломон попросил Бога.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Обсудите вместе: «Почему мудрость ценнее богатства?» и «Какое решение мы можем принять на этой неделе, чтобы угодить Богу?»",
      "ending": "Завершите молитвой: «Господи, научи нас делать мудрый выбор и оставаться верными Тебе».",
      "prayer": "«Господи, научи нас делать мудрый выбор и оставаться верными Тебе»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 14",
      "completed": "День 14 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};
