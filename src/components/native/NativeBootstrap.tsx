"use client";

import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import { App } from "@capacitor/app";

export const NativeBootstrap = () => {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    void (async () => {
      try {
        await StatusBar.setStyle({ style: Style.Dark });
        if (Capacitor.getPlatform() === "android") {
          await StatusBar.setBackgroundColor({ color: "#F9FAFB" });
        }
        await StatusBar.setOverlaysWebView({ overlay: false });
      } catch {}

      try {
        await SplashScreen.hide({ fadeOutDuration: 300 });
      } catch {}
    })();

    const backHandler = App.addListener("backButton", ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        void App.exitApp();
      }
    });

    return () => {
      void backHandler.then((h) => h.remove());
    };
  }, []);

  return null;
};
