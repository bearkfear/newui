import { Checkbox as ArkCheckbox } from "@ark-ui/solid/checkbox";
import { useFieldContext } from "@ark-ui/solid/field";
import { createUniqueId, type JSX, splitProps, untrack } from "solid-js";
import { ChoiceGroupContext, type ChoiceOptions, useChoiceControl } from "../choice/choice.context";
import { createChoiceFormState } from "../choice/choice.form";
import { choiceRecipe } from "../choice/choice.recipe";
import { CheckboxGroupContext, useCheckboxGroupVisual } from "./checkbox-group.context";

/**
 * CheckboxGroup.Root uses string-array `value` and `defaultValue`; each item's value must
 * be unique. `maxSelectedValues` disables unselected choices at the limit but keeps selected ones removable.
 */
export type CheckboxGroupRootProps = Omit<ArkCheckbox.GroupProps, "value"> &
  ChoiceOptions & {
    value?: string[];
    orientation?: "vertical" | "horizontal";
  };
/** Native span attributes for the standalone CheckboxGroup label. */
export type CheckboxGroupLabelProps = JSX.HTMLAttributes<HTMLSpanElement>;

/**
 * Coordinates selected string values, shared appearance, and native form entries for Checkbox items.
 * Use CheckboxGroup.Label when standalone. Inside Field, name the group with Field.Label rendered
 * as a span and omit CheckboxGroup.Label; put Field messages outside the group.
 */
export function CheckboxGroupRoot(props: CheckboxGroupRootProps) {
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
    "orientation",
    "aria-describedby",
    "aria-labelledby",
  ]);
  const control = useChoiceControl(local);
  const field = useFieldContext();
  const id = createUniqueId();
  const labelId = () => field?.().ids.label ?? `${id}-label`;
  const form = createChoiceFormState<string[]>({
    value: () => local.value,
    initial: untrack(() => [
      ...(typeof local.defaultValue === "function"
        ? local.defaultValue()
        : (local.defaultValue ?? [])),
    ]),
    isChecked: (value, input) => value.includes(input.value),
  });
  return (
    <ChoiceGroupContext.Provider value={control}>
      <CheckboxGroupContext.Provider value={{ labelId, register: form.register }}>
        <ArkCheckbox.Group
          id={field?.().ids.control}
          {...rest}
          value={form.value}
          onValueChange={(value) => form.change(value, () => local.onValueChange?.(value))}
          disabled={control.disabled()}
          readOnly={control.readOnly()}
          invalid={control.invalid()}
          aria-labelledby={local["aria-labelledby"] ?? labelId()}
          aria-describedby={control.describedBy(local["aria-describedby"])}
          data-orientation={local.orientation ?? "vertical"}
          data-valid={control.valid() ? "" : undefined}
          class={choiceRecipe({
            size: control.size(),
            tone: control.tone(),
            class: ["nui-choice-group", local.class].filter(Boolean).join(" "),
          })}
        >
          {local.children}
        </ArkCheckbox.Group>
      </CheckboxGroupContext.Provider>
    </ChoiceGroupContext.Provider>
  );
}

export function CheckboxGroupLabel(props: CheckboxGroupLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const group = useCheckboxGroupVisual();
  return (
    <span
      {...rest}
      id={group?.labelId()}
      class={["nui-choice-group-label", local.class].filter(Boolean).join(" ")}
    />
  );
}

/**
 * CheckboxGroup coordinates string values and shared disabled/readonly/validation state.
 * In Field, use Field.Label as a span before Root and omit Group.Label to avoid labeling the wrong
 * element; keep Field descriptions/messages outside Root.
 */
export const CheckboxGroup = { Root: CheckboxGroupRoot, Label: CheckboxGroupLabel };
