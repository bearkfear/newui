import { ChevronRight } from "lucide-solid";
import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { breadcrumbRecipe } from "./breadcrumb.recipe";

export type BreadcrumbRootProps = JSX.HTMLAttributes<HTMLElement>;
export type BreadcrumbListProps = JSX.OlHTMLAttributes<HTMLOListElement>;
export type BreadcrumbItemProps = JSX.LiHTMLAttributes<HTMLLIElement>;
export type BreadcrumbLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export type BreadcrumbPageProps = JSX.HTMLAttributes<HTMLSpanElement>;

const styles = breadcrumbRecipe();

export function BreadcrumbRoot(props: BreadcrumbRootProps) {
  const [local, rest] = splitProps(mergeProps({ "aria-label": "Breadcrumb" }, props), ["class"]);
  return <nav {...rest} class={styles.root({ class: local.class })} />;
}

export function BreadcrumbList(props: BreadcrumbListProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    // biome-ignore lint/a11y/noRedundantRoles: Preserve Safari/VoiceOver list semantics when list-style is none.
    <ol role="list" {...rest} class={styles.list({ class: local.class })} />
  );
}

export function BreadcrumbItem(props: BreadcrumbItemProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <li {...rest} class={styles.item({ class: local.class })}>
      <ChevronRight size={14} aria-hidden="true" class={styles.separator()} />
      {local.children}
    </li>
  );
}

export function BreadcrumbLink(props: BreadcrumbLinkProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <a {...rest} class={styles.link({ class: local.class })} />;
}

export function BreadcrumbPage(props: BreadcrumbPageProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <span {...rest} aria-current="page" class={styles.page({ class: local.class })} />;
}

export const Breadcrumb = {
  Root: BreadcrumbRoot,
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
};
