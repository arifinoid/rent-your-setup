import type { Accessory, Chair, Desk, DeliveryArea, LifestyleZone } from "../types/workspace";

export const CHAIRS: Chair[] = [
  {
    id: "chair-sundown",
    name: "Sundown Task Chair",
    price: 39,
    description: "Breathable ergonomic mesh, all-day comfort.",
    previewAlt: "Black mesh ergonomic task chair",
    badge: "Popular",
  },
  {
    id: "chair-rattan",
    name: "Rattan Lounge Chair",
    price: 49,
    description: "Handcrafted Bali rattan with linen cushion.",
    previewAlt: "Rattan lounge chair with a cream cushion",
  },
  {
    id: "chair-ergopro",
    name: "ErgoPro High-Back",
    price: 55,
    description: "Executive lumbar support with 3D armrests.",
    previewAlt: "Executive ergonomic desk chair with headrest",
  },
];

export const DESKS: Desk[] = [
  {
    id: "desk-lima",
    name: "Lima Desk",
    price: 49,
    description: "Clean modern oak top with matte steel legs.",
    previewAlt: "Light wood desk with black steel legs",
    badge: "Popular",
  },
  {
    id: "desk-ubud",
    name: "Ubud Standing Desk",
    price: 69,
    description: "Dual-motor motorized sit-stand bamboo desk.",
    previewAlt: "Electric standing desk with a pale wood top",
  },
  {
    id: "desk-canggu",
    name: "Canggu Studio Desk",
    price: 79,
    description: "Solid teak wood with dual storage drawer units.",
    previewAlt: "Teak desk with built-in drawers",
  },
];

export const ACCESSORIES: Accessory[] = [
  {
    id: "acc-monitor-triple",
    name: "Triple Nomad Setup",
    price: 39,
    description: "3 panoramic screens for ultimate productivity.",
    previewAlt: "Three panoramic computer monitors",
    badge: "Sketch Pick",
  },
  {
    id: "acc-monitor-dual",
    name: "Dual 27\" Monitors",
    price: 29,
    description: "Two 4K displays on heavy-duty monitor arms.",
    previewAlt: "Two 27-inch monitors on a desk",
  },
  {
    id: "acc-monitor-single",
    name: "34\" Curved Ultrawide",
    price: 22,
    description: "Crystal-clear immersive curved screen.",
    previewAlt: "Curved ultrawide monitor on a stand",
  },
  {
    id: "acc-lamp",
    name: "Architect Desk Lamp",
    price: 9,
    description: "Matte black angled lamp with warm ambient LED.",
    previewAlt: "Minimalist black desk lamp",
  },
  {
    id: "acc-plant",
    name: "Bali Potted Greenery",
    price: 7,
    description: "Lush tropical Monstera in handcrafted ceramic pot.",
    previewAlt: "Monstera plant in a white pot",
  },
  {
    id: "acc-keyboard",
    name: "Mechanical Keyboard & Mat",
    price: 12,
    description: "Tactile switches, wireless mouse, and felt desk mat.",
    previewAlt: "Mechanical keyboard and desk mat",
  },
];

export const DEFAULT_ACCESSORY_IDS = ["acc-monitor-triple", "acc-lamp", "acc-plant", "acc-keyboard"];

export const LIFESTYLE_ZONES: LifestyleZone[] = [
  {
    id: "zone-coffee",
    title: "Coffee Station",
    category: "coffee",
    items: [
      {
        id: "z-coffee-machine",
        label: "Coffee Machine",
        price: 25,
        emoji: "☕",
        category: "coffee",
        description: "Breville espresso machine for morning rocket fuel.",
      },
      {
        id: "z-grinder",
        label: "Bean Grinder",
        price: 12,
        emoji: "⚙️",
        category: "coffee",
        description: "Precision conical burr grinder for fresh Bali roast.",
      },
    ],
  },
  {
    id: "zone-outdoor",
    title: "Outdoor Gear",
    category: "outdoor",
    items: [
      {
        id: "z-surfboard",
        label: "Surfboard",
        price: 29,
        emoji: "🏄",
        category: "outdoor",
        description: "7'0 Canggu funboard ready for sunset surf sessions.",
      },
      {
        id: "z-motorcycle",
        label: "Motorcycle",
        price: 65,
        emoji: "🛵",
        category: "outdoor",
        description: "Honda Scoopy 125cc scooter with dual surf rack.",
      },
    ],
  },
  {
    id: "zone-relax",
    title: "Relax Zone",
    category: "relax",
    items: [
      {
        id: "z-beanbag",
        label: "Bean Bag",
        price: 14,
        emoji: "🛋️",
        category: "relax",
        description: "Waterproof sun-lounger bean bag for reading & chill.",
      },
      {
        id: "z-hammock",
        label: "Hammock",
        price: 10,
        emoji: "🌴",
        category: "relax",
        description: "Handwoven Balinese macrame cotton hammock.",
      },
    ],
  },
  {
    id: "zone-garage",
    title: "Garage Space",
    category: "garage",
    items: [
      {
        id: "z-toolshelf",
        label: "Tool Shelf",
        price: 18,
        emoji: "🔧",
        category: "garage",
        description: "Heavy-duty 4-tier steel rack for gear and equipment.",
      },
      {
        id: "z-storage",
        label: "Storage Box",
        price: 9,
        emoji: "📦",
        category: "garage",
        description: "Lockable weather-resistant 100L nomad storage trunk.",
      },
    ],
  },
];

export const DELIVERY_AREAS: { id: DeliveryArea; label: string }[] = [
  { id: "bali", label: "Bali delivery" },
  { id: "canggu", label: "Canggu delivery" },
  { id: "ubud", label: "Ubud delivery" },
  { id: "seminyak", label: "Seminyak delivery" },
];

export const HERO_IMAGES = {
  temple: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
} as const;
