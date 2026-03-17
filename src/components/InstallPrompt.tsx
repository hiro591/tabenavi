"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Don't show on desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    // Don't show if already dismissed
    if (localStorage.getItem("installPromptDismissed")) return;

    // Don't show if already installed (standalone mode)
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShow(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("installPromptDismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="bg-orange-50 border-b border-orange-200 px-4 py-3">
      <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
        <p className="text-sm text-orange-800 flex-1">
          ホーム画面に追加してアプリのように使えます
        </p>
        <button
          onClick={handleInstall}
          className="bg-orange-500 text-white text-sm font-medium px-3 py-1.5 rounded-lg shrink-0 active:scale-95 transition-transform"
        >
          追加する
        </button>
        <button
          onClick={handleDismiss}
          className="text-orange-400 text-lg shrink-0"
          aria-label="閉じる"
        >
          ×
        </button>
      </div>
    </div>
  );
}
