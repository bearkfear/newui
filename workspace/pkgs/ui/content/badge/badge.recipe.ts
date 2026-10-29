import { tv } from "tailwind-variants/lite";

export const badgeAppearanceVariants = {
  variant: {
    solid:
      "nui:[--nui-badge-bg:var(--nui-badge-solid)] nui:[--nui-badge-bg-hover:var(--nui-badge-solid-hover)] nui:[--nui-badge-fg:var(--nui-badge-on-solid)] nui:border-transparent",
    soft: "nui:[--nui-badge-bg:var(--nui-badge-soft)] nui:[--nui-badge-bg-hover:var(--nui-badge-soft-hover)] nui:[--nui-badge-fg:var(--nui-badge-text)] nui:border-transparent",
    outline:
      "nui:[--nui-badge-bg:transparent] nui:[--nui-badge-bg-hover:var(--nui-badge-soft)] nui:[--nui-badge-fg:var(--nui-badge-text)] nui:border-[var(--nui-badge-border)]",
  },
  tone: {
    neutral:
      "nui:[--nui-badge-solid:var(--nui-neutral)] nui:[--nui-badge-solid-hover:var(--nui-neutral-hover)] nui:[--nui-badge-on-solid:var(--nui-on-neutral)] nui:[--nui-badge-soft:var(--nui-neutral-soft)] nui:[--nui-badge-soft-hover:var(--nui-neutral-soft-hover)] nui:[--nui-badge-text:var(--nui-neutral-text)] nui:[--nui-badge-border:var(--nui-neutral-border)]",
    primary:
      "nui:[--nui-badge-solid:var(--nui-primary)] nui:[--nui-badge-solid-hover:var(--nui-primary-hover)] nui:[--nui-badge-on-solid:var(--nui-on-primary)] nui:[--nui-badge-soft:var(--nui-primary-soft)] nui:[--nui-badge-soft-hover:var(--nui-primary-soft-hover)] nui:[--nui-badge-text:var(--nui-primary-text)] nui:[--nui-badge-border:var(--nui-primary-border)]",
    info: "nui:[--nui-badge-solid:var(--nui-info)] nui:[--nui-badge-solid-hover:var(--nui-info-hover)] nui:[--nui-badge-on-solid:var(--nui-on-info)] nui:[--nui-badge-soft:var(--nui-info-soft)] nui:[--nui-badge-soft-hover:var(--nui-info-soft-hover)] nui:[--nui-badge-text:var(--nui-info-text)] nui:[--nui-badge-border:var(--nui-info-border)]",
    success:
      "nui:[--nui-badge-solid:var(--nui-success)] nui:[--nui-badge-solid-hover:var(--nui-success-hover)] nui:[--nui-badge-on-solid:var(--nui-on-success)] nui:[--nui-badge-soft:var(--nui-success-soft)] nui:[--nui-badge-soft-hover:var(--nui-success-soft-hover)] nui:[--nui-badge-text:var(--nui-success-text)] nui:[--nui-badge-border:var(--nui-success-border)]",
    warning:
      "nui:[--nui-badge-solid:var(--nui-warning)] nui:[--nui-badge-solid-hover:var(--nui-warning-hover)] nui:[--nui-badge-on-solid:var(--nui-on-warning)] nui:[--nui-badge-soft:var(--nui-warning-soft)] nui:[--nui-badge-soft-hover:var(--nui-warning-soft-hover)] nui:[--nui-badge-text:var(--nui-warning-text)] nui:[--nui-badge-border:var(--nui-warning-border)]",
    danger:
      "nui:[--nui-badge-solid:var(--nui-danger)] nui:[--nui-badge-solid-hover:var(--nui-danger-hover)] nui:[--nui-badge-on-solid:var(--nui-on-danger)] nui:[--nui-badge-soft:var(--nui-danger-soft)] nui:[--nui-badge-soft-hover:var(--nui-danger-soft-hover)] nui:[--nui-badge-text:var(--nui-danger-text)] nui:[--nui-badge-border:var(--nui-danger-border)]",
  },
} as const;

export const badgeRecipe = tv({
  base: "nui-badge nui:inline-flex nui:max-w-full nui:min-w-0 nui:items-center nui:justify-center nui:gap-1 nui:border nui:font-medium nui:leading-snug nui:align-middle nui:wrap-anywhere nui:no-underline nui:transition-colors nui:motion-reduce:transition-none nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:outline-offset-[var(--nui-focus-offset)] nui:focus-visible:outline-focus-ring",
  variants: {
    ...badgeAppearanceVariants,
    size: {
      sm: "nui:min-h-5 nui:px-1.5 nui:py-0.5 nui:text-xs",
      md: "nui:min-h-6 nui:px-2 nui:py-0.5 nui:text-xs",
      lg: "nui:min-h-7 nui:px-2.5 nui:py-1 nui:text-sm",
    },
    rounded: { true: "nui:rounded-full", false: "nui:rounded-md" },
  },
  defaultVariants: { variant: "soft", tone: "neutral", size: "md", rounded: false },
});

export const badgeGroupRecipe = tv({
  base: "nui:inline-flex nui:max-w-full nui:items-center nui:align-middle",
  variants: {
    attached: {
      true: "nui:gap-0 nui:[&>*]:rounded-none nui:[&>*+*]:-ml-px nui:[&>*:first-child]:rounded-l-md nui:[&>*:last-child]:rounded-r-md nui:[&>*:focus-visible]:relative nui:[&>*:focus-visible]:z-10",
      false: "nui:flex-wrap nui:gap-2",
    },
  },
  defaultVariants: { attached: false },
});
