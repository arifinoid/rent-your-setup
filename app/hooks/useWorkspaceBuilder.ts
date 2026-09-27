import { useEffect, useState } from "react";
import { match } from "ts-pattern";
import {
  ACCESSORIES,
  CHAIRS,
  DEFAULT_ACCESSORY_IDS,
  DESKS,
  LIFESTYLE_ZONES,
} from "../data/products";
import type { CatalogTab, DeliveryArea, LifestyleItem } from "../types/workspace";
import { toggleSelection } from "../lib/selection";

const MIN_DATE = "2026-09-27";
const DEFAULT_NEED_BY = "2026-10-06";
const ALL_LIFESTYLE_ITEMS: LifestyleItem[] = LIFESTYLE_ZONES.flatMap((zone) => zone.items);

function parseCatalogTab(value: string | null): CatalogTab | null {
  return match(value)
    .with("chair", "desk", "addons", (tab) => tab)
    .otherwise(() => null);
}

export function useWorkspaceBuilder() {
  const [selectedChair, setSelectedChair] = useState<string | null>(CHAIRS[0].id);
  const [selectedDesk, setSelectedDesk] = useState<string | null>(DESKS[0].id);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>(() => [
    ...DEFAULT_ACCESSORY_IDS,
  ]);
  const [selectedLifestyle, setSelectedLifestyle] = useState<string[]>([]);
  const [tab, setTab] = useState<CatalogTab>("chair");
  const [deliveryArea, setDeliveryArea] = useState<DeliveryArea>("bali");
  const [needBy, setNeedBy] = useState(DEFAULT_NEED_BY);
  const [isRentModalOpen, setIsRentModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextTab = parseCatalogTab(params.get("tab"));
    if (nextTab) setTab(nextTab);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", tab);
    const query = params.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
  }, [tab]);

  const currentDesk = DESKS.find((desk) => desk.id === selectedDesk) ?? null;
  const currentChair = CHAIRS.find((chair) => chair.id === selectedChair) ?? null;
  const currentAccessories = ACCESSORIES.filter((item) =>
    selectedAccessories.includes(item.id),
  );
  const activeLifestyleItems = ALL_LIFESTYLE_ITEMS.filter((item) =>
    selectedLifestyle.includes(item.id),
  );

  const totalMonthlyPrice =
    (currentDesk?.price ?? 0) +
    (currentChair?.price ?? 0) +
    currentAccessories.reduce((total, item) => total + item.price, 0) +
    activeLifestyleItems.reduce((total, item) => total + item.price, 0);

  const toggleAccessory = (id: string) => {
    setSelectedAccessories((previous) =>
      toggleSelection(previous, id, (candidateId) => candidateId.startsWith("acc-monitor")),
    );
  };

  const toggleLifestyle = (id: string) => {
    setSelectedLifestyle((previous) =>
      toggleSelection(previous, id),
    );
  };

  return {
    activeLifestyleItems,
    closeRentModal: () => setIsRentModalOpen(false),
    currentAccessories,
    currentChair,
    currentDesk,
    deliveryArea,
    isRentModalOpen,
    minDate: MIN_DATE,
    needBy,
    openRentModal: () => setIsRentModalOpen(true),
    selectedAccessories,
    selectedChair,
    selectedDesk,
    selectedLifestyle,
    setDeliveryArea,
    setNeedBy,
    setSelectedChair,
    setSelectedDesk,
    setTab,
    tab,
    toggleAccessory,
    toggleLifestyle,
    totalMonthlyPrice,
  };
}