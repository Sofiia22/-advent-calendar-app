# Residual dependency advisory assessment — 2026-10-29

Scope: installed lockfile and source, not dynamic proof of every possible execution path. Registry report `npm-audit-final.json` contains 16 affected-package entries but only three underlying vulnerable libraries. No silent dismissal or forced framework migration was performed.

| Root library | Installed use / reachable inputs | Assessment and boundary |
|---|---|---|
| image-size 1.2.1, high | `metro/src/Assets.js` imports the callable CommonJS API to inspect build assets | Build-time parser; repository-owned images only. No runtime user image uploads. Vulnerable JXL/HEIF/ICNS inputs must not be introduced. No compatible patched v1 established. Patched v2 API cannot simply replace v1. Keep Metro local/private; reassess before rebuilding with untrusted assets. |
| deepmerge 4.3.1, low | `@expo/config/build/Config.js` merges project config/plugin props; `expo-constants/scripts/build/getAppConfig.js` imports config as a build script | Trusted local config/plugin objects in this app. No runtime import from app screens/services or user-supplied config discovered. No upstream patched version listed in advisory checked today. Inherited low findings across Expo packages are not independent vulnerabilities. |
| decode-uri-component 0.2.2, moderate | query-string 7.1.3, used by root Expo Router 6.0.24 in `build/fork/getPathFromState.js` and `getPathFromState-forks.js` | Both actual imports call `queryString.stringify`, not vulnerable parse/decode. Inbound `getStateFromPath.js` delegates to Expo's `parseQueryParams`; its queryString.parse code is commented out. No app-level query-string import found. Static review did not establish a reachable vulnerable decoder call, but this is not a general deep-link fuzzing pass. Patched 0.5.0 is ESM; current consumer requires a callable CommonJS export, so a blind override is not justified. |

The inbound parser was also inspected directly: `getStateFromPath-forks.js:parseQueryParams` uses `new URL(path, ...).searchParams`, not query-string's decoder. The remaining 13 registry entries are dependency-propagated package findings (Expo config/tooling/constants/linking/notifications/router/etc.), not 13 additional root bugs. Counts are retained as reported; do not label the dependency audit “clean”. A future dependency update or new import can invalidate this assessment.

Checks performed: installed package metadata, `npm explain`, all JS imports of query-string in root Expo Router/navigation and app source, actual stringify call sites, Metro asset parser import, Expo config merge sites and constants build script. No exploit payload was run against the live app or owner's browser session. Native builds and application tests succeeded separately; that does not prove advisory absence.

Official advisories / maintainer sources checked:

- https://github.com/advisories/GHSA-5p2g-fcmc-qvqq
- https://github.com/advisories/GHSA-w3rx-r6r6-pgpr
- https://github.com/advisories/GHSA-gcqx-w48m-w2h4
- https://github.com/advisories/GHSA-vcc3-ghjq-m6fr
- npm registry metadata for decode-uri-component 0.5.0 (ESM, Node >=14.16).

Release handoff: the known build-time high finding remains explicitly recorded. An owner/release maintainer must accept the documented constrained exposure or approve and verify a compatible upstream toolchain remediation before final submission. Full native device/network, deep-link and store validation is still pending.
