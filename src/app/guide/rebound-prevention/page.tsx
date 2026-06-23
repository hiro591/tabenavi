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
  NumberedList,
  CheckList,
  ComparisonTable,
  ArticleFooter,
  ArticleImage,
  QuickAnswer,
  FAQSection,
  UpdateHistory,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.tabenavi.jp/guide/rebound-prevention" },
  title:
    "【2026年最新】リバウンドしない方法｜ダイエット後に体重を維持する科学的アプローチ | たべなび",
  description:
    "リバウンドしないダイエット方法を科学的根拠に基づいて解説。代謝適応やホルモン変化のメカニズムから、体重維持のための5つの具体的アプローチ、外食生活でのリバウンド防止策まで完全網羅。",
  keywords: [
    "リバウンド しない",
    "ダイエット後 維持",
    "リバウンド 防止",
    "リバウンド しない方法",
    "ダイエット リバウンド 原因",
    "体重維持 方法",
    "メンテナンスカロリー",
  ],
  openGraph: {
    title:
      "【2026年最新】リバウンドしない方法｜ダイエット後に体重を維持する科学的アプローチ",
    description:
      "ダイエッターの80%がリバウンドする現実。科学的根拠に基づくリバウンド防止の5つの方法と外食での実践法を解説。",
    url: "https://www.tabenavi.jp/guide/rebound-prevention",
    type: "article",
  },
};

// Static, trusted JSON-LD structured data for SEO (no user input)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】リバウンドしない方法｜ダイエット後に体重を維持する科学的アプローチ",
  description:
    "リバウンドしないダイエット方法を科学的根拠に基づいて解説。代謝適応やホルモン変化のメカニズムから体重維持の具体的アプローチまで。",
  datePublished: "2026-03-25",
  dateModified: "2026-06-23",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/rebound-prevention",
};

const tocItems = [
  { id: "why-rebound", label: "なぜリバウンドするのか" },
  { id: "rebound-stats", label: "リバウンド率の現実" },
  { id: "five-methods", label: "リバウンドしない5つの方法" },
  { id: "eating-out", label: "外食生活でリバウンドを防ぐコツ" },
  { id: "maintenance-meals", label: "維持期の食事例" },
  { id: "summary", label: "まとめ" },
];

