"use client";

import { Plus, Check } from "lucide-react";
import type { CatalogItem } from "../types/workspace";
import { formatUsd } from "../lib/format";
import { ItemVectorPreview } from "./ItemVectorPreview";

interface ProductCardProps {
  item: CatalogItem;
  selected: boolean;
  onSelect: () => void;
  variant: "tile" | "compact";
  actionLabel: string;
}

interface ProductActionButtonProps {
  selected: boolean;
  actionLabel: string;
  iconSize: number;
  onSelect: () => void;
}

function ProductActionButton({
  selected,
  actionLabel,
  iconSize,
  onSelect,
}: ProductActionButtonProps) {
  const buttonClassName = selected
    ? "bg-stone-900"
    : "bg-accent hover:bg-accent-hover";
  const Icon = selected ? Check : Plus;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={actionLabel}
      className={`absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm hover:brightness-95 ${buttonClassName}`}
    >
      <Icon size={iconSize} strokeWidth={3} aria-hidden="true" />
    </button>
  );
}

export function ProductCard({
  item,
  selected,
  onSelect,
  variant,
  actionLabel,
}: ProductCardProps) {
  const price = (
    <p className="tabular text-sm font-bold text-stone-900">
      {formatUsd(item.price)}
      <span className="font-medium text-stone-500"> / month</span>
    </p>
  );

  const preview = (
    <div role="img" aria-label={item.previewAlt} className="h-full w-full">
      <ItemVectorPreview id={item.id} />
    </div>
  );

  if (variant === "compact") {
    return (
      <article className="relative rounded-2xl bg-[#f7f3ee] p-3 pb-4 pr-3">
        <div className="relative mb-2 aspect-[4/3] overflow-hidden rounded-xl bg-white">
          {preview}
        </div>
        <h3 className="truncate pr-10 text-sm font-bold text-stone-900">{item.name}</h3>
        {price}
        <ProductActionButton
          selected={selected}
          actionLabel={actionLabel}
          iconSize={16}
          onSelect={onSelect}
        />
      </article>
    );
  }

  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#f7f3ee]">
      {item.badge ? (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold text-white">
          {item.badge}
        </span>
      ) : null}
      <div className="relative aspect-[5/4] overflow-hidden bg-white">{preview}</div>
      <div className="p-3 pr-14">
        <h3 className="truncate text-sm font-bold text-stone-900">{item.name}</h3>
        <p className="mb-1 line-clamp-1 text-xs text-stone-500">{item.description}</p>
        {price}
      </div>
      <ProductActionButton
        selected={selected}
        actionLabel={actionLabel}
        iconSize={18}
        onSelect={onSelect}
      />
    </article>
  );
}
