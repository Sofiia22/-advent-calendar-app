# Google Play testing / release handoff

Status: no Play/EAS account, no signed AAB, no testing track. `../android` is a generated native source project, **not** an installable application. Version 1.0.0 / versionCode 1; proposed unregistered package `com.transfigurationchurch.adventbiblejourney` requires owner confirmation.

## Start the clock early

1. Owner registers/verifies Play Console and chooses the correct personal/organization account; owner accepts terms/pays fees. Do not create an organization account merely to evade testing requirements.
2. Confirm app/package ownership, create app listing, supply required contact, privacy URL, target audience and content declarations. Select child age groups truthfully based on the actual app; Education is a reasonable category.
3. Set up Expo/EAS, then `npx eas-cli@latest build --platform android --profile testing`. Generate/store a genuine upload key with EAS or Android tooling. Keep encrypted backups; never commit credentials. Enroll in Play App Signing as required.
4. Upload the first signed AAB manually to Play internal testing, resolve validation errors, and install via the actual store. First upload/manual setup and service-account permissions may be required before EAS Submit works. No service-account key or fake package ID is provided here.
5. For affected personal accounts created after November 13, 2023: run **closed testing with at least 12 testers opted in continuously for at least 14 days**, then apply for production access and answer testing questions honestly. Internal testing alone does not count. The interval starts with qualifying tester opt-in, not this task or account registration. Recruit real testers; no fabricated engagement/results.
6. Testing and production use the same app/package; test unlock is embedded only in the testing profile. Verify tests, then build `--profile production` with a higher versionCode. Production must have no test banner/unlock.
7. Complete Data safety, IARC rating, content rights, app access instructions, countries and screenshots. Upload production as draft/manual managed publishing; submit only after explicit owner confirmation.

## Local native build

Install JDK 17 and Android SDK/build tools 36 plus compatible NDK (see React Native version catalog), set `ANDROID_HOME`, run `npm run native:prepare`, then `cd android && ./gradlew bundleRelease`. Local generated release signing is intentionally null until real owner upload-key configuration is added. Unsigned output cannot be uploaded to Play. Never use the debug keystore for release.

API requirement verified 2026-10-28: new phone/tablet apps/updates must target API 36+ since 2026-08-31. React Native 0.81's installed version catalog specifies compile/target 36, build tools 36.0.0, NDK 27.1.12297006. Inspect the final merged manifest and Play's validation after a real build. Verify 16 KB memory-page-size compatibility of the actual native libraries; source configuration is not proof.

## Sources

- https://support.google.com/googleplay/android-developer/answer/14151465?hl=en
- https://support.google.com/googleplay/android-developer/answer/11926878?hl=en
- https://support.google.com/googleplay/android-developer/answer/9893335?hl=en
- https://developer.android.com/guide/practices/page-sizes
