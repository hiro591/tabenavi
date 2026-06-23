import { createPublicClient } from "@/lib/supabase/public";
import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  TipBox,
  Marker,
  CTABanner,
  CheckList,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";

// ISR: 栄養データは月次変更。7日キャッシュで再生成CPUを大幅削減(旧12h)。
export const revalidate = 604800;
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/calorie-database" },
  title:
    "【2026年最新版】外食チェーン店カロリー一覧【全メニュー完全版】 | たべなび",
  description:
    "マクドナルド、吉野家、サイゼリヤなど主要チェーン店のカロリー・栄養成分を完全網羅。ダイエット・筋トレ中の外食メニュー選びに。",
  keywords: [
    "外食 カロリー 一覧",
    "チェーン店 カロリー まとめ",
    "外食 カロリー表",
    "ファストフード カロリー",
    "ファミレス カロリー",
  ],
  openGraph: {
    title: "外食チェーン店カロリー一覧【全メニュー完全版】",
    description:
      "主要チェーン店のカロリー・栄養成分を完全網羅。ダイエット・筋トレ中の外食メニュー選びに。",
    type: "article",
  },
};

// JSON-LD structured data for SEO (static trusted content only)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "外食チェーン店カロリー一覧【全メニュー完全版】",
  description:
    "主要チェーン店のカロリー・栄養成分を完全網羅。",
  datePublished: "2026-03-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
    },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/calorie-database",
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
    chains: ["吉野家", "松屋", "すき家", "大戸屋", "やよい軒"],
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
  const supabase = createPublicClient();
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
    <div className="overflow-x-auto border border-gray-200 my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-sky-400 text-white">
            <th className="text-left px-4 py-2.5 font-bold">メニュー</th>
            <th className="text-right px-4 py-2.5 font-bold">カロリー</th>
            <th className="text-right px-4 py-2.5 font-bold">P</th>
            <th className="text-right px-4 py-2.5 font-bold">F</th>
            <th className="text-right px-4 py-2.5 font-bold">C</th>
            <th className="text-right px-4 py-2.5 font-bold">価格</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
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
              <td className="text-right px-4 py-2.5 text-gray-700">
                {item.calories != null ? `${item.calories}` : "-"}
              </td>
              <td className="text-right px-4 py-2.5 text-gray-700">
                {item.protein != null ? `${item.protein.toFixed(1)}` : "-"}
              </td>
              <td className="text-right px-4 py-2.5 text-gray-700">
                {item.fat != null ? `${item.fat.toFixed(1)}` : "-"}
              </td>
              <td className="text-right px-4 py-2.5 text-gray-700">
                {item.carbs != null ? `${item.carbs.toFixed(1)}` : "-"}
              </td>
              <td className="text-right px-4 py-2.5 text-gray-700">
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

  const tocItems = [
    { id: "how-to-use", label: "このページの使い方" },
    ...CHAIN_CATEGORIES.map((cat) => ({
      id: cat.slug,
      label: cat.category,
    })),
    { id: "conveni", label: "コンビニ" },
    { id: "summary", label: "まとめ" },
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title={`外食チェーン店カロリー一覧【全${totalChains}社・${totalMenus}メニュー】`}
        subtitle="主要チェーン店のカロリー・栄養成分（PFC）を完全網羅"
        imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop"
        breadcrumb="カロリー一覧"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="calorie-database">
        {/* Authority & date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <AffiliateDisclosure />

        <p className="text-gray-700 leading-relaxed mb-4">
          日本の主要外食チェーン<Marker>{totalChains}社</Marker>、合計<Marker color="blue">{totalMenus}メニュー</Marker>の
          カロリー・栄養成分（PFC）を一覧にまとめました。
          ダイエット中の外食メニュー選びや、日々の栄養管理にお役立てください。
        </p>

        {/* QuickAnswer */}
        <QuickAnswer
          question="外食で一番低カロリーなメニューは？このDBの使い方は？"
          answer={
            <>
              <strong>主要チェーン{totalChains}社・{totalMenus}メニューを公式栄養データに基づき集約</strong>。各チェーン別にカロリー昇順で表示されているので、「サイゼリヤ 350kcal以下」のような探し方に最適です。1食500kcal以下を意識すれば、外食でもダイエットは十分に可能。お気に入り機能を使えば、よく食べるメニューを記録・管理できます。
            </>
          }
        />

        <p className="mb-6 text-sm text-gray-500">
          このデータベース全体を集計・分析した
          <Link href="/guide/eating-out-nutrition-report" className="text-sky-600 underline">
            外食6,097品の統計レポート
          </Link>
          では、外食の平均カロリーや「ダイエット向きメニューの割合」など全体傾向がわかります。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section: このページの使い方 */}
        <SectionHeading id="how-to-use">このページの使い方</SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-4">
          各チェーンごとにカロリーの低い順でメニューを掲載しています。
          メニュー名をタップすると詳細ページで更に詳しい栄養情報を確認できます。
        </p>

        <TipBox title="表の見方">
          <ul className="space-y-1">
            <li>・ <strong>P</strong> = タンパク質（g） ... 筋肉の材料となる栄養素</li>
            <li>・ <strong>F</strong> = 脂質（g） ... 1gあたり9kcalの高エネルギー栄養素</li>
            <li>・ <strong>C</strong> = 炭水化物（g） ... エネルギーの主な供給源</li>
            <li>・ カロリーの低い順に表示しています</li>
            <li>・ 各メニュー名をタップすると詳細ページへ移動します</li>
          </ul>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop"
          alt="ハンバーガーや定食など様々な外食チェーンの料理が並ぶ様子"
        />

        {/* Chain Categories */}
        {CHAIN_CATEGORIES.map((cat) => (
          <div key={cat.slug}>
            <SectionHeading id={cat.slug}>{cat.category}</SectionHeading>

            {cat.chains.map((chainName) => {
              const chainItems = byChain.get(chainName) ?? [];
              const displayItems = chainItems.slice(0, 10);
              const guideSlug = CHAIN_SLUG_MAP[chainName];

              if (displayItems.length === 0) return null;

              return (
                <div key={chainName} className="mb-10">
                  <div className="flex items-center justify-between mb-1">
                    <SubSectionHeading>
                      {chainName}
                      <span className="text-sm text-gray-400 font-normal ml-2">
                        （全{chainItems.length}品）
                      </span>
                    </SubSectionHeading>
                    {guideSlug && (
                      <Link
                        href={`/guide/${guideSlug}`}
                        className="text-xs text-sky-500 hover:text-sky-600 transition-colors flex-shrink-0"
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
                          className="text-sky-500 hover:text-sky-600"
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
          </div>
        ))}

        <ArticleImage
          src="https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&h=400&fit=crop"
          alt="寿司や天ぷらなどバラエティ豊かな和食メニュー"
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="全メニューの栄養データを検索"
          subtitle="たべなびなら、カロリー・PFCでフィルターして最適なメニューが見つかります"
        />

        {/* コンビニセクション */}
        <SectionHeading id="conveni">コンビニ</SectionHeading>

        {(() => {
          const conveniChains = ["セブンイレブン", "ローソン", "ファミリーマート"];
          return conveniChains.map((chainName) => {
            const chainItems = byChain.get(chainName) ?? [];
            const displayItems = chainItems.slice(0, 10);

            if (displayItems.length === 0) return null;

            return (
              <div key={chainName} className="mb-10">
                <div className="flex items-center justify-between mb-1">
                  <SubSectionHeading>
                    {chainName}
                    <span className="text-sm text-gray-400 font-normal ml-2">
                      （全{chainItems.length}品）
                    </span>
                  </SubSectionHeading>
                  <Link
                    href="/guide/conveni"
                    className="text-xs text-sky-500 hover:text-sky-600 transition-colors flex-shrink-0"
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
                      className="text-sky-500 hover:text-sky-600"
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

        <ArticleImage
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=400&fit=crop"
          alt="コンビニの棚に並ぶサラダチキンやおにぎりなどの食品"
        />

        <AffiliateProductGrid
          title="栄養管理を加速するアイテム"
          productIds={["tanita-scale", "myprotein-impact", "shaker-bottle", "ultora-whey"]}
        />

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          外食チェーンのカロリー・栄養データを活用して、賢くメニューを選びましょう。
          以下のポイントを意識するだけで、外食でも栄養管理がグッと楽になります。
        </p>

        <ArticleSummary
          points={[
            "カロリーだけでなくPFC（タンパク質・脂質・炭水化物）のバランスも確認",
            "同じチェーンでもメニューによってカロリーは2〜3倍違う",
            "ダイエット中は1食500〜700kcalを目安に選ぶ",
            "高タンパク・低脂質のメニューを優先すると満足感が高い",
            "メニュー名をタップすれば詳細な栄養情報が確認できる",
            "たべなびのフィルター機能で目的に合ったメニューを簡単検索",
          ]}
        />

        {/* FAQ */}
        <FAQSection
          slug="calorie-database"
          items={[
            {
              q: "このカロリー情報の出典は？",
              a: "全データは各外食チェーンの公式サイトに掲載されている栄養成分情報をたべなび編集部が取得・検証して掲載しています。データの精度を最優先し、公式が更新された場合は随時反映しています。詳細は「データ出典・編集方針について」ページをご確認ください。",
            },
            {
              q: "メニューが見つからない時はどうすればいい？",
              a: "ページ右上の検索機能で商品名を入力するか、各チェーン名を絞り込みフィルタで選んでください。それでも見つからない場合は、新商品や限定メニューの可能性があります。「情報の誤り・新メニュー報告」フォームから連絡をいただければ追加検討します。",
            },
            {
              q: "ダイエット中に1食何kcalが目安？",
              a: "1日の総摂取カロリーの3分の1〜4分の1が目安です。成人女性（1,800kcal目安）なら1食450〜600kcal、成人男性（2,200kcal目安）なら1食550〜700kcal。運動量が多い日は外食でもしっかり食べてOKです。",
            },
            {
              q: "PFCバランスはどう確認すればいい？",
              a: "メニュー名をタップすると詳細ページに移動し、タンパク質（P）/脂質（F）/炭水化物（C）の量が確認できます。理想的なPFC比率は P15-25%, F20-30%, C45-65% が目安。高タンパク低脂質を意識すると満足感が高くなります。",
            },
            {
              q: "アプリと連携できますか？",
              a: "はい。たべなびに登録すれば、各メニューの記録・お気に入り保存・PFC合計計算が可能。iPhone/Androidアプリも公開中で、外食記録が3タップで完了します。",
            },
            {
              q: "栄養成分情報が古い場合はどうすればいい？",
              a: "公式サイトの最新情報を優先してご確認ください。たべなびでも定期的にアップデートしていますが、リニューアルや改定直後はタイムラグがある場合があります。誤りを発見された際は「情報の誤りを報告」ボタンから教えていただけると助かります。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-08", note: "32チェーン・6,000品以上に対応拡大。栄養数値を公式データで再検証" },
            { date: "2026-05-12", note: "11チェーン2,500メニューに大規模拡張。QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="calorie-database" />

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
