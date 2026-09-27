"use client";

import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { LIFESTYLE_ZONES } from "../data/products";
import { formatUsd } from "../lib/format";

interface LifestyleZonesProps {
  selectedLifestyle: string[];
  onToggleLifestyle: (id: string) => void;
}

export function LifestyleZones({
  selectedLifestyle,
  onToggleLifestyle,
}: LifestyleZonesProps) {
  return (
    <section className="mt-8 pb-10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-stone-900">
            Bali Lifestyle & Extra Zones
          </h2>
          <p className="text-xs text-stone-500">
            Equip your villa setup beyond the desk — add coffee, surf gear, or chill zones.
          </p>
        </div>
        <span className="hidden sm:inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
          From sketch specs
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LIFESTYLE_ZONES.map((zone) => (
          <div
            key={zone.id}
            className="flex flex-col rounded-3xl bg-card p-4 shadow-[0_4px_20px_rgb(43_36_28/0.04)] border border-stone-200/60"
          >
            <div className="mb-3 flex items-center justify-between border-b border-stone-100 pb-2.5">
              <h3 className="text-sm font-extrabold text-stone-900">
                {zone.title}
              </h3>
              <span className="text-[11px] font-semibold text-stone-400">
                {zone.items.filter((i) => selectedLifestyle.includes(i.id)).length} selected
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {zone.items.map((item) => {
                const isSelected = selectedLifestyle.includes(item.id);
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => onToggleLifestyle(item.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between rounded-2xl border-2 border-dashed p-3 text-left transition-all ${
                      isSelected
                        ? "border-accent bg-accent/5 text-stone-900 shadow-sm"
                        : "border-stone-200/90 bg-[#faf7f2]/60 text-stone-700 hover:border-stone-300 hover:bg-white"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                        {item.emoji}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold text-stone-900">
                          {isSelected ? item.label : `+ Add ${item.label}`}
                        </p>
                        <p className="text-[11px] text-stone-500 font-medium">
                          {formatUsd(item.price)} / mo
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isSelected
                          ? "bg-accent text-white"
                          : "bg-stone-200/80 text-stone-600 hover:bg-stone-300"
                      }`}
                    >
                      {isSelected ? (
                        <Check size={14} strokeWidth={3} aria-hidden="true" />
                      ) : (
                        <Plus size={14} strokeWidth={3} aria-hidden="true" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
