import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { panelRecipe } from "./panel.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = panelRecipe();

export function PanelBar(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.bar({ class: local.class })} />;
}
export function PanelBarGroup(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.barGroup({ class: local.class })} />;
}
export function PanelBarActions(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.barActions({ class: local.class })} />;
}
