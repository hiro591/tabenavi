"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ChevronRight, ChevronLeft, SkipForward, CheckCircle } from "lucide-react";
import { LogoIcon } from "@/components/Logo";
import ScrollPicker from "@/components/ScrollPicker";
import { NativePushToggle } from "@/components/native/NativePushToggle";
import { trackEvent } from "@/lib/track";
import { safeNextPath } from "@/lib/auth-errors";

// 短縮版: 12→7ステップ(未使用のtimeline/eatingOutFreqを削除、性別+生まれ年/身長+体重+目標体重を統合)。
// ステップ数=離脱リスクなので、計算に必要な項目とパーソナライズに使う項目だけに絞った。
const TOTAL_STEPS = 7;

interface Chain {
  id: string;
  name: string;
  emoji: string;
}

// ─── Calorie calculation ─────────────────────────────────────────────────────

function calculateTargetCalories({
  gender,
  birthYear,
  height,
  weight,
  activityLevel,
  goal,
}: {
  gender: string | null;
  birthYear: number | null;
  height: number | null;
  weight: number | null;
  activityLevel: string | null;
  goal: string | null;
}): number {
  // Defaults if data is missing
  const w = weight ?? 65;
  const h = height ?? 170;
  const age = birthYear ? new Date().getFullYear() - birthYear : 30;
  const isMale = gender !== "female";

  // Harris-Benedict BMR
  const bmr = isMale
    ? 88.362 + 13.397 * w + 4.799 * h - 5.677 * age
    : 447.593 + 9.247 * w + 3.098 * h - 4.33 * age;

  // Activity multiplier
  const multiplier: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
  };
  const tdee = bmr * (multiplier[activityLevel ?? "light"] ?? 1.375);

  // Goal adjustment
  if (goal === "lose") return Math.round(tdee - 500);
  if (goal === "gain") return Math.round(tdee + 300);
  return Math.round(tdee);
}

// ─── Page ────────────────────────────────────────────────────────────────────

function OnboardingFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = safeNextPath(searchParams.get("next"));
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const [goal, setGoal] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [birthYear, setBirthYear] = useState<number>(1998);
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(65);
  const [targetWeight, setTargetWeight] = useState<number>(60);
  const [activityLevel, setActivityLevel] = useState<string | null>(null);
  const [favoriteChains, setFavoriteChains] = useState<string[]>([]);

  const [chains, setChains] = useState<Chain[]>([]);

  useEffect(() => {
    const supabase = createClient();
    supabase.from("chain_restaurants").select("id, name, emoji").order("name").then(({ data }) => {
      if (data) setChains(data);
    });
  }, []);

  const targetCalories = useMemo(() => calculateTargetCalories({
    gender, birthYear, height, weight, activityLevel, goal,
  }), [gender, birthYear, height, weight, activityLevel, goal]);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const toggleChain = (id: string) => setFavoriteChains((p) => p.includes(id) ? p.filter((c) => c !== id) : [...p, id]);

  const handleComplete = async () => {
    setSaving(true);
    setSaveError(false);
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // 必須: 目標カロリー(既存カラム)。ここが失敗したら完了させない。
        const { error } = await supabase.from("profiles").update({ target_calories: targetCalories }).eq("id", user.id);
        if (error) throw error;
        // 拡張プロフィール: migration_v7 適用後にDB保存される。未適用時は error が返るが
        // 意図的に無視して完了を妨げない(回答は下のlocalStorageにも保存されるため失われない)。
        await supabase.from("profiles").update({
          goal,
          gender,
          birth_year: birthYear,
          height_cm: height,
          weight_kg: weight,
          target_weight_kg: targetWeight,
          activity_level: activityLevel,
          favorite_chains: favoriteChains,
          onboarded_at: new Date().toISOString(),
        }).eq("id", user.id);
      }
      localStorage.setItem("onboarding", JSON.stringify({
        goal, gender, birthYear, height, weight,
        targetWeight, activityLevel, favoriteChains,
        targetCalories, completedAt: new Date().toISOString(),
      }));
      trackEvent("onboarding_complete", { goal });
      // 記録CTA等から登録した場合は元の文脈(例: /record?menu_id=xxx)へ復帰
      router.push(nextPath ?? "/dashboard");
    } catch {
      setSaving(false);
      setSaveError(true);
    }
  };

  // Picker data
  const years = Array.from({ length: 77 }, (_, i) => 2026 - i);
  const heights = Array.from({ length: 61 }, (_, i) => 140 + i);
  const weights = Array.from({ length: 101 }, (_, i) => 30 + i);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 pt-6 pb-2">
        <div className="flex gap-1">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} className={`h-1 rounded-full flex-1 transition-all duration-300 ${i < step ? "bg-sky-400" : "bg-gray-100"}`} />
          ))}
        </div>
        <p className="text-[11px] text-gray-400 mt-2">{step} / {TOTAL_STEPS}</p>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full px-6 pb-8 flex flex-col">

        {/* 1: Welcome */}
        {step === 1 && (
          <Center>
            <LogoIcon size={56} />
            <h1 className="text-[24px] font-bold text-gray-900 mt-6 mb-3">たべなびへようこそ</h1>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10">いくつかの質問に答えると、<br />あなた専用の目標カロリーを自動計算します。</p>
            <PrimaryButton onClick={next}>はじめる</PrimaryButton>
            <p className="text-[12px] text-gray-400 mt-4">30秒で完了 · スキップ可 · プロフィールで変更可</p>
          </Center>
        )}

        {/* 2: Goal */}
        {step === 2 && (
          <Q title="あなたの目標は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "lose", emoji: "🔥", label: "減量", desc: "体重を落としたい" },
                { key: "maintain", emoji: "⚖️", label: "維持", desc: "今の体型をキープ" },
                { key: "gain", emoji: "💪", label: "増量", desc: "筋肉をつけたい" },
              ]}
              selected={goal}
              onSelect={(k) => { setGoal(k); next(); }}
            />
          </Q>
        )}

        {/* 3: あなたについて(性別 + 生まれ年) */}
        {step === 3 && (
          <Q title="あなたについて" subtitle="目標カロリーの計算に使います" onBack={prev} onSkip={next}>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { key: "male", label: "男性" },
                { key: "female", label: "女性" },
                { key: "other", label: "その他" },
              ].map((o) => (
                <button
                  key={o.key}
                  onClick={() => setGender(o.key)}
                  className={`p-3 rounded-xl border-2 text-sm font-bold transition-all active:scale-[0.97] ${gender === o.key ? "border-sky-400 bg-sky-50 text-gray-900" : "border-gray-100 bg-white text-gray-500"}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mb-1 text-center">生まれ年</p>
            <div className="flex justify-center mb-6">
              <div className="w-40">
                <ScrollPicker items={years} value={birthYear} onChange={(v) => setBirthYear(v as number)} suffix="年" />
              </div>
            </div>
            <PrimaryButton onClick={next}>次へ</PrimaryButton>
          </Q>
        )}

        {/* 4: 体型(身長 + 体重 + 目標体重) */}
        {step === 4 && (
          <Q title="体型を教えてください" subtitle="身長・体重・目標体重" onBack={prev} onSkip={next}>
            <div className="flex gap-2 mb-3">
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1 text-center">身長(cm)</p>
                <ScrollPicker items={heights} value={height} onChange={(v) => setHeight(v as number)} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1 text-center">体重(kg)</p>
                <ScrollPicker items={weights} value={weight} onChange={(v) => setWeight(v as number)} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-1 text-center">目標(kg)</p>
                <ScrollPicker items={weights} value={targetWeight} onChange={(v) => setTargetWeight(v as number)} />
              </div>
            </div>
            <PrimaryButton onClick={next}>次へ</PrimaryButton>
          </Q>
        )}

        {/* 5: Activity level */}
        {step === 5 && (
          <Q title="普段の活動量は？" onBack={prev} onSkip={next}>
            <Choices
              options={[
                { key: "sedentary", label: "ほぼ座りっぱなし", desc: "デスクワーク中心" },
                { key: "light", label: "軽い運動あり", desc: "週1〜2回の軽い運動" },
                { key: "moderate", label: "適度に運動", desc: "週3〜4回の運動" },
                { key: "active", label: "かなり活動的", desc: "週5回以上の運動やジム" },
              ]}
              selected={activityLevel}
              onSelect={(k) => { setActivityLevel(k); next(); }}
            />
          </Q>
        )}

        {/* 6: Favorite chains */}
        {step === 6 && (
          <Q title="よく行くチェーン店は？" subtitle="複数選択OK · 記録画面で上に表示されます" onBack={prev} onSkip={next}>
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {chains.map((chain) => {
                const sel = favoriteChains.includes(chain.id);
                return (
                  <button key={chain.id} onClick={() => toggleChain(chain.id)}
                    className={`relative p-3 rounded-xl border-2 flex flex-col items-center gap-1.5 transition-all active:scale-[0.97] ${sel ? "border-sky-400 bg-sky-50" : "border-gray-100 bg-white"}`}>
                    {sel && <div className="absolute top-1 right-1 w-4 h-4 bg-sky-400 rounded-full flex items-center justify-center"><CheckCircle className="w-2.5 h-2.5 text-white" /></div>}
                    <span className="text-xl">{chain.emoji}</span>
                    <span className="text-[10px] font-medium text-gray-600 text-center leading-tight">{chain.name}</span>
                  </button>
                );
              })}
            </div>
            <PrimaryButton onClick={next}>次へ</PrimaryButton>
          </Q>
        )}

        {/* 7: Complete + Calculated calories */}
        {step === 7 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-emerald-100">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="text-[22px] font-bold text-gray-900 mb-2">あなた専用プランが完成！</h1>
            <p className="text-gray-400 text-sm mb-6">プロフィールからいつでも変更できます</p>

            {/* Calculated calories highlight */}
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 w-full mb-6 border border-sky-100">
              <p className="text-xs text-sky-500 font-semibold mb-1">1日の目標カロリー</p>
              <p className="text-[36px] font-bold text-gray-900 tabular-nums leading-none">
                {targetCalories}
                <span className="text-[16px] font-medium text-gray-400 ml-1">kcal</span>
              </p>
              <p className="text-[11px] text-gray-400 mt-2">
                あなたの体型・目標・活動量から自動計算しました
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 w-full mb-6 text-left space-y-2.5 text-sm">
              <Row label="目標" value={goal === "lose" ? "減量" : goal === "gain" ? "増量" : goal === "maintain" ? "維持" : "未設定"} />
              {gender && <Row label="性別" value={gender === "male" ? "男性" : gender === "female" ? "女性" : "その他"} />}
              <Row label="身長" value={`${height} cm`} />
              <Row label="体重" value={`${weight} kg → ${targetWeight} kg`} />
              {activityLevel && <Row label="活動量" value={activityLevel === "sedentary" ? "低い" : activityLevel === "light" ? "やや低い" : activityLevel === "moderate" ? "中程度" : "高い"} />}
            </div>

            {/* 再訪トリガー: 食事リマインドのopt-in(ネイティブ=トグル / Web=アプリ誘導) */}
            <div className="w-full mb-6">
              <NativePushToggle />
            </div>

            {saveError && (
              <div className="w-full bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
                <p className="text-sm text-red-600">保存に失敗しました。<button onClick={handleComplete} className="underline font-bold">再試行</button></p>
              </div>
            )}

            <button onClick={handleComplete} disabled={saving}
              className="w-full bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-sky-200 disabled:opacity-50 flex items-center justify-center gap-2">
              {saving ? "保存中..." : "たべなびをはじめる"}
              {!saving && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Sub Components ──────────────────────────────────────────────────────────

function Center({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 flex flex-col items-center justify-center text-center">{children}</div>;
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className="w-full bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform shadow-md shadow-sky-200 flex items-center justify-center gap-2">
      {children}<ChevronRight className="w-4 h-4" />
    </button>
  );
}

function Q({ title, subtitle, onBack, onSkip, children }: {
  title: string; subtitle?: string; onBack: () => void; onSkip: () => void; children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col pt-2">
      <div className="flex items-center justify-between mb-5">
        <button onClick={onBack} className="text-gray-400 hover:text-gray-600 transition-colors p-1"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={onSkip} className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1">スキップ<SkipForward className="w-3.5 h-3.5" /></button>
      </div>
      <h1 className="text-[22px] font-bold text-gray-900 mb-1">{title}</h1>
      {subtitle && <p className="text-sm text-gray-400 mb-5">{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}
      <div className="flex-1">{children}</div>
    </div>
  );
}

function Choices({ options, selected, onSelect }: {
  options: { key: string; emoji?: string; label: string; desc?: string }[]; selected: string | null; onSelect: (key: string) => void;
}) {
  return (
    <div className="space-y-2.5">
      {options.map((o) => (
        <button key={o.key} onClick={() => onSelect(o.key)}
          className={`w-full p-4 rounded-xl border-2 text-left transition-all active:scale-[0.98] ${selected === o.key ? "border-sky-400 bg-sky-50" : "border-gray-100 bg-white hover:bg-gray-50"}`}>
          <div className="flex items-center gap-3">
            {o.emoji && <span className="text-xl">{o.emoji}</span>}
            <div>
              <p className="font-bold text-gray-900">{o.label}</p>
              {o.desc && <p className="text-sm text-gray-400">{o.desc}</p>}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="font-semibold text-gray-700">{value}</span>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <OnboardingFlow />
    </Suspense>
  );
}
