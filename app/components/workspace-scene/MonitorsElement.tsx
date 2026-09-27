"use client";

import { motion } from "framer-motion";

interface MonitorsElementProps {
  monitorId: string | null;
  deskId: string;
}

export function MonitorsElement({ monitorId, deskId }: MonitorsElementProps) {
  if (!monitorId) return null;

  const isStanding = deskId === "desk-ubud";
  const isTriple = monitorId === "acc-monitor-triple";
  const isDual = monitorId === "acc-monitor-dual";
  const isSingle = monitorId === "acc-monitor-single";

  return (
    <motion.div
      key={monitorId}
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ type: "spring", stiffness: 240, damping: 25 }}
      className={`absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-500 ${isStanding ? "bottom-[33%] w-[78%] max-w-[580px] h-[34%]" : "bottom-[29%] w-[78%] max-w-[580px] h-[34%]"
        }`}
    >
      <svg
        viewBox="0 0 600 240"
        className="h-full w-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Bezel gradient */}
          <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          {/* IDE screen gradient */}
          <linearGradient id="ideScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1e2e" />
            <stop offset="100%" stopColor="#181825" />
          </linearGradient>

          {/* Browser Bali screen gradient */}
          <linearGradient id="baliScreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Docs screen gradient */}
          <linearGradient id="docsScreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
        </defs>

        {/* Monitor mount and desk clamp */}
        <g id="monitor-arm">
          {/* Desk clamp */}
          <rect x="290" y="170" width="20" height="25" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
          {/* Main heavy-duty vertical pole */}
          <rect x="294" y="90" width="12" height="90" rx="3" fill="#27272a" />
          {/* Articulated crossbar arms */}
          {isTriple ? (
            <path
              d="M 120 100 Q 200 95 300 95 Q 400 95 480 100"
              stroke="#27272a"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
          ) : isDual ? (
            <path
              d="M 180 100 L 300 95 L 420 100"
              stroke="#27272a"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
          ) : null}
        </g>

        {/* Screens */}
        {isTriple ? (
          // Triple-monitor setup
          <g id="triple-monitors">
            {/* LEFT MONITOR (Angled inward) */}
            <g transform="skewY(4)">
              <rect x="25" y="15" width="160" height="135" rx="6" fill="url(#bezelGrad)" stroke="#3f3f46" strokeWidth="2" />
              {/* Screen content: Docs / Terminal */}
              <rect x="30" y="20" width="150" height="122" rx="3" fill="url(#docsScreen)" />
              {/* Code lines */}
              <circle cx="40" cy="28" r="3" fill="#ef4444" />
              <circle cx="50" cy="28" r="3" fill="#eab308" />
              <circle cx="60" cy="28" r="3" fill="#22c55e" />
              {/* Code text lines */}
              <rect x="40" y="40" width="70" height="4" rx="2" fill="#60a5fa" />
              <rect x="40" y="50" width="110" height="4" rx="2" fill="#a78bfa" />
              <rect x="52" y="60" width="85" height="4" rx="2" fill="#34d399" />
              <rect x="52" y="70" width="60" height="4" rx="2" fill="#f472b6" />
              <rect x="40" y="82" width="100" height="4" rx="2" fill="#60a5fa" />
              <rect x="52" y="92" width="75" height="4" rx="2" fill="#fbbf24" />
              <rect x="40" y="104" width="50" height="4" rx="2" fill="#94a3b8" />
              <rect x="40" y="116" width="90" height="4" rx="2" fill="#38bdf8" />
            </g>

            {/* CENTER MONITOR (Main display, facing user) */}
            <g>
              <rect x="200" y="5" width="200" height="145" rx="6" fill="url(#bezelGrad)" stroke="#52525b" strokeWidth="2.5" />
              {/* IDE Display */}
              <rect x="206" y="11" width="188" height="132" rx="4" fill="url(#ideScreen)" />
              {/* Tab bar */}
              <rect x="206" y="11" width="188" height="16" fill="#11111b" />
              <rect x="214" y="15" width="48" height="9" rx="2" fill="#313244" />
              <text x="220" y="22" fontSize="6" fontFamily="monospace" fill="#cdd6f4">Workspace.tsx</text>
              {/* Syntax highlighted code */}
              <rect x="216" y="36" width="55" height="5" rx="2" fill="#f38ba8" />
              <rect x="276" y="36" width="65" height="5" rx="2" fill="#89b4fa" />
              <rect x="226" y="48" width="115" height="5" rx="2" fill="#a6e3a1" />
              <rect x="226" y="60" width="85" height="5" rx="2" fill="#fab387" />
              <rect x="240" y="72" width="120" height="5" rx="2" fill="#cba6f7" />
              <rect x="240" y="84" width="75" height="5" rx="2" fill="#89dceb" />
              <rect x="226" y="96" width="40" height="5" rx="2" fill="#f38ba8" />
              <rect x="216" y="108" width="95" height="5" rx="2" fill="#f9e2af" />
              <rect x="216" y="120" width="130" height="5" rx="2" fill="#a6e3a1" />
              {/* Small power LED indicator */}
              <circle cx="300" cy="147" r="1.5" fill="#22c55e" />
            </g>

            {/* RIGHT MONITOR (Angled inward) */}
            <g transform="skewY(-4)">
              <rect x="415" y="15" width="160" height="135" rx="6" fill="url(#bezelGrad)" stroke="#3f3f46" strokeWidth="2" />
              {/* Screen: Browser preview with Bali sunset */}
              <rect x="420" y="20" width="150" height="122" rx="3" fill="url(#baliScreen)" />
              {/* Browser bar */}
              <rect x="420" y="20" width="150" height="12" fill="#0f172a" />
              <rect x="435" y="23" width="75" height="6" rx="2" fill="#334155" />
              {/* Web UI elements */}
              <rect x="430" y="42" width="70" height="8" rx="2" fill="white" opacity="0.9" />
              <rect x="430" y="55" width="120" height="4" rx="2" fill="white" opacity="0.75" />
              <rect x="430" y="63" width="95" height="4" rx="2" fill="white" opacity="0.6" />
              {/* Bali palm silhouette on screen */}
              <path d="M 540 142 Q 530 90 520 70 Q 500 55 470 60 Q 505 70 515 80" stroke="#064e3b" strokeWidth="3" fill="none" />
            </g>
          </g>
        ) : isDual ? (
          // DUAL 27" 4K MONITORS (SIDE BY SIDE)
          <g id="dual-monitors">
            {/* LEFT MONITOR */}
            <g>
              <rect x="90" y="10" width="200" height="145" rx="6" fill="url(#bezelGrad)" stroke="#3f3f46" strokeWidth="2.5" />
              <rect x="96" y="16" width="188" height="132" rx="4" fill="url(#ideScreen)" />
              {/* Tabs */}
              <rect x="96" y="16" width="188" height="14" fill="#11111b" />
              <rect x="104" y="19" width="45" height="8" rx="2" fill="#313244" />
              {/* Code */}
              <rect x="106" y="40" width="60" height="5" rx="2" fill="#f38ba8" />
              <rect x="170" y="40" width="80" height="5" rx="2" fill="#89b4fa" />
              <rect x="116" y="52" width="130" height="5" rx="2" fill="#a6e3a1" />
              <rect x="116" y="64" width="90" height="5" rx="2" fill="#fab387" />
              <rect x="130" y="76" width="110" height="5" rx="2" fill="#cba6f7" />
              <rect x="106" y="90" width="70" height="5" rx="2" fill="#89dceb" />
              <rect x="116" y="102" width="105" height="5" rx="2" fill="#f9e2af" />
              <circle cx="190" cy="151" r="1.5" fill="#22c55e" />
            </g>

            {/* RIGHT MONITOR */}
            <g>
              <rect x="310" y="10" width="200" height="145" rx="6" fill="url(#bezelGrad)" stroke="#3f3f46" strokeWidth="2.5" />
              <rect x="316" y="16" width="188" height="132" rx="4" fill="url(#baliScreen)" />
              <rect x="316" y="16" width="188" height="14" fill="#0f172a" />
              <rect x="330" y="19" width="80" height="8" rx="2" fill="#334155" />
              <rect x="328" y="42" width="90" height="10" rx="3" fill="white" opacity="0.9" />
              <rect x="328" y="58" width="140" height="5" rx="2" fill="white" opacity="0.8" />
              <rect x="328" y="68" width="110" height="5" rx="2" fill="white" opacity="0.6" />
              <circle cx="410" cy="151" r="1.5" fill="#22c55e" />
            </g>
          </g>
        ) : isSingle ? (
          // 34" CURVED ULTRAWIDE MONITOR
          <g id="single-ultrawide">
            <rect x="110" y="15" width="380" height="140" rx="8" fill="url(#bezelGrad)" stroke="#3f3f46" strokeWidth="3" />
            <rect x="118" y="22" width="364" height="124" rx="5" fill="url(#ideScreen)" />
            {/* Split screen divider line */}
            <line x1="300" y1="22" x2="300" y2="146" stroke="#313244" strokeWidth="2" strokeDasharray="4 2" />
            {/* Left half: Editor */}
            <rect x="130" y="38" width="55" height="5" rx="2" fill="#f38ba8" />
            <rect x="190" y="38" width="70" height="5" rx="2" fill="#89b4fa" />
            <rect x="140" y="50" width="110" height="5" rx="2" fill="#a6e3a1" />
            <rect x="140" y="62" width="85" height="5" rx="2" fill="#fab387" />
            <rect x="130" y="76" width="95" height="5" rx="2" fill="#cba6f7" />
            <rect x="140" y="88" width="120" height="5" rx="2" fill="#89dceb" />
            <rect x="130" y="102" width="60" height="5" rx="2" fill="#f9e2af" />
            {/* Right half: Browser */}
            <rect x="315" y="35" width="150" height="98" rx="4" fill="url(#baliScreen)" opacity="0.85" />
            <circle cx="300" cy="152" r="1.8" fill="#22c55e" />
          </g>
        ) : null}
      </svg>
    </motion.div>
  );
}
