import { useStepsContext, useStepsItemContext } from "@ark-ui/solid/steps";
import { children, type JSX, Show, splitProps } from "solid-js";
import { stepsRecipe } from "./steps.recipe";

export type StepsIndicatorProps = JSX.HTMLAttributes<HTMLSpanElement>;
const styles = stepsRecipe();

function CompletedIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function StepsIndicator(props: StepsIndicatorProps) {
  const item = useStepsItemContext();
  const steps = useStepsContext();
  const [local, rest] = splitProps(props, ["class", "children"]);
  const content = children(() => local.children);
  return (
    <span
      {...steps().getIndicatorProps({ index: item().index })}
      {...rest}
      aria-hidden="true"
      class={styles.indicator({ class: local.class })}
    >
      <Show
        when={content()}
        fallback={
          <Show when={item().completed} fallback={item().index + 1}>
            <CompletedIcon />
          </Show>
        }
      >
        {content()}
      </Show>
    </span>
  );
}
