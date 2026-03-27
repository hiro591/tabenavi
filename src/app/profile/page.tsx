"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { ChevronLeft, ChevronRight, Scale, History, Heart, Camera, MapPin } from "lucide-react";
import type { Profile } from "@/types/database";

export default function ProfilePage() {
  const supabase = createClient();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [targetCalories, setTargetCalories] = useState(2000);
  const [onboardingData, setOnboardingData] = useState<Record<string, string | number | string[] | null> | null>(null);

  const fetchProfile = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login"); return; }
    setEmail(user.email ?? "");

    const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    if (profile) {
      const p = profile as Profile;
      setDisplayName(p.display_name ?? "");
      setTargetCalories(p.target_calories);
    }

    // Load local data
    try {
      const raw = localStorage.getItem("onboarding");
      if (raw) setOnboardingData(JSON.parse(raw));
      const saved = localStorage.getItem("profile_extra");
      if (saved) {
        const extra = JSON.parse(saved);
        setBio(extra.bio ?? "");
        setAvatarUrl(extra.avatarUrl ?? "");
      }
    } catch {}

    setLoading(false);
  }, [supabase, router]);

  useEffect(() => { fetchProfile(); }, [fetchProfile]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }
      const { error } = await supabase.from("profiles").update({
        display_name: displayName || null,
        target_calories: targetCalories,
      }).eq("id", user.id);
      if (error) throw error;

      localStorage.setItem("profile_extra", JSON.stringify({ bio, avatarUrl }));
      showToast("保存しました");
    } catch {
      showToast("保存に失敗しました");
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) {
        setAvatarUrl(ev.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const avatarChar = (displayName || email || "?").charAt(0).toUpperCase();

  const goalLabel: Record<string, string> = { lose: "減量", maintain: "維持", gain: "増量" };
  const activityLabel: Record<string, string> = { sedentary: "低い", light: "やや低い", moderate: "中程度", active: "高い" };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white text-gray-900 text-sm font-medium px-5 py-2.5 rounded-xl border border-gray-200 shadow-lg animate-fade-in">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
          <button onClick={() => router.push("/dashboard")} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-gray-900 flex-1">マイページ</h1>
          <button
            onClick={handleSave}
            disabled={saving}
            className="text-sm font-bold text-sky-500 disabled:text-gray-300 transition-colors"
          >
            {saving ? "保存中..." : "保存"}
          </button>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6">

        {/* ─── Avatar + Name + Bio ─── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-sky-400/10 to-cyan-400/10" />
          <div className="flex items-start gap-4 relative">
            {/* Avatar */}
            <div className="relative shrink-0">
              <button onClick={() => fileInputRef.current?.click()} className="group">
                {avatarUrl ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={avatarUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
                    {avatarChar}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:bg-gray-50">
                  <Camera className="w-3 h-3 text-gray-500" />
                </div>
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
            </div>

            <div className="flex-1 min-w-0">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="表示名"
                className="w-full text-lg font-bold text-gray-900 placeholder:text-gray-300 outline-none bg-transparent"
              />
              <p className="text-xs text-gray-400 mt-0.5 truncate">{email}</p>
            </div>
          </div>

          {/* Bio */}
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="自己紹介を書いてみよう（例: 週5外食のサラリーマン。サイゼリヤが大好き。）"
            className="w-full mt-4 text-sm text-gray-700 placeholder:text-gray-300 outline-none bg-gray-50 rounded-xl p-3 resize-none border border-gray-100 focus:border-sky-300 focus:ring-1 focus:ring-sky-300/30 transition-colors"
            rows={2}
          />
        </div>

        {/* ─── 目標カロリー ─── */}
        <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl border border-sky-100 p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-gray-800">目標カロリー</h2>
            {onboardingData?.goal && (
              <span className="text-[11px] text-sky-600 font-medium bg-white px-2.5 py-0.5 rounded-full border border-sky-200">
                {goalLabel[onboardingData.goal as string] ?? ""}モード
              </span>
            )}
          </div>
          <div className="flex items-baseline justify-center gap-1.5 mb-4">
            <input
              type="number"
              value={targetCalories}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                if (!isNaN(v) && v > 0 && v <= 10000) setTargetCalories(v);
              }}
              className="text-[32px] font-bold text-gray-900 w-28 outline-none bg-transparent tabular-nums text-center"
            />
            <span className="text-sm text-gray-400">kcal / 日</span>
          </div>
          <div className="flex gap-2">
            {[1500, 1800, 2000, 2200, 2500].map((cal) => (
              <button
                key={cal}
                onClick={() => setTargetCalories(cal)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                  targetCalories === cal
                    ? "bg-sky-500 text-white shadow-sm"
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                }`}
              >
                {cal}
              </button>
            ))}
          </div>
        </div>

        {/* ─── 身体情報 ─── */}
        {onboardingData && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-gray-800">身体情報</h2>
              <Link href="/onboarding" className="text-xs text-sky-500 font-medium">編集</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {onboardingData.height && (
                <InfoCell label="身長" value={`${onboardingData.height} cm`} />
              )}
              {onboardingData.weight && (
                <InfoCell label="体重" value={`${onboardingData.weight} kg`} />
              )}
              {onboardingData.targetWeight && (
                <InfoCell label="目標体重" value={`${onboardingData.targetWeight} kg`} />
              )}
              {onboardingData.activityLevel && (
                <InfoCell label="活動量" value={activityLabel[onboardingData.activityLevel as string] ?? "-"} />
              )}
            </div>
          </div>
        )}

        {/* ─── メニュー ─── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
          <MenuItem href="/weight" icon={Scale} label="体重記録" desc="体重の推移を確認" iconColor="text-emerald-500" iconBg="bg-emerald-50" />
          <MenuItem href="/history" icon={History} label="食事履歴" desc="過去の記録を見る" iconColor="text-sky-500" iconBg="bg-sky-50" />
          <MenuItem href="/favorites" icon={Heart} label="お気に入り" desc="保存したメニュー" iconColor="text-pink-500" iconBg="bg-pink-50" />
          <MenuItem href="/map" icon={MapPin} label="近くのお店" desc="マップで探す" iconColor="text-violet-500" iconBg="bg-violet-50" />
        </div>

        {/* ─── アカウント ─── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3">アカウント</h2>
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-xl bg-gray-50 text-gray-500 text-sm font-semibold hover:bg-gray-100 active:scale-[0.98] transition-all"
          >
            ログアウト
          </button>
        </div>

        <Link
          href="/onboarding"
          className="block text-center text-xs text-gray-400 hover:text-sky-500 transition-colors mb-4"
        >
          初期設定をやり直す
        </Link>
      </div>
    </div>
  );
}

// ─── Sub Components ──────────────────────────────────────────────────────────

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-3">
      <p className="text-[11px] text-gray-400 mb-0.5">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  );
}

function MenuItem({
  href,
  icon: Icon,
  label,
  desc,
  iconColor = "text-gray-400",
  iconBg = "bg-gray-50",
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
  iconColor?: string;
  iconBg?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3.5 px-5 py-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
    >
      <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className={`w-4.5 h-4.5 ${iconColor}`} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-[11px] text-gray-400">{desc}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-300" />
    </Link>
  );
}
