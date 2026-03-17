'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

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

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md text-center">
          <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-bold text-xl">た</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">たべなび</h1>
          <div className="mt-6 p-4 bg-green-50 rounded-2xl">
            <p className="text-green-700 font-medium">確認メールを送信しました</p>
            <p className="text-green-600 text-sm mt-1">
              メール内のリンクをクリックして、登録を完了してください。
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium">
              ログインページへ戻る
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-bold text-xl">た</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">たべなび</h1>
          <p className="text-gray-500 text-sm mt-1">アカウントを作成</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              お名前
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
              placeholder="たべなび太郎"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
              placeholder="mail@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              パスワード
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
              placeholder="8文字以上"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '登録中...' : 'アカウント登録'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          すでにアカウントをお持ちの方は
          <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium ml-1">
            ログイン
          </Link>
        </p>
      </div>
    </div>
  )
}
