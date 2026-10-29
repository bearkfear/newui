import { tv } from "tailwind-variants/lite";

export const tabsRecipe = tv({
  slots: {
    root: "nui:min-w-0",
    list: "nui-tabs-list",
    trigger: "nui-tabs-trigger",
    content:
      "nui-tabs-content nui:min-w-0 nui:pt-4 nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:outline-offset-[var(--nui-focus-offset)] nui:focus-visible:outline-focus-ring",
  },
  variants: {
    variant: {
      underline: { list: "nui-tabs-underline" },
      boxed: { list: "nui-tabs-boxed" },
      toggle: { list: "nui-tabs-toggle" },
      rounded: { list: "nui-tabs-toggle nui-tabs-rounded" },
      segmented: { list: "nui-tabs-segmented" },
    },
    tone: {
      neutral: {
        root: "nui:[--nui-tabs-tone:var(--nui-neutral-text)] nui:[--nui-tabs-solid:var(--nui-neutral)] nui:[--nui-tabs-on-solid:var(--nui-on-neutral)]",
      },
      primary: {
        root: "nui:[--nui-tabs-tone:var(--nui-primary-text)] nui:[--nui-tabs-solid:var(--nui-primary)] nui:[--nui-tabs-on-solid:var(--nui-on-primary)]",
      },
      info: {
        root: "nui:[--nui-tabs-tone:var(--nui-info-text)] nui:[--nui-tabs-solid:var(--nui-info)] nui:[--nui-tabs-on-solid:var(--nui-on-info)]",
      },
      success: {
        root: "nui:[--nui-tabs-tone:var(--nui-success-text)] nui:[--nui-tabs-solid:var(--nui-success)] nui:[--nui-tabs-on-solid:var(--nui-on-success)]",
      },
      warning: {
        root: "nui:[--nui-tabs-tone:var(--nui-warning-text)] nui:[--nui-tabs-solid:var(--nui-warning)] nui:[--nui-tabs-on-solid:var(--nui-on-warning)]",
      },
      danger: {
        root: "nui:[--nui-tabs-tone:var(--nui-danger-text)] nui:[--nui-tabs-solid:var(--nui-danger)] nui:[--nui-tabs-on-solid:var(--nui-on-danger)]",
      },
    },
    size: {
      sm: {
        list: "nui:[--nui-tab-height:2rem] nui:[--nui-tab-font:0.75rem] nui:[--nui-tab-padding:0.75rem]",
      },
      md: {
        list: "nui:[--nui-tab-height:2.5rem] nui:[--nui-tab-font:0.875rem] nui:[--nui-tab-padding:1rem]",
      },
      lg: {
        list: "nui:[--nui-tab-height:3rem] nui:[--nui-tab-font:1rem] nui:[--nui-tab-padding:1.25rem]",
      },
      xl: {
        list: "nui:[--nui-tab-height:3.5rem] nui:[--nui-tab-font:1.125rem] nui:[--nui-tab-padding:1.5rem]",
      },
    },
    align: {
      start: { list: "nui:justify-start" },
      center: { list: "nui:justify-center" },
      end: { list: "nui:justify-end" },
    },
    fullWidth: { true: { list: "nui-tabs-full" } },
  },
  defaultVariants: { variant: "underline", tone: "primary", size: "md", align: "start" },
});
