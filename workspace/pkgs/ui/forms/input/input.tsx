import { Field as ArkField } from "@ark-ui/solid/field";
import { splitProps, untrack } from "solid-js";
import type { TextControlOptions } from "../text-control.context";
import { useTextControl } from "../text-control.context";
import { initializeTextControl } from "../text-control.defaults";
import { textControlRecipe } from "../text-control.recipe";

export type InputProps = Omit<ArkField.InputProps, "size" | "type"> &
  TextControlOptions & {
    type?: "text" | "email" | "password" | "search" | "tel" | "url";
    htmlSize?: number;
    appearance?: "default" | "static";
    defaultValue?: string;
  };

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
    "appearance",
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
      readOnly={local.appearance === "static" || control.readOnly()}
      aria-describedby={control.describedBy(local["aria-describedby"])}
      aria-invalid={control.invalid() ? "true" : local["aria-invalid"]}
      aria-busy={control.loading() || local["aria-busy"]}
      data-invalid={control.invalid() ? "" : undefined}
      data-valid={control.valid() ? "" : undefined}
      data-loading={control.loading() ? "" : undefined}
      data-appearance={local.appearance ?? "default"}
      class={textControlRecipe({
        size: control.size(),
        tone: control.tone(),
        rounded: control.rounded(),
        class: local.class,
      })}
    />
  );
}
