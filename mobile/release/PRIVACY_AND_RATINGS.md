# Privacy / Data safety / age-rating preparation

Draft for owner verification, not legal certification. Scope: final native app, not web-host/server access logs. Review again after final native SDK build and before answering store forms.

## Observed functionality

- No app backend, sign-in, advertising, analytics, user uploads, chat or purchases.
- Language, completed days, onboarding and reminder settings use local AsyncStorage. Completion data is not sent to the developer. No remote push token is requested. Local notifications are optional.
- Device camera, microphone, contacts and location are not needed. Map link supplies only the confirmed public church address, not device location.
- External links open third-party services after a localized parental challenge. Those services may independently process IP/device information. No embedded YouTube player or tracking SDK is used.
- Android backup disabled in app config; actual iOS/device backup behavior must be checked. Do not promise that OS backups never store app data.
- Built Android manifest verified: backup false, no camera/microphone/location/contacts/storage/media/AD_ID permissions. Notifications include Firebase transport transitively; messaging auto-init and Analytics collection explicitly disabled in the actual APK. No Firebase project configuration or remote-token acquisition is present. Real-device network behavior still needs verification.

## Proposed declarations (not submitted)

Apple: **Data Not Collected**, **no tracking**, no ATT prompt — only if final SDK/network inspection confirms there is no data transmission to developer/partners. On-device storage alone is not collection. Required-reason API manifest entries for file timestamps and user defaults mirror installed RN/AsyncStorage declarations; confirm aggregated archive manifests after Pods/build.

Google: data collection **No**, sharing **No**, no ads, no accounts/account deletion feature required — only after checking final SDK behavior against Play's collection definitions and third-party navigation exclusions. Do not answer questions about encryption/deletion on behalf of a future backend. Mark ads status accurately. Supply public privacy policy and developer contact.

## Children and content

This product is visibly child/family-directed. Do not label it adult-only to avoid Families rules. Owner must select intended age groups. Parent-guided reading for ages 6–8 and 9–11 is a proposal, not a submitted target audience. Apple Kids category age band must be chosen deliberately; Kids restrictions continue to apply in later updates once established. Avoid “For Kids” marketing outside appropriate Apple category rules.

Complete current Apple age-rating and Google IARC forms honestly after reviewing all text/images: stories include flood, expulsion, battles, burning cities, a fiery furnace, lions, threats and Herod. Assess mild fantasy/realistic violence, frightening themes and religious/educational context. Do not automatically claim 4+/Everyone. No gambling, sexual content, user communication, ads, purchases or unrestricted in-app web browsing is implemented.

Privacy drafts are in `site/privacy.html` and the in-app Privacy screen; support draft is `site/support.html`. They explicitly state missing publisher details. They are **not ready for public legal use** until owner provides operator identity, working privacy/support contact, stable HTTPS hosting and approves the text.

## Current official references checked 2026-10-28

- https://developer.apple.com/app-store/review/guidelines/#kids-category
- https://developer.apple.com/app-store/review/guidelines/#privacy
- https://support.google.com/googleplay/android-developer/answer/9893335?hl=en
