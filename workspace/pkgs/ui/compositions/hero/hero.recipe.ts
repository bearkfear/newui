import { tv } from "tailwind-variants/lite";

export const heroRecipe = tv({
  slots: {
    root: "nui:text-foreground",
    layout: "nui:grid nui:min-w-0 nui:items-center nui:gap-10 nui:lg:gap-16",
    content: "nui:grid nui:min-w-0 nui:gap-6",
    eyebrow: "nui:font-semibold nui:uppercase nui:tracking-widest",
    title: "nui:max-w-[20ch]",
    description: "nui:max-w-[55ch]",
    actions: "nui:flex nui:flex-wrap nui:items-center nui:gap-3",
    media: "nui:min-w-0 nui:overflow-hidden nui:rounded-xl nui:[&_img]:h-auto nui:[&_img]:w-full",
  },
  variants: {
    tone: {
      default: { root: "nui:bg-background" },
      subtle: { root: "nui:bg-surface" },
      accent: { root: "nui:bg-[var(--nui-primary-2)]" },
    },
    layout: {
      stacked: { layout: "nui:grid-cols-1" },
      split: { layout: "nui:grid-cols-1 nui:md:grid-cols-2" },
    },
    align: {
      start: { content: "nui:justify-items-start nui:text-start", actions: "nui:justify-start" },
      center: {
        content: "nui:justify-items-center nui:text-center",
        actions: "nui:justify-center",
      },
    },
  },
  defaultVariants: { tone: "default", layout: "stacked", align: "start" },
});
