const chains = [
  { name: "マクドナルド", emoji: "🍔" },
  { name: "吉野家", emoji: "🍚" },
  { name: "松屋", emoji: "🍛" },
  { name: "すき家", emoji: "🥩" },
  { name: "サイゼリヤ", emoji: "🍝" },
  { name: "ガスト", emoji: "🍴" },
  { name: "大戸屋", emoji: "🐟" },
  { name: "やよい軒", emoji: "🍱" },
  { name: "CoCo壱番屋", emoji: "🍛" },
  { name: "丸亀製麺", emoji: "🍜" },
  { name: "スターバックス", emoji: "☕" },
  { name: "モスバーガー", emoji: "🍔" },
  { name: "スシロー", emoji: "🍣" },
  { name: "くら寿司", emoji: "🍣" },
  { name: "日高屋", emoji: "🍜" },
  { name: "てんや", emoji: "🍤" },
  { name: "餃子の王将", emoji: "🥟" },
  { name: "バーミヤン", emoji: "🥢" },
  { name: "ケンタッキー", emoji: "🍗" },
  { name: "ドトール", emoji: "☕" },
];

export default function Chains() {
  return (
    <section id="chains" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            対応チェーン
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            よく行くお店、全部対応
          </h2>
          <p className="text-lg text-gray-600">
            主要チェーン20社の公式栄養データを収録。順次拡大中。
          </p>
        </div>

        {/* Chain grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="bg-orange-50 hover:bg-orange-100 rounded-2xl p-4 text-center transition-all hover:shadow-md hover:-translate-y-0.5 cursor-default"
            >
              <div className="text-3xl mb-2">{chain.emoji}</div>
              <div className="text-xs font-medium text-gray-700">{chain.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          ＋個人店はユーザー投稿で随時追加
        </div>
      </div>
    </section>
  );
}
