"use client";

import { useState } from "react";

const faqs = [
  {
    question: "無料プランでどこまで使えますか？",
    answer: "無料プランでは、1日3食までの記録、主要チェーン店のメニューデータベースへのアクセス、基本的なカロリー・PFC表示をご利用いただけます。週次レポートやAIレコメンドなどの高度な機能はプレミアムプランで利用可能です。",
  },
  {
    question: "個人店のメニューはどうすれば記録できますか？",
    answer: "「ガイショクSnap」機能でメニュー表や料理の写真を撮影すると、AIが自動で栄養素を推定します。また、「みんなの外食マップ」機能により、他のユーザーが投稿した個人店の栄養情報も参照できます。",
  },
  {
    question: "カロリーの情報はどれくらい正確ですか？",
    answer: "チェーン店のメニューは各社の公式栄養成分データを使用しており、正確性は保証されています。個人店やAI推定の場合は、類似メニューのデータを元に推定しており、概ね10〜15%の誤差範囲内です。",
  },
  {
    question: "自炊の食事も記録できますか？",
    answer: "たべなびは外食専門に設計されていますが、自炊の食事もシンプルな入力フォームから記録可能です。ただし、外食チェーンのような詳細なメニューデータベースは自炊向けには提供していません。自炊メインの方には汎用の栄養管理アプリとの併用をおすすめしています。",
  },
  {
    question: "プレミアムプランはいつでも解約できますか？",
    answer: "はい、プレミアムプランはいつでも解約可能です。解約後も契約期間の終了まではプレミアム機能をご利用いただけます。解約による違約金は一切発生しません。",
  },
  {
    question: "データはどのように保管されますか？",
    answer: "お客様のデータはAWS上のセキュアなサーバーに暗号化して保管しています。個人を特定できる情報は厳重に管理し、第三者への提供は一切行いません。プライバシーポリシーで詳細をご確認いただけます。",
  },
  {
    question: "写真からのメニュー認識はどのくらい精度がありますか？",
    answer: "チェーン店の公式メニュー表であれば約95%の精度で認識します。手書きメニューや暗い環境での撮影の場合は精度が下がることがありますが、候補メニューを複数提示しますので、正しいものを選択するだけで記録できます。",
  },
  {
    question: "法人・企業向けプランはありますか？",
    answer: "はい、従業員の健康管理を目的とした法人プランをご用意しています。管理者ダッシュボードでの利用状況レポート、福利厚生への組み込み、カスタマイズなど柔軟に対応可能です。詳細はお問い合わせフォームからご連絡ください。",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-base font-medium text-gray-900 pr-4">{question}</span>
        <span
          className={`text-orange-500 text-2xl font-light shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            たべなびについて、よくいただくご質問にお答えします。
          </p>
        </div>

        {/* FAQ items */}
        <div className="bg-gray-50 rounded-2xl px-6 sm:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
