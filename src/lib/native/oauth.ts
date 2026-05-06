import { Capacitor } from "@capacitor/core";
import { Browser } from "@capacitor/browser";
import { createClient } from "@/lib/supabase/client";

export const NATIVE_REDIRECT_URI = "tabenavi://auth/callback";

export type OAuthProvider = "apple" | "google";

type SignInResult = { error?: string };

export const signInWithProvider = async (
  provider: OAuthProvider,
): Promise<SignInResult> => {
  const supabase = createClient();
  const isNative = Capacitor.isNativePlatform();

  if (!isNative) {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      return error ? { error: error.message } : {};
    } catch (e) {
      const msg = e instanceof Error ? e.message : "認証に失敗しました";
      return { error: msg };
    }
  }

  console.log(`[OAuth] Starting ${provider} sign-in (native iOS)`);

  let oauthUrl: string;
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: NATIVE_REDIRECT_URI,
        skipBrowserRedirect: true,
      },
    });

    if (error) {
      console.error("[OAuth] signInWithOAuth error:", error);
      return { error: `Supabase OAuth: ${error.message}` };
    }
    if (!data?.url) {
      console.error("[OAuth] signInWithOAuth returned no URL");
      return {
        error: "OAuth URL を取得できませんでした。Supabase 設定を確認してください。",
      };
    }
    oauthUrl = data.url;
    console.log("[OAuth] OAuth URL obtained, length:", oauthUrl.length);
  } catch (e) {
    console.error("[OAuth] signInWithOAuth threw:", e);
    const msg = e instanceof Error ? e.message : "認証 URL の取得に失敗しました";
    return { error: `URL 取得エラー: ${msg}` };
  }

  try {
    await Browser.close();
  } catch {}

  try {
    console.log("[OAuth] Layer 1: Opening Safari View Controller (fullscreen)");
    await Browser.open({
      url: oauthUrl,
      presentationStyle: "fullscreen",
    });
    console.log("[OAuth] Browser.open() succeeded");
    return {};
  } catch (browserError) {
    console.warn(
      "[OAuth] Layer 1 failed, falling back to Layer 2 (WebView navigation):",
      browserError,
    );

    try {
      window.location.href = oauthUrl;
      console.log("[OAuth] Layer 2: WebView navigation initiated");
      return {};
    } catch (navError) {
      console.error("[OAuth] Layer 2 also failed:", navError);
      const msg =
        navError instanceof Error
          ? navError.message
          : "認証画面を開けませんでした";
      return {
        error: `認証画面の起動に失敗しました: ${msg}。インターネット接続を確認の上、再度お試しください。`,
      };
    }
  }
};
