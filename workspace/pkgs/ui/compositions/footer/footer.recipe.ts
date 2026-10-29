import { tv } from "tailwind-variants/lite";

export const footerRecipe = tv({
  slots: {
    root: "nui:border-t nui:border-border nui:py-10 nui:text-foreground nui:md:py-14",
    content: "nui:grid nui:min-w-0 nui:gap-10 nui:md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]",
    brand: "nui:grid nui:min-w-0 nui:content-start nui:gap-3",
    links:
      "nui:grid nui:min-w-0 nui:grid-cols-[repeat(auto-fit,minmax(min(100%,10rem),1fr))] nui:gap-8",
    group: "nui:grid nui:min-w-0 nui:content-start nui:justify-items-start nui:gap-3",
    link: "nui:rounded-sm nui:text-sm nui:text-muted-foreground nui:underline-offset-4 nui:hover:text-foreground nui:hover:underline nui:aria-[current=page]:text-foreground nui:focus-visible:outline-[length:var(--nui-focus-width)] nui:focus-visible:outline-offset-4 nui:focus-visible:outline-focus-ring",
    meta: "nui:mt-10 nui:flex nui:flex-wrap nui:items-center nui:justify-between nui:gap-4 nui:border-t nui:border-border nui:pt-6 nui:text-sm nui:text-muted-foreground",
  },
  variants: {
    tone: { default: { root: "nui:bg-background" }, subtle: { root: "nui:bg-surface" } },
  },
  defaultVariants: { tone: "default" },
});
