import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionTable,
  TipBox,
  WarningBox,
  Marker,
  CTABanner,
  RankingCard,
  CheckList,
  NumberedList,
  ComparisonTable,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
  ArticleImage,
  MenuPhoto,
} from "@/components/guide/ArticleComponents";
import { AffiliateDisclosure, ServiceOffers } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title: "CoCo壱番屋のダイエット・カロリー攻略｜太りにくいカレーの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/ichibanya-diet" },
  description:
    "CoCo壱番屋（ココイチ）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。ライス量の調整や高タンパクトッピングでカロリーと糖質を抑える方法、避けたい高カロリーメニューを紹介します。",
  keywords: [
    "CoCo壱番屋 カロリー",
    "CoCo壱番屋 ダイエット",
    "CoCo壱番屋 タンパク質",
    "ココイチ カロリー",
    "ココイチ ダイエット",
    "ココイチ 糖質",
  ],
  openGraph: {
    title: "CoCo壱番屋のダイエット・カロリー攻略｜太りにくいカレーの選び方",
    description:
      "CoCo壱番屋（ココイチ）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。ライス量の調整やトッピング選びでカロリーを抑える方法、高タンパクなトッピングを紹介します。",
    url: "https://www.tabenavi.jp/guide/ichibanya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CoCo壱番屋のダイエット・カロリー攻略｜太りにくいカレーの選び方",
  description:
    "CoCo壱番屋（ココイチ）でダイエット中でも楽しむコツを、カロリー・タンパク質・PFCの実データで解説。ライス量の調整やトッピング選びでカロリーを抑える方法、高タンパクなトッピングを紹介します。",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/ichibanya-diet",
};

