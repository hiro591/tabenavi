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
  CheckList,
  NumberedList,
  ArticleFooter,
  ArticleImage,
} from "@/components/guide/ArticleComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】太らない食べ方・食べ順ガイド｜外食で実践できる5つのテクニック | たべなび",
  description:
    "食べ順を変えるだけで太りにくくなる科学的な理由を解説。野菜→タンパク質→炭水化物の順番や、外食チェーンで実践できる具体的なテクニックを紹介します。",
  keywords: [
    "太らない食べ方",
    "食べ順 ダイエット",
    "食べ方 痩せる",
    "食べる順番 ダイエット",
    "血糖値スパイク 防ぐ",
    "外食 食べ順",
  ],
  openGraph: {
    title:
      "【2026年最新】太らない食べ方・食べ順ガイド｜外食で実践できる5つのテクニック",
    description:
      "食べ順ダイエットの科学的根拠と外食での実践法を徹底解説。血糖値コントロールで太りにくい体に。",
    url: "https://tabenavi.jp/guide/eating-order",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】太らない食べ方・食べ順ガイド｜外食で実践できる5つのテクニック",
  description:
    "食べ順を変えるだけで太りにくくなる科学的な理由と外食での実践法を解説。",
  datePublished: "2026-03-23",
  dateModified: "2026-03-23",
  author: {
    "@type": "Organization",
    name: "たべなび",
    url: "https://tabenavi.jp",
  },
  publisher: {
    "@type": "Organization",
    name: "たべなび",
  },
  mainEntityOfPage: "https://tabenavi.jp/guide/eating-order",
};

const tocItems = [
  { id: "why-order", label: "食べ順が重要な理由" },
  { id: "ideal-order", label: "理想の食べ順：野菜→タンパク質→炭水化物" },
  { id: "restaurant", label: "外食チェーンで実践する方法" },
  { id: "speed", label: "食べるスピードの影響" },
  { id: "techniques", label: "その他の太らないテクニック" },
  { id: "summary", label: "まとめ" },
];

