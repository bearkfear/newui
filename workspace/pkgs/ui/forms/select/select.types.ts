import type { CollectionItem, Select } from "@ark-ui/solid/select";
import type { TextControlOptions } from "../text-control.context";

/**
 * Select.Root accepts string or object items through `collection`; controlled and default values
 * are string arrays even for single selection. Values must uniquely identify collection items.
 */
export type SelectRootProps<T extends CollectionItem> = Select.RootProps<T> & TextControlOptions;
