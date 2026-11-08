import { useFieldContext } from "@ark-ui/solid/field";
import { Switch as ArkSwitch } from "@ark-ui/solid/switch";
import { splitProps, untrack } from "solid-js";
import { type ChoiceOptions, useChoiceControl } from "../choice/choice.context";
import { createChoiceFormState } from "../choice/choice.form";
import { choiceRecipe } from "../choice/choice.recipe";
import { SwitchControl, SwitchLabel, SwitchThumb } from "./switch.parts";
import { switchPassiveRecipe } from "./switch.recipe";

export type SwitchRootProps = ArkSwitch.RootProps &
  ChoiceOptions & {
    variant?: "solid" | "outline";
    rounded?: boolean;
    labelPosition?: "start" | "end";
    passiveTone?: ChoiceOptions["tone"];
  };

export function SwitchRoot(props: SwitchRootProps) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "valid",
    "invalid",
    "disabled",
    "readOnly",
    "class",
    "children",
    "checked",
    "defaultChecked",
    "onCheckedChange",
    "ids",
    "required",
    "aria-describedby",
    "variant",
    "rounded",
    "labelPosition",
    "passiveTone",
    "aria-label",
    "aria-labelledby",
  ]);
  const control = useChoiceControl(local);
  const field = useFieldContext();
  const form = createChoiceFormState<boolean>({
    value: () => local.checked,
    initial: untrack(() => local.defaultChecked ?? false),
    isChecked: (value) => value,
  });
  return (
    <ArkSwitch.Root
      {...rest}
      ids={{ label: field?.().ids.label, hiddenInput: field?.().ids.control, ...local.ids }}
      required={Boolean(local.required || field?.().required)}
      checked={form.value()}
      onCheckedChange={(details) =>
        form.change(details.checked, () => local.onCheckedChange?.(details))
      }
      disabled={control.disabled()}
      readOnly={control.readOnly()}
      invalid={control.invalid()}
      data-size={control.size()}
      data-valid={control.valid() ? "" : undefined}
      data-variant={local.variant ?? "solid"}
      data-rounded={local.rounded ?? true}
      data-label-position={local.labelPosition ?? "end"}
      class={choiceRecipe({
        size: control.size(),
        tone: control.tone(),
        class: switchPassiveRecipe({
          passiveTone: local.passiveTone ?? "neutral",
          class: local.class,
        }),
      })}
    >
      {local.children}
      <ArkSwitch.HiddenInput
        role="switch"
        aria-label={local["aria-label"]}
        aria-labelledby={local["aria-labelledby"] ?? (local["aria-label"] ? "" : undefined)}
        aria-describedby={control.describedBy(local["aria-describedby"])}
        aria-readonly={control.readOnly() || undefined}
        ref={form.register}
      />
    </ArkSwitch.Root>
  );
}

export const Switch = {
  Root: SwitchRoot,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  Label: SwitchLabel,
  Context: ArkSwitch.Context,
};
