"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function ClientAuthRedirect({ to = "/dashboard" }: { to?: string }) {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    let cancelled = false;

    const redirectIfLoggedIn = (label: string, session: unknown) => {
      if (cancelled) return;
      if (session) {
        console.log(`[Auth] ${label}: signed-in → redirect to ${to}`);
        router.replace(to);
      } else {
        console.log(`[Auth] ${label}: no session`);
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      redirectIfLoggedIn("getSession", session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") return;
      redirectIfLoggedIn(`onAuthStateChange[${event}]`, session);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [router, to]);

  return null;
}
