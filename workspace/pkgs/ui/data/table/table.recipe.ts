import { tv } from "tailwind-variants/lite";

export const tableRecipe = tv({
  slots: {
    container:
      "nui:w-full nui:min-w-0 nui:max-w-full nui:overflow-x-auto nui:overscroll-x-contain nui-focus-ring",
    root: "nui-table nui:border-collapse nui:bg-background nui:text-sm nui:leading-relaxed nui:text-foreground",
    header: "nui:text-muted-foreground",
    body: "",
    footer: "nui:bg-surface nui:font-medium",
    row: "",
    head: "nui:font-medium",
    cell: "",
    caption:
      "nui:caption-bottom nui:px-3 nui:pt-3 nui:text-sm nui:font-normal nui:text-muted-foreground",
  },
  variants: {
    variant: {
      plain: {},
      bordered: { root: "nui:border nui:border-border" },
    },
    density: {
      compact: { root: "nui:[--nui-table-cell-px:0.75rem] nui:[--nui-table-cell-py:0.375rem]" },
      comfortable: { root: "nui:[--nui-table-cell-px:1rem] nui:[--nui-table-cell-py:0.75rem]" },
    },
    fullWidth: { true: { root: "nui:w-full" }, false: { root: "nui:w-auto" } },
  },
  defaultVariants: { variant: "plain", density: "comfortable", fullWidth: true },
});

export const tableCellRecipe = tv({
  base: "nui:align-middle",
  variants: {
    align: {
      start: "nui:text-start",
      center: "nui:text-center",
      end: "nui:text-end nui:tabular-nums",
    },
  },
  defaultVariants: { align: "start" },
});
