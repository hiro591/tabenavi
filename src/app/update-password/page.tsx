'use client'

// パスワード再設定メールのリンクから着地するページ。
// Supabaseがリンク経由でセッションを張るので、updateUserで新パスワードを設定する。
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Logo } from '@/components/Logo'
import { authErrorMessage } from '@/lib/auth-errors'

export default function UpdatePasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('パスワードは8文字以上で入力してください。')
      return
    }

    setLoading(true)
    const supabase = createClient()

    // リンク経由のセッションが無い場合は再設定からやり直してもらう
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('リンクの有効期限が切れています。もう一度パスワード再設定メールを送信してください。')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(authErrorMessage(error, 'パスワードの更新に失敗しました。時間をおいてお試しください。'))
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <Logo size={40} textSize="text-2xl" />
          </div>
          <h1 className="text-lg font-bold text-gray-900 mt-4">新しいパスワードを設定</h1>
        </div>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 rounded-lg px-3 py-2 mb-4" role="alert">
            {error}
          </p>
        )}

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
              新しいパスワード
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
            className="w-full py-3.5 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-sky-200 active:scale-[0.98]"
          >
            {loading ? '更新中...' : 'パスワードを更新する'}
          </button>
        </form>
      </div>
    </div>
  )
}
