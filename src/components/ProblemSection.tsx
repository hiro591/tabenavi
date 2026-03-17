import { HelpCircle, ClipboardList, Frown, Smartphone } from "lucide-react";
import type { ComponentType } from "react";

const problems: { Icon: ComponentType<{ className?: string }>; title: string; description: string }[] = [
  {
    Icon: HelpCircle,
    title: "外食のカロリーが分からない",
    description: "定食屋やラーメン店のカロリーって？検索しても正確な情報が出てこない。結局「まあいいか」で終わる毎日。",
  },
  {
    Icon: ClipboardList,
    title: "記録が面倒で3日で挫折",
    description: "食材を一つずつ入力？グラム数を量る？外食派にとって既存アプリの記録方法はハードルが高すぎる。",
  },
  {
    Icon: Frown,
    title: "外食＝罪悪感でモヤモヤ",
    description: "「また外食しちゃった…」という罪悪感。健康管理アプリが外食を否定的に扱うから、使うたびにストレス。",
  },
  {
    Icon: Smartphone,
    title: "栄養管理アプリは自炊向けで使えない",
    description: "既存アプリは自炊・コンビニ食がメイン。外食チェーンのメニューデータが少なく、実用性に欠ける。",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            こんな悩み、ありませんか？
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            あなたも感じていませんか？
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            外食が多い人ほど、食事管理のハードルは高い。
            でも、それは今までのアプリが外食に対応していなかっただけ。
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-6 border border-red-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <problem.Icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution arrow */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="text-4xl">↓</div>
            <div className="bg-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg shadow-orange-200">
              <p className="text-lg font-bold mb-1">たべなびなら、全部解決できます。</p>
              <p className="text-orange-100 text-sm">外食専門だから実現できた、ストレスゼロの食事管理</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
