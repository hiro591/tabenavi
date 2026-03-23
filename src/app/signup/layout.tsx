import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "無料会員登録 | たべなび｜外食専門の栄養管理アプリ",
  description:
    "たべなびに無料登録。20チェーン・500メニューの栄養データで外食の食事管理を始めよう。",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