export default function EatingOrderPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      {/* JSON-LD structured data - static trusted content only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="太らない食べ方・食べ順ガイド"
        subtitle="外食で実践できる5つのテクニック【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
        breadcrumb="太らない食べ方・食べ順ガイド"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="eating-order">
        {/* Authority Badge & Date */}
        <div className="mb-8">
          <AuthorityBadge />
          <p className="text-sm text-gray-400 mt-2">
            最終更新: 2026年3月23日 | 読了目安: 7分
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-4">
          同じメニューを食べても、<Marker>食べる順番を変えるだけで太りにくくなる</Marker>ことをご存知ですか？食べ順ダイエットは、特別な食事制限なしで実践できる最もシンプルなダイエット法の一つです。
        </p>
        <p className="mb-10">
          この記事では、食べ順が体に与える影響を科学的に解説し、<Marker color="blue">外食チェーンで今日から使える実践テクニック</Marker>を5つ紹介します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop"
          alt="バランスの良い和食の定食"
        />

        {/* Section 1: 食べ順が重要な理由 */}
        <section className="mb-16">
          <SectionHeading id="why-order">
            食べ順が重要な理由
          </SectionHeading>

          <SubSectionHeading>血糖値スパイクとは</SubSectionHeading>
          <p className="mb-4">
            食事をすると血糖値が上がりますが、<Marker>炭水化物を最初に食べると血糖値が急激に上昇</Marker>します。この急上昇を「血糖値スパイク」と呼びます。血糖値が急上昇すると、体はインスリンを大量に分泌して血糖値を下げようとします。
          </p>
          <p className="mb-4">
            問題はこのインスリンの働き。インスリンは血中の糖を細胞に取り込む際、<Marker color="blue">余った糖を脂肪として蓄積する</Marker>作用があります。つまり、血糖値スパイクが起きるほど、脂肪が蓄積されやすくなるのです。
          </p>

          <SubSectionHeading>食べ順で血糖値をコントロール</SubSectionHeading>
          <p className="mb-4">
            研究によると、野菜や食物繊維を先に食べてから炭水化物を摂ると、<Marker>血糖値の上昇が約30〜40%抑えられる</Marker>ことが報告されています。食物繊維が腸内で糖の吸収を緩やかにし、インスリンの過剰分泌を防ぐためです。
          </p>

          <TipBox title="GI値（グリセミック・インデックス）の基礎知識">
            <p>
              GI値は食後の血糖値上昇度を示す指標。GI値55以下が「低GI食品」とされ、血糖値が上がりにくい食品です。玄米（GI56）は白米（GI88）より大幅に低GI。<Marker color="green">同じ炭水化物でも種類によって血糖値への影響は全く異なります</Marker>。
            </p>
          </TipBox>
        </section>

        {/* Section 2: 理想の食べ順 */}
        <section className="mb-16">
          <SectionHeading id="ideal-order">
            理想の食べ順：野菜→タンパク質→炭水化物
          </SectionHeading>
          <p className="mb-6">
            最も効果的な食べ順は以下の3ステップです。
          </p>

          <NumberedList
            items={[
              {
                title: "STEP 1: 野菜・サラダ・汁物から（最初の5分）",
                body: "食物繊維を最初に摂ることで、腸内にバリアを作り糖の吸収を緩やかにします。サラダ、味噌汁、漬物などを先に食べましょう。ドレッシングはノンオイル系を選ぶとさらに効果的。",
              },
              {
                title: "STEP 2: タンパク質のおかず（次の10分）",
                body: "肉・魚・卵・豆腐などのタンパク質を次に食べます。タンパク質は消化に時間がかかるため、満腹中枢を刺激して食べ過ぎを防ぐ効果もあります。",
              },
              {
                title: "STEP 3: 炭水化物・ご飯は最後に（最後の5分）",
                body: "白米、パン、麺類は最後に。先に食べた食物繊維とタンパク質が胃にあることで、炭水化物の消化吸収が緩やかになり、血糖値の急上昇を防げます。",
              },
            ]}
          />

          <WarningBox title="「三角食べ」は太りやすい？">
            <p className="mb-2">
              日本の食文化では「三角食べ」（ご飯・おかず・汁物を交互に食べる）が推奨されてきましたが、ダイエットの観点では<Marker>三角食べより食べ順ダイエットの方が血糖値コントロールに優れています</Marker>。
            </p>
            <p>
              ただし、完全に分けて食べる必要はなく、「最初にサラダを半分以上食べる」「ご飯に手をつけるのは食事開始5分後から」程度の緩いルールでも十分な効果があります。無理なく続けられるレベルで実践しましょう。
            </p>
          </WarningBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=400&fit=crop"
          alt="野菜サラダが盛りつけられたプレート"
        />

        {/* Mid-article CTA */}
        <CTABanner
          title="外食メニューの栄養バランスをチェック"
          subtitle="たべなびなら外食チェーンの栄養成分をワンタップで確認できます"
        />

        {/* Section 3: 外食チェーンで実践する方法 */}
        <section className="mb-16">
          <SectionHeading id="restaurant">
            外食チェーンで実践する方法
          </SectionHeading>
          <p className="mb-6">
            外食チェーンで食べ順ダイエットを実践するための具体的な方法を、店舗タイプ別に紹介します。
          </p>

          <SubSectionHeading>定食チェーン（やよい軒・大戸屋）</SubSectionHeading>
          <p className="mb-4">
            定食は食べ順ダイエットに最も適したスタイルです。<Marker>サラダと味噌汁から食べ始める</Marker>のが鉄則。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">おすすめの食べ順</p>
            <p className="text-sm text-gray-600 mb-1">1. サラダ・漬物・小鉢を食べる</p>
            <p className="text-sm text-gray-600 mb-1">2. 味噌汁を半分飲む</p>
            <p className="text-sm text-gray-600 mb-1">3. メインのおかず（肉・魚）を食べる</p>
            <p className="text-sm text-gray-600 mb-1">4. 残りの味噌汁を飲む</p>
            <p className="text-sm text-gray-600">5. 最後にご飯を食べる</p>
          </div>

          <SubSectionHeading>牛丼チェーン（すき家・吉野家・松屋）</SubSectionHeading>
          <p className="mb-4">
            牛丼は丼物のためご飯と具を分けにくいですが、<Marker color="blue">セットの味噌汁とサラダを先に食べる</Marker>だけでも効果があります。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">牛丼チェーンでの実践法</p>
            <p className="text-sm text-gray-600 mb-1">- サラダセットを注文し、サラダを先に食べる</p>
            <p className="text-sm text-gray-600 mb-1">- 味噌汁を先に飲む</p>
            <p className="text-sm text-gray-600 mb-1">- 牛丼は具（牛肉）を先に、ご飯は後から食べる</p>
            <p className="text-sm text-gray-600">- 可能なら「ご飯少なめ」で注文</p>
          </div>

          <SubSectionHeading>ファミレス（ガスト・サイゼリヤ）</SubSectionHeading>
          <p className="mb-4">
            ファミレスはサイドメニューが豊富なので食べ順を実践しやすい環境です。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">ファミレスでの実践法</p>
            <p className="text-sm text-gray-600 mb-1">- セットのスープ・サラダを最初に完食</p>
            <p className="text-sm text-gray-600 mb-1">- メインディッシュの肉・魚を食べる</p>
            <p className="text-sm text-gray-600 mb-1">- パン・ライスは最後に</p>
            <p className="text-sm text-gray-600">- サイゼリヤなら小エビのサラダ（税込300円）が食物繊維豊富でおすすめ</p>
          </div>

          <SubSectionHeading>コンビニ食でも食べ順は有効</SubSectionHeading>
          <p className="mb-4">
            コンビニでお弁当やおにぎりを買う場合も食べ順は実践できます。<Marker>サラダやスープを1品追加して最初に食べる</Marker>だけで効果があります。
          </p>
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6 shadow-sm">
            <p className="font-bold text-gray-900 mb-2">コンビニでの食べ順実践例</p>
            <p className="text-sm text-gray-600 mb-1">- カップ味噌汁（わかめ）を最初に飲む → 食物繊維で血糖値上昇を抑制</p>
            <p className="text-sm text-gray-600 mb-1">- サラダチキンを次に食べる → タンパク質で満腹感を確保</p>
            <p className="text-sm text-gray-600 mb-1">- おにぎりは最後に食べる → 炭水化物の吸収を緩やかに</p>
            <p className="text-sm text-gray-600">- 追加コスト約150円でダイエット効果が大幅アップ</p>
          </div>

          <TipBox title="食べ順を守るだけでこんなに違う">
            <p>
              大阪府立大学の研究では、食べ順を守ったグループは守らなかったグループに比べ、<Marker>食後血糖値のピークが約40%低下</Marker>したと報告されています。同じメニューでも食べ方次第で体への影響は大きく変わります。
            </p>
          </TipBox>
        </section>

        {/* Section 4: 食べるスピードの影響 */}
        <section className="mb-16">
          <SectionHeading id="speed">
            食べるスピードの影響
          </SectionHeading>
          <p className="mb-4">
            食べ順と同じくらい重要なのが、食べるスピードです。<Marker>早食いは肥満リスクを約2倍にする</Marker>ことが複数の研究で示されています。
          </p>

          <SubSectionHeading>早食いが太る3つの理由</SubSectionHeading>
          <NumberedList
            items={[
              {
                title: "満腹中枢のタイムラグ",
                body: "満腹中枢が「お腹いっぱい」のシグナルを出すまでには約20分かかります。早食いすると、満腹感を感じる前に食べ過ぎてしまいます。",
              },
              {
                title: "咀嚼回数の不足",
                body: "よく噛まないと消化酵素の分泌が不十分になり、消化吸収の効率が悪くなります。また、咀嚼による満足感（セロトニン分泌）も得られません。",
              },
              {
                title: "血糖値の急上昇",
                body: "一気に食べると血糖値が急激に上がり、インスリンの過剰分泌を招きます。ゆっくり食べれば血糖値の上昇は緩やかになります。",
              },
            ]}
          />

          <WarningBox title="1口30回噛むのが理想">
            <p>
              厚生労働省は「1口30回噛む」ことを推奨しています。実際にやってみると最初は難しいですが、<Marker>20回を目標にするだけでも食事時間が1.5倍</Marker>になり、食べ過ぎを防げます。箸を置きながら食べるのも効果的なテクニックです。
            </p>
          </WarningBox>
        </section>

        <ArticleImage
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=400&fit=crop"
          alt="ゆっくり食事を楽しむ食卓のイメージ"
        />

        {/* Section 5: その他のテクニック */}
        <section className="mb-16">
          <SectionHeading id="techniques">
            その他の太らないテクニック
          </SectionHeading>
          <p className="mb-6">
            食べ順と食べるスピード以外にも、外食で実践できるテクニックがあります。
          </p>

          <SubSectionHeading>食前に水を飲む</SubSectionHeading>
          <p className="mb-4">
            食事の<Marker>15〜30分前にコップ1杯（200ml）の水を飲む</Marker>と、胃が膨らんで食べ過ぎを防げます。アメリカの研究では、食前に水を飲んだグループは12週間で約2kg多く体重が減少しました。炭酸水ならさらに満腹感が強まります。
          </p>

          <SubSectionHeading>小皿に取り分けて食べる</SubSectionHeading>
          <p className="mb-4">
            大皿料理は取り分けて食べましょう。<Marker color="blue">自分の食べる量を視覚的に把握</Marker>することで、無意識の食べ過ぎを防げます。居酒屋やファミレスで特に有効なテクニックです。
          </p>

          <SubSectionHeading>食事に集中する</SubSectionHeading>
          <p className="mb-4">
            スマホやテレビを見ながらの「ながら食べ」は、<Marker>食事量が最大25%増加する</Marker>というデータがあります。食事中はスマホを置き、味や食感に集中することで、少量でも満足感を得られます。
          </p>

          <SubSectionHeading>低GI食品を選ぶ</SubSectionHeading>
          <p className="mb-4">
            同じ炭水化物でも、GI値の低い食品を選ぶことで血糖値の上昇を抑えられます。外食チェーンでも<Marker>白米を玄米や雑穀米に変更</Marker>できるお店が増えています。大戸屋では五穀米、やよい軒では十六穀米に変更可能です。
          </p>

          <NutritionTable
            items={[
              { name: "白米（150g）", calories: 252, protein: 3.8, fat: 0.5, carbs: 55.7, highlight: true },
              { name: "玄米（150g）", calories: 248, protein: 4.2, fat: 1.5, carbs: 53.4 },
              { name: "十六穀米（150g）", calories: 245, protein: 4.5, fat: 1.8, carbs: 51.2 },
              { name: "もち麦ご飯（150g）", calories: 240, protein: 4.0, fat: 0.8, carbs: 52.5 },
            ]}
          />

          <SubSectionHeading>食物繊維を意識して追加する</SubSectionHeading>
          <p className="mb-4">
            食物繊維は血糖値の上昇を緩やかにする最大の武器です。外食では<Marker color="green">サラダ・味噌汁・小鉢を積極的に追加</Marker>しましょう。特に海藻類（わかめ、もずく）やきのこ類は食物繊維が豊富で低カロリーです。
          </p>

          <WarningBox title="食物繊維の目標量">
            <p>
              厚生労働省が推奨する1日の食物繊維摂取量は<Marker>男性21g以上、女性18g以上</Marker>。しかし日本人の平均摂取量は約15gと不足気味。外食では意識的にサラダや海藻を追加して、食物繊維を補いましょう。
            </p>
          </WarningBox>

          <TipBox title="5つのテクニックまとめ">
            <p className="mb-1">1. 野菜→タンパク質→炭水化物の順番で食べる</p>
            <p className="mb-1">2. 1口20〜30回噛んでゆっくり食べる</p>
            <p className="mb-1">3. 食前にコップ1杯の水を飲む</p>
            <p className="mb-1">4. 大皿料理は小皿に取り分ける</p>
            <p className="mb-1">5. スマホを置いて食事に集中する</p>
            <p className="mb-1">6. 白米を玄米・雑穀米に変更する</p>
            <p>7. 海藻・きのこで食物繊維を追加する</p>
          </TipBox>
        </section>

        {/* CTA */}
        <CTABanner
          title="食べ順を意識した外食選びに"
          subtitle="たべなびで外食メニューの栄養バランスを確認しましょう"
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>
          <p className="mb-4">
            太らない食べ方のポイントを振り返りましょう。食べ順ダイエットは特別な食事制限が不要で、外食中心の生活でも無理なく続けられるのが最大の強みです。
          </p>
          <p className="mb-6">
            まずは「サラダを先に食べる」という1つのルールから始めてみてください。<Marker>小さな習慣の積み重ねが、大きな体の変化につながります</Marker>。
          </p>

          <CheckList
            items={[
              "炭水化物を最初に食べると血糖値スパイクが起き、脂肪が蓄積されやすい",
              "「野菜→タンパク質→炭水化物」の順番で食後血糖値の上昇を約40%抑制",
              "定食は「サラダ・味噌汁→おかず→ご飯」の順番が鉄則",
              "早食いは肥満リスク2倍。1口20回以上噛むことを意識する",
              "食前の水・小皿取り分け・ながら食べ禁止も効果的",
              "特別な食事制限なしで、今日から実践できるテクニック",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4">
            ※効果には個人差があります。持病のある方は医師にご相談ください。
          </p>
        </section>

        {/* Article Footer */}
        <ArticleFooter currentSlug="eating-order" />

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
