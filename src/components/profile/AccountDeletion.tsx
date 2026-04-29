"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, Loader2, Trash2 } from "lucide-react";

type Step = "idle" | "confirming" | "deleting";

export const AccountDeletion = () => {
  const router = useRouter();
  const [step, setStep] = useState<Step>("idle");
  const [password, setPassword] = useState("");
  const [understood, setUnderstood] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setStep("idle");
    setPassword("");
    setUnderstood(false);
    setError(null);
  };

  const handleDelete = async () => {
    setError(null);
    setStep("deleting");
    try {
      const res = await fetch("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "削除に失敗しました");
        setStep("confirming");
        return;
      }
      router.push("/?deleted=1");
    } catch {
      setError("ネットワークエラーが発生しました");
      setStep("confirming");
    }
  };

  if (step === "idle") {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
        <h2 className="text-sm font-bold text-gray-800 mb-3">アカウントの削除</h2>
        <p className="text-xs text-gray-500 mb-3 leading-relaxed">
          アカウントとすべての記録（食事・体重・お気に入り等）が完全に削除されます。
          この操作は取り消せません。
        </p>
        <button
          onClick={() => setStep("confirming")}
          className="w-full py-3 rounded-xl bg-rose-50 text-rose-600 text-sm font-semibold hover:bg-rose-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          アカウントを削除する
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
      <div className="w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-gray-900">
              アカウントを削除しますか？
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              この操作は取り消せません。
            </p>
          </div>
        </div>

        <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-rose-900 font-semibold mb-2">
            削除されるデータ
          </p>
          <ul className="text-xs text-rose-800 space-y-0.5 list-disc list-inside">
            <li>プロフィール情報</li>
            <li>食事記録すべて</li>
            <li>体重記録すべて</li>
            <li>お気に入り、保存したコンボ</li>
            <li>投稿・コメント・いいね履歴</li>
            <li>ログイン情報</li>
          </ul>
          <p className="text-xs text-rose-700 mt-3">
            削除後、同じメールアドレスで再登録することは可能ですが、
            過去の記録は復元できません。
          </p>
        </div>

        <label className="flex items-start gap-2 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={understood}
            onChange={(e) => setUnderstood(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded border-gray-300 text-rose-500 focus:ring-rose-500"
          />
          <span className="text-xs text-gray-700">
            すべてのデータが完全に削除され、復元できないことを理解しました
          </span>
        </label>

        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            パスワードを入力して確認
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300/30"
            placeholder="現在のパスワード"
          />
        </div>

        {error && (
          <div
            role="alert"
            className="mb-3 px-3 py-2 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700"
          >
            {error}
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={reset}
            disabled={step === "deleting"}
            className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 disabled:opacity-50 active:scale-[0.98] transition-all"
          >
            キャンセル
          </button>
          <button
            onClick={handleDelete}
            disabled={!understood || !password || step === "deleting"}
            className="flex-1 py-3 rounded-xl bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 disabled:opacity-40 disabled:hover:bg-rose-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            {step === "deleting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                削除中...
              </>
            ) : (
              "削除する"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
