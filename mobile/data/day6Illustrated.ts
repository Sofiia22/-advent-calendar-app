import { ImageSourcePropType } from "react-native";
import { LanguageId } from "../state/AdventContext";
import { ADVENT_SECTION_ICONS } from "./adventSectionIcons";
import { IllustratedDayContent } from "./day1";

export const DAY_SIX_ICONS = ADVENT_SECTION_ICONS;
export const DAY_SIX_STORY_IMAGES: readonly ImageSourcePropType[] = [
  require("../assets/advent/day6/story/01-farewell.jpg"),
  require("../assets/advent/day6/story/02-journey.jpg"),
  require("../assets/advent/day6/story/03-night.jpg"),
  require("../assets/advent/day6/story/04-dream.jpg"),
  require("../assets/advent/day6/story/05-well.jpg"),
];

export const DAY_SIX_CONTENT: Record<LanguageId, IllustratedDayContent> = {
  "uk": {
    "dayLabel": "День 6",
    "title": "Яків — Бог із ним",
    "subtitle": "«Я з тобою» — Божа обітниця в дорозі",
    "sectionTitles": {
      "scripture": "Писання",
      "bibleStory": "Біблійна історія",
      "questions": "Запитання",
      "promise": "Обітниця",
      "connection": "Зв’язок з Ісусом",
      "familyChallenge": "Сімейне завдання"
    },
    "scripture": {
      "verse": "«І ось Я з тобою, і буду тебе пильнувати скрізь, куди підеш…»",
      "reference": "Буття 28:15"
    },
    "storyPages": [
      {
        "title": "Родина Якова",
        "paragraphs": [
          "Авраам і Сарра дожили до похилого віку. Нарешті Сарра померла і Авраам захотів поховати її в землі ханаанській, але йому не належало там ані шматочка землі. Тоді він дав срібло мешканцям Ханаану і купив у них поле. На цьому полі було багато дерев і була там печера. Авраам поховав померлу Сарру; потім помер Авраам і син його Ісаак поховав його в тій самій печері, де була похована Сарра.",
          "Авраам воскресне з мертвих останнього дня. Душа Авраама не померла, — вона перебуває тепер в Бога.",
          "«Що мертві воскреснуть, то й Мойсей показав — при кущі, — коли він назвав Господа „Богом Авраама, Богом Ісаака, і Богом Якова“. Бог не є Богом мертвих, а живих, бо всі в Нього живуть» (Лук. 20:37–38).",
          "В день воскресіння оживе й тіло Авраамове і ви побачите його; і якщо ви будете любити Бога так, як Його любив Авраам, ви будете з Авраамом на небі.",
          "«Багато хто прийдуть від сходу та заходу і сядуть у Царстві Небеснім з Авраамом, Ісааком і Яковом» (Матв. 8:11).",
          "Ісаак взяв жінку іменем Ревекка. Вони поселилися в шатрі Сарри. В Ісаака і Ревекки були два сини. Їх імена: Ісав і Яків, вони були близнята, тобто були однолітками, але характером і зовнішністю вони не були схожими одне на одного.",
          "Ісав був непривітною дитиною, а Яків любив Бога і своїх батьків. Коли Ісав виріс, він став мисливцем. Він мав стріли і лук, він ходив до лісу і полював дичину й оленів. Він приносив здобич додому і нею пригощав свого батька Ісаака.",
          "В Ісава було недобре серце: він не думав про Бога і любив їжу та напої більше за Бога.",
          "«Щоб не було поміж вами якого… нечестивця, який, як Ісав за їжу саму відмовився від свого первородства» (Євр. 12:16).",
          "А Яків був пастухом, він довгий час залишався із своїми батьками в наметі, пас овець і баранів. Він любив Бога і часто молився до Нього.",
          "На жаль, Ісаак любив більше Ісава, аніж доброго Якова. А було це так тому, що він любив дичину, яку приносив йому Ісав.",
          "Але Ревекка любила більше Якова, і Бог любив його. Ісава Бог не любив.",
          "А як ви гадаєте, чи любили один одного Ісав і Яків? Ні, вони не любили один одного, інколи Яків погано ставився до Ісава, і ось Ісав зненавидів Якова і замислив вбити його.",
          "Одного разу Ісав сказав:",
          "«Батько мій швидко помре, тоді я вб’ю брата Якова».",
          "Ревекка почула це; вона злякалася, покликала до себе Якова і сказала йому:",
          "«Ось, Ісав, брат твій, хоче вбити тебе, і тепер, сину мій, послухай моїх слів: вставай і тікай до Лавана, мого брата і залишайся деякий час в нього, поки вгамуються лють брата твого. Тоді я пошлю і візьму тебе звідти»."
        ]
      },
      {
        "title": "Далека дорога",
        "paragraphs": [
          "Яків послухався поради своєї матері. Він попрощався з батьком своїм Ісааком, Ісаак поблагословив його на прощання.",
          "Яків не просив батька свого дати йому що-небудь з собою, навіть віслюка. Він взяв тільки палицю в руку свою і пішов у дорогу.",
          "«Я з палицею моєю перейшов цей Йордан».",
          "Сумно було на серці Якова. Він був жалюгідним мандрівником і пішов у далеку країну, якої він ніколи не бачив."
        ]
      },
      {
        "title": "Ніч під зорями",
        "paragraphs": [
          "Не було ні шатра, ні домівки, де Яків міг би перепочити в дорозі, ось чому, коли надійшла ніч, він підклав каменя під голову собі і ліг спати на голій землі.",
          "В тій країні були ведмеді і вовки, але Бог оберігав Якова в дорозі."
        ]
      },
      {
        "title": "Сон і Божа обітниця",
        "paragraphs": [
          "Бог знав, як важко було на душі у нього, тому Він послав йому сон.",
          "Яків побачив уві сні драбину, вершечок якої торкався неба, і ось ангели Божі піднімаються і спускаються по ній.",
          "Потім Яків почув голос. Господь сказав йому:",
          "«Я, Господь, Бог Авраама, батька твого, і Бог Ісаака. Я з тобою і Я збережу тебе всюди, куди б ти не пішов: Я поверну тебе до цієї землі; нащадки твої житимуть у цій ханаанській землі, де ти лежиш тепер».",
          "Яків прокинувся зі сну, тепер у нього було легко на серці; він знав, що Бог і ангели Його охороняли його.",
          "Він ніколи не хотів забути це місце, де він бачив такий чудовий сон; він взяв камінь, який клав собі в узголів’я.",
          "«Тепер, — думав він, — я знайду це місце, коли повернуся до землі Ханаану, так як мені обіцяв це Бог».",
          "Він вилив оливи на камінь і помолився до Бога, кажучи:",
          "«Якщо Бог буде зі мною і збереже мене на шляху, яким я йду, і дасть мені хліба їсти і одежу зодягнутися, і я з мирним серцем повернуся до дому батька, і буде Господь моїм Богом, то цей камінь буде домом Божим».",
          "Яків був певний, що Бог потурбується за нього і поверне його додому, тому що Господь обіцяв йому це.",
          "Бог турбується за вас, дітки. Він посилає з неба ангелів своїх, щоб охороняли вас, так як Він оберігав Якова.",
          "«Бо очі Господні — до праведних, а вуха Його — до їхніх прохань» (І Петра 3:12)."
        ]
      },
      {
        "title": "Зустріч біля криниці",
        "paragraphs": [
          "Потім Яків пішов далі. Багато днів минуло в дорозі, аж нарешті він прийшов до місця, де було багато чудових пасовищ.",
          "Була там криниця, отвір якої був прикладений великим каменем. В країні тій було взагалі мало води. Навколо криниці пастухи пасли овець. Якову радісно було бачити криницю.",
          "Він запитав пастухів:",
          "«Чи не знаєте ви чоловіка, по імені Лаван?»",
          "Бо так називали дядю Якова.",
          "«Так, — відповіли вони, — ми знаємо його».",
          "Яків запитав:",
          "«Чи здоровий він?»",
          "Пастухи відповіли:",
          "«Здоровий: а ось і Рахіль, дочка його, йде з вівцями».",
          "Яків зрадів, тому що Рахіль була його двоюрідна сестра. Він підійшов до неї і поцілував її, піднісши голос свій, заплакав.",
          "Чому плакав Яків? Він плакав, як це часто трапляється, з радості. Яків давно вже не бачив нікого із своїх рідних. І він радий був пізнати свою двоюрідну сестру.",
          "Рахіль не знала Якова, аж поки він не сказав їй:",
          "«Я родич твій, двоюрідний брат твій і прийшов до тебе здалеку».",
          "Тоді Рахіль побігла і сказала батькові своєму Лавану:",
          "«Тату, двоюрідний брат прийшов до нас: я знайшла його, він сидів біля криниці».",
          "Лаван зрадів, побіг назустріч до Якова, обняв, поцілував його і сказав:",
          "«Ти будеш жити з нами: я твій дядя».",
          "Яків обіцяв Лаванові пасти отари його, таким чином Яків залишився служити у Лавана.",
          "Яків був вправним пастухом і стеріг овець вночі від левів і ведмедів. Він пас їх і в пекучий полудень і холодної ночі.",
          "Про себе він міг так сказати:",
          "«Бувало, що вдень знемагала мене спека, а вночі паморозь, а мій сон мандрував від моїх очей» (Бут. 31:40).",
          "Лаван мав дві дочки: одна звалася Лія, а друга — Рахіль. Лаван віддав їх заміж за Якова. Отже, Яків мав дві жінки.",
          "На сьогоднішній день чоловік не має права мати дві жінки, але в стародавні часи дозволялось мати дві жінки, і це вважалось навіть кращим, ніж мати одну дружину.",
          "Яків мав багато дітей. Досить довгий час він жив із жінками і з дітьми своїми в шатрі.",
          "Спочатку він пас тільки Лаванових овець, але згодом Лаван подарував йому також овець і кіз, Яків мав багато хліба, різного одягу, тому що Господь обіцяв йому все це, а наш Господь завжди виконує Свої обіцянки.",
          "Однак Яків не міг забути свого батька і матері, які жили в Ханаані.",
          "Він знав, що Бог обіцяв дати ханаанську землю його нащадкам, і йому так хотілося туди повернутися.",
          "«Вірою Авраам… перебував на землі Обітованій, як на чужій, і проживав у наметах з Ісааком і Яковом, співспадкоємцями тієї обітниці» (Євр. 11:9).",
          "Ось імена перших благочестивих людей, які жили в Ханаані, та імена жінок їхніх:",
          "Авраам — Сарра — Ісаак — Ревекка — Яків — Лія і Рахіль.",
          "«Блажен кожен, хто боїться Господа, хто ходить дорогами Його!» (Пс. 127:1)"
        ]
      }
    ],
    "questions": [
      "Чому Яків залишив свій дім?",
      "Що він узяв із собою в дорогу?",
      "Де Яків спав, коли настала ніч?",
      "Що він побачив уві сні?",
      "Що Бог пообіцяв Якову?",
      "Кого Яків зустрів біля криниці?",
      "Як Бог піклувався про Якова в дорозі?"
    ],
    "promise": {
      "body": "Бог сказав Якову: «Я з тобою». Він пообіцяв берегти його скрізь, куди той піде, і повернути до землі Ханаану. Яків ще не знав, що чекає на нього попереду, але знав, що Бог поруч.",
      "keyLine": "Бог із нами, навіть коли ми не знаємо, що буде далі."
    },
    "connection": {
      "body": "Яків побачив уві сні драбину, яка з’єднувала землю з небом, а Божі ангели піднімалися й спускалися по ній.\nЧерез багато років Ісус використав дуже схожу картину, говорячи про Себе:\n«Побачите небо відкрите та Анголів Божих, що на Людського Сина підіймаються та спускаються».\nІвана 1:51\nСон Якова допомагає нам побачити, що Бог Сам відкриває шлях між небом і людьми.\nБог також сказав Якову:\n«Я з тобою».\nЧерез багато поколінь прийшов Ісус, про Якого було сказано:\n«І дадуть Йому ймення Еммануїл, що в перекладі є: З нами Бог».\nМатвія 1:23",
      "keyLine": "Ісус прийшов, щоб Бог був з нами і щоб привести нас до Бога."
    },
    "familyChallenge": {
      "intro": "Сядьте ввечері разом за чаєм, какао або вечерею.",
      "instruction": "Нехай кожен поділиться: «Коли тобі останнім часом було трохи страшно, самотньо або ти не знав, що буде далі?»",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Потім запитайте: «Як змінюється наше ставлення до ситуації, коли ми пам’ятаємо, що Бог поруч?»",
      "ending": "Згадайте слова Бога до Якова: «І ось Я з тобою, і буду тебе пильнувати скрізь, куди підеш…» — Буття 28:15. Завершіть короткою молитвою один за одного.",
      "prayer": "«Боже, дякуємо, що Ти поруч. Допоможи кожному з нас довіряти Тобі, коли страшно або самотньо»."
    },
    "navigation": {
      "section": "Розділ",
      "of": "з",
      "back": "Назад",
      "next": "Далі",
      "complete": "Завершити День 6",
      "completed": "День 6 завершено",
      "journeyContinues": "Ваша адвент-подорож триває.",
      "backToJourney": "До подорожі"
    }
  },
  "en": {
    "dayLabel": "Day 6",
    "title": "Jacob — God Is With Him",
    "subtitle": "“I am with you” — God’s promise on the journey",
    "sectionTitles": {
      "scripture": "Scripture",
      "bibleStory": "Bible Story",
      "questions": "Questions",
      "promise": "Promise",
      "connection": "Connection",
      "familyChallenge": "Family Challenge"
    },
    "scripture": {
      "verse": "“Behold, I am with you and will keep you wherever you go…”",
      "reference": "Genesis 28:15"
    },
    "storyPages": [
      {
        "title": "Jacob’s Family",
        "paragraphs": [
          "Abraham and Sarah lived to an old age. At last Sarah died, and Abraham wanted to bury her in the land of Canaan, but he did not own even a small piece of land there. So he gave silver to the people of Canaan and bought a field from them. There were many trees in that field, and there was also a cave.",
          "Abraham buried Sarah there. Later Abraham died, and his son Isaac buried him in the same cave where Sarah had been buried.",
          "Abraham will rise from the dead on the last day. Abraham’s soul did not die — it is now with God.",
          "“But even Moses showed in the burning bush passage that the dead are raised, when he called the Lord ‘the God of Abraham, the God of Isaac, and the God of Jacob.’ For He is not the God of the dead but of the living, for all live to Him.” (Luke 20:37–38)",
          "On the day of resurrection Abraham’s body will also live again, and you will see him; and if you love God as Abraham loved Him, you will be with Abraham in heaven.",
          "“Many will come from east and west, and sit down with Abraham, Isaac, and Jacob in the kingdom of heaven.” (Matthew 8:11)",
          "Isaac took a wife named Rebekah. They settled in Sarah’s tent.",
          "Isaac and Rebekah had two sons. Their names were Esau and Jacob. They were twins, which means they were the same age, but in character and appearance they were not alike.",
          "Esau was an unfriendly child, while Jacob loved God and his parents.",
          "When Esau grew up, he became a hunter. He had a bow and arrows, went into the forest, and hunted wild animals and deer. He brought his game home and gave it to his father Isaac to eat.",
          "Esau had an evil heart: he did not think about God and loved food and drink more than God.",
          "“Lest there be any… profane person like Esau, who for one morsel of food sold his birthright.” (Hebrews 12:16)",
          "Jacob, however, was a shepherd. For a long time he remained with his parents in the tent, tending sheep and rams. He loved God and often prayed to Him.",
          "Unfortunately, Isaac loved Esau more than good Jacob. This was because he loved the game that Esau brought him.",
          "But Rebekah loved Jacob more, and God loved him. God did not love Esau.",
          "Do you think Esau and Jacob loved one another? No, they did not. Sometimes Jacob treated Esau badly, and so Esau came to hate Jacob and planned to kill him.",
          "One day Esau said:",
          "“My father will soon die, and then I will kill my brother Jacob.”",
          "Rebekah heard this. She became afraid, called Jacob to her, and said:",
          "“Look, Esau your brother wants to kill you. Now, my son, listen to my words: get up and flee to Laban, my brother, and stay with him for a while until your brother’s anger dies down. Then I will send for you and bring you back from there.”"
        ]
      },
      {
        "title": "A Long Journey",
        "paragraphs": [
          "Jacob listened to his mother’s advice. He said goodbye to his father Isaac, and Isaac blessed him as he left.",
          "Jacob did not ask his father to give him anything to take with him, not even a donkey. He took only a staff in his hand and set out on his journey.",
          "“With my staff I crossed over this Jordan.”",
          "Jacob’s heart was sad. He was a poor traveler going into a distant country that he had never seen."
        ]
      },
      {
        "title": "A Night Beneath the Stars",
        "paragraphs": [
          "There was no tent or home where Jacob could rest along the way, so when night came, he put a stone under his head and lay down to sleep on the bare ground.",
          "There were bears and wolves in that land, but God protected Jacob on his journey."
        ]
      },
      {
        "title": "The Dream and God’s Promise",
        "paragraphs": [
          "God knew how heavy Jacob’s heart was, so He sent him a dream.",
          "In his dream Jacob saw a ladder whose top reached heaven, and the angels of God were going up and down on it.",
          "Then Jacob heard a voice. The Lord said to him:",
          "“I am the LORD, the God of Abraham your father and the God of Isaac. I am with you, and I will keep you wherever you go. I will bring you back to this land; your descendants will live in this land of Canaan where you are now lying.”",
          "Jacob awoke from his sleep, and now his heart felt lighter. He knew that God and His angels were protecting him.",
          "He never wanted to forget the place where he had seen such a wonderful dream. He took the stone that he had placed under his head.",
          "“Now,” he thought, “I will recognize this place when I return to the land of Canaan, just as God has promised me.”",
          "He poured oil on the stone and prayed to God, saying:",
          "“If God will be with me and keep me on this journey that I am taking, and give me bread to eat and clothing to wear, so that I return to my father’s house in peace, and the LORD will be my God, then this stone will be God’s house.”",
          "Jacob was certain that God would care for him and bring him home because the Lord had promised him this.",
          "God cares for you too, children. He sends His angels from heaven to guard you, just as He protected Jacob.",
          "“For the eyes of the LORD are on the righteous, and His ears are open to their prayers.” (1 Peter 3:12)"
        ]
      },
      {
        "title": "A Meeting at the Well",
        "paragraphs": [
          "Then Jacob continued on his way.",
          "Many days passed on the road until at last he came to a place where there were many beautiful pastures.",
          "There was a well there whose opening was covered with a large stone. There was generally very little water in that country. Shepherds were tending their sheep around the well. Jacob was glad to see the well.",
          "He asked the shepherds:",
          "“Do you know a man named Laban?”",
          "That was the name of Jacob’s uncle.",
          "“Yes,” they answered, “we know him.”",
          "Jacob asked:",
          "“Is he well?”",
          "The shepherds answered:",
          "“He is well; and here is Rachel, his daughter, coming with the sheep.”",
          "Jacob rejoiced because Rachel was his cousin.",
          "He went up to her and kissed her, then raised his voice and wept.",
          "Why did Jacob weep? He wept, as sometimes happens, from joy. Jacob had not seen any of his relatives for a long time, and he was glad to meet his cousin.",
          "Rachel did not know Jacob until he said to her:",
          "“I am your relative, your cousin, and I have come to you from far away.”",
          "Then Rachel ran and told her father Laban:",
          "“Father, our cousin has come to us. I found him sitting beside the well.”",
          "Laban rejoiced, ran to meet Jacob, embraced him, kissed him, and said:",
          "“You will live with us; I am your uncle.”",
          "Jacob promised Laban that he would tend his flocks, and so Jacob remained to serve Laban.",
          "Jacob was a skillful shepherd and guarded the sheep at night from lions and bears. He tended them both in the scorching heat of noon and in the cold of night.",
          "He could say of himself:",
          "“In the day the drought consumed me, and the frost by night, and my sleep departed from my eyes.” (Genesis 31:40)",
          "Laban had two daughters: one was named Leah, and the other Rachel. Laban gave them in marriage to Jacob. So Jacob had two wives.",
          "Today a man is not permitted to have two wives, but in ancient times it was permitted to have two wives, and this was even considered better than having only one wife.",
          "Jacob had many children.",
          "For quite a long time he lived with his wives and children in a tent.",
          "At first he tended only Laban’s sheep, but later Laban also gave him sheep and goats. Jacob had plenty of bread and different clothing because the Lord had promised him all these things, and our Lord always keeps His promises.",
          "But Jacob could not forget his father and mother, who lived in Canaan.",
          "He knew that God had promised to give the land of Canaan to his descendants, and he greatly wanted to return there.",
          "“By faith Abraham… dwelt in the land of promise as in a foreign country, dwelling in tents with Isaac and Jacob, the heirs with him of the same promise.” (Hebrews 11:9)",
          "Here are the names of the first godly people who lived in Canaan and the names of their wives:",
          "Abraham — Sarah — Isaac — Rebekah — Jacob — Leah and Rachel.",
          "“Blessed is every one who fears the LORD, who walks in His ways.” (Psalm 128:1)"
        ]
      }
    ],
    "questions": [
      "Why did Jacob leave his home?",
      "What did he take on his journey?",
      "Where did Jacob sleep when night came?",
      "What did he see in his dream?",
      "What did God promise Jacob?",
      "Whom did Jacob meet at the well?",
      "How did God care for Jacob on his journey?"
    ],
    "promise": {
      "body": "God told Jacob: “I am with you.” He promised to keep him wherever he went and bring him back to Canaan. Jacob did not yet know what lay ahead, but he knew God was near.",
      "keyLine": "God is with us, even when we do not know what comes next."
    },
    "connection": {
      "body": "Jacob dreamed of a ladder joining earth and heaven, with the angels of God ascending and descending on it.\nMany years later, Jesus used the same picture when speaking about Himself:\n“You shall see heaven open, and the angels of God ascending and descending upon the Son of Man.”\nJohn 1:51\nJacob’s dream helps us see that God Himself opens the way between heaven and people.\nGod also told Jacob:\n“I am with you.”\nMany generations later Jesus came, and He was called:\n“Immanuel,” which is translated, “God with us.”\nMatthew 1:23",
      "keyLine": "Jesus came so that God could be with us and to bring us to God."
    },
    "familyChallenge": {
      "intro": "Sit together in the evening over tea, cocoa, or dinner.",
      "instruction": "Let everyone share: “When have you recently felt afraid, alone, or unsure what would happen next?”",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Then ask: “How does it change things to remember that God is with us?”",
      "ending": "Remember God’s words to Jacob: “Behold, I am with you and will keep you wherever you go…” — Genesis 28:15. Finish with a short prayer for one another.",
      "prayer": "“God, thank You for being near. Help each of us trust You when we feel afraid or alone.”"
    },
    "navigation": {
      "section": "Section",
      "of": "of",
      "back": "Back",
      "next": "Next",
      "complete": "Complete Day 6",
      "completed": "Day 6 completed",
      "journeyContinues": "Your Advent journey continues.",
      "backToJourney": "Back to journey"
    }
  },
  "ru": {
    "dayLabel": "День 6",
    "title": "Иаков — Бог с ним",
    "subtitle": "«Я с тобою» — Божье обещание в пути",
    "sectionTitles": {
      "scripture": "Писание",
      "bibleStory": "Библейская история",
      "questions": "Вопросы",
      "promise": "Обещание",
      "connection": "Связь с Иисусом",
      "familyChallenge": "Семейное задание"
    },
    "scripture": {
      "verse": "«И вот Я с тобою, и сохраню тебя везде, куда ты ни пойдешь…»",
      "reference": "Бытие 28:15"
    },
    "storyPages": [
      {
        "title": "Семья Иакова",
        "paragraphs": [
          "Авраам и Сарра дожили до преклонного возраста. Наконец Сарра умерла, и Авраам захотел похоронить её в земле Ханаанской, но ему не принадлежало там даже небольшого участка земли.",
          "Тогда он дал серебро жителям Ханаана и купил у них поле. На этом поле было много деревьев, и там находилась пещера.",
          "Авраам похоронил умершую Сарру; затем умер Авраам, и сын его Исаак похоронил его в той же пещере, где была похоронена Сарра.",
          "Авраам воскреснет из мёртвых в последний день. Душа Авраама не умерла — она теперь пребывает у Бога.",
          "«А что мёртвые воскреснут, и Моисей показал при купине, когда назвал Господа Богом Авраама и Богом Исаака и Богом Иакова. Бог же не есть Бог мёртвых, но живых, ибо у Него все живы». (Луки 20:37–38)",
          "В день воскресения оживёт и тело Авраама, и вы увидите его; и если вы будете любить Бога так, как любил Его Авраам, вы будете с Авраамом на небе.",
          "«Многие придут с востока и запада и возлягут с Авраамом, Исааком и Иаковом в Царстве Небесном». (Матфея 8:11)",
          "Исаак взял жену по имени Ревекка. Они поселились в шатре Сарры.",
          "У Исаака и Ревекки было два сына. Их звали Исав и Иаков. Они были близнецами, то есть были одного возраста, но по характеру и внешности не были похожи друг на друга.",
          "Исав был неприветливым ребёнком, а Иаков любил Бога и своих родителей.",
          "Когда Исав вырос, он стал охотником. У него были лук и стрелы, он ходил в лес и охотился на дичь и оленей. Добычу он приносил домой и угощал ею своего отца Исаака.",
          "У Исава было недоброе сердце: он не думал о Боге и любил еду и напитки больше Бога.",
          "«Чтобы не было между вами какого… нечестивца, который бы, как Исав, за одну снедь отказался от своего первородства». (Евреям 12:16)",
          "А Иаков был пастухом. Он долгое время оставался со своими родителями в шатре, пас овец и баранов. Он любил Бога и часто молился Ему.",
          "К сожалению, Исаак любил Исава больше, чем доброго Иакова. Это было потому, что он любил дичь, которую приносил ему Исав.",
          "Но Ревекка больше любила Иакова, и Бог любил его. Исава Бог не любил.",
          "Как вы думаете, любили ли Исав и Иаков друг друга? Нет, они не любили друг друга. Иногда Иаков плохо относился к Исаву, и вот Исав возненавидел Иакова и задумал убить его.",
          "Однажды Исав сказал:",
          "«Отец мой скоро умрёт, тогда я убью брата Иакова».",
          "Ревекка услышала это; она испугалась, позвала к себе Иакова и сказала ему:",
          "«Вот, Исав, брат твой, хочет убить тебя. Теперь, сын мой, послушай моих слов: встань и беги к Лавану, брату моему, и оставайся у него некоторое время, пока не утихнет гнев брата твоего. Тогда я пошлю и возьму тебя оттуда»."
        ]
      },
      {
        "title": "Далёкая дорога",
        "paragraphs": [
          "Иаков послушался совета своей матери. Он попрощался со своим отцом Исааком, и Исаак благословил его на прощание.",
          "Иаков не просил отца дать ему что-нибудь с собой, даже осла. Он взял только посох в руку и отправился в путь.",
          "«Я с посохом моим перешёл этот Иордан».",
          "Грустно было на сердце Иакова. Он был жалким странником и шёл в далёкую страну, которой никогда раньше не видел."
        ]
      },
      {
        "title": "Ночь под звёздами",
        "paragraphs": [
          "Не было ни шатра, ни дома, где Иаков мог бы отдохнуть в дороге. Поэтому, когда наступила ночь, он положил камень под голову и лёг спать на голой земле.",
          "В той стране были медведи и волки, но Бог охранял Иакова в дороге."
        ]
      },
      {
        "title": "Сон и Божье обещание",
        "paragraphs": [
          "Бог знал, как тяжело было у него на душе, поэтому Он послал ему сон.",
          "Иаков увидел во сне лестницу, верх которой касался неба, и вот ангелы Божьи поднимались и спускались по ней.",
          "Потом Иаков услышал голос. Господь сказал ему:",
          "«Я Господь, Бог Авраама, отца твоего, и Бог Исаака. Я с тобою и сохраню тебя везде, куда бы ты ни пошёл. Я возвращу тебя в эту землю; потомки твои будут жить в этой Ханаанской земле, на которой ты теперь лежишь».",
          "Иаков проснулся, и теперь у него стало легко на сердце; он знал, что Бог и Его ангелы охраняли его.",
          "Он никогда не хотел забывать это место, где видел такой чудесный сон. Он взял камень, который клал себе под голову.",
          "«Теперь, — думал он, — я узнаю это место, когда вернусь в землю Ханаанскую, как обещал мне Бог».",
          "Он вылил масло на камень и помолился Богу, говоря:",
          "«Если Бог будет со мною и сохранит меня на пути, которым я иду, даст мне хлеб есть и одежду одеться, и я с мирным сердцем возвращусь в дом отца моего, и будет Господь моим Богом, то этот камень будет домом Божьим».",
          "Иаков был уверен, что Бог позаботится о нём и вернёт его домой, потому что Господь обещал ему это.",
          "Бог заботится и о вас, дети. Он посылает с неба Своих ангелов, чтобы они охраняли вас, как Он охранял Иакова.",
          "«Потому что очи Господа обращены к праведным и уши Его к молитве их». (1 Петра 3:12)"
        ]
      },
      {
        "title": "Встреча у колодца",
        "paragraphs": [
          "Затем Иаков пошёл дальше.",
          "Много дней прошло в пути, пока наконец он не пришёл в место, где было много прекрасных пастбищ.",
          "Там был колодец, отверстие которого было закрыто большим камнем. В той стране вообще было мало воды. Вокруг колодца пастухи пасли овец. Иаков был рад увидеть колодец.",
          "Он спросил пастухов:",
          "«Не знаете ли вы человека по имени Лаван?»",
          "Так звали дядю Иакова.",
          "«Да, — ответили они, — мы знаем его».",
          "Иаков спросил:",
          "«Здоров ли он?»",
          "Пастухи ответили:",
          "«Здоров; а вот и Рахиль, дочь его, идёт с овцами».",
          "Иаков обрадовался, потому что Рахиль была его двоюродной сестрой.",
          "Он подошёл к ней, поцеловал её и, возвысив голос, заплакал.",
          "Почему плакал Иаков? Он плакал, как это часто бывает, от радости. Иаков давно уже не видел никого из своих родственников и был рад встретить свою двоюродную сестру.",
          "Рахиль не знала Иакова, пока он не сказал ей:",
          "«Я твой родственник, твой двоюродный брат, и пришёл к тебе издалека».",
          "Тогда Рахиль побежала и сказала своему отцу Лавану:",
          "«Папа, наш двоюродный брат пришёл к нам; я нашла его, он сидел возле колодца».",
          "Лаван обрадовался, побежал навстречу Иакову, обнял и поцеловал его и сказал:",
          "«Ты будешь жить с нами; я твой дядя».",
          "Иаков обещал Лавану пасти его стада, и таким образом Иаков остался служить у Лавана.",
          "Иаков был искусным пастухом и по ночам охранял овец от львов и медведей. Он пас их и в палящий полдень, и холодной ночью.",
          "О себе он мог сказать:",
          "«Днём томил меня зной, а ночью стужа, и сон мой убегал от глаз моих». (Бытие 31:40)",
          "У Лавана было две дочери: одну звали Лия, а другую — Рахиль. Лаван отдал их замуж за Иакова. Таким образом, у Иакова было две жены.",
          "В наши дни мужчина не имеет права иметь двух жён, но в древние времена разрешалось иметь двух жён, и это даже считалось лучше, чем иметь одну жену.",
          "У Иакова было много детей.",
          "Довольно долгое время он жил со своими жёнами и детьми в шатре.",
          "Сначала он пас только овец Лавана, но со временем Лаван подарил ему также овец и коз. У Иакова было много хлеба и разной одежды, потому что Господь обещал ему всё это, а наш Господь всегда исполняет Свои обещания.",
          "Но Иаков не мог забыть своего отца и мать, которые жили в Ханаане.",
          "Он знал, что Бог обещал дать Ханаанскую землю его потомкам, и ему очень хотелось туда вернуться.",
          "«Верою Авраам… обитал на земле обетованной, как на чужой, и жил в шатрах с Исааком и Иаковом, сонаследниками того же обетования». (Евреям 11:9)",
          "Вот имена первых благочестивых людей, живших в Ханаане, и имена их жён:",
          "Авраам — Сарра — Исаак — Ревекка — Иаков — Лия и Рахиль.",
          "«Блажен всякий боящийся Господа, ходящий путями Его!» (Псалом 127:1)"
        ]
      }
    ],
    "questions": [
      "Почему Иаков покинул свой дом?",
      "Что он взял с собой в дорогу?",
      "Где Иаков спал, когда наступила ночь?",
      "Что он увидел во сне?",
      "Что Бог обещал Иакову?",
      "Кого Иаков встретил у колодца?",
      "Как Бог заботился об Иакове в пути?"
    ],
    "promise": {
      "body": "Бог сказал Иакову: «Я с тобою». Он обещал хранить его везде, куда тот пойдёт, и вернуть в землю Ханаанскую. Иаков ещё не знал, что ждёт его впереди, но знал, что Бог рядом.",
      "keyLine": "Бог с нами, даже когда мы не знаем, что будет дальше."
    },
    "connection": {
      "body": "Иаков увидел во сне лестницу, соединяющую землю с небом, а ангелы Божьи поднимались и спускались по ней.\nМного лет спустя Иисус использовал тот же образ, говоря о Себе:\n«Увидите небо отверстым и Ангелов Божиих восходящих и нисходящих к Сыну Человеческому».\nИоанна 1:51\nСон Иакова помогает нам увидеть, что Сам Бог открывает путь между небом и людьми.\nБог также сказал Иакову:\n«Я с тобою».\nМного поколений спустя пришёл Иисус, о Котором было сказано:\n«И нарекут имя Ему Еммануил, что значит: с нами Бог».\nМатфея 1:23",
      "keyLine": "Иисус пришёл, чтобы Бог был с нами и чтобы привести нас к Богу."
    },
    "familyChallenge": {
      "intro": "Сядьте вечером вместе за чаем, какао или ужином.",
      "instruction": "Пусть каждый поделится: «Когда тебе в последнее время было страшно, одиноко или ты не знал, что будет дальше?»",
      "examplesLabel": "",
      "examples": [],
      "reflection": "Затем спросите: «Как меняется наше отношение к ситуации, когда мы помним, что Бог рядом?»",
      "ending": "Вспомните слова Бога Иакову: «И вот Я с тобою, и сохраню тебя везде, куда ты ни пойдешь…» — Бытие 28:15. Завершите короткой молитвой друг за друга.",
      "prayer": "«Боже, спасибо, что Ты рядом. Помоги каждому из нас доверять Тебе, когда страшно или одиноко»."
    },
    "navigation": {
      "section": "Раздел",
      "of": "из",
      "back": "Назад",
      "next": "Далее",
      "complete": "Завершить День 6",
      "completed": "День 6 завершён",
      "journeyContinues": "Ваше адвент-путешествие продолжается.",
      "backToJourney": "К путешествию"
    }
  }
};

