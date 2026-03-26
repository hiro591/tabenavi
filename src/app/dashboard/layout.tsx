"use client";

import InstallPrompt from "@/components/InstallPrompt";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-20">
      <InstallPrompt />
      <div className="max-w-lg mx-auto">{children}</div>
    </div>
  );
}
