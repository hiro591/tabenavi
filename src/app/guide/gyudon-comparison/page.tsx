import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家、ダイエットに最適なのは？ | たべなび",
  description:
    "吉野家・松屋・すき家の牛丼カロリー・タンパク質・脂質・炭水化物を徹底比較。ダイエット中に選ぶべき牛丼チェーンとおすすめメニューを紹介。",
  keywords: [
    "牛丼 カロリー 比較",
    "吉野家 松屋 すき家 比較",
    "牛丼 ダイエット",
    "牛丼 栄養",
    "牛丼 タンパク質",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家、ダイエットに最適なのは？",
  description:
    "吉野家・松屋・すき家の牛丼カロリー・タンパク質・脂質・炭水化物を徹底比較。ダイエット中に選ぶべき牛丼チェーンとおすすめメニューを紹介。",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "たべなび", url: "https://tabenavi.jp" },
  publisher: { "@type": "Organization", name: "たべなび" },
  mainEntityOfPage: "https://tabenavi.jp/guide/gyudon-comparison",
};

export default function GyudonComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/guide"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">ガイド一覧</span>
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          牛丼チェーン3社カロリー・栄養比較｜吉野家・松屋・すき家、ダイエットに最適なのは？
        </h1>
        <p className="text-sm text-gray-400 mb-8">最終更新: 2026年3月</p>

        <p className="text-gray-600 leading-relaxed mb-8">
          「ダイエット中だけど牛丼が食べたい...」そんな方のために、吉野家・松屋・すき家の牛丼カロリー・栄養成分を徹底比較しました。
          各チェーンの並盛からサイズ別データ、ダイエット向けメニューまで詳しく解説します。
        </p>

        {/* 基本データ比較表 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            牛丼チェーン3社 基本データ比較表（並盛）
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            まずは3社の牛丼・牛めし（並盛）の基本データを比較してみましょう。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="text-left px-4 py-3 font-medium">チェーン</th>
                  <th className="text-right px-4 py-3 font-medium">価格</th>
                  <th className="text-right px-4 py-3 font-medium">カロリー</th>
                  <th className="text-right px-4 py-3 font-medium">タンパク質</th>
                  <th className="text-right px-4 py-3 font-medium">脂質</th>
                  <th className="text-right px-4 py-3 font-medium">炭水化物</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    <Link href="/guide/yoshinoya" className="hover:text-orange-500 transition-colors">
                      吉野家
                    </Link>
                  </td>
                  <td className="text-right px-4 py-3 text-gray-700">¥498</td>
                  <td className="text-right px-4 py-3 text-green-600 font-semibold">635 kcal</td>
                  <td className="text-right px-4 py-3 text-blue-600 font-semibold">20.0 g</td>
                  <td className="text-right px-4 py-3 text-gray-700">23.0 g</td>
                  <td className="text-right px-4 py-3 text-gray-700">89.0 g</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    <Link href="/guide/matsuya" className="hover:text-orange-500 transition-colors">
                      松屋
                    </Link>
                  </td>
                  <td className="text-right px-4 py-3 text-green-600 font-semibold">¥400</td>
                  <td className="text-right px-4 py-3 text-gray-700">709 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">17.8 g</td>
                  <td className="text-right px-4 py-3 text-gray-700">25.2 g</td>
                  <td className="text-right px-4 py-3 text-gray-700">100.5 g</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-900 font-medium">
                    <Link href="/guide/sukiya" className="hover:text-orange-500 transition-colors">
                      すき家
                    </Link>
                  </td>
                  <td className="text-right px-4 py-3 text-green-600 font-semibold">¥400</td>
                  <td className="text-right px-4 py-3 text-gray-700">638 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">17.0 g</td>
                  <td className="text-right px-4 py-3 text-green-600 font-semibold">20.5 g</td>
                  <td className="text-right px-4 py-3 text-gray-700">95.0 g</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            ※価格は税込。栄養成分は公式サイト掲載値を基にしています。
          </p>
        </section>

        {/* サイズ別カロリー比較 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            サイズ別カロリー比較（小盛〜特盛）
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            牛丼はサイズによってカロリーが大きく変わります。ダイエット中はサイズ選びが最も重要なポイントです。
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="text-left px-4 py-3 font-medium">サイズ</th>
                  <th className="text-right px-4 py-3 font-medium">吉野家</th>
                  <th className="text-right px-4 py-3 font-medium">松屋</th>
                  <th className="text-right px-4 py-3 font-medium">すき家</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-900 font-medium">ミニ / 小盛</td>
                  <td className="text-right px-4 py-3 text-gray-700">488 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">527 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">496 kcal</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-900 font-medium">並盛</td>
                  <td className="text-right px-4 py-3 text-gray-700">635 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">709 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">638 kcal</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-900 font-medium">大盛</td>
                  <td className="text-right px-4 py-3 text-gray-700">863 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">945 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">863 kcal</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-900 font-medium">特盛</td>
                  <td className="text-right px-4 py-3 text-gray-700">1,013 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">1,135 kcal</td>
                  <td className="text-right px-4 py-3 text-gray-700">1,027 kcal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-orange-50 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>ポイント：</strong>並盛と大盛では約200〜250kcalの差があります。
              ダイエット中は小盛やミニを選ぶだけで、150kcal近く抑えることができます。
            </p>
          </div>
        </section>

        {/* ダイエット中に選ぶべきチェーン */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            ダイエット中に選ぶべき牛丼チェーンは？
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            3社のデータを比較すると、目的によっておすすめのチェーンが異なります。
          </p>
          <div className="grid gap-4">
            <div className="p-5 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-blue-800 mb-2">
                タンパク質重視なら → 吉野家
              </h3>
              <p className="text-sm text-blue-700">
                並盛でタンパク質20gは3社中トップ。筋トレ中の方は吉野家がベストチョイスです。
                PFCバランスも3社中最も優れています。
              </p>
            </div>
            <div className="p-5 bg-green-50 rounded-xl">
              <h3 className="font-semibold text-green-800 mb-2">
                カロリー重視なら → 吉野家 / すき家
              </h3>
              <p className="text-sm text-green-700">
                吉野家635kcal、すき家638kcalとほぼ同等。松屋は709kcalと約70kcal高めです。
                脂質が最も低いのはすき家（20.5g）です。
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl">
              <h3 className="font-semibold text-amber-800 mb-2">
                コスパ重視なら → 松屋 / すき家
              </h3>
              <p className="text-sm text-amber-700">
                松屋・すき家は¥400で吉野家より約¥100安い。松屋は味噌汁が無料でつくので、
                お得感はNo.1です。
              </p>
            </div>
          </div>
        </section>

        {/* 各チェーンのダイエット向けメニュー */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            各チェーンのダイエット向けメニュー
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                吉野家のおすすめ
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">ライザップ牛サラダ</p>
                    <p className="text-xs text-gray-500">高タンパク・低糖質の代表メニュー</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-orange-500">414 kcal</p>
                    <p className="text-xs text-gray-400">P30g</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">牛丼（小盛）</p>
                    <p className="text-xs text-gray-500">シンプルにサイズダウン</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-orange-500">488 kcal</p>
                    <p className="text-xs text-gray-400">P15g</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                松屋のおすすめ
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">牛めし（ミニ）</p>
                    <p className="text-xs text-gray-500">味噌汁付きでこの価格はコスパ最強</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-orange-500">527 kcal</p>
                    <p className="text-xs text-gray-400">P13g</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">ネギたっぷり旨辛ネギたま牛めし</p>
                    <p className="text-xs text-gray-500">ネギと卵でタンパク質UP</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-orange-500">782 kcal</p>
                    <p className="text-xs text-gray-400">P24g</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                すき家のおすすめ
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">牛丼ライト</p>
                    <p className="text-xs text-gray-500">ご飯の代わりに豆腐！糖質制限の味方</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">352 kcal</p>
                    <p className="text-xs text-gray-400">P20g</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">牛丼（ミニ）</p>
                    <p className="text-xs text-gray-500">¥350でワンコイン以下</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-orange-500">496 kcal</p>
                    <p className="text-xs text-gray-400">P13g</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5つのダイエットテクニック */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            牛丼を食べる時の5つのダイエットテクニック
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">
                1
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  サイズは小盛・ミニを選ぶ
                </h3>
                <p className="text-sm text-gray-600">
                  並盛と小盛では約150kcalの差。まずサイズダウンが最も効果的です。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">
                2
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  サラダや味噌汁をセットにする
                </h3>
                <p className="text-sm text-gray-600">
                  サイドメニューで満腹感を高め、メインのサイズダウンを無理なく実現できます。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">
                3
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  つゆだくは避ける
                </h3>
                <p className="text-sm text-gray-600">
                  つゆには糖分と塩分が多く含まれています。つゆ抜き・つゆ少なめで注文すると◎
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">
                4
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  卵を追加してタンパク質UP
                </h3>
                <p className="text-sm text-gray-600">
                  卵1個は約80kcalですが、タンパク質6gが追加されます。腹持ちも良くなるのでおすすめ。
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">
                5
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  前後の食事で調整する
                </h3>
                <p className="text-sm text-gray-600">
                  牛丼は炭水化物と脂質が多めなので、前後の食事で野菜とタンパク質を意識して摂りましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">まとめ</h2>
          <div className="p-6 bg-gray-50 rounded-xl">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>- カロリーが最も低いのは<strong>吉野家</strong>（635kcal）</li>
              <li>- タンパク質が最も多いのは<strong>吉野家</strong>（20g）</li>
              <li>- 脂質が最も低いのは<strong>すき家</strong>（20.5g）</li>
              <li>- コスパ最強は<strong>松屋</strong>（¥400＋味噌汁無料）</li>
              <li>- 糖質制限なら<strong>すき家の牛丼ライト</strong>（352kcal）一択</li>
            </ul>
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            ダイエット中でも牛丼を楽しむことは十分可能です。大切なのは、チェーン選びとサイズ選び、
            そして前後の食事でのバランス調整。たべなびを使えば、1日の栄養バランスを簡単に管理できます。
          </p>
        </section>

        {/* 関連ガイド */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            関連するガイド
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guide/yoshinoya"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              吉野家
            </Link>
            <Link
              href="/guide/matsuya"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              松屋
            </Link>
            <Link
              href="/guide/sukiya"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              すき家
            </Link>
            <Link
              href="/guide/eating-out-diet"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              外食ダイエット完全ガイド
            </Link>
            <Link
              href="/guide/low-fat-eating-out"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              低脂質メニューガイド
            </Link>
            <Link
              href="/guide/calorie-database"
              className="text-sm px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              カロリー一覧
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10 border-t border-gray-100">
          <p className="text-gray-600 mb-4 text-sm">
            栄養管理をもっと簡単に。
          </p>
          <Link
            href="/signup"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-200"
          >
            たべなびで栄養管理を始める（無料）
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 text-center mb-4">
          ※ 掲載されている価格・栄養成分は公式サイト等の情報を基にしており、
          店舗や時期によって異なる場合があります。最新情報は各チェーンの公式サイトをご確認ください。
        </p>

        {/* Back link */}
        <div className="text-center pb-8">
          <Link
            href="/guide"
            className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
          >
            &larr; ガイド一覧に戻る
          </Link>
        </div>
      </article>
    </div>
  );
}
