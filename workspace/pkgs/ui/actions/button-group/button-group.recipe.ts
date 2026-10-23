import { tv } from "tailwind-variants/lite";

export const buttonGroupRecipe = tv({
  base: "nui-button-group nui:flex nui:min-w-0",
  variants: {
    orientation: {
      horizontal: "nui:flex-row nui:items-center",
      vertical: "nui:w-fit nui:flex-col nui:items-stretch",
    },
    align: { start: "nui:justify-start", center: "nui:justify-center", end: "nui:justify-end" },
    attached: { true: "nui:gap-0 nui:flex-nowrap", false: "nui:gap-2" },
    fullWidth: { true: "nui:w-full nui:[&>[data-nui-button]]:min-w-0 nui:[&>[data-nui-button]]:flex-1" },
  },
  compoundVariants: [{ orientation: "horizontal", attached: false, class: "nui:flex-wrap" }],
  defaultVariants: { orientation: "horizontal", align: "start", attached: false },
});
