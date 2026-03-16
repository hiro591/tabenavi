const features = [
  {
    icon: "🏪",
    title: "日本最大の外食チェーンDB",
    description: "マクドナルド・松屋・スシロー・大戸屋など主要20チェーンの公式栄養データを収録。メニュー名をタップするだけで正確な記録が完了。",
    color: "orange",
    comingSoon: false,
  },
  {
    icon: "📸",
    title: "ガイショクSnap",
    description: "メニュー表・料理写真・レシートを撮影するだけでAIが自動認識。注文前に栄養を確認することも可能。",
    color: "blue",
    comingSoon: true,
  },
  {
    icon: "😊",
    title: "まあいいかモード",
    description: "カロリーオーバーで叱責するのではなく、ポジティブなフレーミングで外食の楽しさを守りながら健康管理をサポート。",
    color: "green",
    comingSoon: false,
  },
  {
    icon: "🗺️",
    title: "次どこ行く？レコメンド",
    description: "今週の栄養バランスから「不足している栄養を補える近くの外食先」をAIがレコメンド。もう迷わない。",
    color: "purple",
    comingSoon: true,
  },
  {
    icon: "📊",
    title: "週次レポート",
    description: "毎週月曜日に先週の食事サマリーをお届け。ベストチョイスをハイライトし、今週のちょっとしたチャレンジを提案。",
    color: "amber",
    comingSoon: false,
  },
  {
    icon: "🔗",
    title: "みんなの外食マップ",
    description: "ユーザーが投稿した個人店の栄養情報が蓄積。みんなで作る、外食×栄養の地図。記録するほど情報が充実。",
    color: "rose",
    comingSoon: false,
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  orange: { bg: "bg-orange-50", icon: "bg-orange-100 text-orange-600", badge: "text-orange-600" },
  blue: { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-600", badge: "text-blue-600" },
  green: { bg: "bg-green-50", icon: "bg-green-100 text-green-600", badge: "text-green-600" },
  purple: { bg: "bg-purple-50", icon: "bg-purple-100 text-purple-600", badge: "text-purple-600" },
  amber: { bg: "bg-amber-50", icon: "bg-amber-100 text-amber-600", badge: "text-amber-600" },
  rose: { bg: "bg-rose-50", icon: "bg-rose-100 text-rose-600", badge: "text-rose-600" },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            機能
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            外食専門だからできること
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-3">
            汎用アプリが自炊・コンビニ・外食を広く浅くカバーするのに対し、
            たべなびは外食「だけ」を深く最適化しています。
          </p>
          <p className="text-sm text-orange-500 font-medium">
            あすけん・MyFitnessPalにはできない、外食に特化した体験
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className={`${colors.bg} rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-default relative group`}
              >
                {feature.comingSoon && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    近日公開
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
