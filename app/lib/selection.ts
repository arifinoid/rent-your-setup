import { match } from "ts-pattern";

export function toggleSelection(
  selectedIds: string[],
  id: string,
  isExclusive: (candidateId: string) => boolean = () => false,
): string[] {
  return match({
    isSelected: selectedIds.includes(id),
    isExclusive: isExclusive(id),
  })
    .with({ isSelected: true }, () => selectedIds.filter((selectedId) => selectedId !== id))
    .with({ isSelected: false, isExclusive: true }, () => [
      ...selectedIds.filter((selectedId) => !isExclusive(selectedId)),
      id,
    ])
    .otherwise(() => [...selectedIds, id]);
}