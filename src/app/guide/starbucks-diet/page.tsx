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
import { AffiliateProductGrid } from "@/components/guide/AffiliateComponents";
import { ArticleLayout } from "@/components/guide/ArticleLayout";

export const metadata: Metadata = {
  title:
    "【2026年最新】スタバダイエットガイド｜低カロリードリンクランキングと太らない注文術 | たべなび",
  description:
    "スタバの低カロリードリンクランキング、無脂肪ミルク変更やシロップ減量などのカスタマイズ術、フードメニューの選び方を徹底解説。スタバで太らない注文方法がわかります。",
  keywords: [
    "スタバ ダイエット",
    "スタバ カロリー",
    "スタバ 低カロリー",
    "スターバックス カロリー",
    "スタバ カスタマイズ ダイエット",
  ],
  openGraph: {
    title: "【2026年最新】スタバダイエットガイド｜低カロリードリンクランキングと太らない注文術",
    description:
      "スタバの低カロリードリンクランキング、無脂肪ミルク変更やシロップ減量などのカスタマイズ術を徹底解説。",
    url: "https://www.tabenavi.jp/guide/starbucks-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】スタバダイエットガイド｜低カロリードリンクランキングと太らない注文術",
  description:
    "スタバの低カロリードリンクランキング、無脂肪ミルク変更やシロップ減量などのカスタマイズ術を徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/starbucks-diet",
};

const tocItems = [
  { id: "calorie-facts", label: "スタバドリンクのカロリー事情" },
  { id: "low-cal-ranking", label: "低カロリードリンクランキング" },
  { id: "customize", label: "カスタマイズで100kcal以下にする方法" },
  { id: "food-menu", label: "フードメニューの選び方" },
  { id: "avoid", label: "避けるべきドリンク" },
  { id: "summary", label: "まとめ" },
];

export default function StarbucksDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="スタバダイエットガイド"
        subtitle="低カロリードリンクランキングと太らない注文術【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=400&fit=crop"
        breadcrumb="スタバダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="starbucks-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          スターバックスはダイエット中に「行くべきではない場所」と思われがちですが、実は<Marker>カスタマイズ次第でカロリーを大幅にカットできる</Marker>のをご存じでしょうか。ドリップコーヒーはわずか15kcal、カスタマイズを駆使すればラテ系でも100kcal以下に抑えられます。
        </p>
        <p className="mb-4">
          一方で、<Marker>フラペチーノ系は300〜500kcalとショートケーキ並みのカロリー</Marker>。何も知らずに注文すると、1杯で1食分のカロリーを摂取してしまうことも。知識があるかないかで大きな差が出るのがスタバです。
        </p>
        <p className="mb-8">
          この記事では、スタバの全ドリンクをカロリー順にランキングし、ダイエット中でも安心して楽しめるカスタマイズ術を徹底解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        {/* Section 1: スタバドリンクのカロリー事情 */}
        <section className="mb-16">
          <SectionHeading id="calorie-facts">スタバドリンクのカロリー事情</SectionHeading>

          <p className="mb-4">
            スタバドリンクのカロリーは、使われる<Marker>ミルクの種類・シロップの量・ホイップの有無</Marker>で大きく変わります。まずはカロリーの仕組みを理解しましょう。
          </p>

          <NumberedList
            items={[
              {
                title: "ミルクの種類がカロリーを左右する",
                body: "通常のミルク（約100kcal/Tall）を無脂肪ミルクに変更すると約60kcalに。アーモンドミルクやオーツミルクは約70kcalと中間的な位置づけです。ソイミルクは約85kcal。",
              },
              {
                title: "シロップ1ポンプ=約20kcal",
                body: "バニラシロップやキャラメルシロップは1ポンプ約20kcal。Tallサイズのラテには通常3ポンプ入るため、シロップだけで約60kcal。「シロップ少なめ」で1ポンプに減らせば40kcalカットできます。",
              },
              {
                title: "ホイップクリーム=約90kcal",
                body: "フラペチーノに載るホイップクリームは約90kcal。「ホイップなし」を指定するだけで、おにぎり約半個分のカロリーを削減できます。これが最も手軽なカロリーカット法です。",
              },
            ]}
          />

          <ComparisonTable
            headers={["ミルクの種類", "Tallあたりカロリー", "脂質", "タンパク質"]}
            rows={[
              ["無脂肪ミルク", "約60 kcal", "0.2g", "6.5g"],
              ["アーモンドミルク", "約70 kcal", "3.5g", "1.5g"],
              ["オーツミルク", "約72 kcal", "2.8g", "1.8g"],
              ["ソイミルク", "約85 kcal", "3.8g", "5.2g"],
              ["通常ミルク", "約100 kcal", "5.5g", "5.8g"],
            ]}
            bestRowIndex={0}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=400&fit=crop" alt="スタバ風のラテアートが美しいコーヒー" />
        </section>

        {/* Section 2: 低カロリードリンクランキング */}
        <section className="mb-16">
          <SectionHeading id="low-cal-ranking">低カロリードリンクランキング</SectionHeading>

          <p className="mb-4">
            スタバの定番ドリンクをカロリーの低い順にランキング。<Marker color="blue">ブラック系・ティー系は50kcal以下</Marker>で、ラテ系もミルクの選択で大きく変わります。すべてTallサイズでの比較です。
          </p>

          <NutritionTable
            items={[
              { name: "ティー（ストレート）", calories: 5, protein: 0.0, fat: 0.0, carbs: 1.2, highlight: true },
              { name: "コールドブリューコーヒー", calories: 10, protein: 0.3, fat: 0.0, carbs: 2.0, highlight: true },
              { name: "ドリップコーヒー", calories: 15, protein: 0.5, fat: 0.0, carbs: 2.8, highlight: true },
              { name: "カフェアメリカーノ", calories: 15, protein: 0.8, fat: 0.0, carbs: 2.5, highlight: true },
              { name: "カフェラテ（無脂肪）", calories: 88, protein: 8.2, fat: 0.2, carbs: 12.8 },
              { name: "カフェラテ（低脂肪）", calories: 120, protein: 7.5, fat: 3.2, carbs: 13.5 },
              { name: "カフェラテ（通常）", calories: 150, protein: 7.8, fat: 6.5, carbs: 13.8 },
              { name: "抹茶ティーラテ（無脂肪）", calories: 145, protein: 6.8, fat: 1.5, carbs: 26.5 },
              { name: "ソイラテ", calories: 180, protein: 8.5, fat: 5.8, carbs: 18.2 },
              { name: "キャラメルマキアート", calories: 200, protein: 7.2, fat: 6.8, carbs: 28.5 },
              { name: "カフェモカ", calories: 280, protein: 8.5, fat: 12.5, carbs: 35.2 },
            ]}
            highlightProtein
          />

          <p className="text-xs text-gray-400 mb-4">
            ※すべてTallサイズ。カスタマイズなしのデフォルト値です。
          </p>

          <RankingCard rank={1} title="ドリップコーヒー / アメリカーノ" subtitle="10〜15kcal / ほぼゼロカロリー">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker>ダイエット中のスタバはブラック系一択</Marker>。ドリップコーヒーは15kcal、コールドブリューは10kcalと実質ゼロカロリー。カフェインの覚醒作用と脂肪燃焼効果も期待でき、トレーニング前のドリンクとしても最適です。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="カフェラテ（無脂肪ミルク変更）" subtitle="88kcal / P8.2g / F0.2g / C12.8g">
            <p className="text-sm text-gray-700 leading-relaxed">
              ブラックが苦手な方は<Marker color="blue">無脂肪ミルク変更のカフェラテ</Marker>がベスト。88kcalで脂質はほぼゼロ、タンパク質は8.2gと牛乳の栄養もしっかり摂れます。通常ミルク（150kcal）から62kcalのカットになります。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="ティー各種（ストレート）" subtitle="5kcal / カロリーほぼゼロ">
            <p className="text-sm text-gray-700 leading-relaxed">
              <Marker color="green">イングリッシュブレックファスト、アールグレイ、ほうじ茶など</Marker>のストレートティーはわずか5kcal。カフェインを控えたい方はカモミールなどのハーブティーも選べます。午後の気分転換に最適です。
            </p>
          </RankingCard>

          <TipBox title="サイズ選びもカロリーに直結">
            <p>同じドリンクでもサイズで大きな差が出ます。カフェラテの場合、<Marker>Short:103kcal → Tall:150kcal → Grande:200kcal → Venti:270kcal</Marker>（通常ミルク）。Shortを選ぶだけでTallより約50kcalカットできます。</p>
          </TipBox>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="スタバのカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 3: カスタマイズで100kcal以下にする方法 */}
        <section className="mb-16">
          <SectionHeading id="customize">カスタマイズで100kcal以下にする方法</SectionHeading>

          <p className="mb-6">
            スタバの強みは豊富なカスタマイズオプション。<Marker>ミルク変更・シロップ減量・ホイップ抜きの3つを組み合わせる</Marker>ことで、ほぼすべてのドリンクを大幅にカロリーカットできます。
          </p>

          <SubSectionHeading>カスタマイズ1：無脂肪ミルクに変更（無料）</SubSectionHeading>
          <p className="mb-6">
            <Marker color="blue">無脂肪ミルクへの変更は無料</Marker>で、最も効果的なカロリーカット法です。通常ミルクから変更するだけで、ラテ系で約40〜60kcal削減。「ノンファットミルクでお願いします」と一言伝えるだけで完了します。脂質もほぼゼロになるため、脂質制限中の方に特におすすめです。
          </p>

          <SubSectionHeading>カスタマイズ2：シロップ減量・なし</SubSectionHeading>
          <p className="mb-6">
            「シロップ少なめ（1ポンプに減量）」で約40kcalカット、「シロップなし」なら約60kcalカット。<Marker>キャラメルマキアートのシロップを1ポンプに減らすだけで160kcalまで下がります</Marker>。甘さが少し減りますが、エスプレッソの風味がより感じられて美味しいという声も。
          </p>

          <SubSectionHeading>カスタマイズ3：ホイップクリーム抜き</SubSectionHeading>
          <p className="mb-6">
            <Marker color="green">ホイップなしで約90kcalカット</Marker>。カフェモカやフラペチーノのホイップを抜くだけで、大きなカロリー削減になります。ホイップは脂質が高いため、ダイエット中は必ず「ホイップなしで」と伝えましょう。
          </p>

          <SubSectionHeading>実践例：人気ドリンクを100kcal以下にする</SubSectionHeading>

          <ComparisonTable
            headers={["ドリンク", "通常", "カスタマイズ後", "カット量"]}
            rows={[
              ["カフェラテ", "150 kcal", "88 kcal（無脂肪ミルク）", "-62 kcal"],
              ["キャラメルマキアート", "200 kcal", "98 kcal（無脂肪+シロップ1P）", "-102 kcal"],
              ["カフェモカ", "280 kcal", "148 kcal（無脂肪+ホイップ抜き）", "-132 kcal"],
              ["抹茶ティーラテ", "210 kcal", "145 kcal（無脂肪ミルク）", "-65 kcal"],
            ]}
            bestRowIndex={1}
          />

          <TipBox title="「ライトシロップ」という裏技">
            <p>「シロップ少なめ」ではなく<Marker>「シロップ半分で」と伝えると、1.5ポンプ（通常3ポンプ）に調整</Marker>してもらえます。甘さを完全になくすのは寂しいけど、カロリーは抑えたい。そんなときに使える中間的な注文方法です。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&h=400&fit=crop" alt="カスタマイズされたスタバドリンクのイメージ" />
        </section>

        {/* Section 4: フードメニューの選び方 */}
        <section className="mb-16">
          <SectionHeading id="food-menu">フードメニューの選び方</SectionHeading>

          <p className="mb-6">
            スタバのフードメニューはドリンクと合わせると高カロリーになりがち。<Marker>ダイエット中に選ぶべきフードと避けるべきフード</Marker>を把握しましょう。
          </p>

          <SubSectionHeading>おすすめフードメニュー</SubSectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <NutritionCard
              name="ヨーグルト&グラノーラ"
              chain="スターバックス"
              calories={220}
              protein={8.5}
              fat={6.2}
              carbs={32.5}
              recommended
            />
            <NutritionCard
              name="サラダラップ（根菜チキン）"
              chain="スターバックス"
              calories={235}
              protein={12.5}
              fat={8.8}
              carbs={28.2}
              recommended
            />
            <NutritionCard
              name="あらびきソーセージパイ"
              chain="スターバックス"
              calories={285}
              protein={8.8}
              fat={18.2}
              carbs={22.5}
            />
            <NutritionCard
              name="石窯フィローネ（ハム＆マリボーチーズ）"
              chain="スターバックス"
              calories={342}
              protein={15.8}
              fat={12.5}
              carbs={38.8}
            />
          </div>

          <WarningBox title="避けるべきフードメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">チョコレートチャンクスコーン（約420kcal）</span> ─ バターたっぷりのスコーンにチョコレート。脂質22g以上で、おやつとしてはカロリー過多。</li>
              <li><span className="font-bold">シナモンロール（約380kcal）</span> ─ 砂糖とバターの塊。炭水化物が50g以上と、糖質も非常に高い。</li>
              <li><span className="font-bold">ニューヨークチーズケーキ（約410kcal）</span> ─ クリームチーズたっぷりで脂質28g。フラペチーノ + チーズケーキのコンボは800kcal超えも。</li>
            </ul>
          </WarningBox>

          <TipBox title="フードを食べるならドリンクはブラック系で">
            <p>フードメニューを注文する場合は、<Marker>ドリンクをドリップコーヒー（15kcal）かアメリカーノ（15kcal）にする</Marker>のがルール。サラダラップ（235kcal）+ ドリップコーヒー（15kcal）= 250kcalなら、ランチとしても十分低カロリーです。</p>
          </TipBox>

          <ArticleImage src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=400&fit=crop" alt="コーヒーとサンドイッチの軽食" />
        </section>

        {/* Section 5: 避けるべきドリンク */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきドリンク</SectionHeading>

          <p className="mb-4">
            スタバで最も注意すべきは<Marker>フラペチーノ系ドリンク</Marker>。クリーム・シロップ・ホイップの三重構造で、1杯で300〜500kcalに達します。
          </p>

          <NutritionTable
            items={[
              { name: "バニラクリームフラペチーノ", calories: 274, protein: 4.8, fat: 11.2, carbs: 38.5 },
              { name: "キャラメルフラペチーノ", calories: 322, protein: 4.2, fat: 12.5, carbs: 48.5 },
              { name: "抹茶クリームフラペチーノ", calories: 322, protein: 5.8, fat: 11.5, carbs: 48.8 },
              { name: "ダークモカチップフラペチーノ", calories: 348, protein: 5.5, fat: 15.8, carbs: 48.2 },
              { name: "ホワイトモカ（ホイップ付き）", calories: 405, protein: 8.2, fat: 18.5, carbs: 52.4 },
              { name: "季節限定フラペチーノ", calories: 450, protein: 4.5, fat: 18.8, carbs: 65.2 },
            ]}
          />

          <WarningBox title="フラペチーノ1杯＝ショートケーキと同等">
            <ul className="space-y-2">
              <li><span className="font-bold">季節限定フラペチーノ（約450kcal）</span> ─ 期間限定の甘い誘惑。1杯で砂糖約50g以上、ショートケーキ1個分を超えるカロリー。</li>
              <li><span className="font-bold">ホワイトモカ＋ホイップ（405kcal）</span> ─ ホワイトチョコレートソース + ホイップで脂質18.5g。「モカ」系は総じてカロリーが高い。</li>
              <li><span className="font-bold">キャラメルフラペチーノ（322kcal）</span> ─ 人気メニューだが、炭水化物48.5gはご飯1杯分以上。「たまのご褒美」にとどめましょう。</li>
            </ul>
          </WarningBox>

          <ComparisonTable
            headers={["ドリンク", "カロリー", "砂糖相当量", "同等の食べ物"]}
            rows={[
              ["ドリップコーヒー", "15 kcal", "0g", "ほぼゼロ"],
              ["カフェラテ（無脂肪）", "88 kcal", "12g", "バナナ1本"],
              ["キャラメルマキアート", "200 kcal", "25g", "おにぎり1個"],
              ["キャラメルフラペチーノ", "322 kcal", "48g", "ショートケーキ"],
              ["季節限定フラペチーノ", "450 kcal", "65g", "牛丼並盛り相当"],
            ]}
            bestRowIndex={0}
          />
        </section>

        {/* Bottom CTA */}
        <CTABanner
          title="たべなびで外食の栄養管理を始めよう"
          subtitle="20チェーン・500メニューの栄養データ、全部無料"
        />

        <AffiliateProductGrid
          title="スタバ作業のお供にバッグへ忍ばせる高タンパク"
          productIds={["onebar-protein", "inbar-protein", "base-food-bread", "ultora-whey"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            スタバはカスタマイズ次第でダイエットの味方にも敵にもなります。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "ドリップコーヒー（15kcal）・アメリカーノ（15kcal）が最強の低カロリードリンク",
              "ラテ系は無脂肪ミルク変更（無料）で約40〜60kcalカット",
              "シロップ少なめ（1ポンプ）で約40kcalカット、ホイップ抜きで約90kcalカット",
              "キャラメルマキアートも無脂肪+シロップ1Pで98kcalまで下げられる",
              "フラペチーノ系（300〜500kcal）はダイエット中は禁止。ショートケーキ並みのカロリー",
              "フードを食べるならドリンクはブラック系に。サラダラップ（235kcal）がおすすめ",
              "サイズはShortかTallに。GrandeやVentiは不要なカロリーの上乗せ",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※カロリー・栄養成分は2026年3月時点の情報です。季節メニューや店舗により異なる場合があります。最新の情報はスターバックス公式サイトでご確認ください。
          </p>
        </section>

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="starbucks-diet" />

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
