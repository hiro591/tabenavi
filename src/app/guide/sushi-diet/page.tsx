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
  CheckList,
  NumberedList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  CompareBar,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  AffiliateProductGrid,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/sushi-diet" },
  title:
    "【2026年最新】回転寿司ダイエットガイド｜スシロー・くら寿司のカロリーと太らない食べ方 | たべなび",
  description:
    "回転寿司のカロリーをネタ別に徹底比較。スシローとくら寿司の実メニューのカロリーランキング、太らない食べ方5つのルール、低カロリーネタBEST5を解説します。",
  keywords: [
    "回転寿司 カロリー",
    "寿司 ダイエット",
    "スシロー カロリー",
    "くら寿司 カロリー",
    "回転寿司 太らない",
  ],
  openGraph: {
    title:
      "【2026年最新】回転寿司ダイエットガイド｜スシロー・くら寿司のカロリーと太らない食べ方",
    description:
      "回転寿司のカロリーをネタ別に徹底比較。スシローとくら寿司の実メニューのカロリーランキング、太らない食べ方を解説。",
    url: "https://www.tabenavi.jp/guide/sushi-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】回転寿司ダイエットガイド｜スシロー・くら寿司のカロリーと太らない食べ方",
  description:
    "回転寿司のカロリーをネタ別に徹底比較。スシローとくら寿司の実メニューのカロリーランキング、太らない食べ方5つのルールを解説。",
  datePublished: "2026-03-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/sushi-diet",
};

const tocItems = [
  { id: "why-sushi", label: "寿司は実はダイエット向き" },
  { id: "calorie-ranking", label: "ネタ別カロリーランキング" },
  { id: "sushiro-vs-kura", label: "スシロー vs くら寿司 比較" },
  { id: "five-rules", label: "回転寿司で太らない5つのルール" },
  { id: "low-calorie", label: "低カロリーネタBEST5" },
  { id: "summary", label: "まとめ" },
];

