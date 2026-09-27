"use client";

import { ArrowRight, CalendarDays, ShieldCheck, X } from "lucide-react";
import type { Accessory, Chair, Desk, DeliveryArea, LifestyleItem } from "../types/workspace";
import { formatUsd } from "../lib/format";
import { getDeliveryCopy } from "../lib/delivery";
import { ItemVectorPreview } from "./ItemVectorPreview";
import { match } from "ts-pattern";

interface LineItem {
  id: string;
  name: string;
  price: number;
  emoji?: string;
  removable: boolean;
  type: "chair" | "desk" | "accessory" | "gear";
}

function LineItemThumbnail({ item }: { item: LineItem }) {
  return match(item.type)
    .with("gear", () => (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#faf6f0] text-xl shadow-xs">
        {item.emoji}
      </div>
    ))
    .with("chair", "desk", "accessory", () => (
      <div
        role="img"
        aria-label={item.name}
        className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-[#f7f3ee]"
      >
        <ItemVectorPreview id={item.id} />
      </div>
    ))
    .exhaustive();
}

interface OrderSummaryProps {
  currentDesk: Desk | null;
  currentChair: Chair | null;
  accessories: Accessory[];
  lifestyleItems: LifestyleItem[];
  totalMonthlyPrice: number;
  needBy: string;
  onNeedByChange: (value: string) => void;
  minDate: string;
  deliveryArea: DeliveryArea;
  onRemoveAccessory: (id: string) => void;
  onRemoveLifestyle: (id: string) => void;
  onRemoveDesk: () => void;
  onRemoveChair: () => void;
  onOpenRentModal: () => void;
}

export function OrderSummary({
  currentDesk,
  currentChair,
  accessories,
  lifestyleItems,
  totalMonthlyPrice,
  needBy,
  onNeedByChange,
  minDate,
  deliveryArea,
  onRemoveAccessory,
  onRemoveLifestyle,
  onRemoveDesk,
  onRemoveChair,
  onOpenRentModal,
}: OrderSummaryProps) {
  const removeItem = (item: LineItem) =>
    match(item.type)
      .with("gear", () => onRemoveLifestyle(item.id))
      .with("chair", () => onRemoveChair())
      .with("desk", () => onRemoveDesk())
      .with("accessory", () => onRemoveAccessory(item.id))
      .exhaustive();

  const items: LineItem[] = [
    ...(currentChair ? [{
      id: currentChair.id,
      name: currentChair.name,
      price: currentChair.price,
      removable: true,
      type: "chair" as const,
    }] : []),
    ...(currentDesk ? [{
      id: currentDesk.id,
      name: currentDesk.name,
      price: currentDesk.price,
      removable: true,
      type: "desk" as const,
    }] : []),
    ...accessories.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      removable: true,
      type: "accessory" as const,
    })),
    ...lifestyleItems.map((gear) => ({
      id: gear.id,
      name: gear.label,
      price: gear.price,
      emoji: gear.emoji,
      removable: true,
      type: "gear" as const,
    })),
  ];

  return (
    <aside className="flex h-full min-h-0 flex-col rounded-[28px] bg-card p-5 shadow-[0_12px_40px_rgb(43_36_28/0.06)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-stone-500">1 of 3</p>
        <div className="flex flex-1 justify-end gap-1" aria-hidden="true">
          <span className="h-1.5 w-8 rounded-full bg-accent" />
          <span className="h-1.5 w-8 rounded-full bg-stone-200" />
          <span className="h-1.5 w-8 rounded-full bg-stone-200" />
        </div>
      </div>

      <h2 className="text-heading text-xl font-extrabold text-stone-900">Your Setup</h2>
      <p className="mb-3 text-sm text-muted">Looks great! Here’s your selection.</p>

      <ul className="custom-scrollbar min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1">
        {items.length === 0 ? (
          <li className="py-8 text-center text-sm text-muted">No items selected</li>
        ) : items.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-3 rounded-2xl p-1.5 transition-colors hover:bg-stone-50"
          >
            <LineItemThumbnail item={item} />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-stone-900">{item.name}</p>
              <p className="tabular text-xs text-stone-500">
                {formatUsd(item.price)} / month
              </p>
            </div>

            {item.removable ? (
              <button
                type="button"
                onClick={() => removeItem(item)}
                aria-label={`Remove ${item.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-stone-400 hover:bg-stone-200/80 hover:text-stone-700 transition-colors"
              >
                <X size={15} aria-hidden="true" />
              </button>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-stone-100 pt-3">
        <div className="mb-3 flex items-end justify-between gap-3">
          <p className="text-base font-bold text-stone-900">Total</p>
          <p className="text-right">
            <span className="tabular text-2xl font-black tracking-tight text-stone-900">
              {formatUsd(totalMonthlyPrice)}
            </span>
            <span className="text-xs font-medium text-stone-500"> / month</span>
          </p>
        </div>

        <label className="mb-2.5 flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-3 py-2">
          <CalendarDays size={15} className="shrink-0 text-stone-500" aria-hidden="true" />
          <span className="shrink-0 text-xs text-stone-600">Need it by</span>
          <input
            type="date"
            name="need-by"
            autoComplete="off"
            min={minDate}
            value={needBy}
            onChange={(event) => onNeedByChange(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-right text-xs font-semibold text-stone-900"
          />
        </label>
        <p className="mb-3 text-[11px] text-muted">{getDeliveryCopy(deliveryArea)}</p>

        <button
          type="button"
          onClick={onOpenRentModal}
          disabled={items.length === 0}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgb(242_107_58/0.35)] transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        >
          Rent This Setup
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted">
          <ShieldCheck size={13} aria-hidden="true" />
          Free changes · No long-term commitment
        </p>
      </div>
    </aside>
  );
}
