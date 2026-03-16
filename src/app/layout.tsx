import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "たべなび | 外食をもっと賢く、楽しく。",
  description: "外食専門の食事管理サービス。チェーン店のメニューを3タップで記録。カロリー・栄養バランスを確認しながら、外食をもっと賢く楽しもう。",
  keywords: "外食,カロリー,栄養管理,食事記録,ダイエット,健康,チェーン店",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
