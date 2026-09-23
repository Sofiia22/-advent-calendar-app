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
  { id: 4, symbol: "🏗️", connectionType: "line", title: title("Tower of Babel", "Вавилонська вежа", "Вавилонская башня") },
  { id: 5, symbol: "⭐", connectionType: "promise", title: title("Abraham — God’s Promise", "Авраам — Божа обітниця", "Авраам — Божье обещание") },
  { id: 6, symbol: "🐑", connectionType: "picture", title: title("Isaac — Son of Promise", "Ісак — син обітниці", "Исаак — сын обещания") },
  { id: 7, symbol: "🪜", connectionType: "line", title: title("Jacob — The Promise Continues", "Яків — обітниця триває", "Иаков — обещание продолжается") },
  { id: 8, symbol: "🌾", connectionType: "line", title: title("Joseph — God Works Through Trials", "Йосип — Бог діє у випробуваннях", "Иосиф — Бог действует в испытаниях") },
  { id: 9, symbol: "🌊", connectionType: "picture", title: title("Moses and the Exodus", "Мойсей і вихід з Єгипту", "Моисей и исход из Египта") },
  { id: 10, symbol: "🐑", connectionType: "picture", title: title("Passover", "Пасха", "Пасха") },
  { id: 11, symbol: "📜", connectionType: "line", title: title("God’s Law and Covenant", "Божий Закон і Заповіт", "Божий Закон и Завет") },
  { id: 12, symbol: "🏞️", connectionType: "promise", title: title("The Promised Land", "Обіцяна земля", "Обетованная земля") },
  { id: 13, symbol: "🌾", connectionType: "line", title: title("Ruth", "Рут", "Руфь") },
  { id: 14, symbol: "👑", connectionType: "promise", title: title("David", "Давид", "Давид") },
  { id: 15, symbol: "🏛️", connectionType: "line", title: title("Solomon and the Temple", "Соломон і храм", "Соломон и храм") },
  { id: 16, symbol: "🔥", connectionType: "line", title: title("Elijah — God Is Faithful", "Ілля — Бог вірний", "Илия — Бог верен") },
  { id: 17, symbol: "📜", connectionType: "promise", title: title("Isaiah — The Promised Savior", "Ісая — обіцяний Спаситель", "Исаия — обещанный Спаситель") },
  { id: 18, symbol: "⭐", connectionType: "promise", title: title("Micah — Bethlehem", "Михей — Вифлеєм", "Михей — Вифлеем") },
  { id: 19, symbol: "🏚️", connectionType: "line", title: title("Exile and Return", "Вигнання і повернення", "Изгнание и возвращение") },
  { id: 20, symbol: "🕯️", connectionType: "promise", title: title("Waiting for the Messiah", "Очікування Месії", "Ожидание Мессии") },
  { id: 21, symbol: "🕊️", connectionType: "line", title: title("Zechariah and Elizabeth", "Захарія та Єлисавета", "Захария и Елисавета") },
  { id: 22, symbol: "🪽", connectionType: "fulfillment", title: title("Mary and Joseph", "Марія та Йосип", "Мария и Иосиф") },
  { id: 23, symbol: "🐴", connectionType: "fulfillment", title: title("Journey to Bethlehem", "Подорож до Вифлеєма", "Путь в Вифлеем") },
  { id: 24, symbol: "✨", connectionType: "fulfillment", title: title("Jesus Christ — The Promised Savior", "Ісус Христос — обіцяний Спаситель", "Иисус Христос — обещанный Спаситель") },
] as const;

export function getAdventDay(day: number) {
  return ADVENT_DAYS.find((item) => item.id === day);
}
