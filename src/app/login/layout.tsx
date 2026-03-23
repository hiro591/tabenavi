import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン | たべなび",
  description: "たべなびにログインして食事記録を続けよう。",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
