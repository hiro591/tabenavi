import Link from "next/link";
import { ChevronLeft, ExternalLink, BookOpen, Calculator, RefreshCw, AlertCircle, ShieldCheck, User } from "lucide-react";

export const metadata = {
  title: "栄養成分データの出典・編集方針・運営者情報 | たべなび",
  description:
    "たべなびの栄養成分データは全32チェーンを各社公式サイトから手動で取得・検証しています(AI推定ではありません)。出典一覧・計算方法・更新プロセス・運営者情報を公開。",
  alternates: { canonical: "https://www.tabenavi.jp/sources" },
};

type Chain = {
  name: string;
  url: string;
  category: string;
  note?: string;
};

// 掲載チェーンは「アプリに実データを収録済みの32チェーン」と完全一致させている。
// データを持たないチェーンを出典として載せない(=信頼性の担保)。
const CHAINS: Chain[] = [
  // コンビニ
  { name: "セブンイレブン", url: "https://www.sej.co.jp/products/", category: "コンビニ", note: "「商品情報」より各カテゴリの栄養成分を確認" },
  { name: "ファミリーマート", url: "https://www.family.co.jp/goods/", category: "コンビニ", note: "「商品情報」より各メニューの栄養成分を確認" },
  { name: "ローソン", url: "https://www.lawson.co.jp/recommend/original/", category: "コンビニ", note: "オリジナル商品ページより栄養成分を確認" },

  // ハンバーガー・ファストフード
  { name: "マクドナルド", url: "https://www.mcdonalds.co.jp/quality/allergy_Nutrition/", category: "ハンバーガー・ファストフード", note: "「アレルギー・栄養成分」公式ページ" },
  { name: "モスバーガー", url: "https://www.mos.jp/menu/", category: "ハンバーガー・ファストフード", note: "メニューページ →「カロリー・アレルゲン」より閲覧" },
  { name: "ケンタッキー", url: "https://www.kfc.co.jp/menu/", category: "ハンバーガー・ファストフード", note: "メニュー一覧 → アレルゲン・栄養成分より確認" },
  { name: "バーガーキング", url: "https://www.burgerkingjapan.co.jp/", category: "ハンバーガー・ファストフード", note: "各商品詳細に栄養成分表示" },
  { name: "ゼッテリア", url: "https://www.zetteria.jp/", category: "ハンバーガー・ファストフード", note: "メニューページ各商品に栄養成分表示" },
  { name: "サブウェイ", url: "https://www.subway.co.jp/menu/", category: "ハンバーガー・ファストフード", note: "各商品に栄養成分表示" },

  // 牛丼・定食
  { name: "吉野家", url: "https://www.yoshinoya.com/menu/info/allergy.html", category: "牛丼・定食", note: "「アレルギー・栄養成分一覧」公式ページ" },
  { name: "松屋", url: "https://www.matsuyafoods.co.jp/matsuya/menu/", category: "牛丼・定食", note: "メニュー一覧 →「アレルギー・栄養成分」より閲覧" },
  { name: "すき家", url: "https://www.sukiya.jp/menu/", category: "牛丼・定食", note: "メニュー → アレルゲン・栄養成分一覧" },
  { name: "大戸屋", url: "https://www.ootoya.com/menu_list/", category: "牛丼・定食", note: "各メニュー詳細ページ内に栄養成分表示" },
  { name: "やよい軒", url: "https://www.yayoiken.com/menu/", category: "牛丼・定食", note: "各メニュー詳細ページ内に栄養成分表示" },
  { name: "松のや", url: "https://www.matsuyafoods.co.jp/matsunoya/menu/", category: "牛丼・定食", note: "メニュー一覧より栄養成分を確認" },

  // ファミレス
  { name: "サイゼリヤ", url: "https://www.saizeriya.co.jp/menu/", category: "ファミレス", note: "メニュー一覧 →「カロリー・アレルゲン」より閲覧" },
  { name: "ガスト", url: "https://www.skylark.co.jp/gusto/menu/", category: "ファミレス", note: "メニュー一覧 →「アレルゲン・栄養成分」より閲覧" },
  { name: "バーミヤン", url: "https://www.skylark.co.jp/bamiyan/menu/", category: "ファミレス", note: "メニュー一覧 →「アレルゲン・栄養成分」より閲覧" },
  { name: "デニーズ", url: "https://www.dennys.jp/menu/", category: "ファミレス", note: "メニュー一覧 →「アレルゲン・栄養成分」より閲覧" },
  { name: "ジョイフル", url: "https://www.joyfull.co.jp/menu/", category: "ファミレス", note: "メニュー一覧より栄養成分を確認" },
  { name: "ココス", url: "https://www.cocos-jpn.co.jp/menu/", category: "ファミレス", note: "メニュー一覧より栄養成分を確認" },
  { name: "びっくりドンキー", url: "https://www.bikkuri-donkey.com/menu/", category: "ファミレス", note: "メニュー一覧より栄養成分を確認" },
  { name: "ステーキガスト", url: "https://www.skylark.co.jp/steak_gusto/menu/", category: "ファミレス", note: "メニュー一覧 →「アレルゲン・栄養成分」より閲覧" },

  // 中華・ラーメン
  { name: "餃子の王将", url: "https://www.ohsho.co.jp/menu/", category: "中華・ラーメン", note: "メニュー一覧 →「アレルゲン情報」より栄養成分を確認" },
  { name: "日高屋", url: "https://hiday.co.jp/menu/", category: "中華・ラーメン", note: "メニュー一覧から各商品の栄養成分を確認" },

  // カフェ
  { name: "スターバックス", url: "https://www.starbucks.co.jp/menu/", category: "カフェ", note: "各メニュー詳細ページ内に栄養成分情報" },
  { name: "ドトールコーヒー", url: "https://www.doutor.co.jp/dcs/menu/", category: "カフェ", note: "メニュー →「カロリー・アレルゲン」より閲覧" },

  // 回転寿司
  { name: "くら寿司", url: "https://www.kurasushi.co.jp/menu/", category: "回転寿司", note: "メニュー一覧 →「アレルゲン・カロリー」より閲覧" },
  { name: "スシロー", url: "https://www.akindo-sushiro.co.jp/menu/", category: "回転寿司", note: "各メニュー詳細ページ内に栄養成分表示" },

  // カレー
  { name: "CoCo壱番屋", url: "https://www.ichibanya.co.jp/menu/", category: "カレー", note: "メニュー一覧より栄養成分・アレルゲンを確認" },

  // 麺類
  { name: "丸亀製麺", url: "https://www.marugame-seimen.com/menu/", category: "麺類", note: "メニュー一覧 →「カロリー・栄養成分」より閲覧" },

  // 天丼
  { name: "天丼てんや", url: "https://www.tenya.co.jp/menu/", category: "天丼", note: "メニュー一覧から各商品の栄養成分を確認" },
];

