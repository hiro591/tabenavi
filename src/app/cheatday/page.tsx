"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { CheatDay } from "@/types/database";

const RESET_TEMPLATES = [
  "明日から3日間、カロリーを200kcal控える",
  "今週中に30分の有酸素運動を2回行う",
  "翌日の朝食を軽めにする",
];

export default function CheatDayPage() {
  const [cheatDays, setCheatDays] = useState<CheatDay[]>([]);
  const [isTodayCheat, setIsTodayCheat] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [note, setNote] = useState("");
  const [resetPlan, setResetPlan] = useState("");
  const [customPlan, setCustomPlan] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchCheatDays();
  }, []);

  const fetchCheatDays = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from("cheat_days")
      .select("*")
      .eq("user_id", user.id)
      .order("date", { ascending: false });

    if (data) {
      setCheatDays(data as CheatDay[]);
      setIsTodayCheat(data.some((d) => d.date === today));
    }
    setLoading(false);
  };

  const handleSetCheatDay = async () => {
    setSaving(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setSaving(false);
      return;
    }

    const finalPlan = useCustom ? customPlan : resetPlan;

    await supabase.from("cheat_days").insert({
      user_id: user.id,
      date: today,
      note: note || null,
      reset_plan: finalPlan || null,
    });

    setNote("");
    setResetPlan("");
    setCustomPlan("");
    setUseCustom(false);
    setShowForm(false);
    await fetchCheatDays();
    setSaving(false);
  };

  const toggleAchieved = async (cheatDay: CheatDay) => {
    const supabase = createClient();
    const currentNote = cheatDay.note || "";
    const isAchieved = currentNote.startsWith("[達成]");
    const newNote = isAchieved
      ? currentNote.replace("[達成] ", "")
      : `[達成] ${currentNote}`;

    await supabase
      .from("cheat_days")
      .update({ note: newNote })
      .eq("id", cheatDay.id);

    await fetchCheatDays();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-6 pb-20">
      <h1 className="text-xl font-bold text-gray-800 mb-4">チートデイ</h1>

      {/* チートデイ設定カード */}
      {!isTodayCheat ? (
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-sm p-6 mb-4 text-white text-center">
          {!showForm ? (
            <>
              <p className="text-sm opacity-90 mb-3">
                罪悪感ではなく、計画的な楽しみ方を
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full text-lg active:scale-95 transition-transform shadow-md"
              >
                今日はチートデイ！
              </button>
            </>
          ) : (
            <div className="text-left space-y-4">
              <h2 className="text-lg font-bold text-center">
                チートデイを設定
              </h2>

              {/* メモ入力 */}
              <div>
                <label className="block text-sm font-medium opacity-90 mb-1">
                  メモ（任意）
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="今日は友達とランチ！"
                  className="w-full rounded-xl px-3 py-2 text-sm text-gray-800 placeholder-gray-400 resize-none"
                  rows={2}
                />
              </div>

              {/* リセット計画 */}
              <div>
                <label className="block text-sm font-medium opacity-90 mb-2">
                  リセット計画
                </label>
                <div className="space-y-2">
                  {RESET_TEMPLATES.map((template) => (
                    <button
                      key={template}
                      onClick={() => {
                        setResetPlan(template);
                        setUseCustom(false);
                      }}
                      className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${
                        !useCustom && resetPlan === template
                          ? "bg-white text-purple-600 font-medium"
                          : "bg-purple-400/30 text-white hover:bg-purple-400/50"
                      }`}
                    >
                      {template}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setUseCustom(true);
                      setResetPlan("");
                    }}
                    className={`w-full text-left text-sm px-3 py-2 rounded-xl transition-colors ${
                      useCustom
                        ? "bg-white text-purple-600 font-medium"
                        : "bg-purple-400/30 text-white hover:bg-purple-400/50"
                    }`}
                  >
                    カスタム入力
                  </button>
                  {useCustom && (
                    <textarea
                      value={customPlan}
                      onChange={(e) => setCustomPlan(e.target.value)}
                      placeholder="自分だけのリセット計画を入力..."
                      className="w-full rounded-xl px-3 py-2 text-sm text-gray-800 placeholder-gray-400 resize-none"
                      rows={2}
                    />
                  )}
                </div>
              </div>

              {/* ボタン */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    setShowForm(false);
                    setNote("");
                    setResetPlan("");
                    setCustomPlan("");
                    setUseCustom(false);
                  }}
                  className="flex-1 py-2 rounded-full text-sm bg-purple-400/30 text-white"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleSetCheatDay}
                  disabled={saving}
                  className="flex-1 py-2 rounded-full text-sm bg-white text-purple-600 font-bold disabled:opacity-50"
                >
                  {saving ? "保存中..." : "設定する"}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-sm p-6 mb-4 text-white text-center">
          <p className="text-3xl mb-2">🎉</p>
          <p className="text-lg font-bold">今日はチートデイ！</p>
          <p className="text-sm opacity-90 mt-1">
            楽しんでくださいね。明日からまた頑張りましょう！
          </p>
        </div>
      )}

      {/* チートデイ履歴 */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <h2 className="font-bold text-gray-800 mb-3">チートデイ履歴</h2>
        {cheatDays.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-4">
            まだチートデイの記録はありません
          </p>
        ) : (
          <div className="space-y-3">
            {cheatDays.map((cd) => {
              const isAchieved = (cd.note || "").startsWith("[達成]");
              const displayNote = isAchieved
                ? (cd.note || "").replace("[達成] ", "")
                : cd.note;

              return (
                <div
                  key={cd.id}
                  className="border border-gray-100 rounded-xl p-3"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-gray-800">
                      {cd.date.replace(/-/g, "/")}
                    </span>
                    <button
                      onClick={() => toggleAchieved(cd)}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
                        isAchieved
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isAchieved ? "達成" : "未達成"}
                    </button>
                  </div>
                  {displayNote && (
                    <p className="text-xs text-gray-500 mb-1">{displayNote}</p>
                  )}
                  {cd.reset_plan && (
                    <div className="bg-orange-50 rounded-lg px-3 py-2 mt-2">
                      <p className="text-[10px] text-orange-400 font-medium mb-0.5">
                        リセット計画
                      </p>
                      <p className="text-xs text-orange-600">{cd.reset_plan}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
