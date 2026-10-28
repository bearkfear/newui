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
