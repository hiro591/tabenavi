"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Flame, Scale, Dumbbell } from "lucide-react";
import type { Profile } from "@/types/database";

type GoalType = "diet" | "maintain" | "bulk";

const GOAL_OPTIONS: {
  type: GoalType;
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  suggestedCalories: number;
}[] = [
  {
    type: "diet",
    Icon: Flame,
    label: "ダイエット",
    description: "目標: -500kcal 不足",
    suggestedCalories: 1500,
  },
  {
    type: "maintain",
    Icon: Scale,
    label: "現状維持",
    description: "カロリー維持",
    suggestedCalories: 2000,
  },
  {
    type: "bulk",
    Icon: Dumbbell,
    label: "筋肉増量",
    description: "目標: +300kcal 余剰",
    suggestedCalories: 2500,
  },
];

const PRESET_CALORIES = [1500, 1800, 2000, 2200, 2500];

export default function ProfilePage() {
  const supabase = createClient();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [targetCalories, setTargetCalories] = useState(2000);
  const [customCalories, setCustomCalories] = useState("");
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null);

  const fetchProfile = useCallback(async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    setEmail(user.email ?? "");

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (profile) {
      const p = profile as Profile;
      setDisplayName(p.display_name ?? "");
      setTargetCalories(p.target_calories);
    }

    setLoading(false);
  }, [supabase, router]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleGoalSelect = (goal: GoalType) => {
    setSelectedGoal(goal);
    const option = GOAL_OPTIONS.find((g) => g.type === goal);
    if (option) {
      setTargetCalories(option.suggestedCalories);
      setCustomCalories("");
    }
  };

  const handlePresetSelect = (value: number) => {
    setTargetCalories(value);
    setCustomCalories("");
  };

  const handleCustomCaloriesChange = (value: string) => {
    setCustomCalories(value);
    const num = parseInt(value, 10);
    if (!isNaN(num) && num > 0 && num <= 10000) {
      setTargetCalories(num);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }

    await supabase
      .from("profiles")
      .update({
        display_name: displayName || null,
        target_calories: targetCalories,
      })
      .eq("id", user.id);

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const avatarChar =
    (displayName || email || "?").charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto px-4 pt-6 pb-12">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/dashboard"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            ←
          </Link>
          <h1 className="text-xl font-bold text-gray-800">
            プロフィール設定
          </h1>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold shrink-0">
              {avatarChar}
            </div>
            <div className="min-w-0">
              <p className="text-sm text-gray-400 truncate">{email}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1.5">
              表示名
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="表示名を入力"
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none text-gray-800 placeholder-gray-300 focus:ring-2 focus:ring-orange-300 transition-all"
            />
          </div>
        </div>

        {/* Goal Type */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">
            目標タイプ
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {GOAL_OPTIONS.map((goal) => (
              <button
                key={goal.type}
                onClick={() => handleGoalSelect(goal.type)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all ${
                  selectedGoal === goal.type
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-100 bg-gray-50 hover:border-gray-200"
                }`}
              >
                <goal.Icon className={`w-6 h-6 ${selectedGoal === goal.type ? "text-orange-500" : "text-gray-500"}`} />
                <span
                  className={`text-xs font-semibold ${
                    selectedGoal === goal.type
                      ? "text-orange-600"
                      : "text-gray-600"
                  }`}
                >
                  {goal.label}
                </span>
                <span className="text-[10px] text-gray-400">
                  {goal.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Target Calories */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">
            1日の目標カロリー
          </h2>
          <div className="text-center mb-5">
            <span className="text-4xl font-bold text-orange-500">
              {targetCalories}
            </span>
            <span className="text-lg text-gray-400 ml-1">kcal</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {PRESET_CALORIES.map((cal) => (
              <button
                key={cal}
                onClick={() => handlePresetSelect(cal)}
                className={`flex-1 min-w-[60px] py-2 rounded-xl text-sm font-semibold transition-all ${
                  targetCalories === cal && customCalories === ""
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cal}
              </button>
            ))}
          </div>
          <div>
            <input
              type="number"
              value={customCalories}
              onChange={(e) => handleCustomCaloriesChange(e.target.value)}
              placeholder="カスタム値を入力 (kcal)"
              className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none outline-none text-gray-800 placeholder-gray-300 focus:ring-2 focus:ring-orange-300 transition-all"
              min={500}
              max={10000}
            />
          </div>
          <p className="text-[11px] text-gray-400 mt-3 leading-relaxed">
            一般的な成人男性: 2000-2500kcal / 女性: 1600-2000kcal
          </p>
        </div>

        {/* Weight Tracking Link */}
        <Link
          href="/weight"
          className="block bg-white rounded-2xl p-6 shadow-sm mb-4 hover:shadow-md transition-all active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <Scale className="w-6 h-6 text-gray-500" />
            <div className="flex-1">
              <p className="font-bold text-gray-800">体重記録</p>
              <p className="text-sm text-gray-400">体重の推移を確認する →</p>
            </div>
          </div>
        </Link>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full bg-orange-500 text-white font-semibold py-3.5 rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all disabled:opacity-50 mb-3"
        >
          {saving ? "保存中..." : "保存する"}
        </button>

        {saved && (
          <p className="text-center text-sm text-green-600 font-medium mb-4">
            保存しました
          </p>
        )}

        {/* Account Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">
            アカウント
          </h2>
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-xl bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 active:scale-[0.98] transition-all"
          >
            ログアウト
          </button>
        </div>
      </div>
    </div>
  );
}
