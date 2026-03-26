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
  ArticleFooter,
  ArticleImage,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】回転寿司ダイエットガイド｜スシロー・くら寿司のカロリーと太らない食べ方 | たべなび",
  description:
    "回転寿司のカロリーをネタ別に徹底比較。スシローとくら寿司の栄養成分ランキング、太らない食べ方5つのルール、高タンパクネタBEST5を解説します。",
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
      "回転寿司のカロリーをネタ別に徹底比較。スシローとくら寿司の栄養成分ランキング、太らない食べ方を解説。",
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
    "回転寿司のカロリーをネタ別に徹底比較。スシローとくら寿司の栄養成分ランキング、太らない食べ方5つのルールを解説。",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://www.tabenavi.jp",
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
  { id: "high-protein", label: "高タンパクネタBEST5" },
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
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月23日</p>

        {/* Introduction */}
        <p className="mb-4">
          「ダイエット中に回転寿司なんて行っていいの？」と思う方は多いかもしれません。しかし実は、<Marker>寿司は低脂質で1貫あたり60〜100kcalとコントロールしやすい</Marker>、ダイエットに非常に向いている外食なのです。
        </p>
        <p className="mb-4">
          特にスシローやくら寿司は全メニューの栄養成分を公開しており、カロリー計算がしやすいのも大きなメリット。ネタの選び方とサイドメニューの罠さえ知っていれば、回転寿司を楽しみながらダイエットを続けることが可能です。
        </p>
        <p className="mb-8">
          この記事では、ネタ別のカロリーランキング、スシローとくら寿司の栄養比較、そして太らない食べ方のルールを徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* ── Section 1: 寿司はダイエット向き ── */}
        <section className="mb-16">
          <SectionHeading id="why-sushi">寿司は実はダイエット向き？その3つの理由</SectionHeading>

          <p className="mb-4">
            「寿司＝シャリ＝糖質＝太る」というイメージがありますが、実際のデータを見ると印象は変わります。寿司がダイエットに向いている理由を3つ解説します。
          </p>

          <NumberedList
            items={[
              {
                title: "1貫あたりのカロリーが低い",
                body: "一般的な寿司1貫のカロリーは60〜100kcal。ハンバーガー1個（約400kcal）と比較すると、10貫食べても同等のカロリーに収まります。1貫単位でカロリーを調整できる点がダイエット向きです。",
              },
              {
                title: "脂質が非常に少ない",
                body: "寿司の脂質は1貫あたり0.5〜3g程度。揚げ物中心のファストフードと比べて圧倒的に低脂質です。脂質制限ダイエット中の外食先として最適といえます。",
              },
              {
                title: "タンパク質が豊富な魚介類を使用",
                body: "まぐろ、サーモン、えびなどの魚介類は高タンパク食材。10貫食べれば20g以上のタンパク質を摂取でき、筋肉の維持にも役立ちます。",
              },
            ]}
          />

          <TipBox title="寿司 vs 他の外食のカロリー比較">
            <p>寿司10貫（約700kcal）は、牛丼並盛り（約750kcal）やラーメン1杯（約800kcal）よりも低カロリー。しかも<Marker>脂質は約10g前後と圧倒的に少ない</Marker>のがポイントです。脂質を抑えたい人にとって、寿司は最も効率的な外食です。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=400&fit=crop"
            alt="新鮮な寿司が並ぶカウンター"
          />
        </section>

        {/* ── Section 2: ネタ別カロリーランキング ── */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">ネタ別カロリーランキング（1貫あたり）</SectionHeading>

          <p className="mb-4">
            回転寿司で人気のネタを1貫あたりのカロリーが低い順にランキングしました。<Marker color="blue">えび・いか・たこなどの白身系ネタが低カロリー</Marker>で、サーモンやハマチなど脂質の多いネタはやや高めです。
          </p>

          <NutritionTable
            items={[
              { name: "えび", calories: 60, protein: 3.8, fat: 0.2, carbs: 7.5, highlight: true },
              { name: "いか", calories: 62, protein: 3.5, fat: 0.3, carbs: 7.8, highlight: true },
              { name: "たこ", calories: 64, protein: 3.6, fat: 0.3, carbs: 7.8, highlight: true },
              { name: "まぐろ（赤身）", calories: 68, protein: 4.8, fat: 0.3, carbs: 7.5, highlight: true },
              { name: "ホタテ", calories: 70, protein: 3.5, fat: 0.4, carbs: 8.2 },
              { name: "ツナサラダ", calories: 78, protein: 2.8, fat: 2.5, carbs: 8.8 },
              { name: "サーモン", calories: 82, protein: 4.2, fat: 1.8, carbs: 7.5 },
              { name: "ハマチ", calories: 88, protein: 4.0, fat: 2.5, carbs: 7.5 },
              { name: "中トロ", calories: 95, protein: 4.0, fat: 3.5, carbs: 7.5 },
              { name: "炙りサーモン（マヨ）", calories: 108, protein: 3.8, fat: 4.2, carbs: 8.5 },
              { name: "えびアボカド", calories: 112, protein: 2.5, fat: 4.5, carbs: 9.8 },
              { name: "えび天にぎり", calories: 120, protein: 3.2, fat: 3.8, carbs: 12.5 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-4">
            ※カロリーは一般的な回転寿司の数値目安です。チェーンや時期により異なる場合があります。
          </p>

          <TipBox title="ダイエット中の「安全ネタ」を覚えよう">
            <p>上の表で<Marker>80kcal以下のネタ（えび・いか・たこ・まぐろ赤身・ホタテ）を「安全ネタ」</Marker>として覚えておきましょう。この5つをメインに注文すれば、10皿食べても700kcal以下に収まります。迷ったら安全ネタを選ぶ、というルールだけで十分なカロリーコントロールが可能です。</p>
          </TipBox>

          <WarningBox title="マヨネーズ系・天ぷら系はカロリーが跳ね上がる">
            <p>炙りサーモン（マヨ）は通常のサーモンより<span className="font-bold">約30kcal増</span>、えび天にぎりは通常のえびの<span className="font-bold">約2倍のカロリー</span>です。「マヨ」「天ぷら」「クリームチーズ」がつくネタはカロリーが大幅に上がるため、ダイエット中は素のネタを選びましょう。</p>
          </WarningBox>
        </section>

        {/* ── Section 3: スシロー vs くら寿司 ── */}
        <section className="mb-16">
          <SectionHeading id="sushiro-vs-kura">スシロー vs くら寿司 カロリー比較</SectionHeading>

          <p className="mb-4">
            回転寿司の2大チェーン、スシローとくら寿司の同一ネタをカロリーで比較しました。<Marker>ネタによって差があるため、両方のデータを知っておくと選択肢が広がります</Marker>。
          </p>

          <ComparisonTable
            headers={["ネタ", "スシロー", "くら寿司", "差分"]}
            rows={[
              ["まぐろ（2貫）", "136 kcal", "132 kcal", "-4 kcal"],
              ["サーモン（2貫）", "164 kcal", "158 kcal", "-6 kcal"],
              ["えび（2貫）", "120 kcal", "118 kcal", "-2 kcal"],
              ["ハマチ（2貫）", "176 kcal", "170 kcal", "-6 kcal"],
              ["たまご（2貫）", "148 kcal", "142 kcal", "-6 kcal"],
              ["えび天にぎり（2貫）", "242 kcal", "236 kcal", "-6 kcal"],
            ]}
            bestRowIndex={2}
          />

          <TipBox title="結論：大差はないが、くら寿司がやや低め">
            <p>全体的にくら寿司の方が<Marker>1皿あたり2〜6kcal低い</Marker>傾向があります。ただし、この差は誤差の範囲。それよりも<Marker color="blue">何皿食べるか、サイドメニューに何を頼むか</Marker>の方がはるかに重要です。</p>
          </TipBox>

          <SubSectionHeading>サイドメニューの比較も重要</SubSectionHeading>
          <p className="mb-4">
            回転寿司では寿司以外にも多くのサイドメニューがあります。<Marker>味噌汁はどちらも約40kcalと優秀</Marker>ですが、ラーメンやうどんを追加すると一気に300〜500kcal増加するので注意が必要です。
          </p>

          <ComparisonTable
            headers={["サイドメニュー", "スシロー", "くら寿司"]}
            rows={[
              ["あおさ味噌汁", "42 kcal", "38 kcal"],
              ["茶碗蒸し", "168 kcal", "155 kcal"],
              ["ラーメン", "428 kcal", "412 kcal"],
              ["フライドポテト", "302 kcal", "288 kcal"],
              ["デザート（平均）", "180〜250 kcal", "170〜240 kcal"],
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
                body: "温かい味噌汁（約40kcal）を最初に飲むことで、満腹感を得やすくなります。結果として寿司を食べすぎることを防げます。スープ系は最強の食べすぎ防止策です。",
              },
              {
                title: "白身・赤身系ネタを中心に選ぶ",
                body: "まぐろ赤身（68kcal）、えび（60kcal）、いか（62kcal）など、脂質の少ないネタをメインに。サーモンやハマチは美味しいですが、1〜2皿に抑えましょう。",
              },
              {
                title: "シャリ半分（シャリハーフ）を活用",
                body: "スシローの「シャリハーフ」機能やくら寿司の「シャリ少なめ」を活用すれば、1貫あたり約15〜20kcalカット。10貫で150〜200kcalの差になります。",
              },
              {
                title: "サイドメニューの罠を避ける",
                body: "ラーメン（約420kcal）、フライドポテト（約300kcal）、パフェ（約250kcal）を追加すると、寿司5〜8皿分のカロリーが上乗せ。サイドは味噌汁と茶碗蒸しだけに留めましょう。",
              },
              {
                title: "10皿（20貫）をリミットにする",
                body: "10皿なら約700〜800kcalに収まります。「もう1皿」の誘惑に負けず、最初に皿数を決めておくのがコツ。満足感を高めるために、多様なネタを1皿ずつ楽しむのがおすすめです。",
              },
            ]}
          />

          <WarningBox title="最大の落とし穴：サイドメニュー">
            <p>回転寿司で太る最大の原因は<span className="font-bold">寿司そのものではなくサイドメニュー</span>です。ラーメン + フライドポテトを追加すると約720kcal。これは寿司10皿分に匹敵します。「寿司だけ」で帰る強い意志がダイエット成功の鍵です。</p>
          </WarningBox>

          <TipBox title="シャリハーフの効果は絶大">
            <p>10皿すべてをシャリハーフにした場合、<Marker>通常より約150〜200kcalカット</Marker>できます。さらにシャリが少ない分、ネタの味がダイレクトに感じられて意外と満足度も高い。ダイエット中は「シャリハーフ + 赤身中心」が最強の組み合わせです。</p>
          </TipBox>

          <ArticleImage
            src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&h=400&fit=crop"
            alt="新鮮なまぐろとサーモンの寿司盛り合わせ"
          />
        </section>

        {/* ── Section 5: 高タンパクネタBEST5 ── */}
        <section className="mb-16">
          <SectionHeading id="high-protein">ダイエット中に選ぶべき高タンパクネタBEST5</SectionHeading>

          <p className="mb-6">
            筋トレ中やダイエット中に積極的に選びたい、<Marker>高タンパク・低脂質な寿司ネタ</Marker>をランキング形式で紹介します。
          </p>

          <RankingCard rank={1} title="まぐろ（赤身）" subtitle="1貫 68kcal / P4.8g / F0.3g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>タンパク質量No.1かつ脂質わずか0.3g</Marker>。寿司ダイエットの最強ネタです。赤身は中トロやトロよりも低カロリーでタンパク質が豊富。10貫食べても680kcal、タンパク質は48gと驚異的な数値です。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="えび" subtitle="1貫 60kcal / P3.8g / F0.2g">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">1貫60kcalと最も低カロリー</Marker>なネタの一つ。脂質もわずか0.2gで、脂質制限中に特におすすめ。ただし、えび天にぎり（120kcal）は揚げ物なので注意。必ず生のえびを選びましょう。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="いか" subtitle="1貫 62kcal / P3.5g / F0.3g">
            <p className="text-sm text-gray-700 leading-relaxed">
              えびに次いで低カロリー。<Marker color="green">噛み応えがあるため満腹感を得やすい</Marker>のもメリットです。タウリンが豊富に含まれており、疲労回復効果も期待できます。
            </p>
          </RankingCard>

          <RankingCard rank={4} title="サーモン" subtitle="1貫 82kcal / P4.2g / F1.8g">
            <p className="text-sm text-gray-700 leading-relaxed">
              脂質は1.8gとやや高めですが、<Marker>良質なオメガ3脂肪酸</Marker>を含む点で栄養価が高い。タンパク質も4.2gと豊富です。ただし、炙りマヨサーモン（108kcal）は避けて、ノーマルのサーモンを選びましょう。
            </p>
          </RankingCard>

          <RankingCard rank={5} title="ホタテ" subtitle="1貫 70kcal / P3.5g / F0.4g">
            <p className="text-sm text-gray-700 leading-relaxed">
              低脂質でありながら甘みが強く満足度が高いネタ。<Marker color="blue">亜鉛やビタミンB12が豊富</Marker>で、ダイエット中に不足しがちな微量栄養素を補えます。
            </p>
          </RankingCard>

          <SubSectionHeading>高タンパクネタの組み合わせ例</SubSectionHeading>

          <p className="mb-4">
            上記のBEST5ネタを中心に10皿注文した場合の栄養バランスをシミュレーションしました。<Marker>ネタの組み合わせ次第で、同じ10皿でもPFCバランスが大きく変わります</Marker>。
          </p>

          <ComparisonTable
            headers={["組み合わせ", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["まぐろ5皿 + えび3皿 + いか2皿", "1,304 kcal", "P 79.2g", "F 5.6g"],
              ["サーモン4皿 + まぐろ3皿 + ホタテ3皿", "1,488 kcal", "P 82.0g", "F 19.2g"],
              ["まぐろ3皿 + えび3皿 + サーモン2皿 + ホタテ2皿", "1,368 kcal", "P 78.4g", "F 11.6g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="赤身中心なら脂質5g台も可能">
            <p>まぐろ赤身・えび・いかを中心にすれば、<Marker>10皿食べても脂質はわずか5〜6g</Marker>。これは鶏むね肉100gの脂質とほぼ同等です。脂質制限中の外食先として、回転寿司は最強クラスの選択肢といえます。</p>
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

        {/* ── Section 6: まとめ ── */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ：回転寿司はダイエットの味方</SectionHeading>

          <p className="mb-6">
            回転寿司は低脂質・高タンパクでカロリー管理もしやすい、ダイエットに最適な外食の一つです。この記事のポイントを整理しました。
          </p>

          <p className="mb-4">
            ダイエット中でも回転寿司を我慢する必要はありません。正しい知識を持って食べれば、<Marker>回転寿司はむしろダイエットの強い味方</Marker>になります。
          </p>

          <CheckList
            items={[
              "寿司は1貫60〜100kcal・低脂質でダイエット向きの外食",
              "まぐろ赤身（68kcal/P4.8g）がタンパク質コスパ最強",
              "80kcal以下の「安全ネタ」5種を中心に選べばカロリーを抑えやすい",
              "スシロー・くら寿司のカロリー差は小さい。ネタ選びの方が重要",
              "シャリハーフで10皿あたり150〜200kcalカット可能",
              "サイドメニュー（ラーメン・フライドポテト）が最大の落とし穴",
              "10皿（20貫）をリミットにすれば700〜800kcalに収まる",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※カロリー・栄養成分は店舗や時期により異なる場合があります。最新の情報は各チェーンの公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
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
