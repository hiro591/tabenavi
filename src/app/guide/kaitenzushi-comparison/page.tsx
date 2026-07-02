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
  RankingCard,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  MenuPhoto,
  SourceNote,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "回転寿司のカロリー比較｜くら寿司・スシローで太りにくいネタの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/kaitenzushi-comparison" },
  description:
    "くら寿司・スシローを公式カロリー実データで徹底比較。同名ネタ13種の直接対決（サーモン93 vs 91kcal等）、低カロリーネタTOP10、皿数の目安、マヨ系・丼・麺の注意点まで。太りにくい回転寿司の選び方がわかります。",
  keywords: [
    "回転寿司 カロリー 比較",
    "くら寿司 スシロー カロリー",
    "回転寿司 ダイエット",
    "寿司 カロリー 低い ネタ",
    "くら寿司 スシロー どっち",
  ],
  openGraph: {
    title: "回転寿司のカロリー比較｜くら寿司・スシローで太りにくいネタの選び方",
    description:
      "くら寿司・スシローを公式カロリー実データで徹底比較。同名ネタ13種の直接対決、低カロリーネタTOP10、皿数の目安まで。",
    url: "https://www.tabenavi.jp/guide/kaitenzushi-comparison",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "回転寿司のカロリー比較｜くら寿司・スシローで太りにくいネタの選び方",
  description:
    "くら寿司・スシローの寿司ネタ・サイドメニューをカロリーの実データで比較。低カロリーなネタの選び方、皿数の目安、回転寿司でダイエット中でも楽しむコツを紹介します。",
  datePublished: "2026-07-02",
  dateModified: "2026-07-02",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/kaitenzushi-comparison",
};

const tocItems = [
  { id: "premise", label: "比較の前提（両社ともPFC非公開）" },
  { id: "neta-battle", label: "定番ネタ13種の直接対決" },
  { id: "low-calorie", label: "低カロリーネタTOP10（両社横断）" },
  { id: "high-calorie", label: "高カロリー注意メニュー" },
  { id: "side-menu", label: "サイドメニュー・デザート比較" },
  { id: "plate-guide", label: "皿数の目安とカロリー計算" },
  { id: "tips", label: "太りにくい食べ方 5つのコツ" },
  { id: "summary", label: "まとめ" },
];

