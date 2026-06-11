// Supabase認証エラー → 日本語文言。未知コードは汎用メッセージにフォールバック。
const MESSAGES: Record<string, string> = {
  invalid_credentials: "メールアドレスまたはパスワードが正しくありません。",
  email_not_confirmed:
    "メールアドレスの確認が完了していません。受信した確認メールのリンクを開いてください。",
  user_already_exists: "このメールアドレスは既に登録されています。ログインをお試しください。",
  email_exists: "このメールアドレスは既に登録されています。ログインをお試しください。",
  over_email_send_rate_limit:
    "メール送信の回数制限に達しました。しばらく待ってからお試しください。",
  weak_password: "パスワードが簡単すぎます。8文字以上の複雑なパスワードを設定してください。",
  same_password: "現在と同じパスワードは設定できません。",
  user_not_found: "このメールアドレスのアカウントが見つかりません。",
};

export function authErrorMessage(
  error: { code?: string } | null,
  fallback = "エラーが発生しました。時間をおいてお試しください。"
): string {
  if (!error) return fallback;
  return (error.code && MESSAGES[error.code]) || fallback;
}

/** オープンリダイレクト防止: サイト内パスのみ許可 */
export function safeNextPath(next: string | null | undefined): string | null {
  return next && next.startsWith("/") && !next.startsWith("//") ? next : null;
}
