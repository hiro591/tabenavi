"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function ClientAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    let cancelled = false;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!cancelled && session) {
        router.replace("/dashboard");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [router]);

  return null;
}
