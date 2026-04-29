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
    "【2026年最新】すき家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方 | たべなび",
  description:
    "すき家のカロリー低い順ランキング、牛丼ライトなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。すき家で太らない注文法がわかります。",
  keywords: [
    "すき家 ダイエット",
    "すき家 カロリー",
    "すき家 低カロリー",
    "牛丼ライト",
    "すき家 太らない",
  ],
  openGraph: {
    title: "【2026年最新】すき家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
    description:
      "すき家のカロリー低い順ランキング、牛丼ライトなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
    url: "https://www.tabenavi.jp/guide/sukiya-diet",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】すき家ダイエットガイド｜低カロリーメニューランキングとおすすめの食べ方",
  description:
    "すき家のカロリー低い順ランキング、牛丼ライトなどダイエット向けメニュー、PFCバランスで選ぶ食べ方を徹底解説。",
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
  mainEntityOfPage: "https://www.tabenavi.jp/guide/sukiya-diet",
};

const tocItems = [
  { id: "calorie-ranking", label: "カロリーランキング" },
  { id: "recommended", label: "おすすめダイエットメニュー" },
  { id: "size-comparison", label: "サイズ別カロリー比較" },
  { id: "avoid", label: "避けるべきメニュー" },
  { id: "tips", label: "食べ方のコツ" },
  { id: "summary", label: "まとめ" },
];

