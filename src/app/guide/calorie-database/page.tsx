import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "外食チェーン店カロリー一覧【全20社・500メニュー完全版】 | たべなび",
  description:
    "マクドナルド、吉野家、サイゼリヤなど主要20チェーン店のカロリー・栄養成分を完全網羅。ダイエット・筋トレ中の外食メニュー選びに。",
  keywords: [
    "外食 カロリー 一覧",
    "チェーン店 カロリー まとめ",
    "外食 カロリー表",
    "ファストフード カロリー",
    "ファミレス カロリー",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "外食チェーン店カロリー一覧【全20社・500メニュー完全版】",
  description:
    "主要20チェーン店のカロリー・栄養成分を完全網羅。",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "たべなび", url: "https://tabenavi.jp" },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://tabenavi.jp/guide/calorie-database",
};

interface MenuItem {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  price: number | null;
  chain_restaurants: { name: string } | null;
}

const CHAIN_CATEGORIES = [
  {
    category: "ファストフード",
    chains: ["マクドナルド", "モスバーガー", "ケンタッキー", "サブウェイ"],
    slug: "fastfood",
  },
  {
    category: "牛丼・定食チェーン",
    chains: ["吉野家", "松屋", "すき家", "なか卯", "大戸屋", "やよい軒"],
    slug: "gyudon-teishoku",
  },
  {
    category: "ファミレス",
    chains: ["サイゼリヤ", "ガスト", "バーミヤン", "デニーズ"],
    slug: "family-restaurant",
  },
  {
    category: "中華・麺類",
    chains: ["餃子の王将", "日高屋", "丸亀製麺"],
    slug: "chinese-noodle",
  },
  {
    category: "カフェ",
    chains: ["スターバックス", "ドトール"],
    slug: "cafe",
  },
  {
    category: "回転寿司",
    chains: ["くら寿司", "スシロー"],
    slug: "sushi",
  },
];

const CHAIN_SLUG_MAP: Record<string, string> = {
  "マクドナルド": "mcdonalds",
  "モスバーガー": "mos",
  "ケンタッキー": "kfc",
  "サブウェイ": "subway",
  "吉野家": "yoshinoya",
  "松屋": "matsuya",
  "すき家": "sukiya",
  "なか卯": "nakau",
  "大戸屋": "ootoya",
  "やよい軒": "yayoiken",
  "サイゼリヤ": "saizeriya",
  "ガスト": "gusto",
  "バーミヤン": "bamiyan",
  "デニーズ": "dennys",
  "餃子の王将": "ohsho",
  "日高屋": "hidakaya",
  "丸亀製麺": "marugame",
  "スターバックス": "starbucks",
  "ドトール": "doutor",
  "くら寿司": "kurasushi",
  "スシロー": "sushiro",
};

async function fetchAllItems() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("menu_items")
    .select(
      "id, name, calories, protein, fat, carbs, price, chain_restaurants(name)"
    )
    .not("calories", "is", null)
    .order("calories", { ascending: true })
    .returns<MenuItem[]>();
  return data ?? [];
}

