import {
  Checkbox as ArkCheckbox,
  type CheckboxCheckedState,
  useCheckboxGroupContext,
} from "@ark-ui/solid/checkbox";
import { useFieldContext } from "@ark-ui/solid/field";
import { createUniqueId, splitProps, untrack } from "solid-js";
import { useCheckboxGroupVisual } from "../checkbox-group/checkbox-group.context";
import { type ChoiceOptions, useChoiceControl } from "../choice/choice.context";
import { createChoiceFormState } from "../choice/choice.form";
import { choiceRecipe } from "../choice/choice.recipe";
import { CheckboxControl, CheckboxInput, CheckboxLabel } from "./checkbox.parts";

/**
 * Checkbox.Root uses `value` within CheckboxGroup; standalone controls use boolean
 * `checked`/`defaultChecked`. Readonly remains submittable, while disabled controls are omitted.
 */
export type CheckboxRootProps = ArkCheckbox.RootProps & ChoiceOptions;

/**
 * A form checkbox that can be used alone or as an item inside CheckboxGroup.
 * Compose with Control and Label, or place it in Field for inherited accessible associations.
 * In a group, each checkbox remains its own Tab stop and Root inherits the group's selected values.
 */
export function CheckboxRoot(props: CheckboxRootProps) {
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
  ]);
  const control = useChoiceControl(local);
  const group = useCheckboxGroupVisual();
  const arkGroup = useCheckboxGroupContext();
  const field = useFieldContext();
  const id = createUniqueId();
  const form = createChoiceFormState<CheckboxCheckedState>({
    value: () => local.checked,
    initial: untrack(() => local.defaultChecked ?? false),
    isChecked: (value) => value === true,
  });
  return (
    <ArkCheckbox.Root
      {...rest}
      ids={
        group
          ? { label: `${id}-label`, hiddenInput: `${id}-input`, ...local.ids }
          : { label: field?.().ids.label, hiddenInput: field?.().ids.control, ...local.ids }
      }
      required={group ? (local.required ?? false) : Boolean(local.required || field?.().required)}
      checked={group ? local.checked : form.value()}
      onCheckedChange={(details) =>
        group
          ? local.onCheckedChange?.(details)
          : form.change(details.checked, () => local.onCheckedChange?.(details))
      }
      disabled={
        control.disabled() || Boolean(arkGroup?.().getItemProps({ value: props.value }).disabled)
      }
      readOnly={control.readOnly()}
      invalid={control.invalid()}
      data-valid={control.valid() ? "" : undefined}
      class={choiceRecipe({
        size: control.size(),
        tone: control.tone(),
        class: ["nui-choice-item", local.class].filter(Boolean).join(" "),
      })}
    >
      {local.children}
      <CheckboxInput
        describedBy={control.describedBy(local["aria-describedby"])}
        register={group?.register ?? form.register}
      />
    </ArkCheckbox.Root>
  );
}

/**
 * Checkbox API: use Root with Control and Label; Root includes the native form input.
 * Related values belong in CheckboxGroup, whose items retain individual Tab stops. Use Field for
 * one standalone checkbox or the documented Field.Label-as-span pattern for a group.
 */
export const Checkbox = {
  Root: CheckboxRoot,
  Control: CheckboxControl,
  Label: CheckboxLabel,
  Indicator: ArkCheckbox.Indicator,
  Context: ArkCheckbox.Context,
};
