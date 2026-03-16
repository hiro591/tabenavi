"use client";

import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("メールアドレスを入力してください。");
      return;
    }
    if (!validateEmail(email)) {
      setError("正しいメールアドレスの形式で入力してください。");
      return;
    }
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("送信に失敗しました。もう一度お試しください。");
    }
  };

  return (
    <section id="signup" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          β版先行登録受付中
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          外食をもっと楽しもう
        </h2>
        <p className="text-lg text-gray-400 mb-3">
          今すぐ登録して、外食専門の食事管理を体験してください。
          β版ユーザーは<span className="text-orange-400 font-semibold">プレミアム機能を3ヶ月無料</span>でご利用いただけます。
        </p>
        <p className="text-sm text-amber-400 font-semibold mb-10">
          先着500名限定 · 残り247名
        </p>

        {!submitted ? (
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="メールアドレスを入力"
                required
                className={`flex-1 bg-white/10 border text-white placeholder-gray-500 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors ${
                  error ? "border-red-500" : "border-white/20"
                }`}
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25 whitespace-nowrap"
              >
                無料で始める →
              </button>
            </form>
            {error && (
              <p className="text-red-400 text-sm mt-2 text-left">{error}</p>
            )}
          </div>
        ) : (
          <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-4xl mb-3">🎉</div>
            <div className="text-white font-bold text-lg mb-2">登録ありがとうございます！</div>
            <div className="text-gray-400 text-sm mb-4">
              <span className="text-green-400">{email}</span> に確認メールをお送りしました。
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-left">
              <div className="text-white text-sm font-semibold mb-2">次のステップ</div>
              <ol className="text-gray-400 text-sm space-y-1.5 list-decimal list-inside">
                <li>メール内の確認リンクをクリック</li>
                <li>プロフィール（目標・よく行くチェーン）を設定</li>
                <li>最初の食事を記録してみましょう！</li>
              </ol>
            </div>
          </div>
        )}

        <p className="text-gray-600 text-xs mt-4">
          スパムメールは送りません。いつでも登録解除できます。
        </p>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span>β版ユーザー満足度</span>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div>クレジットカード不要</div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div>いつでも解約可能</div>
        </div>
      </div>
    </section>
  );
}