export default function SukiyaDietPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleHero
        title="すき家でダイエット"
        subtitle="低カロリーメニューランキングとおすすめの食べ方【2026年最新】"
        imageUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop"
        breadcrumb="すき家ダイエット"
      />

      <ArticleLayout tocItems={tocItems} currentSlug="sukiya-diet">
        {/* Authority & Date */}
        <AuthorityBadge />
        <p className="text-sm text-gray-400 mt-3 mb-6">最終更新: 2026年3月19日</p>

        {/* Introduction */}
        <p className="mb-4">
          すき家は牛丼チェーン最大手。メニューの豊富さが魅力ですが、ダイエット中に最も注目すべきは<Marker>牛丼ライト（352kcal/P20g）</Marker>の存在です。ご飯の代わりに豆腐と野菜を使った画期的なメニューで、通常の牛丼並盛（733kcal）と比べて半分以下のカロリーに抑えられます。
        </p>
        <p className="mb-4">
          また、<Marker color="blue">まぐろたたき丼（455kcal/P28.5g）</Marker>のような魚メニューも充実しており、牛丼チェーンの中では最もメニューの選択肢が広いのがすき家の強みです。
        </p>
        <p className="mb-8">
          この記事では、すき家の全メニューをカロリー低い順にランキングし、ダイエットに最適なメニューの選び方を詳しく解説します。
        </p>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents items={tocItems} />
        </div>

        <ArticleImage src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop" alt="牛丼のイメージ写真" />

        {/* Section 1: カロリーランキング */}
        <section className="mb-16">
          <SectionHeading id="calorie-ranking">すき家メニューのカロリーランキング</SectionHeading>

          <p className="mb-4">
            すき家の主要メニューをカロリーの低い順に並べました。<Marker color="blue">牛丼ライトと魚系メニュー</Marker>がダイエット向けの上位を占めています。
          </p>

          <NutritionTable
            items={[
              { name: "牛丼ライト", calories: 352, protein: 20.0, fat: 18.5, carbs: 24.8, highlight: true },
              { name: "まぐろたたき丼（ミニ）", calories: 370, protein: 22.5, fat: 5.8, carbs: 58.0, highlight: true },
              { name: "まぐろたたき丼（並盛）", calories: 455, protein: 28.5, fat: 7.2, carbs: 72.5, highlight: true },
              { name: "牛丼ミニ", calories: 496, protein: 15.2, fat: 17.8, carbs: 68.5 },
              { name: "牛丼並盛", calories: 733, protein: 22.0, fat: 25.0, carbs: 104.5 },
              { name: "キムチ牛丼（並盛）", calories: 755, protein: 23.0, fat: 25.5, carbs: 108.0 },
              { name: "ねぎ玉牛丼（並盛）", calories: 810, protein: 27.5, fat: 32.5, carbs: 106.0 },
              { name: "牛丼大盛", calories: 966, protein: 30.5, fat: 34.0, carbs: 138.5 },
              { name: "牛丼メガ", calories: 1174, protein: 46.5, fat: 55.8, carbs: 118.5 },
            ]}
          />

          <p className="text-xs text-gray-400 mb-8">
            ※栄養成分はすき家公式サイトの情報をもとに記載。店舗により異なる場合があります。
          </p>

          <TipBox title="すき家のダイエットの強み">
            <p>すき家は牛丼チェーンの中で唯一<Marker>「牛丼ライト」（ご飯→豆腐＋野菜）</Marker>を提供しています。352kcalでタンパク質20gは、ダイエッターにとって非常にありがたい存在。また、まぐろたたき丼など魚系メニューも充実しており、選択肢の広さはトップクラスです。</p>
          </TipBox>
        </section>

        {/* Section 2: おすすめダイエットメニュー */}
        <section className="mb-16">
          <SectionHeading id="recommended">おすすめダイエットメニュー</SectionHeading>

          <p className="mb-6">
            カロリーと<Marker>PFCバランス</Marker>を考慮した、すき家のダイエット向けメニューベスト3を紹介します。
          </p>

          <RankingCard rank={1} title="牛丼ライト" subtitle="352kcal / P20.0g / F18.5g / C24.8g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              すき家ダイエットの絶対的エース。<Marker>ご飯の代わりに豆腐と野菜サラダ</Marker>を使用し、牛丼の味わいはそのままにカロリーを大幅カット。通常の牛丼並盛（733kcal）と比べて381kcalもの差があります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              糖質24.8gと低糖質で、豆腐のタンパク質も加わってP20g。糖質制限ダイエットにもローファットダイエットにも対応できる万能メニューです。
            </p>
          </RankingCard>

          <RankingCard rank={2} title="まぐろたたき丼（並盛）" subtitle="455kcal / P28.5g / F7.2g / C72.5g">
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Marker color="blue">脂質わずか7.2gで高タンパク28.5g</Marker>という驚異的なPFCバランス。ローファットダイエットをしている方にとって理想的なメニューです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              まぐろに含まれるDHA・EPAなどの良質な脂肪酸も摂取でき、健康面でもメリットが大きい。牛丼チェーンで魚が食べられるのはすき家ならではの魅力です。
            </p>
          </RankingCard>

          <RankingCard rank={3} title="牛丼ミニ" subtitle="496kcal / P15.2g / F17.8g / C68.5g">
            <p className="text-sm text-gray-700 leading-relaxed">
              「やっぱり普通の牛丼が食べたい」という方はミニサイズを。並盛（733kcal）から<Marker color="green">237kcalのカロリーダウン</Marker>で、500kcal以下に収まります。牛丼の味をしっかり楽しみながらカロリーを抑えたい方に最適です。
            </p>
          </RankingCard>

          <SubSectionHeading>注目メニュー：鮭朝食</SubSectionHeading>

          <NutritionCard
            name="鮭朝食"
            chain="すき家"
            calories={468}
            protein={24.5}
            fat={10.8}
            carbs={68.0}
            recommended
          />

          <p className="mb-8 mt-4">
            すき家の朝食メニューも見逃せません。鮭朝食は<Marker>468kcalでP24.5g、脂質わずか10.8g</Marker>という優秀な栄養バランス。ご飯・みそ汁・おかずが揃った定食スタイルで、朝から栄養バランスの良い食事が可能です。
          </p>

          <ArticleImage src="https://images.unsplash.com/photo-1532347231146-80afc9c3df2b?w=800&h=400&fit=crop" alt="新鮮な魚の料理イメージ" />
        </section>

        {/* Section 3: サイズ別カロリー比較 */}
        <section className="mb-16">
          <SectionHeading id="size-comparison">牛丼のサイズ別カロリー比較</SectionHeading>

          <p className="mb-6">
            すき家の牛丼はミニからメガまで5サイズ展開。<Marker>サイズ選びでカロリーは2倍以上の差</Marker>がつきます。
          </p>

          <ComparisonTable
            headers={["サイズ", "カロリー", "タンパク質", "脂質", "炭水化物"]}
            rows={[
              ["ミニ", "496 kcal", "P 15.2g", "F 17.8g", "C 68.5g"],
              ["並盛", "733 kcal", "P 22.0g", "F 25.0g", "C 104.5g"],
              ["中盛", "798 kcal", "P 28.5g", "F 32.0g", "C 90.0g"],
              ["大盛", "966 kcal", "P 30.5g", "F 34.0g", "C 138.5g"],
              ["メガ", "1174 kcal", "P 46.5g", "F 55.8g", "C 118.5g"],
            ]}
            bestRowIndex={0}
          />

          <TipBox title="「中盛」の裏技">
            <p>すき家の「中盛」は<Marker>ご飯少なめ・肉1.5倍</Marker>というサイズ。並盛より+65kcalですが、タンパク質は28.5gと大幅にアップ。炭水化物は並盛より少ない90g。タンパク質を重視する方には並盛より中盛の方がコスパ良好です。</p>
          </TipBox>

          <SubSectionHeading>牛丼ライトとの比較</SubSectionHeading>

          <ComparisonTable
            headers={["メニュー", "カロリー", "タンパク質", "糖質", "差分"]}
            rows={[
              ["牛丼ライト", "352 kcal", "P 20.0g", "C 24.8g", "基準"],
              ["牛丼ミニ", "496 kcal", "P 15.2g", "C 68.5g", "+144 kcal"],
              ["牛丼並盛", "733 kcal", "P 22.0g", "C 104.5g", "+381 kcal"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            牛丼ライトは並盛と比べて<Marker color="blue">381kcalも低く、糖質は約1/4</Marker>。ご飯を豆腐に置き換えるだけでこれだけの差が出ます。ダイエット中は積極的に牛丼ライトを活用しましょう。
          </p>
        </section>

        {/* Mid-article CTA */}
        <CTABanner
          title="すき家のカロリーをサクッと検索"
          subtitle="たべなびなら外食メニューの栄養成分をすぐに確認できます"
        />

        {/* Section 4: 避けるべきメニュー */}
        <section className="mb-16">
          <SectionHeading id="avoid">ダイエット中に避けるべきメニュー</SectionHeading>

          <p className="mb-4">
            すき家のメニューは豊富な反面、<Marker>1,000kcalを超える超高カロリーメニュー</Marker>も存在します。ダイエット中は特に注意が必要です。
          </p>

          <WarningBox title="ダイエット中は避けたいメニュー">
            <ul className="space-y-2">
              <li><span className="font-bold">牛丼メガ（1,174kcal）</span> ─ 肉が3倍で脂質55.8g。1食で1日分のカロリーの大半を消費してしまいます。</li>
              <li><span className="font-bold">牛丼大盛（966kcal）</span> ─ 炭水化物138.5gと糖質過多。ご飯の量が多すぎてカロリーの大半が炭水化物由来。</li>
              <li><span className="font-bold">ねぎ玉牛丼・並盛（810kcal）</span> ─ トッピングの卵とマヨネーズで脂質32.5g。見た目以上に高脂質。</li>
              <li><span className="font-bold">チーズ牛丼・並盛（850kcal）</span> ─ チーズ追加で+117kcal、脂質+8g。チーズ牛丼は人気ですがダイエットには不向き。</li>
              <li><span className="font-bold">カレー大盛（約940kcal）</span> ─ カレールウの脂質と大盛ご飯のダブルパンチ。避けるべきメニューの筆頭。</li>
            </ul>
          </WarningBox>

          <WarningBox title="トッピングの落とし穴">
            <ul className="space-y-2">
              <li><span className="font-bold">チーズ追加（+117kcal）</span> ─ 脂質が大幅に増加。すき家のチーズトッピングは量が多めで高カロリー。</li>
              <li><span className="font-bold">マヨネーズ追加（+約100kcal）</span> ─ ほぼ脂質のみ。ダイエット中は必ず避けましょう。</li>
              <li><span className="font-bold">おんたま追加（+約80kcal）</span> ─ カロリーは控えめだが、卵は毎食でなく1日1〜2個を目安に。</li>
            </ul>
          </WarningBox>
        </section>

        {/* Section 5: 食べ方のコツ */}
        <section className="mb-16">
          <SectionHeading id="tips">すき家ダイエットの食べ方のコツ</SectionHeading>

          <p className="mb-6">
            すき家の<Marker>豊富なメニューを活用したダイエット向きの食べ方</Marker>を紹介します。
          </p>

          <NumberedList
            items={[
              {
                title: "「牛丼ライト」を第一選択に",
                body: "迷ったら牛丼ライト（352kcal）。ご飯→豆腐＋野菜への置き換えで、牛丼の満足感はそのままにカロリーを半分以下に。糖質制限中の方はこれ一択と言っても過言ではありません。",
              },
              {
                title: "魚メニューを積極的に活用",
                body: "まぐろたたき丼（455kcal/P28.5g/F7.2g）は、脂質を極限まで抑えたい方に最適。すき家ならではの魚メニューを活用して、牛丼一辺倒にならない食事バリエーションを持ちましょう。",
              },
              {
                title: "ミニサイズを基本にする",
                body: "牛丼ミニ（496kcal）を基本サイズに。並盛から237kcalのカロリーカットで500kcal以下に収まります。物足りなければサラダやみそ汁を追加して調整を。",
              },
              {
                title: "朝食メニューを活用する",
                body: "鮭朝食（468kcal/P24.5g/F10.8g）をはじめ、すき家の朝食メニューは栄養バランスに優れたものが多い。朝食をすき家で摂ることで、1日のスタートから食事管理が可能です。",
              },
              {
                title: "トッピングは慎重に選ぶ",
                body: "チーズ（+117kcal）やマヨネーズ（+100kcal）は避け、おろしポン酢（+約15kcal）やキムチ（+約20kcal）など低カロリーなトッピングを選びましょう。紅生姜はほぼ0kcalなので自由に使えます。",
              },
            ]}
          />

          <ArticleImage src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop" alt="健康的な食事のイメージ" />

          <SubSectionHeading>おすすめの組み合わせ3パターン</SubSectionHeading>

          <ComparisonTable
            headers={["パターン", "メニュー構成", "カロリー", "タンパク質"]}
            rows={[
              ["低糖質", "牛丼ライト + みそ汁", "385 kcal", "P 22.0g"],
              ["ローファット", "まぐろたたき丼（並盛）+ みそ汁", "488 kcal", "P 30.5g"],
              ["バランス型", "牛丼ミニ + サラダ + みそ汁", "560 kcal", "P 17.5g"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            低糖質パターンの<Marker>「牛丼ライト+みそ汁」は385kcalでP22g</Marker>。糖質は約27gと非常に低く、糖質制限ダイエット中の外食で最も頼りになる組み合わせです。
          </p>

          <p className="mb-4">
            ローファットパターンの<Marker color="blue">「まぐろたたき丼+みそ汁」は488kcalで脂質わずか約9g</Marker>。脂質制限ダイエット中の方にはこちらがベスト。タンパク質30.5gも確保できる理想的な構成です。
          </p>

          <SubSectionHeading>PFCバランスで見るすき家メニュー</SubSectionHeading>

          <p className="mb-4">
            ダイエットの方針によって、<Marker>すき家で選ぶべきメニューは大きく変わります</Marker>。目的別の最適メニューを整理しました。
          </p>

          <ComparisonTable
            headers={["目的", "おすすめメニュー", "カロリー", "特徴"]}
            rows={[
              ["糖質制限", "牛丼ライト", "352 kcal", "糖質24.8gで豆腐ベース"],
              ["ローファット", "まぐろたたき丼（並盛）", "455 kcal", "脂質7.2gと超低脂質"],
              ["高タンパク", "牛丼中盛", "798 kcal", "P28.5gで肉1.5倍"],
              ["カロリー制限", "牛丼ミニ", "496 kcal", "500kcal以下でシンプル"],
            ]}
            bestRowIndex={0}
          />

          <p className="mb-4">
            すき家の最大の強みは<Marker color="green">あらゆるダイエット方針に対応できるメニューの広さ</Marker>。糖質制限なら牛丼ライト、ローファットならまぐろたたき丼と、他の牛丼チェーンにはない選択肢が揃っています。
          </p>

          <TipBox title="すき家を1日の食事プランに組み込む">
            <p>1日の目標カロリー1,600kcalの場合、昼食に牛丼ライト（352kcal）を選べば朝・夕食で1,248kcal使えます。牛丼ライトなら<Marker>糖質も24.8gと低く、午後の眠気も軽減</Marker>されるため、仕事中のランチにも最適です。</p>
          </TipBox>

          <SubSectionHeading>すき家 vs 他チェーンの比較</SubSectionHeading>

          <p className="mb-4">
            牛丼3大チェーン（吉野家・松屋・すき家）の中で、すき家のダイエット上の強みは以下の3点です。
          </p>

          <CheckList
            items={[
              "牛丼ライト ─ ご飯を豆腐+野菜に置換できる唯一のチェーン",
              "魚メニュー ─ まぐろたたき丼など脂質7g台のローファットメニューが選べる",
              "サイズ展開 ─ ミニから中盛まで、目的に合わせた細かいサイズ調整が可能",
            ]}
          />

          <p className="mb-4">
            特にローファットダイエットをしている方には、<Marker color="blue">まぐろたたき丼（F7.2g）は外食全体で見ても屈指の低脂質メニュー</Marker>です。牛丼チェーンでこれほど脂質の低いメニューが食べられるのはすき家だけの強みです。
          </p>
        </section>

        <AffiliateProductGrid
          title="牛丼ライト派の食卓を支える家ストック"
          productIds={["myprotein-impact", "tuna-can", "konjac-rice", "shaker-bottle"]}
        />

        {/* Section 6: まとめ */}
        <section className="mb-16">
          <SectionHeading id="summary">まとめ</SectionHeading>

          <p className="mb-6">
            すき家は牛丼ライトや魚メニューなど、ダイエッター向けの選択肢が最も充実した牛丼チェーンです。この記事のポイントを整理しました。
          </p>

          <CheckList
            items={[
              "牛丼ライト（352kcal/P20g）はすき家ダイエットの最強メニュー",
              "まぐろたたき丼（455kcal/P28.5g/F7.2g）はローファットダイエットに最適",
              "牛丼はミニサイズ（496kcal）を選んで500kcal以下に",
              "牛丼メガ（1,174kcal）やチーズ・マヨトッピングは避ける",
              "朝食メニューも栄養バランスが良くダイエット向き",
            ]}
          />

          <p className="text-xs text-gray-400 mt-4 mb-8">
            ※栄養成分はすき家公式サイトの情報をもとに記載。店舗・時期により異なる場合があります。
          </p>
        </section>

        {/* End CTA */}
        <CTABanner
          title="外食のカロリーを簡単に比較"
          subtitle="たべなびで吉野家・松屋・すき家のメニューをまとめてチェック"
        />

        {/* ArticleFooter */}
        <ArticleFooter currentSlug="sukiya-diet" />

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
