import { type JSX, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import {
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineTime,
  TimelineTitle,
} from "./timeline.parts";
import { timelineItemRecipe, timelineRecipe } from "./timeline.recipe";

export type TimelineRootProps = JSX.OlHTMLAttributes<HTMLOListElement> &
  VariantProps<typeof timelineRecipe>;
export type TimelineItemProps = JSX.LiHTMLAttributes<HTMLLIElement> &
  VariantProps<typeof timelineItemRecipe>;

export function TimelineRoot(props: TimelineRootProps) {
  const [local, rest] = splitProps(props, ["density", "orientation", "class"]);
  return (
    <ol
      aria-label={local.orientation === "horizontal" ? "Timeline" : undefined}
      tabIndex={local.orientation === "horizontal" ? 0 : undefined}
      {...rest}
      data-orientation={local.orientation ?? "vertical"}
      class={timelineRecipe({ density: local.density, orientation: local.orientation }).root({
        class: local.class,
      })}
    />
  );
}

export function TimelineItem(props: TimelineItemProps) {
  const [local, rest] = splitProps(props, ["status", "class"]);
  return (
    <li
      aria-current={local.status === "current" ? "step" : undefined}
      {...rest}
      data-nui-timeline-item=""
      data-status={local.status ?? "default"}
      class={timelineRecipe().item({
        class: timelineItemRecipe({ status: local.status, class: local.class }),
      })}
    />
  );
}

export const Timeline = {
  Root: TimelineRoot,
  Item: TimelineItem,
  Indicator: TimelineIndicator,
  Content: TimelineContent,
  Title: TimelineTitle,
  Description: TimelineDescription,
  Time: TimelineTime,
};
