import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { HeadingProps } from "../../content/heading/heading";
import { Heading } from "../../content/heading/heading";
import { useVerticalMenuStyles } from "./vertical-menu.context";

export type VerticalMenuLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  current?: boolean | undefined;
};

export function VerticalMenuGroup(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useVerticalMenuStyles();
  return <div {...rest} class={styles().group({ class: local.class })} />;
}
export function VerticalMenuLabel(props: HeadingProps) {
  const [local, rest] = splitProps(
    mergeProps(
      { as: "h2" as const, size: "6" as const, style: { color: "var(--nui-muted-foreground)" } },
      props,
    ),
    ["class"],
  );
  const styles = useVerticalMenuStyles();
  return <Heading {...rest} class={styles().label({ class: local.class })} />;
}
export function VerticalMenuList(props: JSX.HTMLAttributes<HTMLUListElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useVerticalMenuStyles();
  return <ul {...rest} class={styles().list({ class: local.class })} />;
}
export function VerticalMenuItem(props: JSX.LiHTMLAttributes<HTMLLIElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useVerticalMenuStyles();
  return <li {...rest} class={styles().item({ class: local.class })} />;
}
export function VerticalMenuLink(props: VerticalMenuLinkProps) {
  const [local, rest] = splitProps(props, ["class", "current", "aria-current"]);
  const styles = useVerticalMenuStyles();
  return (
    <a
      {...rest}
      aria-current={local.current ? "page" : local["aria-current"]}
      class={styles().link({ class: local.class })}
    />
  );
}
export function VerticalMenuSubList(props: JSX.HTMLAttributes<HTMLUListElement>) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useVerticalMenuStyles();
  return <ul {...rest} class={styles().subList({ class: local.class })} />;
}
export function VerticalMenuIcon(props: JSX.HTMLAttributes<HTMLSpanElement>) {
  const [local, rest] = splitProps(mergeProps({ "aria-hidden": true as const }, props), ["class"]);
  const styles = useVerticalMenuStyles();
  return <span {...rest} class={styles().icon({ class: local.class })} />;
}
