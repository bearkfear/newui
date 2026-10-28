import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { HeadingProps } from "../../content/heading/heading";
import { Heading } from "../../content/heading/heading";
import type { TextProps } from "../../content/text/text";
import { Text } from "../../content/text/text";
import { panelRecipe } from "./panel.recipe";
import { panelHeaderRecipe } from "./panel-header.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = panelRecipe();

export type PanelHeaderProps = PartProps & VariantProps<typeof panelHeaderRecipe>;

export function PanelHeader(props: PanelHeaderProps) {
  const [local, rest] = splitProps(props, ["variant", "tone", "density", "class"]);
  return (
    <div
      {...rest}
      class={panelHeaderRecipe({
        variant: local.variant,
        tone: local.tone,
        density: local.density,
        class: local.class,
      })}
    />
  );
}
export function PanelTitle(props: HeadingProps) {
  return <Heading {...mergeProps({ as: "h2" as const, size: "5" as const }, props)} />;
}
export function PanelDescription(props: TextProps) {
  return <Text {...mergeProps({ size: "6" as const, tone: "muted" as const }, props)} />;
}
export function PanelToolbar(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.toolbar({ class: local.class })} />;
}
export function PanelBody(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.body({ class: local.class })} />;
}
export function PanelList(props: JSX.HTMLAttributes<HTMLUListElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ul {...rest} class={styles.list({ class: local.class })} />;
}
export function PanelItem(props: JSX.LiHTMLAttributes<HTMLLIElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  return <li {...rest} class={styles.item({ class: local.class })} />;
}
export function PanelLink(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const [local, rest] = splitProps(props, ["class"]);
  return <a {...rest} class={styles.link({ class: local.class })} />;
}
export function PanelFooter(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.footer({ class: local.class })} />;
}
