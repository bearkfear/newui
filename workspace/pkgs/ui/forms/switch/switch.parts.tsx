import { Switch as ArkSwitch } from "@ark-ui/solid/switch";
import { splitProps } from "solid-js";

export type SwitchControlProps = ArkSwitch.ControlProps;
export type SwitchLabelProps = ArkSwitch.LabelProps;
export type SwitchThumbProps = ArkSwitch.ThumbProps;

export function SwitchControl(props: SwitchControlProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkSwitch.Control
      {...rest}
      class={["nui-switch-control nui-focus-ring", local.class].filter(Boolean).join(" ")}
    >
      {local.children ?? <SwitchThumb />}
    </ArkSwitch.Control>
  );
}

export function SwitchThumb(props: SwitchThumbProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkSwitch.Thumb
      {...rest}
      class={["nui-switch-thumb", local.class].filter(Boolean).join(" ")}
    />
  );
}

export function SwitchLabel(props: SwitchLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkSwitch.Label
      {...rest}
      class={["nui-switch-label", local.class].filter(Boolean).join(" ")}
    />
  );
}
