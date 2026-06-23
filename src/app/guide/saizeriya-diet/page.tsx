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
  CompareBar,
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
  alternates: { canonical: "https://www.tabenavi.jp/guide/saizeriya-diet" },
  title:
    "サイゼリヤでダイエット｜低カロリーメニュー＆カロリーランキング完全ガイド【2026年最新】 | たべなび",
  description:
    "サイゼリヤのカロリーランキング（実データ）、ダイエット中におすすめの低カロリーメニュー、500円台の組み合わせ術を徹底解説。サイゼで太らない食べ方がわかります。",
  keywords: [
    "サイゼリヤ ダイエット",
    "サイゼリヤ カロリー",
    "サイゼ 低カロリー",
    "サイゼリヤ カロリーランキング",
    "サイゼリヤ メニュー カロリー",
  ],
  openGraph: {
    title: "サイゼリヤでダイエット｜低カロリーメニュー＆カロリーランキング完全ガイド",
    description:
      "サイゼリヤのカロリーランキング（実データ）、ダイエット中におすすめの低カロリーメニュー、500円台の組み合わせ術を徹底解説。",
    url: "https://www.tabenavi.jp/guide/saizeriya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "サイゼリヤでダイエット｜低カロリーメニュー＆カロリーランキング完全ガイド",
  description:
    "サイゼリヤのカロリーランキング（実データ）、ダイエット中におすすめの低カロリーメニュー、500円台の組み合わせ術を徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/saizeriya-diet",
};

const tocItems = [
  { id: "why-saizeriya", label: "なぜサイゼリヤはダイエットに向くか" },
  { id: "calorie-ranking", label: "カロリーランキング（低い順）" },
  { id: "low-cal-mains", label: "満足感の高い低カロリーメニュー" },
  { id: "under-500", label: "500円台で抑える組み合わせ術" },
  { id: "avoid", label: "避けるべき高カロリーメニュー" },
  { id: "combos", label: "おすすめの組み合わせ3パターン" },
  { id: "summary", label: "まとめ" },
];

