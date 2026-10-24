import { tv } from "tailwind-variants/lite";

export const avatarRecipe = tv({
  slots: {
    root: "nui:relative nui:inline-flex nui:shrink-0 nui:items-center nui:justify-center nui:overflow-hidden nui:bg-[var(--nui-neutral-soft)] nui:font-medium nui:text-foreground nui:align-middle",
    image: "nui:h-full nui:w-full nui:object-cover nui:data-[state=hidden]:hidden",
    fallback:
      "nui:flex nui:h-full nui:w-full nui:items-center nui:justify-center nui:leading-none nui:data-[state=hidden]:hidden",
  },
  variants: {
    size: {
      xs: { root: "nui:size-6 nui:text-[0.625rem]" },
      sm: { root: "nui:size-8 nui:text-xs" },
      md: { root: "nui:size-10 nui:text-sm" },
      lg: { root: "nui:size-12 nui:text-base" },
      xl: { root: "nui:size-16 nui:text-xl" },
    },
    shape: { circle: { root: "nui:rounded-full" }, square: { root: "nui:rounded-md" } },
  },
  defaultVariants: { size: "md", shape: "circle" },
});