export default function SushiDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="回転寿司ダイエットガイド"
        subtitle="スシロー・くら寿司のカロリーと太らない食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop"
        breadcrumb="回転寿司ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="sushi-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月22日</p>
        <AffiliateDisclosure />

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中に回転寿司なんて行っていいの？」と思う方は多いかもしれません。しかし実は、<Marker>寿司は1皿（多くは2貫）あたり70〜120kcal前後とカロリーをコントロールしやすい</Marker>、ダイエットに向いている外食です。
        </p>
        <p className="mb-4">
          特にスシローやくら寿司は全メニューのカロリーを公開しており、計算がしやすいのも大きなメリット。ネタの選び方とサイドメニューの罠さえ知っていれば、回転寿司を楽しみながらダイエットを続けることが可能です。
        </p>
        <p className="mb-8">
          この記事では、スシロー・くら寿司の実メニューをもとにしたカロリーランキング、両チェーンの比較、そして太らない食べ方のルールを解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* ── Section 1: 寿司はダイエット向き ── */}
        <section className="mb-16">
                  <QuickAnswer
          question={"回転寿司はダイエット向きですか？"}
          answer={"寿司はカロリー管理がしやすい外食です。スシロー・くら寿司の寿司ネタは1皿（多くは2貫）あたり70～120kcal前後が中心。えび・いか・たこ・まぐろ赤身などのネタを中心に選び、サイドメニュー（ラーメンやポテト）を避ければ、10皿でおおよそ800～1,000kcal程度に抑えられます。最大の落とし穴は寿司そのものではなくサイドメニューです。"}
        />

        <SectionHeading id="why-sushi">寿司は実はダイエット向き？その3つの理由</SectionHeading>

          <p className="mb-4">
            「寿司＝シャリ＝糖質＝太る」というイメージがありますが、実際のデータを見ると印象は変わります。寿司がダイエットに向いている理由を3つ解説します。
          </p>

          <NumberedList
            items={[
              {
                title: "1皿あたりのカロリーが把握しやすい",
                body: "スシロー・くら寿司の寿司ネタは1皿（多くは2貫）あたり70〜120kcal前後が中心。1皿単位でカロリーを積み上げて管理できるため、食べた量を把握しやすいのがダイエット向きです。",
              },
              {
                title: "ネタを選べばカロリーを抑えやすい",
                body: "えび・いか・たこ・まぐろ赤身などの淡白なネタは1皿70〜80kcal前後と低め。マヨ系・天ぷら系・サイドメニューを避ければ、寿司中心の食事はカロリーをコントロールしやすくなります。",
              },
              {
                title: "魚介類を選べる外食である",
                body: "まぐろ、サーモン、えびなどの魚介中心のメニュー構成。揚げ物やこってり系のサイドを避け、寿司ネタを中心に選ぶことで、外食でもカロリーを管理しやすくなります。",
              },
            ]}
          />

          <TipBox title="寿司 vs 他の外食のカロリー比較">
            <p>寿司10皿（おおよそ800〜1,000kcal）は、ネタ選び次第で牛丼並盛り（約750kcal）やラーメン1杯（約800kcal）と同程度に収められます。<Marker>淡白なネタ中心なら1皿70〜80kcal前後</Marker>に抑えられるのがポイント。カロリーを意識したい人にとって、回転寿司は管理しやすい外食です。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=400&fit=crop"
            alt="新鮮な寿司が並ぶカウンター"
          />
        </section>

        {/* ── Section 2: ネタ別カロリーランキング ── */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">ネタ別カロリーランキング（スシローの実メニュー）</SectionHeading>

          <p className="mb-4">
            回転寿司で人気のネタを、スシローの実メニューのカロリーが低い順にランキングしました（1皿の値。多くは2貫）。<Marker color="blue">たこ・えび・いか・まぐろ赤身などの淡白なネタが低カロリー</Marker>で、サーモンやはまち、マヨ・天ぷら系のネタはやや高めです。
          </p>

          <CompareBar
            title="スシロー 人気ネタのカロリー（1皿あたり・低い順）"
            sort="asc"
            highlightTop={4}
            items={[
              { name: "水たこ", value: 66 },
              { name: "甘えび", value: 70 },
              { name: "いか", value: 70 },
              { name: "まぐろのサラダ寿司", value: 70 },
              { name: "えび", value: 72 },
              { name: "国産ほたて貝柱", value: 77 },
              { name: "厳選まぐろ赤身", value: 81 },
              { name: "サーモン", value: 91 },
              { name: "活〆はまち", value: 99 },
              { name: "えびアボカド", value: 117 },
              { name: "えび天にぎり", value: 142 },
            ]}
            caption="出典: スシロー公式メニューのカロリー（たべなび収録値）。1皿の値で、多くは2貫。時期・店舗により変わる場合があります。"
          />

          <TipBox title="ダイエット中の「安全ネタ」を覚えよう">
            <p><Marker>80kcal前後までの淡白なネタ（水たこ・甘えび・いか・えび・まぐろ赤身・ほたて）を「安全ネタ」</Marker>として覚えておきましょう。この系統をメインに注文すれば、1皿あたりのカロリーを80kcal前後に抑えやすくなります。迷ったら安全ネタを選ぶ、というルールだけでカロリーコントロールがしやすくなります。</p>
          </TipBox>

          <WarningBox title="マヨネーズ系・天ぷら系はカロリーが上がりやすい">
            <p>スシローのえび天にぎり（142kcal）は素のえび（72kcal）の<span className="font-bold">約2倍のカロリー</span>。えびアボカド（117kcal）のようにマヨ・アボカド・チーズが加わるネタもカロリーが上がります。「マヨ」「天ぷら」「チーズ」がつくネタはカロリーが上がりやすいため、ダイエット中は素のネタを選びましょう。</p>
          </WarningBox>
        </section>

        {/* ── Section 3: スシロー vs くら寿司 ── */}
        <section className="mb-16">
          <SectionHeading id="sushiro-vs-kura">スシロー vs くら寿司 カロリー比較</SectionHeading>

          <p className="mb-4">
            回転寿司の2大チェーン、スシローとくら寿司の近いネタを1皿あたりのカロリーで比較しました（多くは2貫の値）。<Marker>ネタによって高い・低いが入れ替わるため、両方のデータを知っておくと選択肢が広がります</Marker>。
          </p>

          <ComparisonTable
            headers={["ネタ", "スシロー", "くら寿司", "差分"]}
            rows={[
              ["まぐろ赤身", "81 kcal", "82 kcal", "+1 kcal"],
              ["サーモン", "91 kcal", "93 kcal", "+2 kcal"],
              ["えび", "72 kcal", "74 kcal", "+2 kcal"],
              ["いか", "70 kcal", "73 kcal", "+3 kcal"],
              ["たこ", "66 kcal", "76 kcal", "+10 kcal"],
              ["たまご", "122 kcal", "114 kcal", "-8 kcal"],
              ["えび天にぎり", "142 kcal", "135 kcal", "-7 kcal"],
            ]}
            bestRowIndex={4}
          />

          <p className="text-xs text-gray-400 mb-4">
            ※差分は「くら寿司 − スシロー」。くら寿司側は近いネタ（まぐろ＝熟成まぐろ、たこ＝真たこ、たまご＝たまご焼き、えび天にぎり＝えび天寿司）で比較しています。値は各チェーン公式メニューのカロリー（たべなび収録値）。
          </p>

          <TipBox title="結論：チェーン差は小さく、ネタによって逆転する">
            <p>生の魚介（まぐろ・サーモン・えび・いか・たこ）は<Marker>スシローの方がわずかに低め</Marker>、一方でたまごやえび天にぎりは<Marker color="blue">くら寿司の方が低め</Marker>と、ネタによって逆転します。いずれも差は1皿あたり数kcal〜10kcal程度。それよりも<Marker color="blue">何皿食べるか、サイドメニューに何を頼むか</Marker>の方がはるかに重要です。</p>
          </TipBox>

          <SubSectionHeading>サイドメニューの比較も重要</SubSectionHeading>
          <p className="mb-4">
            回転寿司では寿司以外にも多くのサイドメニューがあります。<Marker>味噌汁は30〜50kcal台と軽め</Marker>ですが、ラーメンやポテトを追加すると一気に200〜400kcal増加するので注意が必要です。
          </p>

          <ComparisonTable
            headers={["サイドメニュー", "スシロー", "くら寿司"]}
            rows={[
              ["味噌汁（あおさ系）", "48 kcal", "51 kcal"],
              ["茶碗蒸し", "79 kcal", "67 kcal"],
              ["ラーメン", "247 kcal〜", "286 kcal〜"],
              ["フライドポテト", "186 kcal", "396 kcal（くらポテト）"],
            ]}
            bestRowIndex={0}
          />

          <ArticleImage
            src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&h=400&fit=crop"
            alt="回転寿司のレーンを流れる色とりどりの寿司"
          />
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="回転寿司のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* ── Section 4: 太らない5つのルール ── */}
        <section className="mb-16">
          <SectionHeading id="five-rules">回転寿司で太らない5つのルール</SectionHeading>

          <p className="mb-6">
            回転寿司でダイエットを成功させるには、ネタ選びだけでなく<Marker>食べ方の戦略</Marker>が重要です。以下の5つのルールを守れば、回転寿司を楽しみながらカロリーをコントロールできます。
          </p>

          <NumberedList
            items={[
              {
                title: "先に味噌汁を注文する",
                body: "温かい味噌汁（30〜50kcal台）を最初に飲むことで、満腹感を得やすくなります。結果として寿司を食べすぎることを防げます。スープ系は手軽な食べすぎ防止策です。",
              },
              {
                title: "淡白なネタを中心に選ぶ",
                body: "スシローならまぐろ赤身（81kcal）、えび（72kcal）、いか（70kcal）、水たこ（66kcal）など、1皿80kcal前後の淡白なネタをメインに。サーモン（91kcal）やはまち（99kcal）も美味しいですが、皿数を意識しましょう。",
              },
              {
                title: "シャリ半分（シャリハーフ）を活用",
                body: "スシローの「シャリハーフ」やくら寿司の「シャリ少なめ」を活用すれば、シャリの量を減らせます。皿数が多いほど効いてくるので、しっかり食べたい日ほど取り入れる価値があります。",
              },
              {
                title: "サイドメニューの罠を避ける",
                body: "スシローのラーメン（247kcal〜）やフライドポテト（186kcal）、くらポテト（396kcal）を追加すると、寿司2〜5皿分のカロリーが上乗せ。サイドは味噌汁や茶碗蒸し（スシロー79kcal/くら寿司67kcal）など軽めに留めましょう。",
              },
              {
                title: "10皿（20貫）をリミットにする",
                body: "淡白なネタ中心の10皿ならおおよそ800〜1,000kcalに収まります。「もう1皿」の誘惑に負けず、最初に皿数を決めておくのがコツ。満足感を高めるために、多様なネタを1皿ずつ楽しむのがおすすめです。",
              },
            ]}
          />

          <WarningBox title="最大の落とし穴：サイドメニュー">
            <p>回転寿司でカロリーが膨らむ大きな原因は<span className="font-bold">寿司そのものではなくサイドメニュー</span>です。スシローならラーメン（247kcal〜）+ フライドポテト（186kcal）で400kcal超、くらポテト（396kcal）単体でも寿司5皿分に匹敵します。「寿司中心」で組み立てる意識がダイエット成功の鍵です。</p>
          </WarningBox>

          <TipBox title="シャリハーフで量を調整">
            <p>シャリハーフを使うと、シャリが減る分1皿あたりのカロリーを抑えられます。さらにシャリが少ない分、ネタの味がダイレクトに感じられて満足度も保ちやすい。ダイエット中は「シャリハーフ + 淡白なネタ中心」が組み立てやすい選び方です。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&h=400&fit=crop"
            alt="新鮮なまぐろとサーモンの寿司盛り合わせ"
          />
        </section>

        {/* ── Section 5: 低カロリーネタBEST5 ── */}
        <section className="mb-16">
          <SectionHeading id="low-calorie">ダイエット中に選びたい低カロリーネタBEST5</SectionHeading>

          <p className="mb-6">
            ダイエット中に積極的に選びたい、<Marker>1皿あたりのカロリーが低い寿司ネタ</Marker>を、スシローの実メニューをもとにランキング形式で紹介します（1皿の値。多くは2貫）。
          </p>

          <RankingCard rank={1} title="水たこ" subtitle="スシロー 1皿 66kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>1皿66kcalと淡白系ネタの中でも特に低カロリー</Marker>。噛み応えがあるため、ゆっくり食べることで満腹感を得やすいのもメリットです。マヨや揚げの加工がない素のネタを選びましょう。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="いか" subtitle="スシロー 1皿 70kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">1皿70kcalと低カロリー</Marker>なネタの一つ。<Marker color="green">噛み応えがあるため満腹感を得やすい</Marker>のもメリットです。いか塩レモン（71kcal）など味付けバリエーションも近いカロリーで楽しめます。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="甘えび" subtitle="スシロー 1皿 70kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              甘えびも1皿70kcalと低カロリー。素のえび（72kcal）も同程度です。ただし、えび天にぎり（142kcal）は揚げ物でカロリーが上がるため、ダイエット中は生のえび系を選びましょう。
            </p>
          </RankingCard>

          <RankingCard rank={4} title="国産ほたて貝柱" subtitle="スシロー 1皿 77kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              低カロリーでありながら甘みが強く満足度が高いネタ。<Marker color="blue">1皿77kcal</Marker>と、淡白系の中でも食べごたえと低カロリーのバランスが取りやすい一品です。
            </p>
          </RankingCard>

          <RankingCard rank={5} title="厳選まぐろ赤身" subtitle="スシロー 1皿 81kcal">
            <p className="text-sm text-gray-700 leading-relaxed">
              まぐろは赤身を選ぶのがコツ。<Marker>赤身は1皿81kcal</Marker>で、こってり系のネタより低カロリーに抑えられます。淡白で食べ飽きしにくく、回転寿司ダイエットの定番ネタです。
            </p>
          </RankingCard>

          <SubSectionHeading>低カロリーネタ中心の組み合わせ例</SubSectionHeading>

          <p className="mb-4">
            上記の低カロリーネタを中心に10皿注文した場合のカロリーをシミュレーションしました（スシローの実メニューのカロリーを合算。多くは2貫の値）。<Marker>ネタの組み合わせ次第で、同じ10皿でも合計カロリーが大きく変わります</Marker>。
          </p>

          <ComparisonTable
            headers={["組み合わせ（各1皿）", "合計カロリー"]}
            rows={[
              ["まぐろ赤身5皿 + えび3皿 + いか2皿", "761 kcal"],
              ["サーモン4皿 + まぐろ赤身3皿 + ほたて3皿", "838 kcal"],
              ["まぐろ赤身3皿 + えび3皿 + サーモン2皿 + ほたて2皿", "795 kcal"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="淡白なネタ中心なら10皿800kcal前後も可能">
            <p>まぐろ赤身・えび・いか・たこなどの淡白なネタを中心にすれば、<Marker>10皿食べてもおおよそ760〜840kcal</Marker>に収まります。マヨ・天ぷら・サイドメニューを避けることが、回転寿司でカロリーを抑える最大のコツです。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&h=400&fit=crop"
            alt="まぐろの赤身とえびの寿司が美しく盛り付けられた皿"
          />
        </section>

        {/* Bottom CTA */}
        <CTABanner
          title="たべなびで寿司のカロリーを管理しよう"
          subtitle="食べた寿司の栄養成分を簡単に記録・管理できます"
        />

        <AffiliateProductGrid
          title="寿司を楽しむ前後におすすめ"
          productIds={["kombu-cha", "miso-soup-pack", "ukon", "myprotein-impact"]}
        />

        {/* ── Section 6: まとめ ── */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ：回転寿司はダイエットの味方</SectionHeading>

          <p className="mb-6">
            回転寿司はネタを選べばカロリー管理がしやすい、ダイエット中でも取り入れやすい外食の一つです。この記事のポイントを整理しました。
          </p>

          <p className="mb-4">
            ダイエット中でも回転寿司を我慢する必要はありません。正しい知識を持って食べれば、<Marker>回転寿司はむしろダイエットの強い味方</Marker>になります。
          </p>

          <CheckList
            items={[
              "寿司は1皿（多くは2貫）70〜120kcal前後でカロリー管理しやすい外食",
              "スシローのまぐろ赤身（81kcal）など淡白なネタが低カロリーの定番",
              "80kcal前後の「安全ネタ」（たこ・えび・いか・まぐろ赤身・ほたて）を中心に選ぶ",
              "スシロー・くら寿司のチェーン差は数kcal〜10kcalでネタによって逆転。ネタ選びの方が重要",
              "シャリハーフでシャリの量を減らしカロリーを調整できる",
              "サイドメニュー（ラーメン・ポテト）が最大の落とし穴",
              "淡白なネタ中心の10皿ならおおよそ800〜1,000kcalに収まる",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※カロリー・栄養成分は店舗や時期により異なる場合があります。最新の情報は各チェーンの公式サイトでご確認ください。
          </p>

          <UpdateHistory
            entries={[
              { date: "2026-06-22", note: "スシロー・くら寿司の実メニューのカロリーで全数値を再検証。カロリーランキング・チェーン比較・サイドメニュー・FAQ・まとめを実値に修正。両チェーンはタンパク質・脂質・炭水化物の公開値が未収録のため、PFCの断定を削除しカロリー基準に統一しました。" },
              { date: "2026-03-23", note: "記事公開。" },
            ]}
          />
        </section>

        {/* ArticleFooter */}
        <FAQSection
          slug="sushi-diet"
          items={[
            { q: "寿司ダイエット中に選ぶべきネタは何ですか？", a: "1皿80kcal前後までの「安全ネタ」を中心に。スシローなら水たこ（66kcal）・甘えび（70kcal）・いか（70kcal）・えび（72kcal）・ほたて（77kcal）・まぐろ赤身（81kcal）が低カロリー。避けたいのはマヨ系・天ぷら系（えび天にぎりは142kcal）です。いずれも1皿の値で、多くは2貫です。" },
            { q: "回転寿司で最もカロリーが上がりやすい落とし穴は何ですか？", a: "サイドメニューです。スシローならラーメン（247kcal〜）とフライドポテト（186kcal）、くら寿司のくらポテト（396kcal）などを追加すると寿司2〜5皿分のカロリーが上乗せされます。寿司中心で組み立てるのが成功の鍵。味噌汁は30〜50kcal台と軽めです。" },
            { q: "スシローとくら寿司ではどちらが低カロリーですか？", a: "ネタによって入れ替わります。生の魚介（まぐろ赤身81→82、サーモン91→93、えび72→74、いか70→73、たこ66→76）はスシローがわずかに低め、一方でたまご（122→114）やえび天にぎり（142→135）はくら寿司が低めです（数値はスシロー→くら寿司）。いずれも差は1皿あたり数kcal〜10kcal程度なので、ネタ選びとサイドメニュー選択の方が重要です。" },
            { q: "シャリハーフはカロリー対策になりますか？", a: "なります。シャリの量を減らせるため、皿数が多いほどカロリーを抑えやすくなります。シャリが少ない分ネタの味がダイレクトに感じられ、満足度も保ちやすいのがメリットです。" },
            { q: "ダイエット中の回転寿司1回の適切な食べる量は？", a: "10皿（20貫）を上限の目安にしましょう。淡白なネタ中心ならおおよそ800〜1,000kcalに収まります。最初に皿数を決めておくことがポイント。満足感を高めるため、多様なネタを1皿ずつ選ぶのがおすすめです。" },
          ]}
        />

        <ArticleFooter currentSlug="sushi-diet" />

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
