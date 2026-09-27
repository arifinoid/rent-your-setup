"use client";

import { motion } from "framer-motion";
import { match } from "ts-pattern";
import type { Desk } from "../../types/workspace";

interface DeskElementProps {
  desk: Desk;
}

export function DeskElement({ desk }: DeskElementProps) {
  const appearance = match(desk.id)
    .with("desk-ubud", () => ({
      variant: "standing" as const,
      frameClassName: "bottom-[18%] h-[38%]",
      tabletopEdge: "#bfa072",
      tabletopSurface: "url(#bambooWood)",
      tabletopStroke: "#af8d64",
    }))
    .with("desk-canggu", () => ({
      variant: "canggu" as const,
      frameClassName: "bottom-[14%] h-[35%]",
      tabletopEdge: "#683916",
      tabletopSurface: "url(#teakWood)",
      tabletopStroke: "#5c3413",
    }))
    .otherwise(() => ({
      variant: "standard" as const,
      frameClassName: "bottom-[14%] h-[35%]",
      tabletopEdge: "#9e7e59",
      tabletopSurface: "url(#oakWood)",
      tabletopStroke: "#af8d64",
    }));

  return (
    <motion.div
      key={desk.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={`absolute left-1/2 -translate-x-1/2 w-[82%] max-w-[620px] transition-all duration-500 ${appearance.frameClassName}`}
    >
      {/* Cast shadow under desk on the rug */}
      <div className="absolute -bottom-3 left-[8%] right-[8%] h-7 rounded-[50%] bg-stone-900/25 blur-md" />

      {/* Desk surface & structure */}
      <svg
        viewBox="0 0 600 240"
        className="h-full w-full drop-shadow-xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Wood gradients */}
          <linearGradient id="oakWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8cfaf" />
            <stop offset="50%" stopColor="#d8b993" />
            <stop offset="100%" stopColor="#c5a47e" />
          </linearGradient>

          <linearGradient id="bambooWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3dfb8" />
            <stop offset="50%" stopColor="#e5cb9b" />
            <stop offset="100%" stopColor="#d1b27e" />
          </linearGradient>

          <linearGradient id="teakWood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b77943" />
            <stop offset="50%" stopColor="#9c5f2b" />
            <stop offset="100%" stopColor="#7a461b" />
          </linearGradient>

          <linearGradient id="steelLeg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#292524" />
            <stop offset="50%" stopColor="#44403c" />
            <stop offset="100%" stopColor="#1c1917" />
          </linearGradient>
        </defs>

        {/* Desk legs and pedestals */}
        {match(appearance.variant)
          .with("canggu", () => (
            // Canggu studio desk drawers
            <g id="drawers-group">
              {/* Left drawer pedestal */}
              <rect x="70" y="55" width="90" height="145" rx="4" fill="url(#teakWood)" stroke="#5c3413" strokeWidth="2" />
              {/* Drawer 1 */}
              <rect x="76" y="65" width="78" height="35" rx="3" fill="#8f5323" stroke="#683916" strokeWidth="1.5" />
              <rect x="105" y="80" width="20" height="5" rx="2" fill="#d4af37" />
              {/* Drawer 2 */}
              <rect x="76" y="108" width="78" height="35" rx="3" fill="#8f5323" stroke="#683916" strokeWidth="1.5" />
              <rect x="105" y="123" width="20" height="5" rx="2" fill="#d4af37" />
              {/* Drawer 3 */}
              <rect x="76" y="151" width="78" height="40" rx="3" fill="#8f5323" stroke="#683916" strokeWidth="1.5" />
              <rect x="105" y="168" width="20" height="5" rx="2" fill="#d4af37" />

              {/* Right drawer pedestal */}
              <rect x="440" y="55" width="90" height="145" rx="4" fill="url(#teakWood)" stroke="#5c3413" strokeWidth="2" />
              {/* Drawer 1 */}
              <rect x="446" y="65" width="78" height="35" rx="3" fill="#8f5323" stroke="#683916" strokeWidth="1.5" />
              <rect x="475" y="80" width="20" height="5" rx="2" fill="#d4af37" />
              {/* Drawer 2 */}
              <rect x="446" y="108" width="78" height="35" rx="3" fill="#8f5323" stroke="#683916" strokeWidth="1.5" />
              <rect x="475" y="123" width="20" height="5" rx="2" fill="#d4af37" />
              {/* Drawer 3 */}
              <rect x="446" y="151" width="78" height="40" rx="3" fill="#8f5323" stroke="#683916" strokeWidth="1.5" />
              <rect x="475" y="168" width="20" height="5" rx="2" fill="#d4af37" />
            </g>
          ))
          .with("standing", () => (
            // Ubud Standing Desk: Motorized telescopic columns + feet
            <g id="standing-columns">
              {/* Left column */}
              <rect x="95" y="55" width="22" height="150" rx="2" fill="url(#steelLeg)" />
              <rect x="92" y="115" width="28" height="8" rx="2" fill="#1c1917" />
              <rect x="70" y="200" width="72" height="12" rx="4" fill="url(#steelLeg)" />

              {/* Right column */}
              <rect x="483" y="55" width="22" height="150" rx="2" fill="url(#steelLeg)" />
              <rect x="480" y="115" width="28" height="8" rx="2" fill="#1c1917" />
              <rect x="458" y="200" width="72" height="12" rx="4" fill="url(#steelLeg)" />

              {/* Crossbeam support under top */}
              <rect x="115" y="62" width="370" height="14" fill="#292524" />

              {/* Digital LED height controller keypad under right side */}
              <rect x="450" y="52" width="45" height="16" rx="3" fill="#0f172a" />
              <text x="472" y="63" fontSize="8" fontFamily="monospace" fill="#38bdf8" textAnchor="middle" fontWeight="bold">
                104cm
              </text>
            </g>
          ))
          .with("standard", () => (
            // Lima Desk: Sleek modern black steel loop legs
            <g id="lima-steel-legs">
              {/* Left loop leg */}
              <polygon points="80,55 94,55 84,205 70,205" fill="url(#steelLeg)" />
              <polygon points="120,55 134,55 124,205 110,205" fill="url(#steelLeg)" />
              <rect x="68" y="200" width="68" height="10" rx="3" fill="url(#steelLeg)" />

              {/* Right loop leg */}
              <polygon points="466,55 480,55 470,205 456,205" fill="url(#steelLeg)" />
              <polygon points="506,55 520,55 510,205 496,205" fill="url(#steelLeg)" />
              <rect x="454" y="200" width="68" height="10" rx="3" fill="url(#steelLeg)" />

              {/* Rear support beam */}
              <rect x="120" y="80" width="360" height="8" fill="#1c1917" opacity="0.6" />
            </g>
          ))
          .exhaustive()}

        {/* Desk tabletop */}
        {/* Tabletop thickness (side edge) */}
        <polygon
          points="40,42 560,42 560,56 40,56"
          fill={appearance.tabletopEdge}
        />

        {/* Tabletop top surface (angled perspective quad) */}
        <polygon
          points="65,15 535,15 560,42 40,42"
          fill={appearance.tabletopSurface}
          stroke={appearance.tabletopStroke}
          strokeWidth="1.5"
        />

        {/* Beveled highlight on front edge */}
        <line x1="41" y1="43" x2="559" y2="43" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}