function ItemTable({ items }: { items: MenuItem[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 text-gray-600">
            <th className="text-left px-4 py-2.5 font-medium">メニュー</th>
            <th className="text-right px-4 py-2.5 font-medium">カロリー</th>
            <th className="text-right px-4 py-2.5 font-medium">P</th>
            <th className="text-right px-4 py-2.5 font-medium">F</th>
            <th className="text-right px-4 py-2.5 font-medium">C</th>
            <th className="text-right px-4 py-2.5 font-medium">価格</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={item.id}
              className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
            >
              <td className="px-4 py-2 text-gray-900 font-medium max-w-[200px] truncate">
                <Link
                  href={`/items/${item.id}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </Link>
              </td>
              <td className="text-right px-4 py-2 text-gray-700">
                {item.calories != null ? `${item.calories}` : "-"}
              </td>
              <td className="text-right px-4 py-2 text-gray-700">
                {item.protein != null ? `${item.protein.toFixed(1)}` : "-"}
              </td>
              <td className="text-right px-4 py-2 text-gray-700">
                {item.fat != null ? `${item.fat.toFixed(1)}` : "-"}
              </td>
              <td className="text-right px-4 py-2 text-gray-700">
                {item.carbs != null ? `${item.carbs.toFixed(1)}` : "-"}
              </td>
              <td className="text-right px-4 py-2 text-gray-700">
                {item.price != null ? `¥${item.price}` : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function CalorieDatabasePage() {
  const allItems = await fetchAllItems();

  // Group by chain name
  const byChain = new Map<string, MenuItem[]>();
  for (const item of allItems) {
    const chain = item.chain_restaurants?.name ?? "その他";
    if (!byChain.has(chain)) byChain.set(chain, []);
    byChain.get(chain)!.push(item);
  }

  const totalMenus = allItems.length;
  const totalChains = byChain.size;

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/guide"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">ガイド一覧</span>
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          外食チェーン店カロリー一覧【全{totalChains}社・{totalMenus}メニュー完全版】
        </h1>
        <p className="text-sm text-gray-400 mb-8">最終更新: 2026年3月</p>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            このページの使い方
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            日本の主要外食チェーン{totalChains}社、合計{totalMenus}メニューのカロリー・栄養成分（PFC）を
            一覧にまとめました。ダイエット中の外食メニュー選びや、日々の栄養管理にお役立てください。
          </p>
          <div className="p-4 bg-orange-50 rounded-xl">
            <p className="text-sm text-orange-800">
              <strong>P</strong>=タンパク質（g）、<strong>F</strong>=脂質（g）、<strong>C</strong>=炭水化物（g）
              で表示しています。各メニュー名をタップすると詳細ページを確認できます。
            </p>
          </div>

          {/* TOC */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm font-semibold text-gray-700 mb-2">目次</p>
            <ul className="space-y-1">
              {CHAIN_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href={`#${cat.slug}`}
                    className="text-sm text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    {cat.category}（{cat.chains.join("・")}）
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Chain Categories */}
        {CHAIN_CATEGORIES.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              {cat.category}
            </h2>

            {cat.chains.map((chainName) => {
              const chainItems = byChain.get(chainName) ?? [];
              const displayItems = chainItems.slice(0, 10);
              const guideSlug = CHAIN_SLUG_MAP[chainName];

              if (displayItems.length === 0) return null;

              return (
                <div key={chainName} className="mb-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">
                      {chainName}
                      <span className="text-sm text-gray-400 font-normal ml-2">
                        （全{chainItems.length}品）
                      </span>
                    </h3>
                    {guideSlug && (
                      <Link
                        href={`/guide/${guideSlug}`}
                        className="text-xs text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        詳細ガイド →
                      </Link>
                    )}
                  </div>
                  <ItemTable items={displayItems} />
                  {chainItems.length > 10 && (
                    <p className="text-xs text-gray-400 mt-2 text-right">
                      他{chainItems.length - 10}品は
                      {guideSlug ? (
                        <Link
                          href={`/guide/${guideSlug}`}
                          className="text-orange-500 hover:text-orange-600"
                        >
                          詳細ガイド
                        </Link>
                      ) : (
                        "たべなびアプリ"
                      )}
                      でご覧いただけます
                    </p>
                  )}
                </div>
              );
            })}
          </section>
        ))}

        {/* コンビニセクション */}
        <section id="conveni" className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            コンビニ
          </h2>
          {(() => {
            const conveniChains = ["セブンイレブン", "ローソン", "ファミリーマート"];
            return conveniChains.map((chainName) => {
              const chainItems = byChain.get(chainName) ?? [];
              const displayItems = chainItems.slice(0, 10);

              if (displayItems.length === 0) return null;

              return (
                <div key={chainName} className="mb-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">
                      {chainName}
                      <span className="text-sm text-gray-400 font-normal ml-2">
                        （全{chainItems.length}品）
                      </span>
                    </h3>
                    <Link
                      href="/guide/conveni"
                      className="text-xs text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      詳細ガイド →
                    </Link>
                  </div>
                  <ItemTable items={displayItems} />
                  {chainItems.length > 10 && (
                    <p className="text-xs text-gray-400 mt-2 text-right">
                      他{chainItems.length - 10}品は
                      <Link
                        href="/guide/conveni"
                        className="text-orange-500 hover:text-orange-600"
                      >
                        詳細ガイド
                      </Link>
                      でご覧いただけます
                    </p>
                  )}
                </div>
              );
            });
          })()}
        </section>

        {/* 関連ガイド */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            関連するガイド
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guide/eating-out-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              外食ダイエット完全ガイド
            </Link>
            <Link
              href="/guide/gyudon-comparison"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              牛丼チェーン比較
            </Link>
            <Link
              href="/guide/low-fat-eating-out"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              低脂質メニューガイド
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10 border-t border-gray-100">
          <p className="text-gray-600 mb-4 text-sm">
            栄養管理をもっと簡単に。
          </p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-200"
          >
            たべなびで栄養管理を始める（無料）
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mb-4">
          ※ 掲載されている価格・栄養成分は公式サイト等の情報を基にしており、
          店舗や時期によって異なる場合があります。最新情報は各チェーンの公式サイトをご確認ください。
        </p>

        {/* Back link */}
        <div className="text-center pb-8">
          <Link
            href="/guide"
            className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
          >
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
