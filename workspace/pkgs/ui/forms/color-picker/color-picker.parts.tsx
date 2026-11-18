import { ColorPicker as ArkColorPicker, useColorPickerContext } from "@ark-ui/solid/color-picker";
import { Check, ChevronDown } from "lucide-solid";
import { splitProps } from "solid-js";
import { textControlRecipe } from "../text-control.recipe";
import { useColorPickerVisual } from "./color-picker.root";

export function ColorPickerTrigger(props: ArkColorPicker.TriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children", "aria-describedby"]);
  const control = useColorPickerVisual();
  const picker = useColorPickerContext();
  return (
    <ArkColorPicker.Trigger
      {...rest}
      aria-describedby={control.describedBy(local["aria-describedby"])}
      aria-busy={control.loading() || undefined}
      data-valid={control.valid() ? "" : undefined}
      class={textControlRecipe({
        size: control.size(),
        tone: control.tone(),
        rounded: control.rounded(),
        class: ["nui-color-picker-trigger", local.class].filter(Boolean).join(" "),
      })}
    >
      {local.children ?? (
        <>
          <ArkColorPicker.ValueSwatch class="nui-color-picker-value-swatch">
            <ArkColorPicker.TransparencyGrid />
          </ArkColorPicker.ValueSwatch>
          <ArkColorPicker.ValueText format={picker().alpha < 1 ? "hexa" : "hex"} />
          <ChevronDown size={16} aria-hidden="true" />
        </>
      )}
    </ArkColorPicker.Trigger>
  );
}

export function ColorPickerSwatchTrigger(props: ArkColorPicker.SwatchTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkColorPicker.SwatchTrigger
      {...rest}
      class={["nui-color-picker-swatch-trigger nui-focus-ring", local.class]
        .filter(Boolean)
        .join(" ")}
    >
      <ArkColorPicker.Swatch value={props.value} class="nui-color-picker-swatch">
        <ArkColorPicker.TransparencyGrid />
        <ArkColorPicker.SwatchIndicator class="nui-color-picker-swatch-indicator">
          {local.children ?? <Check size={14} aria-hidden="true" />}
        </ArkColorPicker.SwatchIndicator>
      </ArkColorPicker.Swatch>
    </ArkColorPicker.SwatchTrigger>
  );
}
