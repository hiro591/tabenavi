"use client";

import { useState } from "react";
import { Utensils } from "lucide-react";
import { getChainLogo } from "@/lib/chain-logos";

export default function ItemHeroImage({
  chainName,
}: {
  chainName: string;
  emoji?: string;
}) {
  const [failed, setFailed] = useState(false);
  const logoInfo = getChainLogo(chainName);
  const showLogo = logoInfo && !failed;

  if (showLogo) {
    return (
      <div
        className="w-32 h-32 rounded-3xl shadow-md flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: logoInfo.bg }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoInfo.url}
          alt={chainName}
          className="w-full h-full object-contain p-4"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center justify-center w-32 h-32 bg-orange-50 rounded-3xl shadow-sm">
      <Utensils className="w-14 h-14 text-orange-300" />
    </div>
  );
}
