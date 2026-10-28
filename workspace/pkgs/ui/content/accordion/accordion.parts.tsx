import { Accordion as ArkAccordion } from "@ark-ui/solid/accordion";
import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { disclosureRecipe } from "../disclosure.recipe";
import { DisclosureChevron } from "../disclosure-chevron";
import { accordionRecipe } from "./accordion.recipe";

const styles = disclosureRecipe();
export type AccordionItemProps = ArkAccordion.ItemProps;
export type AccordionItemTriggerProps = ArkAccordion.ItemTriggerProps;
export type AccordionItemContentProps = ArkAccordion.ItemContentProps;
export type AccordionItemIndicatorProps = ArkAccordion.ItemIndicatorProps;
export type AccordionItemHeadingProps = JSX.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
};

export function AccordionItem(props: AccordionItemProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkAccordion.Item {...rest} class={accordionRecipe().item({ class: local.class })} />;
}
export function AccordionItemHeading(props: AccordionItemHeadingProps) {
  const [local, rest] = splitProps(mergeProps({ as: "h3" as const }, props), ["as", "class"]);
  return (
    <Dynamic
      component={local.as}
      {...rest}
      class={accordionRecipe().heading({ class: local.class })}
    />
  );
}
export function AccordionItemTrigger(props: AccordionItemTriggerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkAccordion.ItemTrigger
      {...rest}
      class={props.asChild ? local.class : styles.trigger({ class: local.class })}
    />
  );
}
export function AccordionItemContent(props: AccordionItemContentProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkAccordion.ItemContent {...rest} class={styles.content({ class: local.class })}>
      <div class={styles.body()}>{local.children}</div>
    </ArkAccordion.ItemContent>
  );
}
export function AccordionItemIndicator(props: AccordionItemIndicatorProps) {
  const [local, rest] = splitProps(props, ["class", "children", "asChild"]);
  return (
    <ArkAccordion.ItemIndicator
      {...rest}
      aria-hidden="true"
      class={styles.indicator({ class: local.class })}
      asChild={
        local.asChild ??
        ((indicatorProps) => (
          <span {...indicatorProps()}>{local.children ?? <DisclosureChevron />}</span>
        ))
      }
    >
      {local.children}
    </ArkAccordion.ItemIndicator>
  );
}
