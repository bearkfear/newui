import { ColorPicker as ArkColorPicker } from "@ark-ui/solid/color-picker";
import { Show, splitProps } from "solid-js";
import { OverlayPortal } from "../../overlays/overlay.portal";
import { InputGroup } from "../input-group/input-group";
import { textControlRecipe } from "../text-control.recipe";

export type ColorPickerContentProps = ArkColorPicker.ContentProps & {
  mount?: HTMLElement;
  alpha?: boolean;
  hexLabel?: string;
  hueLabel?: string;
  alphaLabel?: string;
};

export function ColorPickerContent(props: ColorPickerContentProps) {
  const [local, rest] = splitProps(props, [
    "mount",
    "alpha",
    "hexLabel",
    "hueLabel",
    "alphaLabel",
    "class",
    "children",
  ]);
  return (
    <OverlayPortal {...(local.mount ? { mount: local.mount } : {})}>
      <ArkColorPicker.Positioner class="nui-color-picker-positioner">
        <ArkColorPicker.Content
          {...rest}
          class={["nui-color-picker-content", local.class].filter(Boolean).join(" ")}
        >
          <ArkColorPicker.Area
            class="nui-color-picker-area"
            xChannel="saturation"
            yChannel="brightness"
          >
            <ArkColorPicker.AreaBackground class="nui-color-picker-area-background" />
            <ArkColorPicker.AreaThumb class="nui-color-picker-thumb" />
          </ArkColorPicker.Area>
          <ColorSlider channel="hue" label={local.hueLabel ?? "Hue"} />
          <Show when={local.alpha}>
            <ColorSlider channel="alpha" label={local.alphaLabel ?? "Opacity"} />
          </Show>
          <InputGroup.Root size="sm">
            <InputGroup.Addon aria-hidden="true">{local.hexLabel ?? "Hex"}</InputGroup.Addon>
            <ArkColorPicker.ChannelInput
              aria-label={local.hexLabel ?? "Hex"}
              channel="hex"
              class={textControlRecipe({ size: "sm", class: "nui-color-picker-input" })}
            />
          </InputGroup.Root>
          {local.children}
        </ArkColorPicker.Content>
      </ArkColorPicker.Positioner>
    </OverlayPortal>
  );
}

function ColorSlider(props: { channel: "hue" | "alpha"; label: string }) {
  return (
    <ArkColorPicker.ChannelSlider channel={props.channel} class="nui-color-picker-slider">
      <Show when={props.channel === "alpha"}>
        <div class="nui-color-picker-slider-grid">
          <ArkColorPicker.TransparencyGrid />
        </div>
      </Show>
      <ArkColorPicker.ChannelSliderTrack class="nui-color-picker-slider-track" />
      <ArkColorPicker.ChannelSliderThumb
        aria-label={props.label}
        class="nui-color-picker-slider-thumb"
      />
    </ArkColorPicker.ChannelSlider>
  );
}
