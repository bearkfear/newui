import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { calloutRecipe } from "./callout.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = calloutRecipe();

export function CalloutHeader(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-callout-header="" class={styles.header({ class: local.class })} />;
}
export function CalloutBody(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-callout-body="" class={styles.body({ class: local.class })} />;
}

export function CalloutContent(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <div {...rest} data-nui-callout-content="" class={styles.content({ class: local.class })} />
  );
}
export function CalloutTitle(props: JSX.HTMLAttributes<HTMLParagraphElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <p {...rest} class={styles.title({ class: local.class })} />;
}
export function CalloutDescription(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.description({ class: local.class })} />;
}
export function CalloutActions(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.actions({ class: local.class })} />;
}
