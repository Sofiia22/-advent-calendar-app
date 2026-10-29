# Local native build evidence — 2026-10-28

No store upload, paid account, signing certificate or publication was performed.

## iOS

- CocoaPods 1.16.2: 100 Pods installed successfully using isolated Bundler/Ruby dependencies.
- Xcode 26.6 / SDK 26.5: Release Simulator build **SUCCEEDED**.
- `AdventBibleJourney-1.0.0-ios-simulator.zip`: approximately 116 MB; contains the actual Simulator `.app`, not an IPA.
- Simulator installation and launch succeeded; launch returned PID and the application process remained registered. Full visual, offline, notifications and physical-device testing is still pending.
- Generic iOS device arm64 archive **SUCCEEDED** with signing disabled.
- `AdventBibleJourney-1.0.0-unsigned.xcarchive`: approximately 221 MB, embedded app approximately 133 MB; version 1.0.0, minimum iOS 15.1. `codesign --verify` confirms it is unsigned. Cannot upload this as-is to TestFlight.
- 26 installed privacy manifests inspected: no declared tracking/collected data. See `ios-privacy-manifests.json`; not a substitute for a network audit.
- Evidence: `ios-pod-install.log`, `ios-simulator-build.log`, `ios-device-archive.log`.

## Android

Owner explicitly read/accepted Google's SDK terms and authorized isolated installation. Temurin JDK 17, Android platform 36, build-tools 36.0.0 (plus Gradle-required 35), NDK 27.1.12297006, CMake 3.22.1 and platform-tools installed under `/tmp/advent-native-tools`. Android CLI metrics disabled. Local production `bundleRelease` **SUCCEEDED**, including after regenerating Android native sources. Fixed missing splash drawable by explicitly generating a transparent splash image, preserving the clean navy launch screen. `AdventBibleJourney-1.0.0-unsigned.aab` approximately 154 MB; jarsigner reports unsigned. See `android-release-build.log`. No Android emulator/physical installation or Play validation performed yet.

## Reproduction / boundaries

### Android static compatibility checks

The actual AAB's 44 arm64-v8a/x86_64 libraries pass ELF LOAD alignment (at least 16 KB) and the documented RELRO checks (aligned end or separate LOAD segment). See `android-native-check.json`, tied to the AAB SHA-256. The locally generated unsigned APK passes `zipalign -c -P 16 4`; see `android-zipalign.log`. Neither result replaces execution on a 16 KB device or Play-generated split APK validation.

The APK's manifest confirms target API 36/minimum 24, version 1.0.0/code 1, backup disabled and no camera/microphone/location/contacts/storage/media/AD_ID permissions. Notifications add network/boot/wake/push transport and OEM badge permissions. Firebase messaging auto-init and analytics collection are explicitly false in the built manifest, preventing unneeded automatic remote-push registration; local reminder scheduling remains unchanged. See `android-package-inspection.log` and `android-manifest-inspection.log`. Network traffic remains unverified on a real device.

Temporary tooling can be removed by the OS; source configurations and lockfiles remain in the project. See `native-tools/README.md`. Native release signing uses no debug key. Apple Developer / Play Console accounts, owner credentials, registered identifiers, physical QA and signed testing uploads remain required.
