import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionCard,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  ComparisonTable,
  CheckList,
  NumberedList,
  ArticleFooter,
  ArticleImage,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家、ダイエットに最適なのは？ | たべなび",
  description:
    "吉野家・松屋・すき家の牛丼カロリー・タンパク質・脂質・炭水化物を徹底比較。ダイエット中に選ぶべき牛丼チェーンとおすすめメニューを紹介。",
  keywords: [
    "牛丼 カロリー 比較",
    "吉野家 松屋 すき家 比較",
    "牛丼 ダイエット",
    "牛丼 栄養",
    "牛丼 タンパク質",
  ],
  openGraph: {
    title:
      "牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家、ダイエットに最適なのは？",
    description:
      "吉野家・松屋・すき家の牛丼カロリー・タンパク質・脂質・炭水化物を徹底比較。ダイエット中に選ぶべき牛丼チェーンとおすすめメニューを紹介。",
    url: "https://www.tabenavi.jp/guide/gyudon-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家、ダイエットに最適なのは？",
  description:
    "吉野家・松屋・すき家の牛丼カロリー・タンパク質・脂質・炭水化物を徹底比較。ダイエット中に選ぶべき牛丼チェーンとおすすめメニューを紹介。",
  datePublished: "2026-03-18",
  dateModified: "2026-03-19",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/gyudon-comparison",
};

const tocItems = [
  { id: "basic-comparison", label: "3社 基本データ比較表（並盛）" },
  { id: "size-comparison", label: "サイズ別カロリー比較" },
  { id: "best-chain", label: "ダイエット中に選ぶべきチェーンは？" },
  { id: "diet-menus", label: "各チェーンのダイエット向けメニュー" },
  { id: "techniques", label: "牛丼を食べる時の5つのダイエットテクニック" },
  { id: "summary", label: "まとめ" },
];

