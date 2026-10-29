import { type JSX, mergeProps, Show, splitProps } from "solid-js";
import { Heading, type HeadingProps } from "../../content/heading/heading";
import { Text, type TextProps } from "../../content/text/text";
import { emptyRecipe } from "./empty.recipe";

export type EmptyContentProps = JSX.HTMLAttributes<HTMLDivElement>;
export type EmptyActionsProps = JSX.HTMLAttributes<HTMLDivElement>;
export type EmptyIconProps = JSX.HTMLAttributes<HTMLDivElement>;
export type EmptyTitleProps = HeadingProps;
export type EmptyDescriptionProps = TextProps;
const styles = emptyRecipe();

export function EmptyContent(props: EmptyContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.content({ class: local.class })} />;
}

export function EmptyTitle(props: EmptyTitleProps) {
  return <Heading {...mergeProps({ as: "h2" as const, size: "6" as const }, props)} />;
}

export function EmptyDescription(props: EmptyDescriptionProps) {
  return <Text {...mergeProps({ size: "6" as const, tone: "muted" as const }, props)} />;
}

export function EmptyActions(props: EmptyActionsProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.actions({ class: local.class })} />;
}

function InboxIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16l2 10v6H2v-6L4 4Z" />
      <path d="M2 14h6l2 3h4l2-3h6" />
    </svg>
  );
}

export function EmptyIcon(props: EmptyIconProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <div {...rest} aria-hidden="true" class={styles.icon({ class: local.class })}>
      <Show when={local.children} fallback={<InboxIcon />}>
        {local.children}
      </Show>
    </div>
  );
}
