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
  Marker,
  CTABanner,
  CheckList,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "外食チェーン店カロリー一覧【全メニュー完全版】 | たべなび",
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
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
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
        <p className="text-sm text-gray-400 mt-3 mb-6">
          最終更新: 2026年3月19日
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          日本の主要外食チェーン<Marker>{totalChains}社</Marker>、合計<Marker color="blue">{totalMenus}メニュー</Marker>の
          カロリー・栄養成分（PFC）を一覧にまとめました。
          ダイエット中の外食メニュー選びや、日々の栄養管理にお役立てください。
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

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="text-gray-700 leading-relaxed mb-6">
          外食チェーンのカロリー・栄養データを活用して、賢くメニューを選びましょう。
          以下のポイントを意識するだけで、外食でも栄養管理がグッと楽になります。
        </p>

        <CheckList
          items={[
            "カロリーだけでなくPFC（タンパク質・脂質・炭水化物）のバランスも確認",
            "同じチェーンでもメニューによってカロリーは2〜3倍違う",
            "ダイエット中は1食500〜700kcalを目安に選ぶ",
            "高タンパク・低脂質のメニューを優先すると満足感が高い",
            "メニュー名をタップすれば詳細な栄養情報が確認できる",
            "たべなびのフィルター機能で目的に合ったメニューを簡単検索",
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
