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
            className="text-sm text-gray-500 hover:text-sky-500 transition-colors"
          >
            &larr; トップページに戻る
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          プライバシーポリシー
        </h1>
        <p className="text-sm text-gray-500 mb-10">最終更新日：2026年4月25日</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          <section>
            <p className="mb-3">
              たべなび（以下「当サービス」）は、Web 版（https://tabenavi.jp）
              および iOS アプリ版（App Store 配信）の双方を含む栄養管理サービスです。
              本ポリシーは、当サービスにおけるユーザーの個人情報および各種データの取扱いについて定めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. 収集する情報
            </h2>
            <p className="mb-3">
              当サービスは、サービス提供にあたり以下の情報を収集する場合があります。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>メールアドレス（アカウント登録・ログイン時）</li>
              <li>ニックネーム、性別、年齢、身長、体重などのプロフィール情報</li>
              <li>食事記録（メニュー名、量、時刻、写真）</li>
              <li>体重・体組成記録</li>
              <li>サービス利用ログ（アクセス時刻、画面遷移、機能利用状況）</li>
              <li>デバイス情報（OS バージョン、アプリバージョン、言語設定）</li>
              <li>クラッシュレポート（不具合発生時の技術情報）</li>
            </ul>
            <p className="mt-3">
              IP アドレスは Cloudflare 等の CDN 提供者によって一時的に取得されますが、
              当サービスでは個人を特定する目的で保存しません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. 情報の利用目的
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>サービスの提供および機能改善</li>
              <li>ユーザー認証およびアカウント管理</li>
              <li>記録データの保存・表示・分析（PFC計算、グラフ表示等）</li>
              <li>パーソナライズされたメニュー推薦</li>
              <li>ユーザーサポートおよびお問い合わせ対応</li>
              <li>不正利用・セキュリティ侵害の防止</li>
              <li>サービス利用状況の統計分析（個人を特定しない形式）</li>
              <li>新機能・お知らせ等の通知（任意設定）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. iOS アプリ版で利用する端末機能
            </h2>
            <p className="mb-3">
              iOS アプリ版では、以下の端末機能を利用します。
              いずれも初回利用時に許可ダイアログが表示され、ユーザーの明示的な同意がない限り使用しません。
              また、iOS の「設定」アプリからいつでも個別に許可を取り消すことができます。
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>カメラ（NSCameraUsageDescription）</strong>:
                食事の写真を撮影して記録に紐付けるために使用します。
                撮影した画像はユーザーのアカウントに紐付けて当サービスのストレージに保存されます。
              </li>
              <li>
                <strong>写真ライブラリ（NSPhotoLibraryUsageDescription）</strong>:
                既に保存されている食事の写真を選択して記録に紐付けるために使用します。
              </li>
              <li>
                <strong>プッシュ通知</strong>:
                朝・夜の食事記録リマインドや、新機能のお知らせを送信します。
                通知設定ページからいつでもON/OFF切替可能です。
              </li>
              <li>
                <strong>ローカル通知</strong>:
                端末内でスケジュールされたリマインド通知を表示します。
                個人情報の外部送信は行いません。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. データの保管とセキュリティ
            </h2>
            <p className="mb-3">
              ユーザーデータは Supabase（米国・EU リージョン）が提供する
              暗号化されたデータベースに保管されます。
              通信は SSL/TLS により全て暗号化されています。
            </p>
            <p>
              当サービスは、不正アクセス・紛失・破壊・改ざんおよび漏洩を防ぐため、
              業界標準のセキュリティ対策（HTTPS 通信、パスワードのハッシュ化、
              アクセス権限管理、定期的なセキュリティアップデート等）を実施しています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. 利用するサードパーティサービス
            </h2>
            <p className="mb-3">
              当サービスは、機能提供のため以下の外部サービスを利用しています。
              各サービスはそれぞれのプライバシーポリシーに基づきデータを取扱います。
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Supabase Inc.</strong>（データベース・認証）:
                ユーザー認証情報、プロフィール、食事・体重記録の保管
              </li>
              <li>
                <strong>Google LLC（Google Analytics 4）</strong>:
                匿名化された利用統計の取得（IP 匿名化済み）
              </li>
              <li>
                <strong>Resend, Inc.</strong>（メール送信）:
                パスワード再設定、お問い合わせ返信等のメール送信
              </li>
              <li>
                <strong>Apple Inc.</strong>（iOS アプリ版のプッシュ通知配信）:
                APNs を経由したプッシュ通知の配信
              </li>
              <li>
                <strong>株式会社もしも</strong>（Web版アフィリエイト）:
                Web 版のアフィリエイトリンクのクリック計測
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. 国際的なデータ転送
            </h2>
            <p>
              当サービスのデータベース（Supabase）はアメリカ合衆国およびヨーロッパ連合域内に所在します。
              ユーザー情報はこれらの地域に転送・保管される場合があります。
              転送先のサービス提供者は、適切な技術的・組織的安全管理措置を講じています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              7. Cookie の使用
            </h2>
            <p>
              Web 版ではログイン状態の維持や利用状況の分析のために Cookie を使用しています。
              ブラウザの設定により Cookie を無効にできますが、一部機能が制限される場合があります。
              iOS アプリ版では同等の目的でデバイス内ストレージを使用しています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              8. 第三者への提供
            </h2>
            <p className="mb-3">
              当サービスは、以下の場合を除き、収集した個人情報を第三者に提供しません。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>ユーザー本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のために必要な場合</li>
              <li>サービス提供に必要な範囲で業務委託先に提供する場合（適切な管理のもと）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. ユーザーの権利
            </h2>
            <p className="mb-3">
              ユーザーは、当サービスが保有する自身の個人情報について以下の権利を有します。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>保有する個人情報の開示請求</li>
              <li>誤りがある場合の訂正請求</li>
              <li>利用停止または削除請求</li>
              <li>第三者提供の停止請求</li>
            </ul>
            <p className="mt-3">
              これらの権利行使は、ログイン後の「設定 → アカウント情報」より行うか、
              下記お問い合わせ先までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. アカウント削除について
            </h2>
            <p className="mb-3">
              ユーザーは、いつでも自身のアカウントを削除することができます。
              削除手順は以下の通りです。
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                アプリまたは Web 版にログイン → 「設定 / プロフィール」ページ →
                「アカウントを削除」ボタン
              </li>
              <li>確認ダイアログでパスワードを再入力 → 削除実行</li>
              <li>
                削除を実行すると、認証情報・プロフィール・食事記録・体重記録・写真等、
                ユーザーに紐付くすべてのデータが即時かつ完全に消去されます
              </li>
              <li>削除されたデータは復旧できません</li>
            </ul>
            <p className="mt-3">
              何らかの理由で上記手順での削除が困難な場合は、登録メールアドレスから
              下記お問い合わせ先までご連絡ください。原則 7 営業日以内に削除を完了します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. 未成年者の利用について
            </h2>
            <p>
              当サービスは 13 歳未満の児童を主たる対象としていません。
              13 歳未満の方が当サービスを利用する場合は、必ず保護者の同意のもとでご利用ください。
              13 歳未満の方の個人情報を意図せず収集したことが判明した場合、
              速やかに当該情報を削除します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              12. 健康情報の取扱い
            </h2>
            <p>
              当サービスはユーザーの体重・食事記録等のヘルスケア関連情報を取扱いますが、
              これらは医学的アドバイスを提供するものではありません。
              当サービスの情報を医療判断の根拠としないでください。
              持病をお持ちの方、医師から食事指導を受けている方は必ず主治医にご相談ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              13. プライバシーポリシーの変更
            </h2>
            <p>
              当サービスは、必要に応じて本ポリシーを変更することがあります。
              重要な変更がある場合は、サービス内またはメールでお知らせいたします。
              変更後も継続して当サービスをご利用いただいた場合、
              変更後のポリシーに同意いただいたものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              14. お問い合わせ先
            </h2>
            <p>
              プライバシーに関するご質問・ご要望・苦情等は、以下までご連絡ください。
            </p>
            <p className="mt-2 font-medium text-gray-900">
              メール：
              <a
                href="mailto:tabenavi.app@gmail.com"
                className="text-sky-500 hover:text-sky-600 transition-colors"
              >
                tabenavi.app@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              運営者: たべなび運営事務局
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
