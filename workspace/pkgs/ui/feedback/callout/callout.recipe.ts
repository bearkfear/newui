import { tv } from "tailwind-variants/lite";

export const calloutRecipe = tv({
  slots: {
    header:
      "nui:flex nui:min-w-0 nui:items-start nui:gap-3 nui:bg-[var(--nui-callout-header-bg)] nui:p-4 nui:text-[var(--nui-callout-header-fg)] nui:[--nui-callout-accent:var(--nui-callout-header-fg)] nui:[--nui-callout-text-strong:var(--nui-callout-header-fg)] nui:[--nui-callout-hover:var(--nui-callout-header-hover)] nui:[--nui-callout-active:var(--nui-callout-header-hover)] nui:[--nui-focus-ring:var(--nui-callout-header-fg)]",
    body: "nui:min-w-0 nui:p-4",
    root: "nui:min-w-0 nui:rounded-xl nui:border nui:border-[var(--nui-callout-border)] nui:text-[var(--nui-callout-accent)] nui:wrap-anywhere",
    icon: "nui:mt-0.5 nui:inline-flex nui:size-5 nui:shrink-0 nui:items-center nui:justify-center nui:text-[var(--nui-callout-accent)] nui:[&>svg]:size-full",
    content: "nui:grid nui:min-w-0 nui:flex-1 nui:content-start nui:gap-y-[var(--nui-header-gap)]",
    title:
      "nui:m-0 nui:text-base nui:leading-snug nui:font-semibold nui:text-[var(--nui-callout-text-strong)]",
    description:
      "nui:text-sm nui:leading-relaxed nui:[&_a]:font-medium nui:[&_a]:text-[var(--nui-callout-accent)] nui:[&_a]:underline nui:[&_a]:underline-offset-4 nui:[&_a:focus-visible]:rounded-sm nui-focus-links",
    actions: "nui:mt-3 nui:flex nui:min-w-0 nui:flex-wrap nui:items-center nui:gap-2",
    close:
      "nui:-mt-1 nui:-mr-1 nui:inline-flex nui:size-8 nui:shrink-0 nui:cursor-pointer nui:items-center nui:justify-center nui:rounded-full nui:border-0 nui:bg-transparent nui:text-[var(--nui-callout-accent)] nui:enabled:hover:bg-[var(--nui-callout-hover)] nui:enabled:active:bg-[var(--nui-callout-active)] nui-focus-ring nui:disabled:cursor-not-allowed nui:disabled:bg-[var(--nui-disabled-background)] nui:disabled:text-[var(--nui-disabled-foreground)]",
  },
  variants: {
    variant: {
      soft: { root: "nui:flex nui:items-start nui:gap-3 nui:p-4 nui:bg-[var(--nui-callout-bg)]" },
      outline: { root: "nui:flex nui:items-start nui:gap-3 nui:p-4 nui:bg-background" },
      message: { root: "nui:overflow-hidden nui:bg-[var(--nui-callout-bg)]" },
    },
    tone: {
      neutral: {
        root: "nui:[--nui-callout-bg:var(--nui-neutral-soft)] nui:[--nui-callout-header-bg:var(--nui-neutral)] nui:[--nui-callout-header-fg:var(--nui-on-neutral)] nui:[--nui-callout-header-hover:var(--nui-neutral-hover)] nui:[--nui-callout-border:var(--nui-neutral-6)] nui:[--nui-callout-accent:var(--nui-neutral-text)] nui:[--nui-callout-text-strong:var(--nui-neutral-text-strong)] nui:[--nui-callout-hover:var(--nui-neutral-soft-hover)] nui:[--nui-callout-active:var(--nui-neutral-soft-active)]",
      },
      primary: {
        root: "nui:[--nui-callout-bg:var(--nui-primary-soft)] nui:[--nui-callout-header-bg:var(--nui-primary)] nui:[--nui-callout-header-fg:var(--nui-on-primary)] nui:[--nui-callout-header-hover:var(--nui-primary-hover)] nui:[--nui-callout-border:var(--nui-primary-6)] nui:[--nui-callout-accent:var(--nui-primary-text)] nui:[--nui-callout-text-strong:var(--nui-primary-text-strong)] nui:[--nui-callout-hover:var(--nui-primary-soft-hover)] nui:[--nui-callout-active:var(--nui-primary-soft-active)]",
      },
      info: {
        root: "nui:[--nui-callout-bg:var(--nui-info-soft)] nui:[--nui-callout-header-bg:var(--nui-info)] nui:[--nui-callout-header-fg:var(--nui-on-info)] nui:[--nui-callout-header-hover:var(--nui-info-hover)] nui:[--nui-callout-border:var(--nui-info-6)] nui:[--nui-callout-accent:var(--nui-info-text)] nui:[--nui-callout-text-strong:var(--nui-info-text-strong)] nui:[--nui-callout-hover:var(--nui-info-soft-hover)] nui:[--nui-callout-active:var(--nui-info-soft-active)]",
      },
      success: {
        root: "nui:[--nui-callout-bg:var(--nui-success-soft)] nui:[--nui-callout-header-bg:var(--nui-success)] nui:[--nui-callout-header-fg:var(--nui-on-success)] nui:[--nui-callout-header-hover:var(--nui-success-hover)] nui:[--nui-callout-border:var(--nui-success-6)] nui:[--nui-callout-accent:var(--nui-success-text)] nui:[--nui-callout-text-strong:var(--nui-success-text-strong)] nui:[--nui-callout-hover:var(--nui-success-soft-hover)] nui:[--nui-callout-active:var(--nui-success-soft-active)]",
      },
      warning: {
        root: "nui:[--nui-callout-bg:var(--nui-warning-soft)] nui:[--nui-callout-header-bg:var(--nui-warning)] nui:[--nui-callout-header-fg:var(--nui-on-warning)] nui:[--nui-callout-header-hover:var(--nui-warning-hover)] nui:[--nui-callout-border:var(--nui-warning-6)] nui:[--nui-callout-accent:var(--nui-warning-text)] nui:[--nui-callout-text-strong:var(--nui-warning-text-strong)] nui:[--nui-callout-hover:var(--nui-warning-soft-hover)] nui:[--nui-callout-active:var(--nui-warning-soft-active)]",
      },
      danger: {
        root: "nui:[--nui-callout-bg:var(--nui-danger-soft)] nui:[--nui-callout-header-bg:var(--nui-danger)] nui:[--nui-callout-header-fg:var(--nui-on-danger)] nui:[--nui-callout-header-hover:var(--nui-danger-hover)] nui:[--nui-callout-border:var(--nui-danger-6)] nui:[--nui-callout-accent:var(--nui-danger-text)] nui:[--nui-callout-text-strong:var(--nui-danger-text-strong)] nui:[--nui-callout-hover:var(--nui-danger-soft-hover)] nui:[--nui-callout-active:var(--nui-danger-soft-active)]",
      },
    },
  },
  defaultVariants: { tone: "info", variant: "soft" },
});
