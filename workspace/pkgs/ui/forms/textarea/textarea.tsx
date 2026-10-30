import { Field as ArkField } from "@ark-ui/solid/field";
import { mergeProps, splitProps, untrack } from "solid-js";
import type { TextControlOptions } from "../text-control.context";
import { useTextControl } from "../text-control.context";
import { initializeTextControl } from "../text-control.defaults";
import { textControlRecipe } from "../text-control.recipe";

export type TextareaProps = ArkField.TextareaProps &
  Omit<TextControlOptions, "rounded"> & {
    resize?: "vertical" | "horizontal" | "both" | "none";
    defaultValue?: string;
  };

export function Textarea(props: TextareaProps) {
  const [local, rest] = splitProps(mergeProps({ rows: 4, resize: "vertical" as const }, props), [
    "size",
    "tone",
    "valid",
    "invalid",
    "loading",
    "disabled",
    "readOnly",
    "resize",
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
    <ArkField.Textarea
      {...rest}
      ref={(element) => initializeTextControl(element, initialValue, local.ref)}
      disabled={control.disabled()}
      readOnly={control.readOnly()}
      aria-describedby={control.describedBy(local["aria-describedby"])}
      aria-invalid={control.invalid() ? "true" : local["aria-invalid"]}
      aria-busy={control.loading() || local["aria-busy"]}
      data-invalid={control.invalid() ? "" : undefined}
      data-valid={control.valid() ? "" : undefined}
      data-resize={local.resize}
      data-loading={control.loading() ? "" : undefined}
      class={textControlRecipe({ size: control.size(), tone: control.tone(), class: local.class })}
    />
  );
}
