import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { panelRecipe } from "./panel.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = panelRecipe();

export function PanelRow(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.row({ class: local.class })} />;
}
export function PanelItemContent(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.itemContent({ class: local.class })} />;
}
export function PanelItemTitle(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <p {...rest} class={styles.itemTitle({ class: local.class })} />;
}
export function PanelItemDescription(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <p {...rest} class={styles.itemDescription({ class: local.class })} />;
}
export function PanelItemActions(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.itemActions({ class: local.class })} />;
}
