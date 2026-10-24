import { tv } from "tailwind-variants/lite";

export const cardRecipe = tv({
  slots: {
    root: "nui:@container/card nui:flex nui:min-w-0 nui:flex-col nui:rounded-xl nui:border nui:border-border nui:text-foreground nui:wrap-break-word",
    header:
      "nui:grid nui:min-w-0 nui:grid-cols-1 nui:@sm/card:has-[[data-nui-card-actions]]:grid-cols-[minmax(0,1fr)_auto] nui:items-start nui:gap-x-4 nui:gap-y-2 nui:p-5 nui:[&+[data-nui-card-content]]:pt-0 nui:[&+[data-nui-card-footer=simple]]:pt-0",
    title: "nui:col-start-1",
    description: "nui:col-start-1",
    actions:
      "nui:col-start-1 nui:flex nui:flex-wrap nui:items-center nui:gap-2 nui:@sm/card:col-start-2 nui:@sm/card:row-start-1 nui:@sm/card:row-span-2",
    content: "nui:min-w-0 nui:p-5 nui:[&+[data-nui-card-footer=simple]]:pt-0",
    media:
      "nui:min-w-0 nui:overflow-hidden nui:first:rounded-t-[inherit] nui:last:rounded-b-[inherit] nui:[&>img]:block nui:[&>img]:h-auto nui:[&>img]:w-full nui:[&>video]:block nui:[&>video]:w-full",
  },
  variants: {
    variant: {
      outline: { root: "nui:bg-background" },
      soft: { root: "nui:bg-surface" },
      elevated: {
        root: "nui:bg-background nui:shadow-[0_4px_16px_color-mix(in_srgb,var(--nui-foreground)_10%,transparent)]",
      },
    },
  },
  defaultVariants: { variant: "outline" },
});

export const cardFooterRecipe = tv({
  base: "nui:mt-auto nui:min-w-0",
  variants: {
    variant: {
      simple: "nui:flex nui:flex-wrap nui:items-center nui:gap-3 nui:p-5",
      divided:
        "nui:flex nui:items-stretch nui:border-t nui:border-border nui:[&>*+*]:border-l nui:[&>*+*]:border-border",
    },
  },
  defaultVariants: { variant: "simple" },
});

export const cardFooterItemRecipe = tv({
  base: "nui:flex nui:min-w-0 nui:flex-1 nui:items-center nui:justify-center nui:p-2 nui:text-center nui:[&>a]:flex-1 nui:[&>button]:flex-1",
});
