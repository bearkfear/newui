import { Checkbox as ArkCheckbox, useCheckboxContext } from "@ark-ui/solid/checkbox";
import { CheckIcon, MinusIcon } from "lucide-solid";
import { createEffect, splitProps } from "solid-js";

export type CheckboxControlProps = ArkCheckbox.ControlProps;
export type CheckboxLabelProps = ArkCheckbox.LabelProps;

export function CheckboxInput(props: {
  describedBy: string | undefined;
  register: (input: HTMLInputElement) => void;
}) {
  const checkbox = useCheckboxContext();
  let input: HTMLInputElement | undefined;
  // Ark synchronizes indeterminate on changes; also expose the initial native state.
  createEffect(() => {
    if (input) input.indeterminate = checkbox().indeterminate;
  });
  return (
    <ArkCheckbox.HiddenInput
      aria-describedby={props.describedBy}
      ref={(element) => {
        input = element;
        props.register(element);
      }}
    />
  );
}

export function CheckboxControl(props: CheckboxControlProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkCheckbox.Control
      {...rest}
      class={["nui-choice-control nui-focus-ring", local.class].filter(Boolean).join(" ")}
    >
      {local.children ?? (
        <>
          <ArkCheckbox.Indicator>
            <CheckIcon aria-hidden="true" />
          </ArkCheckbox.Indicator>
          <ArkCheckbox.Indicator indeterminate>
            <MinusIcon aria-hidden="true" />
          </ArkCheckbox.Indicator>
        </>
      )}
    </ArkCheckbox.Control>
  );
}

export function CheckboxLabel(props: CheckboxLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkCheckbox.Label
      {...rest}
      class={["nui-choice-label", local.class].filter(Boolean).join(" ")}
    />
  );
}
