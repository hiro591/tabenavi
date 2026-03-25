'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { CheckCircle, ChevronRight, Utensils, BarChart3, MapPin } from 'lucide-react'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (password.length < 8) {
      setError('パスワードは8文字以上で入力してください。')
      setLoading(false)
      return
    }

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
        },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  const handleGoogleSignup = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#141B2D] flex items-center justify-center p-4">
        <div className="bg-[#1E2A3F] rounded-2xl border border-[#334155]/50 p-8 w-full max-w-md text-center animate-fade-in">
          <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
            <span className="text-white font-bold text-2xl">た</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-100 mb-2">たべなび</h1>
          <div className="mt-6 p-5 bg-emerald-400/10 rounded-xl border border-emerald-400/20">
            <p className="text-emerald-400 font-bold">確認メールを送信しました</p>
            <p className="text-emerald-400/80 text-sm mt-2 leading-relaxed">
              メール内のリンクをクリックして、登録を完了してください。
            </p>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              ログインページへ戻る
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#141B2D] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

        {/* Left: Value proposition */}
        <div className="flex-1 max-w-md lg:max-w-none animate-fade-in-up">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-bold text-lg">た</span>
            </div>
            <span className="text-xl font-bold text-slate-100">たべなび</span>
          </div>

          <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-4">
            外食しながら、
            <br />
            <span className="text-gradient">カラダづくり。</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            チェーン店・コンビニのメニューを選ぶだけ。
            <br />
            カロリー・PFCを自動で記録・管理できます。
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Utensils className="w-[18px] h-[18px] text-cyan-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-200 text-sm">20チェーン・500メニュー対応</p>
                <p className="text-xs text-slate-500 mt-0.5">マクドナルド・吉野家・サイゼリヤなど主要チェーンを網羅</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BarChart3 className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-200 text-sm">PFCで外食先を絞り込み</p>
                <p className="text-xs text-slate-500 mt-0.5">カロリー・タンパク質・脂質で最適なメニューを検索</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-[18px] h-[18px] text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-200 text-sm">マップで近くのメニューを発見</p>
                <p className="text-xs text-slate-500 mt-0.5">今いる場所の近くで体づくり向きのメニューが見つかる</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              無料で利用可能
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              3タップで記録
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
              登録30秒
            </span>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-[#1E2A3F] rounded-2xl border border-[#334155]/50 p-7 sm:p-8 w-full max-w-md animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-slate-100">無料アカウント作成</h2>
            <p className="text-slate-500 text-sm mt-1">30秒で登録完了</p>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignup}
            className="w-full py-3.5 bg-[#253245] border border-[#334155] rounded-xl text-slate-200 font-medium hover:bg-[#2D3B50] transition-colors flex items-center justify-center gap-2.5 mb-5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Googleで始める
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-[#334155]/50" />
            <span className="text-xs text-slate-600">または</span>
            <div className="flex-1 h-px bg-[#334155]/50" />
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                お名前
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#253245] border border-[#334155] rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors text-sm"
                placeholder="ニックネームでOK"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#253245] border border-[#334155] rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors text-sm"
                placeholder="mail@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-[#253245] border border-[#334155] rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors text-sm"
                placeholder="8文字以上"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              {loading ? '登録中...' : (
                <>
                  無料で始める
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-5">
            すでにアカウントをお持ちの方は
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium ml-1 transition-colors">
              ログイン
            </Link>
          </p>

          <p className="text-center text-[10px] text-slate-600 mt-3 leading-relaxed">
            登録により<Link href="/terms" className="underline hover:text-slate-400 transition-colors">利用規約</Link>と<Link href="/privacy" className="underline hover:text-slate-400 transition-colors">プライバシーポリシー</Link>に同意したものとみなされます
          </p>
        </div>
      </div>
    </div>
  )
}
