"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function FavoritesPage() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/login");
      }
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-lg mx-auto px-4 pt-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          お気に入り
        </h1>
        <div className="text-center py-20">
          <p className="text-5xl mb-4">❤️</p>
          <p className="text-base text-gray-500">
            お気に入り機能は近日公開予定です
          </p>
        </div>
      </div>
    </div>
  );
}
