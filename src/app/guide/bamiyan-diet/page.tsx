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
  ArticleImage,
  MenuPhoto,
  QuickAnswer,
  FAQSection,
  ArticleSummary,
  AuthorBio,
  UpdateHistory,
  ArticleFooter,
} from "@/components/guide/ArticleComponents";
import {
  AffiliateDisclosure,
  ServiceOffers,
} from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "バーミヤンのカロリーガイド｜中華ファミレスで太りにくいメニューの選び方【2026年最新】 | たべなび",
  alternates: { canonical: "https://www.tabenavi.jp/guide/bamiyan-diet" },
  description:
    "中華ファミレス・バーミヤンのメニューをカロリーの実データで解説。低カロリーなメニュー、避けたい高カロリーメニュー、ダイエット中の選び方のコツを紹介します。",
  keywords: [
    "バーミヤン カロリー",
    "バーミヤン ダイエット",
    "バーミヤン カロリー一覧",
    "バーミヤン 低カロリー",
    "バーミヤン カロリーランキング",
    "中華 ファミレス ダイエット",
  ],
  openGraph: {
    title: "バーミヤンのカロリーガイド｜中華ファミレスで太りにくいメニューの選び方",
    description:
      "中華ファミレス・バーミヤンのメニューをカロリーの実データで解説。低カロリーなメニューや、避けたい高カロリーメニュー、ダイエット中の選び方のコツを紹介します。",
    url: "https://www.tabenavi.jp/guide/bamiyan-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "バーミヤンのカロリーガイド｜中華ファミレスで太りにくいメニューの選び方",
  description:
    "中華ファミレス・バーミヤンのメニューをカロリーの実データで解説。低カロリーなメニューや、避けたい高カロリーメニュー、ダイエット中の選び方のコツを紹介します。",
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  author: {
    "@type": "Person",
    name: "ヒロ",
    description: "外食で13kg減量した、たべなび開発者",
    url: "https://www.tabenavi.jp/sources",
  },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://www.tabenavi.jp/guide/bamiyan-diet",
};

const tocItems = [
  { id: "pfc-note", label: "バーミヤンはカロリー基準で選ぶ" },
  { id: "low-cal", label: "低カロリーなメニュー" },
  { id: "calorie-ranking", label: "カロリー比較（低い順）" },
  { id: "high-cal", label: "避けたい高カロリーメニュー" },
  { id: "tips", label: "太りにくい食べ方・組み合わせ" },
  { id: "by-goal", label: "目的別の選び方" },
  { id: "summary", label: "まとめ" },
];

