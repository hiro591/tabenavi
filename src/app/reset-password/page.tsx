'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Logo } from '@/components/Logo'
import { authErrorMessage } from '@/lib/auth-errors'
import { MailCheck } from 'lucide-react'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    })

    if (error) {
      setError(authErrorMessage(error, '送信に失敗しました。時間をおいてお試しください。'))
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <Logo size={40} textSize="text-2xl" />
          </div>
          <h1 className="text-lg font-bold text-gray-900 mt-4">パスワードの再設定</h1>
          <p className="text-gray-400 text-sm mt-1">
            登録したメールアドレスに再設定用リンクを送ります
          </p>
        </div>

        {sent ? (
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MailCheck className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-2">メールを送信しました</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {email} 宛に再設定用リンクを送りました。メール内のリンクから新しいパスワードを設定してください。届かない場合は迷惑メールフォルダもご確認ください。
            </p>
            <Link href="/login" className="text-sm text-sky-500 hover:text-sky-600 font-medium transition-colors">
              ログインページへ戻る
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <p className="text-red-500 text-sm bg-red-50 rounded-lg px-3 py-2 mb-4" role="alert">
                {error}
              </p>
            )}

            <form onSubmit={handleReset} className="space-y-4">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-sky-200 active:scale-[0.98]"
              >
                {loading ? '送信中...' : '再設定リンクを送る'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-6">
              <Link href="/login" className="text-sky-500 hover:text-sky-600 font-medium transition-colors">
                ログインページへ戻る
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
