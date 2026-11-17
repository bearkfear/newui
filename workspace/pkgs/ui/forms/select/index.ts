import type { CollectionItem } from "@ark-ui/solid/select";
import { createListCollection as createArkListCollection } from "@ark-ui/solid/select";

export type {
  CollectionItem,
  ListCollection,
  SelectValueChangeDetails,
} from "@ark-ui/solid/select";

/**
 * Creates the option collection used by Select and other collection-based controls.
 *
 * Pass strings for simple options or objects with `itemToValue` and `itemToString` mappings.
 * Values should uniquely identify options. Use `isItemDisabled` to disable individual options.
 *
 * @example
 * ```tsx
 * import { createListCollection, Select } from "@egcs/newui/forms";
 *
 * const options = createListCollection({
 *   items: [
 *     { label: "Brazil", value: "br" },
 *     { label: "Chile", value: "cl" },
 *   ],
 * });
 *
 * <Select.Root collection={options} />;
 * ```
 */
export function createListCollection<T extends CollectionItem>(
  options: Parameters<typeof createArkListCollection<T>>[0],
): ReturnType<typeof createArkListCollection<T>> {
  return createArkListCollection(options);
}

export { Select } from "./select";
export type { SelectContentProps } from "./select.content";
export type { SelectRootProps } from "./select.root";
export type { SelectTriggerProps } from "./select.trigger";
