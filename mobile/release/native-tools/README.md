# Isolated CocoaPods environment

This task uses the Mac's existing Ruby 2.6 and installs build dependencies only under `/tmp/advent-native-tools`. System Ruby, global gems, shell profiles and developer accounts are not changed.

`Gemfile`/`Gemfile.lock` pin a compatible CocoaPods 1.16.2 environment. The local Bundler configuration (`.bundle/`, ignored) directs dependencies to `/tmp/advent-native-tools/bundle`. Temporary files can be removed by the OS, so this setup is reproducible rather than a permanent system prerequisite.

Bootstrap without sudo:

```sh
gem install bundler -v 2.4.22 --no-document --install-dir /tmp/advent-native-tools/gems --bindir /tmp/advent-native-tools/bin
GEM_HOME=/tmp/advent-native-tools/gems GEM_PATH=/tmp/advent-native-tools/gems /tmp/advent-native-tools/bin/bundle config set --local path /tmp/advent-native-tools/bundle
GEM_HOME=/tmp/advent-native-tools/gems GEM_PATH=/tmp/advent-native-tools/gems /tmp/advent-native-tools/bin/bundle install
```

Run the bootstrap commands from this directory. To install Pods, set `BUNDLE_GEMFILE` to the absolute path of this directory's Gemfile, keep the same GEM_HOME/GEM_PATH, and run `bundle exec pod install --project-directory=<absolute mobile/ios directory>`. Set `COCOAPODS_DISABLE_STATS=true`; `CP_HOME_DIR=/tmp/advent-native-tools/cocoapods` isolates CocoaPods home metadata.

These are build dependencies, not app runtime dependencies. The original missing-tool build attempts remain historical evidence; see the latest TEST_REPORT.md/native build logs for subsequent outcomes. No signing key or Apple account is required for unsigned simulator compilation. Store signing and TestFlight remain separate owner-controlled steps.

## Android environment

The owner explicitly accepted Android SDK terms and authorized installation. Official Google Android CLI is scoped with `ANDROID_USER_HOME=/tmp/advent-native-tools/android-user`, `--no-metrics`, and `--sdk=/tmp/advent-native-tools/android-sdk`. Only required SDK components were requested: platform 36, build-tools 36.0.0, platform-tools, NDK 27.1.12297006, CMake 3.22.1. Gradle may install additional required build-tool versions under the same approved SDK license.

Temurin JDK 17 is extracted to `/tmp/advent-native-tools/jdk17/Contents/Home`. For local Gradle use this JAVA_HOME, the isolated SDK as ANDROID_HOME, and `/tmp/advent-native-tools/gradle` as GRADLE_USER_HOME. No global Java installation or shell profile edit is needed. Android artifacts remain unsigned until genuine owner upload-key configuration is supplied.
