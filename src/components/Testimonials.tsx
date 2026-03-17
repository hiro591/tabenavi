import { Star } from "lucide-react";

const testimonials = [
  {
    name: "田中 翔太",
    age: "28歳",
    role: "ITエンジニア",
    initial: "T",
    color: "bg-blue-500",
    review: "週5外食でも継続できた初めてのアプリ。チェーン店のメニューがそのまま出てくるから、記録が本当に10秒で終わる。もう他のアプリには戻れません。",
  },
  {
    name: "鈴木 美咲",
    age: "34歳",
    role: "マーケター",
    initial: "S",
    color: "bg-pink-500",
    review: "松屋ユーザーには神アプリ。ワンタップで記録できるのが最高。お気に入りメニューを登録しておけば、毎日の記録がさらに爆速になりました。",
  },
  {
    name: "佐藤 健一",
    age: "31歳",
    role: "営業職",
    initial: "S",
    color: "bg-green-500",
    review: "健康診断前に2週間使っただけで5kg減量のきっかけに。外食ランチの選び方が変わりました。カロリーが見える化されると意識が全然違います。",
  },
  {
    name: "山田 あおい",
    age: "26歳",
    role: "デザイナー",
    initial: "Y",
    color: "bg-purple-500",
    review: "カロリー警告が出ないのが続く理由。外食を楽しみながら管理できる。「まあいいかモード」のおかげで罪悪感なく記録を続けられています。",
  },
  {
    name: "中村 正樹",
    age: "40歳",
    role: "管理職",
    initial: "N",
    color: "bg-amber-500",
    review: "毎日のランチ記録が習慣になった。週次レポートが楽しみで、月曜の朝にチェックするのがルーティン。部下にも勧めています。",
  },
  {
    name: "伊藤 沙織",
    age: "29歳",
    role: "看護師",
    initial: "I",
    color: "bg-teal-500",
    review: "夜勤明けの外食管理に使ってます。チェーン店のデータが正確で信頼できる。不規則な生活でも栄養バランスを意識できるようになりました。",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            ユーザーの声
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ベータ版ユーザーから届いた声
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            先行リリースで利用いただいたユーザーの皆さまから、嬉しいフィードバックをいただいています。
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Speech bubble tail */}
              <div className="absolute -top-3 left-8 w-6 h-6 bg-white rotate-45 border-l border-t border-gray-100"></div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                {t.review}
              </p>

              {/* User info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.age} / {t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
