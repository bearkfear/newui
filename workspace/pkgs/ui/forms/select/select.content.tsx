import { Select as ArkSelect } from "@ark-ui/solid/select";
import { Check } from "lucide-solid";
import { Show, splitProps } from "solid-js";
import { OverlayPortal } from "../../overlays/overlay.portal";

export type SelectContentProps = ArkSelect.ContentProps & { mount?: HTMLElement };

export function SelectContent(props: SelectContentProps) {
  const [local, rest] = splitProps(props, ["mount", "class", "children"]);
  return (
    <OverlayPortal {...(local.mount ? { mount: local.mount } : {})}>
      <ArkSelect.Positioner class="nui-select-positioner">
        <ArkSelect.Content {...rest} class={partClass("nui-select-content", local.class)}>
          {local.children}
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </OverlayPortal>
  );
}

export function SelectItem(props: ArkSelect.ItemProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSelect.Item {...rest} class={partClass("nui-select-item", local.class)} />;
}

export function SelectItemIndicator(props: ArkSelect.ItemIndicatorProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkSelect.ItemIndicator {...rest} class={partClass("nui-select-item-indicator", local.class)}>
      <Show when={local.children} fallback={<Check size={16} aria-hidden="true" />}>
        {local.children}
      </Show>
    </ArkSelect.ItemIndicator>
  );
}

export function SelectGroupLabel(props: ArkSelect.ItemGroupLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkSelect.ItemGroupLabel {...rest} class={partClass("nui-select-group-label", local.class)} />
  );
}

function partClass(base: string, extra: string | undefined) {
  return [base, extra].filter(Boolean).join(" ");
}
