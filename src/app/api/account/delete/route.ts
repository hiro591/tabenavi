import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

const USER_SCOPED_TABLES = [
  "food_logs",
  "weight_logs",
  "favorites",
  "cheat_days",
  "saved_combos",
  "post_likes",
  "post_comments",
  "public_posts",
  "share_events",
] as const;

export async function POST(request: Request) {
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const password = body.password?.trim();
  if (!password) {
    return NextResponse.json(
      { error: "パスワードが入力されていません" },
      { status: 400 },
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user || !user.email) {
    return NextResponse.json(
      { error: "ログイン状態が確認できません。再度ログインしてください。" },
      { status: 401 },
    );
  }

  const { error: reauthError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password,
  });

  if (reauthError) {
    return NextResponse.json(
      { error: "パスワードが正しくありません" },
      { status: 401 },
    );
  }

  const admin = createAdminClient();
  const userId = user.id;
  const failures: string[] = [];

  for (const table of USER_SCOPED_TABLES) {
    const { error } = await admin.from(table).delete().eq("user_id", userId);
    if (error) {
      failures.push(`${table}: ${error.message}`);
    }
  }

  const { error: profileError } = await admin
    .from("profiles")
    .delete()
    .eq("id", userId);
  if (profileError) {
    failures.push(`profiles: ${profileError.message}`);
  }

  if (failures.length > 0) {
    console.error("[account-delete] table cleanup failures", {
      userId,
      failures,
    });
  }

  const { error: deleteUserError } = await admin.auth.admin.deleteUser(userId);
  if (deleteUserError) {
    console.error("[account-delete] auth user deletion failed", {
      userId,
      error: deleteUserError.message,
    });
    return NextResponse.json(
      {
        error:
          "アカウント削除中にエラーが発生しました。サポートまでご連絡ください。",
      },
      { status: 500 },
    );
  }

  await supabase.auth.signOut();

  return NextResponse.json({ ok: true });
}
