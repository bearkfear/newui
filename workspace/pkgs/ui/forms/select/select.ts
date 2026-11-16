import { Select as ArkSelect } from "@ark-ui/solid/select";
import { SelectContent, SelectGroupLabel, SelectItem, SelectItemIndicator } from "./select.content";
import { SelectRoot } from "./select.root";
import { SelectClearTrigger, SelectIndicator, SelectTrigger } from "./select.trigger";

/**
 * A collection picker with keyboard navigation, typeahead, and composable trigger/list/item parts.
 * Values and defaults are string arrays; `onValueChange` receives selected values and items.
 * Use `createListCollection` to map object labels/values and `multiple` for multi-selection.
 * Root includes a native hidden select for form participation; `ValueText` renders selected labels.
 *
 * @example
 * ```tsx
 * import { createListCollection, Select } from "@egcs/newui/forms";
 *
 * const options = createListCollection({ items: ["One", "Two"] });
 * <Select.Root collection={options}>
 *   <Select.Control><Select.Trigger><Select.ValueText /></Select.Trigger></Select.Control>
 *   <Select.Content><Select.Item item="One"><Select.ItemText>One</Select.ItemText></Select.Item></Select.Content>
 * </Select.Root>
 * ```
 */
export const Select = {
  Root: SelectRoot,
  Label: ArkSelect.Label,
  Control: ArkSelect.Control,
  Trigger: SelectTrigger,
  ValueText: ArkSelect.ValueText,
  Indicator: SelectIndicator,
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Item: SelectItem,
  ItemText: ArkSelect.ItemText,
  ItemIndicator: SelectItemIndicator,
  Group: ArkSelect.ItemGroup,
  GroupLabel: SelectGroupLabel,
  Context: ArkSelect.Context,
};
