import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const nextParam = searchParams.get('next')
  const next = nextParam && nextParam.startsWith('/') && !nextParam.startsWith('//') ? nextParam : null

  if (code) {
    const supabase = await createClient()
    await supabase.auth.exchangeCodeForSession(code)

    // Check if this is a new user by looking at profile creation time
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('created_at')
        .eq('id', user.id)
        .single()

      if (profile) {
        const createdAt = new Date(profile.created_at)
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000)

        if (createdAt > fiveMinutesAgo) {
          return NextResponse.redirect(`${origin}/onboarding${next ? `?next=${encodeURIComponent(next)}` : ''}`)
        }
      }
    }
  }

  return NextResponse.redirect(`${origin}${next ?? '/dashboard'}`)
}
