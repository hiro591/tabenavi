import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | たべなび",
  description: "たべなびへのお問い合わせ・ご意見・データ修正のご報告はこちら。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
