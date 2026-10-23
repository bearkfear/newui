import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { HeadingProps } from "../../content/heading/heading";
import { Heading } from "../../content/heading/heading";
import type { TextProps } from "../../content/text/text";
import { Text } from "../../content/text/text";
import { actionBarRecipe } from "./action-bar.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = actionBarRecipe();

export function ActionBarContent(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.content({ class: local.class })} />;
}
export function ActionBarTitle(props: HeadingProps) {
  return <Heading {...mergeProps({ as: "h2" as const, size: "6" as const }, props)} />;
}
export function ActionBarDescription(props: TextProps) {
  return <Text {...mergeProps({ size: "7" as const, tone: "muted" as const }, props)} />;
}
export function ActionBarActions(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.actions({ class: local.class })} />;
}
