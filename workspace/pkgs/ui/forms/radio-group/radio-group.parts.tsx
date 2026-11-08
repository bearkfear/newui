import { RadioGroup as ArkRadioGroup, useRadioGroupItemContext } from "@ark-ui/solid/radio-group";
import { createContext, splitProps, useContext } from "solid-js";

export const RadioFormContext = createContext<{
  register: (input: HTMLInputElement) => void;
  describedBy: (external: string | undefined) => string | undefined;
}>();
export type RadioGroupItemProps = ArkRadioGroup.ItemProps;
export type RadioGroupItemControlProps = ArkRadioGroup.ItemControlProps;
export type RadioGroupItemTextProps = ArkRadioGroup.ItemTextProps;
export type RadioGroupLabelProps = ArkRadioGroup.LabelProps;

export function RadioGroupItem(props: RadioGroupItemProps) {
  const [local, rest] = splitProps(props, ["class", "children", "aria-describedby"]);
  const form = useContext(RadioFormContext);
  return (
    <ArkRadioGroup.Item
      {...rest}
      class={["nui-choice-item", local.class].filter(Boolean).join(" ")}
    >
      {local.children}
      <RadioInput describedBy={form?.describedBy(local["aria-describedby"])} />
    </ArkRadioGroup.Item>
  );
}

function RadioInput(props: { describedBy: string | undefined }) {
  const item = useRadioGroupItemContext();
  const form = useContext(RadioFormContext);
  return (
    <ArkRadioGroup.ItemHiddenInput
      disabled={item().disabled}
      aria-describedby={props.describedBy}
      ref={form?.register}
    />
  );
}

export function RadioGroupItemControl(props: RadioGroupItemControlProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkRadioGroup.ItemControl
      {...rest}
      class={["nui-choice-control nui-radio-control nui-focus-ring", local.class]
        .filter(Boolean)
        .join(" ")}
    >
      {local.children ?? <span class="nui-radio-dot" />}
    </ArkRadioGroup.ItemControl>
  );
}

export function RadioGroupItemText(props: RadioGroupItemTextProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkRadioGroup.ItemText
      {...rest}
      class={["nui-choice-label", local.class].filter(Boolean).join(" ")}
    />
  );
}

export function RadioGroupLabel(props: RadioGroupLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkRadioGroup.Label
      {...rest}
      class={["nui-choice-group-label", local.class].filter(Boolean).join(" ")}
    />
  );
}
