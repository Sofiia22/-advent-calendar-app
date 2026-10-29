import { ImageSourcePropType } from "react-native";

import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_FOUR_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day4/story/01-journey.jpg"),
  require("../assets/advent/day4/story/02-stars.jpg"),
  require("../assets/advent/day4/story/03-visitors.jpg"),
  require("../assets/advent/day4/story/04-isaac.jpg"),
] as const;

export const DAY_FOUR_ICONS = ADVENT_SECTION_ICONS;

export const DAY_FOUR_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  uk: {
    dayLabel: "День 4",
    title: "Авраам — Божа обітниця",
    subtitle: "Авраам повірив Богові й вирушив у дорогу",
    sectionTitles: { scripture: "Писання", bibleStory: "Біблійна історія", questions: "Запитання", promise: "Обітниця", connection: "Зв’язок з Ісусом", familyChallenge: "Сімейне завдання" },
    scripture: { verse: "«І благословляться в тобі всі племена землі».", reference: "Буття 12:3" },
    storyPages: [
      { title: "Бог кличе Авраама", paragraphs: [
        "Після потопу на землі знову стало багато людей. Але з часом більшість із них перестали поклонятися істинному Богові. Люди робили собі з дерева, каменю, срібла та золота зображення богів і поклонялися їм. Такі зображення називали ідолами.",
        "Але Бог вирішив покликати одного чоловіка, який довірятиме Йому та служитиме Йому. Цього чоловіка звали Авраам.",
        "Авраам жив у країні, де люди поклонялися іншим богам. Але одного дня Господь сказав йому: «Вийди зі своєї землі, від своєї рідні та з дому свого батька до землі, яку Я тобі покажу».",
        "Бог також дав Авраамові дивовижну обітницю: «Я зроблю з тебе великий народ, поблагословлю тебе… і благословляться в тобі всі племена землі».",
        "Авраам не знав, куди саме веде його Бог. Але він повірив Богові й послухався. Біблія говорить: «Вірою Авраам… послухався й вийшов, не знаючи, куди йде». Євреїв 11:8.",
        "Разом з Авраамом вирушила його дружина Сарра. Вони взяли з собою худобу, слуг і все своє майно та вирушили в далеку дорогу. У ті часи мандрівники не мали готелів і зручних будинків уздовж дороги. Авраам і Сарра жили в шатрах, які можна було складати й переносити з одного місця на інше.",
        "Їм довелося пройти довгий шлях через різні землі. Нарешті вони прийшли до прекрасного краю. Це була земля Ханаан — земля, яку Бог пообіцяв дати Авраамові та його нащадкам.",
        "Авраам продовжував жити в наметі. У різних місцях він будував жертовники й поклонявся Господу. Навколишні народи поклонялися ідолам, але Авраам поклонявся істинному Богові. Він довіряв Богові. Біблія навіть називає Авраама «другом Божим». Якова 2:23.",
      ] },
      { title: "Обітниця під зорями", paragraphs: [
        "Бог пообіцяв, що від Авраама походить великий народ. Але в Авраама і Сарри не було дітей. Минали роки. Авраам ставав старшим. Сарра також була вже в дуже похилому віці. З людської точки зору здавалося, що Божа обітниця вже не може здійснитися.",
        "Одного разу вночі Бог вивів Авраама надвір і сказав: «Поглянь на небо та порахуй зорі, якщо зможеш їх порахувати». Небо було всіяне зорями. Їх було так багато, що Авраам не міг їх порахувати.",
        "Тоді Бог сказав: «Таким буде твоє потомство». У Авраама все ще не було сина. Але він повірив Господу.",
        "І Біблія говорить: «І ввірував Аврам Господеві, а Він залічив йому те в праведність». Буття 15:6.",
      ] },
      { title: "Троє гостей", paragraphs: [
        "Одного спекотного дня Авраам сидів біля входу до свого шатра. Раптом він побачив трьох подорожніх, які наближалися до нього. Авраам побіг їм назустріч і запросив відпочити в тіні дерева.",
        "Він запропонував їм воду, щоб обмити ноги, і їжу, щоб вони могли підкріпитися перед подальшою дорогою. Авраам поспішив до Сарри й сказав їй приготувати хліб. Також було приготоване теля, молоко та інша їжа. Гості сіли під деревом і почали їсти.",
        "Потім вони запитали: «Де Сарра, твоя дружина?» Авраам відповів: «У шатрі». І Господь сказав Авраамові, що приблизно через рік Сарра матиме сина.",
        "Сарра почула ці слова. Їй було важко в це повірити, адже вона була вже дуже старою. Вона засміялася про себе.",
        "Тоді Господь сказав: «Чого сміялася Сарра?.. Хіба для Господа є щось неможливе?» Сарра злякалася й сказала: «Я не сміялася». Але Господь відповів: «Ні, ти сміялася». Після цього гості пішли далі.",
      ] },
      { title: "Бог виконує Свою обітницю", paragraphs: [
        "Минув час. Чи забув Бог те, що пообіцяв Авраамові? Ні. Бог ніколи не забуває Своїх обітниць.",
        "Через рік сталося саме те, що Він сказав. Сарра народила сина. Його назвали Ісаак. Тепер те, що колись здавалося неможливим, стало реальністю.",
        "Бог сказав, що Авраам і Сарра матимуть сина — і Бог дав їм сина. Авраам повірив Божій обітниці. Сарра спочатку сумнівалася, але потім також повірила.",
        "Біблія говорить про неї: «Вона вважала вірним Того, Хто обіцяв». Євреїв 11:11.",
        "Авраамові довелося чекати багато років. Але Бог не спізнився. Бог виконав Своє слово.",
        "І це була лише частина набагато більшої обітниці. Бог сказав Авраамові, що через його потомство благословляться всі народи землі. Минуть багато поколінь. І одного дня з роду Авраама народиться Ісус Христос.",
      ] },
    ],
    questions: ["Що Бог сказав Авраамові залишити?", "Чому Авраам вирушив у дорогу, хоча не знав, куди йде?", "Яку землю Бог показав Авраамові?", "Що Бог пообіцяв Авраамові, коли показав йому зорі?", "Чому Сарра засміялася, почувши, що матиме сина?", "Як Бог показав, що Він завжди виконує Свої обітниці?"],
    promise: { body: "Бог пообіцяв Авраамові, що через його родину благословляться всі народи землі. Авраам ще не бачив, як це станеться. Але Бог уже мав план.", keyLine: "Бог завжди виконує Свої обітниці." },
    connection: { body: "Бог пообіцяв Авраамові сина — і дав йому Ісаака. Але це була лише частина набагато більшої обітниці. Бог сказав, що через родину Авраама благословляться всі народи землі. Минуло багато поколінь. І одного дня з роду Авраама народився Ісус. Через Ісуса Бог приніс спасіння не лише одній сім’ї чи одному народові, а людям з усього світу.", keyLine: "Ісус — виконання Божої обітниці Авраамові." },
    familyChallenge: { intro: "Бог сказав Авраамові: «І благословляться в тобі всі племена землі». Буття 12:3.", instruction: "Сьогодні всією сім’єю станьте благословенням для когось іншого.", examplesLabel: "Приготуйте разом:", examples: ["печиво", "гарячий шоколад", "листівку", "маленький подарунок", "теплу записку"], reflection: "Подаруйте це сусіду, другу, родичу чи людині, яку хочете підбадьорити. Нехай діти самі допоможуть обрати людину й підготувати подарунок.", ending: "Поки робите це, скажіть:", prayer: "«Бог благословляє нас, щоб через нас благословляти інших»." },
    navigation: { section: "Розділ", of: "з", back: "Назад", next: "Далі", complete: "Завершити День 4", completed: "День 4 завершено", journeyContinues: "Ваша адвент-подорож триває.", backToJourney: "До подорожі" },
  },
  en: {
    dayLabel: "Day 4",
    title: "Abraham — God’s Promise",
    subtitle: "Abraham trusted God and began the journey",
    sectionTitles: { scripture: "Scripture", bibleStory: "Bible Story", questions: "Questions", promise: "Promise", connection: "Connection", familyChallenge: "Family Challenge" },
    scripture: { verse: "“And in you all the families of the earth shall be blessed.”", reference: "Genesis 12:3" },
    storyPages: [
      { title: "God Calls Abraham", paragraphs: [
        "After the flood, the number of people on the earth grew again. But as time passed, most of them stopped worshiping the true God. People made images of gods from wood, stone, silver, and gold and bowed down to them. These images were called idols.",
        "But God chose to call one man who would trust Him and serve Him. His name was Abraham.",
        "Abraham lived among people who worshiped other gods. But one day the LORD said to him: “Get out of your country, from your family and from your father’s house, to a land that I will show you.”",
        "God also gave Abraham an amazing promise: “I will make you a great nation; I will bless you… and in you all the families of the earth shall be blessed.”",
        "Abraham did not know exactly where God was leading him. But he trusted God and obeyed. The Bible says: “By faith Abraham obeyed when he was called to go out… And he went out, not knowing where he was going.” Hebrews 11:8.",
        "Abraham’s wife, Sarah, went with him. They took their livestock, servants, and possessions and began a long journey. In those days travelers did not have hotels and comfortable houses waiting for them along the road. Abraham and Sarah lived in tents, which could be taken down and moved from place to place.",
        "After a long journey, they finally arrived in a beautiful land. It was Canaan — the land God promised to Abraham and his descendants.",
        "Abraham continued living in tents. At different places he built altars and worshiped the LORD. The surrounding nations worshiped idols, but Abraham worshiped the true God. He trusted God. The Bible even calls Abraham “the friend of God.” James 2:23.",
      ] },
      { title: "The Promise Beneath the Stars", paragraphs: [
        "God had promised that a great nation would come from Abraham. But Abraham and Sarah had no children. Years passed. Abraham grew old. Sarah was also very old. From a human point of view, it seemed that God’s promise could no longer come true.",
        "One night God brought Abraham outside and said: “Look now toward heaven, and count the stars if you are able to number them.” The sky was filled with stars. There were far too many for Abraham to count.",
        "Then God said: “So shall your descendants be.” Abraham still did not have a son. But he believed the LORD.",
        "The Bible says: “And he believed in the LORD, and He accounted it to him for righteousness.” Genesis 15:6.",
      ] },
      { title: "Three Visitors", paragraphs: [
        "One hot day Abraham was sitting at the entrance of his tent. Suddenly he saw three visitors approaching. Abraham ran to meet them and invited them to rest under a tree.",
        "He offered them water to wash their feet and food to strengthen them before they continued their journey. Abraham hurried to Sarah and asked her to prepare bread. A calf was prepared as well, along with milk and other food. The visitors sat beneath the tree and ate.",
        "Then they asked: “Where is Sarah your wife?” Abraham answered: “Here, in the tent.” The LORD told Abraham that at about this time the following year Sarah would have a son.",
        "Sarah heard these words. It was difficult for her to believe them because she was already very old. She laughed to herself.",
        "Then the LORD said: “Why did Sarah laugh? … Is anything too hard for the LORD?” Sarah was afraid and said: “I did not laugh.” But He replied: “No, but you did laugh.” Afterward the visitors continued on their way.",
      ] },
      { title: "God Keeps His Promise", paragraphs: [
        "Time passed. Had God forgotten what He promised Abraham? No. God never forgets His promises.",
        "About a year later, exactly what God had said came true. Sarah gave birth to a son. They named him Isaac. What had once seemed impossible had now become reality.",
        "God said Abraham and Sarah would have a son — and God gave them a son. Abraham believed God’s promise. Sarah doubted at first, but she also came to believe.",
        "The Bible says of her: “She judged Him faithful who had promised.” Hebrews 11:11.",
        "Abraham had waited many years. But God was not late. God kept His word.",
        "And this was only one part of a much greater promise. God had told Abraham that through his descendants all the families of the earth would be blessed. Many generations would pass. And one day, from Abraham’s family line, Jesus Christ would be born.",
      ] },
    ],
    questions: ["What did God tell Abraham to leave?", "Why did Abraham begin the journey even though he did not know where he was going?", "What land did God show Abraham?", "What did God promise Abraham when He showed him the stars?", "Why did Sarah laugh when she heard that she would have a son?", "How did God show that He always keeps His promises?"],
    promise: { body: "God promised Abraham that through his family all the nations of the earth would be blessed. Abraham could not yet see how it would happen. But God already had a plan.", keyLine: "God always keeps His promises." },
    connection: { body: "God promised Abraham a son — and He gave him Isaac. But that was only part of a much bigger promise. God said that through Abraham’s family all the nations of the earth would be blessed. Many generations passed. Then one day, Jesus was born from Abraham’s family line. Through Jesus, God brought salvation not just to one family or one nation, but to people from all over the world.", keyLine: "Jesus is the fulfillment of God’s promise to Abraham." },
    familyChallenge: { intro: "God told Abraham: “And in you all the families of the earth shall be blessed.” Genesis 12:3.", instruction: "Today, become a blessing to someone else together as a family.", examplesLabel: "Make something small:", examples: ["cookies", "hot chocolate", "a card", "a small gift", "a warm note"], reflection: "Give it to a neighbor, friend, relative, or someone you want to encourage. Let the children help choose the person and prepare the gift.", ending: "As you do it, say:", prayer: "“God blesses us so we can bless others.”" },
    navigation: { section: "Section", of: "of", back: "Back", next: "Next", complete: "Complete Day 4", completed: "Day 4 complete", journeyContinues: "Your Advent journey continues.", backToJourney: "Back to Journey" },
  },
  ru: {
    dayLabel: "День 4",
    title: "Авраам — Божье обещание",
    subtitle: "Авраам поверил Богу и отправился в путь",
    sectionTitles: { scripture: "Писание", bibleStory: "Библейская история", questions: "Вопросы", promise: "Обещание", connection: "Связь с Иисусом", familyChallenge: "Семейное задание" },
    scripture: { verse: "«И благословятся в тебе все племена земные».", reference: "Бытие 12:3" },
    storyPages: [
      { title: "Бог призывает Авраама", paragraphs: [
        "После потопа людей на земле снова становилось всё больше. Но со временем большинство из них перестали поклоняться истинному Богу. Люди делали себе изображения богов из дерева, камня, серебра и золота и поклонялись им. Такие изображения назывались идолами.",
        "Но Бог решил призвать одного человека, который будет доверять Ему и служить Ему. Его звали Авраам.",
        "Авраам жил среди людей, поклонявшихся другим богам. Но однажды Господь сказал ему: «Пойди из земли твоей, от родства твоего и из дома отца твоего в землю, которую Я укажу тебе».",
        "Бог также дал Аврааму удивительное обещание: «Я произведу от тебя великий народ, и благословлю тебя… и благословятся в тебе все племена земные».",
        "Авраам не знал, куда именно ведёт его Бог. Но он поверил Богу и послушался. Библия говорит: «Верою Авраам повиновался призванию идти… и пошёл, не зная, куда идёт». Евреям 11:8.",
        "Вместе с Авраамом отправилась его жена Сарра. Они взяли с собой скот, слуг и своё имущество и отправились в долгий путь. В те времена у путешественников не было гостиниц и удобных домов вдоль дороги. Авраам и Сарра жили в шатрах, которые можно было разбирать и переносить с одного места на другое.",
        "После долгого путешествия они пришли в прекрасную землю. Это был Ханаан — земля, которую Бог обещал Аврааму и его потомкам.",
        "Авраам продолжал жить в шатре. В разных местах он строил жертвенники и поклонялся Господу. Окружавшие его народы служили идолам, но Авраам поклонялся истинному Богу. Он доверял Богу. Библия даже называет Авраама «другом Божиим». Иакова 2:23.",
      ] },
      { title: "Обещание под звёздами", paragraphs: [
        "Бог обещал, что от Авраама произойдёт великий народ. Но у Авраама и Сарры не было детей. Проходили годы. Авраам становился старше. Сарра тоже была уже в преклонном возрасте. С человеческой точки зрения казалось, что Божье обещание уже невозможно исполнить.",
        "Однажды ночью Бог вывел Авраама наружу и сказал: «Посмотри на небо и сосчитай звёзды, если ты можешь счесть их». Небо было усеяно звёздами. Их было так много, что Авраам не мог их сосчитать.",
        "Тогда Бог сказал: «Столько будет у тебя потомков». У Авраама всё ещё не было сына. Но он поверил Господу.",
        "Библия говорит: «Аврам поверил Господу, и Он вменил ему это в праведность». Бытие 15:6.",
      ] },
      { title: "Три путника", paragraphs: [
        "Однажды в жаркий день Авраам сидел у входа в свой шатёр. Вдруг он увидел трёх путников, приближавшихся к нему. Авраам побежал им навстречу и пригласил отдохнуть в тени дерева.",
        "Он предложил им воды, чтобы омыть ноги, и пищи, чтобы они подкрепились перед дальнейшим путешествием. Авраам поспешил к Сарре и попросил её приготовить хлеб. Также был приготовлен телёнок, молоко и другая пища. Гости сели под деревом и стали есть.",
        "Потом они спросили: «Где Сарра, жена твоя?» Авраам ответил: «Здесь, в шатре». Господь сказал Аврааму, что примерно через год у Сарры будет сын.",
        "Сарра услышала эти слова. Ей трудно было в это поверить, потому что она была уже очень старой. Она засмеялась про себя.",
        "Тогда Господь сказал: «Отчего это рассмеялась Сарра?.. Есть ли что трудное для Господа?» Сарра испугалась и сказала: «Я не смеялась». Но Он ответил: «Нет, ты рассмеялась». После этого гости продолжили свой путь.",
      ] },
      { title: "Бог исполняет Своё обещание", paragraphs: [
        "Прошло время. Забыл ли Бог то, что обещал Аврааму? Нет. Бог никогда не забывает Своих обещаний.",
        "Примерно через год произошло именно то, о чём Он сказал. Сарра родила сына. Его назвали Исааком. То, что раньше казалось невозможным, стало реальностью.",
        "Бог сказал, что у Авраама и Сарры будет сын — и Бог дал им сына. Авраам поверил Божьему обещанию. Сарра сначала сомневалась, но затем тоже поверила.",
        "Библия говорит о ней: «Она знала, что верен Обещавший». Евреям 11:11.",
        "Аврааму пришлось ждать много лет. Но Бог не опоздал. Бог исполнил Своё слово.",
        "И это была лишь часть гораздо большего обещания. Бог сказал Аврааму, что через его потомство благословятся все народы земли. Пройдёт много поколений. И однажды из рода Авраама родится Иисус Христос.",
      ] },
    ],
    questions: ["Что Бог сказал Аврааму оставить?", "Почему Авраам отправился в путь, хотя не знал, куда идёт?", "Какую землю Бог показал Аврааму?", "Что Бог обещал Аврааму, когда показал ему звёзды?", "Почему Сарра засмеялась, услышав, что у неё будет сын?", "Как Бог показал, что Он всегда исполняет Свои обещания?"],
    promise: { body: "Бог обещал Аврааму, что через его семью благословятся все народы земли. Авраам ещё не видел, как это произойдёт. Но у Бога уже был план.", keyLine: "Бог всегда исполняет Свои обещания." },
    connection: { body: "Бог обещал Аврааму сына — и дал ему Исаака. Но это была лишь часть гораздо большего обещания. Бог сказал, что через семью Авраама благословятся все народы земли. Прошло много поколений. И однажды из рода Авраама родился Иисус. Через Иисуса Бог принёс спасение не одной семье и не одному народу, а людям со всего мира.", keyLine: "Иисус — исполнение Божьего обещания Аврааму." },
    familyChallenge: { intro: "Бог сказал Аврааму: «И благословятся в тебе все племена земные». Бытие 12:3.", instruction: "Сегодня всей семьёй станьте благословением для кого-то другого.", examplesLabel: "Приготовьте вместе:", examples: ["печенье", "горячий шоколад", "открытку", "маленький подарок", "тёплую записку"], reflection: "Подарите это соседу, другу, родственнику или человеку, которого хотите поддержать. Пусть дети помогут выбрать человека и подготовить подарок.", ending: "Пока вы это делаете, скажите:", prayer: "«Бог благословляет нас, чтобы через нас благословлять других»." },
    navigation: { section: "Раздел", of: "из", back: "Назад", next: "Далее", complete: "Завершить День 4", completed: "День 4 завершён", journeyContinues: "Ваше адвент-путешествие продолжается.", backToJourney: "К путешествию" },
  },
};
