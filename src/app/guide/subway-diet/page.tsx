import Link from "next/link";
import type { Metadata } from "next";
import {
  AuthorityBadge,
  ArticleHero,
  TableOfContents,
  SectionHeading,
  SubSectionHeading,
  NutritionCard,
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
    "【2026年最新】サブウェイダイエットガイド｜低カロリー＆高タンパクサンドの選び方 | たべなび",
  description:
    "サブウェイのカロリーランキング、ダイエット中におすすめの低カロリーサンド、カスタマイズ術を徹底解説。ローストチキン282kcal・P22.5g、ターキーブレスト262kcalなど具体的な栄養データで紹介。",
  keywords: [
    "サブウェイ ダイエット",
    "サブウェイ カロリー",
    "サブウェイ 低カロリー",
    "サブウェイ タンパク質",
    "SUBWAY ダイエット",
  ],
  openGraph: {
    title: "【2026年最新】サブウェイダイエットガイド｜低カロリー＆高タンパクサンドの選び方",
    description:
      "サブウェイのカロリーランキング、ダイエット中におすすめの低カロリーサンド、カスタマイズ術を徹底解説。",
    url: "https://www.tabenavi.jp/guide/subway-diet",
    type: "article",
  },
};

// Static JSON-LD for SEO structured data - contains only hardcoded trusted content
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】サブウェイダイエットガイド｜低カロリー＆高タンパクサンドの選び方",
  description:
    "サブウェイのカロリーランキング、ダイエット中におすすめの低カロリーサンド、カスタマイズ術を徹底解説。",
  datePublished: "2026-03-19",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/subway-diet",
};

const tocItems = [
  { id: "why-subway", label: "サブウェイがダイエットに最適な理由" },
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめサンド" },
  { id: "customize", label: "カスタマイズ術" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "summary", label: "まとめ" },
];

