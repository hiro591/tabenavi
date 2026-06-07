"use client";

// App Router の client-side 遷移ごとに GA4 page_view を送る。
// layout の gtag('config') は send_page_view:false にしてあるので、初回含め全てここで送る。
// useSearchParams を使うため Suspense 境界の内側で使うこと。
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/track";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const qs = searchParams?.toString();
    trackPageView(qs ? `${pathname}?${qs}` : pathname);
  }, [pathname, searchParams]);

  return null;
}
