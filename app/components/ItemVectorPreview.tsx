"use client";

interface ItemVectorPreviewProps {
  id: string;
}

export function ItemVectorPreview({ id }: ItemVectorPreviewProps) {
  switch (id) {
    /* ---------------------------------------------------------------- */
    /* DESKS                                                            */
    /* ---------------------------------------------------------------- */
    case "desk-lima":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full p-2">
          <polygon points="20,80 30,80 25,120 15,120" fill="#27272a" />
          <polygon points="40,80 50,80 45,120 35,120" fill="#27272a" />
          <rect x="15" y="116" width="35" height="4" rx="1" fill="#27272a" />
          <polygon points="150,80 160,80 155,120 145,120" fill="#27272a" />
          <polygon points="170,80 180,80 175,120 165,120" fill="#27272a" />
          <rect x="145" y="116" width="35" height="4" rx="1" fill="#27272a" />
          <polygon points="10,72 190,72 190,80 10,80" fill="#b08d65" />
          <polygon points="20,52 180,52 190,72 10,72" fill="#d8b993" stroke="#b08d65" strokeWidth="1" />
        </svg>
      );

    case "desk-ubud":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full p-2">
          <rect x="30" y="70" width="12" height="48" rx="2" fill="#27272a" />
          <rect x="20" y="115" width="32" height="6" rx="2" fill="#18181b" />
          <rect x="158" y="70" width="12" height="48" rx="2" fill="#27272a" />
          <rect x="148" y="115" width="32" height="6" rx="2" fill="#18181b" />
          <rect x="42" y="72" width="116" height="6" fill="#27272a" />
          <polygon points="10,70 190,70 190,76 10,76" fill="#cbb087" />
          <polygon points="20,50 180,50 190,70 10,70" fill="#e5cb9b" stroke="#cbb087" strokeWidth="1" />
          <rect x="148" y="77" width="22" height="8" rx="2" fill="#0f172a" />
          <text x="159" y="83" fontSize="5" fontFamily="monospace" fill="#38bdf8" textAnchor="middle" fontWeight="bold">104cm</text>
        </svg>
      );

    case "desk-canggu":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full p-2">
          <rect x="25" y="72" width="40" height="48" rx="2" fill="#9c5f2b" stroke="#683916" strokeWidth="1" />
          <rect x="28" y="76" width="34" height="12" rx="1" fill="#7a461b" />
          <rect x="42" y="81" width="6" height="2" fill="#d4af37" />
          <rect x="28" y="91" width="34" height="12" rx="1" fill="#7a461b" />
          <rect x="42" y="96" width="6" height="2" fill="#d4af37" />
          <rect x="28" y="106" width="34" height="12" rx="1" fill="#7a461b" />
          <rect x="42" y="111" width="6" height="2" fill="#d4af37" />

          <rect x="135" y="72" width="40" height="48" rx="2" fill="#9c5f2b" stroke="#683916" strokeWidth="1" />
          <rect x="138" y="76" width="34" height="12" rx="1" fill="#7a461b" />
          <rect x="152" y="81" width="6" height="2" fill="#d4af37" />
          <rect x="138" y="91" width="34" height="12" rx="1" fill="#7a461b" />
          <rect x="152" y="96" width="6" height="2" fill="#d4af37" />
          <rect x="138" y="106" width="34" height="12" rx="1" fill="#7a461b" />
          <rect x="152" y="111" width="6" height="2" fill="#d4af37" />

          <polygon points="10,70 190,70 190,76 10,76" fill="#7a461b" />
          <polygon points="20,50 180,50 190,70 10,70" fill="#b77943" stroke="#683916" strokeWidth="1" />
        </svg>
      );

    /* ---------------------------------------------------------------- */
    /* CHAIRS                                                           */
    /* ---------------------------------------------------------------- */
    case "chair-sundown":
      return (
        <svg viewBox="0 0 160 160" className="h-full w-full p-2">
          <ellipse cx="80" cy="148" rx="40" ry="8" fill="rgba(0,0,0,0.15)" />
          <line x1="80" y1="135" x2="45" y2="146" stroke="#27272a" strokeWidth="4" />
          <line x1="80" y1="135" x2="115" y2="146" stroke="#27272a" strokeWidth="4" />
          <line x1="80" y1="135" x2="80" y2="148" stroke="#27272a" strokeWidth="4" />
          <rect x="76" y="110" width="8" height="26" fill="#27272a" />
          <path d="M 50 108 Q 80 118 110 108 Q 115 95 80 92 Q 45 95 50 108" fill="#18181b" />
          <line x1="80" y1="110" x2="80" y2="40" stroke="#27272a" strokeWidth="5" />
          <path d="M 55 98 Q 50 60 55 35 Q 80 30 105 35 Q 110 60 105 98 Z" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          <path d="M 58 45 Q 80 42 102 45 M 56 60 Q 80 57 104 60 M 56 75 Q 80 72 104 75" stroke="#52525b" strokeWidth="1" strokeDasharray="2 1" />
        </svg>
      );

    case "chair-rattan":
      return (
        <svg viewBox="0 0 160 160" className="h-full w-full p-2">
          <ellipse cx="80" cy="148" rx="42" ry="8" fill="rgba(0,0,0,0.15)" />
          <line x1="50" y1="110" x2="35" y2="148" stroke="#8c5828" strokeWidth="4" />
          <line x1="110" y1="110" x2="125" y2="148" stroke="#8c5828" strokeWidth="4" />
          <path d="M 35 70 Q 30 30 80 28 Q 130 30 125 70 Q 130 110 80 112 Q 30 110 35 70" fill="#bc8a5f" stroke="#8c5828" strokeWidth="2" />
          <path d="M 45 45 Q 80 55 115 45 M 40 65 Q 80 75 120 65 M 40 85 Q 80 95 120 85" stroke="#71431b" strokeWidth="1.5" fill="none" />
          <ellipse cx="80" cy="95" rx="36" ry="12" fill="#fdfbf7" stroke="#d5cbbe" strokeWidth="1.5" />
          <ellipse cx="80" cy="70" rx="30" ry="20" fill="#fdfbf7" stroke="#d5cbbe" strokeWidth="1.5" />
        </svg>
      );

    case "chair-ergopro":
      return (
        <svg viewBox="0 0 160 160" className="h-full w-full p-2">
          <ellipse cx="80" cy="148" rx="40" ry="8" fill="rgba(0,0,0,0.15)" />
          <line x1="80" y1="135" x2="45" y2="146" stroke="#27272a" strokeWidth="4" />
          <line x1="80" y1="135" x2="115" y2="146" stroke="#27272a" strokeWidth="4" />
          <rect x="76" y="110" width="8" height="26" fill="#d4d4d8" />
          <path d="M 50 108 Q 80 118 110 108 Q 115 95 80 92 Q 45 95 50 108" fill="#18181b" />
          <line x1="80" y1="110" x2="80" y2="35" stroke="#94a3b8" strokeWidth="5" />
          <path d="M 55 98 Q 50 55 55 35 Q 80 30 105 35 Q 110 55 105 98 Z" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          <line x1="80" y1="35" x2="80" y2="18" stroke="#94a3b8" strokeWidth="3" />
          <rect x="62" y="12" width="36" height="14" rx="5" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
        </svg>
      );

    /* ---------------------------------------------------------------- */
    /* ACCESSORIES & SCREENS                                            */
    /* ---------------------------------------------------------------- */
    case "acc-monitor-triple":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full p-2">
          <rect x="94" y="90" width="12" height="25" fill="#27272a" />
          <rect x="80" y="112" width="40" height="5" rx="2" fill="#18181b" />
          {/* Left Screen */}
          <g transform="skewY(5)">
            <rect x="10" y="25" width="55" height="60" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
            <rect x="13" y="28" width="49" height="54" rx="2" fill="#1f2937" />
            <rect x="16" y="35" width="25" height="3" fill="#60a5fa" />
            <rect x="16" y="42" width="38" height="3" fill="#a78bfa" />
            <rect x="16" y="49" width="30" height="3" fill="#34d399" />
          </g>
          {/* Center Screen */}
          <rect x="70" y="20" width="60" height="68" rx="3" fill="#09090b" stroke="#52525b" strokeWidth="1.5" />
          <rect x="73" y="23" width="54" height="62" rx="2" fill="#1e1e2e" />
          <rect x="77" y="32" width="20" height="3" fill="#f38ba8" />
          <rect x="100" y="32" width="22" height="3" fill="#89b4fa" />
          <rect x="80" y="40" width="38" height="3" fill="#a6e3a1" />
          <rect x="80" y="48" width="28" height="3" fill="#fab387" />
          <rect x="85" y="56" width="36" height="3" fill="#cba6f7" />
          {/* Right Screen */}
          <g transform="skewY(-5)">
            <rect x="135" y="25" width="55" height="60" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="1" />
            <rect x="138" y="28" width="49" height="54" rx="2" fill="#0284c7" />
            <rect x="142" y="35" width="25" height="4" fill="#ffffff" opacity="0.8" />
            <rect x="142" y="42" width="35" height="3" fill="#ffffff" opacity="0.6" />
          </g>
        </svg>
      );

    case "acc-monitor-dual":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full p-2">
          <rect x="94" y="90" width="12" height="25" fill="#27272a" />
          <rect x="80" y="112" width="40" height="5" rx="2" fill="#18181b" />
          {/* Left Screen */}
          <rect x="25" y="22" width="70" height="68" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
          <rect x="28" y="25" width="64" height="62" rx="2" fill="#1e1e2e" />
          <rect x="32" y="34" width="25" height="3" fill="#f38ba8" />
          <rect x="32" y="42" width="45" height="3" fill="#a6e3a1" />
          <rect x="32" y="50" width="32" height="3" fill="#fab387" />
          {/* Right Screen */}
          <rect x="105" y="22" width="70" height="68" rx="3" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
          <rect x="108" y="25" width="64" height="62" rx="2" fill="#0284c7" />
          <rect x="112" y="34" width="32" height="4" fill="#ffffff" opacity="0.9" />
          <rect x="112" y="42" width="50" height="3" fill="#ffffff" opacity="0.7" />
        </svg>
      );

    case "acc-monitor-single":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full p-2">
          <rect x="94" y="90" width="12" height="25" fill="#27272a" />
          <rect x="75" y="112" width="50" height="5" rx="2" fill="#18181b" />
          <rect x="30" y="22" width="140" height="68" rx="4" fill="#09090b" stroke="#52525b" strokeWidth="1.5" />
          <rect x="34" y="26" width="132" height="60" rx="2" fill="#1e1e2e" />
          <line x1="100" y1="26" x2="100" y2="86" stroke="#313244" strokeWidth="1" strokeDasharray="3 2" />
          <rect x="40" y="35" width="25" height="3" fill="#f38ba8" />
          <rect x="40" y="43" width="45" height="3" fill="#a6e3a1" />
          <rect x="110" y="32" width="45" height="42" rx="2" fill="#0284c7" opacity="0.85" />
        </svg>
      );

    case "acc-lamp":
      return (
        <svg viewBox="0 0 160 160" className="h-full w-full p-2">
          <ellipse cx="100" cy="138" rx="25" ry="6" fill="rgba(0,0,0,0.2)" />
          <ellipse cx="100" cy="135" rx="20" ry="5" fill="#27272a" />
          <line x1="100" y1="135" x2="88" y2="60" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />
          <line x1="88" y1="60" x2="55" y2="52" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
          <polygon points="55,52 35,75 70,75" fill="#27272a" stroke="#3f3f46" strokeWidth="1.5" />
          <polygon points="35,75 70,75 110,140 10,140" fill="rgba(254, 240, 138, 0.4)" />
        </svg>
      );

    case "acc-plant":
      return (
        <svg viewBox="0 0 160 160" className="h-full w-full p-2">
          <ellipse cx="80" cy="138" rx="22" ry="6" fill="rgba(0,0,0,0.2)" />
          <polygon points="65,95 95,95 90,135 70,135" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
          <ellipse cx="80" cy="95" rx="15" ry="4" fill="#5c3413" />
          <path d="M 80 95 Q 50 65 35 80 Q 60 88 80 95" fill="#15803d" stroke="#166534" strokeWidth="1" />
          <path d="M 80 95 Q 70 45 88 40 Q 100 65 80 95" fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
          <path d="M 80 95 Q 110 50 125 65 Q 105 80 80 95" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
        </svg>
      );

    case "acc-keyboard":
      return (
        <svg viewBox="0 0 200 130" className="h-full w-full p-2">
          <polygon points="20,40 180,40 190,95 10,95" fill="#1e1e24" stroke="#2d2d38" strokeWidth="1.5" />
          <polygon points="35,50 165,50 173,85 27,85" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <polygon points="40,54 160,54 161,58 39,58" fill="#38bdf8" />
          <polygon points="38,61 162,61 163,66 37,66" fill="#f8fafc" />
          <polygon points="36,69 164,69 165,74 35,74" fill="#f8fafc" />
          <polygon points="65,77 135,77 136,81 64,81" fill="#fb923c" />
        </svg>
      );

    default:
      return null;
  }
}