export default function BamiyanDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="バーミヤンのカロリーガイド"
        subtitle="中華ファミレスで太りにくいメニューの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop"
        breadcrumb="バーミヤンのカロリーガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="bamiyan-diet">
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-2">最終更新: 2026年6月25日</p>
        <AffiliateDisclosure />

        {/* QuickAnswer */}
        <QuickAnswer
          question="バーミヤンでダイエット中におすすめのメニューは？低カロリーで何を選べばいい？"
          answer={
            <>
              カロリーを抑えたいなら<strong>「蒸し鶏の胡麻ソース」（117kcal）「海老の黒胡椒ねぎ塩炒め（小皿）」（149kcal）「おつまみ焼ビーフン（小皿）」（233kcal）</strong>などの小皿・逸品から組み立てるのがおすすめ。スープを足すなら<strong>「ごろっと野菜の山海珍味薬膳スープ」（347kcal）</strong>が選択肢になります。逆に避けたいのは<strong>チャーハン（726kcal）、天津飯（872kcal）、チャーシューメン（1,610kcal）</strong>や、ごはん付きの<strong>各種定食（おおむね850〜1,245kcal）</strong>など、単品で700kcalを大きく超えるメニューです。
            </>
          }
        />

        {/* 導入 */}
        <p className="mb-4">
          バーミヤンは点心・炒め物・麺飯・定食まで揃う中華ファミレスで、メニューの幅が広いぶん<Marker>同じ「中華」でもカロリーの差がとても大きい</Marker>のが特徴です。小皿の蒸し鶏なら100kcal台、一方でチャーハンや麺類は単品でも700kcalを超えます。
        </p>
        <p className="mb-4">
          ポイントは、<Marker>蒸し鶏や小皿料理（100〜300kcal台）と、チャーハン・麺・定食（700kcal超）の間に大きな差がある</Marker>こと。どこを選ぶかで1食のカロリーは数百kcal変わります。
        </p>
        <p className="mb-4">
          なお、<strong>バーミヤンは公式にPFC（タンパク質・脂質・炭水化物）を公開していないため、本記事ではカロリーを中心に解説します。</strong>「高タンパクだから」といった栄養素ベースの断定はせず、各メニューの実カロリーを基準に「太りにくい選び方」を整理します。
        </p>
        <p className="mb-8">
          この記事では、バーミヤンの主要メニューを<strong>実データのカロリー</strong>で比較し、ダイエット中の選び方をカロリー基準で詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: PFC非公開・カロリー基準 */}
        <SectionHeading id="pfc-note">バーミヤンはカロリー基準で選ぶ</SectionHeading>

        <p className="mb-4">
          ダイエットでは本来、カロリーに加えてタンパク質・脂質・炭水化物（PFC）のバランスも気にしたいところです。ただ、<Marker>バーミヤンはメニューごとのPFCを公式に公開していません</Marker>。そのため、この記事では公開されている<strong>カロリーの実データ</strong>を基準に解説します。
        </p>

        <TipBox title="この記事のスタンス（PFC非公開について）">
          <p>バーミヤンの個別メニューについて「タンパク質◯g」「脂質◯g」といった数値は<Marker>公式に公開されていないため記載しません</Marker>。一般論として「蒸し鶏や赤身肉は脂質が控えめになりやすい」「チャーハンや麺類は糖質が多くなりやすい」といった傾向はありますが、本記事ではバーミヤンの特定商品にPFCの数値を紐づけず、カロリーの実データだけで選び方を整理しています。</p>
        </TipBox>

        <p className="mb-4">
          幸い、バーミヤンは小皿・逸品メニューが充実しているので、<Marker>カロリーの低い一品を組み合わせるだけでも1食を抑えやすい</Marker>のが強みです。次の章から、具体的に低カロリーなメニューを見ていきます。
        </p>

        <MenuPhoto id="bamiyan-diet-chinese" genre="chinese" />

        {/* Section 2: 低カロリーなメニュー */}
        <SectionHeading id="low-cal">低カロリーなメニュー</SectionHeading>

        <p className="mb-6">
          まずは<Marker>カロリーが控えめで、ダイエット中の軸にしやすい一品</Marker>を、実データのカロリーが低い順に紹介します。小皿・逸品系を中心に選べば、複数頼んでも全体のカロリーを抑えやすくなります。
        </p>

        <RankingCard rank={1} title="蒸し鶏の胡麻ソース" subtitle="117kcal（逸品小皿）">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            バーミヤンの中でも<Marker>とびきり低カロリーな一品</Marker>。蒸し鶏に胡麻ソースをかけた小皿で、あっさりしながらも食べ応えがあります。
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            スープや他の小皿を足しても全体を抑えやすく、カロリーを抑えたい日の主役にしやすい一品です。
          </p>
        </RankingCard>

        <RankingCard rank={2} title="海老の黒胡椒ねぎ塩炒め（小皿）" subtitle="149kcal（中華主菜・小皿）">
          <p className="text-sm text-gray-700 leading-relaxed">
            小皿サイズの海老炒め。<Marker color="blue">149kcal</Marker>と、満足感のわりにカロリーが抑えめです。揚げ物ではなく炒め物なので、油の多い一皿より軽く済ませたいときの選択肢になります。
          </p>
        </RankingCard>

        <RankingCard rank={3} title="おつまみ焼ビーフン（小皿）" subtitle="233kcal（逸品小皿）">
          <p className="text-sm text-gray-700 leading-relaxed">
            麺類が食べたいけれどカロリーは抑えたい、というときの小皿。<Marker color="green">233kcal</Marker>と、ラーメンや焼そばの単品（700kcal超のものも）と比べて大幅に軽く収まります。
          </p>
        </RankingCard>

        <p className="mb-4">
          このほか、<Marker>本格焼餃子（3コ）243kcal、黒酢の酢豚（小皿）265kcal、広東風鶏もも肉の照り煮（小皿）291kcal</Marker>なども、小皿サイズなら300kcal前後に収まります。点心や小皿を中心に組み立てるのが、バーミヤンでカロリーを抑えるコツです。
        </p>

        <TipBox title="スープを足すなら">
          <p>温かいものでお腹を満たしたいときは<Marker>「ごろっと野菜の山海珍味薬膳スープ」（347kcal）</Marker>が選択肢。蒸し鶏の胡麻ソース（117kcal）＋海老の黒胡椒ねぎ塩炒め・小皿（149kcal）にスープを足しても、合計でおおむね600kcal前後に収まります。チャーハンや麺の単品（700kcal超）を選ぶより、小皿の組み合わせの方がカロリーを抑えやすいのが分かります。</p>
        </TipBox>

        {/* Section 3: カロリー比較 */}
        <SectionHeading id="calorie-ranking">バーミヤン カロリー比較（低い順）</SectionHeading>

        <p className="mb-4">
          バーミヤンの主要メニューを<strong>実データのカロリーが低い順</strong>に並べました。<Marker color="blue">小皿・逸品系は100〜300kcal台</Marker>と低めで、<Marker color="green">チャーハン・麺・丼・定食は700〜1,600kcal台</Marker>と一気に高くなります。
        </p>

        <CompareBar
          title="バーミヤン 主要メニュー カロリー比較（低い順）"
          metric="calorie"
          unit="kcal"
          sort="asc"
          highlightTop={5}
          items={[
            { name: "蒸し鶏の胡麻ソース", value: 117 },
            { name: "海老の黒胡椒ねぎ塩炒め（小皿）", value: 149 },
            { name: "おつまみ焼ビーフン（小皿）", value: 233 },
            { name: "本格焼餃子（3コ）", value: 243 },
            { name: "黒酢の酢豚（小皿）", value: 265 },
            { name: "ごろっと野菜の山海珍味薬膳スープ", value: 347 },
            { name: "チンジャオロース", value: 365 },
            { name: "肉野菜炒め", value: 514 },
            { name: "ホイコーロウ", value: 535 },
            { name: "武蔵野麻婆", value: 546 },
            { name: "油淋鶏", value: 661 },
            { name: "中華丼", value: 697 },
            { name: "チャーハン", value: 726 },
            { name: "バーミヤンラーメン", value: 761 },
            { name: "天津飯", value: 872 },
            { name: "五目焼そば", value: 915 },
            { name: "天津チャーハン", value: 1167 },
            { name: "チャーシューメン", value: 1610 },
          ]}
          caption="数値はたべなび掲載の実データ（kcal）。●印は低カロリー上位5品。カロリーは店舗・時期により異なる場合があります。バーミヤンはタンパク質・脂質・炭水化物（PFC）を公開していないため、カロリーのみで比較しています。"
        />

        <p className="text-xs text-gray-400 mb-8">
          ※カロリーは各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。バーミヤンはタンパク質・脂質・炭水化物の公開データがないため、本記事ではカロリーを基準に解説します。
        </p>

        <TipBox title="カロリー比較の読み解き方">
          <p>注目すべきは<Marker>小皿・点心系（117〜365kcal）と、チャーハン・麺・丼（697kcal〜）の間に大きな差がある</Marker>点。小皿・逸品を中心に組み立てれば1食を500〜600kcal前後に抑えやすい一方、チャーハンや麺を単品で頼むと700kcalを超え、定食やチャーシューメンになると1,000kcal以上になることもあります。</p>
        </TipBox>

        <ArticleImage
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=400&fit=crop"
          alt="蒸し料理や小皿が並んだ中華のテーブル"
        />

        {/* Section 4: 高カロリーメニュー */}
        <SectionHeading id="high-cal">避けたい高カロリーメニュー</SectionHeading>

        <p className="mb-4">
          チャーハン・麺・丼・定食は、ごはんや麺がメインになるため<Marker>単品でカロリーが高め</Marker>。ダイエット中は頻度を抑えるか、シェアして量を調整しましょう。
        </p>

        <WarningBox title="ダイエット中は要注意なメニュー">
          <ul className="space-y-2">
            <li><span className="font-bold">チャーシューメン（1,610kcal）</span> ─ バーミヤンの主要メニューの中でも最も高カロリーな部類。1杯でかなりのボリュームになります。</li>
            <li><span className="font-bold">天津チャーハン（1,167kcal）</span> ─ チャーハンに天津のあんが重なり、単品で1,000kcalを大きく超えます。</li>
            <li><span className="font-bold">五目焼そば（915kcal）</span> ─ 麺＋あんかけの組み合わせでボリューム満点。1人で1皿はカロリーオーバーになりがちです。</li>
            <li><span className="font-bold">天津飯（872kcal）</span> ─ ごはん＋あんで満足感は高いものの、単品でも高カロリー。</li>
            <li><span className="font-bold">チャーハン（726kcal）／中華丼（697kcal）</span> ─ 定番の麺飯系。単品でも700kcal前後になります。</li>
          </ul>
        </WarningBox>

        <WarningBox title="「定食・ランチ」はごはん込みで高カロリー">
          <p>中華満喫定食や日替わりランチは、おかず＋ごはん＋サイドがセットになるため<Marker color="green">おおむね850〜1,245kcal</Marker>と高めです（例: 肉野菜炒め定食〈ランチ〉856kcal、油淋鶏定食〈定食〉1,245kcal）。さらに餃子やラーメンが付くタイプは1,200kcalを超えることもあります。カロリーを抑えたい日は、定食ではなく<Marker>単品の小皿＋スープ</Marker>で組み立てる方が調整しやすくなります。</p>
        </WarningBox>

        {/* Mid-article CTA */}
        <CTABanner
          title="バーミヤンのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューのカロリーをすぐに確認できます"
        />

        {/* Section 5: 太りにくい食べ方・組み合わせ */}
        <SectionHeading id="tips">太りにくい食べ方・組み合わせ</SectionHeading>

        <p className="mb-4">
          バーミヤンでカロリーを抑えるコツは、<Marker>麺飯・定食を主役にしないこと</Marker>。小皿・逸品・スープを軸に組み立てると、満足感を保ちつつカロリーを抑えやすくなります。
        </p>

        <NumberedList
          items={[
            {
              title: "小皿・逸品を軸に組み立てる",
              body: "蒸し鶏の胡麻ソース（117kcal）や小皿サイズの炒め物（149〜291kcal）を中心にすれば、複数頼んでも全体のカロリーを抑えやすくなります。",
            },
            {
              title: "ごはん・麺は「足すかどうか」を意識する",
              body: "ごはん（340kcal）を足すかどうかで1食のカロリーは大きく変わります。チャーハンや定食は麺飯込みで700〜1,200kcal台になりやすいので、抑えたい日は単品＋スープにとどめるのがおすすめです。",
            },
            {
              title: "揚げ物・あんかけは頻度を調整する",
              body: "唐揚げや揚げ物、あんかけ系はカロリーが高くなりがち。食べたい日は他を軽くする、シェアするなどで量を調整しましょう。",
            },
          ]}
        />

        <TipBox title="「ごはん」を足すかどうか">
          <p>バーミヤンのごはん（340kcal）を足すと、それだけで約340kcal増えます。カロリーを抑えたい日は<Marker>ごはんなしで小皿＋スープ</Marker>の組み合わせがおすすめ。どうしても主食が欲しい場合は、量の少ない小皿料理で満足感を補うとよいでしょう。</p>
        </TipBox>

        <ComparisonTable
          headers={["組み合わせ例", "カロリー"]}
          rows={[
            ["蒸し鶏の胡麻ソース + おつまみ焼ビーフン（小皿）", "約350 kcal"],
            ["蒸し鶏の胡麻ソース + 海老の黒胡椒ねぎ塩炒め（小皿） + 薬膳スープ", "約613 kcal"],
            ["チャーハン（単品）", "約726 kcal"],
          ]}
          bestRowIndex={0}
        />

        <p className="text-xs text-gray-400 mt-2 mb-8">
          ※合計は各メニューのカロリー実データを単純合算した目安です。店舗・時期により異なる場合があります。
        </p>

        {/* Section 6: 目的別の選び方 */}
        <SectionHeading id="by-goal">目的別の選び方</SectionHeading>

        <p className="mb-6">
          「とにかく軽くしたい日」「しっかり食べたい日」など、目的別におすすめのカロリーの目安と選び方を整理しました。
        </p>

        <SubSectionHeading>とことんカロリーを抑えたい日（〜400kcal前後）</SubSectionHeading>
        <p className="mb-6">
          小皿だけで完結させるのがコツ。<Marker>蒸し鶏の胡麻ソース（117kcal）＋おつまみ焼ビーフン・小皿（233kcal）で約350kcal</Marker>。あっさり食べたい日や、夜遅い時間の食事に向いています。
        </p>

        <SubSectionHeading>軽め・でも満足感がほしい日（500〜650kcal前後）</SubSectionHeading>
        <p className="mb-6">
          小皿を2〜3品組み合わせるパターン。<Marker color="blue">蒸し鶏の胡麻ソース（117kcal）＋海老の黒胡椒ねぎ塩炒め・小皿（149kcal）＋薬膳スープ（347kcal）で約613kcal</Marker>。温かいスープで満足感を補いつつ、麺飯の単品（700kcal超）より軽く収まります。
        </p>

        <SubSectionHeading>しっかり食べたい日（炒め物を主役に）</SubSectionHeading>
        <p className="mb-8">
          炒め物を主役にするなら<Marker color="green">チンジャオロース（365kcal）や肉野菜炒め（514kcal）</Marker>が選択肢。ごはん（340kcal）を足すと全体が高くなるので、足すかどうかはその日の活動量に合わせて判断しましょう。チャーハンや定食を選ぶより、炒め物単品＋少量のごはんの方がカロリーを調整しやすくなります。
        </p>

        <TipBox title="同じ中華ファミレス・専門店と比べたいとき">
          <p>中華のカロリー感をつかみたいなら、<Link href="/guide/ohsho-diet" className="text-sky-600 hover:underline">餃子の王将のダイエットメニュー</Link>や、<Link href="/guide/family-restaurant-diet" className="text-sky-600 hover:underline">ファミレスダイエット比較</Link>も参考になります。外食全般の考え方は<Link href="/guide/eating-out-diet" className="text-sky-600 hover:underline">外食ダイエット完全ガイド</Link>、糖質を抑えたい場合は<Link href="/guide/low-carb-eating-out" className="text-sky-600 hover:underline">糖質制限×外食ガイド</Link>もあわせてどうぞ。バーミヤンの全メニューは<Link href="/chains/bamiyan" className="text-sky-600 hover:underline">バーミヤンのカロリー一覧</Link>、<Link href="/chains/bamiyan/low-calorie" className="text-sky-600 hover:underline">低カロリーメニュー</Link>・<Link href="/chains/bamiyan/diet" className="text-sky-600 hover:underline">ダイエット向けメニュー</Link>から絞り込めます。</p>
        </TipBox>

        {/* まとめ */}
        <SectionHeading id="summary">まとめ</SectionHeading>

        <p className="mb-6">
          バーミヤンは小皿・逸品が充実しているぶん、選び方しだいでカロリーを大きくコントロールできるチェーンです。この記事のポイントを整理しました。
        </p>

        <ArticleSummary
          points={[
            "バーミヤンはPFC（タンパク質・脂質・炭水化物）が非公開のため、本記事はカロリー実データを基準に解説",
            "低カロリーなのは小皿・逸品系（蒸し鶏の胡麻ソース117kcal、海老の黒胡椒ねぎ塩炒め・小皿149kcalなど）",
            "チャーハン726kcal・天津飯872kcal・チャーシューメン1,610kcalなど、麺飯系は単品でも高カロリー",
            "定食・ランチはごはん込みで850〜1,245kcalと高め。抑えたい日は単品の小皿＋スープで組み立てる",
            "ごはん（340kcal）を足すかどうかで1食のカロリーは大きく変わる",
          ]}
        />

        <CheckList
          items={[
            "蒸し鶏の胡麻ソース（117kcal）や小皿の炒め物を軸にカロリーを抑える",
            "チャーハン・麺・丼・定食は700〜1,600kcalと高め。頻度と量に注意",
            "小皿2〜3品＋スープなら、麺飯の単品より軽く1食をまとめやすい",
            "ごはん（340kcal）を抜くだけで約340kcalをカットできる",
            "PFC値はバーミヤン公式が非公開のため、カロリーを基準に選ぶ",
          ]}
        />

        <p className="text-xs text-gray-400 mt-4 mb-8">
          ※カロリーは各チェーン公式情報をもとに記載。メニュー改定・店舗により異なる場合があります。最新の情報は<a href="https://www.skylark.co.jp/bamiyan/menu/" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">バーミヤン公式サイト</a>でご確認ください。
        </p>

        {/* ServiceOffers（FAQ直前） */}
        <ServiceOffers tag="diet" />

        {/* FAQ */}
        <FAQSection
          slug="bamiyan-diet"
          items={[
            {
              q: "バーミヤンで一番カロリーが低いメニューは？",
              a: "ドリンクやトッピングを除く一品料理では「蒸し鶏の胡麻ソース」（117kcal）が筆頭です。あっさりしていて食べ応えもあり、他の小皿やスープを足してもカロリーを抑えやすいメニューです。次いで「海老の黒胡椒ねぎ塩炒め（小皿）」（149kcal）、「おつまみ焼ビーフン（小皿）」（233kcal）などが低カロリーです。",
            },
            {
              q: "バーミヤンのチャーハンやラーメンはダイエット中NG？",
              a: "麺飯系は単品でも高カロリーになりがちです。チャーハン（726kcal）、バーミヤンラーメン（761kcal）、天津飯（872kcal）、チャーシューメン（1,610kcal）など、いずれも控えめとは言えません。食べるなら他を軽くする、シェアして量を減らすなどの工夫がおすすめです。",
            },
            {
              q: "バーミヤンでカロリーを抑えたいときの組み合わせは？",
              a: "小皿・逸品を中心に組み立てるのがコツです。例として、①「蒸し鶏の胡麻ソース（117kcal）+ おつまみ焼ビーフン・小皿（233kcal）」で約350kcal、②「蒸し鶏の胡麻ソース（117kcal）+ 海老の黒胡椒ねぎ塩炒め・小皿（149kcal）+ ごろっと野菜の山海珍味薬膳スープ（347kcal）」で約613kcal。麺飯の単品（700kcal超）より軽く1食をまとめられます。",
            },
            {
              q: "バーミヤンの定食はダイエット向き？",
              a: "中華満喫定食や日替わりランチは、おかず＋ごはん＋サイドがセットになるため、おおむね850〜1,245kcalと高めです。さらに餃子やラーメンが付くタイプは1,200kcalを超えることもあります。カロリーを抑えたい日は、定食ではなく単品の小皿＋スープで組み立てる方が調整しやすくなります。",
            },
            {
              q: "バーミヤンのメニューはタンパク質や脂質（PFC）が分かる？",
              a: "バーミヤンはメニューごとのタンパク質・脂質・炭水化物（PFC）を公式に公開していません。そのため本記事ではカロリーの実データだけを基準に解説しています。PFCの数値での比較はできないため、まずはカロリーを目安に選ぶのがおすすめです。",
            },
            {
              q: "バーミヤンでごはんを抜くとどのくらいカロリーが減る？",
              a: "バーミヤンのごはんは340kcalです。定食やセットでごはんを抜く（または減らす）と、その分のカロリーをまるごとカットできます。炒め物などのおかず単品にすれば、麺飯セットより1食を大きく抑えられます。",
            },
          ]}
        />

        {/* 末尾CTA */}
        <CTABanner
          title="バーミヤンのメニューをカロリーで検索"
          subtitle="たべなびで32チェーン・6,000品以上の栄養データを無料検索"
        />

        <AuthorBio />
        <UpdateHistory
          entries={[
            {
              date: "2026-06-25",
              note: "初稿公開。バーミヤンはタンパク質・脂質・炭水化物（PFC）を公式に公開していないため、カロリーの実データのみを基準に低カロリー／高カロリーメニューと選び方を整理",
            },
          ]}
        />
        <ArticleFooter currentSlug="bamiyan-diet" />

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
