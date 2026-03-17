import { HelpCircle, ClipboardList, Frown, Smartphone, ArrowDown } from "lucide-react";
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
    description: "「また外食しちゃった...」という罪悪感。健康管理アプリが外食を否定的に扱うから、使うたびにストレス。",
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
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-500 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-red-100">
            こんな悩み、ありませんか？
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            外食が多い人ほど、
            <br className="sm:hidden" />
            食事管理が難しい
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            でも、それは今までのアプリが外食に対応していなかっただけ。
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-orange-400 opacity-60"></div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-full flex items-center justify-center flex-shrink-0 border border-red-100/50">
                  <problem.Icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5">{problem.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution transition */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-gray-200 to-orange-200 flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-orange-600" />
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl shadow-lg shadow-orange-500/20">
              <p className="text-lg font-bold mb-1">たべなびなら、全部解決できます。</p>
              <p className="text-orange-100 text-sm">外食専門だから実現できた、ストレスゼロの食事管理</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
