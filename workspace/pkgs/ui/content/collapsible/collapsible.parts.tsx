import { Collapsible as ArkCollapsible, useCollapsibleContext } from "@ark-ui/solid/collapsible";
import { splitProps } from "solid-js";
import { disclosureRecipe } from "../disclosure.recipe";
import { DisclosureChevron } from "../disclosure-chevron";

export type CollapsibleTriggerProps = ArkCollapsible.TriggerProps;
export type CollapsibleContentProps = ArkCollapsible.ContentProps;
export type CollapsibleIndicatorProps = ArkCollapsible.IndicatorProps;
const styles = disclosureRecipe();

export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  const api = useCollapsibleContext();
  const [local, rest] = splitProps(props, ["class", "disabled"]);
  return (
    <ArkCollapsible.Trigger
      {...rest}
      disabled={api().disabled || local.disabled}
      class={props.asChild ? local.class : styles.trigger({ class: local.class })}
    />
  );
}
export function CollapsibleContent(props: CollapsibleContentProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkCollapsible.Content {...rest} class={styles.content({ class: local.class })}>
      <div class={styles.body()}>{local.children}</div>
    </ArkCollapsible.Content>
  );
}
export function CollapsibleIndicator(props: CollapsibleIndicatorProps) {
  const [local, rest] = splitProps(props, ["class", "children", "asChild"]);
  return (
    <ArkCollapsible.Indicator
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
    </ArkCollapsible.Indicator>
  );
}
