"use client";

import { Truck, Leaf, Sun } from "lucide-react";
import type { Chair, Desk } from "../types/workspace";
import { RoomBackground } from "./workspace-scene/RoomBackground";
import { DeskElement } from "./workspace-scene/DeskElement";
import { MonitorsElement } from "./workspace-scene/MonitorsElement";
import { DeskAccessories } from "./workspace-scene/DeskAccessories";
import { ChairElement } from "./workspace-scene/ChairElement";
import { LifestyleRoomElements } from "./workspace-scene/LifestyleRoomElements";
interface VisualizerProps {
  currentDesk: Desk | null;
  currentChair: Chair | null;
  selectedAccessories: string[];
  selectedLifestyle: string[];
  totalMonthlyPrice: number;
}

export function Visualizer({
  currentDesk,
  currentChair,
  selectedAccessories,
  selectedLifestyle,
  totalMonthlyPrice,
}: VisualizerProps) {
  const hasLamp = selectedAccessories.includes("acc-lamp");
  const monitorId =
    selectedAccessories.find((id) => id.startsWith("acc-monitor")) ?? null;

  return (
    <section className="flex min-h-[460px] flex-col">
      {/* Visualizer Frame */}
      <div className="relative min-h-[440px] flex-1 overflow-hidden rounded-[28px] bg-[#f2ece2] shadow-[0_12px_40px_rgb(43_36_28/0.08)] border border-stone-200/60">
        <RoomBackground hasLamp={hasLamp} />

        <div className="absolute left-1/2 top-5 z-40 -translate-x-1/2 hidden sm:block">
          <p className="text-xs font-semibold tracking-wider text-stone-600 bg-white/70 px-3 py-1 rounded-full backdrop-blur-sm border border-stone-100/80">
            — Create Your Perfect Setup! —
          </p>
        </div>

        <LifestyleRoomElements selectedLifestyle={selectedLifestyle} />

        {currentDesk ? <DeskElement desk={currentDesk} /> : null}

        {currentDesk ? <MonitorsElement monitorId={monitorId} deskId={currentDesk.id} /> : null}

        {currentDesk ? (
          <DeskAccessories selectedAccessories={selectedAccessories} deskId={currentDesk.id} />
        ) : null}

        {currentChair ? <ChairElement chair={currentChair} /> : null}

        <p className="sr-only" aria-live="polite">
          Workspace preview updated: {currentDesk?.name ?? "no desk"}, {currentChair?.name ?? "no chair"}
          {selectedAccessories.length > 0
            ? `, ${selectedAccessories.length} accessories`
            : ""}
          . Total: ${totalMonthlyPrice}/month.
        </p>
      </div>

      <ul className="mt-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-stone-600">
        <li className="flex items-center gap-1.5">
          <Truck size={14} className="text-accent" aria-hidden="true" />
          Fast delivery across Bali
        </li>
        <li className="flex items-center gap-1.5">
          <Leaf size={14} className="text-emerald-600" aria-hidden="true" />
          Flexible monthly rental
        </li>
        <li className="flex items-center gap-1.5">
          <Sun size={14} className="text-amber-500" aria-hidden="true" />
          Designed for digital nomads
        </li>
      </ul>

    </section>
  );
}
