# Advent Bible Journey 1.0 — project audit

Audit date: 2026-10-28. Status: **not yet submission-ready**. No store account, signing identity, publisher contact or public legal/support URL is available (confirmed by owner).

## Existing product preserved

- React Native 0.81.5 / React 19.1 / Expo SDK 54 / Expo Router 6; no Capacitor or architecture rewrite needed.
- 24 routed stories; most use the established IllustratedDayScreen, day 2 retains its working reader.
- All six sections: Scripture, Bible Story, Questions, Promise, Connection, Family Challenge. Local illustrations and fonts; AsyncStorage progress; home, map, church and settings.
- Correct requested ordering: 19 furnace/writing on wall; 20 Daniel/lions; 21 Esther; 22 return; 23 promise; 24 birth.
- Original church logo and confirmed address/YouTube link retained.

## Findings and focused corrections

1. Day 2 only had English and hard-coded English navigation. Owner authorized complete UK/RU translations; added without shortening English. Language can change in-place on all story screens.
2. Completion alone unlocked the next day, with no date. Added a pure, tested device-local December 1–24, 2026 schedule. Completed days stay accessible. Missed dates do not trap the user. Configuration is in config/advent.ts. Testing profile unlocks all days and displays a conspicuous banner; production refuses the testing flag.
3. Persistence completion had stale-closure/race risk and silently swallowed failures. Serialized completion writes, validated day numbers, preserved storage keys and added an error alert. Updates do not reset progress.
4. Church links left the app without a parent gate. Added a localized modal challenge before any external navigation. No answer is stored or transmitted. This mitigates risk; it is not a guarantee of child-proofing or legal compliance.
5. App icon was Expo's default placeholder. Added an original vector star/open-Bible icon and native icon variants. No church logo modification.
6. Added local help/privacy drafts, optional-notification error handling/web guard, safe back navigation for direct links and a localized Christmas completion message.
7. Added native projects, version/build settings, EAS profiles, privacy manifest declarations, blocked unused Android permissions and disabled Android cloud backup. Generated local Android release no longer uses a debug signing key.

## Verification scope / outstanding risks

- Automated checks verify 24 × 3 language records, six-section structures, referenced assets and UI translation-key parity. This is not a word-by-word theological/proofreading review.
- Owner should proofread new day 2 translations and confirm Bible translation/story text/artwork distribution rights.
- Day 24's temple illustration appears to depict an older child, while its text covers infant presentation: flag for editorial confirmation; content/art not replaced without approval.
- Original assets were about 308 MB uncompressed. Optimized copies of 124 opaque illustrations reduce exported assets to about 103.2 MiB per native platform; original images and all story prose are preserved. Actual per-device app/download size must still be measured from a real AAB/IPA.
- Full physical-device QA, OS permission behavior, offline cold start, screen-reader/large-text QA and native dependency compilation remain unverified.
- Expo SDK 54 security audit retains upstream advisories requiring assessment; no forced major SDK migration was performed. See SECURITY_REVIEW.md.

## Build environment

- Xcode 26.6 is installed (Apple requires Xcode/iOS SDK 26+ for submissions since 2026-04-28).
- Isolated CocoaPods 1.16.2, JDK 17 and Android SDK installed under /tmp/advent-native-tools without changing system tools; explicit owner SDK license consent obtained. iOS Release Simulator build, unsigned device archive and Android production AAB succeeded. Simulator install/launch succeeded; full native UI/physical QA remains.
- No EAS/Apple/Google release accounts or credentials were supplied. No TestFlight, Play testing, signing, upload or publication has occurred.

## Preservation

Tracked pre-release state retained by Git ref `refs/codex/pre-release-2026-10-28` → `a861439c5539a0fe342837cc9bf11ab0e67aef63`. Untracked/source/assets also backed up at `/tmp/advent-before-release-2026-10-28.tar.gz`; binary tracked patch `/tmp/advent-before-release.patch`. No user edits were reset and no synced sources were edited.
