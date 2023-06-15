# pokedex-rn-app
Official React Native Pokedex Application.

# Getting Started
### Prerequisites:
- Mac device for ios
- [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
- [Android Studio](https://developer.android.com/studio/index.html)

### Environment Setup
Follow the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup) as closely as possible.


Clone the project in development branch and navigate to project root
`git clone -b development https://github.com/bytesTechnoMobile/pokedex`
`cd pokedex`

#### Install dependencies
`yarn && cd ios && pod install && cd ../`

#### Run the react-native project
`yarn ios` or `yarn android`

## Troubleshooting

[React Native Troubleshooting Confluence Page](https://discogsinc.atlassian.net/wiki/spaces/MAP/pages/258310145/React+Native+Environment+Troubleshooting)

`yarn clean` can handle a lot of dependency issues, so I recommend starting with this if the error you are seeing isn't listed here.

Use `npx @react-native-community/cli doctor`  or `npx react-native doctor` to check if your environment  is configured.

This message is completely fine. Anything else should be fixed.
``` 
 ✖ Watchman - Used for watching changes in the filesystem when in development mode
- Version found: 2022.09.26.00
- Version supported: 4.x
```
### Android Issues
First try cleaning gradle:
`cd android` & `./gradlew clean`
and restarting the cache:
`Yarn start --reset-cache`

#### Missing ANDROID_HOME?
add this line to your terminal (./bashrc, ./zshrc, ./zshprofile) profile file. 
`export ANDROID_HOME=/Users/[user]/Library/Android/sdk`

Your paths should look something like this:
```bash
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export ANDROID_HOME=/Users/[your_user]/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator  
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```
### iOS Issues
First try restarting cache `Yarn start --reset-cache`

####  error No simulator available with name "iPhone 13".
Check your available devices with `xcrun simctl list devices` and pick one:
```
iPhone 14 Plus (11AF0D02-B3AE-4471-85BF-6F60D3FA4512) (Shutdown)
iPhone 14 Pro (E8451E53-41EF-477F-B7E4-A06DE4B1E0EC) (Shutdown)
```
Then run with one of the available devices `yarn ios --simulator="iPhone 14 Pro"`

**or**
Open the Simulator Application. **File** -> **New Simulator**  Create a new device with iPhone 13

**or**
Open Xcode Application. **Window** -> **Devices and Simulators** -> *select* **Simulators** 
Tap the + button on the bottom left of the window and *create a new simulator*.
