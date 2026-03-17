"use client";

import { useState } from "react";
import { Flag, X, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface ReportButtonProps {
  itemId: string;
  itemName: string;
  chainName: string;
}

const FIELD_OPTIONS = [
  "価格",
  "カロリー",
  "タンパク質",
  "脂質",
  "炭水化物",
  "その他",
];

export default function ReportButton({
  itemId,
  itemName,
  chainName,
}: ReportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedFields, setCheckedFields] = useState<string[]>([]);
  const [correctValues, setCorrectValues] = useState("");
  const [source, setSource] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggleField(field: string) {
    setCheckedFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  }

  function resetForm() {
    setCheckedFields([]);
    setCorrectValues("");
    setSource("");
    setSubmitted(false);
  }

  function handleOpen() {
    resetForm();
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (checkedFields.length === 0) return;

    setSubmitting(true);
    const supabase = createClient();
    const { error } = await supabase.from("data_reports").insert({
      menu_item_id: itemId,
      item_name: itemName,
      chain_name: chainName,
      fields: checkedFields.join(","),
      correct_values: correctValues,
      source: source || null,
    });
    if (error) {
      alert("送信に失敗しました。もう一度お試しください。");
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-orange-500 transition-colors mx-auto w-fit"
      >
        <Flag className="w-3 h-3" />
        情報の誤りを報告
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]" />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md animate-[modalIn_200ms_ease-out] max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 px-6">
                <div className="animate-[bounceIn_400ms_ease-out]">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                </div>
                <p className="text-lg font-semibold text-gray-900 text-center">
                  ありがとうございます！
                </p>
                <p className="text-sm text-gray-500 mt-1 text-center">
                  確認の上修正いたします
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-1 pr-8">
                  情報の誤りを報告
                </h2>
                <p className="text-xs text-gray-400 mb-5">
                  {chainName} - {itemName}
                </p>

                {/* Field checkboxes */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    修正項目
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {FIELD_OPTIONS.map((field) => (
                      <label
                        key={field}
                        className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-sm cursor-pointer transition-colors ${
                          checkedFields.includes(field)
                            ? "bg-orange-50 border-orange-300 text-orange-700"
                            : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checkedFields.includes(field)}
                          onChange={() => toggleField(field)}
                        />
                        {field}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Correct values */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    正しい値
                  </label>
                  <textarea
                    value={correctValues}
                    onChange={(e) => setCorrectValues(e.target.value)}
                    placeholder="正しい値を入力してください"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent resize-none"
                  />
                </div>

                {/* Source */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    参照元
                    <span className="text-xs font-normal text-gray-400 ml-1">
                      （任意）
                    </span>
                  </label>
                  <input
                    type="text"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="例: 公式サイト"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={checkedFields.length === 0 || submitting}
                  className="w-full py-3 bg-orange-500 text-white rounded-xl font-medium text-sm hover:bg-orange-600 active:bg-orange-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? "送信中..." : "送信"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
