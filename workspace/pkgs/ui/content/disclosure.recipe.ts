import { tv } from "tailwind-variants/lite";

export const disclosureRecipe = tv({
  slots: {
    trigger:
      "nui:flex nui:w-full nui:min-w-0 nui:cursor-pointer nui:items-center nui:justify-between nui:gap-3 nui:border-0 nui:bg-transparent nui:px-4 nui:py-3 nui:text-left nui:text-base nui:leading-snug nui:font-medium nui:text-foreground nui:wrap-anywhere nui:enabled:hover:bg-[var(--nui-neutral-soft)] nui:enabled:active:bg-[var(--nui-neutral-soft-active)] nui-focus-ring nui:[--nui-focus-rest-offset:calc(-1*var(--nui-focus-offset))] nui:disabled:cursor-not-allowed nui:disabled:bg-[var(--nui-disabled-background)] nui:disabled:text-[var(--nui-disabled-foreground)]",
    indicator:
      "nui-disclosure-indicator nui:inline-flex nui:size-4 nui:shrink-0 nui:items-center nui:justify-center nui:text-muted-foreground nui:data-[disabled]:text-[var(--nui-disabled-foreground)]",
    content: "nui-disclosure-content nui:overflow-hidden",
    body: "nui:grid nui:min-w-0 nui:gap-3 nui:px-4 nui:pt-3 nui:pb-4 nui:text-sm nui:leading-relaxed nui:text-muted-foreground nui:wrap-anywhere",
  },
});
