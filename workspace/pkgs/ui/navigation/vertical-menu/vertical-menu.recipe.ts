import { tv } from "tailwind-variants/lite";
import { navigationLinkBase } from "../navigation-link.recipe";

export const verticalMenuRecipe = tv({
  slots: {
    root: "nui:grid nui:w-full nui:min-w-0 nui:content-start nui:gap-6 nui:text-foreground",
    group: "nui:grid nui:min-w-0 nui:gap-2",
    label: "nui:px-3 nui:font-semibold nui:uppercase nui:tracking-wider",
    list: "nui:m-0 nui:grid nui:min-w-0 nui:list-none nui:gap-1 nui:p-0",
    item: "nui:min-w-0",
    link: `nui-vertical-menu-link ${navigationLinkBase}`,
    subList:
      "nui:ms-3 nui:mt-1 nui:grid nui:min-w-0 nui:list-none nui:gap-1 nui:border-s nui:border-border nui:ps-3",
    branch: "nui:min-w-0",
    branchTrigger: `${navigationLinkBase} nui:w-full nui:justify-between nui:text-start nui:cursor-pointer nui:data-[state=open]:text-foreground nui:disabled:cursor-not-allowed nui:disabled:text-[var(--nui-disabled-foreground)] nui:[&_svg]:shrink-0`,
    branchIndicator:
      "nui:transition-transform nui:motion-reduce:transition-none nui:data-[state=open]:rotate-180",
    branchContent: "nui:min-w-0",
    icon: "nui:inline-flex nui:shrink-0 nui:items-center nui:justify-center nui:[&_svg]:size-4",
  },
  variants: {
    variant: {
      plain: { root: "" },
      surface: { root: "nui:rounded-lg nui:border nui:border-border nui:bg-surface nui:p-3" },
    },
    density: {
      comfortable: {
        link: "nui:min-h-10 nui:px-3 nui:py-2",
        branchTrigger: "nui:min-h-10 nui:px-3 nui:py-2",
      },
      compact: {
        link: "nui:min-h-8 nui:px-3 nui:py-1.5",
        branchTrigger: "nui:min-h-8 nui:px-3 nui:py-1.5",
      },
    },
  },
  defaultVariants: { variant: "plain", density: "comfortable" },
});
