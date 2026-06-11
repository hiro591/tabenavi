'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { ClientAuthRedirect } from '@/components/ClientAuthRedirect'
import { Logo } from '@/components/Logo'
import { authErrorMessage, safeNextPath } from '@/lib/auth-errors'
import { Sparkles } from 'lucide-react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = safeNextPath(searchParams.get('next'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(authErrorMessage(error, 'ログインに失敗しました。時間をおいてお試しください。'))
      setLoading(false)
      return
    }

    // 記録CTA等から来た場合は元の文脈(例: /record?menu_id=xxx)へ復帰
    router.push(next ?? '/dashboard')
  }


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <ClientAuthRedirect />
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <Logo size={40} textSize="text-2xl" />
          </div>
          <p className="text-gray-400 text-sm mt-1">外食しながら、カラダづくり。</p>
        </div>

        {next && (
          <div className="flex items-start gap-2.5 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3 mb-5">
            <Sparkles className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-sky-700 leading-relaxed">
              記録やお気に入りの利用には、ログインまたは
              <Link
                href={`/signup?next=${encodeURIComponent(next)}`}
                className="font-bold underline decoration-sky-300 hover:text-sky-800 mx-0.5"
              >
                無料登録（30秒）
              </Link>
              が必要です。完了後、元の画面に戻ります。
            </p>
          </div>
        )}

        {error && (
          <p className="text-red-500 text-sm bg-red-50 rounded-lg px-3 py-2 mb-4" role="alert">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
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
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 transition-colors text-sm"
              placeholder="パスワードを入力"
            />
            <p className="text-right mt-1.5">
              <Link href="/reset-password" className="text-xs text-gray-400 hover:text-sky-500 transition-colors">
                パスワードをお忘れですか？
              </Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-sky-200 active:scale-[0.98]"
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          アカウントをお持ちでない方は
          <Link
            href={next ? `/signup?next=${encodeURIComponent(next)}` : '/signup'}
            className="text-sky-500 hover:text-sky-600 font-medium ml-1 transition-colors"
          >
            無料登録
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}
