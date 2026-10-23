import type { JSX } from "solid-js";
import { mergeProps, Show, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { useButtonGroup } from "../button-group/button-group.context";
import { buttonRecipe } from "./button.recipe";

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonRecipe> & {
    loading?: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
  };

export function Button(props: ButtonProps) {
  const group = useButtonGroup();
  const [local, rest] = splitProps(mergeProps({ type: "button" as const }, props), [
    "variant",
    "tone",
    "size",
    "rounded",
    "fullWidth",
    "iconOnly",
    "loading",
    "responsive",
    "disabled",
    "startIcon",
    "endIcon",
    "class",
    "children",
    "aria-busy",
  ]);

  return (
    <button
      {...rest}
      data-nui-button=""
      data-icon-only={local.iconOnly ? "true" : undefined}
      disabled={local.disabled || group.disabled || local.loading}
      aria-busy={local.loading || local["aria-busy"]}
      class={buttonRecipe({
        variant: local.variant ?? group.variant,
        tone: local.tone ?? group.tone,
        size: local.size ?? group.size,
        rounded: local.rounded,
        fullWidth: local.fullWidth,
        responsive: local.responsive,
        iconOnly: local.iconOnly,
        class: local.class,
      })}
    >
      <Show when={local.loading}>
        <span class="nui-button-spinner" aria-hidden="true" />
      </Show>
      <span class="nui-button-content" style={{ opacity: local.loading ? 0 : undefined }}>
        <Show when={local.startIcon}>
          <span class="nui-button-icon" aria-hidden="true">
            {local.startIcon}
          </span>
        </Show>
        {local.children}
        <Show when={local.endIcon}>
          <span class="nui-button-icon" aria-hidden="true">
            {local.endIcon}
          </span>
        </Show>
      </span>
    </button>
  );
}
