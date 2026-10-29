import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_TWENTY_ICONS = ADVENT_SECTION_ICONS;
export const DAY_TWENTY_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day19/story/01-prayer.jpg"),
  require("../assets/advent/day19/story/02-rescue.jpg"),
  require("../assets/advent/day19/story/03-angel.jpg"),
  require("../assets/advent/day19/story/04-den.jpg"),
];
export const DAY_TWENTY_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 20",
    "title": "Даниїл — лев’ячий рів",
    "subtitle": "Вірність Богові навіть у небезпеці",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок із Різдвом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "reference": "Даниїла 6:23",
      "verse": "«Мій Бог послав Свого Ангола, і позамикав пащі левам, і вони не пошкодили мені»."
    },
    "storyPages": [
      {
        "title": "Даниїл залишається вірним",
        "paragraphs": [
          "Царя, котрий підкорив Валтасара, називали Дарієм. Він був людиною зарозумілою і поклонявся ідолам, однак він дуже любив Даниїла і призначив його старшим над усім своїм царством. Багато вельмож не любили Даниїла. Вони йому заздрили і намагалися причинити яке-небудь зло, щоб цар розгнівався на нього. Та це їм ніяк не вдавалося тому, що Даниїл не зробив нічого поганого.",
          "Нарешті вони придумали, як звести наклеп на Даниїла перед царем Дарієм. Вони знали, що він часто молився Богові. Тоді вельможі прийшли до царя і попрохали його об’явити таке силою закону: протягом тридцяти днів ніхто не має права звертатися ні до якого бога чи людини, окрім царя Дарія, а коли хто порушить закон цей, то буде вкинений до лев’ячого рова.",
          "Цар не здогадався з якою метою його прохали об’явити такий закон, а тому погодився на цю пропозицію. Невдовзі Даниїл дізнався, що з’явився такий наказ царський, і, звичайно, не міг погодитися з ним, щоб не молитися Господеві тридцять днів. Він завжди бажав славити Бога і прохати в Нього благословінь. Він завжди молився в кімнаті, вікна якої були розташовані навпроти будівель Єрусалиму.",
          "Він не міг бачити Єрусалиму, бо той знаходився далеко, але Даниїл знав, що слава Божа з’являлася в Єрусалимському храмі, допоки він не був спалений, тому Даниїл любив дивитися в той бік, коли молився до Господа."
        ],
        "imageIndex": 0
      },
      {
        "title": "Даниїла кидають до лев’ячого рову",
        "paragraphs": [
          "Люди, котрі ненавиділи Даниїла, знали, що він продовжує молитися Богові і донесли цареві на нього. Вони так сказали Дарію: «Хіба не ти підписував наказ про те, що кожну людину, котра протягом тридцяти днів буде прохати якого-небудь бога або людину, окрім тебе, кидати до лев’ячого рову?» Цар відповів: «Слово моє тверде, і я не можу перемінити його».",
          "Тоді ці люди сказали: «Даниїл, полонений юдей, не звертає уваги на твої слова, царю, і тричі на день молиться своїми молитвами». Почувши таке, цар дуже зажурився, роздумуючи, як врятувати Даниїла, але так нічого і не надумав. Увечері того самого дня ті люди знову звернулися до царя, кажучи: «Знай, царю, що за нашими законами ніякий царський наказ не може бути перемінений!»",
          "Тоді Дарій наказав покликати Даниїла і вкинути його до лев’ячого рова, бо леви перебували в глибокому підземному рові. Вечорами леви завжди голодні і шукають собі здобич. Та чи з’їдять вони Даниїла, коли його туди вкинуть? Та Дарій знав, що Бог Даниїла є великим Богом, тому він сказав Даниїлові: «Бог твій, Котрому ти служиш віддано, врятує тебе!»",
          "Вхід до рова зачинили великим каменем і цар наклав на нього печатку свою, а також печатки своїх вельмож, щоб ніхто не міг доторкнутися до каменя. Потім цар повернувся додому і ліг спати, не повечерявши; та сон все не йшов до нього."
        ],
        "imageIndex": 3
      },
      {
        "title": "Бог посилає Свого ангела",
        "paragraphs": [
          "На світанку, коли ще й на світ не благословлялося, поспішив цар до лев’ячого рова і жалібним голосом погукав Даниїла: «Даниїле! Бог, Котрому ти служиш, чи зміг врятувати тебе від левів?» Даниїл відповів: «Царю, повік живи! Бог послав Свого ангела, котрий не дав відкритися пащам левиним, і леви не причинили мені ніякої шкоди, тому що я ні перед Богом, ні перед тобою нічим не завинив»."
        ],
        "imageIndex": 2
      },
      {
        "title": "Даниїла врятовано",
        "paragraphs": [
          "Цар дуже зрадів, що Даниїл живий і неушкоджений. Він наказав витягнути його з рова і впевнився, що леви не зробили ніякого зла йому. Тоді цар дуже розгнівався на тих людей, які переконали його вкинути Даниїла до лев’ячого рова; тепер він наказав вкинути їх туди з жінками і дітьми. Леви негайно пошматували їх. Ви бачите, що леви були дуже зголоднілими, однак вони не зачепили Даниїла.",
          "Тоді цар Дарій написав листа і послав його по всіх місцевостях свого царства. Там він писав, що за новим законом всі повинні шанувати Бога, Котрому поклоняється Даниїл, тому що Він Бог справжній і Він врятував Даниїла від пащі лева. Отже, дітки, ви бачите, що Даниїл дуже любив Бога, тому він волів краще померти, аніж не молитися до свого Господа.",
          "Чи не доведеться і вам потрапити до лев’ячого рову, якщо ви не будете молитися до Господа? Та я знаю, що ви молитеся нашому Господеві."
        ],
        "imageIndex": 1
      }
    ],
    "questions": [
      "Як називали царя, котрий заволодів царством Валтасара?",
      "Чому Даниїла ненавиділи деякі вельможі?",
      "На об’явлення якого закону вони намовили Дарія?",
      "Скільки разів на день молився Даниїл?",
      "Чому він відкривав вікно з боку Єрусалиму?",
      "Хто зрадив Даниїла за те, що він молився?",
      "Чому Дарій не міг порушити закон?",
      "Що сталося з Даниїлом у лев’ячому рові?",
      "Хто захистив Даниїла від левів?",
      "Що цар Дарій наказав після порятунку Даниїла?"
    ],
    "promise": {
      "body": "Бог не обіцяє, що ми ніколи не зустрінемося з труднощами. Але Він обіцяє бути зі Своїми дітьми. Як Бог був поруч із Даниїлом у лев’ячому рові, так і сьогодні ми можемо довіряти Йому, навіть коли нам страшно.",
      "keyLine": "«Не бійся, з тобою-бо Я, і не озирайсь, бо Я Бог твій!» — Ісая 41:10"
    },
    "connection": {
      "body": "Даниїл залишився вірним Богові навіть тоді, коли це загрожувало його життю. Бог не залишив Даниїла одного і послав Свого ангела, щоб захистити його. Ця історія нагадує нам, що Бог є Спасителем. Даниїла Бог врятував від левів, а через Ісуса Христа Він здійснив набагато більше спасіння — прийшов у наш світ, щоб спасти людей від гріха. Різдво нагадує нам про Еммануїла — «З нами Бог». Ісус прийшов, щоб ми могли примиритися з Богом і мати вічне життя через Нього.",
      "keyLine": "Еммануїл — «З нами Бог»."
    },
    "familyChallenge": {
      "intro": "«Залишайся вірним Богові»",
      "instruction": "Сьогодні поговоріть усією сім’єю:",
      "examplesLabel": "",
      "examples": [
        "Чи був у тебе випадок, коли ти боявся зробити щось правильне, бо інші могли посміятися?",
        "Що допомагало Даниїлові залишатися вірним Богові?",
        "Як ми можемо показувати свою вірність Богові вдома, у школі чи серед друзів?"
      ],
      "reflection": "Наприкінці кожен нехай назве одну ситуацію, у якій хоче більше довіряти Богові. Помоліться разом, просячи в Бога сміливості та вірності.",
      "ending": "Помоліться разом",
      "prayer": "Господи, дай нам сміливість і вірність, щоб довіряти Тобі щодня."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 20",
      "completed": "День 20 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 20",
    "title": "Daniel — The Lions’ Den",
    "subtitle": "Faithful to God Even in Danger",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "The Christmas Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "reference": "Daniel 6:22 (NKJV)",
      "verse": "“My God sent His angel and shut the lions’ mouths, so that they have not hurt me.”"
    },
    "storyPages": [
      {
        "title": "Daniel Remains Faithful",
        "paragraphs": [
          "The king who conquered Belshazzar was called Darius. He was a proud man who worshiped idols, but he loved Daniel very much and appointed him to a high position over his entire kingdom. Many officials did not like Daniel. They were jealous of him and tried to find something wrong with him so that the king would become angry with him.",
          "But they could not succeed because Daniel had done nothing wrong. Finally, they came up with a plan to accuse Daniel before King Darius. They knew that he often prayed to God. So the officials came to the king and asked him to make a law declaring that for thirty days no one would be allowed to pray to any god or person except King Darius.",
          "Anyone who broke this law would be thrown into the lions’ den. The king did not realize why they wanted such a law and agreed to their proposal. Soon Daniel learned about the king’s new decree. Of course, he could not agree to stop praying to the Lord for thirty days. He always wanted to praise God and ask for His blessings.",
          "Daniel always prayed in a room whose windows faced Jerusalem. He could not actually see Jerusalem because it was far away, but he knew that God’s glory had appeared in the temple in Jerusalem before it was destroyed. That was why Daniel loved to look in that direction when he prayed to the Lord."
        ],
        "imageIndex": 0
      },
      {
        "title": "Daniel Is Thrown into the Den",
        "paragraphs": [
          "The men who hated Daniel knew that he continued praying to God, so they reported him to the king. They said to Darius, “Did you not sign a decree saying that anyone who prays to any god or person except you during these thirty days must be thrown into the lions’ den?” The king answered, “My word stands firm, and I cannot change it.”",
          "Then the men said, “Daniel, one of the Jewish captives, pays no attention to your words, O king, and prays three times a day.” When the king heard this, he became very distressed and tried to think of a way to save Daniel, but he could not find a solution. That evening, the same men came back to the king and said, “Remember, O king, that according to our laws, no royal decree can be changed!”",
          "Then Darius ordered Daniel to be brought and thrown into the lions’ den. The lions lived in a deep underground pit. In the evenings, the lions were usually hungry and searched for prey. Would they eat Daniel when he was thrown into the den? Darius knew that Daniel’s God was a great God, so he said to Daniel, “Your God, whom you serve faithfully, will save you!”",
          "The entrance to the den was closed with a large stone. The king placed his own seal on it, along with the seals of his officials, so that no one could move the stone. Then the king returned to his palace and went to bed without eating dinner. But he could not fall asleep."
        ],
        "imageIndex": 3
      },
      {
        "title": "God Sends His Angel",
        "paragraphs": [
          "At dawn, before the sun had even risen, the king hurried to the lions’ den and called out to Daniel in a sorrowful voice: “Daniel! Has the God whom you serve been able to save you from the lions?” Daniel answered, “O king, live forever! God sent His angel, who shut the lions’ mouths, and they did not hurt me. I have done nothing wrong before God or before you.”"
        ],
        "imageIndex": 2
      },
      {
        "title": "Daniel Is Rescued",
        "paragraphs": [
          "The king was overjoyed that Daniel was alive and unharmed. He ordered Daniel to be lifted out of the den and saw that the lions had not injured him at all. Then the king became very angry with the men who had persuaded him to throw Daniel into the lions’ den. He ordered them to be thrown into the den together with their wives and children.",
          "The lions immediately attacked and tore them apart. You see, the lions were very hungry, but they had not touched Daniel. Then King Darius wrote a letter and sent it throughout his kingdom. In it, he commanded everyone to honor the God whom Daniel worshiped, because He is the true God and had rescued Daniel from the lions’ mouths.",
          "So, children, you can see how much Daniel loved God. He would rather have died than stop praying to his Lord. Will you also have to face a lions’ den if you do not pray to the Lord? I know that you pray to our Lord."
        ],
        "imageIndex": 1
      }
    ],
    "questions": [
      "What was the name of the king who took over Belshazzar’s kingdom?",
      "Why did some officials hate Daniel?",
      "What law did they persuade Darius to make?",
      "How many times a day did Daniel pray?",
      "Why did Daniel open his windows toward Jerusalem?",
      "Who reported Daniel for praying?",
      "Why could Darius not change the law?",
      "What happened to Daniel in the lions’ den?",
      "Who protected Daniel from the lions?",
      "What did King Darius command after Daniel was rescued?"
    ],
    "promise": {
      "body": "God does not promise that we will never face difficulties. But He promises to be with His children. Just as God was with Daniel in the lions’ den, we can trust Him today, even when we are afraid.",
      "keyLine": "“Fear not, for I am with you.” — Isaiah 41:10"
    },
    "connection": {
      "body": "Daniel remained faithful to God even when his life was in danger. God did not leave Daniel alone but sent His angel to protect him. This story reminds us that God is our Savior. God rescued Daniel from the lions, but through Jesus Christ, He accomplished a much greater salvation. He came into our world to save people from sin. Christmas reminds us of Immanuel — “God with us.” Jesus came so that we could be reconciled to God and have eternal life through Him.",
      "keyLine": "Immanuel — “God with us.”"
    },
    "familyChallenge": {
      "intro": "Stay Faithful to God",
      "instruction": "Today, talk together as a family:",
      "examplesLabel": "",
      "examples": [
        "Have you ever been afraid to do the right thing because others might laugh at you?",
        "What helped Daniel remain faithful to God?",
        "How can we show our faithfulness to God at home, at school, or with friends?"
      ],
      "reflection": "At the end, let each family member share one situation in which they want to trust God more. Pray together, asking God for courage and faithfulness.",
      "ending": "Pray together",
      "prayer": "Lord, give us courage and faithfulness to trust You every day."
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 20",
      "completed": "Day 20 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 20",
    "title": "Даниил — львиный ров",
    "subtitle": "Верность Богу даже в опасности",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Рождеством",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "reference": "Даниил 6:22 (Синодальный перевод)",
      "verse": "«Бог мой послал Ангела Своего и заградил пасть львам, и они не повредили мне»."
    },
    "storyPages": [
      {
        "title": "Даниил остаётся верным",
        "paragraphs": [
          "Царя, который покорил Валтасара, звали Дарием. Он был человеком гордым и поклонялся идолам, однако очень любил Даниила и назначил его старшим над всем своим царством. Многие вельможи не любили Даниила. Они завидовали ему и старались найти какой-нибудь проступок, чтобы царь разгневался на него. Но им никак не удавалось это сделать, потому что Даниил не совершал ничего плохого.",
          "Наконец они придумали, как оклеветать Даниила перед царём Дарием. Они знали, что он часто молился Богу. Тогда вельможи пришли к царю и попросили его издать закон: в течение тридцати дней никто не имеет права обращаться с молитвой ни к какому богу или человеку, кроме царя Дария. А если кто-нибудь нарушит этот закон, его бросят в львиный ров.",
          "Царь не догадался, с какой целью его просили издать такой закон, и поэтому согласился на это предложение. Вскоре Даниил узнал, что вышел такой царский указ, и, конечно, не мог согласиться не молиться Господу в течение тридцати дней. Он всегда хотел прославлять Бога и просить у Него благословений. Даниил всегда молился в комнате, окна которой были обращены в сторону Иерусалима.",
          "Он не мог видеть Иерусалим, потому что тот находился далеко, но Даниил знал, что слава Божья являлась в Иерусалимском храме, прежде чем он был разрушен. Поэтому Даниил любил смотреть в ту сторону, когда молился Господу."
        ],
        "imageIndex": 0
      },
      {
        "title": "Даниила бросают в львиный ров",
        "paragraphs": [
          "Люди, которые ненавидели Даниила, знали, что он продолжал молиться Богу, и донесли на него царю. Они сказали Дарию: «Разве не ты подписал указ о том, что каждого человека, который в течение тридцати дней будет обращаться с молитвой к какому-нибудь богу или человеку, кроме тебя, нужно бросить в львиный ров?» Царь ответил: «Моё слово твёрдо, и я не могу изменить его».",
          "Тогда эти люди сказали: «Даниил, один из пленных иудеев, не обращает внимания на твои слова, царь, и три раза в день молится своими молитвами». Услышав это, царь очень опечалился и стал думать, как спасти Даниила, но так ничего и не придумал. Вечером того же дня эти люди снова пришли к царю и сказали: «Знай, царь, что по нашим законам никакой царский указ не может быть изменён!»",
          "Тогда Дарий приказал привести Даниила и бросить его в львиный ров, потому что львы находились в глубокой подземной яме. По вечерам львы обычно были голодными и искали себе добычу. Но съедят ли они Даниила, когда его бросят туда? Дарий знал, что Бог Даниила — великий Бог, поэтому сказал Даниилу: «Бог твой, Которому ты верно служишь, спасёт тебя!»",
          "Вход в ров закрыли большим камнем, и царь приложил к нему свою печать, а также печати своих вельмож, чтобы никто не мог прикоснуться к камню. Затем царь вернулся во дворец и лёг спать, не поужинав. Но сон всё не приходил к нему."
        ],
        "imageIndex": 3
      },
      {
        "title": "Бог посылает Своего ангела",
        "paragraphs": [
          "На рассвете, когда ещё даже не начало светать, царь поспешил ко львиному рву и печальным голосом позвал Даниила: «Даниил! Бог, Которому ты служишь, смог ли спасти тебя от львов?» Даниил ответил: «Царь, вовеки живи! Бог послал Своего ангела, который закрыл пасти львам, и они не причинили мне никакого вреда, потому что я ни перед Богом, ни перед тобой ни в чём не виновен»."
        ],
        "imageIndex": 2
      },
      {
        "title": "Даниил спасён",
        "paragraphs": [
          "Царь очень обрадовался, что Даниил жив и невредим. Он приказал поднять его из рва и убедился, что львы не причинили ему никакого вреда. Тогда царь очень разгневался на тех людей, которые убедили его бросить Даниила в львиный ров. Теперь он приказал бросить туда их вместе с жёнами и детьми. Львы немедленно растерзали их.",
          "Вы видите, что львы были очень голодными, однако они не тронули Даниила. Тогда царь Дарий написал письмо и разослал его по всем областям своего царства. В нём он повелел, чтобы все почитали Бога, Которому поклоняется Даниил, потому что Он — истинный Бог и Он спас Даниила от пасти льва. Итак, дети, вы видите, что Даниил очень любил Бога, поэтому предпочёл бы скорее умереть, чем перестать молиться своему Господу.",
          "Не придётся ли и вам попасть в львиный ров, если вы не будете молиться Господу? Но я знаю, что вы молитесь нашему Господу."
        ],
        "imageIndex": 1
      }
    ],
    "questions": [
      "Как звали царя, который завладел царством Валтасара?",
      "Почему некоторые вельможи ненавидели Даниила?",
      "Какой закон они убедили Дария издать?",
      "Сколько раз в день молился Даниил?",
      "Почему он открывал окна в сторону Иерусалима?",
      "Кто донёс на Даниила за то, что он молился?",
      "Почему Дарий не мог изменить закон?",
      "Что произошло с Даниилом во львином рву?",
      "Кто защитил Даниила от львов?",
      "Что приказал царь Дарий после спасения Даниила?"
    ],
    "promise": {
      "body": ". Бог не обещает, что мы никогда не встретимся с трудностями. Но Он обещает быть со Своими детьми. Как Бог был рядом с Даниилом во львином рву, так и сегодня мы можем доверять Ему, даже когда нам страшно.",
      "keyLine": "«Не бойся, ибо Я с тобою; не смущайся, ибо Я Бог твой» — Исаия 41:10"
    },
    "connection": {
      "body": "Даниил оставался верным Богу даже тогда, когда его жизни угрожала опасность. Бог не оставил Даниила одного, но послал Своего ангела, чтобы защитить его. Эта история напоминает нам о том, что Бог — наш Спаситель. Бог спас Даниила от львов, но через Иисуса Христа Он совершил гораздо большее спасение — пришёл в наш мир, чтобы спасти людей от греха. Рождество напоминает нам об Эммануиле — «С нами Бог». Иисус пришёл, чтобы мы могли примириться с Богом и иметь вечную жизнь через Него.",
      "keyLine": "Эммануил — «С нами Бог»."
    },
    "familyChallenge": {
      "intro": "«Оставайся верным Богу»",
      "instruction": "Сегодня поговорите всей семьёй:",
      "examplesLabel": "",
      "examples": [
        "Был ли у тебя случай, когда ты боялся поступить правильно, потому что другие могли над тобой посмеяться?",
        "Что помогало Даниилу оставаться верным Богу?",
        "Как мы можем показывать свою верность Богу дома, в школе или среди друзей?"
      ],
      "reflection": "В конце пусть каждый назовёт одну ситуацию, в которой хочет больше доверять Богу. Помолитесь вместе, прося у Бога смелости и верности.",
      "ending": "Помолитесь вместе",
      "prayer": "Господи, дай нам смелости и верности, чтобы доверять Тебе каждый день."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 20",
      "completed": "День 20 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