export default function KaitenzushiComparisonPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="くら寿司×スシロー カロリー徹底比較"
        subtitle="回転寿司2大チェーンの太りにくいネタ・サイドの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&h=400&fit=crop"
        breadcrumb="回転寿司カロリー比較"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="kaitenzushi-comparison">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年7月2日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer (AI Overview / Featured Snippet 対策) */}
        <QuickAnswer
          question="くら寿司とスシロー、カロリーが低いのはどっち？ダイエット中は何を選べばいい？"
          answer={
            <>
              同名の定番にぎりで比べると<strong>スシローがわずかに低め（サーモン91 vs 93kcal、はまち99 vs 118kcalなど1〜19kcal差）</strong>、逆に鉄火巻・いなり・たまごなど巻物・軍艦系は<strong>くら寿司が低め（鉄火巻136 vs 169kcal）</strong>で、総合ではほぼ互角です。1皿あたり最も低カロリーなのは<strong>スシロー「店内殻むき 活あわび」35kcal</strong>、くら寿司なら<strong>「熟成ふぐ（一貫）」39kcal</strong>。本当に注意すべきはネタよりサイドで、くら寿司「特上うな丼（シャリ）」815kcal、スシロー「どんぶりポテト」559kcalなど、<strong>1品であっさり系にぎり6皿分以上</strong>になります。なお、両社ともPFC（タンパク質・脂質・炭水化物）を公開していないため、比較はカロリー中心です。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中の回転寿司、くら寿司とスシローどっちがいい？」——結論から言うと、勝敗を分けるのはチェーン選びよりネタ選びです。実は、<Marker>同じ「サーモン」でも両社の差は1皿2kcal程度なのに、ネタの選び方次第では1皿あたり35〜200kcal超と5倍以上の開き</Marker>があります。
        </p>
        <p className="mb-4">
          この記事では、くら寿司・スシローの<Marker color="blue">公式カロリーデータ（たべなびDB収載の実値）</Marker>をもとに、同名ネタ13種の直接対決、両社横断の低カロリーネタTOP10、要注意のマヨ系・サイドメニューまで横断比較します。
        </p>
        <p className="mb-8">
          なお、<strong>くら寿司・スシローはともにPFC（タンパク質・脂質・炭水化物）を公式に公開していないため、本記事はカロリーを中心に比較します。</strong>「まぐろ赤身は一般に高タンパク・低脂質」といった食材一般の傾向には触れますが、両社の個別メニューにタンパク質や脂質のグラム数を当てはめることはしていません。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <MenuPhoto id="kaitenzushi-comparison-sushi" genre="sushi" />

        {/* Section 1: 比較の前提 */}
        <section className="mb-16">
          <SectionHeading id="premise">比較の前提（両社ともPFC非公開・1皿単位で比較）</SectionHeading>

          <p className="mb-4">
            回転寿司チェーンの栄養情報で公開されているのは<Marker>カロリー（kcal）が中心</Marker>です。くら寿司・スシローともタンパク質・脂質・炭水化物（PFC）の数値は公表されていないため、本記事では1皿あたりのカロリーを基準に比較します。
          </p>
          <p className="mb-4">
            比較にあたっての前提は次の3つです。
          </p>

          <NumberedList
            items={[
              {
                title: "数値はすべて「1皿あたり」",
                body: "にぎりは基本1皿2貫ですが、くら寿司の（一貫）表記メニューは1貫での提供です。提供形態（貫数）はメニュー・店舗により異なる場合があります。",
              },
              {
                title: "標準メニュー（並・単品）で比較",
                body: "大盛・特盛・セット・トッピング追加は別物として扱い、表には標準サイズの単品のみを載せています。",
              },
              {
                title: "栄養の傾向は「一般論」として補足",
                body: "まぐろ赤身・白身・いか・たこ・貝類は一般にあっさり系（高タンパク・低脂質の傾向）、とろ・サーモン・はまちは脂がのっている傾向がありますが、両社の個別メニューのグラム数は非公開のため、数値での断定はしていません。",
              },
            ]}
          />

          <p className="mt-6 mb-4 text-sm text-gray-600">
            各チェーンの全メニューのカロリーは、<Link href="/chains/kurasushi" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">くら寿司の全メニュー一覧</Link>・<Link href="/chains/sushiro" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">スシローの全メニュー一覧</Link>からいつでも確認できます。
          </p>
        </section>

        {/* Section 2: 定番ネタ直接対決 */}
        <section className="mb-16">
          <SectionHeading id="neta-battle">定番ネタ13種の直接対決（くら寿司 vs スシロー）</SectionHeading>

          <p className="mb-4">
            まずは条件をそろえて、両社に共通する<Marker>定番ネタ13種を1皿あたりのカロリー</Marker>で直接比較します。
          </p>

          <ComparisonTable
            headers={["ネタ", "くら寿司", "スシロー", "低いのは"]}
            rows={[
              ["まぐろ赤身", "82 kcal", "81 kcal", "スシロー（−1）"],
              ["サーモン", "93 kcal", "91 kcal", "スシロー（−2）"],
              ["えび", "74 kcal", "72 kcal", "スシロー（−2）"],
              ["甘えび", "77 kcal", "70 kcal", "スシロー（−7）"],
              ["いか", "73 kcal", "70 kcal", "スシロー（−3）"],
              ["あじ", "85 kcal", "83 kcal", "スシロー（−2）"],
              ["はまち", "118 kcal", "99 kcal", "スシロー（−19）"],
              ["えんがわ", "94 kcal", "89 kcal", "スシロー（−5）"],
              ["たまご", "114 kcal", "122 kcal", "くら寿司（−8）"],
              ["いくら", "93 kcal", "97 kcal", "くら寿司（−4）"],
              ["鉄火巻", "136 kcal", "169 kcal", "くら寿司（−33）"],
              ["きゅうり巻", "120 kcal", "139 kcal", "くら寿司（−19）"],
              ["いなり", "117 kcal", "169 kcal", "くら寿司（−52）"],
            ]}
          />

          <p className="text-xs text-gray-400 mb-2">
            ※品名は各社表記に対応（くら寿司「熟成まぐろ」＝スシロー「厳選まぐろ赤身」、くら寿司「たまご焼き」＝スシロー「たまご」、くら寿司「はまち」＝スシロー「活〆はまち」、くら寿司「あじ」＝スシロー「天然真あじ」、くら寿司「いくら」＝スシロー「いくら軍艦」）。いずれも1皿あたり。シャリの量・貫数の違いにより単純な優劣を示すものではありません。
          </p>
          <SourceNote asOf="2026年7月" />

          <p className="mb-4">
            結果は<Marker>にぎり8種はスシロー、巻物・軍艦・たまご系5種はくら寿司</Marker>という明確な棲み分けに。にぎりの差は多くが1〜7kcalと僅差ですが、はまちは19kcal差、巻物系では鉄火巻33kcal差・いなり52kcal差と無視できない開きがあります。
          </p>

          <TipBox title="直接対決のポイント">
            <p>にぎり中心に食べるなら<Marker color="blue">スシローがわずかに有利</Marker>、鉄火巻・いなりなど巻物やたまごを挟みたいなら<Marker>くら寿司が有利</Marker>。ただし合計すると数十kcal程度の差に収まることが多く、「どちらの店か」より「どのネタを何皿食べるか」の影響が圧倒的に大きいのが実際のところです。</p>
          </TipBox>
        </section>

        {/* Section 3: 低カロリーネタランキング */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">低カロリーネタTOP10（両社横断ランキング）</SectionHeading>

          <p className="mb-6">
            次に、両社のレギュラー寿司メニューを横断して<Marker>1皿あたりのカロリーが低い順</Marker>にランキングしました（期間限定・フェア商品を除く）。
          </p>

          <RankingCard rank={1} title="店内殻むき 活あわび（スシロー）" subtitle="にぎり・1皿" calories={35}>
            <p className="text-sm text-gray-700 leading-relaxed">
              両社横断の最少カロリー。<Marker>1皿35kcal</Marker>は、あっさり系にぎり（70〜90kcal台）のさらに半分以下です。貝類は一般に脂質が少ない食材とされ、噛みごたえがあり食べるペースも自然にゆっくりになります。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="熟成ふぐ（一貫）（くら寿司）" subtitle="定番寿司・1貫提供" calories={39}>
            <p className="text-sm text-gray-700 leading-relaxed">
              くら寿司の定番にぎりで最少の<Marker>39kcal</Marker>。ふぐをはじめとした白身魚は一般に淡泊で脂質が少ない傾向があります。1貫提供なので「もう一皿」の調整役としても便利です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="濃厚生うに包み（スシロー）" subtitle="軍艦・巻物・1皿" calories={41}>
            <p className="text-sm text-gray-700 leading-relaxed">
              「うに＝高カロリー」のイメージを覆す<Marker color="blue">1皿41kcal</Marker>。同率で「本ずわい蟹包み」も41kcalです。包み系はシャリが少なめのぶん、数値が小さく収まります。
            </p>
          </RankingCard>

          <SubSectionHeading>低カロリーネタTOP10（1皿あたり）</SubSectionHeading>

          <ComparisonTable
            headers={["順位", "メニュー", "チェーン", "カロリー"]}
            rows={[
              ["1", "店内殻むき 活あわび", "スシロー", "35 kcal"],
              ["2", "熟成ふぐ（一貫）", "くら寿司", "39 kcal"],
              ["3", "濃厚生うに包み", "スシロー", "41 kcal"],
              ["3", "本ずわい蟹包み", "スシロー", "41 kcal"],
              ["5", "大えび", "スシロー", "43 kcal"],
              ["6", "赤えび", "スシロー", "45 kcal"],
              ["7", "赤えび（一貫）", "くら寿司", "46 kcal"],
              ["8", "海鮮うに手巻き（一貫）", "くら寿司", "47 kcal"],
              ["9", "店内仕込み 天然大えび", "スシロー", "48 kcal"],
              ["10", "生サーモン（一貫）", "くら寿司", "49 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="text-xs text-gray-400 mb-4">
            ※（一貫）表記・包み系は提供量が少ないぶん数値も小さくなります。2貫提供の通常皿と同列の比較ではない点に注意してください。
          </p>

          <p className="mb-4">
            TOP10の顔ぶれは<Marker color="green">えび・貝・白身・うに包み系</Marker>が中心。このほか通常の2貫皿でも、スシローは水たこ（66kcal）・いか（70kcal）・えび（72kcal）・厳選まぐろ赤身（81kcal）、くら寿司はいか（73kcal）・えび（74kcal）・真たこ（76kcal）・熟成まぐろ（82kcal）と、<Marker>あっさり系は1皿100kcal以下</Marker>がそろいます。寿司全般のネタ選びの考え方は<Link href="/guide/sushi-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">寿司ダイエット完全ガイド</Link>でも詳しく解説しています。
          </p>

          <TipBox title="意外な伏兵は「大とろ」">
            <p>スシローの「厳選 天然本鮪大とろ」は1皿69kcal、「特ネタ大とろ」は79kcalと、数値上はサーモン（91kcal）より低め。脂がのったネタでも提供量によっては数値が小さいことがあり、<Marker color="blue">「イメージではなく1皿の実数で選ぶ」</Marker>ことの大切さがわかる例です。</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="くら寿司・スシローの全メニューをカロリーで横断検索"
          subtitle="たべなびなら32チェーン・6,000品以上をカロリー・PFC・価格で比較できます"
        />

        <ArticleImage src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop" alt="皿に盛られた握り寿司の写真" />

        {/* Section 4: 高カロリー注意メニュー */}
        <section className="mb-16">
          <SectionHeading id="high-calorie">高カロリー注意メニュー（マヨ系・揚げ物・丼）</SectionHeading>

          <p className="mb-4">
            回転寿司でカロリーが跳ね上がる典型は<Marker>「マヨ・チーズ・天ぷらをまとったネタ」と「サイドの丼・麺・ポテト」</Marker>です。まずは寿司皿の要注意組から。
          </p>

          <ComparisonTable
            headers={["メニュー", "チェーン", "カロリー"]}
            rows={[
              ["いか天にぎり", "くら寿司", "201 kcal"],
              ["あぶりえびマヨグラタン風", "くら寿司", "186 kcal"],
              ["えびマヨ", "くら寿司", "182 kcal"],
              ["上えび天にぎり", "スシロー", "178 kcal"],
              ["濃厚チェダーチーズ天にぎり", "くら寿司", "167 kcal"],
              ["ミートボールマヨ軍艦", "スシロー", "158 kcal"],
              ["グリルチキンチーズマヨ炙り", "スシロー", "154 kcal"],
              ["サーモン チーズマヨ炙り", "スシロー", "139 kcal"],
            ]}
          />

          <p className="mb-4">
            くら寿司の「えびマヨ」182kcalは、素のえび（74kcal）の<Marker>約2.5倍</Marker>。スシローの「サーモン チーズマヨ炙り」139kcalも素のサーモン（91kcal）の約1.5倍です。マヨ・チーズ・衣は一般に脂質由来のカロリーが乗りやすいトッピングなので、<Marker color="blue">同じネタなら「素のにぎり」を選ぶだけで1皿50〜100kcal前後の差</Marker>がつきます。
          </p>

          <WarningBox title="1品でにぎり数皿分。サイドの丼・麺・ポテト">
            <ul className="space-y-2">
              <li><span className="font-bold">特上うな丼（シャリ）（くら寿司・815kcal）</span> ─ あっさり系にぎり約9皿分。通常のうな丼（シャリ）も625kcalあります。</li>
              <li><span className="font-bold">藤原系 禁断のにんにくMAXまぜそば（くら寿司・778kcal）</span> ─ 麺サイドの最高クラス。海鮮かき揚げうどんも757kcal。</li>
              <li><span className="font-bold">えび天と季節の天丼（シャリ）（くら寿司・730kcal）</span> ─ 天ぷら×丼の組み合わせは一気に700kcal台へ。</li>
              <li><span className="font-bold">どんぶりポテト（スシロー・559kcal）</span> ─ 通常のフライドポテト（186kcal）の3倍。シェア前提のサイズです。</li>
              <li><span className="font-bold">すしやのシャリカレーうどん（くら寿司・502kcal）</span> ─ うどん系でも具・とろみ次第で500kcal超え。</li>
              <li><span className="font-bold">コク旨まぐろ醤油ラーメン 煮玉子付（スシロー・399kcal）</span> ─ トッピング付きラーメンは400kcal近くに。</li>
            </ul>
          </WarningBox>

          <p className="mb-4">
            「寿司を数皿＋シメに丼・麺」という流れは、気づかないうちに<Marker>1食1,200kcal超</Marker>になりがちです。シャリ（酢飯）の糖質も皿数分積み上がるため、糖質側から外食を整理したい人は<Link href="/guide/low-carb-eating-out" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">外食の低糖質ガイド</Link>もあわせてどうぞ。
          </p>
        </section>

        {/* Section 5: サイドメニュー・デザート比較 */}
        <section className="mb-16">
          <SectionHeading id="side-menu">サイドメニュー・デザート比較（汁物・麺・スイーツ）</SectionHeading>

          <p className="mb-4">
            サイドは「敵」ばかりではありません。<Marker>汁物・茶碗蒸しは1品100kcal以下</Marker>で満足感を底上げしてくれる強い味方です。
          </p>

          <SubSectionHeading>汁物・茶碗蒸し（低カロリーの味方）</SubSectionHeading>

          <ComparisonTable
            headers={["メニュー", "チェーン", "カロリー"]}
            rows={[
              ["純味噌汁", "くら寿司", "32 kcal"],
              ["あさり入り味噌汁", "くら寿司", "42 kcal"],
              ["あおさと海苔の味噌汁", "スシロー", "48 kcal"],
              ["あさりの味噌汁", "スシロー", "57 kcal"],
              ["特製茶碗蒸し", "くら寿司", "67 kcal"],
              ["筍の茶碗蒸し", "スシロー", "79 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6">
            くら寿司には8kcal台からの「健康ミニカップ」シリーズ（海藻サラダ8kcal・優しいトマト10kcal・沖縄もずく41kcalなど）もあり、<Marker color="green">小鉢で皿数を抑える戦略</Marker>が取りやすいのが特徴。スシローなら、まぐろのサラダ寿司（70kcal）・サーモンのサラダ寿司（75kcal）が野菜と一緒に食べられる選択肢です。
          </p>

          <SubSectionHeading>麺類（シメの一杯はどっちが軽い？）</SubSectionHeading>

          <ComparisonTable
            headers={["メニュー", "チェーン", "カロリー"]}
            rows={[
              ["かけうどん", "スシロー", "194 kcal"],
              ["天然だしうどん", "くら寿司", "227 kcal"],
              ["スシロー 貝塩ラーメン", "スシロー", "247 kcal"],
              ["スシロー 鯛白湯ラーメン", "スシロー", "249 kcal"],
              ["えび天うどん", "スシロー", "257 kcal"],
              ["7種の魚介濃厚味噌らーめん（味玉無し）", "くら寿司", "258 kcal"],
              ["えび天うどん", "くら寿司", "274 kcal"],
              ["きつねうどん", "くら寿司", "292 kcal"],
              ["きつねうどん", "スシロー", "315 kcal"],
              ["胡麻香る担々麺", "くら寿司", "423 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6">
            シメの一杯なら<Marker>スシローの「かけうどん」194kcal</Marker>が最軽量。ラーメンでも「貝塩ラーメン」247kcal・くら寿司「7種の魚介らーめん（味玉無し）」258kcal台までなら、あっさり系にぎり約3皿分に収まります。ただし担々麺・かすうどん・トッピング付きは280〜400kcal台に乗るので「麺を食べる日は皿数を減らす」のがセオリーです。
          </p>

          <SubSectionHeading>デザート（食べるなら1品100kcal以下から）</SubSectionHeading>

          <ComparisonTable
            headers={["デザート", "チェーン", "カロリー"]}
            rows={[
              ["チョコアイス", "くら寿司", "42 kcal"],
              ["巨峰シャーベット", "くら寿司", "53 kcal"],
              ["フローズンマンゴー", "スシロー", "59 kcal"],
              ["北海道バニラアイス（カップ）", "スシロー", "60 kcal"],
              ["濃厚バニラアイス", "くら寿司", "77 kcal"],
              ["チーズケーキ", "くら寿司", "81 kcal"],
              ["懐かしのメロンシャーベット", "スシロー", "87 kcal"],
              ["京都峯嵐堂のわらびもち", "スシロー", "98 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            アイス・シャーベット系は両社とも<Marker color="blue">42〜87kcal</Marker>と控えめで、にぎり1皿と同等以下。一方、くら寿司「絞りたてモンブラン（栗）」332kcal・「ミルキーミルクレープ」272kcal、スシロー「ストロベリーバニラパフェ」222kcal・「クラシックプリン」194kcalなど、ケーキ・パフェ系は1品でにぎり2〜4皿分になります。
          </p>
          <SourceNote asOf="2026年7月" />
        </section>

        {/* Section 6: 皿数の目安 */}
        <section className="mb-16">
          <SectionHeading id="plate-guide">皿数の目安とカロリー計算（1皿≒2貫の感覚をつかむ）</SectionHeading>

          <p className="mb-4">
            回転寿司の便利なところは、<Marker>「皿数×1皿のカロリー」でおおよその合計が読める</Marker>こと。あっさり系ネタ（まぐろ赤身・えび・いか・たこ・貝・白身など）は両社とも1皿70〜90kcal台に収まるものが多いので、これを基準に考えます。
          </p>

          <ComparisonTable
            headers={["皿数（あっさり系中心）", "合計カロリーの目安"]}
            rows={[
              ["4皿", "約280〜360 kcal"],
              ["6皿", "約420〜540 kcal"],
              ["8皿", "約560〜720 kcal"],
              ["10皿", "約700〜900 kcal"],
            ]}
          />

          <p className="text-xs text-gray-400 mb-6">
            ※1皿70〜90kcalのあっさり系ネタで計算した概算です。マヨ・天ぷら系（140〜200kcal台）を混ぜると同じ皿数でも合計は大きく増えます。
          </p>

          <TipBox title="実例シミュレーション（DB実値で計算）">
            <p className="mb-2"><span className="font-bold">くら寿司モデル注文</span>：純味噌汁32＋熟成まぐろ82＋いか73＋えび74＋サーモン93＋ビントロ83＝<Marker>5皿＋汁物で437kcal</Marker></p>
            <p><span className="font-bold">スシローモデル注文</span>：あおさと海苔の味噌汁48＋厳選まぐろ赤身81＋いか70＋えび72＋サーモン91＋天然真あじ83＝<Marker>5皿＋汁物で445kcal</Marker></p>
          </TipBox>

          <p className="mb-4">
            どちらの店でも、あっさり系5〜8皿＋汁物なら<Marker color="green">およそ450〜770kcal</Marker>に収まる計算です。にぎり1皿の内訳は大部分がシャリ（酢飯）とネタなので、皿数が増えるほどシャリ由来の糖質も積み上がる点は意識しておきましょう。チェーン別の詳しい攻略は<Link href="/guide/kurasushi-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">くら寿司ダイエットガイド</Link>と<Link href="/guide/sushiro-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">スシローダイエットガイド</Link>で深掘りしています。
          </p>
        </section>

        {/* Section 7: 太りにくい食べ方 */}
        <section className="mb-16">
          <SectionHeading id="tips">太りにくい食べ方 5つのコツ</SectionHeading>

          <NumberedList
            items={[
              {
                title: "最初の1品は汁物・茶碗蒸しにする",
                body: "くら寿司なら純味噌汁（32kcal）や特製茶碗蒸し（67kcal）、スシローならあおさと海苔の味噌汁（48kcal）や筍の茶碗蒸し（79kcal）。温かい一品を先に挟むと食べるペースが落ち着き、総皿数を抑えやすくなります。",
              },
              {
                title: "あっさり系ネタを軸に組み立てる",
                body: "まぐろ赤身・えび・いか・たこ・貝・白身は両社とも1皿100kcal以下が中心。赤身や貝類は一般に高タンパク・低脂質の傾向がある食材なので、軸に据えるネタとして優秀です。",
              },
              {
                title: "マヨ・チーズ・天ぷら系は1〜2皿のアクセントに",
                body: "えびマヨ（くら寿司182kcal）は素のえび（74kcal）の約2.5倍。全部を我慢する必要はありませんが、「揚げ・マヨは2皿まで」と決めておくと合計が読みやすくなります。",
              },
              {
                title: "シメの麺・丼は「追加」ではなく「置き換え」",
                body: "スシローのかけうどん194kcalや貝塩ラーメン247kcalは、にぎり2〜3皿分。食べるなら皿数をその分減らす前提で。うな丼・天丼・まぜそば系（500〜815kcal）は1品で1食分になるため、寿司と重ねるのは避けたいところです。",
              },
              {
                title: "食べた皿を記録して「見える化」する",
                body: "回転寿司は皿数が伸びやすい業態です。本記事の数値は各社公式データに基づいているので、食べた皿をそのまま記録して1日の合計で調整しましょう。",
              },
            ]}
          />
        </section>

        {/* チェーン別ハブへの内部リンク */}
        <section className="mb-16">
          <SubSectionHeading>2社の全メニューを目的別に見る</SubSectionHeading>
          <p className="mb-4 text-sm text-gray-600">
            各チェーンの低カロリーランキングや全メニューのカロリーは、チェーン別ページで確認できます。あわせて<Link href="/guide/sushi-diet" className="text-sky-600 underline decoration-sky-300 hover:text-sky-700">寿司ダイエット完全ガイド</Link>では、寿司という食事そのものの向き合い方を解説しています。
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/chains/kurasushi" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍣 くら寿司</Link>
            <Link href="/chains/sushiro" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">🍣 スシロー</Link>
            <Link href="/guide/kurasushi-diet" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">📖 くら寿司ダイエット</Link>
            <Link href="/guide/sushiro-diet" className="px-3 py-1.5 bg-gray-100 hover:bg-sky-50 text-gray-600 hover:text-sky-600 rounded-lg text-xs font-medium transition-colors">📖 スシローダイエット</Link>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            くら寿司とスシローは「どちらの店か」より「どのネタを何皿食べるか」でカロリーが決まります。この記事のポイントを整理しました。
          </p>

          <ArticleSummary
            points={[
              "同名ネタ13種の直接対決は、にぎり8種がスシロー（差1〜19kcal）、巻物・いなり・たまごなど5種がくら寿司の勝ちでほぼ互角",
              "低カロリーTOPはスシロー「店内殻むき 活あわび」35kcal、くら寿司「熟成ふぐ（一貫）」39kcal。えび・貝・白身・赤身は1皿100kcal以下が中心",
              "要注意はマヨ・天ぷら系（えびマヨ182kcalは素のえびの約2.5倍）と、サイドの丼・麺・ポテト（特上うな丼（シャリ）815kcal・どんぶりポテト559kcal）",
              "あっさり系5〜8皿＋汁物なら両社ともおよそ450〜770kcal。皿数×1皿カロリーで合計を読むのがコツ",
              "両社ともPFC（タンパク質・脂質・炭水化物）は非公開のため、比較はカロリー基準。個別メニューにグラム数を当てはめないこと",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分は各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。くら寿司・スシローはタンパク質・脂質・炭水化物（PFC）を公開していないため、本記事ではカロリーを基準に比較しています。
          </p>
        </section>

        <ServiceOffers tag="diet" />

        {/* FAQ Section */}
        <FAQSection
          slug="kaitenzushi-comparison"
          items={[
            {
              q: "くら寿司とスシロー、カロリーが低いのはどっちですか？",
              a: "同名の定番にぎり8種（まぐろ赤身・サーモン・えび・甘えび・いか・あじ・はまち・えんがわ）ではスシローが1〜19kcal低く、鉄火巻・きゅうり巻・いなり・たまご・いくらの5種ではくら寿司が4〜52kcal低いという結果でした。総合ではほぼ互角で、チェーン選びよりネタ選びの影響がはるかに大きいです（2026年7月時点・各社公式カロリーデータ）。",
            },
            {
              q: "回転寿司で一番カロリーが低いネタは何ですか？",
              a: "両社のレギュラーメニュー横断では、スシローの「店内殻むき 活あわび」が1皿35kcalで最少です。くら寿司では「熟成ふぐ（一貫）」39kcalが最少。続いてスシロー「濃厚生うに包み」「本ずわい蟹包み」各41kcal、「大えび」43kcalなど、えび・貝・白身・包み系が低カロリー帯に並びます。",
            },
            {
              q: "くら寿司・スシローのタンパク質（PFC）はわかりますか？",
              a: "両社とも公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、個別メニューのグラム数はわかりません。本記事もカロリーを基準に比較しています。一般論として、まぐろ赤身・いか・たこ・貝・白身はあっさり系（高タンパク・低脂質の傾向）、とろ・サーモン・はまちは脂がのっている傾向がありますが、数値での断定はできません。",
            },
            {
              q: "ダイエット中の回転寿司は何皿までが目安ですか？",
              a: "あっさり系ネタ（1皿70〜90kcal台）中心なら、6皿で約420〜540kcal、8皿で約560〜720kcalです。味噌汁（くら寿司32kcal・スシロー48kcal）を足しても、5〜8皿＋汁物でおよそ450〜770kcalに収まる計算になります。1日全体の食事量に合わせて皿数を決めるのがおすすめです。",
            },
            {
              q: "サイドメニューで特に注意すべきものはどれですか？",
              a: "くら寿司では特上うな丼（シャリ）815kcal・藤原系 禁断のにんにくMAXまぜそば778kcal・海鮮かき揚げうどん757kcal、スシローではどんぶりポテト559kcal・コク旨まぐろ醤油ラーメン 煮玉子付399kcalなどが高カロリーです。1品であっさり系にぎり4〜11皿分に相当するため、寿司と重ねるのは避けたいメニューです。",
            },
            {
              q: "回転寿司でラーメンやうどんを食べても大丈夫ですか？",
              a: "選び方次第です。スシローのかけうどん194kcal・貝塩ラーメン247kcal、くら寿司の7種の魚介らーめん（味玉無し）258kcalなど、200kcal台までの麺ならにぎり2〜3皿分に相当します。食べる場合は皿数をその分減らす「置き換え」にすると、合計カロリーを調整しやすくなります。",
            },
          ]}
        />

        {/* End CTA */}
        <CTABanner
          title="くら寿司もスシローも、まとめて比較"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-07-02", note: "初稿公開（くら寿司・スシローの公式カロリーデータに基づく横断比較）" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="kaitenzushi-comparison" />

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
