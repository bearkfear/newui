import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { HeadingProps } from "../../content/heading/heading";
import { Heading } from "../../content/heading/heading";
import type { TextProps } from "../../content/text/text";
import { Text } from "../../content/text/text";
import { useHeroStyles } from "./hero.context";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;

export function HeroContent(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useHeroStyles();
  return <div {...rest} class={styles().content({ class: local.class })} />;
}
export function HeroTitle(props: HeadingProps) {
  const [local, rest] = splitProps(mergeProps({ as: "h1" as const, size: "1" as const }, props), [
    "class",
  ]);
  const styles = useHeroStyles();
  return <Heading {...rest} class={styles().title({ class: local.class })} />;
}
export function HeroDescription(props: TextProps) {
  const [local, rest] = splitProps(
    mergeProps({ size: "5" as const, tone: "muted" as const }, props),
    ["class"],
  );
  const styles = useHeroStyles();
  return <Text {...rest} class={styles().description({ class: local.class })} />;
}
export function HeroEyebrow(props: TextProps) {
  const [local, rest] = splitProps(
    mergeProps({ size: "7" as const, tone: "muted" as const }, props),
    ["class"],
  );
  const styles = useHeroStyles();
  return <Text {...rest} class={styles().eyebrow({ class: local.class })} />;
}
export function HeroActions(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useHeroStyles();
  return <div {...rest} class={styles().actions({ class: local.class })} />;
}
export function HeroMedia(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useHeroStyles();
  return <div {...rest} class={styles().media({ class: local.class })} />;
}