const tocItems = [
  { id: "key-points", label: "ココイチのカロリーの考え方" },
  { id: "rice-control", label: "ライス量でカロリーを抑える" },
  { id: "high-protein", label: "高タンパクトッピングランキング" },
  { id: "low-calorie", label: "低カロリーで選ぶおすすめ" },
  { id: "avoid", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方・組み合わせ" },
  { id: "summary", label: "まとめ" },
];

export default function IchibanyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="CoCo壱番屋でダイエット"
        subtitle="太りにくいカレーの選び方とカロリー・PFC攻略【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&h=400&fit=crop"
        breadcrumb="CoCo壱番屋ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="ichibanya-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月24日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          CoCo壱番屋（ココイチ）のカレーは、カロリーの大半が<Marker>ライス（ご飯）の糖質</Marker>から来ています。たとえば基準となるポークカレーは701kcal・タンパク質11.0g・脂質18.3g・炭水化物126.9gで、<Marker color="blue">炭水化物だけで約127g</Marker>。カレールウそのものより、標準300gのライスがカロリー・糖質を押し上げる主因です。
        </p>
        <p className="mb-4">
          つまりココイチでダイエットの鍵は、(1) <Marker>ライスの量を減らす</Marker>、(2) <Marker color="green">揚物トッピングを避け、にこみ系・魚介系の高タンパクトッピングを選ぶ</Marker>の2点。これだけでカロリーと糖質を大きくコントロールできます。
        </p>
        <p className="mb-8">
          この記事では、ココイチ全185品のたべなびDB実値をもとに、ライス量の調整法、高タンパク・低カロリーのトッピング、避けたい高カロリーメニュー、太りにくい食べ方を順に解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="ichibanya-curry" genre="curry" />

        {/* Section 1: key points */}
        <section className="mb-16">
          <QuickAnswer
            question={"CoCo壱番屋でダイエット中におすすめのカレーは？"}
            answer={
              <>
                ココイチのカロリーは<strong>ライス（ご飯）の糖質</strong>が主因です。まず<strong>ライスを標準300gから200g前後に減らす</strong>と、ライス100gぶん（約156kcal・糖質約37g）をまるごとカットできます。トッピングは揚物（チキンカツ＝414kcal・脂質25.4g等）を避け、<strong>チキンにこみ（68kcal/P13.4g）やエビにこみ（44kcal/P10.4g）など、低脂質で高タンパクなにこみ系</strong>を選ぶのが正解。土台はポークカレー（701kcal/P11.0g）よりタンパク質の多いチキンにこみカレー（769kcal/P24.4g）がおすすめです。
              </>
            }
          />

          <SectionHeading id="key-points">ココイチのカロリーは「ライスの糖質」が主因</SectionHeading>

          <p className="mb-4">
            ココイチのカレーは品名が違っても、<Marker>炭水化物（C）の値がどれも120〜140g前後</Marker>に集中しています。これは標準のライス300gが共通の土台になっているためです。代表的なカレーを並べると一目瞭然です。
          </p>

          <NutritionTable
            items={[
              { name: "甘口ポークカレー", calories: 681, protein: 10.8, fat: 17.0, carbs: 124.7, highlight: true },
              { name: "ポークカレー（基準）", calories: 701, protein: 11.0, fat: 18.3, carbs: 126.9, highlight: true },
              { name: "きのこカレー", calories: 711, protein: 12.5, fat: 18.4, carbs: 129.8 },
              { name: "ほうれん草カレー", calories: 712, protein: 12.5, fat: 18.5, carbs: 128.6 },
              { name: "チキンにこみカレー", calories: 769, protein: 24.4, fat: 19.7, carbs: 128.7, highlight: true },
              { name: "やさいカレー", calories: 783, protein: 12.8, fat: 20.1, carbs: 142.4 },
              { name: "ビーフカレー", calories: 823, protein: 17.3, fat: 29.6, carbs: 125.8 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <TipBox title="ココイチダイエットの大原則">
            <p>カレーの炭水化物の多くは<Marker>ライス由来</Marker>です。ライス小（100g）は156kcal・炭水化物37.1g、ライス150gは234kcal・炭水化物55.7g。つまり<Marker color="blue">ライスを減らすほど、カロリーと糖質を確実に削れます</Marker>。次の章で具体的な減らし方を見ていきましょう。</p>
          </TipBox>
        </section>

        {/* Section 2: rice control */}
        <section className="mb-16">
          <SectionHeading id="rice-control">ライス量でカロリーを抑える</SectionHeading>

          <p className="mb-4">
            ココイチでは券売機・注文時にライスの量を選べます。標準は300gですが、<Marker>200g・150g・100gと減らすほどカロリーと糖質をカット</Marker>できます。ライスの実測値（ライス小100g＝156kcal・C37.1g）をもとに、標準300gから減らした場合の差し引きを整理しました。
          </p>

          <ComparisonTable
            headers={["ライス量", "標準300gからの差", "カロリー差", "糖質差"]}
            rows={[
              ["300g（標準）", "±0g", "±0 kcal", "±0g"],
              ["200g", "−100g", "約 −156 kcal", "約 −37g"],
              ["150g", "−150g", "約 −234 kcal", "約 −56g"],
              ["100g", "−200g", "約 −312 kcal", "約 −74g"],
            ]}
            bestRowIndex={3}
          />

          <p className="mb-4">
            たとえば<Marker color="blue">ポークカレー（701kcal）のライスを300g→200gにすると、約545kcalまで下げられる計算</Marker>です（公式300g値からライス100gぶんを差し引いた概算）。ライスを減らした分の満足感は、低カロリーなトッピングで補うのがコツです。
          </p>

          <p className="mb-4">
            なお、ライスを大盛にすると逆効果。<Marker>ライスを増やすほど糖質とカロリーが上乗せ</Marker>されるため、ダイエット中は標準以下にとどめるのが安全です。
          </p>

          <TipBox title="ライス減量の数値について">
            <p>本記事のライス減量後のカロリー・糖質は、<Marker>公式の300g値から、たべなびDBのライス実測値（小100g＝156kcal・糖質37.1g）を差し引いた概算</Marker>です。実際の提供量や調理により多少前後する場合があります。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&h=400&fit=crop"
            alt="カレーライスのイメージ"
          />
        </section>

        {/* Section 3: high protein */}
        <section className="mb-16">
          <SectionHeading id="high-protein">高タンパクトッピングランキング</SectionHeading>

          <p className="mb-4">
            ダイエット中は<Marker>低脂質・高タンパクなトッピング</Marker>を選ぶと、満足感を保ちつつPFCバランスを整えられます。ココイチのトッピング単品をタンパク質効率で並べると、にこみ系・魚介系が優秀です。
          </p>

          <RankingCard
            rank={1}
            title="チキンにこみ"
            subtitle="単品トッピング"
            calories={68}
            protein={13.4}
            fat={1.4}
            carbs={1.8}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">わずか68kcalでタンパク質13.4g、脂質はたった1.4g</Marker>という、ココイチ屈指の高タンパク・低脂質トッピング。カレーに加えてもカロリーをほとんど押し上げず、確実にタンパク質を底上げできます。土台にすると、チキンにこみカレー（769kcal/P24.4g）になります。
            </p>
          </RankingCard>

          <RankingCard
            rank={2}
            title="海の幸"
            subtitle="単品トッピング"
            calories={125}
            protein={17.8}
            fat={4.4}
            carbs={5.3}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">タンパク質17.8gとトッピング中トップクラス</Marker>。125kcal・脂質4.4gと魚介らしく低脂質です。海の幸カレーは826kcal/P28.8gと、ボリュームのわりに高タンパクな一杯になります。
            </p>
          </RankingCard>

          <RankingCard
            rank={3}
            title="エビにこみ"
            subtitle="単品トッピング"
            calories={44}
            protein={10.4}
            fat={0.4}
            carbs={0.2}
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">44kcalで脂質わずか0.4g、タンパク質10.4g</Marker>。カロリーあたりのタンパク質効率が非常に高く、ダイエット中の追加トッピングに最適。エビあさり（56kcal/P11.3g）も同系統でおすすめです。
            </p>
          </RankingCard>

          <p className="mb-4">
            主要なトッピングをタンパク質・脂質の観点で比較しました。<Marker>同じタンパク源でも、揚物系は脂質が一気に高くなる</Marker>点に注目してください。
          </p>

          <NutritionTable
            items={[
              { name: "エビにこみ", calories: 44, protein: 10.4, fat: 0.4, carbs: 0.2, highlight: true },
              { name: "エビあさり", calories: 56, protein: 11.3, fat: 0.9, carbs: 1.7, highlight: true },
              { name: "チキンにこみ", calories: 68, protein: 13.4, fat: 1.4, carbs: 1.8, highlight: true },
              { name: "海の幸", calories: 125, protein: 17.8, fat: 4.4, carbs: 5.3, highlight: true },
              { name: "イカ", calories: 138, protein: 13.1, fat: 6.9, carbs: 7.3 },
              { name: "牛すじ煮込み", calories: 145, protein: 14.0, fat: 7.0, carbs: 10.0 },
              { name: "フライドチキン(3個)", calories: 195, protein: 10.6, fat: 13.9, carbs: 11.0 },
              { name: "チキンカツ", calories: 414, protein: 21.3, fat: 25.4, carbs: 24.7 },
              { name: "手仕込とんかつ", calories: 571, protein: 23.2, fat: 45.1, carbs: 19.5 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※トッピング単品の数値です。栄養成分は公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>

          <TipBox title="高タンパクに仕上げるコツ">
            <p>タンパク質を増やしたいなら<Marker>チキンにこみ・エビにこみ・海の幸</Marker>を選ぶのが鉄則。チキンカツ（脂質25.4g）や手仕込とんかつ（脂質45.1g）はタンパク質も摂れますが脂質が桁違いに高く、カロリーが跳ね上がります。<Marker color="blue">「にこみ系・魚介系」を合言葉に</Marker>しましょう。</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="ココイチのカロリー・PFCをサクッと検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        {/* Section 4: low calorie */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーで選ぶおすすめメニュー</SectionHeading>

          <p className="mb-4">
            カロリーをとにかく抑えたいなら、<Marker>土台を軽いカレーにし、ライスを減らす</Marker>のが基本戦略。カレー単品（標準300g）のカロリーが低い順に並べました。
          </p>

          <NutritionTable
            items={[
              { name: "甘口ポークカレー", calories: 681, protein: 10.8, fat: 17.0, carbs: 124.7, highlight: true },
              { name: "ポークカレー", calories: 701, protein: 11.0, fat: 18.3, carbs: 126.9, highlight: true },
              { name: "きのこカレー", calories: 711, protein: 12.5, fat: 18.4, carbs: 129.8 },
              { name: "ほうれん草カレー", calories: 712, protein: 12.5, fat: 18.5, carbs: 128.6 },
              { name: "エビにこみカレー", calories: 745, protein: 21.4, fat: 18.7, carbs: 127.1, highlight: true },
              { name: "エビあさりカレー", calories: 757, protein: 22.3, fat: 19.2, carbs: 128.6 },
              { name: "チキンにこみカレー", calories: 769, protein: 24.4, fat: 19.7, carbs: 128.7, highlight: true },
            ]}
          />

          <p className="mb-4">
            最も軽いのは甘口ポークカレー（681kcal）とポークカレー（701kcal）。ただしタンパク質は11g前後と控えめです。<Marker color="blue">カロリーを抑えつつタンパク質も欲しいなら、エビにこみカレー（745kcal/P21.4g）やチキンにこみカレー（769kcal/P24.4g）</Marker>が好バランス。いずれも脂質は18〜20g台に収まっています。
          </p>

          <p className="mb-4">
            さらに、これらの土台にライス200g（標準300gから約−156kcal）を組み合わせれば、<Marker>ポークカレーなら約545kcal、チキンにこみカレーなら約613kcal</Marker>まで下げられる計算です（ライス実測値からの概算）。
          </p>

          <SubSectionHeading>低カロリーで満足感を足すサイド</SubSectionHeading>

          <p className="mb-4">
            ライスを減らした分の物足りなさは、<Marker>低カロリーなサイドや野菜トッピング</Marker>で補えます。揚物・芋系のサイドは脂質が高いので避けましょう。
          </p>

          <NutritionTable
            items={[
              { name: "ヤサイサラダ", calories: 15, protein: 0.9, fat: 0.2, carbs: 3.3, highlight: true },
              { name: "ハーフほうれん草", calories: 6, protein: 0.7, fat: 0.1, carbs: 0.9, highlight: true },
              { name: "ほうれん草", calories: 11, protein: 1.5, fat: 0.2, carbs: 1.7, highlight: true },
              { name: "きのこ", calories: 10, protein: 1.5, fat: 0.1, carbs: 2.9 },
              { name: "コーンサラダ", calories: 40, protein: 1.7, fat: 0.7, carbs: 8.6 },
              { name: "フライドポテト", calories: 279, protein: 3.5, fat: 15.6, carbs: 34.1 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分は公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。
          </p>
        </section>

        {/* Section 5: avoid */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けたい高カロリーメニュー</SectionHeading>

          <p className="mb-4">
            ココイチには<Marker>1,000kcalを大きく超えるメニュー</Marker>も少なくありません。揚物トッピングやライス大盛が重なると、1食で一気にカロリーオーバーになります。
          </p>

          <WarningBox title="ダイエット中は避けたい高カロリーメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">手仕込とんかつカレー（1272kcal）</span> ─ 脂質63.4g・炭水化物146.4g。揚物トッピングの中でも飛び抜けて高カロリー。</li>
              <li><span className="font-bold">ロースカツカレー（1116kcal）／チキンカツカレー（1115kcal）</span> ─ どちらも脂質40g超。タンパク質は摂れますが、脂質とライスでカロリーが膨らみます。</li>
              <li><span className="font-bold">メンチカツカレー（1047kcal）</span> ─ 炭水化物152.8gと糖質も突出。</li>
              <li><span className="font-bold">豚しゃぶカレー（1052kcal）</span> ─ 一見ヘルシーですが脂質51.5gと高め。豚しゃぶトッピング自体が脂質33.2gあります。</li>
              <li><span className="font-bold">フライドチキン(5個)カレー（1026kcal）</span> ─ 揚げ鶏5個でカロリー・脂質ともに高くなります。</li>
            </ul>
          </WarningBox>

          <WarningBox title="サイド・追加の注意点">
            <ul className="space-y-2">
              <li><span className="font-bold">フライドポテト（279kcal）・フライドポテト大盛（559kcal）</span> ─ 揚げ芋は脂質と糖質の塊。野菜サラダ系に置き換えを。</li>
              <li><span className="font-bold">チーズ（195kcal/脂質15.8g）の追加</span> ─ タンパク質12.9gは魅力ですが脂質も高め。カロリーを抑えたい日は控えめに。</li>
              <li><span className="font-bold">ライス大盛＋揚物トッピング</span> ─ 糖質と脂質が同時に増え、1,000kcal超えの近道。ダイエット中は最も避けたい組み合わせです。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 6: tips */}
        <section className="mb-16">
          <SectionHeading id="tips">太りにくい食べ方・組み合わせ</SectionHeading>

          <p className="mb-6">
            ココイチの<Marker>ライス調整とトッピング選び</Marker>を活かした、太りにくい食べ方を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "まずライスを200g前後に減らす",
                body: "標準300gから200gに減らすだけで、約156kcal・糖質約37gをカット。これがココイチダイエットで最も効果が大きい一手です。",
              },
              {
                title: "土台はにこみ系・魚介系を選ぶ",
                body: "チキンにこみカレー（769kcal/P24.4g）やエビにこみカレー（745kcal/P21.4g）は、脂質を抑えつつタンパク質をしっかり摂れます。揚物カレーは脂質が一気に高くなるので頻度を抑えて。",
              },
              {
                title: "野菜トッピングでかさ増し",
                body: "ほうれん草（11kcal）やヤサイサラダ（15kcal）を加えると、低カロリーで満足感と食物繊維を補えます。ライスを減らした物足りなさをカバーできます。",
              },
              {
                title: "辛さやソース増しはカロリーに注意",
                body: "とび辛スパイスはほぼゼロカロリーですが、ソース増し（甘口ポーク85kcal、ビーフ90kcal等）はカロリーが上乗せされます。味変は卓上スパイスを活用するのが賢い選択です。",
              },
              {
                title: "揚物トッピングは「ハーフ」も検討",
                body: "どうしても揚物が食べたい日は、フルではなくハーフサイズのトッピングを選ぶとカロリーと脂質を抑えられます。",
              },
            ]}
          />

          <ArticleImage
            src="https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&h=400&fit=crop"
            alt="カレーと野菜の組み合わせイメージ"
          />

          <SubSectionHeading>目的別おすすめの組み合わせ</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針（カロリー制限・糖質オフ寄り・高タンパク）によって、ココイチで選ぶべき組み合わせは変わります。<Marker>目的別の最適解</Marker>を整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめの組み合わせ", "おおよそのカロリー", "ねらい"]}
            rows={[
              ["カロリー重視", "ポークカレー＋ライス200g", "約 545 kcal", "ライス減量で総カロリーを圧縮"],
              ["糖質オフ寄り", "チキンにこみカレー＋ライス150g", "約 535 kcal", "ライスを大きく減らし高タンパク"],
              ["高タンパク", "チキンにこみカレー（ライス300g）", "769 kcal", "P24.4gをしっかり確保"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            糖質を抑えたいなら<Marker color="blue">チキンにこみカレーのライスを150gにする</Marker>のがおすすめ。標準300gから約234kcal・糖質約56gを削りつつ、タンパク質24.4gはそのまま確保できます（ライス実測値からの概算）。
          </p>

          <SubSectionHeading>ココイチダイエットの要点</SubSectionHeading>

          <CheckList
            items={[
              "カロリー・糖質の主因はライス。まず300g→200g前後に減らす",
              "トッピングは揚物を避け、チキンにこみ・エビにこみ・海の幸など低脂質高タンパクを選ぶ",
              "ライスを減らした分はほうれん草・ヤサイサラダなど低カロリー野菜で満足感を補う",
              "ソース増し・チーズ・揚物大盛はカロリーが跳ね上がるため頻度を抑える",
            ]}
          />

          <p className="mb-4">
            カレーは糖質が多いジャンルですが、ライス量とトッピングを工夫すれば、ダイエット中でも<Marker>カロリー管理がしやすくなります</Marker>。他の外食でカレーを選ぶ際の考え方は、
            <Link href="/guide/curry-diet" className="text-sky-600 hover:underline font-medium">カレーのダイエットガイド</Link>
            や
            <Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline font-medium">外食で低糖質に抑えるコツ</Link>
            も参考にしてください。
          </p>
        </section>

        <ServiceOffers tag="diet" />

        {/* Summary */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <ArticleSummary
            points={[
              "ココイチのカロリー・糖質の主因はライス。ポークカレーは701kcalで炭水化物126.9gと糖質が中心",
              "ライスを標準300gから200gに減らすと約156kcal・糖質約37gをカット（ライス実測値からの概算）",
              "高タンパク低脂質ならチキンにこみ（68kcal/P13.4g）・海の幸（125kcal/P17.8g）・エビにこみ（44kcal/P10.4g）",
              "土台はチキンにこみカレー（769kcal/P24.4g）やエビにこみカレー（745kcal/P21.4g）が好バランス",
              "手仕込とんかつカレー（1272kcal）など揚物カレーやライス大盛は避けたい高カロリーメニュー",
            ]}
          />
          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式サイトの情報をもとに記載。メニュー改定・店舗により異なる場合があります。価格は変動する場合があります。ライス減量後の数値はライス実測値からの概算です。
          </p>
        </section>

        <FAQSection
          slug="ichibanya-diet"
          items={[
            {
              q: "CoCo壱番屋でカロリーが最も低いカレーは何ですか？",
              a: "カレー単品（ライス標準300g）では甘口ポークカレーが681kcal、ポークカレーが701kcalで最も低めです。さらにライスを200gに減らすと、ポークカレーは約545kcalまで下げられます（ライス実測値からの概算）。ただしタンパク質は11g前後と控えめなので、トッピングで補うのがおすすめです。",
            },
            {
              q: "ココイチで糖質を抑えるにはどうすればいいですか？",
              a: "カレーの炭水化物の多くはライス由来です。ライス小（100g）は糖質37.1g、150gは55.7g。標準300gから150gに減らすと約56gの糖質をカットできます。ライス量を減らすことが、ココイチで糖質を抑える最も効果的な方法です。",
            },
            {
              q: "ココイチでタンパク質を多く摂れるメニューは？",
              a: "土台ではチキンにこみカレー（769kcal/P24.4g）、海の幸カレー（826kcal/P28.8g）、エビあさりカレー（757kcal/P22.3g）が高タンパクです。トッピング単品なら海の幸（125kcal/P17.8g）、チキンにこみ（68kcal/P13.4g）、エビにこみ（44kcal/P10.4g）が低脂質で効率的です。",
            },
            {
              q: "ダイエット中に避けるべきココイチのメニューは？",
              a: "手仕込とんかつカレー（1272kcal・脂質63.4g）、ロースカツカレー（1116kcal）、チキンカツカレー（1115kcal）、メンチカツカレー（1047kcal）など揚物カレーは高カロリー・高脂質です。フライドポテト（279kcal）やライス大盛との組み合わせも避けましょう。",
            },
            {
              q: "ライスを減らすとどのくらいカロリーが変わりますか？",
              a: "ライス小（100g）は156kcal・糖質37.1g。標準300gから200gに減らすと約156kcal・糖質約37g、150gにすると約234kcal・糖質約56gを削れます（公式300g値からライス実測値を差し引いた概算）。ダイエット中で最も効果が大きい一手です。",
            },
            {
              q: "揚物トッピングは絶対にダメですか？",
              a: "禁止ではありませんが、チキンカツ（414kcal・脂質25.4g）や手仕込とんかつ（571kcal・脂質45.1g）は脂質が非常に高くカロリーが跳ね上がります。食べたい日はハーフサイズを選ぶ、ライスを減らすなどで調整すると、カロリー管理がしやすくなります。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを数字で選ぶ"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Internal links to chain hub & related guides */}
        <section className="my-10 rounded-2xl border border-sky-100 bg-sky-50/40 p-6">
          <h3 className="text-sm font-bold text-gray-900 mb-3">CoCo壱番屋のメニューをもっと詳しく</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chains/ichibanya" className="text-sky-600 hover:underline font-medium">CoCo壱番屋の全メニュー栄養データ</Link>
              <span className="text-gray-500"> ─ 185品をカロリー・PFCで横断検索</span>
            </li>
            <li>
              <Link href="/chains/ichibanya/high-protein" className="text-sky-600 hover:underline font-medium">高タンパクで選ぶCoCo壱番屋</Link>
            </li>
            <li>
              <Link href="/chains/ichibanya/diet" className="text-sky-600 hover:underline font-medium">ダイエット向けCoCo壱番屋メニュー</Link>
            </li>
            <li>
              <Link href="/chains/ichibanya/low-calorie" className="text-sky-600 hover:underline font-medium">低カロリーで選ぶCoCo壱番屋</Link>
            </li>
          </ul>
          <h3 className="text-sm font-bold text-gray-900 mt-5 mb-3">関連するダイエットガイド</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guide/curry-diet" className="text-sky-600 hover:underline font-medium">カレーのダイエットガイド</Link></li>
            <li><Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline font-medium">外食で低糖質に抑えるコツ</Link></li>
            <li><Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline font-medium">外食ダイエットの基本</Link></li>
            <li><Link href="/guide/calorie-database" className="text-sky-600 hover:underline font-medium">外食カロリーデータベース</Link></li>
          </ul>
        </section>

        <AuthorBio />
        <UpdateHistory entries={[{ date: "2026-06-24", note: "初稿公開" }]} />
        <ArticleFooter currentSlug="ichibanya-diet" />

        {/* Back link */}
        <div className="text-center pt-8 pb-4">
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
