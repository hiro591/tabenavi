"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, Megaphone, Sparkles, Gift } from "lucide-react";

const NOTIFICATIONS = [
  {
    id: "1",
    type: "announcement",
    icon: Megaphone,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
    title: "たべなびへようこそ！",
    body: "たべなびをご利用いただきありがとうございます。外食しながら、カラダづくりを一緒に始めましょう。",
    date: "今日",
    unread: true,
  },
  {
    id: "2",
    type: "feature",
    icon: Sparkles,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-500",
    title: "「みんなの外食」機能が登場！",
    body: "他のユーザーの食事を参考にしたり、自分の外食をシェアできるようになりました。",
    date: "今日",
    unread: true,
  },
  {
    id: "3",
    type: "tip",
    icon: Gift,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    title: "目標カロリーを設定しましょう",
    body: "プロフィールから目標カロリーを設定すると、毎日の食事管理がもっと効果的になります。",
    date: "今日",
    unread: false,
  },
];

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
          <button
            onClick={() => router.push("/dashboard")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">お知らせ</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4 space-y-2">
        {NOTIFICATIONS.map((notif) => {
          const Icon = notif.icon;
          return (
            <div
              key={notif.id}
              className={`bg-white rounded-2xl border p-4 shadow-sm ${
                notif.unread ? "border-sky-200 bg-sky-50/30" : "border-gray-100"
              }`}
            >
              <div className="flex gap-3">
                <div className={`w-10 h-10 rounded-xl ${notif.iconBg} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${notif.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-bold text-gray-800">{notif.title}</p>
                    {notif.unread && <span className="w-2 h-2 bg-sky-500 rounded-full shrink-0" />}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{notif.body}</p>
                  <p className="text-[11px] text-gray-300 mt-2">{notif.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
