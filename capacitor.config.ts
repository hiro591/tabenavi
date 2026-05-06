import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "jp.tabenavi.app",
  appName: "たべなび",
  webDir: "public",
  server: {
    url: "https://www.tabenavi.jp",
    cleartext: false,
    androidScheme: "https",
    iosScheme: "https",
    allowNavigation: [
      "tabenavi.jp",
      "www.tabenavi.jp",
      "appleid.apple.com",
      "accounts.google.com",
      "accounts.youtube.com",
      "*.supabase.co",
      "*.supabase.com",
    ],
  },
  ios: {
    contentInset: "always",
    backgroundColor: "#F9FAFB",
    limitsNavigationsToAppBoundDomains: false,
    scrollEnabled: true,
    preferredContentMode: "mobile",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      launchFadeOutDuration: 300,
      backgroundColor: "#F9FAFB",
      iosSpinnerStyle: "small",
      spinnerColor: "#0EA5E9",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#F9FAFB",
      overlaysWebView: false,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#0EA5E9",
      sound: "default",
    },
    Camera: {
      permissions: {
        camera: "食事の写真を撮影して記録するために使用します",
        photos: "保存された食事写真を選択するために使用します",
      },
    },
  },
};

export default config;
