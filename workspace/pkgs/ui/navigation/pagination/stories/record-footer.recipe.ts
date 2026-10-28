import { tv } from "tailwind-variants/lite";

export const recordFooterRecipe = tv({
  slots: {
    root: "nui:grid nui:w-full nui:gap-3 nui:pt-1",
    details:
      "nui:flex nui:flex-wrap nui:items-center nui:justify-between nui:gap-x-6 nui:gap-y-3 nui:text-sm nui:text-muted-foreground",
    pagination: "nui:flex-1 nui:basis-96",
    label: "nui:inline-flex nui:items-center nui:gap-2 nui:whitespace-nowrap",
    field: "nui:relative nui:inline-flex nui:items-center",
    select:
      "nui:h-8 nui:appearance-none nui:rounded-md nui:border nui:border-[var(--nui-control-border)] nui:bg-background nui:pl-3 nui:pr-8 nui:text-sm nui:leading-none nui:text-foreground nui:cursor-pointer nui:hover:border-[var(--nui-neutral-border-hover)] nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-focus-ring",
    icon: "nui:pointer-events-none nui:absolute nui:right-2 nui:text-muted-foreground",
  },
});
