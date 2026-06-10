import Link from "next/link";

export const metadata = {
  title: "利用規約 | たべなび",
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">利用規約</h1>
        <p className="text-sm text-gray-500 mb-10">最終更新日：2026年3月1日</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. サービスの概要
            </h2>
            <p>
              たべなび（以下「当サービス」）は、外食チェーンのメニューの栄養情報を提供し、ユーザーの食事管理をサポートするWebサービスです。当サービスを利用することにより、本利用規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. 利用条件
            </h2>
            <p>
              当サービスは、個人の食事管理を目的として提供されています。商用利用、データの無断転載・再配布は禁止されています。未成年の方は、保護者の同意のもとご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. アカウント
            </h2>
            <p>
              一部機能の利用にはアカウント登録が必要です。ユーザーは、正確な情報を登録し、アカウント情報を適切に管理する責任を負います。アカウントの不正利用により生じた損害について、当サービスは責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. 禁止事項
            </h2>
            <p className="mb-3">
              以下の行為を禁止します。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>法令または公序良俗に反する行為</li>
              <li>当サービスの運営を妨害する行為</li>
              <li>他のユーザーへの迷惑行為</li>
              <li>不正アクセスやシステムへの攻撃</li>
              <li>当サービスのデータの無断スクレイピングや再配布</li>
              <li>虚偽の情報を登録する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. 免責事項
            </h2>
            <p className="mb-3">
              当サービスが提供する栄養情報は、各チェーン店の公開情報に基づいていますが、以下の点にご注意ください。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                栄養成分の数値は概算であり、実際の数値とは異なる場合があります
              </li>
              <li>メニューの改定や地域差により、情報が最新でない場合があります</li>
              <li>
                医療上のアドバイスに代わるものではありません。健康上の問題がある場合は、医師にご相談ください
              </li>
            </ul>
            <p className="mt-3">
              当サービスの利用によって生じたいかなる損害についても、当サービスは一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. サービスの変更・終了
            </h2>
            <p>
              当サービスは、事前の通知なくサービス内容の変更、一時停止、または終了を行う場合があります。これにより生じた損害について、当サービスは責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. 準拠法
            </h2>
            <p>
              本規約は日本法に準拠し、日本の裁判所を専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. お問い合わせ先
            </h2>
            <p>
              利用規約に関するご質問は、以下までご連絡ください。
            </p>
            <p className="mt-2 font-medium text-gray-900">
              メール：
              <a
                href="mailto:hirokin20070518@gmail.com"
                className="text-sky-500 hover:text-sky-600 transition-colors"
              >
                hirokin20070518@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-400">
        &copy; 2026 たべなび. All rights reserved.
      </footer>
    </div>
  );
}
