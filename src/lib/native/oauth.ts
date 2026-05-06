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

  if (isNative) {
    let oauthUrl: string;
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: NATIVE_REDIRECT_URI,
          skipBrowserRedirect: true,
        },
      });

      if (error) return { error: error.message };
      if (!data?.url) {
        return { error: "OAuth URL を取得できませんでした。再度お試しください。" };
      }
      oauthUrl = data.url;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "認証 URL の取得に失敗しました";
      return { error: msg };
    }

    try {
      await Browser.open({
        url: oauthUrl,
        presentationStyle: "fullscreen",
      });
      return {};
    } catch (e) {
      const msg =
        e instanceof Error ? e.message : "ブラウザの起動に失敗しました";
      return { error: `${msg} (Browser plugin)` };
    }
  }

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
};
