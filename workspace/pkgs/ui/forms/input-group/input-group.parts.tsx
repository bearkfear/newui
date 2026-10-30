import type { JSX } from "solid-js";
import { mergeProps, Show, splitProps } from "solid-js";
import { Loading } from "../../feedback/loading/loading";
import { useTextControl } from "../text-control.context";

export type InputGroupIconProps = JSX.HTMLAttributes<HTMLSpanElement> & {
  placement?: "start" | "end";
};
export type InputGroupAddonProps = InputGroupIconProps;
export type InputGroupActionProps = InputGroupIconProps;
export type InputGroupLoadingProps = Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children"> & {
  label?: string;
};

export function InputGroupIcon(props: InputGroupIconProps) {
  const [local, rest] = splitProps(mergeProps({ placement: "start" as const }, props), [
    "placement",
    "class",
  ]);
  return (
    <span
      {...rest}
      aria-hidden="true"
      data-placement={local.placement}
      class={partClass("nui-input-group-icon", local.class)}
    />
  );
}

export function InputGroupAddon(props: InputGroupAddonProps) {
  const [local, rest] = splitProps(mergeProps({ placement: "start" as const }, props), [
    "placement",
    "class",
  ]);
  return (
    <span
      {...rest}
      data-placement={local.placement}
      class={partClass("nui-input-group-addon", local.class)}
    />
  );
}

export function InputGroupAction(props: InputGroupActionProps) {
  const [local, rest] = splitProps(mergeProps({ placement: "end" as const }, props), [
    "placement",
    "class",
  ]);
  return (
    <span
      {...rest}
      data-placement={local.placement}
      class={partClass("nui-input-group-action", local.class)}
    />
  );
}

export function InputGroupLoading(props: InputGroupLoadingProps) {
  const [local, rest] = splitProps(props, ["label", "class"]);
  const control = useTextControl({});
  return (
    <Show when={control.loading()}>
      <span {...rest} data-placement="end" class={partClass("nui-input-group-icon", local.class)}>
        <Loading size="sm" tone="neutral" label={local.label ?? "Checking…"} />
      </span>
    </Show>
  );
}

function partClass(base: string, extra: string | undefined) {
  return [base, extra].filter(Boolean).join(" ");
}
