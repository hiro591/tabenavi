import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "無効なメールアドレスです" }, { status: 400 });
  }

  // ユーザーへのウェルカムメール
  const { error: sendError } = await resend.emails.send({
    from: "たべなび <onboarding@resend.dev>",
    to: email,
    subject: "【たべなび】β版先行登録ありがとうございます！",
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: linear-gradient(135deg, #f97316, #f59e0b); padding: 32px; border-radius: 16px 16px 0 0; text-align: center;">
          <h1 style="color: white; font-size: 24px; margin: 0;">🍽️ たべなび</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">外食をもっと賢く、楽しく。</p>
        </div>
        <div style="background: #fff; padding: 32px; border: 1px solid #fed7aa; border-top: none; border-radius: 0 0 16px 16px;">
          <h2 style="font-size: 20px; margin: 0 0 16px;">β版先行登録ありがとうございます！</h2>
          <p style="color: #4b5563; line-height: 1.7;">
            たべなびのβ版先行登録が完了しました。<br>
            サービスリリース時に最初にご案内します。
          </p>
          <div style="background: #fff7ed; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #c2410c;">🎁 β版特典</p>
            <p style="margin: 0; color: #4b5563;">プレミアム機能を<strong>3ヶ月間無料</strong>でご利用いただけます。</p>
          </div>
          <p style="color: #9ca3af; font-size: 13px; margin: 24px 0 0;">
            ご不明な点はこのメールへ返信してください。<br>
            たべなびチーム
          </p>
        </div>
      </div>
    `,
  });

  if (sendError) {
    console.error("Resend error:", sendError);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  // オーナーへの通知メール（失敗しても無視）
  const ownerEmail = process.env.OWNER_EMAIL;
  if (ownerEmail) {
    await resend.emails.send({
      from: "たべなび通知 <onboarding@resend.dev>",
      to: ownerEmail,
      subject: `【新規登録】${email} が登録しました`,
      html: `<p>新しいユーザーが登録しました：<strong>${email}</strong></p><p>登録日時：${new Date().toLocaleString("ja-JP")}</p>`,
    });
  }

  return NextResponse.json({ success: true });
}
