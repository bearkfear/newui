import { tv } from "tailwind-variants/lite";

export const buttonRecipe = tv({
  base: "nui:inline-flex nui:items-center nui:justify-center nui:gap-2 nui:rounded-md nui:font-medium nui:cursor-pointer nui:focus-visible:outline-2 nui:focus-visible:outline-offset-2 nui:focus-visible:outline-primary nui:disabled:pointer-events-none nui:disabled:opacity-50",
  variants: {
    variant: {
      solid: "nui:bg-primary nui:text-on-primary nui:enabled:hover:bg-primary-hover",
      outline: "nui:border nui:border-primary nui:bg-transparent nui:text-primary nui:enabled:hover:bg-muted",
    },
    size: {
      sm: "nui:h-8 nui:px-3 nui:text-sm",
      md: "nui:h-10 nui:px-4 nui:text-base",
    },
  },
  defaultVariants: { variant: "solid", size: "md" },
});
