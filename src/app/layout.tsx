import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "たべなび | 外食をもっと賢く、楽しく。",
  description: "外食専門の食事管理サービス。チェーン店のメニューを3タップで記録。カロリー・栄養バランスを確認しながら、外食をもっと賢く楽しもう。",
  keywords: "外食,カロリー,栄養管理,食事記録,ダイエット,健康,チェーン店",
  verification: {
    google: "AAhuVl9MdVUxjq_AP5PTmUKwAqVDiIsYilfWD8tEfmA",
  },
  openGraph: {
    title: "たべなび | 外食をもっと賢く、楽しく。",
    description: "外食専門の食事管理サービス。3タップで記録完了。",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="たべなび" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
