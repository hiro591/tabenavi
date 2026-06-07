import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import AppBottomNav from "@/components/AppBottomNav";
import { NativeBootstrap } from "@/components/native/NativeBootstrap";
import { Analytics } from "@/components/Analytics";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "たべなび | 外食しながら、カラダづくり。",
  description:
    "外食専門の栄養管理アプリ。32チェーン・6,000品以上のカロリー・PFCを3タップで記録。マップで近くの高タンパクメニューを発見。外食しながら、カラダづくり。",
  keywords:
    "外食,カロリー,栄養管理,食事記録,ダイエット,PFC,チェーン店,タンパク質,たべなび",
  verification: {
    google: "AAhuVl9MdVUxjq_AP5PTmUKwAqVDiIsYilfWD8tEfmA",
  },
  openGraph: {
    title: "たべなび | 外食しながら、カラダづくり。",
    description:
      "外食専門の栄養管理アプリ。32チェーン・6,000品以上のPFC・カロリーが無料で分かる。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="theme-color" content="#F9FAFB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="たべなび" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-itunes-app" content="app-id=6764268638" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LTKE4YGEJ1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // SPA遷移を漏れなく拾うため自動page_viewは無効化し、Analyticsコンポーネントで送る
            gtag('config', 'G-LTKE4YGEJ1', { send_page_view: false });
          `}
        </Script>
      </head>
      <body className="antialiased bg-gray-50 text-gray-900">
        <NativeBootstrap />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
        <AppBottomNav />
        <Toaster
          position="top-center"
          richColors
          closeButton
          duration={3000}
          toastOptions={{
            style: {
              fontFamily: "inherit",
            },
          }}
        />
      </body>
    </html>
  );
}
