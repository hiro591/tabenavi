const stats = [
  {
    value: "35.7兆円",
    label: "外食市場規模",
    sub: "日本フードサービス協会 2024",
  },
  {
    value: "60%",
    label: "月1回以上外食する人",
    sub: "総務省家計調査より",
  },
  {
    value: "年率15%",
    label: "健康管理アプリ市場成長率",
    sub: "グローバル市場予測",
  },
  {
    value: "0件",
    label: "外食専門の栄養管理アプリ",
    sub: "ブルーオーシャン市場",
  },
];

export default function StatsBar() {
  return (
    <section className="py-16 bg-orange-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-orange-200 text-xs">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
