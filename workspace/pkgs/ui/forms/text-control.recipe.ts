import { tv } from "tailwind-variants/lite";

export const textControlRecipe = tv({
  base: "nui-text-control",
  variants: {
    size: {
      sm: "nui:[--nui-text-height:var(--nui-control-height-sm)] nui:[--nui-text-font:var(--nui-font-size-sm)] nui:[--nui-text-padding:0.625rem] nui:[--nui-text-block:0.25rem]",
      md: "nui:[--nui-text-height:var(--nui-control-height-md)] nui:[--nui-text-font:var(--nui-font-size-base)] nui:[--nui-text-padding:0.75rem] nui:[--nui-text-block:0.375rem]",
      lg: "nui:[--nui-text-height:var(--nui-control-height-lg)] nui:[--nui-text-font:var(--nui-font-size-lg)] nui:[--nui-text-padding:1rem] nui:[--nui-text-block:0.5rem]",
    },
    tone: {
      neutral:
        "nui:[--nui-text-border:var(--nui-control-border)] nui:[--nui-text-hover:var(--nui-control-border-hover)] nui:[--nui-text-focus:var(--nui-focus-ring)]",
      primary:
        "nui:[--nui-text-border:var(--nui-primary-border)] nui:[--nui-text-hover:var(--nui-primary-border-hover)] nui:[--nui-text-focus:var(--nui-primary-focus)]",
      info: "nui:[--nui-text-border:var(--nui-info-border)] nui:[--nui-text-hover:var(--nui-info-border-hover)] nui:[--nui-text-focus:var(--nui-info-focus)]",
      success:
        "nui:[--nui-text-border:var(--nui-success-border)] nui:[--nui-text-hover:var(--nui-success-border-hover)] nui:[--nui-text-focus:var(--nui-success-focus)]",
      warning:
        "nui:[--nui-text-border:var(--nui-warning-border)] nui:[--nui-text-hover:var(--nui-warning-border-hover)] nui:[--nui-text-focus:var(--nui-warning-focus)]",
      danger:
        "nui:[--nui-text-border:var(--nui-danger-border)] nui:[--nui-text-hover:var(--nui-danger-border-hover)] nui:[--nui-text-focus:var(--nui-danger-focus)]",
    },
    rounded: {
      true: "nui:[--nui-text-radius:999px]",
      false: "nui:[--nui-text-radius:var(--nui-radius-md)]",
    },
  },
  defaultVariants: { size: "md", tone: "neutral", rounded: false },
});
