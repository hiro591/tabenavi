"use client";

import { useState } from "react";

export default function ItemHeroImage({
  logoUrl,
  emoji,
  chainName,
}: {
  logoUrl: string | null;
  emoji: string;
  chainName: string;
}) {
  const [failed, setFailed] = useState(false);

  if (logoUrl && !failed) {
    return (
      <div className="w-28 h-28 bg-white rounded-3xl shadow-md flex items-center justify-center overflow-hidden p-3 border border-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt={chainName}
          className="w-full h-full object-contain"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center justify-center w-32 h-32 bg-orange-50 rounded-3xl">
      <span className="text-8xl leading-none">{emoji}</span>
    </div>
  );
}
