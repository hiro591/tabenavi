import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メニュー検索｜カロリー・PFCで外食チェーン店を絞り込み | たべなび",
  description:
    "20以上のチェーン店のメニューをカロリー・タンパク質・脂質・炭水化物で検索・絞り込み。ダイエット・筋トレ中の外食選びに。",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