export default function SaizeriyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="サイゼリヤでダイエット"
        subtitle="低カロリーメニュー＆カロリーランキング完全ガイド【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop"
        breadcrumb="サイゼリヤダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="saizeriya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">
          最終更新: {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="サイゼリヤでダイエット中におすすめのメニューは？低カロリーで何を選べばいい？"
          answer={
            <>
              低カロリー優先なら<strong>「蒸し鶏の香味ソース」（125kcal）「コーンクリームスープ」（151kcal）「わかめのサラダ」（169kcal）</strong>を組み合わせれば、合計でも約445kcalに収まります。サラダ＋スープに<strong>「辛味チキン」（295kcal）</strong>を足しても約600kcal前後。逆に避けたいのは<strong>カルボナーラ（773kcal）やパルマ風スパゲッティ（726kcal）、若鶏のディアボラ風（683kcal）・ミックスグリル（702kcal）</strong>など、単品で700kcal前後になるメニューです。
            </>
          }
        />

        {/* Introduction */}
        <p className="mb-4">
          サイゼリヤはコスパ最強の外食チェーンとして知られていますが、実は<Marker>ダイエット中の食事としても使い勝手が良い</Marker>です。その理由は、100〜200kcal台の低カロリーなサラダ・スープから、サイドメニューまでを単品で自由に組み合わせられる点にあります。
        </p>
        <p className="mb-4">
          特筆すべきは価格の安さと選択肢の幅。<Marker>サラダ・スープを組み合わせれば400kcal前後で1食をまとめられる</Marker>ため、外食でカロリーをコントロールしたいときに向いています。
        </p>
        <p className="mb-8">
          この記事では、サイゼリヤの主要メニューを<strong>実データのカロリー順</strong>にランキングし、ダイエット中のおすすめの食べ方をカロリー基準で詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: なぜサイゼリヤはダイエットに最適か */}
        <SectionHeading id="why-saizeriya">なぜサイゼリヤはダイエットに向くか</SectionHeading>

        <p className="mb-4">
          外食チェーンの中でも、サイゼリヤがダイエットに向いている理由は大きく3つあります。
        </p>

        <NumberedList
          items={[
            {
              title: "低カロリーのサラダ・スープが豊富",
              body: "蒸し鶏の香味ソース（125kcal）、コーンクリームスープ（151kcal）、わかめのサラダ（169kcal）など、100〜200kcal台の選択肢が多く、1食のカロリーを抑えやすいのが強みです。",
            },
            {
              title: "単品注文の自由度が高い",
              body: "サラダ・スープ・サイド・メインをそれぞれ単品で注文できるため、自分だけの「低カロリーセット」を自由に組み立てられます。",
            },
            {
              title: "価格が安く続けやすい",
              body: "低カロリーなサイド数品でも合計500円前後に収まることが多く、無理なく続けやすい価格帯です。",
            },
          ]}
        />

        <TipBox title="サイゼで1食のカロリーを抑えるコツ">
          <p><Marker>低カロリーなサラダ・スープを軸に組み立てる</Marker>のがコツ。たとえば蒸し鶏の香味ソース（125kcal）＋コーンクリームスープ（151kcal）＋わかめのサラダ（169kcal）なら、合計でも445kcal前後。パスタやドリアの単品（550〜770kcal）を選ぶより大きくカロリーを抑えられます。</p>
        </TipBox>

        <ArticleImage src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&h=400&fit=crop" alt="香ばしく焼かれたイタリアン風グリルチキンのプレート" />

        {/* Section 2: カロリーランキング */}
        <SectionHeading id="calorie-ranking">サイゼリヤ カロリーランキング（低い順）</SectionHeading>

        <p className="mb-4">
          サイゼリヤの主要メニューを<strong>実データのカロリーが低い順</strong>に並べました。<Marker color="blue">サラダやスープは100〜200kcal台と低カロリー</Marker>で、パスタ・ドリア・グリル系は単品で550〜770kcalと高めです。
        </p>

        <CompareBar
          title="サイゼリヤ 主要メニュー カロリー比較（低い順）"
          metric="calorie"
          unit="kcal"
          sort="asc"
          highlightTop={5}
          items={[
            { name: "蒸し鶏の香味ソース", value: 125 },
            { name: "コーンクリームスープ", value: 151 },
            { name: "わかめのサラダ", value: 169 },
            { name: "田舎風ミネストローネ", value: 179 },
            { name: "小エビのサラダ", value: 198 },
            { name: "柔らか青豆の温サラダ", value: 206 },
            { name: "ほうれん草のソテー", value: 223 },
            { name: "エスカルゴのオーブン焼き", value: 231 },
            { name: "チキンのサラダ", value: 237 },
            { name: "辛味チキン", value: 295 },
            { name: "バッファローモッツァレラのマルゲリータピザ", value: 539 },
            { name: "ミラノ風ドリア", value: 560 },
            { name: "ハンバーグステーキ", value: 567 },
            { name: "ペペロンチーノ", value: 578 },
            { name: "若鶏のディアボラ風", value: 683 },
            { name: "ミックスグリル", value: 702 },
            { name: "パルマ風スパゲッティ", value: 726 },
            { name: "カルボナーラ", value: 773 },
          ]}
          caption="数値はたべなび掲載の実データ（kcal）。●印は低カロリー上位5品。価格・栄養成分は店舗・時期により異なる場合があります。"
        />

        <p className="text-xs text-gray-400 mb-8">
          ※価格・栄養成分は店舗により異なる場合があります。サイゼリヤはタンパク質・脂質・炭水化物の公開データが揃っていないため、本記事ではカロリーを基準に解説します。
        </p>

        <TipBox title="カロリーランキングの読み解き方">
          <p>注目すべきは<Marker>サラダ・スープ系（125〜237kcal）とパスタ・ドリア・グリル系（539〜773kcal）の間に大きな差がある</Marker>点。サラダ・スープを中心に組み立てれば、1食を400〜600kcal前後に抑えやすくなります。一方、パスタ・ドリア・グリル系は単品で550kcalを超えるものが多く、量や組み合わせに注意が必要です。</p>
        </TipBox>

        {/* Section 3: 満足感の高い低カロリーメニュー */}
        <SectionHeading id="low-cal-mains">満足感の高い低カロリーメニュー</SectionHeading>

        <p className="mb-6">
          サイゼリヤには、しっかり食べた満足感がありながらカロリーを抑えやすいメニューが揃っています。ここでは<Marker>カロリーが控えめで、ダイエット中の主役にしやすい一品</Marker>をカロリーの低い順に紹介します。
        </p>

        <RankingCard rank={1} title="蒸し鶏の香味ソース" subtitle="125kcal">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            サイゼの中でも<Marker>とびきり低カロリーな一品</Marker>。蒸し鶏に香味ソースをかけた、あっさりしながらも食べ応えのあるメニューです。サラダやスープと合わせても300kcal前後にまとまります。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            ライスやパンを追加しなければ、軽めの1食として優秀。カロリーを抑えたい日の主役にしやすい一品です。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="辛味チキン" subtitle="295kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            おつまみ感覚で食べられる定番サイド。<Marker color="blue">295kcal</Marker>と、満足感のわりにカロリーが抑えめです。サラダやスープと組み合わせれば、低カロリーで満足感のある食事が完成します。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="ハンバーグステーキ" subtitle="567kcal">
          <p className="text-sm text-gray-700 leading-relaxed">
            肉をしっかり食べたい日の選択肢。<Marker color="green">567kcal</Marker>と単品では高めですが、ライスを追加しなければカロリーを抑えられます。野菜系サイドと合わせて満足感を補うのがおすすめです。
          </p>
        </RankingCard>

        <div className="mb-8 border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 px-5 py-4 flex items-center gap-3 border-b border-gray-100">
            <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg shadow-sm">4</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">バッファローモッツァレラのマルゲリータピザ</h3>
              <p className="text-xs text-gray-500">539kcal</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              ピザの中では<Marker color="blue">539kcal</Marker>と比較的控えめ。どうしてもピザ・パスタ系が食べたいときの選択肢になります。シェアして量を減らせば、さらにカロリーを抑えられます。
            </p>
          </div>
        </div>

        <div className="mb-8 border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-50 px-5 py-4 flex items-center gap-3 border-b border-gray-100">
            <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg shadow-sm">5</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">ミラノ風ドリア</h3>
              <p className="text-xs text-gray-500">560kcal</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              サイゼの看板メニュー。<Marker color="green">560kcal</Marker>と単品では高めなので、ダイエット中はサラダ・スープと分け合うか、軽めの日にとどめるのがおすすめです。
            </p>
          </div>
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop" alt="彩り豊かなヘルシーフードプレート" />

        {/* Mid-article CTA */}
        <CTABanner
          title="サイゼリヤのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 500円台で抑える */}
        <SectionHeading id="under-500">500円台で抑える組み合わせ術</SectionHeading>

        <p className="mb-6">
          サイゼリヤの最大の魅力はコスパ。<Marker>500円台でも低カロリーな食事が可能</Marker>です。以下の3つの注文パターンを覚えておけば、お財布にも体にも優しい食事ができます。
        </p>

        <ComparisonTable
          headers={["注文パターン", "価格", "カロリー"]}
          rows={[
            ["辛味チキン + 柔らか青豆の温サラダ", "¥500", "約501 kcal"],
            ["蒸し鶏の香味ソース + コーンクリームスープ", "¥430", "約276 kcal"],
            ["チキンのサラダ + コーンクリームスープ", "¥500", "約388 kcal"],
          ]}
          bestRowIndex={1}
        />

        <SubSectionHeading>辛味チキン + 柔らか青豆の温サラダ（約¥500 / 約501kcal）</SubSectionHeading>
        <p className="mb-6">
          辛味チキンで満足感を出しつつ、温サラダで野菜も補給。<Marker>約500円で約501kcal</Marker>とまとまり、食べ応えもあります。「軽すぎず、でもカロリーは抑えたい」という日に向いています。
        </p>

        <SubSectionHeading>蒸し鶏の香味ソース + コーンクリームスープ（約¥430 / 約276kcal）</SubSectionHeading>
        <p className="mb-6">
          <Marker color="blue">約430円・約276kcalとこの記事で一番カロリーを抑えやすい組み合わせ</Marker>。あっさり食べたい日や、夜遅い時間の食事に向いています。これ1セットでも軽めの1食として成立します。
        </p>

        <SubSectionHeading>チキンのサラダ + コーンクリームスープ（約¥500 / 約388kcal）</SubSectionHeading>
        <p className="mb-8">
          野菜中心でボリュームもある組み合わせ。<Marker color="green">約500円・約388kcal</Marker>と、ダイエット重視の方におすすめ。サラダで食べ応えを確保しつつ、温かいスープで満足感を補えます。
        </p>

        <TipBox title="ライスを追加するかどうか">
          <p>サイゼリヤのライス（303kcal）を追加すると、それだけで約300kcal増えます。カロリーを抑えたい日は<Marker>ライスなしでサイド + サラダ</Marker>の組み合わせがおすすめです。どうしても主食が欲しい場合は、フォッカチオ（241kcal）など量の調整しやすいパン系を少量選ぶとよいでしょう。</p>
        </TipBox>

        {/* Section 5: 避けるべきメニュー */}
        <SectionHeading id="avoid">避けるべき高カロリーメニュー</SectionHeading>

        <p className="mb-4">
          パスタ・ドリア・グリル系は単品でカロリーが高め。<Marker>ダイエット中は避けるか、シェアして量を減らしましょう</Marker>。
        </p>

        <WarningBox title="ダイエット中は要注意なメニュー">
          <ul className="space-y-2">
            <li><span className="font-bold">カルボナーラ（773kcal）</span> ─ サイゼリヤの主要メニューの中でも最も高カロリーな部類。ダイエット中は量に注意。</li>
            <li><span className="font-bold">パルマ風スパゲッティ（726kcal）</span> ─ パスタ系の中でも特に高カロリー。1人で1皿はカロリーオーバーになりがちです。</li>
            <li><span className="font-bold">ミックスグリル（702kcal）</span> ─ 肉の3種盛りでボリュームは満点ですが、単品で700kcal超。サラダ・スープで置き換える日もつくりましょう。</li>
            <li><span className="font-bold">若鶏のディアボラ風（683kcal）</span> ─ 食べ応えはありますが単品でも高カロリー。ライス追加は避けるのが無難です。</li>
            <li><span className="font-bold">ペペロンチーノ（578kcal）</span> ─ 一見シンプルですが、パスタなのでカロリーは控えめではありません。</li>
          </ul>
        </WarningBox>

        <TipBox title="「ミラノ風ドリア」の誘惑に注意">
          <p>300円という圧倒的な安さで有名なミラノ風ドリアですが、<Marker>560kcal</Marker>と単品ではダイエット向きとは言えません。安さに釣られて単品で頼むより、サラダ・スープと分け合ったり、低カロリーなサイドと組み合わせるのがおすすめです。「安いから」で選ばず、カロリーも意識して選びましょう。</p>
        </TipBox>

        {/* Section 6: おすすめ組み合わせ */}
        <SectionHeading id="combos">おすすめの組み合わせ3パターン</SectionHeading>

        <p className="mb-6">
          サイゼリヤの強みは単品を自由に組み合わせられること。目的別に<Marker>最適な組み合わせ</Marker>を3パターン紹介します。
        </p>

        <ComparisonTable
          headers={["パターン", "メニュー構成", "価格", "カロリー"]}
          rows={[
            ["とことん低カロリー", "蒸し鶏の香味ソース + わかめのサラダ + コーンクリームスープ", "¥780", "約445 kcal"],
            ["軽め・満足感", "小エビのサラダ + 辛味チキン", "¥650", "約493 kcal"],
            ["主食ありバランス", "ハンバーグステーキ + わかめのサラダ", "¥750", "約736 kcal"],
          ]}
          bestRowIndex={0}
        />

        <SubSectionHeading>Pattern 1：とことん低カロリーセット（約¥780 / 約445kcal）</SubSectionHeading>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">蒸し鶏の香味ソース + わかめのサラダ + コーンクリームスープ</p>
              <p className="text-xs text-gray-500 mt-0.5">サイゼリヤ</p>
            </div>
            <div className="flex flex-col items-end flex-shrink-0">
              <span className="bg-sky-400 text-white text-[11px] px-2 py-0.5 rounded-full font-semibold mb-1">おすすめ</span>
              <span className="text-2xl font-extrabold text-gray-900 tabular-nums leading-none">約445<span className="text-[11px] font-normal text-gray-400 ml-0.5">kcal</span></span>
            </div>
          </div>
          <p className="text-sm font-bold text-gray-700 mt-2">約¥780</p>
        </div>

        <p className="mb-8 mt-4">
          <Marker>約445kcal</Marker>。サラダ・スープ・あっさり蒸し鶏の組み合わせで、カロリーを抑えつつ温かいスープで満足感も確保。ランチにもディナーにも使いやすい、この記事で一番ヘルシーなセットです。
        </p>

        <SubSectionHeading>Pattern 2：軽め・満足感セット（約¥650 / 約493kcal）</SubSectionHeading>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">小エビのサラダ + 辛味チキン</p>
              <p className="text-xs text-gray-500 mt-0.5">サイゼリヤ</p>
            </div>
            <div className="flex flex-col items-end flex-shrink-0">
              <span className="bg-sky-400 text-white text-[11px] px-2 py-0.5 rounded-full font-semibold mb-1">おすすめ</span>
              <span className="text-2xl font-extrabold text-gray-900 tabular-nums leading-none">約493<span className="text-[11px] font-normal text-gray-400 ml-0.5">kcal</span></span>
            </div>
          </div>
          <p className="text-sm font-bold text-gray-700 mt-2">約¥650</p>
        </div>

        <p className="mb-8 mt-4">
          <Marker color="blue">約493kcal</Marker>。サラダで食べ応えを出しつつ、辛味チキンで満足感をプラス。500kcal前後にまとまるので、しっかり食べたいけれどカロリーは抑えたい日に向いています。
        </p>

        <SubSectionHeading>Pattern 3：主食ありバランスセット（約¥750 / 約736kcal）</SubSectionHeading>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-sm sm:text-base leading-snug">ハンバーグステーキ + わかめのサラダ</p>
              <p className="text-xs text-gray-500 mt-0.5">サイゼリヤ</p>
            </div>
            <div className="flex flex-col items-end flex-shrink-0">
              <span className="text-2xl font-extrabold text-gray-900 tabular-nums leading-none">約736<span className="text-[11px] font-normal text-gray-400 ml-0.5">kcal</span></span>
            </div>
          </div>
          <p className="text-sm font-bold text-gray-700 mt-2">約¥750</p>
        </div>

        <p className="mb-8 mt-4">
          肉と野菜をしっかり食べたいときのセット。<Marker color="green">約736kcal</Marker>と単品より高めですが、ライスを足さなければこの範囲に収まります。維持期や、軽い運動をした日の食事におすすめです。
        </p>

        <ArticleImage src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop" alt="レストランで楽しく食事をする人々の様子" />

        <AffiliateProductGrid
          title="ダイエット中の食事をサポートするアイテム"
          productIds={["myprotein-impact", "ultora-whey", "inbar-protein", "tanita-scale"]}
        />

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          サイゼリヤはダイエット中の外食先として使いやすいチェーンの一つです。この記事のポイントを整理しました。
        </p>

        <CheckList
          items={[
            "蒸し鶏の香味ソース（125kcal）やサラダ・スープを軸にカロリーを抑える",
            "パスタ・ドリア・グリル系は単品550〜773kcalと高め。量と組み合わせに注意",
            "蒸し鶏 + スープなら約430円・約276kcalで軽い1食が成立",
            "ミラノ風ドリア（300円）は安いが560kcal。安さだけで選ばない",
            "ライス（303kcal）を抜くだけで約300kcalをカットできる",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※価格・栄養成分は店舗により異なる場合があります。最新の情報は<a href="https://www.saizeriya.co.jp/menu/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">サイゼリヤ公式サイト</a>でご確認ください。
        </p>

        {/* FAQ */}
        <FAQSection
          slug="saizeriya-diet"
          items={[
            {
              q: "サイゼリヤで一番ダイエット向きなメニューは？",
              a: "低カロリー重視なら「蒸し鶏の香味ソース」（125kcal）が筆頭です。あっさりしていて食べ応えもあり、サラダやスープを足しても300〜450kcal前後にまとまります。1品で軽い食事にしたい日のメインにしやすいメニューです。",
            },
            {
              q: "サイゼリヤのパスタはダイエット中NG？",
              a: "パスタ系は単品で高カロリーになりがちです。「ペペロンチーノ」（578kcal）「パルマ風スパゲッティ」（726kcal）「カルボナーラ」（773kcal）と、いずれも控えめとは言えません。食べるなら他の食事を軽くする、シェアして量を減らすなどの工夫がおすすめです。",
            },
            {
              q: "サイゼリヤで500円台のおすすめ組み合わせは？",
              a: "①「辛味チキン（300円・295kcal）+ 柔らか青豆の温サラダ（200円・206kcal）」で約500円・約501kcal、②「蒸し鶏の香味ソース（280円・125kcal）+ コーンクリームスープ（150円・151kcal）」で約430円・約276kcal、③「チキンのサラダ（350円・237kcal）+ コーンクリームスープ」で約500円・約388kcal。とにかく軽くしたいなら②が最もカロリーを抑えられます。",
            },
            {
              q: "サイゼリヤでしっかり食べたい日のおすすめは？",
              a: "食べ応えを優先するなら「ハンバーグステーキ」（567kcal）や「若鶏のディアボラ風」（683kcal）が選択肢です。ただし単品でも高カロリーなので、ライスは足さず、わかめのサラダ（169kcal）などの低カロリーサイドと合わせてバランスを取るのがおすすめです。",
            },
            {
              q: "サイゼリヤでカロリーを抑えたいときのコツは？",
              a: "サラダ・スープなど100〜200kcal台のメニューを軸にし、メインを足す場合も1品にとどめるのがコツです。ライス（303kcal）の追加や、パスタ・ドリア・グリル系の重ね頼みを避けるだけでも、1食のカロリーは大きく変わります。",
            },
            {
              q: "サイゼリヤの低カロリーメニューTOP5を教えて",
              a: "サラダ・スープ系では、1位「蒸し鶏の香味ソース」125kcal、2位「コーンクリームスープ」151kcal、3位「わかめのサラダ」169kcal、4位「田舎風ミネストローネ」179kcal、5位「小エビのサラダ」198kcal。これらを組み合わせれば、400kcal前後で1食をまとめられます。",
            },
            {
              q: "サイゼリヤのパンとライス、ダイエット中はどっち？",
              a: "ライス（303kcal）に対し、フォッカチオ（241kcal）の方がやや低カロリーです。ただしパンはオリーブオイルなどを足すと一気に高カロリーになります。カロリーを抑えたい日は、主食を足さずサラダ・スープ中心にするのが安全です。",
            },
          ]}
        />

        {/* Author Bio */}
        <AuthorBio />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-22", note: "全メニューのカロリー・メニュー名を最新DB実データに再照合（全品DB一致を確認）。QuickAnswerの合計カロリーの誤り（4品643kcalを「400kcal前後」と記載）を実値ベースに修正。サイゼリヤはP/F/C（タンパク質・脂質・炭水化物）の公開データが揃っていないため、PFCの断定は行わずカロリー基準で解説" },
            { date: "2026-05-12", note: "QuickAnswer・FAQ・著者情報を追加" },
            { date: "2026-03-19", note: "初稿公開" },
          ]}
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="saizeriya-diet" />

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
