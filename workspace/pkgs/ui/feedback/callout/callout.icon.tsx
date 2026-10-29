import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-solid";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { type CalloutTone, useCalloutOptions } from "./callout.context";
import { calloutRecipe } from "./callout.recipe";

export type CalloutIconProps = JSX.HTMLAttributes<HTMLSpanElement>;
const styles = calloutRecipe();

const symbols = {
  primary: Info,
  neutral: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: CircleX,
} as const;

function CalloutSymbol(props: { tone: CalloutTone }) {
  return <Dynamic component={symbols[props.tone]} aria-hidden="true" />;
}

export function CalloutIcon(props: CalloutIconProps) {
  const options = useCalloutOptions();
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <span {...rest} aria-hidden="true" class={styles.icon({ class: local.class })}>
      {local.children ?? <CalloutSymbol tone={options().tone} />}
    </span>
  );
}
