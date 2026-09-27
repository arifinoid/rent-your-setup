"use client";

import { motion } from "framer-motion";

interface LifestyleRoomElementsProps {
  selectedLifestyle: string[];
}

export function LifestyleRoomElements({ selectedLifestyle }: LifestyleRoomElementsProps) {
  const hasSurfboard = selectedLifestyle.includes("z-surfboard");
  const hasScooter = selectedLifestyle.includes("z-motorcycle");
  const hasBeanbag = selectedLifestyle.includes("z-beanbag");
  const hasCoffee = selectedLifestyle.includes("z-coffee-machine");
  const hasToolShelf = selectedLifestyle.includes("z-toolshelf");

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-30">
      {/* 1. BALI SURFBOARD (Leaning against left wall) */}
      {hasSurfboard && (
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="absolute left-[3%] bottom-[8%] w-14 sm:w-16 md:w-20 h-64 md:h-80 drop-shadow-xl"
        >
          <svg viewBox="0 0 80 320" className="h-full w-full">
            <defs>
              <linearGradient id="surfWood" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#fb923c" />
                <stop offset="70%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>
            </defs>
            {/* Board silhouette */}
            <path
              d="M 40 5 Q 75 80 75 180 Q 75 280 40 315 Q 5 280 5 180 Q 5 80 40 5"
              fill="url(#surfWood)"
              stroke="#9a3412"
              strokeWidth="2.5"
            />
            {/* Center wood stringer line */}
            <line x1="40" y1="5" x2="40" y2="315" stroke="#7c2d12" strokeWidth="2.5" />
            {/* Bali hibiscus flower or wave badge */}
            <circle cx="40" cy="120" r="14" fill="#ffffff" opacity="0.9" />
            <text x="40" y="125" fontSize="12" textAnchor="middle" fill="#ea580c">🌊</text>
          </svg>
        </motion.div>
      )}

      {/* 2. MOTORCYCLE HELMET (Outdoor Gear) */}
      {hasScooter && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="absolute left-[13%] bottom-[6%] w-12 h-12 md:w-14 md:h-14 drop-shadow-lg"
        >
          <svg viewBox="0 0 60 60" className="h-full w-full">
            {/* Shadow */}
            <ellipse cx="30" cy="52" rx="22" ry="5" fill="rgba(0,0,0,0.3)" />
            {/* Cafe racer helmet dome */}
            <circle cx="30" cy="28" r="22" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
            {/* Visor bubble */}
            <path d="M 22 18 Q 42 22 48 35 Q 38 42 22 36 Z" fill="#38bdf8" opacity="0.85" />
            {/* Racing stripes */}
            <line x1="30" y1="6" x2="30" y2="50" stroke="#f97316" strokeWidth="4" />
          </svg>
        </motion.div>
      )}

      {/* 3. RELAX ZONE BEAN BAG (Right floor, beside rug) */}
      {hasBeanbag && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="absolute right-[4%] bottom-[4%] w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 drop-shadow-xl"
        >
          <svg viewBox="0 0 140 140" className="h-full w-full">
            <defs>
              <linearGradient id="beanbagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#c2410c" />
              </linearGradient>
            </defs>
            {/* Shadow */}
            <ellipse cx="70" cy="120" rx="55" ry="16" fill="rgba(0,0,0,0.25)" />
            {/* Slouchy bean bag body */}
            <path
              d="M 30 115 Q 15 70 45 40 Q 80 20 105 45 Q 130 80 115 115 Q 70 135 30 115"
              fill="url(#beanbagGrad)"
              stroke="#9a3412"
              strokeWidth="2.5"
            />
            {/* Seam stitches */}
            <path d="M 75 30 Q 70 80 70 128" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.6" />
            <ellipse cx="68" cy="80" rx="30" ry="18" fill="rgba(0,0,0,0.12)" />
            {/* Handle loop */}
            <path d="M 68 28 Q 75 14 82 28" stroke="#9a3412" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
      )}

      {/* 4. COFFEE STATION (Mini espresso station) */}
      {hasCoffee && (
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="absolute left-[20%] top-[40%] hidden sm:block w-16 h-20 drop-shadow-md"
        >
          <svg viewBox="0 0 60 80" className="h-full w-full">
            {/* Side shelf */}
            <rect x="5" y="65" width="50" height="6" rx="2" fill="#8f5323" stroke="#683916" strokeWidth="1" />
            {/* Espresso machine */}
            <rect x="12" y="30" width="36" height="35" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="18" y="34" width="24" height="12" rx="2" fill="#1e293b" />
            {/* Portafilter */}
            <rect x="22" y="47" width="16" height="6" rx="1" fill="#475569" />
            <line x1="28" y1="50" x2="10" y2="52" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            {/* Espresso cup with steam */}
            <path d="M 24 57 L 26 64 L 34 64 L 36 57 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            {/* Steam animation lines */}
            <path d="M 28 54 Q 30 50 28 46" stroke="#94a3b8" strokeWidth="1" fill="none" opacity="0.7" />
            <path d="M 32 54 Q 34 50 32 46" stroke="#94a3b8" strokeWidth="1" fill="none" opacity="0.7" />
          </svg>
        </motion.div>
      )}

      {/* 5. GARAGE SPACE (Tool & Gear Shelf on right wall) */}
      {hasToolShelf && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="absolute right-[4%] top-[18%] hidden md:block w-20 h-44 drop-shadow-md"
        >
          <svg viewBox="0 0 80 160" className="h-full w-full">
            {/* Industrial frame posts */}
            <rect x="8" y="10" width="4" height="145" fill="#334155" />
            <rect x="68" y="10" width="4" height="145" fill="#334155" />
            {/* Shelves */}
            <rect x="5" y="30" width="70" height="5" rx="1" fill="#475569" />
            <rect x="5" y="70" width="70" height="5" rx="1" fill="#475569" />
            <rect x="5" y="110" width="70" height="5" rx="1" fill="#475569" />
            <rect x="5" y="145" width="70" height="5" rx="1" fill="#475569" />
            {/* Gear box on shelf 2 */}
            <rect x="15" y="52" width="30" height="18" rx="2" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
            {/* Tool organizer on shelf 3 */}
            <rect x="42" y="92" width="22" height="18" rx="2" fill="#0284c7" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
