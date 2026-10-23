import { tv } from "tailwind-variants/lite";

export const buttonRecipe = tv({
  base: "nui-button nui:relative nui:inline-flex nui:shrink-0 nui:items-center nui:justify-center nui:gap-2 nui:border nui:font-medium nui:leading-none nui:cursor-pointer nui:select-none nui:transition-colors nui:motion-reduce:transition-none nui:focus-visible:z-10 nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-[var(--nui-button-focus)] nui:disabled:cursor-not-allowed",
  variants: {
    variant: {
      solid: "nui:border-transparent nui:bg-[var(--nui-button-color)] nui:text-[var(--nui-button-on-color)] nui:enabled:hover:bg-[var(--nui-button-hover)] nui:enabled:active:bg-[var(--nui-button-hover)] nui:aria-pressed:bg-[var(--nui-button-hover)] nui:aria-pressed:border-[var(--nui-button-border-hover)]",
      outline: "nui:border-[var(--nui-button-border)] nui:bg-transparent nui:text-[var(--nui-button-text)] nui:enabled:hover:border-[var(--nui-button-border-hover)] nui:enabled:hover:bg-[var(--nui-button-soft)] nui:enabled:active:bg-[var(--nui-button-soft-active)] nui:aria-pressed:bg-[var(--nui-button-soft-active)] nui:aria-pressed:border-[var(--nui-button-border-hover)]",
      soft: "nui:border-transparent nui:bg-[var(--nui-button-soft)] nui:text-[var(--nui-button-text)] nui:enabled:hover:bg-[var(--nui-button-soft-hover)] nui:enabled:active:bg-[var(--nui-button-soft-active)] nui:aria-pressed:bg-[var(--nui-button-soft-active)]",
      ghost: "nui:border-transparent nui:bg-transparent nui:text-[var(--nui-button-text)] nui:enabled:hover:bg-[var(--nui-button-soft)] nui:enabled:active:bg-[var(--nui-button-soft-active)] nui:aria-pressed:bg-[var(--nui-button-soft-active)]",
      link: "nui:border-transparent nui:bg-transparent nui:text-[var(--nui-button-text)] nui:underline nui:underline-offset-4 nui:enabled:hover:text-[var(--nui-button-text-strong)] nui:enabled:active:text-[var(--nui-button-text-strong)] nui:aria-pressed:text-[var(--nui-button-text-strong)]",
    },
    tone: {
      primary: "nui:[--nui-button-color:var(--nui-primary)] nui:[--nui-button-hover:var(--nui-primary-hover)] nui:[--nui-button-on-color:var(--nui-on-primary)] nui:[--nui-button-soft:var(--nui-primary-soft)] nui:[--nui-button-soft-hover:var(--nui-primary-soft-hover)] nui:[--nui-button-soft-active:var(--nui-primary-soft-active)] nui:[--nui-button-border:var(--nui-primary-border)] nui:[--nui-button-border-hover:var(--nui-primary-border-hover)] nui:[--nui-button-text:var(--nui-primary-text)] nui:[--nui-button-text-strong:var(--nui-primary-text-strong)] nui:[--nui-button-focus:var(--nui-primary-focus)]",
      neutral: "nui:[--nui-button-color:var(--nui-neutral)] nui:[--nui-button-hover:var(--nui-neutral-hover)] nui:[--nui-button-on-color:var(--nui-on-neutral)] nui:[--nui-button-soft:var(--nui-neutral-soft)] nui:[--nui-button-soft-hover:var(--nui-neutral-soft-hover)] nui:[--nui-button-soft-active:var(--nui-neutral-soft-active)] nui:[--nui-button-border:var(--nui-neutral-border)] nui:[--nui-button-border-hover:var(--nui-neutral-border-hover)] nui:[--nui-button-text:var(--nui-neutral-text)] nui:[--nui-button-text-strong:var(--nui-neutral-text-strong)] nui:[--nui-button-focus:var(--nui-neutral-focus)]",
      info: "nui:[--nui-button-color:var(--nui-info)] nui:[--nui-button-hover:var(--nui-info-hover)] nui:[--nui-button-on-color:var(--nui-on-info)] nui:[--nui-button-soft:var(--nui-info-soft)] nui:[--nui-button-soft-hover:var(--nui-info-soft-hover)] nui:[--nui-button-soft-active:var(--nui-info-soft-active)] nui:[--nui-button-border:var(--nui-info-border)] nui:[--nui-button-border-hover:var(--nui-info-border-hover)] nui:[--nui-button-text:var(--nui-info-text)] nui:[--nui-button-text-strong:var(--nui-info-text-strong)] nui:[--nui-button-focus:var(--nui-info-focus)]",
      success: "nui:[--nui-button-color:var(--nui-success)] nui:[--nui-button-hover:var(--nui-success-hover)] nui:[--nui-button-on-color:var(--nui-on-success)] nui:[--nui-button-soft:var(--nui-success-soft)] nui:[--nui-button-soft-hover:var(--nui-success-soft-hover)] nui:[--nui-button-soft-active:var(--nui-success-soft-active)] nui:[--nui-button-border:var(--nui-success-border)] nui:[--nui-button-border-hover:var(--nui-success-border-hover)] nui:[--nui-button-text:var(--nui-success-text)] nui:[--nui-button-text-strong:var(--nui-success-text-strong)] nui:[--nui-button-focus:var(--nui-success-focus)]",
      warning: "nui:[--nui-button-color:var(--nui-warning)] nui:[--nui-button-hover:var(--nui-warning-hover)] nui:[--nui-button-on-color:var(--nui-on-warning)] nui:[--nui-button-soft:var(--nui-warning-soft)] nui:[--nui-button-soft-hover:var(--nui-warning-soft-hover)] nui:[--nui-button-soft-active:var(--nui-warning-soft-active)] nui:[--nui-button-border:var(--nui-warning-border)] nui:[--nui-button-border-hover:var(--nui-warning-border-hover)] nui:[--nui-button-text:var(--nui-warning-text)] nui:[--nui-button-text-strong:var(--nui-warning-text-strong)] nui:[--nui-button-focus:var(--nui-warning-focus)]",
      danger: "nui:[--nui-button-color:var(--nui-danger)] nui:[--nui-button-hover:var(--nui-danger-hover)] nui:[--nui-button-on-color:var(--nui-on-danger)] nui:[--nui-button-soft:var(--nui-danger-soft)] nui:[--nui-button-soft-hover:var(--nui-danger-soft-hover)] nui:[--nui-button-soft-active:var(--nui-danger-soft-active)] nui:[--nui-button-border:var(--nui-danger-border)] nui:[--nui-button-border-hover:var(--nui-danger-border-hover)] nui:[--nui-button-text:var(--nui-danger-text)] nui:[--nui-button-text-strong:var(--nui-danger-text-strong)] nui:[--nui-button-focus:var(--nui-danger-focus)]",
    },
    size: {
      xs: "nui:h-6 nui:px-2 nui:text-xs nui:[--nui-button-icon-size:0.75rem]",
      sm: "nui:h-8 nui:px-3 nui:text-sm nui:[--nui-button-icon-size:1rem]",
      md: "nui:h-10 nui:px-4 nui:text-base nui:[--nui-button-icon-size:1.25rem]",
      lg: "nui:h-12 nui:px-6 nui:text-lg nui:[--nui-button-icon-size:1.5rem]",
    },
    rounded: { true: "nui:rounded-full", false: "nui:rounded-md" },
    fullWidth: { true: "nui:w-full" },
    responsive: { true: "" },
    iconOnly: { true: "nui:aspect-square" },
  },
  compoundVariants: [
    { responsive: true, size: "sm", class: "nui:max-sm:h-6 nui:max-sm:px-2 nui:max-sm:text-xs nui:max-sm:[--nui-button-icon-size:0.75rem]" },
    { responsive: true, size: "md", class: "nui:max-sm:h-8 nui:max-sm:px-3 nui:max-sm:text-sm nui:max-sm:[--nui-button-icon-size:1rem]" },
    { responsive: true, size: "lg", class: "nui:max-sm:h-10 nui:max-sm:px-4 nui:max-sm:text-base nui:max-sm:[--nui-button-icon-size:1.25rem]" },
    { responsive: true, iconOnly: true, class: "nui:max-sm:px-0" },
  ],
  defaultVariants: { variant: "solid", tone: "primary", size: "md", rounded: false },
});
