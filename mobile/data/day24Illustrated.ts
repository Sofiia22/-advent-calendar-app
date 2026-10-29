import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";
export const DAY_TWENTY_FOUR_ICONS = ADVENT_SECTION_ICONS;
export const DAY_TWENTY_FOUR_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day24/story/01-manger.jpg"),
  require("../assets/advent/day24/story/02-temple.jpg"),
  require("../assets/advent/day24/story/03-wise-men.jpg"),
  require("../assets/advent/day24/story/04-herod.jpg"),
];
export const DAY_TWENTY_FOUR_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 24",
    "title": "Народження Спасителя",
    "subtitle": "Ісус Христос — здійснення Божої обітниці",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з нашим життям",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Луки 2:1–40; Матвія 2:1–23. Для обітниці: Луки 2:10–11; Матвія 1:21. Порівняйте також Ісаї 9:6.",
      "verse": "Прочитайте разом зазначені уривки з Біблії."
    },
    "storyPages": [
      {
        "title": "Дитя в яслах — Луки 2:1–20",
        "paragraphs": [
          "Діва Марія повернулася до Назарету. Але невдовзі їй довелося знову вирушати в далеку дорогу. Цього разу вона йшла не сама, а разом з Йосипом, за якого була заручена. Їм потрібно було йти до міста Віфлеєма, записати там свої імена, тому що цар, званий кесарем Августом, наказав зробити перепис усіх людей на землі. Це робили для того, щоб усі сплатили подушне подаття. Йосип і Марія пішли до Віфлеєма, тому що колись це місто належало царю Давиду, вони були його нащадками.",
          "Прибувши до Віфлеєма, вони хотіли знайти собі місце на заїжджому дворі, але там не знайшлося жодного вільного місця. Тоді вони зупинилися в печері, де пастухи ховалися разом з вівцями вночі і під час негоди. В цій печері і народився обіцяний Богом Син. Діва Марія сповила Його, але не мала вона колиски, тому поклала Дитя в ясла. Ніхто з навколишніх не здогадувався, що це дивне Дитя лежало в яслах. Однак невдовзі це стало відомо пастухам, котрі стерегли свої гурти худоби на полі. Перед ними постав ангел Господній і повідомив їм, що Дитя сповите пелюшками в яслах — Спаситель світу.",
          "Ангел об'явив їм цю велику новину сяйвом слави Божої. Пастухи спочатку злякалися, але ангел сказав їм не боятися і сповістив велику радість для всього народу: у місті Давидовім народився Спаситель, Христос Господь. Раптом з ангелом з'явилося велике небесне воїнство, що славило Бога й проголошувало славу Богові на висоті та мир на землі. Ангели повернулися на небо, і навколо знову все огорнула пітьма. Пастухи сказали один одному: «Підемо до Віфлеєма, та побачимо Дитя, за яке нам звістив Господь». Вони поквапливо пішли і справді знайшли там Марію, Йосипа і Дитя у сповиточку, в яслах. Пастухи з захопленням серця підійшли до Дитини, знаючи, що це Син Божий, а потім розповіли батькам про все, що повідомили їм ангели.",
          "Вийшовши з печери, вони розповідали всім зустрічним людям про те, що трапилося тієї ночі. Почувши такі новини, всі дивувалися розповідям пастухів. Але Марія заховала ці слова в глибині свого серця, з ніжною любов'ю пригортаючи Дитя своє."
        ],
        "imageIndex": 0
      },
      {
        "title": "Дитина в храмі — Луки 2:21–40",
        "paragraphs": [
          "Божественне Дитя ще довго залишалося у Віфлеємі. Як минуло вісім днів, священик за законом обрізав Дитя і назвав Ісусом, іменем понад усіма іменами. «Ісус» означає «Спаситель». Коли Дитині сповнилося тридцять днів, Її перевезли до Єрусалиму, що знаходився на відстані семи миль від Віфлеєма. Мати Дитини мала принести жертву в чудовому Єрусалимському храмі.",
          "Вона принесла в жертву дві горлиці. Коли б вона була багатшою, то принесла б в жертву двоє ягнят; проте Марія була бідною, тому принесла лише дві горлиці, це було набагато дешевше. На руках вона тримала чисте і невинне Дитя, яке було первонародженим, тобто народженим першим сином її. Тому за законом Господнім Син повинен був присвячуватися Богу.",
          " Коли Марія і Йосип перебували на подвір'ї храму і передали принесених горлиць священикам, до них підійшов старенький Симеон. Він з нетерпінням очікував на пришестя Спасителя. Бог обіцяв йому, що він лише тоді помре, коли побачить Месію. Бог Дух Святий виявив йому, що Дитя Ісус знаходиться в храмі. З радісним серцем він зустрів Дитятко. Симеон взяв Його на руки, благословив Бога і сказав, що тепер готовий спокійно відійти, бо його очі побачили Боже спасіння — світло для народів і славу Ізраїлю.",
          "Він благословив батьків Його та сказав Марії, що Дитя стане знаком, проти якого говоритимуть, і що меч пройде крізь її душу. Пізніше до них підійшла одна вдова, яка була пророчицею; її звали Анна. Вона була вже старенькою, тому знала, що Дитя Ісус було Спасителем світу. Анна була вдовою протягом вісімдесяти чотирьох років, отже, на той час їй вже було близько ста років. Вона віддала належну шану Богові за Спасителя і, прославляючи Бога, всім розповідала про Його пришестя."
        ],
        "imageIndex": 1
      },
      {
        "title": "Мудреці — Матвія 2:1–11",
        "paragraphs": [
          "У віддаленій від Єрусалима країні жили декілька мудреців. Вони не були євреями — це були погани. В тій країні, де всі поклонялися ідолам, ці мудреці пізнали справжнього Бога і шанували Його. Мудреці спостерігали рух зірок на небі і знали імена зірок. Певного разу вони побачили на небі дивовижну зорю: такої вони ще досі не бачили. Це трапилося саме тієї ночі, коли народився в яслах Ісус Дитя, але вони нічого не знали про Божественне Хлоп'ятко. Бог відкрив їм очі, що в країні юдейській народився Цар, і саме в тому місці, над яким сяяла зоря. Тоді мудреці вирушили в неблизьку дорогу. Вони були дуже багатими, тому їхали на верблюдах; вони везли для новонародженого Дитятка дорогоцінні подарунки. Мудреці їхали дуже довго і нарешті приїхали до Єрусалима. Не відаючи, де знаходиться Дитя, вони запитували всіх зустрічних перехожих: «Де народжений Цар Юдейський? Бо ми бачили на сході зорю Його і прийшли поклонитися Йому».",
          "На той час в Єрусалимі жив старий цар. Це був гордий, жорстокий, дратівливий і нечесний чоловік. Ім'я його було Ірод. Дізнавшись про народження нового царя, Ірод стривожився; злякалися і всі його наближені. Вони задумали умертвити Дитя. Однак вони не знали, де Його шукати. Тому Ірод послав за священиками і вченими, котрих називали книжниками. Ці люди багато разів читали Біблію і добре знали Святе Письмо.",
          "Ірод сказав їм: «Де повинен народитися Цар, Син Божий, Котрого Бог обіцяв послати в цей світ?» Священики і книжники відповіли, що в Біблії сказано пророками, що Він народиться у Віфлеємі. Тоді Ірод послав за мудрецями; він покликав їх таємно, щоб запитати, коли вони побачили зорю. Мудреці відповіли, що бачили таку зорю дивовижну близько року тому.",
          "Ірод подумав, що Дитині вже близько року. Потім він розповів мудрецям, що Дитя повинно було народитися у Віфлеємі. Він звернувся до них з удавано щирим проханням: «Сходіть до Віфлеєму і розпитайте, де знаходиться Дитя, а коли знайдете Його, повідомте мені, щоб і я міг піти і поклонитися Йому». Мудреці гадали, що Ірод прихильно ставився до новонародженого Царя, а тому вирушили, щоб розказати йому, коли дізнаються. Вони не знали, що Ірод сказав неправду і задумав у душі своїй вбивство.",
          " Мудреці вирушили до Віфлеєма, гадаючи, що їм нелегко буде знайти Дитятко. Однак, поглянувши на небо, вони побачили ту саму зорю. Зоря рухалася попереду них, вказуючи їм шлях; нарешті вони прийшли і зупинилися над хатинкою, де знаходився маленький Ісус. Побачивши, що зоря зупинилася, мудреці зраділи невимовною радістю. Та радість їхня була ще сильнішою, коли вони побачили Дитя на руках у матері Марії. Впавши ниць, вони поклонилися Йому, і, вийнявши свої дорогоцінності, поклали до ніг Дитини: золото, ладан і смирну. Так вони показали свою любов до Дитини. Серця їхні палали любов'ю до Ісуса."
        ],
        "imageIndex": 2
      },
      {
        "title": "Жорстокий цар — Матвія 2:12–23",
        "paragraphs": [
          "Мудреці мали намір повернутися до Єрусалима і розповісти Іродові, що вони знайшли Дитя. Вони залишилися у Віфлеємі, і ось, до кожного з них промовив голос уві сні, кажучи: «Не повертайтеся до Єрусалима, щоб навідатися до Ірода, не розповідайте йому про Ісуса». Сприйнявши таке уві сні, волхви зовсім іншим шляхом поверталися на батьківщину. Вони залишили Віфлеєм з вічною радістю у своїх серцях, тому що вони бачили Спасителя.",
          "Ірод нетерпляче очікував на повернення мудреців до Єрусалима. Довго він чекав, аж нарешті почув, що вони іншим шляхом повернулися на батьківщину, але там він вже не міг їх шукати. Цар сильно розгнівався, бо тепер він вже не знав, де шукати Дитину-Царя, і як він міг би Його вбити. Тоді він наказав повбивати всіх малюків у Віфлеємі і по всій околиці міста, котре він шукав. Однак Господь не допустив, щоб Ірод убив Його Сина.",
          "Ангел Господній з'явився Йосипові уві сні і сказав йому: «Вставай, бери Дитя і матір Його, і тікай до Єгипту; перебувай там, поки я тобі скажу: Ірод шукає Дитину, щоб умертвити Її». Йосип негайно піднявся, хоч надворі була ще ніч, взяв Дитя і матір Його, посадив їх на віслюка, і вони поїхали до Єгипту. На світанку їх не міг побачити вже ніхто; Йосип тихо, непомітно виїхав з Віфлеєму, так що потім так і не дізналися, куди він повіз Дитя.",
          "Невдовзі воїни прийшли до Віфлеєма, забрали дітей у матерів і повбивали їх мечами. Місто наповнилося дитячим плачем і голосінням їхніх матерів. Дитя Ісус був на той час в безпеці в Єгипті. Невдовзі потому жорстокий цар, котрий знищив стільки невинних дітей, помер в агонії від жахливої хвороби: він був живим з'їдений черв'яками. Тоді ангел Господній з'явився уві сні Йосипові і сказав йому: «Підіймайся, бери Дитя і Його матір і повертайся на землю ізраїльську, тому що Ірод і ті, що шукали Дитя, натрапили на його життя, вже померли».",
          "Йосип встав, взяв Дитя і матір Його і вирушив до Ізраїлю. Він з радістю залишив землю поганську, бо йому так хотілося жити поблизу Єрусалима, тому що там знаходився храм Господній; але почувши, що там в Юдеї царює син Ірода Архелай, страшився йти туди. Він не знав, що йому робити, допоки ангел не сказав йому уві сні, що йому потрібно йти до міста Назарета, де жила до заміжжя діва Марія. В цьому місті жив і виховувався Божественний Хлопчик. Йосип заробляв собі на хліб, працюючи теслею. Син Божий частенько був разом з ним, спостерігаючи за його роботою, допомагав йому різати дошки і забивати цвяхи. Із такого ж молодого дерева пізніше був зроблений хрест, на якому розіп'яли Його; і цвяхи пробили тоді благословенні руки і ноги Спасителя."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Чому Йосип і Марія вирушили до Віфлеєма?",
      "Де народився Ісус і куди Марія поклала Немовля?",
      "Хто сповістив пастухам про народження Спасителя?",
      "Що зробили пастухи, коли почули добру звістку?",
      "Хто зустрів Ісуса в храмі і чому вони раділи?",
      "Яку незвичайну зорю побачили мудреці й що вони подарували Ісусу?",
      "Чому Ірод хотів знайти Дитину і як Бог захистив Ісуса?",
      "Куди Йосип повів Марію й Ісуса після повернення з Єгипту?"
    ],
    "promise": {
      "body": "Бог виконав Свою обітницю послати Спасителя. «Сьогодні в Давидовім місті народився для вас Спаситель, Який є Христос Господь» (Луки 2:11, зміст вірша). Ця звістка нагадує: Бог вірний Своєму слову.",
      "keyLine": "Бог виконав Свою обітницю послати Спасителя."
    },
    "connection": {
      "body": "Ісус народився не в царському палаці, а в бідних обставинах. Звістку про Нього першими почули звичайні пастухи, а мудреці прийшли з далекої країни. Бог послав Спасителя для людей різного походження. Як Симеон, ми можемо радіти Божому спасінню; як пастухи — розповідати про Ісуса; як мудреці — виявляти Йому пошану.",
      "keyLine": "Радіймо Божому спасінню, розповідаймо про Ісуса й шануймо Його."
    },
    "familyChallenge": {
      "intro": "Народився Спаситель",
      "instruction": "Прочитайте разом Луки 2:10–11. Нехай кожен із родини назве одну причину, чому народження Ісуса є доброю звісткою. Намалюйте або зробіть невелику різдвяну листівку зі словами «Народився Спаситель» та подаруйте її комусь.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помоліться разом",
      "prayer": "Господи, дякуємо за Ісуса Христа, нашого Спасителя. Допоможи нам любити й шанувати Його."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 24",
      "completed": "День 24 завершено",
      "journeyContinues": "Адвент-подорож завершена. Радіймо народженню Спасителя!",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 24",
    "title": "The Birth of the Savior",
    "subtitle": "Jesus Christ — God’s Promise Fulfilled",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection to Our Lives",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Luke 2:1–40; Matthew 2:1–23. Promise passages: Luke 2:10–11; Matthew 1:21. Compare Isaiah 9:6.",
      "verse": "Read these Bible passages together."
    },
    "storyPages": [
      {
        "title": "The Baby in the Manger — Luke 2:1–20",
        "paragraphs": [
          "Mary returned to Nazareth, but soon she had to make another long journey. This time she traveled with Joseph, the man to whom she was engaged. They had to go to Bethlehem to register their names because Caesar Augustus had ordered a census. Joseph and Mary went to Bethlehem because it was the city of King David, from whose family they came.",
          "When they arrived, they tried to find a place to stay, but there was no room for them at the lodging place. They stayed where shepherds sheltered their sheep at night or in bad weather. There the Son whom God had promised was born. Mary wrapped Him in cloths. Since she had no cradle, she laid Him in a manger. The people nearby did not yet know who this Child was.",
          "That night shepherds were keeping watch over their flocks in the fields. Suddenly an angel of the Lord appeared, and the glory of the Lord shone around them. They were frightened. The angel told them not to be afraid, because he brought good news of great joy for all people: in the city of David a Savior had been born, Christ the Lord. They would find the Baby wrapped in cloths and lying in a manger. Then a multitude of heavenly angels appeared, praising God and proclaiming glory to God in the highest and peace on earth.",
          "After the angels departed, the shepherds decided to go to Bethlehem and see what the Lord had made known to them. They hurried there and found Mary, Joseph, and the Baby lying in the manger. They told everyone what the angel had said about Him. People marveled when they heard the shepherds' report. Mary, however, treasured these things in her heart and lovingly cared for her Child."
        ],
        "imageIndex": 0
      },
      {
        "title": "The Child in the Temple — Luke 2:21–40",
        "paragraphs": [
          "The holy Child remained for a time in Bethlehem. On the eighth day He was circumcised according to the Law and given the name Jesus, meaning Savior. At the appointed time, Mary and Joseph brought Him to the temple in Jerusalem, not far from Bethlehem. Mary was to bring an offering as the Law commanded. Because she was poor, she brought two birds instead of a more costly sacrifice.",
          "Jesus was her firstborn son, and the Law taught that a firstborn son was to be dedicated to the Lord. While Mary and Joseph were at the temple, an elderly man named Simeon approached them. He had been waiting for the promised Savior. The Holy Spirit had revealed to him that he would not die before seeing the Lord's Messiah, and the Spirit led him into the temple. Simeon took the Baby in his arms and praised God. He said that he could now depart in peace, for his eyes had seen God's salvation, a light for the nations and the glory of Israel. He blessed the parents and told Mary that sorrow would pierce her own soul.",
          "An elderly prophetess named Anna also came near. She had been a widow for many years and devoted herself to prayer and worship. She recognized the significance of the Child, thanked God, and spoke about Him to all who were waiting for Jerusalem's redemption."
        ],
        "imageIndex": 1
      },
      {
        "title": "The Wise Men — Matthew 2:1–11",
        "paragraphs": [
          "In a land far from Jerusalem there lived several wise men. They were not Jewish and lived among people who worshiped idols, yet they had come to honor the true God. They studied the stars. One day they noticed an extraordinary star unlike any they had seen. It appeared around the time Jesus was born. They understood that a King had been born in Judea, so they set out on a long journey carrying precious gifts. Traveling on camels, they finally reached Jerusalem and asked, “Where is He who has been born King of the Jews? We have seen His star and have come to worship Him.”",
          "King Herod ruled Jerusalem then. He was proud, cruel, and easily angered. The news of another king troubled him. He gathered the chief priests and teachers of the Law, who knew the Scriptures and told him that the promised Ruler was to be born in Bethlehem, as the prophets had foretold. Herod secretly questioned the wise men about when the star had appeared. Then he sent them to Bethlehem, pretending that he, too, wanted to worship the Child. In fact, Herod intended to kill Him. The wise men did not know his evil plan.",
          "As they traveled, they saw the star again. It went before them and stopped over the place where the Child was. They rejoiced with great joy. Entering the house, they saw the young Child with Mary His mother. They fell down and worshiped Him, then opened their treasures and presented gifts of gold, frankincense, and myrrh. In this way they showed their love and honor for Jesus."
        ],
        "imageIndex": 2
      },
      {
        "title": "The Cruel King — Matthew 2:12–23",
        "paragraphs": [
          "The wise men had planned to return to Jerusalem to tell Herod where they had found Jesus. But God warned them in a dream not to return to Herod, so they traveled home by another route. They left with joy in their hearts because they had seen the Savior. Herod waited for the wise men and became furious when he learned that they had not returned. He did not know where to find Jesus. He ordered the killing of the little boys in Bethlehem and its surrounding area who were two years old and younger. But the Lord protected His Son. An angel appeared to Joseph in a dream, telling him to take the Child and His mother and escape to Egypt, because Herod wanted to destroy the Child.",
          "Joseph arose during the night, took Mary and Jesus, and set off for Egypt. They escaped before the soldiers came. Terrible sorrow fell on Bethlehem as innocent children were killed and their mothers wept. Meanwhile Jesus was safe in Egypt. After some time Herod died. An angel appeared again to Joseph in a dream and told him to return to the land of Israel, because those who had sought the Child's life were dead. Joseph took his family back, but when he heard that Herod's son Archelaus was ruling Judea, he was afraid to settle there. After another warning in a dream, he moved with Mary and Jesus to Nazareth.",
          "Jesus grew up there. Joseph worked as a carpenter, and the young Jesus could watch him work and help in the home. In that ordinary town, the Savior of the world grew. Later He would suffer on the cross for the people He came to save."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Why did Joseph and Mary travel to Bethlehem?",
      "Where was Jesus born, and where did Mary lay Him?",
      "Who announced the Savior’s birth to the shepherds?",
      "What did the shepherds do when they heard the good news?",
      "Who welcomed Jesus in the temple?",
      "What unusual star did the wise men see, and what gifts did they bring?",
      "Why did Herod look for the Child, and how did God protect Jesus?",
      "Where did the family settle after returning from Egypt?"
    ],
    "promise": {
      "body": "God kept His promise to send a Savior. The angel announced that a Savior, Christ the Lord, had been born in David’s city (Luke 2:11, paraphrase). God is faithful to His word.",
      "keyLine": "God kept His promise to send a Savior."
    },
    "connection": {
      "body": "Jesus was born in humble surroundings, not a palace. Ordinary shepherds first heard the joyful announcement, while wise men came from far away. God sent the Savior for people from every background. Like Simeon, we can rejoice in God’s salvation; like the shepherds, we can tell others about Jesus; and like the wise men, we can honor Him.",
      "keyLine": "Rejoice in God’s salvation, tell others about Jesus, and honor Him."
    },
    "familyChallenge": {
      "intro": "The Savior Is Born",
      "instruction": "Read Luke 2:10–11 together. Ask each family member to share one reason Jesus’ birth is good news. Make a small card that says “The Savior Is Born” and give it to someone.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Pray together",
      "prayer": "Lord, thank You for Jesus Christ, our Savior. Help us love and honor Him."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 24",
      "completed": "Day 24 completed",
      "journeyContinues": "Your Advent journey is complete. Rejoice in the birth of the Savior!",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 24",
    "title": "Рождение Спасителя",
    "subtitle": "Иисус Христос — исполнение Божьего обещания",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с нашей жизнью",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Луки 2:1–40; Матфея 2:1–23. Обетование: Луки 2:10–11; Матфея 1:21. Также Исаии 9:6.",
      "verse": "Прочитайте вместе указанные отрывки из Библии."
    },
    "storyPages": [
      {
        "title": "Младенец в яслях — Луки 2:1–20",
        "paragraphs": [
          "Дева Мария возвратилась в Назарет, но вскоре ей опять пришлось отправиться в дальний путь. На этот раз она шла не одна, а вместе с Иосифом, с которым была обручена. Им нужно было пойти в Вифлеем и записать там свои имена: кесарь Август приказал провести перепись населения. Иосиф и Мария отправились именно в Вифлеем, потому что это был город царя Давида, потомками которого они являлись.",
          "Придя в Вифлеем, они искали место для ночлега, но в гостинице уже не осталось свободного места. Они остановились там, где пастухи могли укрываться вместе с овцами от непогоды. Именно там родился обещанный Богом Сын. Мария спеленала Младенца и, не имея колыбели, положила Его в ясли. Никто из людей вокруг ещё не догадывался, Кто родился.",
          "Но неподалёку пастухи ночью стерегли стада. Вдруг пред ними явился ангел Господень, и слава Господня осияла их. Пастухи испугались. Ангел сказал, чтобы они не боялись: он принёс весть о великой радости для всего народа. Сегодня в городе Давидовом родился Спаситель — Христос Господь. Знаком для них будет Младенец, лежащий в яслях.",
          "Внезапно с ангелом появилось множество небесного воинства, славившего Бога: слава Богу на высоте и мир на земле. Когда ангелы возвратились на небо, пастухи решили пойти в Вифлеем и увидеть то, о чём им сообщил Господь. Они поспешили, нашли Марию, Иосифа и Младенца в яслях и рассказали о том, что им было открыто. Выйдя оттуда, они стали рассказывать людям о случившемся ночью. Слышавшие дивились рассказу пастухов. А Мария сохраняла услышанные слова в своём сердце, с любовью заботясь о своём Ребёнке."
        ],
        "imageIndex": 0
      },
      {
        "title": "Младенец в храме — Луки 2:21–40",
        "paragraphs": [
          "Божественный Младенец ещё некоторое время оставался в Вифлееме. На восьмой день Он был обрезан по закону и получил имя Иисус, означающее «Спаситель». Спустя положенное законом время Мария и Иосиф принесли Его в Иерусалимский храм, находившийся недалеко от Вифлеема. Мария должна была принести установленную законом жертву. Будучи бедной, она принесла двух горлиц вместо более дорогой жертвы.",
          "Иисус был её первенцем, и по Господнему закону первенца надлежало посвятить Богу. Пока Мария и Иосиф были в храме, к ним подошёл старец Симеон. Он ожидал пришествия Спасителя, а Святой Дух дал ему знать, что он не умрёт прежде, чем увидит Христа Господня. По внушению Духа он пришёл в храм, взял Младенца на руки и возблагодарил Бога. Симеон сказал, что теперь может отойти с миром, потому что увидел Божье спасение, свет для народов и славу Израиля. Он благословил родителей Младенца и сказал Марии о скорби, которая коснётся её сердца.",
          " К ним подошла и пожилая пророчица Анна, которая много лет была вдовой и проводила время в посте и молитве. Она тоже узнала в Младенце обещанного Избавителя, славила Бога и говорила о Нём всем ожидавшим избавления в Иерусалиме."
        ],
        "imageIndex": 1
      },
      {
        "title": "Мудрецы — Матфея 2:1–11",
        "paragraphs": [
          "В далёкой от Иерусалима стране жили мудрецы. Они не были иудеями и жили среди людей, поклонявшихся идолам, но знали и чтили истинного Бога. Наблюдая за звёздами, они однажды заметили на небе необыкновенную звезду. Она появилась во время рождения Иисуса. Бог дал им понять, что в Иудее родился Царь. Мудрецы отправились в далёкий путь, взяв дорогие дары. Они ехали на верблюдах и наконец достигли Иерусалима. Не зная, где найти Младенца, они спрашивали: «Где родившийся Царь Иудейский? Мы видели Его звезду и пришли поклониться Ему».",
          "В то время в Иерусалиме царствовал Ирод — жестокий, гордый и раздражительный правитель. Услышав о рождении нового Царя, он встревожился и собрал первосвященников и книжников. Они знали Писание и сказали, что обещанный Правитель должен родиться в Вифлееме, как предсказывали пророки. Ирод тайно позвал мудрецов и узнал от них, когда явилась звезда. Он отправил их в Вифлеем, притворно попросив разузнать о Ребёнке, а затем сообщить ему, будто и сам хочет поклониться Младенцу. Но в действительности Ирод хотел Его убить. Мудрецы об этом не знали.",
          "Выйдя из Иерусалима, они опять увидели ту же звезду. Она шла впереди них и остановилась над местом, где был Младенец. Мудрецы чрезвычайно обрадовались. Войдя в дом, они увидели Дитя с Марией, Его матерью, пали ниц и поклонились Ему. Затем раскрыли свои сокровища и принесли золото, ладан и смирну. Так они выразили любовь и почтение к Иисусу."
        ],
        "imageIndex": 2
      },
      {
        "title": "Жестокий царь — Матфея 2:12–23",
        "paragraphs": [
          "Мудрецы собирались вернуться в Иерусалим и рассказать Ироду, где нашли Младенца. Но Бог предупредил их во сне, чтобы они не возвращались к Ироду. Поэтому они отправились в свою страну другим путём, с радостью сохраняя в сердцах воспоминание о Спасителе. Ирод долго ждал их, но, узнав, что они не вернулись, сильно разгневался. Он не знал, где искать Иисуса, и приказал убить в Вифлееме и его окрестностях всех мальчиков двух лет и младше. Но Господь сохранил Своего Сына: ангел Господень явился Иосифу во сне и повелел взять Младенца с матерью и бежать в Египет, потому что Ирод хочет погубить Его.",
          "Иосиф встал ночью, взял Марию и Иисуса и отправился в Египет. Они успели уйти до прихода воинов. В Вифлееме произошла ужасная беда: были убиты невинные дети, и матери плакали о них. Иисус же находился в безопасности в Египте. Спустя некоторое время Ирод умер. Тогда ангел опять явился Иосифу во сне и велел вернуться в землю Израилеву, потому что умерли искавшие жизни Младенца. Иосиф  отправился обратно, но, узнав, что в Иудее правит сын Ирода Архелай, побоялся оставаться там. Получив предупреждение во сне, он поселился с семьёй в Назарете.",
          "Там Иисус рос. Иосиф работал плотником; мальчик мог наблюдать за его работой и помогать ему. Так в тишине обычного дома рос Тот, Кто пришёл стать Спасителем мира. Позднее Иисус пострадает на кресте за людей, ради спасения которых Он родился."
        ],
        "imageIndex": 3
      }
    ],
    "questions": [
      "Почему Иосиф и Мария отправились в Вифлеем?",
      "Где родился Иисус и куда Мария положила Младенца?",
      "Кто сообщил пастухам о рождении Спасителя?",
      "Что сделали пастухи, услышав благую весть?",
      "Кто встретил Иисуса в храме?",
      "Какую звезду увидели мудрецы и какие дары они принесли?",
      "Почему Ирод искал Младенца и как Бог защитил Иисуса?",
      "Где поселилась семья после возвращения из Египта?"
    ],
    "promise": {
      "body": "Бог исполнил обещание послать Спасителя. «Сегодня в городе Давидовом родился вам Спаситель, Который есть Христос Господь» (Луки 2:11, передача смысла). Бог верен Своему слову.",
      "keyLine": "Бог исполнил обещание послать Спасителя."
    },
    "connection": {
      "body": "Иисус родился не во дворце, а в скромных обстоятельствах. Первыми радостную весть услышали обычные пастухи, а мудрецы пришли из далёкой страны. Бог послал Спасителя для разных людей. Подобно Симеону, мы можем радоваться Божьему спасению; подобно пастухам — рассказывать об Иисусе; подобно мудрецам — почитать Его.",
      "keyLine": "Будем радоваться Божьему спасению, рассказывать об Иисусе и почитать Его."
    },
    "familyChallenge": {
      "intro": "Родился Спаситель",
      "instruction": "Прочитайте всей семьёй Луки 2:10–11. Пусть каждый назовёт причину, почему рождение Иисуса — радостная весть. Сделайте маленькую открытку со словами «Родился Спаситель» и подарите её кому-нибудь.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, благодарим за Иисуса Христа, нашего Спасителя. Помоги нам любить и почитать Его."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 24",
      "completed": "День 24 завершён",
      "journeyContinues": "Адвент-путешествие завершено. Радуемся рождению Спасителя!",
      "backToJourney": "К путешествию"
    }
  }
};