export default function ReboundPreventionPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="リバウンドしない方法"
        subtitle="ダイエット後に体重を維持する科学的アプローチ【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop"
        breadcrumb="リバウンド防止ガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="rebound-prevention">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年6月23日 | 読了目安: 12分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          せっかく頑張って痩せたのに、気がつけば元の体重に戻っていた。そんな「リバウンド」の経験はありませんか？実は<Marker>ダイエット経験者の約80%がリバウンドを経験している</Marker>というデータがあります。
        </p>
        <p className="mb-4">
          しかし、リバウンドは避けられない運命ではありません。科学的にメカニズムを理解し、正しいアプローチを取れば、ダイエット後の体重を長期的に維持することは十分に可能です。
        </p>
        <p className="mb-10">
          この記事では、リバウンドが起こる<Marker color="blue">科学的な原因（代謝適応・ホルモン変化）</Marker>から、具体的な防止策5つ、さらに外食生活でもリバウンドしないための実践的なコツまで徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop"
          alt="健康的な体重管理をイメージしたフィットネスの写真"
        />

        {/* Section 1: なぜリバウンドするのか */}
        <section className="mb-16">
                  <QuickAnswer
          question={"ダイエット後のリバウンドを防ぐ方法は？"}
          answer={"リバウンドは代謝適応・ホルモン変化による生理現象です。防止には月1～2kgの緩やかな減量、タンパク質を体重×1.6～2.0g摂取、食事記録の継続、メンテナンスカロリーの把握、計画的なチートデイが効果的。正しい維持戦略で5年後の体重維持成功率は40%まで向上します。"}
        />

        <SectionHeading id="why-rebound">
            なぜリバウンドするのか（科学的メカニズム）
          </SectionHeading>

          <p className="mb-6">
            リバウンドは「意志が弱いから」起こるのではありません。人間の体には体重を一定に保とうとする<Marker>ホメオスタシス（恒常性維持機能）</Marker>が備わっており、急激な体重減少に対して複数の防衛反応を起こします。
          </p>

          <SubSectionHeading>1. 代謝適応（Metabolic Adaptation）</SubSectionHeading>
          <p className="mb-4">
            ダイエットで摂取カロリーを制限すると、体は「飢餓状態」と判断し、基礎代謝を下げてエネルギー消費を抑えようとします。これを<Marker color="blue">代謝適応（Adaptive Thermogenesis）</Marker>と呼びます。
          </p>
          <p className="mb-4">
            例えば、基礎代謝が1,500kcalの方が厳しいカロリー制限を行うと、体は基礎代謝を1,200~1,300kcal程度まで落とすことがあります。この代謝低下は<Marker>体重が減った分だけでは説明できない「余分な」低下</Marker>であり、ダイエット終了後も数ヶ月~1年以上続くことが研究で明らかになっています。
          </p>

          <ComparisonTable
            headers={["状態", "基礎代謝", "1日消費カロリー", "差分"]}
            rows={[
              ["ダイエット前（70kg）", "1,500 kcal", "2,100 kcal", "基準"],
              ["ダイエット中（60kg）", "1,250 kcal", "1,700 kcal", "-400 kcal"],
              ["ダイエット後（60kg維持）", "1,350 kcal", "1,850 kcal", "-250 kcal"],
              ["理論値（60kgの場合）", "1,420 kcal", "1,950 kcal", "-150 kcal"],
            ]}
            bestRowIndex={3}
          />

          <TipBox title="代謝適応の実例">
            <p>
              アメリカのリアリティ番組「The Biggest Loser」の参加者を追跡した研究では、番組終了6年後も<Marker>基礎代謝が平均500kcal低下したまま</Marker>だったことが報告されています（Fothergill et al., 2016）。急激なダイエットほど代謝適応が大きくなる傾向があります。
            </p>
          </TipBox>

          <SubSectionHeading>2. ホルモンバランスの変化</SubSectionHeading>
          <p className="mb-4">
            ダイエットにより、食欲を制御する2つの重要なホルモンが変化します。
          </p>

          <NumberedList
            items={[
              {
                title: "レプチン（満腹ホルモン）の減少",
                body: "脂肪細胞から分泌されるレプチンは、脳に「十分なエネルギーがある」と伝える役割を持ちます。体脂肪が減るとレプチン分泌量が低下し、常に空腹感を感じやすくなります。研究によると、体重を10%減少させるとレプチン値は約50%低下します。",
              },
              {
                title: "グレリン（空腹ホルモン）の増加",
                body: "胃から分泌されるグレリンは空腹感を引き起こすホルモンです。ダイエット中はグレリンの分泌量が増加し、食欲が強まります。この状態はダイエット終了後も1年以上持続することが確認されています。",
              },
              {
                title: "コルチゾール（ストレスホルモン）の上昇",
                body: "厳しいカロリー制限はストレスとなり、コルチゾールの分泌が増加します。コルチゾールは脂肪の蓄積（特に内臓脂肪）を促進し、筋肉の分解を加速させます。",
              },
            ]}
          />

          <SubSectionHeading>3. 心理的要因</SubSectionHeading>
          <p className="mb-4">
            科学的なメカニズムに加え、心理的な要因もリバウンドの大きな原因です。
          </p>
          <WarningBox title="リバウンドを引き起こす心理パターン">
            <p className="mb-2">
              <strong>「解禁」マインド:</strong> 目標達成後に「もう頑張らなくていい」と制限を全て外してしまう。特にダイエット中に我慢していた食品を一気に食べる傾向。
            </p>
            <p className="mb-2">
              <strong>白黒思考:</strong> 「完璧に守れないなら意味がない」という思考。少しの逸脱が暴食につながる。
            </p>
            <p>
              <strong>ダイエット疲れ:</strong> 長期間の制限による精神的な疲弊。意思決定疲労により食事の質が低下する。
            </p>
          </WarningBox>
        </section>

        {/* Section 2: リバウンド率の現実 */}
        <section className="mb-16">
          <SectionHeading id="rebound-stats">
            リバウンド率の現実
          </SectionHeading>

          <p className="mb-6">
            リバウンドに関する統計データは厳しい現実を突きつけます。しかし、<Marker>データを知ることで、より効果的な対策を打つことができます</Marker>。
          </p>

          <ComparisonTable
            headers={["期間", "リバウンド率", "体重回復量"]}
            rows={[
              ["ダイエット終了1年後", "約65%", "減量分の50%以上を回復"],
              ["ダイエット終了2年後", "約75%", "減量分の70%以上を回復"],
              ["ダイエット終了5年後", "約80~95%", "減量前の体重に戻る or 超える"],
            ]}
          />

          <p className="mb-4">
            米国国立衛生研究所（NIH）のメタ分析によると、<Marker color="blue">従来型のダイエット（カロリー制限のみ）では5年後に95%がリバウンドする</Marker>と報告されています。ただし、これは「正しい維持戦略を持たない場合」のデータです。
          </p>

          <TipBox title="リバウンドしにくいダイエット法のデータ">
            <p className="mb-2">
              一方で、以下の条件を満たしたダイエッターは<Marker color="green">5年後も体重維持に成功する確率が約40%</Marker>に向上します。
            </p>
            <p className="mb-1">- 月2~3kgのペースで緩やかに減量</p>
            <p className="mb-1">- 週3回以上の運動習慣</p>
            <p className="mb-1">- 食事記録の継続</p>
            <p>- 明確なメンテナンス期間の設定</p>
          </TipBox>

          <p className="mb-4">
            重要なのは、<Marker>ダイエットの「終わり方」が結果を大きく左右する</Marker>ということです。減量期間と同じくらい、その後の維持期間に注力することが成功の鍵です。
          </p>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop"
          alt="バランスの取れた健康的な食事の写真"
        />

        {/* Section 3: リバウンドしない5つの方法 */}
        <section className="mb-16">
          <SectionHeading id="five-methods">
            リバウンドしない5つの方法
          </SectionHeading>

          <p className="mb-6">
            科学的根拠に基づいた、リバウンドを防止するための<Marker>5つの具体的なアプローチ</Marker>をご紹介します。
          </p>

          <SubSectionHeading>方法1: 急激に減らさない（月1~3kgペース）</SubSectionHeading>
          <p className="mb-4">
            リバウンド防止の最も重要な原則は「<Marker>急激に体重を落とさない</Marker>」ことです。1ヶ月に体重の5%以上を落とすと、代謝適応が激しくなり、筋肉量も大幅に減少します。
          </p>

          <ComparisonTable
            headers={["減量ペース", "代謝適応", "筋肉維持", "リバウンドリスク"]}
            rows={[
              ["月0.5~1kg", "最小限", "良好", "低い"],
              ["月1~2kg", "軽度", "概ね良好", "やや低い"],
              ["月2~3kg", "中程度", "やや減少", "中程度"],
              ["月4kg以上", "重度", "大幅に減少", "非常に高い"],
            ]}
            bestRowIndex={1}
          />

          <p className="mb-4">
            理想的なペースは<Marker color="blue">月1~2kg（週250~500gペース）</Marker>です。これは1日あたり約250~500kcalのカロリー不足で達成でき、代謝適応を最小限に抑えながら脂肪を落とせる最適なゾーンです。
          </p>

          <TipBox title="具体的な計算例">
            <p className="mb-2">
              体重65kgの方が月2kg減らす場合:
            </p>
            <p className="mb-1">- 脂肪1kgは約7,200kcal</p>
            <p className="mb-1">- 月2kg = 14,400kcal / 30日 = <Marker>1日あたり480kcalの赤字</Marker></p>
            <p>- 1日の消費カロリーが2,000kcalなら、1,520kcal程度の食事で達成可能</p>
          </TipBox>

          <SubSectionHeading>方法2: タンパク質を体重x1.6~2.0g摂取する</SubSectionHeading>
          <p className="mb-4">
            ダイエット中およびダイエット後の体重維持において、<Marker>タンパク質の摂取量は最も重要な栄養素</Marker>です。十分なタンパク質は筋肉の維持・増加を助け、基礎代謝の低下を防ぎます。
          </p>

          <NumberedList
            items={[
              {
                title: "筋肉量の維持で代謝低下を防ぐ",
                body: "筋肉1kgあたり約13kcal/日のエネルギーを消費します。10kgの減量で筋肉を2kg失えば、基礎代謝が26kcal低下。年間に換算すると約9,500kcal（脂肪1.3kg分）の差になります。",
              },
              {
                title: "食事誘発性熱産生（DIT）が高い",
                body: "タンパク質は消化・吸収に摂取カロリーの約20~30%を消費します。炭水化物は5~10%、脂質は0~3%。タンパク質が多い食事は、同じカロリーでもより多くのエネルギーを消費します。",
              },
              {
                title: "満腹感が持続する",
                body: "タンパク質は消化に時間がかかり、GLP-1やPYYなどの満腹ホルモンの分泌を促進します。結果として間食を抑え、総摂取カロリーの自然な低下につながります。",
              },
            ]}
          />

          <ComparisonTable
            headers={["体重", "最低ライン（x1.6g）", "推奨量（x2.0g）", "食品例"]}
            rows={[
              ["50kg", "80g", "100g", "鶏むね肉400g相当"],
              ["60kg", "96g", "120g", "鶏むね肉480g相当"],
              ["70kg", "112g", "140g", "鶏むね肉560g相当"],
              ["80kg", "128g", "160g", "鶏むね肉640g相当"],
            ]}
          />

          <p className="mb-4">
            外食でも意識すれば十分に達成可能です。詳しくは<Link href="/guide/pfc-guide" className="text-sky-600 hover:text-sky-700 underline">PFCバランス入門ガイド</Link>も参考にしてください。
          </p>

          <SubSectionHeading>方法3: 食事記録の継続（レコーディング）</SubSectionHeading>
          <p className="mb-4">
            「体重を維持できている人」と「リバウンドする人」の最大の違いの一つが、<Marker>食事記録の習慣</Marker>です。National Weight Control Registry（NWCR）の調査では、13kg以上の減量を1年以上維持している人の<Marker color="blue">約78%が食事記録を続けている</Marker>と報告されています。
          </p>

          <p className="mb-4">
            食事記録のポイントは、カロリーの「見える化」です。人間は食べた量を平均40~50%過小評価する傾向があります。記録することで、この認知のズレを補正できます。
          </p>

          <TipBox title="維持期の記録は「ゆるく」でOK">
            <p>
              ダイエット中のような細かい記録は必要ありません。<Marker color="green">週に3~4日程度、ざっくりとした記録でも効果があります</Marker>。たべなびのような外食の栄養管理ツールを活用すれば、メニューを選ぶだけで自動記録が可能です。詳しくは<Link href="/guide/recording-diet" className="text-sky-600 hover:text-sky-700 underline">レコーディングダイエットガイド</Link>をご覧ください。
            </p>
          </TipBox>

          <SubSectionHeading>方法4: メンテナンスカロリーを理解する</SubSectionHeading>
          <p className="mb-4">
            ダイエット終了後に最もやるべきことは、<Marker>自分の新しいメンテナンスカロリー（体重が増減しないカロリー）</Marker>を把握することです。多くの方がダイエット前のカロリー摂取に戻してしまい、リバウンドします。
          </p>

          <p className="mb-4">
            メンテナンスカロリーの目安は以下の通りです:
          </p>

          <ComparisonTable
            headers={["活動レベル", "計算式（目安）", "60kgの場合"]}
            rows={[
              ["デスクワーク中心", "体重 x 30kcal", "1,800 kcal"],
              ["適度な運動あり", "体重 x 35kcal", "2,100 kcal"],
              ["活発に運動", "体重 x 40kcal", "2,400 kcal"],
            ]}
          />

          <p className="mb-4">
            重要なのは、<Marker color="blue">ダイエット終了後にいきなりメンテナンスカロリーに戻さない</Marker>ことです。「リバースダイエット」と呼ばれる方法で、2~4週間かけて100~200kcalずつ摂取カロリーを増やしていくのが理想です。
          </p>

          <WarningBox title="リバースダイエットを怠ると...">
            <p>
              1日1,500kcalのダイエットから突然2,100kcalに戻すと、代謝適応が起きている状態では1日600kcalの余剰が発生。<Marker>1ヶ月で約2.5kgの脂肪増加</Marker>につながります。4週間かけて少しずつ増やすことで、代謝が回復する時間を確保できます。
            </p>
          </WarningBox>

          <SubSectionHeading>方法5: チートデイ（リフィード）の戦略的活用</SubSectionHeading>
          <p className="mb-4">
            チートデイは「好き放題食べる日」ではなく、<Marker>計画的にカロリーを増やす日</Marker>として活用すべきです。正しく活用すれば、レプチン値を一時的に回復させ、代謝適応を和らげる効果があります。
          </p>

          <NumberedList
            items={[
              {
                title: "頻度: 週1回が目安",
                body: "ダイエット中は7~10日に1回、維持期は週1回程度が適切です。体脂肪率が高いほど頻度は少なく、低いほど頻繁にリフィードが必要になります。",
              },
              {
                title: "カロリー設定: メンテナンスの110~120%",
                body: "メンテナンスカロリーが2,000kcalなら、チートデイは2,200~2,400kcal程度。3,000kcal超えの暴食は脂肪蓄積に直結するため避けましょう。",
              },
              {
                title: "炭水化物を中心に増やす",
                body: "チートデイで増やすべきは炭水化物です。炭水化物はレプチン分泌を最も効果的に刺激し、甲状腺ホルモン（T3）の回復にも寄与します。脂質はあまり増やさないのがポイント。",
              },
              {
                title: "翌日はしっかり通常食に戻す",
                body: "チートデイの翌日に体重が1~2kg増えても慌てないでください。ほとんどは水分と食物の重量です。通常の食事に戻せば2~3日で元に戻ります。",
              },
            ]}
          />

          <TipBox title="チートデイにおすすめの外食メニュー">
            <p>
              チートデイでも高タンパク質を維持しながら炭水化物を増やすなら、<Marker color="green">牛丼大盛り（約800kcal / P25g）や定食系メニュー</Marker>がおすすめ。詳しくは<Link href="/guide/gyudon-comparison" className="text-sky-600 hover:text-sky-700 underline">牛丼チェーン栄養比較</Link>を参考にしてください。
            </p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="外食でも栄養管理を続けよう"
          subtitle="たべなびなら32チェーン・6,000品以上の栄養データを無料で検索"
        />

        {/* Section 4: 外食生活でリバウンドを防ぐコツ */}
        <section className="mb-16">
          <SectionHeading id="eating-out">
            外食生活でリバウンドを防ぐコツ
          </SectionHeading>

          <p className="mb-6">
            「外食が多い=リバウンドする」は誤解です。<Marker>外食メニューの栄養情報を活用すれば、自炊と同等の栄養管理が可能</Marker>です。ここでは外食中心の生活でリバウンドを防ぐ実践的なコツをお伝えします。
          </p>

          <SubSectionHeading>コツ1: 「定番メニュー」を3~5個持つ</SubSectionHeading>
          <p className="mb-4">
            毎食のメニュー選びに悩むと、意思決定疲労からジャンクフードに手を出しやすくなります。よく行くチェーン店で<Marker color="blue">「自分の定番ヘルシーメニュー」を3~5個決めておく</Marker>のが効果的です。
          </p>

          <NutritionTable
            items={[
              { name: "松屋 / 牛めし（小盛）", calories: 507, protein: 13.1, fat: 22.8, carbs: 59.6 },
              { name: "大戸屋 / しまほっけの炭火焼き定食", calories: 612, protein: 45.5, fat: 13.1, carbs: 79.3, highlight: true },
              { name: "サブウェイ / チリチキン", calories: 273, protein: 20.5, fat: 4.1, carbs: 39.7, highlight: true },
              { name: "すき家 / 牛丼ライト（並盛）", calories: 397, protein: 22.8, fat: 26.8, carbs: 16.8 },
              { name: "モスバーガー / 香る醤油のローストチキン", calories: 208, protein: 20.3, fat: 12.9, carbs: 2.6, highlight: true },
            ]}
          />

          <SubSectionHeading>コツ2: 食べ順を意識する</SubSectionHeading>
          <p className="mb-4">
            外食でも<Marker>「野菜・汁物 → タンパク質 → 炭水化物」</Marker>の順番を意識するだけで、血糖値の急上昇を抑え、満腹感を得やすくなります。定食系のお店なら、まずサラダや味噌汁から手をつけましょう。
          </p>
          <p className="mb-4">
            食べ順についてもっと詳しく知りたい方は、<Link href="/guide/eating-order" className="text-sky-600 hover:text-sky-700 underline">太らない食べ順ガイド</Link>をご覧ください。
          </p>

          <SubSectionHeading>コツ3: コンビニを「ダイエット飯の味方」にする</SubSectionHeading>
          <p className="mb-4">
            コンビニは栄養成分が全て表示されているため、カロリー管理には最適です。特に<Marker color="green">サラダチキン・ゆでたまご・ギリシャヨーグルト</Marker>の3つは、リバウンド防止の強い味方です。
          </p>
          <p className="mb-4">
            コンビニ活用の詳細は<Link href="/guide/seven-eleven-diet" className="text-sky-600 hover:text-sky-700 underline">セブンイレブンダイエットガイド</Link>や<Link href="/guide/conveni-protein" className="text-sky-600 hover:text-sky-700 underline">コンビニ高タンパク商品ガイド</Link>も参考にしてください。
          </p>

          <SubSectionHeading>コツ4: 飲み会対策を事前に決めておく</SubSectionHeading>
          <p className="mb-4">
            外食生活でリバウンドの最大の敵は「飲み会」です。アルコールによるカロリー増加だけでなく、脂質代謝の抑制や食欲増進効果もあります。
          </p>

          <CheckList
            items={[
              "飲み会の前日・翌日で調整する（前後2日で帳尻合わせ）",
              "ビールよりハイボール・ワインを選ぶ（糖質カット）",
              "おつまみは枝豆・刺身・焼き鳥（塩）を中心に",
              "〆のラーメンは避ける（+500kcal以上）",
              "飲み会は月2~3回までと決める",
            ]}
          />

          <p className="mb-4">
            飲み会対策については<Link href="/guide/drinking-party-diet" className="text-sky-600 hover:text-sky-700 underline">飲み会で太らないガイド</Link>で詳しく解説しています。
          </p>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop"
          alt="彩り豊かなヘルシーサラダプレート"
        />

        {/* Section 5: 維持期の食事例 */}
        <section className="mb-16">
          <SectionHeading id="maintenance-meals">
            維持期の食事例（チェーン店メニュー活用）
          </SectionHeading>

          <p className="mb-6">
            体重60kgの方がメンテナンスカロリー<Marker>1日1,800kcal・タンパク質100g</Marker>を目標にした場合の、チェーン店を活用した1日の食事プランを3パターンご紹介します。
          </p>

          <SubSectionHeading>プラン A: コンビニ中心</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              朝: ゆでたまご2個 + ギリシャヨーグルト + バナナ（約370kcal / P26g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              昼: サラダチキン + おにぎり（鮭）+ サラダ（約520kcal / P35g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              夜: サバの味噌煮弁当（約600kcal / P28g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              間食: プロテインバー（約200kcal / P15g）
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                合計 1,690 kcal
              </span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 104g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                メンテナンス範囲内
              </span>
            </div>
          </div>

          <SubSectionHeading>プラン B: チェーン外食中心</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              朝: すき家 / まぜのっけ朝食 並盛（約531kcal / P17g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              昼: サブウェイ / チリチキン（約273kcal / P20g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              夜: 大戸屋 / しまほっけの炭火焼き定食（約612kcal / P45g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              間食: ゆでたまご + ナッツ25g（約230kcal / P10g）
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                合計 1,646 kcal
              </span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 93g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                メンテナンス範囲内
              </span>
            </div>
          </div>

          <SubSectionHeading>プラン C: 自炊+外食ミックス</SubSectionHeading>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">
              朝: オートミール + プロテイン + ブルーベリー（約350kcal / P30g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              昼: 松屋 / 牛めし（小盛）+ 生野菜（約531kcal / P14g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              夜: 自炊 / 鶏むね肉のソテー + 玄米 + サラダ（約550kcal / P40g）
            </p>
            <p className="font-bold text-gray-900 mb-2">
              間食: ギリシャヨーグルト（約100kcal / P12g）
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-sky-50 text-sky-700 px-2.5 py-1 rounded-full font-bold">
                合計 1,531 kcal
              </span>
              <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                P 96g
              </span>
              <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-bold">
                メンテナンス範囲内
              </span>
            </div>
          </div>

          <TipBox title="維持期の食事で大切なこと">
            <p>
              維持期の食事は<Marker>「我慢しなくても続けられるレベル」</Marker>であることが最優先です。完璧を求めず、週に1~2回は好きなものを食べてOK。ただし、タンパク質量だけは毎日意識しましょう。基礎代謝と1日の必要カロリーの計算方法は<Link href="/guide/bmr-calculator" className="text-sky-600 hover:text-sky-700 underline">基礎代謝計算ガイド</Link>で詳しく解説しています。
            </p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="リバウンドしない食事管理を始めよう"
          subtitle="たべなびで外食の栄養を見える化して、体重維持を成功させましょう"
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-6">
            リバウンド防止のポイントを振り返りましょう。
          </p>

          <CheckList
            items={[
              "リバウンドの原因は代謝適応・ホルモン変化・心理的要因の3つ",
              "ダイエッターの80%がリバウンドするが、正しい維持戦略で40%に改善可能",
              "月1~2kgの緩やかな減量ペースで代謝適応を最小限に",
              "タンパク質は体重x1.6~2.0g摂取して筋肉量を維持",
              "食事記録を維持期も週3~4日は継続する",
              "メンテナンスカロリーを把握し、リバースダイエットで徐々に戻す",
              "チートデイは計画的に週1回、メンテナンスの110~120%で",
              "外食では「定番ヘルシーメニュー」を3~5個持つ",
              "完璧を求めず、長期的に続けられるレベルの食事習慣を",
            ]}
          />

          <p className="mb-4 mt-6">
            リバウンドしないダイエットの本質は、<Marker>「終わりのあるダイエット」ではなく「一生続けられる食習慣を作ること」</Marker>です。たべなびを活用して、外食でも無理なく栄養管理を続けていきましょう。
          </p>

          <p className="text-xs text-gray-400 mt-4">
            ※本記事の数値・研究データは参考値です。個人の体質や健康状態により異なる場合があります。持病のある方は医師にご相談ください。
          </p>
        </section>

        {/* Article Footer */}
        <FAQSection
          slug="rebound-prevention"
          items={[
            { q: "リバウンドする理由は何か？", a: "リバウンドの主な原因は代謝適応（基礎代謝が低下）、ホルモン変化（レプチン減少・グレリン増加）、心理的要因の3つ。急激なダイエットほど代謝適応が強く、ダイエット終了後も数ヶ月～1年以上続きます。" },
            { q: "ダイエット後、メンテナンスカロリーはどう決める？", a: "活動レベルに応じて体重×30～40kcalが目安。体重60kgでデスクワーク中心なら1,800kcal。ダイエット終了後いきなり上げず、2～4週間かけて100～200kcalずつ増やす「リバースダイエット」が重要です。" },
            { q: "外食でリバウンドを防ぐコツは？", a: "よく行くチェーン店で「定番ヘルシーメニュー」3～5個を決めておく。松屋の牛めし（小盛）、大戸屋のしまほっけの炭火焼き定食、サブウェイのチリチキンなど栄養バランスの良い選択肢を活用すると管理が容易です。" },
            { q: "タンパク質はどの程度摂取すべき？", a: "ダイエット中・維持期ともに体重×1.6～2.0gが推奨。タンパク質は筋肉維持で代謝低下を防ぎ、満腹感が持続し間食を抑えられます。体重60kgなら1日96～120g程度を目標にしましょう。" },
            { q: "食事記録はずっと続ける必要がある？", a: "13kg以上の減量を1年以上維持している人の78%が食事記録を継続しています。維持期は完全な記録不要で、週3～4日程度ざっくりとした記録で十分。たべなびなどのツール活用が効果的です。" },
          ]}
        />

        {/* Update History */}
        <UpdateHistory
          entries={[
            { date: "2026-06-23", note: "DB実値と乖離した数値・実在しないメニュー・PFC非公開チェーンの架空PFCを全面是正" },
            { date: "2026-03-25", note: "初稿公開" },
          ]}
        />

        <ArticleFooter currentSlug="rebound-prevention" />

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
