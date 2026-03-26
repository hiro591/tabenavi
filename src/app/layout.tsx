import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import AppBottomNav from "@/components/AppBottomNav";

export const metadata: Metadata = {
  title: "たべなび | 外食しながら、カラダづくり。",
  description:
    "外食専門の栄養管理アプリ。20チェーン・500メニューのカロリー・PFCを3タップで記録。マップで近くの高タンパクメニューを発見。外食しながら、カラダづくり。",
  keywords:
    "外食,カロリー,栄養管理,食事記録,ダイエット,PFC,チェーン店,タンパク質,たべなび",
  verification: {
    google: "AAhuVl9MdVUxjq_AP5PTmUKwAqVDiIsYilfWD8tEfmA",
  },
  openGraph: {
    title: "たべなび | 外食しながら、カラダづくり。",
    description:
      "外食専門の栄養管理アプリ。20チェーン・500メニューのPFC・カロリーが無料で分かる。",
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
        <meta name="theme-color" content="#1A2235" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="たべなび" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
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
            gtag('config', 'G-LTKE4YGEJ1');
          `}
        </Script>
      </head>
      <body className="antialiased bg-[#1A2235] text-slate-100">
        {children}
        <AppBottomNav />
      </body>
    </html>
  );
}
