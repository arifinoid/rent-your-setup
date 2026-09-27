"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Truck, ShieldCheck, Calendar, Sparkles, MessageCircle } from "lucide-react";
import type { Accessory, Chair, Desk, DeliveryArea, LifestyleItem } from "../types/workspace";
import { formatUsd } from "../lib/format";
import { getDeliveryAreaLabel } from "../lib/delivery";

interface RentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentDesk: Desk | null;
  currentChair: Chair | null;
  accessories: Accessory[];
  lifestyleItems: LifestyleItem[];
  totalMonthlyPrice: number;
  needBy: string;
  deliveryArea: DeliveryArea;
}

export function RentModal({
  isOpen,
  onClose,
  currentDesk,
  currentChair,
  accessories,
  lifestyleItems,
  totalMonthlyPrice,
  needBy,
  deliveryArea,
}: RentModalProps) {
  if (!isOpen) return null;

  const areaName = getDeliveryAreaLabel(deliveryArea);
  const setupDescription = [currentDesk?.name, currentChair?.name]
    .filter(Boolean)
    .join(", ");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 transition-colors"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-stone-900">Your Bali Workspace</h2>
              <p className="text-sm text-stone-500">Ready to deliver to {areaName}</p>
            </div>
          </div>

          <div className="mb-6 rounded-2xl bg-[#faf6f0] p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Included in your rental
            </h3>
            <ul className="space-y-2 text-sm text-stone-800">
              {currentChair ? (
                <li className="flex items-center justify-between font-semibold">
                  <span>🪑 {currentChair.name}</span>
                  <span className="text-stone-600">{formatUsd(currentChair.price)}/mo</span>
                </li>
              ) : null}
              {currentDesk ? (
                <li className="flex items-center justify-between font-semibold">
                  <span>🪵 {currentDesk.name}</span>
                  <span className="text-stone-600">{formatUsd(currentDesk.price)}/mo</span>
                </li>
              ) : null}
              {accessories.map((acc) => (
                <li key={acc.id} className="flex items-center justify-between text-stone-700">
                  <span>✨ {acc.name}</span>
                  <span className="text-stone-500">{formatUsd(acc.price)}/mo</span>
                </li>
              ))}
              {lifestyleItems.map((gear) => (
                <li key={gear.id} className="flex items-center justify-between text-stone-700">
                  <span>{gear.emoji} {gear.label}</span>
                  <span className="text-stone-500">{formatUsd(gear.price)}/mo</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-stone-200/80 pt-3 flex items-baseline justify-between">
              <span className="font-bold text-stone-900">Total Monthly Rental</span>
              <span className="text-2xl font-black text-stone-900">
                {formatUsd(totalMonthlyPrice)}
                <span className="text-xs font-normal text-stone-500"> / month</span>
              </span>
            </div>
          </div>

          <div className="mb-6 space-y-2.5 rounded-2xl border border-stone-100 bg-white p-3.5 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-accent shrink-0" />
              <span>Target delivery date: <strong>{needBy}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={15} className="text-stone-500 shrink-0" />
              <span>White-glove delivery, room placement & assembly included in {areaName}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
              <span>Zero deposit required for verified nomads · Swap items anytime</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Hi Monis Bali! I'd like to rent my workspace setup: ${setupDescription || "accessories only"}. Delivery to ${areaName} by ${needBy}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle size={18} />
              Book via WhatsApp (Fastest)
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 text-sm font-semibold text-stone-500 hover:text-stone-800 transition-colors"
            >
              Continue customizing setup
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
