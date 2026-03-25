module.exports = {
  name: process.env.EXPO_PUBLIC_CONFIG_NAME,
  slug: process.env.EXPO_PUBLIC_CONFIG_SLUG,
  version: process.env.EXPO_PUBLIC_CONFIG_VERSION,
  orientation: 'portrait',
  icon: process.env.EXPO_PUBLIC_CONFIG_ICON,
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  android: {
    adaptiveIcon: {
      foregroundImage: process.env.EXPO_PUBLIC_CONFIG_ANDROID_ADAPTIVEICON_FOREGROUNDIMAGE,
      backgroundColor: process.env.EXPO_PUBLIC_CONFIG_ANDROID_ADAPTIVEICON_BACKGROUNDCOLOR
    },
    edgeToEdgeEnabled: true,
    package: process.env.EXPO_PUBLIC_CONFIG_ANDROID_PACKAGE,
    versionCode: Number(process.env.EXPO_PUBLIC_CONFIG_ANDROID_VERSIONCODE)
  },
  ios: {
    icon: {
      backgroundColor: '#ffffff'
    },
    buildNumber: process.env.EXPO_PUBLIC_CONFIG_IOS_BUILDNUMBER,
    bundleIdentifier: process.env.EXPO_PUBLIC_CONFIG_IOS_BUNDLEIDENTIFIER,
    supportsTablet: true
  },
  plugins: [
    ['./plugins/withNinjaLongPaths'],
    [
      'expo-build-properties',
      {
        android: {
          minSdkVersion: 26,
          compileSdkVersion: 35,
          targetSdkVersion: 35
        },
        ios: {
          useFrameworks: 'static'
        }
      }
    ]
  ],
  splash: {
    backgroundColor: process.env.EXPO_PUBLIC_CONFIG_SPLASH_BACKGROUNDCOLOR,
    image: process.env.EXPO_PUBLIC_CONFIG_SPLASH_IMAGE,
    resizeMode: process.env.EXPO_PUBLIC_CONFIG_SPLASH_RESIZEMODE
  },
  web: {
    favicon: process.env.EXPO_PUBLIC_CONFIG_WEB_FAVICON
  }
};
