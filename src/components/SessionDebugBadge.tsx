"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Status = "checking" | "logged-in" | "not-logged-in";

export function SessionDebugBadge() {
  const [status, setStatus] = useState<Status>("checking");
  const [detail, setDetail] = useState<string>("");

  useEffect(() => {
    const supabase = createClient();
    let cancelled = false;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (cancelled) return;
      if (session) {
        setStatus("logged-in");
        setDetail(`getSession: ${session.user.email ?? "unknown"}`);
      } else {
        setStatus("not-logged-in");
        setDetail("getSession: null");
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (cancelled) return;
      if (session) {
        setStatus("logged-in");
        setDetail(`${event}: ${session.user.email ?? "unknown"}`);
      } else {
        setDetail(`${event}: null`);
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const color =
    status === "logged-in"
      ? "bg-emerald-500"
      : status === "not-logged-in"
        ? "bg-rose-500"
        : "bg-amber-500";

  return (
    <div
      className={`fixed top-2 right-2 z-[9999] ${color} text-white text-[10px] px-2 py-1 rounded-full shadow-lg max-w-[200px] truncate`}
      title={detail}
    >
      🔍 {status} | {detail}
    </div>
  );
}