export default function GyudonComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="牛丼チェーン3社カロリー・栄養比較"
        subtitle="吉野家・松屋・すき家、ダイエットに最適なのは？"
        imageUrl="https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=400&fit=crop"
        breadcrumb="牛丼チェーン比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="gyudon-comparison">
        {/* Authority Badge & Date */}
        <div className="mb-4">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月19日 | 読了目安: 7分
          </p>
          <AffiliateDisclosure />
        </div>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけど牛丼が食べたい...」そんな方のために、吉野家・松屋・すき家の牛丼カロリー・栄養成分を徹底比較しました。
        </p>
        <p className="mb-10">
          各チェーンの並盛からサイズ別データ、ダイエット向けメニューまで詳しく解説します。結論から言うと、<Marker>カロリー・タンパク質で最もバランスが良いのは吉野家</Marker>、<Marker color="green">糖質制限ならすき家の牛丼ライト一択</Marker>です。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=400&fit=crop" alt="美味しそうな牛丼の盛り付け" />

        {/* Section 1: 基本データ比較表 */}
        <section className="mb-12">
          <SectionHeading id="basic-comparison">
            牛丼チェーン3社 基本データ比較表（並盛）
          </SectionHeading>
          <p className="mb-4">
            まずは3社の牛丼・牛めし（並盛）の基本データを比較してみましょう。
          </p>

          <ComparisonTable
            headers={["チェーン", "価格", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["吉野家", "¥498", "635 kcal", "20.0g", "23.0g", "89.0g"],
              ["松屋", "¥400", "709 kcal", "17.8g", "25.2g", "100.5g"],
              ["すき家", "¥400", "638 kcal", "17.0g", "20.5g", "95.0g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="3社比較のポイント">
            <p>
              吉野家は<Marker color="blue">タンパク質20.0gで3社中トップ</Marker>、かつカロリーも635kcalで最も低い。松屋は709kcalと約70kcal高めですが、<Marker color="green">味噌汁が無料</Marker>でつくのでコスパは最強。すき家は<Marker>脂質20.5gで最も低い</Marker>のが特徴です。
            </p>
          </TipBox>

          <p className="text-xs text-gray-400 mt-2">
            ※価格は税込。栄養成分は公式サイト掲載値を基にしています。
          </p>
        </section>

        {/* Section 2: サイズ別カロリー比較 */}
        <section className="mb-12">
          <SectionHeading id="size-comparison">
            サイズ別カロリー比較（小盛〜特盛）
          </SectionHeading>
          <p className="mb-4">
            牛丼はサイズによってカロリーが大きく変わります。<Marker>ダイエット中はサイズ選びが最も重要なポイント</Marker>です。
          </p>

          <ComparisonTable
            headers={["サイズ", "吉野家", "松屋", "すき家"]}
            rows={[
              ["ミニ / 小盛", "488 kcal", "527 kcal", "496 kcal"],
              ["並盛", "635 kcal", "709 kcal", "638 kcal"],
              ["大盛", "863 kcal", "945 kcal", "863 kcal"],
              ["特盛", "1,013 kcal", "1,135 kcal", "1,027 kcal"],
            ]}
          />

          <WarningBox title="サイズアップの落とし穴">
            <p>
              並盛と大盛では<Marker>約200〜250kcalの差</Marker>があります。特盛になると1,000kcal超え。「ちょっと多めに」が積み重なると大きな差になります。ダイエット中は小盛やミニを選ぶだけで、150kcal近く抑えることができます。
            </p>
          </WarningBox>
        </section>

        {/* Section 3: ダイエット中に選ぶべきチェーン */}
        <section className="mb-12">
          <SectionHeading id="best-chain">
            ダイエット中に選ぶべき牛丼チェーンは？
          </SectionHeading>
          <p className="mb-6">
            3社のデータを比較すると、目的によっておすすめのチェーンが異なります。
          </p>

          <SubSectionHeading>タンパク質重視なら → 吉野家</SubSectionHeading>
          <div className="bg-sky-50/60 rounded-lg border border-sky-200 p-5 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              並盛で<Marker color="blue">タンパク質20gは3社中トップ</Marker>。筋トレ中の方は吉野家がベストチョイスです。PFCバランスも3社中最も優れています。
            </p>
          </div>

          <SubSectionHeading>カロリー重視なら → 吉野家 / すき家</SubSectionHeading>
          <div className="bg-sky-50/60 rounded-lg border border-sky-200 p-5 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              吉野家635kcal、すき家638kcalとほぼ同等。松屋は709kcalと約70kcal高めです。<Marker color="green">脂質が最も低いのはすき家（20.5g）</Marker>です。
            </p>
          </div>

          <SubSectionHeading>コスパ重視なら → 松屋 / すき家</SubSectionHeading>
          <div className="bg-sky-50/60 rounded-lg border border-sky-200 p-5 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              松屋・すき家は¥400で吉野家より約¥100安い。<Marker>松屋は味噌汁が無料</Marker>でつくので、お得感はNo.1です。
            </p>
          </div>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="牛丼チェーンの栄養をサクッと検索"
          subtitle="たべなびなら主要チェーンの栄養成分をすぐに確認できます"
        />

        <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="バランスの良い和定食セット" />

        {/* Section 4: 各チェーンのダイエット向けメニュー */}
        <section className="mb-12">
          <SectionHeading id="diet-menus">
            各チェーンのダイエット向けメニュー
          </SectionHeading>

          <SubSectionHeading>吉野家のおすすめ</SubSectionHeading>
          <div className="grid gap-4 mb-6">
            <NutritionCard
              name="ライザップ牛サラダ"
              chain="吉野家"
              calories={414}
              protein={30.0}
              fat={23.0}
              carbs={18.0}
              recommended
            />
            <NutritionCard
              name="牛丼（小盛）"
              chain="吉野家"
              calories={488}
              protein={15.0}
              fat={17.0}
              carbs={68.0}
            />
          </div>
          <TipBox title="吉野家の攻略ポイント">
            <p>
              <Marker>ライザップ牛サラダ（414kcal / P30g）</Marker>は高タンパク・低糖質の代表メニュー。ご飯の代わりにサラダなので糖質制限中でも安心です。
            </p>
          </TipBox>

          <SubSectionHeading>松屋のおすすめ</SubSectionHeading>
          <div className="grid gap-4 mb-6">
            <NutritionCard
              name="牛めし（ミニ）"
              chain="松屋"
              calories={527}
              protein={13.0}
              fat={18.0}
              carbs={75.0}
              recommended
            />
            <NutritionCard
              name="ネギたっぷり旨辛ネギたま牛めし"
              chain="松屋"
              calories={782}
              protein={24.0}
              fat={30.0}
              carbs={102.0}
            />
          </div>
          <TipBox title="松屋の攻略ポイント">
            <p>
              <Marker color="green">味噌汁付きでこの価格はコスパ最強</Marker>。ミニサイズ＋味噌汁でしっかり満腹感を得つつカロリーを抑えられます。
            </p>
          </TipBox>

          <SubSectionHeading>すき家のおすすめ</SubSectionHeading>
          <div className="grid gap-4 mb-6">
            <NutritionCard
              name="牛丼ライト"
              chain="すき家"
              calories={352}
              protein={20.0}
              fat={18.0}
              carbs={26.0}
              recommended
            />
            <NutritionCard
              name="牛丼（ミニ）"
              chain="すき家"
              calories={496}
              protein={13.0}
              fat={15.5}
              carbs={73.0}
            />
          </div>
          <TipBox title="すき家の攻略ポイント">
            <p>
              <Marker color="blue">牛丼ライト（352kcal / P20g）</Marker>はご飯の代わりに豆腐を使った糖質制限メニュー。3社の全メニューの中で最もダイエット向きです。
            </p>
          </TipBox>
        </section>

        {/* Section 5: 5つのダイエットテクニック */}
        <section className="mb-12">
          <SectionHeading id="techniques">
            牛丼を食べる時の5つのダイエットテクニック
          </SectionHeading>

          <NumberedList
            items={[
              {
                title: "サイズは小盛・ミニを選ぶ",
                body: "並盛と小盛では約150kcalの差。まずサイズダウンが最も効果的です。",
              },
              {
                title: "サラダや味噌汁をセットにする",
                body: "サイドメニューで満腹感を高め、メインのサイズダウンを無理なく実現できます。",
              },
              {
                title: "つゆだくは避ける",
                body: "つゆには糖分と塩分が多く含まれています。つゆ抜き・つゆ少なめで注文すると◎",
              },
              {
                title: "卵を追加してタンパク質UP",
                body: "卵1個は約80kcalですが、タンパク質6gが追加されます。腹持ちも良くなるのでおすすめ。",
              },
              {
                title: "前後の食事で調整する",
                body: "牛丼は炭水化物と脂質が多めなので、前後の食事で野菜とタンパク質を意識して摂りましょう。",
              },
            ]}
          />

          <WarningBox title="注意：トッピングの落とし穴">
            <p>
              チーズ（+約80kcal）やマヨネーズ系トッピングは脂質が大幅に増えます。ダイエット中のトッピングは卵やネギなどシンプルなものを選びましょう。
            </p>
          </WarningBox>
        </section>

        <ArticleImage src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop" alt="新鮮な野菜を使ったヘルシーな食事" />

        <AffiliateProductGrid
          title="牛丼の前後にあると安心の高タンパクアイテム"
          productIds={["myprotein-impact", "inbar-protein", "tuna-can", "konjac-rice"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-12">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            ダイエット中でも牛丼を楽しむことは十分可能です。大切なのは、チェーン選びとサイズ選び、そして前後の食事でのバランス調整です。
          </p>

          <CheckList
            items={[
              "カロリーが最も低いのは吉野家（635kcal）",
              "タンパク質が最も多いのは吉野家（20g）",
              "脂質が最も低いのはすき家（20.5g）",
              "コスパ最強は松屋（¥400＋味噌汁無料）",
              "糖質制限ならすき家の牛丼ライト（352kcal）一択",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※ 掲載されている価格・栄養成分は公式サイト等の情報を基にしており、店舗や時期によって異なる場合があります。最新情報は各チェーンの公式サイトをご確認ください。
          </p>
        </section>

        {/* Article Footer */}
        <ArticleFooter currentSlug="gyudon-comparison" />

        {/* Back link */}
        <div className="text-center py-8">
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
