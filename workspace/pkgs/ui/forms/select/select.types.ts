import type { CollectionItem, Select } from "@ark-ui/solid/select";
import type { TextControlOptions } from "../text-control.context";

export type SelectRootProps<T extends CollectionItem> = Select.RootProps<T> & TextControlOptions;
