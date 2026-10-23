import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { HeadingProps } from "../../content/heading/heading";
import { Heading } from "../../content/heading/heading";
import type { TextProps } from "../../content/text/text";
import { Text } from "../../content/text/text";
import { mediaObjectRecipe } from "./media-object.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = mediaObjectRecipe();

export function MediaObjectMedia(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.media({ class: local.class })} />;
}
export function MediaObjectContent(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.content({ class: local.class })} />;
}
export function MediaObjectTitle(props: HeadingProps) {
  return (
    <Heading
      {...mergeProps(
        { as: "h3" as const, size: "5" as const, style: { "line-height": "1" } },
        props,
      )}
    />
  );
}
export function MediaObjectDescription(props: TextProps) {
  return <Text {...mergeProps({ size: "6" as const, tone: "muted" as const }, props)} />;
}
export function MediaObjectActions(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.actions({ class: local.class })} />;
}
