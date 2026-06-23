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
  CompareBar,
  CheckList,
  NumberedList,
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
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/gyudon-comparison" },
  title:
    "【2026年最新版】牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家、ダイエットに最適なのは？ | たべなび",
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
  dateModified: new Date().toISOString().split("T")[0],
  author: {
      "@type": "Person",
      name: "ヒロ",
      description: "外食で13kg減量した、たべなび開発者",
      url: "https://www.tabenavi.jp/sources",
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
            最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })} | 読了目安: 7分
          </p>
          <AffiliateDisclosure />
        </div>

        {/* QuickAnswer */}
        <QuickAnswer
          question="吉野家・松屋・すき家、牛丼並盛のカロリーは？ダイエットに一番向いているのは？"
          answer={
            <>
              <strong>吉野家 633kcal / 松屋 687kcal / すき家 695kcal</strong>（並盛・たべなび収録の公式栄養データに基づく）。最低カロリーは吉野家、タンパク質が最も多いのはすき家（P21.7g）です。ダイエット中に選ぶべきは、<strong>糖質を抑えたいなら「すき家の牛丼ライト 並盛」（397kcal・P22.8g・糖質16.8g）</strong>、カロリーを抑えたいなら<strong>吉野家の牛丼（小盛）474kcal</strong>が有力候補。3社とも並盛のカロリー差はわずかなので、サイズとメニュー選びの方が効きやすいです。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中だけど牛丼が食べたい...」そんな方のために、吉野家・松屋・すき家の牛丼カロリー・栄養成分を徹底比較しました。
        </p>
        <p className="mb-10">
          各チェーンの並盛からサイズ別データ、ダイエット向けメニューまで詳しく解説します。結論から言うと、<Marker>並盛のカロリーが最も低いのは吉野家（633kcal）</Marker>、<Marker color="green">糖質を抑えたいならすき家の牛丼ライト 並盛（397kcal）</Marker>が有力な選択肢です。
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
            headers={["チェーン", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["吉野家", "633 kcal", "19.6g", "23.6g", "88.2g"],
              ["松屋", "687 kcal", "17.1g", "28.9g", "85.5g"],
              ["すき家", "695 kcal", "21.7g", "23.4g", "99.8g"],
            ]}
            bestRowIndex={0}
          />

          <CompareBar
            title="牛丼・牛めし（並盛）カロリー比較"
            items={[
              { name: "吉野家 牛丼（並）", value: 633 },
              { name: "松屋 牛めし（並）", value: 687 },
              { name: "すき家 牛丼（並）", value: 695 },
            ]}
            metric="calorie"
            unit="kcal"
            sort="asc"
            highlightTop={1}
            caption="数値はたべなび収録の公式栄養データに基づく並盛の値です。"
          />

          <CompareBar
            title="牛丼・牛めし（並盛）タンパク質比較"
            items={[
              { name: "すき家 牛丼（並）", value: 21.7 },
              { name: "吉野家 牛丼（並）", value: 19.6 },
              { name: "松屋 牛めし（並）", value: 17.1 },
            ]}
            metric="protein"
            unit="g"
            sort="desc"
            highlightTop={1}
          />

          <TipBox title="3社比較のポイント">
            <p>
              吉野家は<Marker color="blue">カロリー633kcalで3社中最も低い</Marker>のが強み。すき家は<Marker>タンパク質21.7gで最も多く、炭水化物（99.8g）も最も多い</Marker>のが特徴。脂質が最も多いのは松屋（28.9g）です。3社の並盛は62kcal差におさまり、大きな違いはありません。
            </p>
          </TipBox>

          <p className="text-xs text-gray-400 mt-2">
            ※栄養成分はたべなび収録の公式栄養データに基づく並盛の値です。店舗・時期により変わる場合があります。
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
              ["小盛 / ミニ", "474 kcal", "507 kcal", "464 kcal"],
              ["並盛", "633 kcal", "687 kcal", "695 kcal"],
              ["大盛", "823 kcal", "933 kcal", "908 kcal"],
              ["特盛", "1,006 kcal", "1,237 kcal", "1,100 kcal"],
            ]}
          />

          <CompareBar
            title="吉野家 牛丼 サイズ別カロリー"
            items={[
              { name: "ミニ牛丼", value: 352 },
              { name: "牛丼（小盛）", value: 474 },
              { name: "牛丼（並）", value: 633 },
              { name: "牛丼（大盛）", value: 823 },
              { name: "牛丼 特盛", value: 1006 },
            ]}
            metric="calorie"
            unit="kcal"
            sort="asc"
            highlightTop={2}
            caption="サイズが上がるほどカロリーは段階的に増えます（吉野家の例）。"
          />

          <WarningBox title="サイズアップの落とし穴">
            <p>
              並盛と大盛では<Marker>約190〜250kcalの差</Marker>（吉野家+190・松屋+246・すき家+213）があります。特盛になると吉野家1,006kcal・松屋1,237kcal・すき家1,100kcalと、いずれも1,000kcalを超えます。ダイエット中は小盛やミニを選ぶだけで、吉野家なら約160kcal（633→474）抑えることができます。
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

          <SubSectionHeading>タンパク質重視なら → すき家</SubSectionHeading>
          <div className="bg-sky-50/60 rounded-lg border border-sky-200 p-5 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              並盛で<Marker color="blue">タンパク質21.7gは3社中トップ</Marker>。筋トレ中の方はすき家がベストチョイスです。吉野家（19.6g）も僅差で高タンパクです。
            </p>
          </div>

          <SubSectionHeading>カロリー重視なら → 吉野家</SubSectionHeading>
          <div className="bg-sky-50/60 rounded-lg border border-sky-200 p-5 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              並盛のカロリーは吉野家633kcalが最も低く、松屋687kcal、すき家695kcalと続きます。<Marker color="green">脂質が最も低いのもすき家（23.4g）</Marker>で、吉野家（23.6g）とはほぼ差がありません。
            </p>
          </div>

          <SubSectionHeading>糖質を抑えたいなら → すき家の牛丼ライト</SubSectionHeading>
          <div className="bg-sky-50/60 rounded-lg border border-sky-200 p-5 mb-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              すき家の<Marker>牛丼ライト 並盛は397kcal・糖質（炭水化物）16.8g</Marker>と、通常の牛丼（並695kcal・炭水化物99.8g）に比べて糖質を大きく抑えられます。タンパク質も22.8gと高く、糖質制限中の選択肢として優秀です。
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
              name="牛丼（小盛）"
              chain="吉野家"
              calories={474}
              protein={15.4}
              fat={19.6}
              carbs={60.9}
              recommended
            />
            <NutritionCard
              name="牛皿 並盛"
              chain="吉野家"
              calories={281}
              protein={13.5}
              fat={22.9}
              carbs={5.2}
            />
          </div>
          <TipBox title="吉野家の攻略ポイント">
            <p>
              ご飯を減らすなら<Marker>牛丼（小盛）474kcal</Marker>。糖質を徹底的に抑えたいなら、ご飯なしの<Marker color="green">牛皿 並盛（281kcal・炭水化物5.2g）</Marker>を選び、別添えのサラダやみそ汁を合わせる食べ方もおすすめです。
            </p>
          </TipBox>

          <SubSectionHeading>松屋のおすすめ</SubSectionHeading>
          <div className="grid gap-4 mb-6">
            <NutritionCard
              name="牛めし（小盛）"
              chain="松屋"
              calories={507}
              protein={13.1}
              fat={22.8}
              carbs={59.6}
              recommended
            />
            <NutritionCard
              name="ネギたっぷり旨辛ネギたま牛めし"
              chain="松屋"
              calories={818}
              protein={24.7}
              fat={36.2}
              carbs={94.1}
            />
          </div>
          <TipBox title="松屋の攻略ポイント">
            <p>
              ダイエット中は<Marker color="green">牛めし（小盛）507kcal</Marker>が基本。みそ汁やサラダを合わせると満腹感を得つつカロリーを抑えやすくなります。ネギたま牛めしのような味変メニューは818kcalと高めなので、食べるなら小盛サイズを選ぶと安心です。
            </p>
          </TipBox>

          <SubSectionHeading>すき家のおすすめ</SubSectionHeading>
          <div className="grid gap-4 mb-6">
            <NutritionCard
              name="牛丼ライト 並盛"
              chain="すき家"
              calories={397}
              protein={22.8}
              fat={26.8}
              carbs={16.8}
              recommended
            />
            <NutritionCard
              name="牛丼 ミニ"
              chain="すき家"
              calories={464}
              protein={14.8}
              fat={16.0}
              carbs={65.7}
            />
          </div>
          <TipBox title="すき家の攻略ポイント">
            <p>
              <Marker color="blue">牛丼ライト 並盛（397kcal / P22.8g / 炭水化物16.8g）</Marker>はご飯の代わりに豆腐とサラダを使った低糖質メニュー。3社の牛丼系メニューの中でも糖質を抑えやすい選択肢です。さらに軽くしたい場合は牛丼ライト ミニ（309kcal）もあります。
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
                body: "吉野家の玉子は1個76kcalでタンパク質6.2gが追加されます。腹持ちも良くなるのでおすすめ。",
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

          <ArticleSummary
            points={[
              "並盛でカロリーが最も低いのは吉野家（633kcal）。3社差は62kcal",
              "タンパク質が最も多いのはすき家（21.7g）",
              "脂質が最も低いのはすき家（23.4g）。吉野家（23.6g）とはほぼ同じ",
              "糖質を抑えたいならすき家の牛丼ライト 並盛（397kcal・炭水化物16.8g）",
              "ご飯を外すなら吉野家の牛皿 並盛（281kcal・炭水化物5.2g）も候補",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※ 掲載されている価格・栄養成分は公式サイト等の情報を基にしており、店舗や時期によって異なる場合があります。最新情報は各チェーンの公式サイト（<a href="https://www.yoshinoya.com/menu/info/allergy.html" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">吉野家</a> / <a href="https://www.matsuyafoods.co.jp/matsuya/menu/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">松屋</a> / <a href="https://www.sukiya.jp/menu/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">すき家</a>）をご確認ください。
          </p>
          <p className="text-xs text-gray-500 mt-3">
            牛丼を含む外食32チェーン・6,097品を横断集計した
            <Link href="/guide/eating-out-nutrition-report" className="text-sky-600 underline">外食栄養データ統計レポート</Link>
            では、外食全体のなかで牛丼がどの位置づけかも分析しています。
          </p>
        </section>

        {/* FAQ */}
        <FAQSection
          slug="gyudon-comparison"
          items={[
            {
              q: "吉野家・松屋・すき家、牛丼並盛のカロリーは？",
              a: "たべなび収録の公式栄養データでは、吉野家 633kcal / 松屋 687kcal / すき家 695kcal です。1番カロリーが低いのは吉野家の牛丼並盛で、3社の差は62kcalにおさまります。タンパク質は吉野家19.6g・松屋17.1g・すき家21.7g、脂質は吉野家23.6g・松屋28.9g・すき家23.4gです。",
            },
            {
              q: "ダイエット中、3社で一番おすすめなのはどこ？",
              a: "目的によって変わります。①カロリー重視なら吉野家（並633kcal）、②タンパク質重視ならすき家（並P21.7g）、③糖質を抑えたいならすき家の牛丼ライト 並盛（397kcal・炭水化物16.8g）。ご飯を完全に外したいなら吉野家の牛皿 並盛（281kcal・炭水化物5.2g）も選択肢になります。",
            },
            {
              q: "牛丼ライト（すき家）は糖質をどれくらい抑えられる？",
              a: "牛丼ライト 並盛はご飯の代わりに豆腐とサラダを使い、397kcal・炭水化物16.8g。通常の牛丼（並695kcal・炭水化物99.8g）と比べてカロリーで約300kcal、炭水化物で約80g少なくなります。糖質を抑えたい食事の選択肢として有効です。",
            },
            {
              q: "並盛・大盛・特盛、ダイエット中はどのサイズを選ぶべき？",
              a: "ダイエット中は「並盛」または「小盛」が基本です。吉野家の場合、並633kcal→大盛823kcal（+190kcal）→特盛1,006kcalと段階的に増えます。吉野家の小盛（474kcal）や、ミニのあるすき家（牛丼ミニ464kcal）が、3社の中でもカロリーを抑えやすいサイズです。",
            },
            {
              q: "牛丼にトッピング、何が太りにくい？",
              a: "吉野家の例では、玉子（76kcal・P6.2g）、紅生姜（26kcal）、お新香（17kcal）はカロリーが控えめです。一方でチーズ系（たっぷりチーズ159kcal など）は脂質が大きく増えます。タンパク質を足したいときは玉子が手軽です。",
            },
            {
              q: "3社の朝食、どこが軽め？",
              a: "すき家のまぜのっけ朝食 ミニ（393kcal）やたまかけ朝食 ミニ（411kcal）、松屋の【朝】たまごかけ朝定食（451kcal）などが400kcal前後で軽めです。みそ汁やサラダを合わせつつ、ご飯のサイズを抑えると朝食のカロリーを管理しやすくなります。",
            },
            {
              q: "牛丼を食べた後、夕食で何を食べるべき？",
              a: "牛丼は炭水化物が多めなので、夕食は「タンパク質+野菜中心」がおすすめです。サラダチキン+味噌汁、刺身+ほうれん草、豆腐+納豆 などで300〜400kcalに抑えれば、1日の総カロリーを管理しやすくなります。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "全栄養数値をたべなび収録の公式栄養データと再照合。未収録だった「ライザップ牛サラダ」を実在メニュー（牛皿 並盛）へ差し替え、QuickAnswer・FAQ・まとめ・比較表を実値に修正。並盛カロリー・タンパク質の横棒比較（CompareBar）を追加" },
            { date: "2026-05-12", note: "3社の最新栄養データに更新、QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-18", note: "初稿公開" },
          ]}
        />

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
