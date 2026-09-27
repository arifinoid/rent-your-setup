"use client";

interface RoomBackgroundProps {
  hasLamp: boolean;
}

export function RoomBackground({ hasLamp }: RoomBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Warm Bali villa interior wall gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3ece0] via-[#f7f2ea] to-[#eee4d5]" />

      {/* Subtle architectural wall archway with sunlit tropical view */}
      <div className="absolute right-4 top-4 h-[78%] w-44 sm:w-60 md:w-72 rounded-t-full border-[8px] border-white/40 bg-gradient-to-b from-[#94c3e8]/30 via-[#dbeafe]/20 to-[#fde047]/15 overflow-hidden shadow-inner opacity-85">
        {/* Palm tree silhouettes in the archway window */}
        <svg
          viewBox="0 0 200 300"
          className="absolute bottom-0 right-0 h-full w-full opacity-40 text-stone-700"
          aria-hidden="true"
        >
          <path
            d="M 170 300 Q 150 180 140 120 Q 110 90 60 95 Q 120 110 135 130 Q 130 80 100 50 Q 135 75 142 120 Q 160 70 185 45 Q 165 80 148 125 Q 180 105 210 100 Q 170 125 150 135"
            fill="currentColor"
          />
          <path
            d="M 120 300 Q 100 210 85 160 Q 60 135 20 140 Q 65 155 80 170 Q 75 125 50 100 Q 78 120 86 160 Q 100 115 120 95 Q 105 125 90 165 Q 115 145 140 140 Q 110 160 95 170"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>

        {/* Golden hour sun rays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 via-transparent to-transparent" />
      </div>

      {/* Framed Bali artwork */}
      <div className="absolute left-6 top-8 hidden sm:block w-24 md:w-28 rounded-lg border-2 border-stone-800/10 bg-[#fdfbf7] p-2 shadow-md">
        <div className="aspect-[3/4] w-full rounded bg-stone-100 p-1.5 flex flex-col justify-between">
          <p className="text-[7px] font-black uppercase tracking-widest text-stone-700 leading-tight">
            Bali<br />Works<br />Differently
          </p>
          <div className="h-6 w-full rounded bg-gradient-to-t from-amber-500/20 to-orange-300/20 flex items-center justify-center">
            <span className="text-[10px]">🌴</span>
          </div>
        </div>
      </div>

      {/* Hardwood floor perspective lines */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#cfbda8] via-[#dfd0bd] to-transparent opacity-50" />

      {/* Woven floor rug */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 h-[42%] w-[88%] max-w-3xl rounded-[50%] bg-[#d7ba95] shadow-[0_16px_36px_rgba(72,48,24,0.18)] border-4 border-[#c29f74]/60 overflow-hidden">
        {/* Rattan woven ring textures */}
        <div className="absolute inset-2 rounded-[50%] border-2 border-dashed border-[#b38f63]/50" />
        <div className="absolute inset-5 rounded-[50%] border border-[#a68053]/40" />
        <div className="absolute inset-9 rounded-[50%] border border-dashed border-[#b38f63]/30" />
        <div className="absolute inset-14 rounded-[50%] border border-[#a68053]/20" />
        {/* Center spiral */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,230,205,0.4)_0%,transparent_70%)]" />
      </div>

      {/* Dynamic ambient lamp lighting cone over desk */}
      {hasLamp && (
        <div
          className="absolute right-[16%] top-[12%] h-[68%] w-[52%] pointer-events-none rounded-[50%] bg-[radial-gradient(ellipse_at_top_right,rgba(254,240,138,0.35)_0%,rgba(253,224,71,0.12)_45%,transparent_75%)] transition-opacity duration-700"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
