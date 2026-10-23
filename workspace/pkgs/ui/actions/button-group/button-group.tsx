import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { ButtonGroupOptions } from "./button-group.context";
import { ButtonGroupContext } from "./button-group.context";
import { buttonGroupRecipe } from "./button-group.recipe";

export type ButtonGroupProps = JSX.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof buttonGroupRecipe> &
  ButtonGroupOptions;

export function ButtonGroup(props: ButtonGroupProps) {
  const [local, rest] = splitProps(mergeProps({ orientation: "horizontal" as const }, props), [
    "size",
    "variant",
    "tone",
    "disabled",
    "orientation",
    "align",
    "attached",
    "fullWidth",
    "class",
    "children",
  ]);
  return (
    <ButtonGroupContext.Provider value={local}>
      {/* biome-ignore lint/a11y/useSemanticElements: This groups actions, not form fields. */}
      <div
        role="group"
        {...rest}
        aria-disabled={local.disabled || undefined}
        data-orientation={local.orientation}
        data-attached={local.attached ? "true" : undefined}
        class={buttonGroupRecipe({
          orientation: local.orientation,
          align: local.align,
          attached: local.attached,
          fullWidth: local.fullWidth,
          class: local.class,
        })}
      >
        {local.children}
      </div>
    </ButtonGroupContext.Provider>
  );
}
