import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-solid";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { BadgeProps } from "../../content/badge/badge";
import { Badge } from "../../content/badge/badge";
import type { DeltaOptions } from "../delta/delta";
import { deltaDirection, deltaLabel, deltaTone } from "../delta/delta";

export type BadgeDeltaProps = Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children"> &
  DeltaOptions &
  Pick<BadgeProps, "variant" | "size" | "rounded">;

export function BadgeDelta(props: BadgeDeltaProps) {
  const [local, rest] = splitProps(props, ["value", "isPositiveGood", "valueFormat", "class"]);
  const icon = () => {
    const direction = deltaDirection(local.value);
    if (direction === "increase") return ArrowUpRight;
    return direction === "decrease" ? ArrowDownRight : Minus;
  };
  return (
    <Badge
      {...rest}
      class={local.class}
      tone={deltaTone(local.value, local.isPositiveGood)}
      data-direction={deltaDirection(local.value)}
    >
      <Dynamic component={icon()} aria-hidden="true" size={14} style={{ "flex-shrink": 0 }} />
      <span class="nui-data-sr-only">{deltaDirection(local.value)}: </span>
      {deltaLabel(local)}
    </Badge>
  );
}
