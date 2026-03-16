import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "無効なメールアドレスです" }, { status: 400 });
  }

  // オーナーへの通知メール
  const ownerEmail = process.env.OWNER_EMAIL;
  if (ownerEmail) {
    const { error: notifyError } = await resend.emails.send({
      from: "たべなび通知 <onboarding@resend.dev>",
      to: ownerEmail,
      subject: `【たべなび】新規登録：${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
          <div style="background: #f97316; padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">🍽️ たべなび - 新規登録通知</h2>
          </div>
          <div style="background: #fff; padding: 24px; border: 1px solid #fed7aa; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 8px; color: #4b5563;">新しいユーザーが登録しました。</p>
            <p style="font-size: 18px; font-weight: bold; color: #1a1a1a; margin: 0 0 16px;">${email}</p>
            <p style="color: #9ca3af; font-size: 13px; margin: 0;">登録日時：${new Date().toLocaleString("ja-JP")}</p>
          </div>
        </div>
      `,
    });
    if (notifyError) {
      console.error("通知メールエラー:", notifyError);
    }
  }

  return NextResponse.json({ success: true });
}
