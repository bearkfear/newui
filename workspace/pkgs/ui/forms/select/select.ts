import { Select as ArkSelect } from "@ark-ui/solid/select";
import { SelectContent, SelectGroupLabel, SelectItem, SelectItemIndicator } from "./select.content";
import { SelectRoot } from "./select.root";
import { SelectClearTrigger, SelectIndicator, SelectTrigger } from "./select.trigger";

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
