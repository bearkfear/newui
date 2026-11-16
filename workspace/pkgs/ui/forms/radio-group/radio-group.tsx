import { useFieldContext } from "@ark-ui/solid/field";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/solid/radio-group";
import { createUniqueId, splitProps, untrack } from "solid-js";
import { ChoiceGroupContext, type ChoiceOptions, useChoiceControl } from "../choice/choice.context";
import { createChoiceFormState } from "../choice/choice.form";
import { choiceRecipe } from "../choice/choice.recipe";
import {
  RadioFormContext,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
} from "./radio-group.parts";

/**
 * RadioGroup.Root values are strings (or `null` to clear controlled selection);
 * `onValueChange` receives Ark's details object. Item values must be unique.
 */
export type RadioGroupRootProps = ArkRadioGroup.RootProps & ChoiceOptions;

/**
 * A mutually exclusive option set with native radio inputs, arrow-key selection, and Field support.
 * Compose Label with Item, ItemControl, and ItemText. Item includes its native hidden input; do not
 * add another input or interactive content inside the Item label. Use readonly to block changes
 * while preserving focus and submission.
 */
export function RadioGroupRoot(props: RadioGroupRootProps) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "valid",
    "invalid",
    "disabled",
    "readOnly",
    "class",
    "children",
    "value",
    "defaultValue",
    "onValueChange",
    "ids",
    "required",
    "aria-describedby",
    "aria-labelledby",
  ]);
  const control = useChoiceControl(local);
  const field = useFieldContext();
  const id = createUniqueId();
  const form = createChoiceFormState<string | null>({
    value: () => local.value,
    initial: untrack(() => local.defaultValue ?? null),
    isChecked: (value, input) => value === input.value,
  });
  return (
    <ChoiceGroupContext.Provider value={control}>
      <RadioFormContext.Provider
        value={{ register: form.register, describedBy: control.describedBy }}
      >
        <ArkRadioGroup.Root
          {...rest}
          id={props.id ?? id}
          ids={{ root: field?.().ids.control, label: field?.().ids.label, ...local.ids }}
          value={form.value()}
          onValueChange={(details) =>
            form.change(details.value, () => local.onValueChange?.(details))
          }
          required={Boolean(local.required || field?.().required)}
          disabled={control.disabled()}
          readOnly={control.readOnly()}
          invalid={control.invalid()}
          aria-labelledby={local["aria-labelledby"] ?? field?.().ids.label}
          aria-describedby={control.describedBy(local["aria-describedby"])}
          data-valid={control.valid() ? "" : undefined}
          class={choiceRecipe({
            size: control.size(),
            tone: control.tone(),
            class: ["nui-choice-group", local.class].filter(Boolean).join(" "),
          })}
        >
          {local.children}
        </ArkRadioGroup.Root>
      </RadioFormContext.Provider>
    </ChoiceGroupContext.Provider>
  );
}

/**
 * RadioGroup associates one selected string with its native form field. Use Label plus Item,
 * ItemControl, and ItemText; arrow keys change selection and each group is one roving-focus stop.
 */
export const RadioGroup = {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  Context: ArkRadioGroup.Context,
  ItemContext: ArkRadioGroup.ItemContext,
};
