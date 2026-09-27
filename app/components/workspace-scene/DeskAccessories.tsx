"use client";

import { motion } from "framer-motion";

interface DeskAccessoriesProps {
  selectedAccessories: string[];
  deskId: string;
}

export function DeskAccessories({ selectedAccessories, deskId }: DeskAccessoriesProps) {
  const isStanding = deskId === "desk-ubud";
  const hasLamp = selectedAccessories.includes("acc-lamp");
  const hasPlant = selectedAccessories.includes("acc-plant");
  const hasKeyboard = selectedAccessories.includes("acc-keyboard");

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 z-25 pointer-events-none transition-all duration-500 ${isStanding
          ? "bottom-[23%] w-[82%] max-w-[620px] h-[22%]"
          : "bottom-[19%] w-[82%] max-w-[620px] h-[22%]"
        }`}
    >
      <svg
        viewBox="0 0 600 160"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lampMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          <radialGradient id="lampGlow" cx="50%" cy="0%" r="90%">
            <stop offset="0%" stopColor="rgba(254, 240, 138, 0.65)" />
            <stop offset="40%" stopColor="rgba(253, 224, 71, 0.25)" />
            <stop offset="100%" stopColor="rgba(253, 224, 71, 0)" />
          </radialGradient>
        </defs>

        {/* 1. KEYBOARD & MOUSE + DESK PAD (Center surface) */}
        {hasKeyboard && (
          <g id="desk-mat-and-keyboard">
            {/* Extended felt desk mat */}
            <polygon
              points="160,25 440,25 460,78 140,78"
              fill="#1e1e24"
              stroke="#2d2d38"
              strokeWidth="1.5"
              className="drop-shadow-md"
            />
            {/* Mechanical keyboard */}
            <polygon
              points="180,35 340,35 352,65 168,65"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1.5"
              className="drop-shadow-sm"
            />
            {/* Keycap rows with subtle warm backlighting */}
            {/* Row 1 */}
            <polygon points="184,38 336,38 338,43 182,43" fill="#38bdf8" opacity="0.8" />
            {/* Row 2 */}
            <polygon points="181,45 339,45 341,50 179,50" fill="#f8fafc" opacity="0.75" />
            {/* Row 3 */}
            <polygon points="178,52 342,52 344,57 176,57" fill="#f8fafc" opacity="0.75" />
            {/* Spacebar */}
            <polygon points="215,59 305,59 307,63 213,63" fill="#fb923c" opacity="0.9" />

            {/* Ergonomic wireless mouse */}
            <ellipse cx="400" cy="50" rx="14" ry="18" fill="#0f172a" stroke="#334155" strokeWidth="1.5" className="drop-shadow-sm" />
            <line x1="400" y1="34" x2="400" y2="48" stroke="#38bdf8" strokeWidth="1.5" />
          </g>
        )}

        {/* Potted plant */}
        {hasPlant && (
          <g id="desk-plant">
            {/* Pot shadow */}
            <ellipse cx="95" cy="52" rx="20" ry="7" fill="rgba(0,0,0,0.25)" />
            {/* Ceramic white pot */}
            <polygon points="80,18 110,18 106,50 84,50" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
            <ellipse cx="95" cy="18" rx="15" ry="4" fill="#5c3413" />

            {/* Tropical Monstera & succulent leaves */}
            {/* Leaf 1 (Left arch) */}
            <path
              d="M 95 18 Q 65 -10 50 5 Q 75 12 95 18"
              fill="#15803d"
              stroke="#166534"
              strokeWidth="1"
            />
            {/* Leaf 2 (Center high) */}
            <path
              d="M 95 18 Q 85 -30 102 -35 Q 115 -10 95 18"
              fill="#22c55e"
              stroke="#16a34a"
              strokeWidth="1"
            />
            {/* Leaf 3 (Right high) */}
            <path
              d="M 95 18 Q 125 -25 140 -10 Q 120 5 95 18"
              fill="#16a34a"
              stroke="#15803d"
              strokeWidth="1"
            />
            {/* Leaf 4 (Front low) */}
            <path
              d="M 95 18 Q 115 15 130 28 Q 110 32 95 18"
              fill="#4ade80"
              stroke="#22c55e"
              strokeWidth="1"
            />
            {/* Leaf 5 (Left front) */}
            <path
              d="M 95 18 Q 70 20 62 30 Q 80 32 95 18"
              fill="#15803d"
              stroke="#14532d"
              strokeWidth="1"
            />
          </g>
        )}

        {/* Architect desk lamp */}
        {hasLamp && (
          <g id="desk-lamp">
            {/* Base shadow */}
            <ellipse cx="505" cy="52" rx="18" ry="6" fill="rgba(0,0,0,0.3)" />
            {/* Heavy round lamp base */}
            <ellipse cx="505" cy="50" rx="16" ry="5" fill="url(#lampMetal)" stroke="#3f3f46" strokeWidth="1" />
            <rect x="489" y="47" width="32" height="4" fill="url(#lampMetal)" />

            {/* Articulated lower arm */}
            <line x1="505" y1="48" x2="495" y2="-5" stroke="#18181b" strokeWidth="4.5" strokeLinecap="round" />
            {/* Joint knuckle 1 */}
            <circle cx="495" cy="-5" r="4" fill="#3f3f46" />

            {/* Articulated upper arm angled toward desk */}
            <line x1="495" y1="-5" x2="445" y2="-12" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
            {/* Joint knuckle 2 */}
            <circle cx="445" cy="-12" r="3.5" fill="#3f3f46" />

            {/* Conical lampshade pointing down */}
            <polygon points="445,-12 420,12 455,12" fill="url(#lampMetal)" stroke="#3f3f46" strokeWidth="1.5" />

            {/* Warm light cone emanating from lamp downward */}
            <polygon
              points="420,12 455,12 510,75 350,75"
              fill="url(#lampGlow)"
              className="transition-opacity duration-500"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
