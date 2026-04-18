import Link from "next/link";

export const metadata = {
  title: "広告掲載および表示に関する方針 | たべなび",
  description:
    "たべなびの広告・アフィリエイトプログラムへの参加に関する方針および表示ルールについて。",
};

export default function DisclosurePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-sky-500 transition-colors"
          >
            &larr; トップページに戻る
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          広告掲載および表示に関する方針
        </h1>
        <p className="text-sm text-gray-500 mb-10">最終更新日：2026年4月18日</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. 広告・アフィリエイトプログラムへの参加について
            </h2>
            <p>
              当サイト「たべなび」は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
            </p>
            <p className="mt-3">
              また、楽天アフィリエイト、もしもアフィリエイト、A8.netその他の第三者配信のアフィリエイトサービスにも参加しており、これらのサービスを利用して商品を紹介し、リンク経由で商品が購入された場合に紹介料を受け取ることがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. 広告表示について（景品表示法/ステマ規制対応）
            </h2>
            <p>
              2023年10月1日施行のいわゆる「ステマ規制」（不当景品類及び不当表示防止法に基づく告示）に対応し、当サイトに掲載される広告およびアフィリエイトリンクには以下のいずれかの方法で広告である旨を明示します。
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>商品紹介セクション内に「PR」バッジを表示</li>
              <li>記事冒頭に「本記事には広告が含まれます」旨を明記</li>
              <li>当該リンクに「[PR]」表記を併記</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. 商品の選定について
            </h2>
            <p>
              当サイトで紹介する商品は、当サイトの運営者が独自に選定したものであり、紹介料の有無や金額が選定基準に影響を与えることはありません。掲載されている商品情報・価格は執筆時点のものであり、最新の情報については各販売サイトをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. 免責事項
            </h2>
            <p>
              当サイトに掲載されている商品の購入・利用によって生じたいかなる損害についても、当サイトは責任を負いかねます。商品のご購入は、ご自身の判断と責任において行ってください。
            </p>
            <p className="mt-3">
              また、リンク先のサイトでの取引・サービス提供については、それぞれのサイトの運営事業者が責任を負うものであり、当サイトは関与いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. お問い合わせ
            </h2>
            <p>
              本方針に関するご質問・ご意見は、
              <Link
                href="/contact"
                className="text-sky-600 underline hover:text-sky-700"
              >
                お問い合わせフォーム
              </Link>
              よりご連絡ください。
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
