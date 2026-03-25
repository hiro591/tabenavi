// Inline SVG logo — fork & knife icon matching the app icon
// Use: <Logo size={32} /> or <Logo size={40} withText />

export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient
          id="logo-bg"
          x1="0"
          y1="0"
          x2="512"
          y2="512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="112" fill="url(#logo-bg)" />
      <g fill="white">
        <rect x="168" y="80" width="13" height="100" rx="6.5" />
        <rect x="193" y="80" width="13" height="100" rx="6.5" />
        <rect x="218" y="80" width="13" height="100" rx="6.5" />
        <path d="M164 176 Q164 206 200 206 Q236 206 236 176" />
        <rect x="188" y="200" width="24" height="232" rx="12" />
      </g>
      <g fill="white" opacity="0.92">
        <path d="M278 80 Q314 84 314 160 L314 188 Q314 204 300 204 L290 204 Q276 204 276 188 L276 80 Z" />
        <rect x="283" y="198" width="24" height="234" rx="12" />
      </g>
    </svg>
  );
}

export function Logo({
  size = 32,
  textSize = "text-lg",
}: {
  size?: number;
  textSize?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon size={size} />
      <span className={`${textSize} font-bold text-slate-100`}>たべなび</span>
    </div>
  );
}
