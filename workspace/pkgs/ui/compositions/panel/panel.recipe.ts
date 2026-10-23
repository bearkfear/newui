import { tv } from "tailwind-variants/lite";

export const panelRecipe = tv({
  slots: {
    root: "nui:min-w-0 nui:overflow-hidden nui:rounded-xl nui:border nui:border-border nui:text-foreground",
    header: "nui:grid nui:gap-2 nui:p-5",
    toolbar: "nui:border-t nui:border-border nui:px-5 nui:py-4",
    body: "nui:border-t nui:border-border nui:p-5",
    list: "nui:m-0 nui:list-none nui:p-0",
    item: "nui:border-t nui:border-border",
    link: "nui:flex nui:min-w-0 nui:flex-wrap nui:items-center nui:justify-between nui:gap-3 nui:px-5 nui:py-4 nui:text-[var(--nui-primary-text)] nui:no-underline nui:hover:bg-[var(--nui-neutral-soft)] nui:active:bg-[var(--nui-neutral-soft-active)] nui:aria-[current=page]:bg-[var(--nui-primary-soft-active)] nui:focus-visible:outline-2 nui:focus-visible:-outline-offset-2 nui:focus-visible:outline-focus-ring",
    footer:
      "nui:flex nui:flex-wrap nui:items-center nui:justify-between nui:gap-3 nui:border-t nui:border-border nui:px-5 nui:py-4",
  },
  variants: {
    tone: { default: { root: "nui:bg-background" }, subtle: { root: "nui:bg-surface" } },
  },
  defaultVariants: { tone: "default" },
});
