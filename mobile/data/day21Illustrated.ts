import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_TWENTY_ONE_ICONS = ADVENT_SECTION_ICONS;
export const DAY_TWENTY_ONE_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day20/story/01-queen.jpg"),
  require("../assets/advent/day20/story/02-mordecai-esther.jpg"),
  require("../assets/advent/day20/story/03-banquet.jpg"),
  require("../assets/advent/day20/story/04-mordecai-honored.jpg"),
];
export const DAY_TWENTY_ONE_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 21",
    "title": "Цариця Естер",
    "subtitle": "Сміливість заступитися за свій народ",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок із Різдвом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Естер 4:14",
      "verse": "«І хто знає, чи не на час, як оцей, досягла ти царської гідності?»"
    },
    "storyPages": [
      {
        "title": "Естер стає царицею",
        "paragraphs": [
          "Одного разу перський цар Артаксеркс дуже розгнівався на свою жінку за непослух і вигнав її геть із палацу. Незабаром цар наказав відібрати із усієї країни найгарніших дівчат і доставити їх до палацу. Цар хотів вибрати собі нову жінку. Серед дівчат, котрих привезли до палацу, була одна єврейка. Її звали Естер. По черзі дівчата входили до царя, і цар розмовляв з кожною з них.",
          "Прийшла черга й Естер. Коли вона увійшла до царя, він побачив, що Естер набагато гарніша від інших дівчат, а порозмовлявши з нею, він зрозумів, що вона і дуже розумна. І Артаксеркс женився з Естерою. Батьки Естери давно померли, і вона з раннього дитинства виховувалась у свого дядька Мордехая. Кожного ранку приходив тепер Мордехай до палацу, щоб дізнатися, як поживає цариця Естер.",
          "Одного разу, наближаючись до палацу, він побачив, що біля дверей палацу шепчуться двоє царських слуг. Приблизившись до них ближче, Мордехай почув, що цих двоє чоловіків домовляються убити царя. Мордехай негайно розповів про це Естері, і вона попередила свого чоловіка про небезпеку. Змовників стратили, а Мордехай за те, що він врятував життя цареві, був записаний у пам'ятну книгу.",
          "У царя Артаксеркса був друг, на ім'я Гаман. Кожного дня приходив Гаман до палацу, і всі люди низько кланялися, коли Гаман проходив мимо. Один тільки Мордехай не зустрічав Гамана поклоном. «Чому цей єврей не кланяється мені?» — злився Гаман. — Усіх цих євреїв треба знищити!» Прийшовши якось до царя, Гаман сказав: «Євреї не коряться тобі і не уважають тебе.",
          "Цей народ треба знищити. Доручи це мені!» Повіривши словам Гамана, Артаксеркс видав наказ, в якому було сказано, що всі євреї в країні мусять бути вбиті. Жах охопив євреїв, коли вони довідались про наказ царя, і вони почали молитися до Господа."
        ],
        "imageIndex": 0
      },
      {
        "title": "Сміливий вибір Естер",
        "paragraphs": [
          "Мордехай також дізнався про підступний задум Гамана. В розпачі пішов він до палацу. «Естер повинна дізнатися про це», — думав він. Естер, побачивши із вікон палацу йдучого Мордехая, запитала слугу: «Чому Мордехай такий сумний? Піди і приведи його до мене». Коли Мордехай прийшов, він все розповів цариці. «Естер, піди до царя!",
          "Можливо, він врятує євреїв від смерті». «Це неможливо, — відповіла Естер. — До царя можна входити тільки тоді, коли він сам покличе тебе». «І все ж таки ти повинна піти, — настоював Мордехай. — Адже як будуть убивати євреїв по всій країні, то уб'ють і тебе. Адже ти також єврейка». «Добре, я піду, — погодилась Естер. — Помолися за мене!»",
          "Потім, одівши свій найгарніший наряд і помолившись Господеві, Естер пішла до царя. Увійшовши в зал, де сидів цар, Естер зупинилась. Артаксеркс побачив її, але не розгнівався на неї за те, що вона прийшла до нього сама. Він дуже любив Естер. «Про що ти прийшла просити мене?» — запитав він свою жінку. «Приходь до мене сьогодні на бенкет із своїм другом Гаманом», — попросила жінка.",
          "Під час їди Артаксеркс знову запитав Естер: «Хіба ти не хочеш мене про що-небудь запитати?» «Приходь до мене і завтра разом із своїм другом Гаманом. Завтра я скажу тобі своє прохання»."
        ],
        "imageIndex": 1
      },
      {
        "title": "Мордехая вшановано",
        "paragraphs": [
          "Гаман був дуже радий: цариця у другий раз запрошувала його до себе. На другий день, прийшовши до палацу, Гаман побачив Мордехая. І єврей знову не вклонився Гаману. Ще більше розсердився Гаман. Тим часом вночі цар ніяк не міг заснути. «Почитай мені що-небудь», — попросив він слугу. Слуга взяв пам'ятну книгу і прочитав запис про те, як Мордехай врятував Артаксерксу життя. «Як я винагородив за це Мордехая?» — запитав цар. «Ніяк», — відповів слуга.",
          "Тепер Артаксеркс знав, що йому робити. Коли наступного дня Гаман прийшов до царя, щоб затвердити наказ про страту Мордехая і всіх євреїв, Артаксеркс запитав: «Як потрібно поводитися з чоловіком, який вірно і віддано служить цареві?» Гаман подумав, що цар говорить про нього, і він відповів: «Цей чоловік повинен проїхатися по всьому місті на царському коні, на голові у нього мусить бути царська корона, а сам він має бути одітий в царський одяг.",
          "Коня ж нехай веде один із царських помічників, і нехай кричить під час усієї дороги: „Так поводиться цар з тим, хто вірно служить йому!“» «Тоді піди і приведи до мене єврея Мордехая!» — наказав Артаксеркс. Жах охопив Гамана, коли він зрозумів, що не його цар хоче віддячити за службу, а єврея Мордехая. Але наказу царя не можна було не виконати.",
          "Мордехай сів на царського коня, на голові його була царська корона, а сам він був одітий в царський одяг. Гаман же вів коня за вуздечки по всьому місті і кричав: «Так поводиться цар з тим, хто вірно йому служить»."
        ],
        "imageIndex": 3
      },
      {
        "title": "Бог зберігає Свій народ",
        "paragraphs": [
          "Тоді Естер розказала цареві, що вона також єврейка. «Покарай чоловіка, який хотів погубити весь мій народ!» — попросила вона чоловіка. Тепер Артаксеркс зрозумів увесь підступний задум Гамана: Гаман хотів убити царицю також. Тому, коли Гаман повернувся до палацу, Артаксеркс наказав схопити його і вбити. Євреїв же ніхто не торкав.",
          "Так Бог попіклувався про Свій народ, зробивши Естеру царицею. А Мордехай став добрим другом царя."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Хто став новою царицею?",
      "Хто не хотів кланятися Гаманові?",
      "Що хотів Гаман зробити з євреями?",
      "Хто був покараний?",
      "Хто став добрим другом царя?",
      "Чому Естер вирішила ризикнути своїм життям?"
    ],
    "promise": {
      "body": "Бог обіцяє бути зі Своїм народом, зміцнювати його та допомагати йому. Ми можемо довіряти Богові навіть тоді, коли нам страшно.",
      "keyLine": "Бог обіцяє бути зі Своїм народом, зміцнювати його та допомагати йому. — Ісаї 41:10"
    },
    "connection": {
      "body": "Естер була готова ризикувати своїм життям, щоб заступитися за свій народ перед царем. Через неї Бог зберіг Свій народ від знищення. Ця історія нагадує нам про Ісуса Христа. Естер заступалася за людей перед земним царем, а Ісус Христос є нашим досконалим Заступником перед Небесним Отцем. Він не просто ризикував життям — Він добровільно віддав Своє життя, щоб спасти нас від гріха. На Різдво ми святкуємо прихід у світ Спасителя, Який прийшов спасти Свій народ.",
      "keyLine": "Ісус Христос — наш досконалий Заступник перед Небесним Отцем."
    },
    "familyChallenge": {
      "intro": "Сміливість Естер",
      "instruction": "Зробіть разом паперову корону Естер. На п’яти маленьких паперових смужках напишіть або намалюйте вчинки сміливості та добра: допомогти комусь, сказати правду, захистити слабшого, помолитися за когось, не боятися робити правильне. Прикріпіть смужки до корони. Нехай кожен член сім’ї вибере один вчинок, який зробить завтра.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помоліться разом",
      "prayer": "Господи, дай нам сміливість робити добро й заступатися за інших."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 21",
      "completed": "День 21 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 21",
    "title": "Queen Esther",
    "subtitle": "The Courage to Stand Up for Her People",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "The Christmas Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Esther 4:14 (NKJV)",
      "verse": "“Yet who knows whether you have come to the kingdom for such a time as this?”"
    },
    "storyPages": [
      {
        "title": "Esther Becomes Queen",
        "paragraphs": [
          "One day, the Persian king Ahasuerus became very angry with his wife because she had disobeyed him, and he sent her away from the palace. Soon afterward, the king ordered that the most beautiful young women from throughout the country be brought to the palace. He wanted to choose a new wife. Among the young women brought to the palace was a Jewish girl named Esther.",
          "One by one, the young women came before the king, and he spoke with each of them. Finally, it was Esther's turn. When she entered, the king saw that she was much more beautiful than the others. After speaking with her, he realized that she was also very wise. So the king married Esther. Esther's parents had died long ago, and she had been raised from childhood by her uncle Mordecai.",
          "Every morning, Mordecai came to the palace to find out how Queen Esther was doing. One day, as Mordecai approached the palace, he noticed two royal servants whispering near the entrance. When he came closer, he heard them planning to kill the king. Mordecai immediately told Esther, and she warned her husband about the danger.",
          "The conspirators were executed, and Mordecai's act of saving the king's life was recorded in the royal book of remembrance. King Ahasuerus had a friend named Haman. Every day Haman came to the palace, and everyone bowed low as he passed. Only Mordecai refused to bow before him. \"Why doesn't this Jew bow down to me?\" Haman asked angrily. \"All these Jews must be destroyed!\" One day Haman came to the king and said, \"The Jews do not obey you or respect you.",
          "These people must be destroyed. Let me take care of it!\" Believing Haman's words, Ahasuerus issued a decree that all the Jews in the kingdom were to be killed. The Jewish people were terrified when they learned about the king's decree, and they began praying to the Lord."
        ],
        "imageIndex": 0
      },
      {
        "title": "Esther’s Courageous Choice",
        "paragraphs": [
          "Mordecai also discovered Haman's wicked plan. In despair, he went to the palace. \"Esther must know about this,\" he thought. When Esther saw the sorrowful Mordecai from the palace window, she asked a servant, \"Why is Mordecai so sad? Go and bring him to me.\" When Mordecai arrived, he told the queen everything. \"Esther, go to the king!",
          "Perhaps he will save the Jews from death.\" \"That is impossible,\" Esther replied. \"No one may enter the king's presence unless the king himself calls for them.\" \"But you must go,\" Mordecai insisted. \"If the Jews throughout the kingdom are killed, you will be killed too, because you are also Jewish.\" \"All right, I will go,\" Esther agreed. \"Pray for me!\" Then Esther put on her most beautiful clothes, prayed to the Lord, and went to the king.",
          "When Esther entered the hall where the king was sitting, she stopped. Ahasuerus saw her, but he was not angry that she had come without being summoned. He loved Esther very much. \"What have you come to ask me?\" he asked his wife. \"Please come to a banquet today with your friend Haman,\" Esther replied. During the meal, Ahasuerus asked Esther again, \"Is there something you would like to ask me?\" \"Please come again tomorrow with your friend Haman.",
          "Tomorrow I will tell you my request.\""
        ],
        "imageIndex": 1
      },
      {
        "title": "Mordecai Is Honored",
        "paragraphs": [
          "Haman was delighted. The queen had invited him to a banquet for the second time! The next day, when Haman came to the palace, he saw Mordecai. Once again, the Jew refused to bow before him. Haman became even angrier. Meanwhile, during the night, the king could not sleep. \"Read something to me,\" he told a servant. The servant took the royal book of remembrance and read the account of how Mordecai had saved the king's life. \"How did I reward Mordecai for this?\" the king asked. \"You did not reward him,\" the servant answered.",
          "Now Ahasuerus knew what he wanted to do. When Haman came to the king the next day to seek approval for Mordecai's execution, the king asked him, \"How should a man who faithfully and loyally serves the king be honored?\" Haman thought the king was speaking about him. \"That man should ride through the city on the king's horse,\" he answered. \"He should wear a royal crown and royal clothing.",
          "One of the king's servants should lead the horse and proclaim throughout the city, 'This is how the king honors a man who serves him faithfully!'\" \"Then go and bring Mordecai the Jew to me!\" Ahasuerus commanded. Haman was horrified when he realized that the king wanted to honor Mordecai rather than him. But he could not disobey the king's command.",
          "Mordecai rode on the royal horse, wearing a crown and royal clothing. Haman led the horse by the reins throughout the city and proclaimed, \"This is how the king honors a man who serves him faithfully!\""
        ],
        "imageIndex": 3
      },
      {
        "title": "God Preserves His People",
        "paragraphs": [
          "Then Esther told the king that she, too, was Jewish. \"Punish the man who wanted to destroy my entire people!\" she begged her husband. Now Ahasuerus understood Haman's wicked plan. Haman had intended to kill even the queen. So when Haman returned to the palace, Ahasuerus ordered him to be seized and executed. The Jews were spared.",
          "God had cared for His people by making Esther queen, and Mordecai became a trusted friend of the king."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Who became the new queen?",
      "Who refused to bow before Haman?",
      "What did Haman want to do to the Jews?",
      "Who was punished?",
      "Who became a trusted friend of the king?",
      "Why did Esther decide to risk her life?"
    ],
    "promise": {
      "body": "God promises to be with His people, strengthen them, and help them. We can trust Him even when we are afraid.",
      "keyLine": "God promises to be with His people, strengthen them, and help them. — Isaiah 41:10"
    },
    "connection": {
      "body": "Esther was willing to risk her life to speak to the king on behalf of her people. Through her, God preserved His people from destruction. This story reminds us of Jesus Christ. Esther interceded for her people before an earthly king, but Jesus Christ is our perfect Intercessor before our heavenly Father. He did not merely risk His life — He willingly gave His life to save us from sin. At Christmas, we celebrate the coming of the Savior who came to save His people.",
      "keyLine": "Jesus Christ is our perfect Intercessor before our heavenly Father."
    },
    "familyChallenge": {
      "intro": "Esther’s Courage",
      "instruction": "Make a paper crown for Esther together. On five small paper strips, write or draw acts of courage and kindness: helping someone, telling the truth, defending someone who is weaker, praying for someone, and choosing to do what is right even when it is difficult. Attach the strips to the crown. Let every family member choose one action to do tomorrow.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Pray together",
      "prayer": "Lord, give us courage to do good and stand up for others."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 21",
      "completed": "Day 21 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 21",
    "title": "Царица Есфирь",
    "subtitle": "Смелость заступиться за свой народ",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Рождеством",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Есфирь 4:14 (Синодальный перевод)",
      "verse": "«И кто знает, не для такого ли времени ты и достигла достоинства царского?»"
    },
    "storyPages": [
      {
        "title": "Есфирь становится царицей",
        "paragraphs": [
          "Однажды персидский царь Артаксеркс очень рассердился на свою жену за непослушание и выгнал её из дворца. Вскоре царь приказал выбрать самых красивых девушек со всей страны и привести их во дворец. Царь хотел выбрать себе новую жену. Среди девушек, которых привели во дворец, была одна еврейка. Её звали Есфирь. По очереди девушки входили к царю, и царь разговаривал с каждой из них.",
          "Пришла очередь и Есфири. Когда она вошла к царю, он увидел, что Есфирь намного красивее других девушек, а поговорив с ней, понял, что она ещё и очень умная. И Артаксеркс женился на Есфири. Родители Есфири давно умерли, и она с раннего детства воспитывалась у своего дяди Мардохея. Каждое утро Мардохей приходил теперь ко дворцу, чтобы узнать, как поживает царица Есфирь.",
          "Однажды, приближаясь ко дворцу, он заметил, что возле дверей дворца шепчутся двое царских слуг. Подойдя ближе, Мардохей услышал, что эти двое мужчин договариваются убить царя. Мардохей немедленно рассказал об этом Есфири, и она предупредила своего мужа об опасности. Заговорщиков казнили, а о Мардохее, который спас жизнь царю, сделали запись в памятной книге.",
          "У царя Артаксеркса был друг по имени Аман. Каждый день Аман приходил во дворец, и все люди низко кланялись, когда он проходил мимо. Только Мардохей не кланялся Аману. «Почему этот еврей не кланяется мне?» — злился Аман. «Всех этих евреев нужно уничтожить!» Однажды Аман пришёл к царю и сказал: «Евреи не подчиняются тебе и не уважают тебя.",
          "Этот народ нужно уничтожить. Поручи это мне!» Поверив словам Амана, Артаксеркс издал указ, в котором говорилось, что все евреи в стране должны быть убиты. Ужас охватил евреев, когда они узнали о царском указе, и они начали молиться Господу."
        ],
        "imageIndex": 0
      },
      {
        "title": "Смелый выбор Есфири",
        "paragraphs": [
          "Мардохей тоже узнал о коварном замысле Амана. В отчаянии он пошёл ко дворцу. «Есфирь должна узнать об этом», — думал он. Есфирь, увидев из окон дворца печального Мардохея, спросила слугу: «Почему Мардохей такой грустный? Пойди и приведи его ко мне». Когда Мардохей пришёл, он всё рассказал царице. «Есфирь, пойди к царю! Возможно, он спасёт евреев от смерти». «Это невозможно, — ответила Есфирь. — К царю можно входить только тогда, когда он сам позовёт тебя». «И всё же ты должна пойти, — настаивал Мардохей. — Ведь если будут убивать евреев по всей стране, то убьют и тебя.",
          "Ведь ты тоже еврейка». «Хорошо, я пойду, — согласилась Есфирь. — Помолись за меня!» Затем, надев свой самый красивый наряд и помолившись Господу, Есфирь пошла к царю. Войдя в зал, где сидел царь, Есфирь остановилась. Артаксеркс увидел её, но не рассердился за то, что она пришла к нему сама. Он очень любил Есфирь. «О чём ты пришла просить меня?» — спросил он свою жену. «Приходи сегодня ко мне на пир со своим другом Аманом», — попросила она.",
          "Во время трапезы Артаксеркс снова спросил Есфирь: «Разве ты не хочешь попросить меня о чём-нибудь?» «Приходи ко мне и завтра вместе со своим другом Аманом. Завтра я скажу тебе свою просьбу»."
        ],
        "imageIndex": 1
      },
      {
        "title": "Мардохей почтён",
        "paragraphs": [
          "Аман был очень рад: царица во второй раз приглашала его к себе. На следующий день, придя во дворец, Аман увидел Мардохея. И еврей снова не поклонился Аману. Ещё больше рассердился Аман. Тем временем ночью царь никак не мог уснуть. «Почитай мне что-нибудь», — попросил он слугу. Слуга взял памятную книгу и прочитал запись о том, как Мардохей спас Артаксерксу жизнь. «Как я наградил за это Мардохея?» — спросил царь. «Никак», — ответил слуга.",
          "Теперь Артаксеркс знал, что ему делать. Когда на следующий день Аман пришёл к царю, чтобы утвердить приказ о казни Мардохея и всех евреев, Артаксеркс спросил: «Как следует поступить с человеком, который верно и преданно служит царю?» Аман подумал, что царь говорит о нём, и ответил: «Этот человек должен проехать по всему городу на царском коне, на его голове должна быть царская корона, а сам он должен быть одет в царскую одежду.",
          "Коня пусть ведёт один из царских помощников и пусть кричит на протяжении всего пути: \"Так поступает царь с тем, кто верно служит ему!\"» «Тогда пойди и приведи ко мне еврея Мардохея!» — приказал Артаксеркс. Ужас охватил Амана, когда он понял, что царь хочет наградить за службу не его, а еврея Мардохея. Но приказ царя нельзя было не исполнить.",
          "Мардохей сел на царского коня, на его голове была царская корона, а сам он был одет в царскую одежду. Аман же вёл коня за поводья по всему городу и кричал: «Так поступает царь с тем, кто верно служит ему!»"
        ],
        "imageIndex": 3
      },
      {
        "title": "Бог сохраняет Свой народ",
        "paragraphs": [
          "Тогда Есфирь рассказала царю, что она тоже еврейка. «Накажи человека, который хотел погубить весь мой народ!» — попросила она своего мужа. Теперь Артаксеркс понял весь коварный замысел Амана: Аман хотел убить и царицу. Поэтому, когда Аман вернулся во дворец, Артаксеркс приказал схватить его и казнить. Евреев же никто не тронул.",
          "Так Бог позаботился о Своём народе, сделав Есфирь царицей. А Мардохей стал добрым другом царя."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Кто стал новой царицей?",
      "Кто не хотел кланяться Аману?",
      "Что Аман хотел сделать с евреями?",
      "Кто был наказан?",
      "Кто стал добрым другом царя?",
      "Почему Есфирь решила рискнуть своей жизнью?"
    ],
    "promise": {
      "body": "Бог обещает быть со Своим народом, укреплять его и помогать ему. Мы можем доверять Богу даже тогда, когда нам страшно.",
      "keyLine": "Бог обещает быть со Своим народом, укреплять его и помогать ему. — Исаии 41:10"
    },
    "connection": {
      "body": "Есфирь была готова рискнуть своей жизнью, чтобы заступиться за свой народ перед царём. Через неё Бог сохранил Свой народ от уничтожения. Эта история напоминает нам об Иисусе Христе. Есфирь заступалась за людей перед земным царём, а Иисус Христос — наш совершенный Ходатай перед Небесным Отцом. Он не просто рисковал жизнью — Он добровольно отдал Свою жизнь, чтобы спасти нас от греха. На Рождество мы празднуем приход Спасителя, Который пришёл спасти Свой народ.",
      "keyLine": "Иисус Христос — наш совершенный Ходатай перед Небесным Отцом."
    },
    "familyChallenge": {
      "intro": "Смелость Есфири",
      "instruction": "Сделайте вместе бумажную корону Есфири. На пяти небольших бумажных полосках напишите или нарисуйте смелые и добрые поступки: помочь кому-нибудь, сказать правду, защитить слабого, помолиться за кого-то, не бояться поступать правильно. Прикрепите полоски к короне. Пусть каждый член семьи выберет один поступок, который совершит завтра.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, дай нам смелость делать добро и заступаться за других."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 21",
      "completed": "День 21 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};
