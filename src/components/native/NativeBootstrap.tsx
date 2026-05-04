"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";
import { App } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { createClient } from "@/lib/supabase/client";

export const NativeBootstrap = () => {
  const router = useRouter();

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

    const oauthHandler = App.addListener("appUrlOpen", async (event) => {
      if (!event.url.startsWith("tabenavi://auth/callback")) return;

      try {
        await Browser.close();
      } catch {}

      const callbackUrl = new URL(event.url);
      const code = callbackUrl.searchParams.get("code");
      const errorParam = callbackUrl.searchParams.get("error");

      if (errorParam) {
        router.push(`/login?error=${encodeURIComponent(errorParam)}`);
        return;
      }

      if (!code) {
        router.push("/login?error=missing_code");
        return;
      }

      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        router.push(`/login?error=${encodeURIComponent(error.message)}`);
        return;
      }

      router.push("/dashboard");
    });

    return () => {
      void backHandler.then((h) => h.remove());
      void oauthHandler.then((h) => h.remove());
    };
  }, [router]);

  return null;
};
