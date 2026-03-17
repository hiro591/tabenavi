import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | たべなび",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
          >
            &larr; トップページに戻る
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          プライバシーポリシー
        </h1>
        <p className="text-sm text-gray-500 mb-10">最終更新日：2026年3月1日</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. 個人情報の収集と利用
            </h2>
            <p className="mb-3">
              たべなび（以下「当サービス」）は、サービスの提供にあたり、以下の個人情報を収集する場合があります。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>メールアドレス（アカウント登録・ログイン時）</li>
              <li>ニックネームやプロフィール情報</li>
              <li>食事記録や栄養管理に関するデータ</li>
              <li>サービスの利用状況に関するデータ</li>
            </ul>
            <p className="mt-3">
              収集した情報は、サービスの提供・改善、ユーザーサポート、統計分析の目的でのみ利用いたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Cookieの使用
            </h2>
            <p>
              当サービスでは、ログイン状態の維持やサービスの利用状況の分析のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることが可能ですが、一部機能が制限される場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. データの保管と安全性
            </h2>
            <p>
              お客様の個人情報は、適切なセキュリティ対策を施したサーバーに保管され、不正アクセス・紛失・破壊・改ざんおよび漏洩の防止に努めています。通信はSSL/TLSにより暗号化されています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. 第三者への提供
            </h2>
            <p className="mb-3">
              当サービスは、以下の場合を除き、収集した個人情報を第三者に提供することはありません。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>ユーザー本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のために必要な場合</li>
              <li>
                サービス提供に必要な範囲で業務委託先に提供する場合（適切な管理のもと）
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. ユーザーの権利
            </h2>
            <p>
              ユーザーは、当サービスが保有する自身の個人情報について、開示・訂正・削除を請求する権利を有します。アカウントの削除をご希望の場合は、下記のお問い合わせ先までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. プライバシーポリシーの変更
            </h2>
            <p>
              当サービスは、必要に応じて本ポリシーを変更することがあります。重要な変更がある場合は、サービス内でお知らせいたします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. お問い合わせ先
            </h2>
            <p>
              プライバシーに関するご質問やご要望は、以下までご連絡ください。
            </p>
            <p className="mt-2 font-medium text-gray-900">
              メール：
              <a
                href="mailto:tabenavi.app@gmail.com"
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                tabenavi.app@gmail.com
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
