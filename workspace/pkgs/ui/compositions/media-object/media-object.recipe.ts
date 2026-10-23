import { tv } from "tailwind-variants/lite";

export const mediaObjectRecipe = tv({
  slots: {
    root: "nui:grid nui:min-w-0 nui:grid-cols-[auto_minmax(0,1fr)] nui:gap-x-4 nui:gap-y-3 nui:md:grid-cols-[auto_minmax(0,1fr)_auto]",
    media:
      "nui:row-span-2 nui:w-[var(--nui-media-size)] nui:shrink-0 nui:overflow-hidden nui:rounded-md nui:md:row-span-1 nui:[&_img]:h-auto nui:[&_img]:w-full",
    content: "nui:grid nui:min-w-0 nui:content-start nui:gap-2 nui:wrap-anywhere",
    actions: "nui:col-start-2 nui:flex nui:min-w-0 nui:flex-wrap nui:gap-2 nui:md:col-start-3",
  },
  variants: {
    size: {
      sm: { root: "nui:[--nui-media-size:2.5rem]" },
      md: { root: "nui:[--nui-media-size:4rem]" },
      lg: { root: "nui:[--nui-media-size:6rem]" },
    },
    align: { start: { root: "nui:items-start" }, center: { root: "nui:items-center" } },
  },
  defaultVariants: { size: "md", align: "start" },
});
