"use client";

import { Armchair, Box, Sparkles } from "lucide-react";
import { ACCESSORIES, CHAIRS, DESKS } from "../data/products";
import type { CatalogTab } from "../types/workspace";
import { ProductCard } from "./ProductCard";

interface CatalogPanelProps {
  tab: CatalogTab;
  onTabChange: (tab: CatalogTab) => void;
  selectedDesk: string | null;
  selectedChair: string | null;
  selectedAccessories: string[];
  onSelectDesk: (id: string) => void;
  onSelectChair: (id: string) => void;
  onToggleAccessory: (id: string) => void;
}

const TABS: { id: CatalogTab; label: string; icon: typeof Armchair; target: string }[] = [
  { id: "chair", label: "Chairs", icon: Armchair, target: "section-chair" },
  { id: "desk", label: "Desks", icon: Box, target: "section-desk" },
  { id: "addons", label: "Accessories", icon: Sparkles, target: "section-addons" },
];

export function CatalogPanel({
  tab,
  onTabChange,
  selectedDesk,
  selectedChair,
  selectedAccessories,
  onSelectDesk,
  onSelectChair,
  onToggleAccessory,
}: CatalogPanelProps) {
  const selectTab = (next: CatalogTab, target: string) => {
    onTabChange(next);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(target)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="flex h-full min-h-0 flex-col rounded-[28px] bg-card p-5 shadow-[0_12px_40px_rgb(43_36_28/0.06)]">
      <header className="mb-4">
        <h1 className="text-heading text-2xl font-extrabold tracking-tight text-stone-900">
          Build Your Setup
        </h1>
        <p className="mt-1 text-sm text-muted">
          Choose what you need and see it come to life.
        </p>
      </header>

      <div
        role="tablist"
        aria-label="Product category"
        className="mb-5 flex rounded-full bg-[#f3eee7] p-1"
      >
        {TABS.map((item) => {
          const Icon = item.icon;
          const selected = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={item.target}
              id={`tab-${item.id}`}
              onClick={() => selectTab(item.id, item.target)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${selected
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-800"
                }`}
            >
              <Icon size={15} aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="custom-scrollbar min-h-0 flex-1 space-y-6 overflow-y-auto pr-1">
        <section id="section-chair" role="tabpanel" aria-labelledby="tab-chair" className="scroll-mt-24">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-stone-900">Chairs</h2>
            <span className="text-xs font-medium text-stone-400">Pick 1</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {CHAIRS.map((chair) => (
              <ProductCard
                key={chair.id}
                item={chair}
                variant="tile"
                selected={selectedChair === chair.id}
                onSelect={() => onSelectChair(chair.id)}
                actionLabel={`Select ${chair.name}`}
              />
            ))}
          </div>
        </section>

        <section id="section-desk" role="tabpanel" aria-labelledby="tab-desk" className="scroll-mt-24">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-stone-900">Desks</h2>
            <span className="text-xs font-medium text-stone-400">Pick 1</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {DESKS.map((desk) => (
              <ProductCard
                key={desk.id}
                item={desk}
                variant="tile"
                selected={selectedDesk === desk.id}
                onSelect={() => onSelectDesk(desk.id)}
                actionLabel={`Select ${desk.name}`}
              />
            ))}
          </div>
        </section>

        <section id="section-addons" role="tabpanel" aria-labelledby="tab-addons" className="scroll-mt-24">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold text-stone-900">Accessories & Screens</h2>
            <span className="text-xs font-medium text-stone-400">Toggle any</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {ACCESSORIES.map((acc) => (
              <ProductCard
                key={acc.id}
                item={acc}
                variant="compact"
                selected={selectedAccessories.includes(acc.id)}
                onSelect={() => onToggleAccessory(acc.id)}
                actionLabel={
                  selectedAccessories.includes(acc.id)
                    ? `Remove ${acc.name}`
                    : `Add ${acc.name}`
                }
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
