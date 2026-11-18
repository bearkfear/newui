import { ColorPicker as ArkColorPicker } from "@ark-ui/solid/color-picker";
import { ColorPickerContent } from "./color-picker.content";
import { ColorPickerSwatchTrigger, ColorPickerTrigger } from "./color-picker.parts";
import { ColorPickerRoot } from "./color-picker.root";

/** A color field with an Ark-powered visual editor. Values are Color objects created with parseColor. */
export const ColorPicker = {
  Root: ColorPickerRoot,
  Label: ArkColorPicker.Label,
  Control: ArkColorPicker.Control,
  Trigger: ColorPickerTrigger,
  Content: ColorPickerContent,
  SwatchGroup: ArkColorPicker.SwatchGroup,
  SwatchTrigger: ColorPickerSwatchTrigger,
  Context: ArkColorPicker.Context,
};
export type { ColorPickerContentProps } from "./color-picker.content";
export type { ColorPickerRootProps } from "./color-picker.root";
