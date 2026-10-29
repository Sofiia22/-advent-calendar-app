# Як отримати Advent Bible Journey на телефон — 29 жовтня 2026

Нічого не опубліковано. Оновлені локальні збірки перевірено; підписані IPA/AAB через EAS потребують входу у ваші акаунти. Перевірка Expo зараз: Not logged in. Старі непідписані файли не можна просто завантажити в TestFlight/Play.

## 1. Підключення акаунтів — один раз

- Expo: створіть/відкрийте акаунт на https://expo.dev/signup. На цьому Mac відкрийте термінал проєкту й виконайте наведені нижче login/init; увійдіть самостійно. EAS прив’яже справжній projectId. Не вигадуйте UUID і не надсилайте пароль у чат.
- iPhone: потрібна активна платна участь Apple Developer (https://developer.apple.com/programs/enroll/). Власник приймає угоди/підтверджує особу. У https://appstoreconnect.apple.com → Apps → + → New App створіть Advent Bible Journey; bundle ID: com.transfigurationchurch.adventbiblejourney (підтвердьте власника до реєстрації), SKU: advent-bible-journey. Збережіть числовий Apple ID застосунку.
- Android у Google Play: створіть/підтвердьте акаунт на https://play.google.com/console/signup, далі Create app → Advent Bible Journey. Package: com.transfigurationchurch.adventbiblejourney. Для першого встановлення APK напряму Play-акаунт ще не потрібен.

Команди підключення (виконуєте ви або разом зі мною, після вашого входу):
```sh
cd "/Users/sofiiamaksymchuk/.codex/.chatgpt-projects/g-p-6a69026da1708191a1c9f7895e92a433/app/mobile"
npx eas-cli@latest login
npx eas-cli@latest init
```
Оберіть правильний Expo акаунт/організацію; якщо проєкт уже існує — прив’яжіть його, не створюйте дублікат. Назва церкви в застосунку не замінює підтвердження юридичного власника акаунтів.

## 2. iPhone → TestFlight → Install

1. Якщо Bundle ID ще немає у списку App Store Connect, спочатку запускаємо збірку нижче: EAS зареєструє його через ваш Apple Developer акаунт. Потім створіть запис New App перед завантаженням у TestFlight. Запускаємо підписану збірку:
```sh
npx eas-cli@latest build --platform ios --profile testing
```
2. У запитах EAS увійдіть у свій Apple Developer акаунт, оберіть правильну Team, дозвольте створення Apple Distribution certificate та App Store provisioning profile, якщо їх ще немає. Власник повинен мати відповідні права. Сертифікати керуються в EAS; не надсилайте їх у чат.
3. **Лише після вашого окремого дозволу на завантаження в TestFlight:**
```sh
npx eas-cli@latest submit --platform ios --profile testing
```
Оберіть щойно створений build за його ID, правильну Apple Team та числовий App Store Connect Apple ID (можна записати як submit.testing.ios.ascAppId в eas.json після створення запису). CLI запропонує налаштувати App Store Connect API key; приватний ключ зберігайте в EAS, не в Git.
4. App Store Connect → застосунок → TestFlight → дочекайтеся processing → Internal Testing → + Group → додайте себе як внутрішнього тестувальника (користувача App Store Connect із належною роллю) → додайте build.
5. На iPhone встановіть TestFlight з App Store → відкрийте запрошення → Accept → Install. Для сторонніх зовнішніх тестувальників може знадобитися Beta App Review.

Завантаження в TestFlight не означає публікацію в App Store. Production/App Review не запускаємо без вашого підтвердження. У App Store Connect обираємо ручний реліз.

## 3. Android — найшвидше на свій телефон

```sh
npx eas-cli@latest build --platform android --profile phone
```
Коли EAS запропонує Android keystore, дозвольте створення справжнього ключа для цього package або оберіть вже наявний правильний ключ. Не змінюйте ключ між тестуванням і релізом; збережіть безпечну резервну копію через EAS credentials.

Після успішної збірки відкрийте EAS Install-посилання на Android → Download APK → дозвольте встановлення з цього джерела, якщо система попросить → Install. Це встановлюваний підписаний APK, без Expo Go і без сервера розробки; не публікація в Play.

Для Google Play:
```sh
npx eas-cli@latest build --platform android --profile testing
```
**Після дозволу на завантаження:** Play Console → застосунок → Testing → Internal testing → Create new release → Play App Signing → завантажте підписаний AAB з EAS → Save/Review → додайте список тестувальників. Перед фактичним запуском тестового релізу — ваше підтвердження. На телефоні відкрийте opt-in посилання тим самим Google-акаунтом → Join → Install from Google Play.

Для першого релізу найпростіше ручне завантаження AAB; Google service-account JSON не потрібен. Для подальшого EAS Submit налаштовується service account з доступом до цього застосунку через EAS Credentials. Поточний submit profile залишає реліз draft. Не натискайте Production/Roll out без погодження. Якщо Console вимагає 12 тестувальників і 14 безперервних днів, internal test не замінює closed test.

## 4. Privacy / Support на baptistslavic.com

Адміністратору сайту передайте два готові файли:
- release/site/advent/privacy/index.html → https://baptistslavic.com/advent/privacy/
- release/site/advent/support/index.html → https://baptistslavic.com/advent/support/

Або вставте їхній текст у дві сторінки WordPress з відповідними адресами. Сторінки тримовні; контакт: transfigurationbaptistchurch01@gmail.com. Публікувати — лише після вашого погодження. Після розміщення перевірити обидві HTTPS адреси без входу; саме їх додати до форм магазинів. Вміст перевірено локально, публічні URL не оголошені працюючими.

## 5. Що вставити рецензентам Apple і Google

App Store Connect → App Review Information → Notes.
Play Console → Policy / App content → App access → restricted functionality → instructions (календар обмежений датами).

Текст англійською:
> No account or password is required. Normal calendar days unlock December 1–24, 2026 in device-local time. To review all content at any time, open Settings → Preview all 24 days. Return to Journey, select any day 1–24, then tap its story arrow. All six sections and three languages are available. Preview mode is clearly labelled and accessible to everyone; it does not save day completion and ends on Exit preview or app restart. Normal calendar unlocking is unchanged. External YouTube/Maps links are behind a parental arithmetic challenge. Support: transfigurationbaptistchurch01@gmail.com.

Це той самий відкритий режим у фінальному застосунку, не секретний код і не окрема підмінна версія для магазинів.

## Фактично перевірено

TypeScript/lint/контент і прогрес; нова Android Release-компіляція та iOS Simulator Release-компіляція. У браузері: Settings → Preview відкриває всі 24 позначки, день 24 читається до грудня, вихід знову закриває майбутні дні, демо-завершення не відкриває день у звичайному режимі. Нативна перевірка на ваших телефонах, підписування й TestFlight/Play upload ще потрібні.

Офіційні джерела: https://docs.expo.dev/build/setup/ · https://docs.expo.dev/submit/ios/ · https://docs.expo.dev/submit/android/ · https://docs.expo.dev/build-reference/app-versions/ · https://developer.apple.com/app-store/review/guidelines/
