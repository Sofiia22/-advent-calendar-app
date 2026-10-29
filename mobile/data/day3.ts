import { ImageSourcePropType } from "react-native";

import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_THREE_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day3/story/01-noah.jpg"),
  require("../assets/advent/day3/story/02-building-ark.jpg"),
  require("../assets/advent/day3/story/03-animals-enter.jpg"),
  require("../assets/advent/day3/story/04-flood.jpg"),
  require("../assets/advent/day3/story/05-dove-rainbow.jpg"),
] as const;

export const DAY_THREE_ICONS = ADVENT_SECTION_ICONS;

export const DAY_THREE_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  uk: {
    dayLabel: "День 3",
    title: "Ной і потоп",
    subtitle: "Бог рятує тих, хто довіряє Йому",
    sectionTitles: { scripture: "Писання", bibleStory: "Біблійна історія", questions: "Запитання", promise: "Обітниця", connection: "Зв’язок з Ісусом", familyChallenge: "Сімейне завдання" },
    scripture: { verse: "«А Ной знайшов милість у Господніх очах».", reference: "Буття 6:8" },
    storyPages: [
      { title: "Ной знаходить милість", paragraphs: [
        "Адам і Єва мали багато нащадків. Минали роки, людей на землі ставало дедалі більше. Але більшість із них не любили Бога і не слухалися Його. Люди ставали все більш нечестивими.",
        "Серед них був лише один чоловік, який любив Бога і намагався жити правильно. Його звали Ной. Апостол Петро називає Ноя «проповідником праведності» (2 Петра 2:5). Божий Дух був у його серці, і Ной любив Бога.",
        "Господь бачив, наскільки нечестивими стали люди, і вирішив покарати зло. Бог сказав Ноєві: «Я наведу на землю потоп, щоб знищити всяку плоть, у якій є дух життя. Але ти, твоя дружина і твої діти будете врятовані».",
      ] },
      { title: "Ной будує ковчег", paragraphs: [
        "Потім Бог наказав Ноєві побудувати величезний ковчег. Що таке ковчег? Це був великий корабель, який мав плавати на поверхні води, коли Бог пошле потоп.",
        "Ной зробив ковчег із великої кількості деревини. Для цього потрібно було зрубати багато дерев і підготувати багато дощок. Збоку ковчега були двері, а вгорі — вікно.",
        "Поки Ной будував ковчег, він попереджав людей про те, що має статися. Він говорив їм, що Бог пошле потоп, і закликав їх залишити свої гріхи та повернутися до Бога. Але ніхто не слухав Ноя.",
        "Люди продовжували їсти, пити, одружуватися і жити так, ніби нічого не станеться. І так тривало до того дня, коли Ной увійшов до ковчега.",
      ] },
      { title: "У безпеці всередині", paragraphs: [
        "Бог не хотів, щоб усі тварини, птахи та інші живі істоти повністю зникли із землі. Тому Він наказав Ноєві взяти тварин до ковчега. Ной також узяв зерно, плоди та сіно, щоб годувати їх.",
        "Потім до ковчега увійшли Ной, його дружина, троє його синів та їхні дружини. Усього було вісім людей. Ной не зачинив двері ковчега сам. Бог зачинив їх.",
        "Тоді почався сильний дощ. Він не припинявся ні вдень, ні вночі. Що, мабуть, думали люди, які не послухали Ноя? Можливо, вони шкодували, що не звернули уваги на його слова. Але було вже надто пізно.",
      ] },
      { title: "Сорок днів і сорок ночей", paragraphs: [
        "Вода швидко піднімалася все вище й вище, доки не покрила навіть найвищі гори. Дощ ішов сорок днів і сорок ночей. Усі люди й тварини, що залишилися поза ковчегом, загинули.",
        "А Ной, його сім’я та тварини, які були з ними, залишалися в безпеці всередині ковчега. Ковчег піднявся на воді й плавав над землею.",
        "Коли дощ припинився, Ной захотів дізнатися, чи вже зійшла вода. Спочатку він випустив через вікно крука. Крук літав туди й назад, доки вода не висохла із землі. Потім Ной випустив голубку. Вона не знайшла місця, де могла б сісти, тому повернулася до ковчега. Ной простягнув руку через вікно і взяв її назад.",
      ] },
      { title: "Голубка, суша і веселка", paragraphs: [
        "Через сім днів Ной знову випустив голубку. Увечері вона повернулася зі свіжим оливковим листком у дзьобі. Тоді Ной зрозумів, що вода вже значно зійшла. Ще через сім днів він випустив її знову, і цього разу вона не повернулася.",
        "Ной знав, що земля висохла, але не вийшов із ковчега самовільно. Він чекав, поки Бог скаже йому вийти. Нарешті Бог звелів Ноєві, його сім’ї та всім тваринам залишити ковчег.",
        "Ной побачив зелені пагорби й дерева. Але людей, які жили на землі до потопу, більше не було. Тоді Ной особливо зрозумів, наскільки великою була Божа милість до нього та його сім’ї. Він склав із каміння жертовник і приніс Богові жертву. Господь прийняв її.",
        "Після цього Бог дав Ноєві прекрасну обітницю: більше не буде такого потопу, який знищить усю землю. Він сказав: «Я покладу веселку Мою в хмарі, і вона буде знаком заповіту між Мною та землею». Відтоді веселка після дощу нагадує про Божу обітницю.",
        "У цій історії ми бачимо і Божий суд над гріхом, і Його милість. Ной повірив Богові та послухався Його. Ковчег став місцем спасіння для Ноя та його сім’ї.",
        "Ця історія веде нас далі — до Ісуса. Настав визначений Богом час, і Господь Ісус прийшов у світ і помер за гріхи людей. Біблія говорить, що одного дня Христос повернеться.",
        "Тому наше життя не повинно складатися лише з того, щоб їсти, пити, розважатися і думати тільки про земне. Ісус сказав: «Стережіться ж самі, щоб ваші серця не обтяжувалися ненажерливістю та п’янством і життєвими клопотами, і щоб день той не прийшов на вас несподівано». Луки 21:34.",
      ] },
    ],
    questions: ["Чому Бог вирішив послати потоп?", "Як Ной та його сім’я врятувалися?", "Чи вірили нечестиві люди, що потоп справді прийде?", "Яких двох птахів Ной випускав із ковчега?", "Що принесла голубка, коли повернулася вдруге?", "Яку обітницю Бог дав Ноєві?", "Про що нам нагадує веселка?"],
    promise: { body: "Бог пообіцяв, що більше не пошле такого потопу, який знищить усю землю, і дав веселку як видимий знак Свого заповіту.", keyLine: "🌈 «Я покладу веселку Мою в хмарі…» — Буття 9:13" },
    connection: { body: "Бог дав Ноєві ковчег як безпечне місце порятунку. Так само Бог дав нам Ісуса, Який спасає від гріха кожного, хто довіряє Йому.", keyLine: "Ковчег був Божим шляхом порятунку для Ноя. Ісус — Божий шлях спасіння для нас." },
    familyChallenge: { intro: "Створіть усією сім’єю веселку Божих обітниць.", instruction: "Намалюйте веселку і на кожній із семи смуг напишіть або намалюйте один дар Божої милості.", examplesLabel: "Наприклад:", examples: ["життя", "сім’я", "дім", "їжа", "прощення", "Біблія", "Ісус"], reflection: "Нехай кожен назве одну Божу обітницю, якій він хоче довіряти цього тижня.", ending: "Помоліться разом:", prayer: "«Боже, дякуємо, що Ти милостивий і завжди виконуєш Свої обітниці. Допоможи нам довіряти Тобі, як Ной»." },
    navigation: { section: "Розділ", of: "з", back: "Назад", next: "Далі", complete: "Завершити День 3", completed: "День 3 завершено", journeyContinues: "Ваша адвент-подорож триває.", backToJourney: "До подорожі" },
  },
  en: {
    dayLabel: "Day 3",
    title: "Noah and the Flood",
    subtitle: "God rescues those who trust Him",
    sectionTitles: { scripture: "Scripture", bibleStory: "Bible Story", questions: "Questions", promise: "Promise", connection: "Connection", familyChallenge: "Family Challenge" },
    scripture: { verse: "“But Noah found grace in the eyes of the LORD.”", reference: "Genesis 6:8" },
    storyPages: [
      { title: "Noah Finds Grace", paragraphs: [
        "Adam and Eve had many descendants. As the years passed, more and more people lived on the earth. But most of them did not love God or obey Him. People became increasingly wicked.",
        "Among them was one man who loved God and tried to live rightly. His name was Noah. The apostle Peter calls Noah “a preacher of righteousness” (2 Peter 2:5). Noah loved God and walked with Him.",
        "The Lord saw how wicked people had become, and He determined to judge their evil. God told Noah: “I am bringing a flood upon the earth to destroy every living creature that has the breath of life. But you, your wife, and your family will be saved.”",
      ] },
      { title: "Noah Builds the Ark", paragraphs: [
        "Then God commanded Noah to build a huge ark. What was an ark? It was a massive vessel designed to float on the water when God sent the flood.",
        "Noah built the ark from a great amount of wood. Many trees had to be cut down and many boards prepared. There was a door in the side of the ark and an opening near the top.",
        "While Noah was building, he warned the people about what was coming. He told them that God would send a flood and urged them to turn away from their sinful ways and return to God. But no one listened to Noah.",
        "People continued eating, drinking, marrying, and living as though nothing would ever happen. And so it continued until the day Noah entered the ark.",
      ] },
      { title: "Safe Inside", paragraphs: [
        "God did not intend for every kind of animal, bird, and other living creature to disappear from the earth. So He told Noah to bring animals into the ark. Noah also took grain, fruit, and hay to feed them.",
        "Then Noah entered the ark with his wife, his three sons, and their wives. There were eight people altogether. Noah did not close the door of the ark himself. God shut the door.",
        "Then the heavy rain began. It continued day and night. What must the people who had ignored Noah have thought? Perhaps they regretted not listening to his warning. But now it was too late.",
      ] },
      { title: "Forty Days and Forty Nights", paragraphs: [
        "The water rose higher and higher until even the highest mountains were covered. It rained for forty days and forty nights. The people and animals outside the ark perished.",
        "But Noah, his family, and the animals with them remained safe inside. The ark rose on the water and floated above the earth.",
        "When the rain finally stopped, Noah wanted to know whether the water had gone down. First, he sent out a raven through the window. It flew back and forth until the waters dried up. Then Noah sent out a dove. It could not find a place to rest, so it returned to the ark. Noah reached out his hand and brought it back inside.",
      ] },
      { title: "The Dove, Dry Land, and the Rainbow", paragraphs: [
        "Seven days later, Noah sent the dove out again. That evening it returned with a freshly plucked olive leaf in its beak. Then Noah knew that the waters had gone down. Seven days later he sent it out once more, and this time it did not return.",
        "Noah knew that the land was dry, but he did not simply leave the ark on his own. He waited until God told him to come out. At last God told Noah, his family, and every living creature to leave the ark.",
        "Noah saw the green land and the trees. But the wicked people who had lived before the flood were gone. Noah understood more deeply how great God’s mercy had been toward him and his family. He built an altar from stones and offered a sacrifice to God. The Lord accepted his offering.",
        "Then God gave Noah a wonderful promise: He would never again send a flood like this to destroy the whole earth. He said: “I set My rainbow in the cloud, and it shall be for the sign of the covenant between Me and the earth.” A rainbow after the rain reminds us of God’s promise.",
        "In this story, we see both God’s judgment against sin and His mercy. Noah believed God and obeyed Him. The ark became a place of rescue for Noah and his family.",
        "The story also points us forward to Jesus. At the time appointed by God, the Lord Jesus came into the world and died for the sins of people. The Bible also teaches that one day Christ will return.",
        "That is why our lives should not be only about eating, drinking, having fun, and thinking about earthly things. Jesus said: “But take heed to yourselves, lest your hearts be weighed down with carousing, drunkenness, and cares of this life, and that Day come on you unexpectedly.” Luke 21:34.",
      ] },
    ],
    questions: ["Why did God decide to send the flood?", "How were Noah and his family saved?", "Did the wicked people believe the flood would really come?", "Which two kinds of birds did Noah send out from the ark?", "What did the dove bring back?", "What promise did God give Noah?", "What does the rainbow remind us of?"],
    promise: { body: "God promised never again to send a flood like this to destroy the whole earth, and He gave the rainbow as the visible sign of His covenant.", keyLine: "🌈 “I set My rainbow in the cloud…” — Genesis 9:13" },
    connection: { body: "God gave Noah the ark as a safe place of rescue. In the same way, God gave us Jesus, who saves from sin everyone who trusts Him.", keyLine: "The ark was God’s way of rescue for Noah. Jesus is God’s way of salvation for us." },
    familyChallenge: { intro: "Create a rainbow of God’s promises together as a family.", instruction: "Draw a rainbow and write or draw one gift of God’s grace on each of its seven bands.", examplesLabel: "For example:", examples: ["life", "family", "home", "food", "forgiveness", "the Bible", "Jesus"], reflection: "Let everyone name one promise of God they want to trust this week.", ending: "Pray together:", prayer: "“God, thank You for Your mercy and for always keeping Your promises. Help us trust You as Noah did.”" },
    navigation: { section: "Section", of: "of", back: "Back", next: "Next", complete: "Complete Day 3", completed: "Day 3 complete", journeyContinues: "Your Advent journey continues.", backToJourney: "Back to Journey" },
  },
  ru: {
    dayLabel: "День 3",
    title: "Ной и потоп",
    subtitle: "Бог спасает тех, кто доверяет Ему",
    sectionTitles: { scripture: "Писание", bibleStory: "Библейская история", questions: "Вопросы", promise: "Обещание", connection: "Связь с Иисусом", familyChallenge: "Семейное задание" },
    scripture: { verse: "«Ной же обрёл благодать пред очами Господа».", reference: "Бытие 6:8" },
    storyPages: [
      { title: "Ной обретает благодать", paragraphs: [
        "У Адама и Евы было много потомков. Проходили годы, и людей на земле становилось всё больше. Но большинство из них не любили Бога и не слушались Его. Люди становились всё более нечестивыми.",
        "Среди них был один человек, который любил Бога и старался жить праведно. Его звали Ной. Апостол Пётр называет Ноя «проповедником правды» (2 Петра 2:5). Ной любил Бога и ходил перед Ним.",
        "Господь видел, насколько нечестивыми стали люди, и решил наказать зло. Бог сказал Ною: «Я наведу на землю потоп, чтобы уничтожить всякую плоть, в которой есть дух жизни. Но ты, твоя жена и твоя семья будете спасены».",
      ] },
      { title: "Ной строит ковчег", paragraphs: [
        "Затем Бог повелел Ною построить огромный ковчег. Что такое ковчег? Это было огромное судно, которое должно было плавать на поверхности воды, когда Бог пошлёт потоп.",
        "Для строительства ковчега Ною понадобилось много дерева. Нужно было срубить множество деревьев и приготовить большое количество досок. Сбоку ковчега была дверь, а наверху — окно.",
        "Пока Ной строил ковчег, он предупреждал людей о том, что должно произойти. Он говорил им, что Бог пошлёт потоп, и призывал оставить свои греховные пути и обратиться к Богу. Но никто не слушал Ноя.",
        "Люди продолжали есть, пить, жениться и выходить замуж и жили так, словно ничего не произойдёт. Так продолжалось до того дня, когда Ной вошёл в ковчег.",
      ] },
      { title: "В безопасности внутри", paragraphs: [
        "Бог не хотел, чтобы все виды животных, птиц и других живых существ полностью исчезли с земли. Поэтому Он повелел Ною взять животных в ковчег. Ной также взял зерно, плоды и сено, чтобы кормить их.",
        "Затем в ковчег вошли Ной, его жена, трое его сыновей и их жёны. Всего было восемь человек. Ной не закрыл дверь ковчега сам. Бог затворил её.",
        "Тогда начался сильный дождь. Он не прекращался ни днём, ни ночью. О чём, наверное, думали люди, которые не послушались Ноя? Возможно, теперь они сожалели, что не обратили внимания на его предупреждение. Но было уже слишком поздно.",
      ] },
      { title: "Сорок дней и сорок ночей", paragraphs: [
        "Вода поднималась всё выше и выше, пока не покрыла даже самые высокие горы. Дождь шёл сорок дней и сорок ночей. Люди и животные, оставшиеся вне ковчега, погибли.",
        "Но Ной, его семья и животные, находившиеся вместе с ними, оставались в безопасности. Ковчег поднялся на воде и плавал над землёй.",
        "Когда дождь прекратился, Ной захотел узнать, сошла ли уже вода. Сначала он выпустил из окна ворона. Он летал туда и обратно, пока вода не высохла на земле. Затем Ной выпустил голубя. Голубь не нашёл места для отдыха и вернулся в ковчег. Ной протянул руку и взял его обратно.",
      ] },
      { title: "Голубь, суша и радуга", paragraphs: [
        "Через семь дней Ной снова выпустил голубя. Вечером тот возвратился со свежим масличным листом в клюве. Тогда Ной понял, что вода значительно убыла. Ещё через семь дней голубь был выпущен снова и уже не вернулся.",
        "Ной знал, что земля высохла, но не вышел из ковчега по собственной воле. Он дождался, пока Бог Сам скажет ему выйти. Наконец Бог повелел Ною, его семье и всем животным покинуть ковчег.",
        "Ной увидел зелёную землю и деревья. Но нечестивых людей, живших до потопа, больше не было. Тогда Ной особенно ясно понял, насколько велика была милость Божья к нему и его семье. Он сложил из камней жертвенник и принёс Богу жертву. Господь принял её.",
        "После этого Бог дал Ною прекрасное обещание: больше никогда не посылать такой потоп для уничтожения всей земли. Он сказал: «Я полагаю радугу Мою в облаке, чтобы она была знамением завета между Мною и между землёю». С тех пор радуга после дождя напоминает нам о Божьем обещании.",
        "В этой истории мы видим и Божий суд над грехом, и Его милость. Ной поверил Богу и послушался Его. Ковчег стал местом спасения для Ноя и его семьи.",
        "Эта история направляет наш взгляд вперёд — к Иисусу. В назначенное Богом время Господь Иисус пришёл в мир и умер за грехи людей. Библия говорит, что однажды Христос вернётся.",
        "Поэтому наша жизнь не должна состоять только из еды, питья, развлечений и забот о земном. Иисус сказал: «Смотрите же за собою, чтобы сердца ваши не отягчались объядением и пьянством и заботами житейскими, и чтобы день тот не постиг вас внезапно». Луки 21:34.",
      ] },
    ],
    questions: ["Почему Бог решил послать потоп?", "Как спаслись Ной и его семья?", "Верили ли нечестивые люди, что потоп действительно наступит?", "Каких двух птиц Ной выпускал из ковчега?", "Что принёс голубь, когда вернулся?", "Какое обещание Бог дал Ною?", "О чём напоминает нам радуга?"],
    promise: { body: "Бог пообещал больше никогда не посылать такой потоп для уничтожения всей земли и дал радугу как видимый знак Своего завета.", keyLine: "🌈 «Я полагаю радугу Мою в облаке…» — Бытие 9:13" },
    connection: { body: "Бог дал Ною ковчег как безопасное место спасения. Так же Бог дал нам Иисуса, Который спасает от греха каждого, кто доверяет Ему.", keyLine: "Ковчег был Божьим путём спасения для Ноя. Иисус — Божий путь спасения для нас." },
    familyChallenge: { intro: "Создайте всей семьёй радугу Божьих обещаний.", instruction: "Нарисуйте радугу и на каждой из семи полос напишите или нарисуйте один дар Божьей милости.", examplesLabel: "Например:", examples: ["жизнь", "семья", "дом", "еда", "прощение", "Библия", "Иисус"], reflection: "Пусть каждый назовёт одно Божье обещание, которому он хочет доверять на этой неделе.", ending: "Помолитесь вместе:", prayer: "«Боже, благодарим Тебя за милость и за то, что Ты всегда исполняешь Свои обещания. Помоги нам доверять Тебе, как Ной»." },
    navigation: { section: "Раздел", of: "из", back: "Назад", next: "Далее", complete: "Завершить День 3", completed: "День 3 завершён", journeyContinues: "Ваше адвент-путешествие продолжается.", backToJourney: "К путешествию" },
  },
};
