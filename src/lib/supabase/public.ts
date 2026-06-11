// 認証不要の公開データ読み取り用Supabaseクライアント。
// server.ts と違い cookies() を使わないため、ISR/SSG(静的生成)を妨げない。
// items / chains などの公開ページ(サーバーコンポーネント)では必ずこちらを使う。
// ※ 認証が必要な処理には使わないこと(セッションを持たない)。
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createPublicClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}
