'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Logo } from '@/components/Logo'

export default function LoginPage() {
  const router = useRouter()
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
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  const handleGoogleLogin = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${location.origin}/auth/callback` },
    })
  }

  return (
    <div className="min-h-screen bg-[#141B2D] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm animate-fade-in">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo size={36} textSize="text-xl" />
          </div>
          <p className="text-slate-500 text-sm mt-2">おかえりなさい</p>
        </div>

        {/* Card */}
        <div className="bg-[#1E2A3F] rounded-2xl border border-[#334155]/50 p-6">

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-[#253245] border border-[#334155] rounded-xl text-slate-200 text-sm font-medium hover:bg-[#2D3B50] transition-colors flex items-center justify-center gap-2.5"
          >
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Googleでログイン
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#334155]/40" />
            <span className="text-[11px] text-slate-600">or</span>
            <div className="flex-1 h-px bg-[#334155]/40" />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-3.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#253245] border border-[#334155] rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors text-sm"
              placeholder="メールアドレス"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#253245] border border-[#334155] rounded-xl text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-colors text-sm"
              placeholder="パスワード"
            />

            {error && (
              <p className="text-red-400 text-xs bg-red-400/10 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white text-sm font-bold rounded-xl transition-all disabled:opacity-50 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              {loading ? 'ログイン中...' : 'ログイン'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-5">
          はじめての方は
          <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 font-medium ml-1 transition-colors">
            無料登録
          </Link>
        </p>
      </div>
    </div>
  )
}