export default function SubwayDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="サブウェイダイエットガイド"
        subtitle="低カロリー＆高タンパクサンドの選び方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&h=400&fit=crop"
        breadcrumb="サブウェイダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="subway-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          サブウェイは「ダイエットに最も適した外食チェーン」として世界的に知られています。その理由は明確で、<Marker>野菜たっぷり・高タンパク・カスタマイズ自在</Marker>という3つの強みがダイエットの成功に直結するからです。
        </p>
        <p className="mb-4">
          特に<Marker color="blue">ローストチキン（282kcal / P22.5g）やターキーブレスト（262kcal / P20.8g）</Marker>は、300kcal以下で20g以上のタンパク質を摂取できる驚異的なメニュー。これは他のファストフードチェーンでは実現が難しい数値です。
        </p>
        <p className="mb-8">
          この記事では、サブウェイのメニューをカロリー順にランキングし、ダイエット効果を最大化するカスタマイズ術までPFCデータとともに徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: サブウェイがダイエットに最適な理由 */}
        <section className="mb-16">
          <SectionHeading id="why-subway">サブウェイがダイエットに最適な理由</SectionHeading>

          <p className="mb-4">
            数あるファストフードチェーンの中でも、<Marker>サブウェイがダイエットに最も向いている</Marker>と言い切れる理由は大きく3つあります。
          </p>

          <NumberedList
            items={[
              {
                title: "野菜が無料で増量できる",
                body: "レタス・トマト・ピーマン・オニオン・オリーブなど、すべての野菜を無料で増量可能。野菜を「上限まで」増やせば、食物繊維とビタミンを追加カロリーなしで大幅に摂取できます。",
              },
              {
                title: "300kcal以下のサンドが豊富",
                body: "ローストチキン（282kcal）、ターキーブレスト（262kcal）、ベジー（230kcal）など、300kcal以下のメニューが多数。他チェーンのバーガーが400〜600kcalであることを考えると圧倒的に低カロリーです。",
              },
              {
                title: "パン・ソース・トッピングを選べる",
                body: "パンの種類でカロリーが変わり、ソースもノンオイル系を選べば脂質を大幅カット。自分だけの「ダイエット専用サンド」をカスタマイズできるのがサブウェイ最大の強みです。",
              },
            ]}
          />

          <TipBox title="サブウェイ vs マクドナルド カロリー比較">
            <p>サブウェイのローストチキン（282kcal / P22.5g）は、マクドナルドのチキンフィレオ（465kcal / P18.8g）と比べて<Marker>183kcal低く、タンパク質は3.7g多い</Marker>。同じ「チキンサンド」でもこれだけの差が生まれます。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=800&h=400&fit=crop" alt="新鮮な野菜がたっぷり挟まれたサブウェイ風サンドイッチ" />
        </section>

        {/* Section 2: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">サブウェイ カロリーランキング</SectionHeading>

          <p className="mb-4">
            サブウェイのレギュラーサンド（レギュラーサイズ）をカロリーの低い順にランキングしました。<Marker color="blue">ほとんどのメニューが200〜400kcal台</Marker>と、ファストフードとしては驚くほど低カロリーです。
          </p>

          <NutritionTable
            items={[
              { name: "ベジー", calories: 230, protein: 8.2, fat: 3.5, carbs: 42.8, highlight: true },
              { name: "ターキーブレスト", calories: 262, protein: 20.8, fat: 4.2, carbs: 43.5, highlight: true },
              { name: "ローストチキン", calories: 282, protein: 22.5, fat: 5.8, carbs: 42.2, highlight: true },
              { name: "チキンブレスト（ハーブ）", calories: 298, protein: 21.2, fat: 5.5, carbs: 44.8 },
              { name: "生ハム＆マスカルポーネ", calories: 312, protein: 14.5, fat: 10.2, carbs: 42.5 },
              { name: "BLT", calories: 340, protein: 15.8, fat: 12.5, carbs: 42.2 },
              { name: "てり焼きチキン", calories: 352, protein: 18.5, fat: 8.8, carbs: 52.5 },
              { name: "えびアボカド", calories: 328, protein: 14.2, fat: 10.5, carbs: 46.8 },
              { name: "ローストビーフ", calories: 308, protein: 19.8, fat: 6.5, carbs: 44.2 },
              { name: "チリチキン", calories: 322, protein: 20.2, fat: 6.8, carbs: 46.5 },
              { name: "アボカドベジー", calories: 292, protein: 8.8, fat: 8.2, carbs: 46.2 },
              { name: "たまご", calories: 378, protein: 16.2, fat: 15.8, carbs: 42.5 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-8">
            ※レギュラーサイズ・ウィートブレッド・ドレッシングなしの数値。おすすめマークは300kcal以下の高タンパクメニューに表示。
          </p>

          <TipBox title="カロリーランキングの読み解き方">
            <p>サブウェイの特徴は<Marker>ほぼ全メニューが400kcal以下</Marker>に収まっていること。他チェーンでは「低カロリーメニュー」を探す必要がありますが、サブウェイでは「どれを選んでも比較的低カロリー」という安心感があります。差がつくのはタンパク質と脂質。チキン系（P20g以上）を選ぶのがダイエットの鉄則です。</p>
          </TipBox>
        </section>

        {/* Section 3: おすすめサンド */}
        <section className="mb-16">
          <SectionHeading id="recommended">ダイエット中のおすすめサンド</SectionHeading>

          <p className="mb-6">
            サブウェイでダイエット中に積極的に選びたいサンドをランキング形式で紹介します。<Marker>カロリー・タンパク質・脂質のバランスが優れたメニュー</Marker>を厳選しました。
          </p>

          <RankingCard rank={1} title="ローストチキン" subtitle="282kcal / P22.5g / F5.8g / C42.2g / ¥590">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              サブウェイの<Marker>ダイエット最強メニュー</Marker>。282kcalでP22.5g、さらに脂質わずか5.8gという驚異的なPFCバランスです。タンパク質1gあたりのカロリーはわずか12.5kcalで、プロテインドリンク並みの効率。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              ローストされた鶏むね肉は柔らかく、野菜との相性も抜群。毎日食べても飽きにくい味わいで、ダイエットの定番メニューとして最適です。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="ターキーブレスト" subtitle="262kcal / P20.8g / F4.2g / C43.5g / ¥590">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="blue">サブウェイで最も低カロリーな肉系サンド</Marker>。262kcalは肉入りサンドとしては圧倒的な低さ。脂質4.2gもサブウェイ最少クラスです。七面鳥の胸肉は高タンパク・低脂質の代表的な食材で、アメリカではダイエット食の定番。さっぱりした味わいなので、野菜多めのカスタマイズと好相性です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="ローストビーフ" subtitle="308kcal / P19.8g / F6.5g / C44.2g / ¥690">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">赤身肉の旨味を楽しみながら308kcal・P19.8g</Marker>。牛肉には鶏肉にはない鉄分や亜鉛が豊富に含まれており、ダイエット中に不足しがちなミネラル補給に最適。脂質6.5gと控えめで、満足感の高いサンドです。
            </p>
          </RankingCard>

          <SubSectionHeading>おすすめの組み合わせセット</SubSectionHeading>

          <NutritionCard
            name="ローストチキン + ミネストローネ + 野菜ジュース"
            chain="サブウェイ"
            calories={412}
            protein={28.5}
            fat={7.2}
            carbs={62.8}
            price={990}
            recommended
          />

          <p className="mb-8 mt-4">
            <Marker>412kcalでP28.5g、脂質わずか7.2g</Marker>という理想的なダイエットランチ。ミネストローネ（130kcal）で温かいスープも楽しめ、満足感も十分。サブウェイでのダイエットランチの完成形です。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1540914124281-342587941389?w=800&h=400&fit=crop" alt="カラフルな野菜が詰まったヘルシーなサンドイッチ" />

          <CTABanner
            title="サブウェイのカロリーをサクッと検索"
            subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
          />
        </section>

        {/* Section 4: カスタマイズ術 */}
        <section className="mb-16">
          <SectionHeading id="customize">ダイエット効果を最大化するカスタマイズ術</SectionHeading>

          <p className="mb-6">
            サブウェイの真価はカスタマイズにあります。<Marker>パン・野菜・ドレッシングの選び方で同じサンドでもカロリーが100kcal以上変わる</Marker>ことも。ダイエット効果を最大化するカスタマイズ術を紹介します。
          </p>

          <SubSectionHeading>パンの選び方</SubSectionHeading>
          <p className="mb-4">
            サブウェイのパンは種類によってカロリーが異なります。
          </p>

          <ComparisonTable
            headers={["パンの種類", "カロリー", "特徴"]}
            rows={[
              ["ウィート", "169 kcal", "全粒粉入りで食物繊維が多い"],
              ["ホワイト", "172 kcal", "定番のホワイトブレッド"],
              ["セサミ", "179 kcal", "ゴマの風味が特徴"],
              ["ハニーオーツ", "185 kcal", "はちみつ＋オーツ麦"],
              ["フラットブレッド", "210 kcal", "薄焼きだがカロリー高め"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6">
            <Marker>ダイエット中はウィートブレッドが最適</Marker>。169kcalと最も低カロリーで、全粒粉の食物繊維が血糖値の急上昇を抑えてくれます。フラットブレッドは一見ヘルシーに見えますが、実は最もカロリーが高い点に注意。
          </p>

          <SubSectionHeading>野菜の増量テクニック</SubSectionHeading>
          <p className="mb-6">
            サブウェイでは<Marker color="blue">全ての野菜が無料で増量可能</Marker>。「野菜全部多めで」と伝えるだけでOKです。特におすすめの増量野菜は、レタス（食物繊維）、トマト（リコピン）、ピーマン（ビタミンC）の3つ。カロリーをほとんど増やさずに満足感と栄養価を大幅にアップできます。
          </p>

          <SubSectionHeading>ドレッシングの選び方</SubSectionHeading>
          <p className="mb-6">
            ドレッシングはカロリーの差が大きいポイント。<Marker color="green">マヨネーズ（78kcal）を避け、わさび醤油ソース（18kcal）やバルサミコソース（5kcal）</Marker>を選ぶだけで60〜70kcalカットできます。
          </p>

          <ComparisonTable
            headers={["ドレッシング", "カロリー", "脂質"]}
            rows={[
              ["バルサミコソース", "5 kcal", "0.0g"],
              ["わさび醤油ソース", "18 kcal", "0.2g"],
              ["オイル＆ビネガー（塩・コショウ）", "25 kcal", "2.5g"],
              ["ハニーマスタード", "42 kcal", "1.8g"],
              ["シーザードレッシング", "62 kcal", "6.2g"],
              ["マヨネーズタイプ", "78 kcal", "8.5g"],
            ]}
            bestRowIndex={0}
          />

          <SubSectionHeading>究極のダイエットカスタマイズ</SubSectionHeading>
          <p className="mb-4">
            最もダイエット効果の高いカスタマイズは<Marker>「ローストチキン＋ウィートブレッド＋野菜全部多め＋わさび醤油ソース」</Marker>。これで約270kcal / P22g / F4.5g / C40gという、ファストフードとは思えない栄養バランスが実現します。
          </p>

          <NutritionCard
            name="究極のダイエットカスタマイズ（ローストチキン）"
            chain="サブウェイ"
            calories={270}
            protein={22.0}
            fat={4.5}
            carbs={40.0}
            price={590}
            recommended
          />

          <p className="mb-4 mt-4">
            もう1つの低脂質カスタマイズもおすすめです。
          </p>

          <NutritionCard
            name="ターキーブレスト + ウィート + バルサミコ + 野菜多め"
            chain="サブウェイ"
            calories={255}
            protein={20.8}
            fat={3.8}
            carbs={41.2}
            price={590}
            recommended
          />

          <p className="mb-8 mt-4">
            <Marker color="blue">255kcalでP20.8g、脂質わずか3.8g</Marker>。ファストフードでありながらプロテインバー以上の栄養効率を誇ります。バルサミコソースの5kcalがほぼゼロカロリーなので、ドレッシングを気にせず味わえるのもポイントです。
          </p>

          <SubSectionHeading>トッピングの活用</SubSectionHeading>
          <p className="mb-6">
            サブウェイではチーズやベーコンなどの有料トッピングも選べますが、ダイエット中は注意が必要。<Marker color="green">ナチュラルスライスチーズ（+40kcal / P2.5g）は許容範囲</Marker>ですが、クリームチーズ（+90kcal）やベーコン（+60kcal）は脂質が大幅に増えるため避けましょう。
          </p>

          <TipBox title="「サラダ」メニューの活用">
            <p>サブウェイではサンドの中身をパンなしの「サラダ」として注文可能。<Marker>パンのカロリー（約170kcal）を丸ごとカット</Marker>できるため、超低カロリー（約110kcal / P22g）の食事が実現。糖質制限中の方には特におすすめです。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop" alt="色鮮やかな野菜サラダのイメージ" />
        </section>

        {/* Section 5: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            サブウェイは全体的に低カロリーですが、<Marker>選び方やカスタマイズ次第でカロリーが跳ね上がるケース</Marker>があります。以下のポイントに注意しましょう。
          </p>

          <WarningBox title="ダイエット中に避けるべきポイント">
            <ul className="space-y-2">
              <li><span className="font-bold">たまごサンド（378kcal / F15.8g）</span> ─ 脂質15.8gはサブウェイの中で最も高い。同じ価格帯ならローストチキンの方がP+6g・F-10gと圧倒的に優秀。</li>
              <li><span className="font-bold">マヨネーズ系ドレッシング</span> ─ マヨネーズ（78kcal）を追加するだけでサンド全体のカロリーが約1.3倍に。必ずノンオイル系を選びましょう。</li>
              <li><span className="font-bold">フットロングサイズ</span> ─ レギュラーの2倍サイズ＝カロリーも2倍。ローストチキンでも564kcalに。1人で食べきらず、シェアするか翌日に回しましょう。</li>
              <li><span className="font-bold">クッキー（約200kcal）</span> ─ 1枚200kcalでタンパク質はほぼゼロ。セットで付いてきても我慢するのがベスト。</li>
              <li><span className="font-bold">ポテト（約270kcal）</span> ─ サイドメニューのポテトは270kcalで栄養価も低い。追加するならミネストローネ（130kcal）を選びましょう。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["注文パターン", "カロリー", "タンパク質", "脂質"]}
            rows={[
              ["ローストチキン + わさび醤油 + 野菜多め", "270 kcal", "22.0g", "4.5g"],
              ["たまご + マヨネーズ + ポテト", "726 kcal", "18.5g", "32.8g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-6 text-sm text-gray-700">
            同じサブウェイでも、<Marker>注文の仕方で270kcal vs 726kcalと約2.7倍の差</Marker>が生まれます。「サブウェイだから安心」と油断せず、メニューとカスタマイズの選択が重要です。
          </p>

          <TipBox title="BLT（340kcal）は意外と要注意">
            <p>BLTは「ベーコン・レタス・トマト」のシンプルな構成で健康的に見えますが、<Marker>ベーコンの脂質12.5gが全体を引き上げて340kcal</Marker>に。タンパク質も15.8gとローストチキン（P22.5g）より7g少ない。同じ価格帯なら迷わずローストチキンを選びましょう。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop" alt="新鮮なサラダとヘルシーなランチのイメージ" />

          <CTABanner
            title="たべなびで栄養管理を始めよう"
            subtitle="20チェーン・500メニューの栄養データ、全部無料"
          />
        </section>

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            サブウェイはダイエット中の外食先として最も優れたチェーンの一つです。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "ローストチキン（282kcal / P22.5g / F5.8g）がダイエット最強メニュー",
              "ターキーブレスト（262kcal / P20.8g）は最も低カロリーな肉系サンド",
              "野菜は全て無料で増量可能。「野菜全部多め」で栄養価UP",
              "パンはウィート（169kcal）を選択。フラットブレッドは避ける",
              "ドレッシングはわさび醤油（18kcal）やバルサミコ（5kcal）を選ぶ",
              "マヨネーズ・クッキー・フットロングの3つを避ければ低カロリーを維持できる",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※価格・栄養成分は店舗により異なる場合があります。最新の情報はサブウェイ公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="subway-diet" />

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
