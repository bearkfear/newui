import { tv } from "tailwind-variants/lite";

export const panelHeaderRecipe = tv({
  base: "nui:grid nui:min-w-0 nui:gap-y-[var(--nui-header-gap)]",
  variants: {
    density: { default: "nui:p-5", compact: "nui:px-4 nui:py-2.5" },
    variant: {
      plain: "",
      soft: "nui:bg-[var(--nui-neutral-soft)]",
      solid:
        "nui:bg-[var(--nui-panel-header-bg)] nui:[--nui-foreground:var(--nui-panel-header-fg)] nui:[--nui-muted-foreground:var(--nui-panel-header-fg)] nui:text-foreground nui:[--nui-focus-ring:var(--nui-panel-header-fg)]",
    },
    tone: {
      neutral:
        "nui:[--nui-panel-header-bg:var(--nui-neutral)] nui:[--nui-panel-header-fg:var(--nui-on-neutral)]",
      primary:
        "nui:[--nui-panel-header-bg:var(--nui-primary)] nui:[--nui-panel-header-fg:var(--nui-on-primary)]",
      info: "nui:[--nui-panel-header-bg:var(--nui-info)] nui:[--nui-panel-header-fg:var(--nui-on-info)]",
      success:
        "nui:[--nui-panel-header-bg:var(--nui-success)] nui:[--nui-panel-header-fg:var(--nui-on-success)]",
      warning:
        "nui:[--nui-panel-header-bg:var(--nui-warning)] nui:[--nui-panel-header-fg:var(--nui-on-warning)]",
      danger:
        "nui:[--nui-panel-header-bg:var(--nui-danger)] nui:[--nui-panel-header-fg:var(--nui-on-danger)]",
    },
  },
  defaultVariants: { variant: "plain", tone: "neutral", density: "default" },
});
