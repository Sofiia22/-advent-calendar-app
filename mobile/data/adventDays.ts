import { LanguageId } from "../state/AdventContext";

export type ConnectionType = "promise" | "picture" | "line" | "fulfillment";

type LocalizedTitle = Record<LanguageId, string>;

export type AdventDayMeta = {
  id: number;
  symbol: string;
  connectionType: ConnectionType;
  title: LocalizedTitle;
};

const title = (en: string, uk: string, ru: string): LocalizedTitle => ({ en, uk, ru });

export const ADVENT_DAYS: readonly AdventDayMeta[] = [
  { id: 1, symbol: "🌎", connectionType: "promise", title: title("Creation of the World", "Створення світу", "Сотворение мира") },
  { id: 2, symbol: "🌳", connectionType: "line", title: title("Adam and Eve — Sin Enters the World", "Адам і Єва — гріх входить у світ", "Адам и Ева — грех входит в мир") },
  { id: 3, symbol: "🛶", connectionType: "picture", title: title("Noah and the Flood", "Ной і потоп", "Ной и потоп") },
  { id: 4, symbol: "⭐", connectionType: "promise", title: title("Abraham — God’s Promise", "Авраам — Божа обітниця", "Авраам — Божье обещание") },
  { id: 5, symbol: "🐑", connectionType: "picture", title: title("Isaac — God Provides", "Ісаак — Бог подбає", "Исаак — Бог усмотрит") },
  { id: 6, symbol: "🪜", connectionType: "promise", title: title("Jacob — God Is With Him", "Яків — Бог із ним", "Иаков — Бог с ним") },
  { id: 7, symbol: "🌾", connectionType: "picture", title: title("Joseph — God Turns Evil into Good", "Йосип — Бог обертає зло на добро", "Иосиф — Бог обращает зло во благо") },
  { id: 8, symbol: "🔥", connectionType: "promise", title: title("Moses — God Has a Plan", "Мойсей — Бог має план", "Моисей — у Бога есть план") },
  { id: 9, symbol: "🌊", connectionType: "picture", title: title("God Makes a Way", "Бог відкриває шлях", "Бог открывает путь") },
  { id: 10, symbol: "📜", connectionType: "promise", title: title("God Is Holy and Faithful", "Бог святий і вірний", "Бог свят и верен") },
  { id: 11, symbol: "🏰", connectionType: "promise", title: title("God Keeps His Promises", "Бог виконує Свої обітниці", "Бог исполняет Свои обещания") },
  { id: 12, symbol: "🌾", connectionType: "line", title: title("God Cares for His People", "Бог піклується про Своїх людей", "Бог заботится о Своих людях") },
  { id: 13, symbol: "👑", connectionType: "promise", title: title("David — From Shepherd to King", "Давид — від пастуха до царя", "Давид — от пастуха до царя") },
  { id: 14, symbol: "👑", connectionType: "promise", title: title("Solomon — Wisdom and the Heart’s Choices", "Соломон — мудрість і вибір серця", "Соломон — мудрость и выбор сердца") },
  { id: 15, symbol: "🔥", connectionType: "promise", title: title("Elijah — Faithful to the Living God", "Ілля — вірність живому Богові", "Илия — верность живому Богу") },
  { id: 16, symbol: "🫙", connectionType: "promise", title: title("Elisha — God Hears and Helps", "Єлисей — Бог чує і допомагає", "Елисей — Бог слышит и помогает") },
  { id: 17, symbol: "🐟", connectionType: "promise", title: title("God Sends Jonah to Nineveh", "Бог посилає Йону в Ніневію", "Бог посылает Иону в Ниневию") },
  { id: 18, symbol: "🙏", connectionType: "promise", title: title("Trusting in the Lord — The Story of Hezekiah", "Надія на Господа — історія Єзекії", "Упование на Господа — история Езекии") },
  { id: 19, symbol: "🔥", connectionType: "promise", title: title("Faithful to God — The Furnace and the Writing on the Wall", "Вірність Богові — вогняна піч і напис на стіні", "Верность Богу — огненная печь и надпись на стене") },
  { id: 20, symbol: "🦁", connectionType: "promise", title: title("Daniel — The Lions’ Den", "Даниїл — лев’ячий рів", "Даниил — львиный ров") },
  { id: 21, symbol: "👑", connectionType: "promise", title: title("Queen Esther", "Цариця Естер", "Царица Есфирь") },
  { id: 22, symbol: "🏛️", connectionType: "promise", title: title("Return to Jerusalem", "Повернення до Єрусалима", "Возвращение в Иерусалим") },
  { id: 23, symbol: "🪽", connectionType: "fulfillment", title: title("The Promised Savior", "Обіцянка Спасителя", "Обещанный Спаситель") },
  { id: 24, symbol: "✨", connectionType: "fulfillment", title: title("Jesus Christ — The Promised Savior", "Ісус Христос — обіцяний Спаситель", "Иисус Христос — обещанный Спаситель") },
] as const;

export function getAdventDay(day: number) {
  return ADVENT_DAYS.find((item) => item.id === day);
}
