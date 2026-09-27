"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { DELIVERY_AREAS, HERO_IMAGES } from "../data/products";
import type { DeliveryArea } from "../types/workspace";

interface SiteHeaderProps {
  deliveryArea: DeliveryArea;
  onDeliveryAreaChange: (area: DeliveryArea) => void;
}

export function SiteHeader({ deliveryArea, onDeliveryAreaChange }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f4efe8]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] min-w-0 items-center gap-3 px-4 py-3 lg:px-6">
        <a href="#main" className="flex shrink-0 items-center gap-2.5">
          <span className="text-2xl leading-none" aria-hidden="true">
            🌴
          </span>
          <span className="leading-tight" translate="no">
            <span className="block text-xl font-extrabold tracking-tight text-stone-900">
              Monis.rent
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Work better anywhere
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-4 flex items-center gap-4 sm:ml-6 sm:gap-6">
          <a
            href="#main"
            className="hidden border-b-2 border-accent pb-0.5 text-sm font-semibold text-accent sm:inline"
          >
            Build Your Workspace
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-stone-600 hover:text-stone-900"
          >
            How It Works
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <label className="relative flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 shadow-sm">
            <MapPin size={16} className="text-accent" aria-hidden="true" />
            <span className="sr-only">Delivery area</span>
            <select
              name="delivery-area"
              autoComplete="address-level2"
              value={deliveryArea}
              onChange={(event) =>
                onDeliveryAreaChange(event.target.value as DeliveryArea)
              }
              className="max-w-[10.5rem] cursor-pointer appearance-none bg-transparent pr-5 text-sm font-medium text-stone-800"
            >
              {DELIVERY_AREAS.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 text-stone-400" aria-hidden="true">
              ▾
            </span>
          </label>

          <div className="relative hidden h-12 w-36 overflow-hidden rounded-2xl shadow-sm lg:block">
            <Image
              src={HERO_IMAGES.temple}
              alt="Balinese temple at dusk"
              width={144}
              height={48}
              className="h-12 w-36 object-cover"
              priority
            />
            <p className="absolute inset-0 flex flex-col items-end justify-center bg-gradient-to-l from-black/45 to-transparent pr-3 text-right text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-white">
              <span>Great Spaces</span>
              <span>Greater Days</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

