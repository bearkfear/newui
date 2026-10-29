import { tv } from "tailwind-variants/lite";

export const chartRecipe = tv({
  slots: {
    root: "nui-chart nui:m-0 nui:grid nui:min-w-0 nui:grid-rows-[auto_auto_1fr] nui:content-start nui:gap-4 nui:rounded-xl nui:border nui:border-border nui:bg-background nui:p-5 nui:text-foreground",
    caption: "nui:grid nui:min-w-0 nui:gap-1",
    title: "nui:m-0 nui:text-base nui:font-semibold nui:leading-snug",
    description: "nui:m-0 nui:text-sm nui:leading-relaxed nui:text-muted-foreground",
    plot: "nui-chart-plot nui:relative nui:min-w-0 nui:overflow-clip",
    legend:
      "nui:m-0 nui:flex nui:list-none nui:flex-wrap nui:self-start nui:gap-x-5 nui:gap-y-2 nui:p-0 nui:text-xs nui:text-muted-foreground",
    legendItem: "nui:inline-flex nui:items-center nui:gap-2",
    swatch: "nui:inline-block nui:size-2.5 nui:shrink-0 nui:rounded-xs",
    details:
      "nui-chart-details nui:grid nui:min-w-0 nui:grid-rows-[1fr_auto] nui:data-[state=open]:grid-rows-[auto_1fr]",
    detailsHeader: "nui:grid nui:min-w-0 nui:grid-rows-[1fr_auto] nui:gap-2",
    dataTrigger: "nui-chart-data-trigger nui:ms-auto",
    dataContent: "nui:min-w-0 nui:overflow-hidden nui:border-t nui:border-border nui:pt-3 nui:mt-3",
  },
});
