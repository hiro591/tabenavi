"use client";

import { useState } from "react";
import { Camera as CameraIcon, ImagePlus, Loader2, X } from "lucide-react";
import {
  captureMealPhoto,
  pickMealPhotoFromLibrary,
  type CapturedPhoto,
} from "@/lib/native/camera";
import { useNativeFeatures } from "@/lib/native/useNativeFeatures";

type Props = {
  onPhotoReady?: (photo: CapturedPhoto) => void;
};

export const NativePhotoCapture = ({ onPhotoReady }: Props) => {
  const { isNativeApp, ready } = useNativeFeatures();
  const [photo, setPhoto] = useState<CapturedPhoto | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!ready || !isNativeApp) return null;

  const handleCapture = async () => {
    setBusy(true);
    setError(null);
    try {
      const result = await captureMealPhoto();
      if (result) {
        setPhoto(result);
        onPhotoReady?.(result);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "撮影に失敗しました");
    } finally {
      setBusy(false);
    }
  };

  const handlePick = async () => {
    setBusy(true);
    setError(null);
    try {
      const result = await pickMealPhotoFromLibrary();
      if (result) {
        setPhoto(result);
        onPhotoReady?.(result);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "選択に失敗しました");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <h3 className="mb-3 font-semibold text-gray-900">食事の写真を残す</h3>

      {photo ? (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.dataUrl}
            alt="撮影した食事"
            className="w-full rounded-lg object-cover"
          />
          <button
            onClick={() => setPhoto(null)}
            className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white"
            aria-label="写真を削除"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleCapture}
            disabled={busy}
            className="flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-600 disabled:opacity-50"
          >
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <CameraIcon className="h-4 w-4" />
            )}
            撮影する
          </button>
          <button
            onClick={handlePick}
            disabled={busy}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            <ImagePlus className="h-4 w-4" />
            ライブラリから
          </button>
        </div>
      )}

      {error && (
        <p className="mt-2 text-sm text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
