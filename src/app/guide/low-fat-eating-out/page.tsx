import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "外食で低脂質メニューを選ぶ完全ガイド｜チェーン店別おすすめ | たべなび",
  description:
    "脂質制限中でも安心して外食できるチェーン店別低脂質メニューを紹介。1日の脂質管理法から選び方のコツまで完全解説。",
  keywords: [
    "外食 低脂質",
    "低脂質 メニュー チェーン店",
    "脂質制限 外食",
    "ローファット 外食",
    "脂質制限 ダイエット",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "外食で低脂質メニューを選ぶ完全ガイド｜チェーン店別おすすめ",
  description:
    "脂質制限中でも安心して外食できるチェーン店別低脂質メニューを紹介。",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "たべなび", url: "https://tabenavi.jp" },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://tabenavi.jp/guide/low-fat-eating-out",
};

interface LowFatItem {
  id: string;
  name: string;
  calories: number | null;
  protein: number | null;
  fat: number | null;
  carbs: number | null;
  price: number | null;
  chain_restaurants: { name: string } | null;
}

async function fetchLowFatItems() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("menu_items")
    .select(
      "id, name, calories, protein, fat, carbs, price, chain_restaurants(name)"
    )
    .not("fat", "is", null)
    .not("calories", "is", null)
    .lte("fat", 15)
    .gt("calories", 100)
    .order("fat", { ascending: true })
    .limit(100)
    .returns<LowFatItem[]>();
  return data ?? [];
}

