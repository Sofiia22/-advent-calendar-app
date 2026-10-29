# Apple App Store / TestFlight handoff

Status: no account, no signed archive/IPA, no TestFlight upload. Generated Xcode project: `../ios/AdventBibleJourney.xcodeproj`. After CocoaPods install, open the generated `.xcworkspace`, not just `.xcodeproj`.

## Owner actions

1. Enroll/verify Apple Developer membership as the correct individual or organization. The owner must accept agreements and pay any fee directly. For an organization, prepare legal entity information and D-U-N-S if requested.
2. Confirm the proposed identifier `com.transfigurationchurch.adventbiblejourney` is owned/available and appropriate; it is not registered yet. Confirm the display name Advent Bible Journey and publisher identity.
3. In App Store Connect create the app, SKU and primary language; provide verified contact, support URL and privacy URL. Complete tax/trader/territory declarations as applicable. Do not invent legal information.
4. Sign in locally to Expo/EAS (`npx eas-cli@latest login`), run `npx eas-cli@latest init`, then `npx eas-cli@latest build --platform ios --profile testing`. Credentials are handled through the official CLI, never pasted in chat/Git. EAS project ID and Apple team are intentionally not fabricated in this repository.
5. With owner authorization, upload the signed build to TestFlight (`npx eas-cli@latest submit --platform ios --profile testing`) or use Transporter/Xcode. Internal testing can follow processing/compliance setup; external testing may require Beta App Review. Share invitations only after owner authorization.
6. Install and run the physical-device checklist. Testing profile unlocks all days and is visibly marked. Do not submit that profile as the public product.
7. Build production with `npx eas-cli@latest build --platform ios --profile production`; confirm `extra.releaseTesting=false`. Store version 1.0.0; increment build number for each upload. Supply an App Store Connect app ID in local submit settings when assigned.
8. Review screenshots, privacy answers and age rating; choose **manual release**. Submit only after owner confirms. No approval/release date can be guaranteed.

## Local Xcode path

Local native compilation is verified: Release Simulator build and unsigned device archive succeeded with Xcode 26.6 / iOS SDK 26.5. CocoaPods is installed in an isolated temporary environment (see native-tools/README.md). Open the generated workspace, select the owner's Apple team and automatic signing, create a signed archive, validate, then distribute to App Store Connect. The existing unsigned archive cannot be uploaded as-is. Full physical-device QA is still required.

Apple's submission requirement verified 2026-10-28: Xcode 26+ and iOS/iPadOS SDK 26+. Installed Xcode is 26.6. Verify the **selected cloud image's actual SDK** from build logs rather than assuming latest means compatible with this SDK's native dependencies.

## Review notes draft

No login, account, ads or purchases. Content is bundled locally. Go Home → select a day → arrow → six tabs → Complete Day. Language buttons are in each story header. External church links require an adult challenge. Production days open December 1–24, 2026 in device-local time; completed stories stay open. If review happens before December 1, explain the date gating in notes and coordinate an acceptable review path with Apple; do not secretly enable production testing or submit a locked, unreviewable app without addressing reviewer access.

## Sources

- https://developer.apple.com/news/upcoming-requirements/?id=02032026a
- https://developer.apple.com/app-store/review/guidelines/#kids-category
- https://developer.apple.com/app-store/review/guidelines/#privacy
- https://docs.expo.dev/build-reference/ios-builds/
