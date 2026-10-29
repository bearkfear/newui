import { children, type JSX, mergeProps, Show, splitProps } from "solid-js";
import { Heading, type HeadingProps } from "../heading/heading";
import { Text, type TextProps } from "../text/text";
import { timelineRecipe } from "./timeline.recipe";

export type TimelineIndicatorProps = JSX.HTMLAttributes<HTMLDivElement>;
export type TimelineContentProps = JSX.HTMLAttributes<HTMLDivElement>;
export type TimelineTitleProps = HeadingProps;
export type TimelineDescriptionProps = TextProps;
export type TimelineTimeProps = JSX.IntrinsicElements["time"];
const styles = timelineRecipe();

export function TimelineIndicator(props: TimelineIndicatorProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const content = children(() => local.children);
  return (
    <div {...rest} aria-hidden="true" class={styles.indicator({ class: local.class })}>
      <Show when={content()} fallback={<span class={styles.dot()} />}>
        {content()}
      </Show>
    </div>
  );
}

export function TimelineContent(props: TimelineContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.content({ class: local.class })} />;
}

export function TimelineTitle(props: TimelineTitleProps) {
  return <Heading {...mergeProps({ as: "h3" as const, size: "6" as const }, props)} />;
}

export function TimelineDescription(props: TimelineDescriptionProps) {
  return <Text {...mergeProps({ size: "6" as const, tone: "muted" as const }, props)} />;
}

export function TimelineTime(props: TimelineTimeProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <time {...rest} class={styles.time({ class: local.class })} />;
}
