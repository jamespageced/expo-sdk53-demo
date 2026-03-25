# expo-sdk-53-hello-world-with-react-native-element-dropdown

expo app containing all the setup, linting, and config needed to deploy a hello world app

## Prerequisites

- git
- Visual Studio Code
- Nodejs (v24.13.0)
- java jdk (version 17 minimum)
- IF WINDOWS PLATFORM
  - android studio similator
- IF APPLE PLATFORM
  - xcode simulator

## Setup Project

- open powershell in the directory you want to clone the project
- execute command: `git clone https://github.com/jamespageced/expo-sdk-53-hello-world-with-firebase.git`
- IF WINDOWS PLATFORM
  - **_Note: one of the packages has a directory over the max character limit allowed in windows, so this was the recommended workaround. You can read more about this here: https://github.com/expo/expo/issues/36274_**
  - execute command: `cd .\expo-sdk-53-hello-world-with-firebase\scripts`
  - execute command: `.\windows_setup_ninja.ps1`
- IF APPLE PLATFORM
  - execute command: `cd ./expo-sdk-53-hello-world-with-firebase/scripts/`
  - execute command: `./apple_setup_ninja.ps1`
- execute command: `cd ..`
- create a new `.env` file in the root directory
  - add the following contents to the file...

```
EXPO_PUBLIC_CONFIG_ANDROID_ADAPTIVEICON_BACKGROUNDCOLOR="#ffffff"
EXPO_PUBLIC_CONFIG_ANDROID_ADAPTIVEICON_FOREGROUNDIMAGE="./assets/images/adaptive-icon.png"
EXPO_PUBLIC_CONFIG_ANDROID_PACKAGE="com.example.demo"
EXPO_PUBLIC_CONFIG_ANDROID_VERSIONCODE="1"
EXPO_PUBLIC_CONFIG_ICON="./assets/images/icon.png"
EXPO_PUBLIC_CONFIG_IOS_BUNDLEIDENTIFIER="com.example.demo"
EXPO_PUBLIC_CONFIG_IOS_BUILDNUMBER="1.0.0"
EXPO_PUBLIC_CONFIG_NAME="Demo"
EXPO_PUBLIC_CONFIG_SLUG="demo"
EXPO_PUBLIC_CONFIG_SPLASH_BACKGROUNDCOLOR="#ffffff"
EXPO_PUBLIC_CONFIG_SPLASH_IMAGE="./assets/images/splash-icon.png"
EXPO_PUBLIC_CONFIG_SPLASH_RESIZEMODE="contain"
EXPO_PUBLIC_CONFIG_VERSION="1.0.0"
EXPO_PUBLIC_CONFIG_WEB_FAVICON="./assets/images/favicon.png"
```

- **_Note: When deploying your app to production, replace the variable values in the .env file with the values that belong to your licensing_**

```
EXPO_PUBLIC_CONFIG_ANDROID_PACKAGE="com.example.demo"
EXPO_PUBLIC_CONFIG_IOS_BUNDLEIDENTIFIER="com.example.demo"
EXPO_PUBLIC_CONFIG_NAME="Demo"
EXPO_PUBLIC_CONFIG_SLUG="demo"
```

## Run Project

- execute command: `npm install`
- IF WINDOWS PLATFORM
  - execute command: `npm run dev-android`
- IF APPLE PLATFORM
  - execute command: `npm run dev-ios`
