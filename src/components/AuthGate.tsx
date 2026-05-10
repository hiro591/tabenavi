"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AuthGate({ to = "/dashboard" }: { to?: string }) {
  const router = useRouter();
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    let cancelled = false;
    let resolved = false;

    const decide = (session: unknown) => {
      if (cancelled || resolved) return;
      resolved = true;
      if (session) {
        router.replace(to);
      } else {
        setShowLanding(true);
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => decide(session));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") return;
      decide(session);
    });

    const timeout = setTimeout(() => {
      if (!resolved && !cancelled) {
        resolved = true;
        setShowLanding(true);
      }
    }, 1500);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      subscription.unsubscribe();
    };
  }, [router, to]);

  if (showLanding) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 animate-pulse" />
        <p className="text-xs text-gray-400">読み込み中...</p>
      </div>
    </div>
  );
}
