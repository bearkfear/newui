import { tv } from "tailwind-variants/lite";

export const textControlRecipe = tv({
  base: "nui-text-control nui-focus-ring",
  variants: {
    size: {
      sm: "nui:[--nui-text-height:var(--nui-control-height-sm)] nui:[--nui-text-font:var(--nui-font-size-sm)] nui:[--nui-text-padding:0.625rem] nui:[--nui-text-block:0.25rem]",
      md: "nui:[--nui-text-height:var(--nui-control-height-md)] nui:[--nui-text-font:var(--nui-font-size-base)] nui:[--nui-text-padding:0.75rem] nui:[--nui-text-block:0.375rem]",
      lg: "nui:[--nui-text-height:var(--nui-control-height-lg)] nui:[--nui-text-font:var(--nui-font-size-lg)] nui:[--nui-text-padding:1rem] nui:[--nui-text-block:0.5rem]",
    },
    tone: {
      neutral:
        "nui:[--nui-text-color:var(--nui-foreground)] nui:[--nui-text-background:var(--nui-background)] nui:[--nui-text-addon-background:var(--nui-surface)] nui:[--nui-text-addon-color:var(--nui-muted-foreground)] nui:[--nui-text-border:var(--nui-control-border)] nui:[--nui-text-hover:var(--nui-control-border-hover)] nui:[--nui-text-focus:var(--nui-focus-ring)]",
      primary:
        "nui:[--nui-text-color:var(--nui-primary-text-strong)] nui:[--nui-text-background:var(--nui-primary-soft)] nui:[--nui-text-addon-background:var(--nui-primary-soft-hover)] nui:[--nui-text-addon-color:var(--nui-primary-text)] nui:[--nui-text-border:var(--nui-primary-border)] nui:[--nui-text-hover:var(--nui-primary-border-hover)] nui:[--nui-text-focus:var(--nui-primary-focus)]",
      info: "nui:[--nui-text-color:var(--nui-info-text-strong)] nui:[--nui-text-background:var(--nui-info-soft)] nui:[--nui-text-addon-background:var(--nui-info-soft-hover)] nui:[--nui-text-addon-color:var(--nui-info-text)] nui:[--nui-text-border:var(--nui-info-border)] nui:[--nui-text-hover:var(--nui-info-border-hover)] nui:[--nui-text-focus:var(--nui-info-focus)]",
      success:
        "nui:[--nui-text-color:var(--nui-success-text-strong)] nui:[--nui-text-background:var(--nui-success-soft)] nui:[--nui-text-addon-background:var(--nui-success-soft-hover)] nui:[--nui-text-addon-color:var(--nui-success-text)] nui:[--nui-text-border:var(--nui-success-border)] nui:[--nui-text-hover:var(--nui-success-border-hover)] nui:[--nui-text-focus:var(--nui-success-focus)]",
      warning:
        "nui:[--nui-text-color:var(--nui-warning-text-strong)] nui:[--nui-text-background:var(--nui-warning-soft)] nui:[--nui-text-addon-background:var(--nui-warning-soft-hover)] nui:[--nui-text-addon-color:var(--nui-warning-text)] nui:[--nui-text-border:var(--nui-warning-border)] nui:[--nui-text-hover:var(--nui-warning-border-hover)] nui:[--nui-text-focus:var(--nui-warning-focus)]",
      danger:
        "nui:[--nui-text-color:var(--nui-danger-text-strong)] nui:[--nui-text-background:var(--nui-danger-soft)] nui:[--nui-text-addon-background:var(--nui-danger-soft-hover)] nui:[--nui-text-addon-color:var(--nui-danger-text)] nui:[--nui-text-border:var(--nui-danger-border)] nui:[--nui-text-hover:var(--nui-danger-border-hover)] nui:[--nui-text-focus:var(--nui-danger-focus)]",
    },
    rounded: {
      true: "nui:[--nui-text-radius:999px]",
      false: "nui:[--nui-text-radius:var(--nui-radius-md)]",
    },
  },
  defaultVariants: { size: "md", tone: "neutral", rounded: false },
});
