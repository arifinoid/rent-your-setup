export type CatalogItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  previewAlt: string;
  badge?: string;
};

export type Desk = CatalogItem;
export type Chair = CatalogItem;
export type Accessory = CatalogItem;

export type CatalogTab = "chair" | "desk" | "addons";
export type DeliveryArea = "bali" | "canggu" | "ubud" | "seminyak";

export interface LifestyleItem {
  id: string;
  label: string;
  price: number;
  emoji: string;
  category: "coffee" | "outdoor" | "relax" | "garage";
  description: string;
}

export interface LifestyleZone {
  id: string;
  title: string;
  category: "coffee" | "outdoor" | "relax" | "garage";
  items: LifestyleItem[];
}
