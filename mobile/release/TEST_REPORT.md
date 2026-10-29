# Actual test/build report

Date: 2026-10-28. Tests below are local, not TestFlight or Google Play results.

Update 2026-10-29: 10/10 progress/config tests pass; typecheck, lint and 24×3 content pass. New Android AAB/APK, iOS Simulator Release and unsigned iOS review-candidate archive built successfully with visible Preview access and supplied support contact. Browser QA on a separate local origin: Settings → Preview opens 24 map stops; day 24's six-section screen loads before December; attempting demo completion then exiting leaves day 24 locked in normal mode. Preview banner disappears and all normal date locks return. Privacy/Support local pages render all three languages, correct email links and mutual navigation. EAS whoami: Not logged in. No signed cloud IPA/AAB, TestFlight, Play upload or website publication performed. Later results supersede older profile/contact blockers below; use OWNER_HANDOFF.md for current steps.

| Check | Actual result |
|---|---|
| TypeScript `tsc --noEmit` | PASS |
| Expo ESLint | PASS, no warnings in final run |
| Official Expo Doctor | 17/18 checks PASS; only failure is missing CocoaPods/native tooling |
| Node progress tests | 8/8 PASS |
| 24 days × 3 languages data/structure | 72/72 PASS |
| Referenced PNG/JPG/font assets | 162 references checked, no missing resources |
| UI translation-key parity | PASS, UK/EN/RU keys match |
| Browser story-route/language smoke | 72/72 PASS, real testing preview, language buttons clicked |
| Browser section smoke | 144/144 PASS, all six tabs for every day, English |
| Day 2 language change while reading | PASS; same Bible Story section retained in UK/EN/RU |
| Browser completion/persistence | PASS; completed day 24 on separate test origin, reload preserved completion and Christmas message |
| Production date protection | PASS; direct day 24 URL redirects home before Dec 1; locked label present, testing banner absent; existing completed days 1–12 remain |
| External parent gate | PASS opening challenge and cancel; no third-party navigation performed |
| Browser captured errors | No error entries returned in tested preview |
| Phone-width web QA/screenshots | 390×844 actual web captures; draft reference only |
| Native project generation | PASS, iOS `.xcodeproj` and Android Gradle sources |
| Production export iOS | PASS, Hermes JS bytecode + assets, NOT an IPA/archive |
| Production export Android | PASS, Hermes JS bytecode + assets, NOT an AAB/APK |
| Production export Web | PASS, 11 static routes including privacy/support |
| Local iOS native compile | PASS: Release Simulator build and unsigned arm64 device archive, Xcode 26.6 / SDK 26.5 |
| iOS Simulator installation/start | PASS: installed, launch returned PID, process remained registered; visual/native functional QA not completed |
| iOS installed privacy manifests | 26 scanned; none declare tracking or collected data. Not a runtime network audit |
| Local Android native build | PASS: production bundleRelease; unsigned AAB approximately 154 MB. Fixed background-only splash resource; regenerated native project and rebuilt successfully |
| Android static 16 KB checks | PASS: 44 actual AAB 64-bit ELF libraries; unsigned APK ZIP alignment PASS. Actual 16 KB runtime / Play splits NOT TESTED |
| Android final manifest inspection | API 36/min 24, backup false; sensitive unneeded permissions absent; Firebase auto-init/analytics explicitly false |
| Signed IPA/AAB | NOT CREATED |
| TestFlight / Play testing | NOT STARTED: owner has no accounts yet |
| Physical iPhone/iPad/Android QA | NOT RUN |
| Native offline cold start / OS notifications | NOT RUN; content/fonts are bundled, source-level capability only |
| CI workflow | PREPARED, not pushed or run remotely |

## Assertions covered by automated progress tests

Invalid/corrupt stored values; sorted/deduplicated day range; before-start/Dec 1/Dec 24/after-season dates; invalid route IDs; future locks; completed-day access; test mode only for valid days; production profile refusing test flag; idempotent completion; JSON serialization round trip. These tests exercise pure logic, not a simulated native AsyncStorage implementation. Real browser storage persistence was separately checked.

## Artifacts and evidence

- `content-check.json`, `ui-smoke.json`, `ui-sections.json`
- `release-tests.log`, `production-export.log`, `ios-build-attempt.log`, `android-build-attempt.log`
- `export/metadata.json`, `export/_expo/static/js/ios/*.hbc`, `export/_expo/static/js/android/*.hbc`, web HTML/JS/assets
- `native-projects.tar.gz`: generated source handoff, not signed binaries
- `android-native-check.json`, `android-zipalign.log`, `android-package-inspection.log`, `android-manifest-inspection.log`: actual Android artifact inspection
- `screenshots/*web-draft.png`: actual app UI in browser; not fabricated native store captures

Image optimization: 124 opaque illustrations, originals preserved, 311,869,274 → 92,882,927 bytes for optimized copies. Final export has about **103.2 MiB assets per native platform**, plus ~5.8 MB bytecode. Local unsigned AAB is approximately 154 MB; Simulator zip 116 MB; unsigned iOS archive 221 MB. Store download sizes and actual 16 KB device compatibility still require validation.

## Remaining manual device matrix

Before submission: physical small/large iPhone, iPad portrait/tablet, Android phone/tablet; fresh install before Dec 1, Dec 1/24/timezone changes, completed-day revisit; each locale including long text and large accessibility text; all six sections; image loading/scroll performance; offline launch after force-stop; finish/relaunch/update persistence; language switch without reading reset; Android back/iOS gesture/direct links; parent gate correct/incorrect/cancel; notification allow/deny/time edit/relaunch; privacy/help; splash skip/reduced motion; device storage failure; Christmas completion; production test banner absent. Use a separate test profile/device; never erase the owner's real progress for QA.
