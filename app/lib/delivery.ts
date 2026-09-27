import { match } from "ts-pattern";
import type { DeliveryArea } from "../types/workspace";

export function getDeliveryAreaName(area: DeliveryArea): string {
  return match(area)
    .with("bali", () => "Bali")
    .with("canggu", () => "Canggu")
    .with("ubud", () => "Ubud")
    .with("seminyak", () => "Seminyak")
    .exhaustive();
}

export function getDeliveryAreaLabel(area: DeliveryArea): string {
  return match(area)
    .with("bali", () => "Bali (Island-wide)")
    .with("canggu", "ubud", "seminyak", getDeliveryAreaName)
    .exhaustive();
}

export function getDeliveryCopy(area: DeliveryArea): string {
  return `We’ll make sure it arrives on time in ${getDeliveryAreaName(area)}.`;
}