"use client";

import { motion } from "framer-motion";
import type { Chair } from "../../types/workspace";

interface ChairElementProps {
  chair: Chair;
}

export function ChairElement({ chair }: ChairElementProps) {
  const isRattan = chair.id === "chair-rattan";
  const isErgoPro = chair.id === "chair-ergopro";

  return (
    <motion.div
      key={chair.id}
      initial={{ opacity: 0, scale: 0.92, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 15 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="absolute bottom-[2%] left-1/2 -translate-x-1/2 z-35 w-[46%] max-w-[340px] h-[46%] pointer-events-none drop-shadow-2xl"
    >
      <svg
        viewBox="0 0 300 320"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Chair mesh gradient */}
          <linearGradient id="meshDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#18181b" />
          </linearGradient>

          {/* Rattan gradient */}
          <linearGradient id="rattanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="50%" stopColor="#bc8a5f" />
            <stop offset="100%" stopColor="#a47148" />
          </linearGradient>

          {/* Linen cushion */}
          <linearGradient id="linenCushion" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fdfbf7" />
            <stop offset="100%" stopColor="#e7dfd5" />
          </linearGradient>
        </defs>

        {/* Shadow cast onto rug */}
        <ellipse cx="150" cy="295" rx="75" ry="14" fill="rgba(40, 25, 10, 0.35)" />

        {isRattan ? (
          // RATTAN LOUNGE CHAIR (BALI ARTISAN VIBES)
          <g id="rattan-chair">
            {/* Tapered wooden legs */}
            <line x1="90" y1="210" x2="65" y2="295" stroke="#8c5828" strokeWidth="7" strokeLinecap="round" />
            <line x1="210" y1="210" x2="235" y2="295" stroke="#8c5828" strokeWidth="7" strokeLinecap="round" />
            <line x1="120" y1="210" x2="105" y2="290" stroke="#71431b" strokeWidth="6" strokeLinecap="round" />
            <line x1="180" y1="210" x2="195" y2="290" stroke="#71431b" strokeWidth="6" strokeLinecap="round" />

            {/* Cross stretcher */}
            <line x1="80" y1="260" x2="220" y2="260" stroke="#71431b" strokeWidth="4" />

            {/* Woven rattan basket frame */}
            <path
              d="M 65 140 Q 60 70 150 65 Q 240 70 235 140 Q 240 210 150 215 Q 60 210 65 140"
              fill="url(#rattanGrad)"
              stroke="#8c5828"
              strokeWidth="4"
            />

            {/* Woven lattice lines */}
            <path
              d="M 85 90 Q 150 110 215 90 M 75 125 Q 150 145 225 125 M 75 160 Q 150 180 225 160"
              stroke="#71431b"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M 105 75 Q 110 145 105 200 M 150 68 Q 150 145 150 212 M 195 75 Q 190 145 195 200"
              stroke="#71431b"
              strokeWidth="2.5"
              fill="none"
            />

            {/* Plush cream linen cushion */}
            <ellipse cx="150" cy="180" rx="65" ry="25" fill="url(#linenCushion)" stroke="#d5cbbe" strokeWidth="2" />
            <ellipse cx="150" cy="135" rx="55" ry="38" fill="url(#linenCushion)" stroke="#d5cbbe" strokeWidth="2" />
          </g>
        ) : (
          // ERGONOMIC TASK CHAIR (SUNDOWN OR ERGOPRO)
          <g id="task-chair">
            {/* 1. 5-Star Caster Base */}
            <g id="caster-base">
              {/* Wheel 1 (Center Front) */}
              <ellipse cx="150" cy="295" rx="6" ry="4" fill="#09090b" />
              <line x1="150" y1="270" x2="150" y2="293" stroke="#27272a" strokeWidth="6" strokeLinecap="round" />

              {/* Wheel 2 (Left Front) */}
              <ellipse cx="85" cy="285" rx="6" ry="4" fill="#09090b" />
              <line x1="150" y1="270" x2="88" y2="284" stroke="#27272a" strokeWidth="6" strokeLinecap="round" />

              {/* Wheel 3 (Right Front) */}
              <ellipse cx="215" cy="285" rx="6" ry="4" fill="#09090b" />
              <line x1="150" y1="270" x2="212" y2="284" stroke="#27272a" strokeWidth="6" strokeLinecap="round" />

              {/* Wheel 4 (Left Rear) */}
              <ellipse cx="105" cy="265" rx="5" ry="3" fill="#09090b" />
              <line x1="150" y1="270" x2="108" y2="265" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />

              {/* Wheel 5 (Right Rear) */}
              <ellipse cx="195" cy="265" rx="5" ry="3" fill="#09090b" />
              <line x1="150" y1="270" x2="192" y2="265" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />

              {/* Gas lift cylinder */}
              <rect x="144" y="225" width="12" height="48" rx="2" fill={isErgoPro ? "#d4d4d8" : "#27272a"} />
            </g>

            {/* 2. Seat Mechanism & Cushion */}
            <rect x="135" y="215" width="30" height="14" rx="3" fill="#18181b" />
            {/* Padded Seat Pan */}
            <path
              d="M 90 205 Q 150 220 210 205 Q 220 185 150 180 Q 80 185 90 205"
              fill="#18181b"
              stroke="#27272a"
              strokeWidth="2"
            />
            {/* Seat edge cushion curve */}
            <path
              d="M 90 205 Q 150 226 210 205 Q 212 215 150 222 Q 88 215 90 205"
              fill="#09090b"
            />

            {/* 3. 3D Armrests */}
            {/* Left Armrest */}
            <path d="M 92 195 L 82 145" stroke="#27272a" strokeWidth="6" strokeLinecap="round" />
            <rect x="70" y="138" width="28" height="8" rx="3" fill="#09090b" />

            {/* Right Armrest */}
            <path d="M 208 195 L 218 145" stroke="#27272a" strokeWidth="6" strokeLinecap="round" />
            <rect x="202" y="138" width="28" height="8" rx="3" fill="#09090b" />

            {/* 4. Ergonomic Spine & Mesh Backrest */}
            {/* Central spine support */}
            <path
              d="M 150 215 L 150 95"
              stroke={isErgoPro ? "#94a3b8" : "#27272a"}
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* Lumbar support band */}
            <path
              d="M 105 155 Q 150 145 195 155"
              stroke="#09090b"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />

            {/* Contoured Mesh Back Frame */}
            <path
              d="M 100 185 Q 92 120 102 70 Q 150 60 198 70 Q 208 120 200 185 Q 150 195 100 185"
              fill="url(#meshDark)"
              stroke="#3f3f46"
              strokeWidth="3.5"
            />

            {/* Breathable Mesh Pattern Lines */}
            <path
              d="M 108 90 Q 150 85 192 90 M 104 110 Q 150 105 196 110 M 102 130 Q 150 125 198 130 M 104 150 Q 150 145 196 150 M 106 170 Q 150 165 194 170"
              stroke="#52525b"
              strokeWidth="1.5"
              strokeDasharray="3 2"
              fill="none"
              opacity="0.8"
            />

            {/* 5. Headrest (for ErgoPro) */}
            {isErgoPro && (
              <g id="headrest">
                <path d="M 150 65 L 150 35" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                <rect x="122" y="24" width="56" height="22" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                <ellipse cx="150" cy="35" rx="22" ry="7" fill="#27272a" />
              </g>
            )}
          </g>
        )}
      </svg>
    </motion.div>
  );
}
