import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_SEVENTEEN_ICONS = ADVENT_SECTION_ICONS;
export const DAY_SEVENTEEN_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day17/story/01-storm.jpg"),
  require("../assets/advent/day17/story/02-fish-prayer.jpg"),
  require("../assets/advent/day17/story/03-plant.jpg"),
  require("../assets/advent/day17/story/04-nineveh.jpg"),
];
export const DAY_SEVENTEEN_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 17",
    "title": "Бог посилає Йону в Ніневію",
    "subtitle": "Послух, покаяння та Боже милосердя",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Йони 4:2",
      "verse": "«Бо я знав, що Ти Бог милостивий та милосердий, довготерпеливий та многомилостивий, і Ти жалкуєш за зло»."
    },
    "storyPages": [
      {
        "title": "Втеча Йони та буря",
        "paragraphs": [
          "Йона був слугою Господа, і Бог доручив йому дуже трудне завдання. Але Йона не зразу виконав його. Слухай, як це було. Одного разу Бог сказав: «Йона, вставай, іди в Ніневію і скажи жителям цього міста, що їхні злі вчинки дійшли до Мене». Якщо вони не розкаються у своїх гріхах, то загинуть.",
          "Ця подорож була дуже небезпечна, тому що жителі Ніневії були завзятими ворогами ізраїльтян. Йона знав, що Бог дуже гнівається на жителів Ніневії за їхні гріхи. Але він думав: «Я не піду в Ніневію. Адже її жителі можуть убити мене за такі слова, а я не хочу помирати». І він утік. Йона попрямував до великого міста на березі моря, прийшов у порт, де стояло багато кораблів, і почав шукати корабель, на якому міг би відплисти подалі від Бога. Побачивши, що один корабель готовий до відплиття, він підійшов до його капітана і попросив: «Візьміть мене, будь ласка, із собою». Капітан погодився. Йона заплатив за проїзд, і корабель відплив.",
          "Після цього Йона спустився в трюм і заснув. Бог побачив, що Йона не виконав Його наказу, і послав на море страшний шторм. Корабель шпурляло на високих хвилях, як тріску. Хвилі з гуркотом ударялися об борт судна, і вода захльостувала палубу. Капітан і його моряки дуже перелякалися: вода все більше заливала корабель, і вони не встигали її відкачувати. Люди почали молитися до своїх богів і просили, щоб вони припинили шторм. Але вони поклонялися ідолам, а ідоли не могли цього зробити.",
          "Йона міцно спав у трюмі й нічого не знав про шторм. Капітан розбудив його і запитав: «Як ти можеш спати? Вставай скоріше і молися до свого Бога! Може, Він нам допоможе». Але Йона знав, що втік від Божого доручення. «Хтось із нас згрішив, — говорили люди на кораблі один одному. — І тепер за це на нас посланий шторм». Тоді вони вирішили кинути жереб, щоб знайти винуватого. Жереб указав на Йону. «Що ж нам робити з тобою?» — запитали люди Йону. «Викиньте мене за борт, — відповів він, — і шторм припиниться».",
          "Але ніхто не хотів цього робити. Моряки спробували спрямувати корабель до берега. Вони веслували щосили, але це не допомогло: вітер був дуже сильний. Тоді люди почали молитися до Господа, Бога Йони, щоб Господь не покарав їх за те, що вони кинуть Йону в море. Потім моряки взяли Йону й кинули в море. І сталося велике чудо: шторм стих, і море знову стало тихим та спокійним. Моряки побачили силу Господа, злякалися Його й принесли Йому жертву та дали обітниці."
        ],
        "imageIndex": 0
      },
      {
        "title": "Молитва у великій рибі",
        "paragraphs": [
          "Коли Йона опинився у воді, велика риба, яку послав Господь, проковтнула його. В одну мить Йона опинився в животі риби, у цілковитій темноті. Йона залишився живий, але йому ще треба було побувати в Ніневії! Розгублений Йона тепер зрозумів, наскільки він завинив перед Богом, і почав молитися. Він просив у Бога допомоги й дякував Йому за спасіння. Три дні й три ночі Йона перебував у животі риби. А потім, за Божим наказом, риба виплюнула його на сушу."
        ],
        "imageIndex": 1
      },
      {
        "title": "Покаяння Ніневії",
        "paragraphs": [
          "Тепер Йона вирішив виконати доручення Бога й пішов до Ніневії. Це була довга подорож. Нарешті Йона побачив велике місто. Увійшовши в місто, Йона ходив вулицями й вигукував: «Ще сорок днів — і Ніневія буде зруйнована!» Жителі Ніневії дуже налякалися. Вони повірили Богові, оголосили піст і вдягли мішковину як знак покаяння. Коли звістка дійшла до царя, він зняв свій царський одяг, одягнув мішковину і сів на попелі. Він наказав, щоб усі люди, і навіть тварини, постили; люди мали щиро кликати до Бога й відвернутися від своїх злих учинків.",
          "«Хто знає, може, Господь помилує нас?» — говорив цар. І Бог побачив, що вони відвернулися від свого зла, та не знищив Ніневію."
        ],
        "imageIndex": 3
      },
      {
        "title": "Урок Божого милосердя",
        "paragraphs": [
          "Йона дуже розгнівався, побачивши це. Він сказав Богові: «Я знав, що Ти милостивий і не хочеш знищувати цих людей. Тому я й не хотів сюди йти». Він так засмутився, що навіть просив для себе смерті. Йона вийшов із міста, сів на схід від нього й чекав, що буде з Ніневією. Світило гаряче сонце. Господь звелів вирости рослині, щоб вона дала Йоні затінок.",
          "Побачивши її, Йона дуже зрадів. Та наступного дня Бог послав черв'яка, який підточив рослину, і вона засохла. Коли зійшло сонце, Бог послав спекотний східний вітер. Йоні було так важко від спеки, що він знову сказав, що йому краще померти. Тоді Бог запитав: «Чи слушно ти розгнівався через рослину?» Йона відповів, що розгнівався дуже сильно.",
          "Тоді Господь сказав: «Ти пожалів рослину, над якою не трудився і яку не вирощував. Вона виросла за одну ніч і за одну ніч загинула. А хіба Я не повинен пожаліти велике місто Ніневію, у якому живе понад сто двадцять тисяч людей, які не вміють відрізнити правої руки від лівої, і багато худоби?»",
          "На цьому закінчується біблійна книга Йони. Нам не повідомляється, що Йона відповів Богові або що зробив далі. Останнє запитання показує, наскільки велике Боже милосердя до людей."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Яке доручення Бог дав Йоні?",
      "Чому Йона не захотів іти до Ніневії?",
      "Що сталося з кораблем під час бурі?",
      "Як Бог урятував Йону в морі?",
      "Скільки днів Йона перебував усередині великої риби?",
      "Що зробили жителі Ніневії, почувши попередження?",
      "Чому Йона розсердився, коли Бог помилував місто?",
      "Чого Бог хотів навчити Йону через рослину?"
    ],
    "promise": {
      "body": "Бог милостивий і готовий простити тих, хто щиро кається та звертається до Нього. Він побачив покаяння жителів Ніневії та виявив до них милість.",
      "keyLine": "Бог милостивий і готовий простити тих, хто щиро кається."
    },
    "connection": {
      "body": "Йона провів три дні й три ночі всередині великої риби. Ісус використав цю подію, щоб указати на Свою смерть і воскресіння (Матвія 12:40). Йона приніс звістку про покаяння Ніневії, а Ісус Христос прийшов принести спасіння людям усього світу.",
      "keyLine": "Ісус Христос прийшов принести спасіння людям усього світу."
    },
    "familyChallenge": {
      "intro": "«Милосердя замість образи».",
      "instruction": "Сядьте разом усією сім’єю. Поговоріть про те, чому Йона хотів покарання для Ніневії, а Бог проявив милосердя. Нехай кожен подумає, чи є людина, яку йому важко пробачити. Обговоріть один конкретний спосіб проявити доброту та милосердя до цієї людини. Завершіть спільною молитвою, просячи Бога навчити вас прощати.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Головна думка: Бог виявив милість до нас, тому й ми повинні бути милосердними до інших.",
      "ending": "Помоліться разом",
      "prayer": "Господи, навчи нас прощати й бути милосердними до інших."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 17",
      "completed": "День 17 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 17",
    "title": "God Sends Jonah to Nineveh",
    "subtitle": "Obedience, Repentance, and God’s Mercy",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Jonah 4:2 (NKJV, excerpt)",
      "verse": "“For I know that You are a gracious and merciful God, slow to anger and abundant in lovingkindness, One who relents from doing harm.”"
    },
    "storyPages": [
      {
        "title": "Jonah’s Flight and the Storm",
        "paragraphs": [
          "Jonah was a servant of the Lord, and God gave him a very difficult task. But Jonah did not obey immediately. Listen to what happened. One day God said, “Jonah, get up and go to Nineveh. Tell the people of that city that their wickedness has come before Me.” If they did not repent of their sins, they would perish.",
          "This journey was dangerous because the people of Nineveh were fierce enemies of the Israelites. Jonah knew that God was angry with the people of Nineveh because of their sins. But he thought, “I will not go to Nineveh. The people there might kill me for saying such things, and I do not want to die.” And so Jonah ran away. He went to a large city by the sea and found a harbor with many ships.",
          "Looking for a ship that would take him far away from God, he approached a captain and said, “Please take me with you.” The captain agreed. Jonah paid his fare, the ship sailed, and Jonah went down into its lower deck and fell asleep. But God saw that Jonah had disobeyed His command, and He sent a terrible storm. The ship was tossed on enormous waves like a piece of wood. Waves struck its sides, and water poured over the deck. The captain and sailors were terrified. Water kept entering the ship, and they could not get it out fast enough. They began to pray to their gods, begging them to stop the storm. But they worshiped idols, and idols could do nothing.",
          "Meanwhile Jonah was fast asleep below deck. The captain woke him and cried, “How can you sleep? Get up and call on your God! Perhaps He will help us.” Jonah knew that he had fled from God's command. The sailors said to one another, “Someone has done wrong, and this storm has come because of it.” They cast lots to find out who was responsible, and the lot fell on Jonah. “What should we do with you?” they asked. Jonah replied, “Throw me into the sea, and the storm will stop.”",
          "The sailors did not want to do it. They rowed with all their strength toward land, but the sea was too rough. So they prayed to the Lord, Jonah's God, asking Him not to hold them guilty for throwing Jonah into the water. Then they lifted Jonah and threw him overboard. At once the storm stopped, and the sea became calm. The sailors feared the Lord greatly, offered a sacrifice to Him, and made vows."
        ],
        "imageIndex": 0
      },
      {
        "title": "Prayer Inside the Great Fish",
        "paragraphs": [
          "God had prepared a great fish to swallow Jonah. Suddenly Jonah found himself inside the fish, surrounded by darkness. He was alive, but he had still not completed the task God gave him! Now Jonah understood the seriousness of his disobedience and began to pray. He called on God for help and thanked Him for salvation. Jonah remained inside the fish for three days and three nights. Then, at God's command, the fish vomited Jonah onto dry land."
        ],
        "imageIndex": 1
      },
      {
        "title": "Nineveh Repents",
        "paragraphs": [
          "This time Jonah decided to obey and traveled to Nineveh. It was a long journey, but finally he reached the great city. Walking through its streets he called out, “Yet forty days, and Nineveh shall be overthrown!” The people were frightened. They believed God, proclaimed a fast, and put on  sackcloth as a sign of repentance. When the king heard Jonah's message, he took off his royal garments, covered himself with sackcloth, and sat in ashes. He ordered the people, and even the animals, to fast. Everyone was to cry out to God and turn away from evil. “Who knows?” the king said. “Perhaps God will have mercy on us.” God saw that the people turned away from their wicked ways, and He spared Nineveh."
        ],
        "imageIndex": 3
      },
      {
        "title": "A Lesson in God’s Mercy",
        "paragraphs": [
          "But Jonah became very angry. He said to God, “I knew You were merciful and would not want to destroy these people. That is why I did not want to come here.” He was so upset that he even asked to die. Jonah left the city, sat to the east of it, and waited to see what would happen. The sun beat down fiercely. God caused a plant to grow above Jonah to give him shade, and Jonah was very glad about the plant.",
          "The next day, God prepared a worm that attacked the plant, and it withered. When the sun rose, God sent a scorching east wind. Jonah became so miserable in the heat that he again said he would rather die. God asked, “Is it right for you to be angry about the plant?” Jonah answered that he was angry enough to die.",
          "Then the Lord said, “You have had pity on the plant for which you have not labored, nor made it grow, which came up in a night and perished in a night. And should I not pity Nineveh, that great city, in which are more than one hundred and twenty thousand persons who cannot discern between their right hand and their left—and much livestock?”",
          "This is where the biblical book of Jonah ends. We are not told how Jonah answered God or what he did afterward. God's final question shows the greatness of His mercy toward people."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "What did God tell Jonah to do?",
      "Why did Jonah refuse to go to Nineveh?",
      "What happened to the ship during the storm?",
      "How did God save Jonah in the sea?",
      "How long did Jonah remain inside the great fish?",
      "What did the people of Nineveh do when they heard God’s warning?",
      "Why was Jonah angry when God spared the city?",
      "What did God want to teach Jonah through the plant?"
    ],
    "promise": {
      "body": "God is merciful and ready to forgive those who sincerely repent and turn to Him. He saw that the people of Nineveh turned from evil and showed them mercy.",
      "keyLine": "God is merciful and ready to forgive those who sincerely repent."
    },
    "connection": {
      "body": "Jonah spent three days and three nights inside the great fish. Jesus used this event to point to His own death and resurrection (Matthew 12:40). Jonah brought a message of repentance to Nineveh; Jesus Christ came to bring salvation to people throughout the world.",
      "keyLine": "Jesus Christ came to bring salvation to people throughout the world."
    },
    "familyChallenge": {
      "intro": "“Mercy Instead of Anger.",
      "instruction": "” Sit together as a family. Talk about why Jonah wanted Nineveh to be punished while God showed mercy. Invite each person to think of someone they find difficult to forgive. Discuss one specific way to show kindness and mercy to that person. End by praying together and asking God to help you forgive others.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Big Idea: God has shown mercy to us, so we should show mercy to others.",
      "ending": "Pray together",
      "prayer": "Lord, teach us to forgive and show mercy to others."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 17",
      "completed": "Day 17 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 17",
    "title": "Бог посылает Иону в Ниневию",
    "subtitle": "Послушание, покаяние и Божье милосердие",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Иона 4:2 (Синодальный перевод)",
      "verse": "«Ибо знал, что Ты Бог благий и милосердый, долготерпеливый и многомилостивый и сожалеешь о бедствии»."
    },
    "storyPages": [
      {
        "title": "Бегство Ионы и буря",
        "paragraphs": [
          "Иона был слугой Господа, и Бог поручил ему очень трудное задание. Но Иона не сразу выполнил его. Послушайте, как это произошло. Однажды Бог сказал: «Иона, встань и иди в Ниневию. Скажи жителям этого города, что их злые дела дошли до Меня». Если они не раскаются в своих грехах, то погибнут.",
          "Это путешествие было опасным, потому что жители Ниневии были заклятыми врагами израильтян. Иона знал, что Бог гневается на жителей Ниневии за их грехи. Но он подумал: «Я не пойду в Ниневию. Ведь ее жители могут убить меня за такие слова, а я не хочу умирать». И он убежал. Иона направился в большой город у моря, пришел в порт, где стояло много кораблей, и начал искать корабль, на котором мог бы уплыть подальше от Бога.",
          "Увидев корабль, готовящийся к отплытию, он попросил капитана: «Возьмите меня, пожалуйста, с собой». Капитан согласился. Иона заплатил за проезд, корабль отплыл, а Иона спустился в трюм и уснул. Но Бог видел, что Иона не исполнил Его повеления, и послал на море страшную бурю.",
          "Корабль бросало по огромным волнам, словно щепку. Волны с шумом ударялись о борта, и вода заливала палубу. Капитан и моряки очень испугались. Воды становилось все больше, и они не успевали вычерпывать ее. Моряки стали молиться своим богам и просить, чтобы буря прекратилась. Но они поклонялись идолам, а идолы ничем не могли помочь.",
          "Тем временем Иона крепко спал в трюме и ничего не знал о буре. Капитан разбудил его: «Как ты можешь спать? Вставай и молись своему Богу! Может быть, Он поможет нам!» Иона знал, что убежал от Божьего поручения. Моряки сказали друг другу: «Кто-то поступил неправильно, и из-за этого пришла буря». Они решили бросить жребий, чтобы узнать виновного. Жребий указал на Иону. «Что нам теперь с тобой делать?» — спросили они.",
          "«Бросьте меня в море, — ответил Иона, — и буря прекратится». Но моряки не хотели этого делать. Они изо всех сил гребли к берегу, однако сильные волны не позволили им приблизиться к суше. Тогда они помолились Господу, Богу Ионы, прося не наказывать их за то, что они собирались сделать. После этого они подняли Иону и бросили его в море. И произошло великое чудо: буря прекратилась, и море стало спокойным. Моряки сильно испугались Господа, принесли Ему жертву и дали обеты."
        ],
        "imageIndex": 0
      },
      {
        "title": "Молитва внутри большой рыбы",
        "paragraphs": [
          "Господь приготовил большую рыбу, которая проглотила Иону. В одно мгновение он оказался внутри рыбы, в полной темноте. Иона остался жив, но ему все еще предстояло побывать в Ниневии! Теперь он понял, как серьезно ослушался Бога, и начал молиться. Он просил Господа о помощи и благодарил Его за спасение. Три дня и три ночи Иона находился внутри рыбы. Затем по Божьему повелению рыба извергла его на сушу."
        ],
        "imageIndex": 1
      },
      {
        "title": "Покаяние Ниневии",
        "paragraphs": [
          "Теперь Иона решил исполнить Божье поручение и отправился в Ниневию. Дорога была долгой, но наконец он увидел большой город. Войдя в Ниневию, Иона стал ходить по улицам  и громко возвещать: «Еще сорок дней — и Ниневия будет разрушена!» Жители очень испугались. Они поверили Богу, объявили пост и надели мешковину в знак покаяния. Когда весть дошла до царя, он снял свои царские одежды, надел мешковину и сел на пепел. Он приказал, чтобы все люди и даже животные постились. Люди должны были усердно молиться Богу и оставить злые поступки. «Кто знает, может быть, Бог помилует нас?» — говорил царь. Бог увидел, что люди оставили свое зло, и не разрушил Ниневию."
        ],
        "imageIndex": 3
      },
      {
        "title": "Урок Божьего милосердия",
        "paragraphs": [
          "Но Иона очень рассердился. Он сказал Господу: «Я знал, что Ты милостив и не хочешь уничтожать этих людей. Поэтому я и не хотел сюда идти». Иона был так огорчен, что даже просил о смерти. Потом он вышел из города, сел к востоку от него и стал ждать, что произойдет с Ниневией. Солнце сильно пекло. Тогда Бог повелел вырасти растению, чтобы оно давало Ионе тень. Увидев растение, Иона очень обрадовался.",
          "Но на следующий день Господь послал червя, который повредил растение, и оно засохло. Когда взошло солнце, Бог послал знойный восточный ветер. Ионе стало так плохо от жары, что он снова сказал, что лучше умереть. Тогда Господь спросил: «Неужели ты так сильно рассердился из-за растения?» Иона ответил, что рассердился даже до смерти.",
          "Тогда Бог сказал Ионе: «Ты пожалел растение, над которым не трудился и которого не растил. Оно выросло за одну ночь и за одну ночь погибло. А разве Мне не пожалеть Ниневию, этот великий город, в котором живет более ста двадцати тысяч человек, не умеющих отличить правую руку от левой, и множество скота?»",
          "На этом заканчивается библейская книга Ионы. Нам не сообщается, что Иона ответил Богу и что произошло с ним дальше. Последний вопрос Бога показывает величие Его милосердия к людям."
        ],
        "imageIndex": 2
      }
    ],
    "questions": [
      "Какое поручение Бог дал Ионе?",
      "Почему Иона не захотел идти в Ниневию?",
      "Что произошло с кораблем во время бури?",
      "Как Бог спас Иону в море?",
      "Сколько дней Иона находился внутри большой рыбы?",
      "Что сделали жители Ниневии, услышав Божье предупреждение?",
      "Почему Иона рассердился, когда Бог помиловал город?",
      "Чему Бог хотел научить Иону через растение?"
    ],
    "promise": {
      "body": "Бог милостив и готов простить тех, кто искренне раскаивается и обращается к Нему. Он увидел покаяние жителей Ниневии и проявил к ним милость.",
      "keyLine": "Бог милостив и готов простить тех, кто искренне раскаивается."
    },
    "connection": {
      "body": "Иона провел три дня и три ночи внутри большой рыбы. Иисус использовал это событие, чтобы указать на Свою смерть и воскресение (Матфея 12:40). Иона принес весть о покаянии Ниневии, а Иисус Христос пришел, чтобы принести спасение людям всего мира.",
      "keyLine": "Иисус Христос пришёл, чтобы принести спасение людям всего мира."
    },
    "familyChallenge": {
      "intro": "«Милосердие вместо обиды».",
      "instruction": "Сядьте вместе всей семьей. Поговорите, почему Иона хотел наказания для Ниневии, а Бог проявил милосердие. Пусть каждый подумает, есть ли человек, которого ему трудно простить. Обсудите один конкретный способ проявить к этому человеку доброту и милосердие. Завершите общей молитвой и попросите Бога научить вас прощать.",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Главная мысль: Бог проявил милость к нам, поэтому и мы должны быть милосердными к другим.",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, научи нас прощать и быть милосердными к другим."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 17",
      "completed": "День 17 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

