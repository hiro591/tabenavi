import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

// ISR: cache for 24 hours (CPU optimization).
export const revalidate = 86400;

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/low-fat-eating-out" },
  title:
    "【2026年最新版】外食で低脂質メニューを選ぶ完全ガイド｜チェーン店別おすすめ | たべなび",
  description:
    "脂質制限中でも安心して外食できるチェーン店別低脂質メニューを紹介。1日の脂質管理法から選び方のコツまで完全解説。",
  keywords: [
    "外食 低脂質",
    "低脂質 メニュー チェーン店",
    "脂質制限 外食",
    "ローファット 外食",
    "脂質制限 ダイエット",
  ],
  openGraph: {
    title: "外食で低脂質メニューを選ぶ完全ガイド｜チェーン店別おすすめ",
    description:
      "脂質制限中でも安心して外食できるチェーン店別低脂質メニューを紹介。",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "外食で低脂質メニューを選ぶ完全ガイド｜チェーン店別おすすめ",
  description:
    "脂質制限中でも安心して外食できるチェーン店別低脂質メニューを紹介。",
  datePublished: "2026-03-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/low-fat-eating-out",
};

const tocItems = [
  { id: "why-low-fat", label: "なぜ脂質を抑えることが重要なのか" },
  { id: "daily-fat-target", label: "1日の脂質の目安と外食での管理法" },
  { id: "chain-ranking", label: "チェーン店別 低脂質メニューランキング" },
  { id: "how-to-choose", label: "低脂質の外食メニューの選び方" },
  { id: "summary", label: "まとめ" },
];

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
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="外食で低脂質メニューを選ぶ完全ガイド"
        subtitle="脂質制限中でも安心して外食できるチェーン店別おすすめメニュー"
        imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop"
        breadcrumb="低脂質メニューガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="low-fat-eating-out">
        {/* Authority & date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        {/* QuickAnswer */}
        <QuickAnswer
          question="ローファットダイエット中、外食でどう選べばいい？低脂質なメニューのおすすめは？"
          answer={
            <>
              <strong>「揚げ物 NG・蒸し/焼き OK」が基本ルール</strong>。脂質15g以下のメニューを優先し、1食あたり脂質を10〜15gに抑えるのが理想です。チェーン別おすすめは<strong>マック「ハンバーガー」（脂質9.5g）/ 吉野家「ライザップ牛サラダ」（脂質13g）/ 松屋「焼鮭定食」 / サブウェイ「ローストビーフ」</strong>。揚げ物（チキンフィレオ、唐揚げ系）、クリーム系パスタ、マヨネーズ多用メニューは避けましょう。
            </>
          }
        />

        <p className="text-gray-700 leading-relaxed mb-4">
          脂質制限ダイエット（ローファットダイエット）中の外食は、メニュー選びが非常に重要です。
          このガイドでは、主要チェーン店の<Marker>脂質15g以下</Marker>のメニューをデータベースから抽出し、
          安心して選べるメニューを紹介します。
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          脂質は1gあたり9kcalと高エネルギーなため、少し減らすだけでカロリーを大きくカットできます。
          正しい知識を身につければ、<Marker color="green">外食を楽しみながら脂質コントロール</Marker>が可能です。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: なぜ脂質を抑えることが重要なのか */}
        <SectionHeading id="why-low-fat">
          なぜ脂質を抑えることが重要なのか
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-4">
          脂質は<Marker>1gあたり9kcal</Marker>と、タンパク質・炭水化物（1gあたり4kcal）の
          <Marker color="blue">2倍以上のカロリー</Marker>を持ちます。
          そのため、脂質を抑えることはカロリーカットに最も効率的なアプローチです。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          例えば、揚げ物をグリルに変えるだけで1食あたり10〜20gの脂質を削減でき、
          これだけで<Marker color="green">90〜180kcalのカロリーカット</Marker>になります。
        </p>

        <WarningBox title="脂質を完全にカットしない">
          <p>
            脂質はホルモンの材料や脂溶性ビタミン（A・D・E・K）の吸収に不可欠な栄養素です。
            完全にカットするのではなく、1日の摂取量を適切にコントロールすることが大切です。
            極端な脂質制限は肌荒れやホルモンバランスの乱れにつながることがあります。
          </p>
        </WarningBox>

        <TipBox title="脂質制限が向いている人">
          <ul className="space-y-1">
            <li>・ 揚げ物やスナック菓子が好きで、脂質過多になりがちな人</li>
            <li>・ 糖質制限が合わず、ごはんやパンを食べながら痩せたい人</li>
            <li>・ 筋トレと組み合わせて体脂肪を落としたい人</li>
          </ul>
        </TipBox>

        <ArticleImage src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=400&fit=crop" alt="香ばしく焼き上げた魚のグリル料理" />

        {/* Section 2: 1日の脂質の目安 */}
        <SectionHeading id="daily-fat-target">
          1日の脂質の目安と外食での管理法
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-4">
          ダイエット中の脂質目標は、1日の摂取カロリーの<Marker>20〜25%</Marker>が目安です。
          以下の表で、目的別の1日の脂質目安を確認しましょう。
        </p>

        <ComparisonTable
          headers={["目的", "1日のカロリー", "脂質の目安", "1食あたり"]}
          rows={[
            ["減量（女性）", "1,400 kcal", "31〜39 g", "10〜13 g"],
            ["減量（男性）", "1,800 kcal", "40〜50 g", "13〜17 g"],
            ["維持", "2,200 kcal", "49〜61 g", "16〜20 g"],
          ]}
        />

        <TipBox title="外食する日の脂質管理のコツ">
          <p className="mb-2">
            外食では脂質が多くなりがちです。外食する日は朝食・間食を低脂質にして調整しましょう。
          </p>
          <ul className="space-y-1">
            <li>・ <strong>朝食：</strong>おにぎり、ヨーグルト、フルーツなど脂質5g以下に抑える</li>
            <li>・ <strong>間食：</strong>和菓子、干し芋、プロテインバーなど低脂質おやつを選ぶ</li>
            <li>・ <strong>夕食：</strong>外食で脂質15g以下のメニューを選べば、1日トータルで管理可能</li>
          </ul>
        </TipBox>

        {/* Section 3: チェーン店別ランキング */}
        <SectionHeading id="chain-ranking">
          チェーン店別 低脂質メニューランキング
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          たべなびのデータベースから<Marker>脂質15g以下</Marker>のメニューを抽出しました
          （100kcal以上のメニューが対象）。チェーンごとに低脂質メニューの品数順に紹介します。
        </p>

        {sortedChains.length > 0 ? (
          <div className="space-y-10">
            {sortedChains.slice(0, 10).map(([chain, chainItems]) => (
              <div key={chain}>
                <SubSectionHeading>
                  {chain}（{chainItems.length}品）
                </SubSectionHeading>
                <div className="overflow-x-auto border border-gray-200 my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sky-400 text-white">
                        <th className="text-left px-4 py-2.5 font-bold">メニュー</th>
                        <th className="text-right px-4 py-2.5 font-bold">脂質</th>
                        <th className="text-right px-4 py-2.5 font-bold">カロリー</th>
                        <th className="text-right px-4 py-2.5 font-bold">タンパク質</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chainItems.slice(0, 8).map((item, i) => (
                        <tr
                          key={item.id}
                          className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                        >
                          <td className="px-4 py-2.5 text-gray-900 font-medium max-w-[200px] truncate">
                            <Link
                              href={`/items/${item.id}`}
                              className="text-sky-500 hover:text-sky-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </td>
                          <td className="text-right px-4 py-2.5 text-green-600 font-semibold">
                            {item.fat != null ? `${item.fat.toFixed(1)}g` : "-"}
                          </td>
                          <td className="text-right px-4 py-2.5 text-gray-700">
                            {item.calories != null ? `${item.calories} kcal` : "-"}
                          </td>
                          <td className="text-right px-4 py-2.5 text-gray-700">
                            {item.protein != null ? `${item.protein.toFixed(1)}g` : "-"}
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

        <ArticleImage src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=400&fit=crop" alt="色鮮やかな新鮮野菜のサラダボウル" />

        {/* Mid-article CTA */}
        <CTABanner
          title="低脂質メニューをもっと探す"
          subtitle="たべなびなら、脂質でフィルターして簡単にメニューが見つかります"
        />

        {/* Section 4: 選び方 */}
        <SectionHeading id="how-to-choose">
          低脂質の外食メニューの選び方
        </SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          外食で脂質を抑えるには、調理法と食材の選び方が鍵です。
          以下の3つのポイントを押さえておけば、どのお店でも低脂質メニューを見つけられます。
        </p>

        <NumberedList
          items={[
            {
              title: "揚げ物を避ける",
              body: "揚げ物は衣が油を吸収し、脂質が跳ね上がります。唐揚げ、天ぷら、フライ系メニューはできるだけ避け、焼き物や煮物を選びましょう。同じ鶏肉でも、唐揚げとグリルチキンでは脂質が2〜3倍違うことも。",
            },
            {
              title: "グリル・蒸し料理を選ぶ",
              body: "調理法で脂質量は大きく変わります。グリル、蒸し、茹で、焼き魚など、油を使わない調理法のメニューを優先しましょう。中華料理は炒め油が多いので注意が必要です。",
            },
            {
              title: "ドレッシング・ソースは別添えで",
              body: "サラダのドレッシングには多くの油が含まれています。別添えにしてもらい、量を調整するか、ノンオイルドレッシングを選びましょう。マヨネーズ系は特に脂質が高いので要注意。",
            },
          ]}
        />

        <TipBox title="意外と脂質が高い食品に注意">
          <ul className="space-y-1">
            <li>・ <strong>チーズ：</strong>1枚（約20g）で脂質5g以上。トッピングは控えめに</li>
            <li>・ <strong>ナッツ：</strong>一握り（30g）で脂質15g前後。ヘルシーイメージに騙されがち</li>
            <li>・ <strong>アボカド：</strong>半分で脂質約10g。良質な脂質だが量に注意</li>
            <li>・ <strong>クリーム系パスタ：</strong>1皿で脂質30g超えも。トマト系を選ぼう</li>
          </ul>
        </TipBox>

        <ArticleImage src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop" alt="高タンパクな鶏むね肉のグリル料理" />

        {/* Section 5: まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          脂質制限中でも、正しいメニューを選べば外食は十分に楽しめます。
          以下のポイントを押さえて、無理のない脂質管理を続けましょう。
        </p>

        <ArticleSummary
          points={[
            "脂質は1gあたり9kcal。脂質を減らすのがカロリーカットの近道",
            "揚げ物を避け、グリル・蒸し料理を選ぶのが基本",
            "外食1食あたりの脂質目標は10〜17g程度",
            "ドレッシングやソース類は別添え・控えめに",
            "外食する日は他の食事で脂質を調整する",
            "たべなびのフィルター機能で低脂質メニューを簡単検索",
          ]}
        />

        {/* FAQ */}
        <FAQSection
          slug="low-fat-eating-out"
          items={[
            {
              q: "ローファットダイエット中、外食で1食何gが目安？",
              a: "1食あたりの脂質は10〜17gが目安です。1日の脂質量は体重×0.7〜1.0gが理想（体重60kgなら42〜60g/日）。3食外食するなら1食あたり15g前後に収めましょう。揚げ物1品で20g超えるので注意。",
            },
            {
              q: "マクドナルドで一番低脂質のバーガーは？",
              a: "ハンバーガー単品（259kcal/F9.5g）が脂質最少です。チーズバーガー（F13.5g）、エッグマックマフィン（F13.6g）も比較的低脂質。逆にてりやきマックバーガー（F30.2g）、倍ビッグマック（F43.1g）は要注意。",
            },
            {
              q: "牛丼チェーンでローファット向きのメニューは？",
              a: "吉野家のライザップ牛サラダ（414kcal/F13g）が脂質最少で高タンパク。次いで吉野家の牛皿並盛（241kcal/F17g）、すき家の牛丼ライト（豆腐ベース・F約15g）。普通の牛丼並盛は脂質23〜25g前後あり、ローファット中はサイズ小盛にしましょう。",
            },
            {
              q: "コンビニのローファット向き商品は？",
              a: "サラダチキン（F1〜2g）、おにぎり（F1〜3g）、納豆（F5g）、ヨーグルト無脂肪タイプ（F0〜1g）、ゆで卵（F5g）など豊富にあります。組み合わせれば1食300kcal/F10g以下で高タンパクな食事が可能です。",
            },
            {
              q: "ローファットダイエットでも食べていい揚げ物はある？",
              a: "基本的に避けるべきですが、どうしても食べる場合は「衣を残す」「サイドサラダで野菜を増やす」「次の食事で脂質ゼロにする」で調整可能。一度の脂質オーバーで太るわけではないので、週1〜2回までなら影響は限定的です。",
            },
            {
              q: "ファミレスでローファット向きのメニューは？",
              a: "サイゼリヤの若鶏のグリル（F約15g）、ガストの蒸し鶏冷麺、ジョナサンのグリルチキン系がおすすめ。逆にカルボナーラ・グラタン・ハンバーグ系は脂質30g超のものが多いので避けましょう。",
            },
            {
              q: "サラダドレッシングで太らないものは？",
              a: "和風（ノンオイル）・玉ねぎドレッシング・酢系がおすすめで、1袋あたり脂質1〜3g。一方シーザー、ごま、フレンチ系は脂質10g超。ドレッシングは「半分だけかける」「別添えにしてつける」だけで脂質を半減できます。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-05-12", note: "QuickAnswer・FAQ・著者情報を追加。最新栄養データに対応" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="low-fat-eating-out" />

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-10 mb-4">
          ※ 掲載されている価格・栄養成分は公式サイト等の情報を基にしており、
          店舗や時期によって異なる場合があります。最新情報は各チェーンの公式サイトをご確認ください。
        </p>

        {/* Back link */}
        <div className="text-center pb-8">
          <Link
            href="/guide"
            className="text-sm text-gray-400 hover:text-sky-500 transition-colors"
          >
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </ArticleLayout>
    </div>
  );
}
