import { Accordion as ArkAccordion } from "@ark-ui/solid/accordion";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeading,
  AccordionItemIndicator,
  AccordionItemTrigger,
} from "./accordion.parts";
import { accordionRecipe } from "./accordion.recipe";

/**
 * Accordion.Root controls one or more open items. Use `multiple` for independent sections and
 * `collapsible` when a single-open accordion may have every item closed; each item needs a trigger.
 */
export type AccordionRootProps = Omit<ArkAccordion.RootProps, "orientation"> &
  VariantProps<typeof accordionRecipe>;

export function AccordionRoot(props: AccordionRootProps) {
  const [local, rest] = splitProps(
    mergeProps({ collapsible: true, lazyMount: true, unmountOnExit: false }, props),
    ["variant", "class"],
  );
  return (
    <ArkAccordion.Root
      {...rest}
      orientation="vertical"
      class={accordionRecipe({ variant: local.variant }).root({ class: local.class })}
    />
  );
}

/**
 * Compound disclosure API: each Item contains ItemTrigger and ItemContent.
 * Root defaults to single-open, collapsible, lazy-mounted content; set `multiple` for independent
 * open items and `unmountOnExit` only when closed content should leave the DOM.
 */
export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemHeading: AccordionItemHeading,
  ItemTrigger: AccordionItemTrigger,
  ItemIndicator: AccordionItemIndicator,
  ItemContent: AccordionItemContent,
  Context: ArkAccordion.Context,
  ItemContext: ArkAccordion.ItemContext,
};
