'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { ClientAuthRedirect } from '@/components/ClientAuthRedirect'
import { CheckCircle, ChevronRight, Utensils, BarChart3, MapPin } from 'lucide-react'
import { Logo } from '@/components/Logo'

export default function SignupPage() {
  const router = useRouter()
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
    const { data, error } = await supabase.auth.signUp({
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

    if (data.session) {
      router.push('/onboarding')
      return
    }

    setSuccess(true)
    setLoading(false)
  }


  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 w-full max-w-md text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <Logo size={40} textSize="text-2xl" />
          </div>
          <div className="mt-6 p-5 bg-emerald-400/10 rounded-xl border border-emerald-400/20">
            <p className="text-emerald-600 font-bold">確認メールを送信しました</p>
            <p className="text-emerald-600/80 text-sm mt-2 leading-relaxed">
              メール内のリンクをクリックして、登録を完了してください。
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            <Link href="/login" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">
              ログインページへ戻る
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ClientAuthRedirect />
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

        {/* Left: Value proposition */}
        <div className="flex-1 max-w-md lg:max-w-none animate-fade-in-up">
          <div className="mb-6">
            <Logo size={36} textSize="text-xl" />
          </div>

          <h1 className="text-[28px] sm:text-[34px] font-bold text-gray-900 leading-tight mb-4">
            外食しながら、
            <br />
            <span className="text-gradient">カラダづくり。</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
            チェーン店・コンビニのメニューを選ぶだけ。
            <br />
            カロリー・PFCを自動で記録・管理できます。
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Utensils className="w-[18px] h-[18px] text-sky-500" />
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-sm">32チェーン・6,000品以上対応</p>
                <p className="text-xs text-gray-400 mt-0.5">マクドナルド・吉野家・サイゼリヤなど主要チェーンを網羅</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BarChart3 className="w-[18px] h-[18px] text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-sm">PFCで外食先を絞り込み</p>
                <p className="text-xs text-gray-400 mt-0.5">カロリー・タンパク質・脂質で最適なメニューを検索</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-[18px] h-[18px] text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-700 text-sm">マップで近くのメニューを発見</p>
                <p className="text-xs text-gray-400 mt-0.5">今いる場所の近くで体づくり向きのメニューが見つかる</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
              無料で利用可能
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
              3タップで記録
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
              登録30秒
            </span>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-8 w-full max-w-md animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">無料アカウント作成</h2>
            <p className="text-gray-400 text-sm mt-1">30秒で登録完了</p>
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 rounded-lg px-3 py-2 mb-4" role="alert">
              {error}
            </p>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                お名前
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-sm"
                placeholder="ニックネームでOK"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-sm"
                placeholder="mail@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                パスワード
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-sm"
                placeholder="8文字以上"
              />
            </div>


            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 shadow-lg shadow-sky-200 active:scale-[0.98]"
            >
              {loading ? '登録中...' : (
                <>
                  無料で始める
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-5">
            すでにアカウントをお持ちの方は
            <Link href="/login" className="text-sky-500 hover:text-sky-600 font-medium ml-1 transition-colors">
              ログイン
            </Link>
          </p>

          <p className="text-center text-[10px] text-gray-300 mt-3 leading-relaxed">
            登録により<Link href="/terms" className="underline hover:text-gray-500 transition-colors">利用規約</Link>と<Link href="/privacy" className="underline hover:text-gray-500 transition-colors">プライバシーポリシー</Link>に同意したものとみなされます
          </p>
        </div>
      </div>
    </div>
  )
}
