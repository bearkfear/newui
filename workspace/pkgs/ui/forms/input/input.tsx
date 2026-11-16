import { Field as ArkField } from "@ark-ui/solid/field";
import { splitProps, untrack } from "solid-js";
import type { TextControlOptions } from "../text-control.context";
import { useTextControl } from "../text-control.context";
import { initializeTextControl } from "../text-control.defaults";
import { textControlRecipe } from "../text-control.recipe";

/**
 * Input adds shared visual states to native input attributes. `size` is visual size; use
 * `htmlSize` for the HTML character width.
 * `defaultValue` initializes the DOM default once and participates in native reset; controlled
 * editing uses `value` and native `onInput`.
 */
export type InputProps = Omit<ArkField.InputProps, "size" | "type"> &
  TextControlOptions & {
    type?: "text" | "email" | "password" | "search" | "tel" | "url";
    htmlSize?: number;
    defaultValue?: string;
  };

/**
 * A styled native text input: it does not mask, trim, or format entered text.
 * Use it inside Field.Root for managed labels and validation messages, or provide a visible native
 * label/accessible name independently. Field states and descriptions are inherited and merged.
 */
export function Input(props: InputProps) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "rounded",
    "valid",
    "invalid",
    "loading",
    "disabled",
    "readOnly",
    "htmlSize",
    "class",
    "aria-describedby",
    "aria-invalid",
    "aria-busy",
    "defaultValue",
    "ref",
  ]);
  const control = useTextControl(local);
  const initialValue = untrack(() => local.defaultValue);
  return (
    <ArkField.Input
      {...rest}
      ref={(element) => initializeTextControl(element, initialValue, local.ref)}
      size={local.htmlSize}
      disabled={control.disabled()}
      readOnly={control.readOnly()}
      aria-describedby={control.describedBy(local["aria-describedby"])}
      aria-invalid={control.invalid() ? "true" : local["aria-invalid"]}
      aria-busy={control.loading() || local["aria-busy"]}
      data-invalid={control.invalid() ? "" : undefined}
      data-valid={control.valid() ? "" : undefined}
      data-loading={control.loading() ? "" : undefined}
      class={textControlRecipe({
        size: control.size(),
        tone: control.tone(),
        rounded: control.rounded(),
        class: local.class,
      })}
    />
  );
}