const CATEGORIES = [
  "コンビニ",
  "ハンバーガー・ファストフード",
  "牛丼・定食",
  "ファミレス",
  "中華・ラーメン",
  "カフェ",
  "回転寿司",
  "カレー",
  "麺類",
  "天丼",
];

export default function SourcesPage() {
  const lastUpdated = "2026年6月";

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/profile"
            className="w-9 h-9 -ml-2 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="戻る"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </Link>
          <h1 className="text-base font-bold text-gray-900">栄養成分データの出典と計算方法</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">
        {/* Intro */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            たべなびで提供する栄養成分データ (kcal・タンパク質・脂質・炭水化物) と、目標カロリー・PFC の計算方法、データ更新プロセス、運営者情報について記載しています。
          </p>
          <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-100 rounded-xl p-3 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-xs text-emerald-800 leading-relaxed">
              <span className="font-bold">全32チェーン・6,000品以上のデータは、各社公式サイトから1件ずつ手動で取得・検証しています。</span>
              AI による推定値や自動生成は使用していません。掲載しているのは「アプリに実データを収録済みのチェーンのみ」です。
            </p>
          </div>
          <p className="text-xs text-gray-500">最終更新: {lastUpdated}</p>
        </section>

        {/* 運営者情報 (E-E-A-T) */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-4 h-4 text-sky-500" />
            <h2 className="text-sm font-bold text-gray-900">運営者情報</h2>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
              ヒ
            </div>
            <div className="flex-1 text-xs text-gray-700 leading-relaxed space-y-2">
              <p>
                <span className="font-bold text-gray-900">ヒロ（たべなび 開発・運営）</span>
              </p>
              <p>
                外食中心の生活で体重が86kgまで増えた後、外食のカロリー・PFCを「数字で選ぶ」ことを習慣化し、73kgまで13kgの減量に成功。
                「外食しかしない人でも、数字さえ分かれば痩せられる」という実体験から、外食・コンビニ専門の栄養管理アプリ「たべなび」を個人で開発・運営しています。
              </p>
              <p>
                栄養成分データは外部委託や自動収集に頼らず、各チェーンの公式情報を開発者自身が照合して収録しています。
                データの誤りや改善のご指摘は{" "}
                <Link href="/contact" className="text-sky-600 underline">お問い合わせ</Link>
                {" "}より歓迎しています。
              </p>
            </div>
          </div>
        </section>

        {/* §1 計算方法 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-4 h-4 text-sky-500" />
            <h2 className="text-sm font-bold text-gray-900">1. カロリー・PFCの計算方法</h2>
          </div>

          <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
            <div>
              <p className="font-bold text-gray-900 mb-1">▼ 食事1食あたりの kcal・PFC</p>
              <p>
                各メニューの kcal・タンパク質 (g)・脂質 (g)・炭水化物 (g) は、各外食チェーン公式サイトで公開されている数値をそのまま掲載しています。
                ユーザーが選択した量 (×0.5、×1、×2 等) を乗じた値が記録されます。
              </p>
              <div className="mt-2 bg-gray-50 rounded-lg p-3 font-mono text-[11px] text-gray-700">
                記録される kcal = メニュー公表 kcal × 数量<br />
                記録される P/F/C = メニュー公表 P/F/C × 数量
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">▼ 1日合計の集計</p>
              <p>
                朝・昼・晩・間食の各記録を合算した値を表示します。
              </p>
              <div className="mt-2 bg-gray-50 rounded-lg p-3 font-mono text-[11px] text-gray-700">
                1日合計 kcal = Σ(各食事 kcal × 数量)<br />
                1日合計 P/F/C = Σ(各食事 P/F/C × 数量)
              </div>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">▼ 1日の目標カロリー (TDEE)</p>
              <p>
                目標摂取カロリーは、初期設定で入力された性別・年齢・身長・体重・活動量から、ハリス-ベネディクト改良式 (Revised Harris-Benedict Equation, 1984) で算出した基礎代謝量 (BMR) に活動係数を乗じ、目標 (減量/維持/増量) に応じて調整しています。
              </p>
              <div className="mt-2 bg-gray-50 rounded-lg p-3 font-mono text-[11px] text-gray-700 space-y-2">
                <div>
                  <span className="text-gray-500">[男性] BMR =</span><br />
                  88.362 + (13.397 × 体重kg) + (4.799 × 身長cm) − (5.677 × 年齢)
                </div>
                <div>
                  <span className="text-gray-500">[女性] BMR =</span><br />
                  447.593 + (9.247 × 体重kg) + (3.098 × 身長cm) − (4.330 × 年齢)
                </div>
                <div className="pt-1 border-t border-gray-200">
                  <span className="text-gray-500">TDEE =</span> BMR × 活動係数<br />
                  <span className="text-gray-500">活動係数:</span> 低い 1.2 / やや低い 1.375 / 中程度 1.55 / 高い 1.725
                </div>
                <div className="pt-1 border-t border-gray-200">
                  <span className="text-gray-500">目標カロリー =</span><br />
                  減量目標: TDEE − 500 kcal<br />
                  維持目標: TDEE<br />
                  増量目標: TDEE + 300 kcal
                </div>
              </div>
              <p className="mt-2 text-[11px] text-gray-500">
                参照: Roza AM, Shizgal HM. The Harris Benedict equation reevaluated. Am J Clin Nutr. 1984;40(1):168-182.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-1">▼ PFC のエネルギー換算</p>
              <p>
                kcal の検算には Atwater 係数 (タンパク質 4 kcal/g、脂質 9 kcal/g、炭水化物 4 kcal/g) を使用しています。
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                参照: 厚生労働省「日本人の食事摂取基準 (2020年版)」
              </p>
            </div>
          </div>
        </section>

        {/* §2 データ出典 */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-bold text-gray-900">2. 栄養成分データの出典 (チェーン別)</h2>
          </div>

          <p className="text-xs text-gray-700 leading-relaxed mb-4">
            たべなびに収録している<span className="font-bold">全32チェーン</span>について、各社公式サイトで公開されている栄養成分データ (アレルギー情報、カロリー表、メニュー詳細ページ等) を出典としています。下記リンクから一次情報をご確認いただけます。
          </p>

          {CATEGORIES.map((category) => {
            const chainsInCategory = CHAINS.filter((c) => c.category === category);
            if (chainsInCategory.length === 0) return null;

            return (
              <div key={category} className="mb-4 last:mb-0">
                <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {category}
                </h3>
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  {chainsInCategory.map((chain, idx) => (
                    <a
                      key={chain.name}
                      href={chain.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start justify-between gap-2 px-3 py-3 active:bg-gray-100 transition-colors ${
                        idx !== chainsInCategory.length - 1 ? "border-b border-gray-200" : ""
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800">{chain.name}</p>
                        {chain.note && (
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{chain.note}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-sky-500 shrink-0 mt-0.5">
                        <span>公式</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* §3 更新プロセス */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-3">
            <RefreshCw className="w-4 h-4 text-emerald-500" />
            <h2 className="text-sm font-bold text-gray-900">3. データ更新プロセス</h2>
          </div>
          <ul className="text-xs text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
            <li>各チェーンの公式公開データを開発者が手動で照合・収録しています。</li>
            <li>新メニュー・季節限定メニューの追加、栄養成分の変更は、可能な限り四半期ごとに反映を試みます。</li>
            <li>ユーザーから報告いただいた誤りは、確認後すみやかに修正を行います (順次対応)。</li>
            <li>当社はチェーン店と公式に提携しているわけではなく、すべて公開情報を基にデータを構築しています。</li>
          </ul>
        </section>

        {/* §4 データの限界と精度 */}
        <section className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <h2 className="text-sm font-bold text-amber-900">4. データの限界と精度</h2>
          </div>
          <ul className="text-xs text-amber-800 leading-relaxed space-y-2 list-disc list-inside">
            <li>
              栄養成分データは各チェーン公式サイトの公開データを基に作成していますが、店舗・時期・季節限定メニュー・地域限定商品・カスタマイズ (トッピング、サイズ変更等) により実際の値と異なる場合があります。
            </li>
            <li>
              一部チェーンでは栄養成分データが部分的にのみ公開されているため、未収録のメニューや概算値で記載しているメニューがあります。
            </li>
            <li>
              最新の正確な栄養成分情報は、必ず各チェーン店の公式サイトまたは店頭でご確認ください。
            </li>
            <li>
              本アプリの情報は栄養学の基礎理論に基づきますが、医学的アドバイスを提供するものではありません。持病をお持ちの方、医師から食事指導を受けている方は主治医にご相談ください。
            </li>
            <li>
              データの誤りや不足を発見された場合は、{" "}
              <Link href="/contact" className="text-amber-700 underline font-medium">
                お問い合わせ
              </Link>
              {" "}よりご報告ください。順次修正対応いたします。
            </li>
          </ul>
        </section>

        {/* Back link */}
        <Link
          href="/profile"
          className="block text-center text-sm text-gray-500 mt-2 underline"
        >
          マイページに戻る
        </Link>
      </div>
    </main>
  );
}