export default async function LowFatEatingOutPage() {
  const items = await fetchLowFatItems();

  // Group by chain
  const byChain = new Map<string, LowFatItem[]>();
  for (const item of items) {
    const chain = item.chain_restaurants?.name ?? "その他";
    if (!byChain.has(chain)) byChain.set(chain, []);
    byChain.get(chain)!.push(item);
  }

  // Sort chains by number of low-fat items (descending)
  const sortedChains = [...byChain.entries()].sort(
    (a, b) => b[1].length - a[1].length
  );

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
          外食で低脂質メニューを選ぶ完全ガイド｜チェーン店別おすすめ
        </h1>
        <p className="text-sm text-gray-400 mb-8">最終更新: 2026年3月</p>

        <p className="text-gray-600 leading-relaxed mb-8">
          脂質制限ダイエット（ローファットダイエット）中の外食は、メニュー選びが非常に重要です。
          このガイドでは、主要チェーン店の低脂質メニューをデータベースから抽出し、
          安心して選べるメニューを紹介します。
        </p>

        {/* なぜ脂質を抑えることが重要か */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            なぜ脂質を抑えることが重要なのか
          </h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              脂質は1gあたり9kcalと、タンパク質・炭水化物（1gあたり4kcal）の2倍以上のカロリーを持ちます。
              そのため、脂質を抑えることはカロリーカットに最も効率的なアプローチです。
            </p>
            <p>
              ただし、脂質はホルモンの材料や脂溶性ビタミンの吸収に不可欠な栄養素でもあります。
              完全にカットするのではなく、1日の摂取量を適切にコントロールすることが大切です。
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-800">
              <strong>目安：</strong>ダイエット中の脂質目標は、1日の摂取カロリーの20〜25%程度。
              1日1,800kcalの場合は40〜50gが目安です。
            </p>
          </div>
        </section>

        {/* チェーン店別 低脂質メニュー */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            チェーン店別 低脂質メニューランキング
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            たべなびのデータベースから脂質15g以下のメニューを抽出しました（100kcal以上のメニューが対象）。
          </p>

          {sortedChains.length > 0 ? (
            <div className="space-y-8">
              {sortedChains.slice(0, 10).map(([chain, chainItems]) => (
                <div key={chain}>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {chain}（{chainItems.length}品）
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 text-gray-600">
                          <th className="text-left px-4 py-2.5 font-medium">メニュー</th>
                          <th className="text-right px-4 py-2.5 font-medium">脂質</th>
                          <th className="text-right px-4 py-2.5 font-medium">カロリー</th>
                          <th className="text-right px-4 py-2.5 font-medium">タンパク質</th>
                        </tr>
                      </thead>
                      <tbody>
                        {chainItems.slice(0, 8).map((item, i) => (
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
                            <td className="text-right px-4 py-2 text-green-600 font-semibold">
                              {item.fat != null ? `${item.fat.toFixed(1)} g` : "-"}
                            </td>
                            <td className="text-right px-4 py-2 text-gray-700">
                              {item.calories != null ? `${item.calories} kcal` : "-"}
                            </td>
                            <td className="text-right px-4 py-2 text-gray-700">
                              {item.protein != null ? `${item.protein.toFixed(1)} g` : "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">データを読み込み中です。</p>
          )}
        </section>

        {/* 低脂質の外食メニューの選び方 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            低脂質の外食メニューの選び方
          </h2>
          <div className="space-y-4">
            <div className="p-5 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-green-800 mb-2">
                揚げ物を避ける
              </h3>
              <p className="text-sm text-green-700">
                揚げ物は衣が油を吸収し、脂質が跳ね上がります。唐揚げ、天ぷら、フライ系メニューは
                できるだけ避け、焼き物や煮物を選びましょう。同じ鶏肉でも、唐揚げとグリルチキンでは
                脂質が2〜3倍違うことも。
              </p>
            </div>
            <div className="p-5 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-green-800 mb-2">
                グリル・蒸し料理を選ぶ
              </h3>
              <p className="text-sm text-green-700">
                調理法で脂質量は大きく変わります。グリル、蒸し、茹で、焼き魚など、
                油を使わない調理法のメニューを優先しましょう。中華料理は炒め油が多いので注意が必要です。
              </p>
            </div>
            <div className="p-5 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-green-800 mb-2">
                ドレッシングは別添えで
              </h3>
              <p className="text-sm text-green-700">
                サラダのドレッシングには多くの油が含まれています。別添えにしてもらい、
                量を調整するか、ノンオイルドレッシングを選びましょう。マヨネーズ系は特に脂質が高いので要注意。
              </p>
            </div>
          </div>
        </section>

        {/* 1日の脂質の目安 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            1日の脂質の目安と外食での管理法
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="text-left px-4 py-3 font-medium">目的</th>
                  <th className="text-right px-4 py-3 font-medium">1日のカロリー</th>
                  <th className="text-right px-4 py-3 font-medium">脂質の目安</th>
                  <th className="text-right px-4 py-3 font-medium">1食あたり</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-900 font-medium">減量（女性）</td>
                  <td className="text-right px-4 py-3 text-gray-700">1,400 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">31〜39 g</td>
                  <td className="text-right px-4 py-3 text-green-600 font-semibold">10〜13 g</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-900 font-medium">減量（男性）</td>
                  <td className="text-right px-4 py-3 text-gray-700">1,800 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">40〜50 g</td>
                  <td className="text-right px-4 py-3 text-green-600 font-semibold">13〜17 g</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-900 font-medium">維持</td>
                  <td className="text-right px-4 py-3 text-gray-700">2,200 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">49〜61 g</td>
                  <td className="text-right px-4 py-3 text-green-600 font-semibold">16〜20 g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl">
            <p className="text-sm text-amber-800">
              <strong>外食での管理のコツ：</strong>外食では脂質が多くなりがちなので、
              外食する日は朝食・間食を低脂質にして調整しましょう。たべなびを使えば、
              1日トータルの脂質管理が簡単にできます。
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">まとめ</h2>
          <div className="p-6 bg-gray-50 rounded-xl">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>- 脂質は1gあたり9kcal。脂質を減らすのがカロリーカットの近道</li>
              <li>- 揚げ物を避け、グリル・蒸し料理を選ぶのが基本</li>
              <li>- 外食1食あたりの脂質目標は10〜17g程度</li>
              <li>- ドレッシングやソース類は別添え・控えめに</li>
              <li>- 外食する日は他の食事で脂質を調整する</li>
            </ul>
          </div>
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
              href="/guide/calorie-database"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              カロリー一覧
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
