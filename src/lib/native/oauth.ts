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

    await Browser.open({
      url: data.url,
      presentationStyle: "popover",
    });
    return {};
  }

  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  return error ? { error: error.message } : {};
};
