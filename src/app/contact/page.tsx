"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          お問い合わせ
        </h1>
        <p className="text-gray-600 mb-10">
          ご質問・ご要望がございましたら、お気軽にご連絡ください。
        </p>

        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-10">
          <p className="text-sm text-gray-700 mb-1">メールでのお問い合わせ</p>
          <a
            href="mailto:tabenavi.app@gmail.com"
            className="text-lg font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            tabenavi.app@gmail.com
          </a>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="text-2xl mb-3">&#10003;</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              送信しました
            </h2>
            <p className="text-gray-600 text-sm">
              お問い合わせいただきありがとうございます。内容を確認の上、折り返しご連絡いたします。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-sky-500 hover:text-sky-600 transition-colors"
            >
              別のお問い合わせを送る
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              送信する
            </button>
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            よくある質問
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-900 mb-1">
                Q. 栄養情報はどれくらい正確ですか？
              </p>
              <p>
                各チェーン店が公式に公開している情報に基づいていますが、概算値のため実際とは異なる場合があります。
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">
                Q. アカウントを削除したい場合は？
              </p>
              <p>
                上記メールアドレスまでご連絡いただければ、速やかに対応いたします。
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">
                Q. 対応してほしいチェーン店があります
              </p>
              <p>
                お問い合わせフォームからリクエストをお送りください。順次対応を検討いたします。
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-400">
        &copy; 2026 たべなび. All rights reserved.
      </footer>
    </div>
  );
}
