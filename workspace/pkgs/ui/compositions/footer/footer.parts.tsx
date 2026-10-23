import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { HeadingProps } from "../../content/heading/heading";
import { Heading } from "../../content/heading/heading";
import { footerRecipe } from "./footer.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = footerRecipe();

export function FooterContent(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.content({ class: local.class })} />;
}
export function FooterBrand(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.brand({ class: local.class })} />;
}
export function FooterLinks(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.links({ class: local.class })} />;
}
export function FooterGroup(props: JSX.HTMLAttributes<HTMLElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <nav {...rest} class={styles.group({ class: local.class })} />;
}
export function FooterTitle(props: HeadingProps) {
  return <Heading {...mergeProps({ as: "h2" as const, size: "6" as const }, props)} />;
}
export function FooterLink(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <a {...rest} class={styles.link({ class: local.class })} />;
}
export function FooterMeta(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.meta({ class: local.class })} />;
}
