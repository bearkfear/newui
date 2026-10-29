import { useStepsContext, useStepsItemContext } from "@ark-ui/solid/steps";
import { Check } from "lucide-solid";
import { children, type JSX, Show, splitProps } from "solid-js";
import { stepsRecipe } from "./steps.recipe";

export type StepsIndicatorProps = JSX.HTMLAttributes<HTMLSpanElement>;
const styles = stepsRecipe();

function CompletedIcon() {
  return <Check size={16} aria-hidden="true" />;
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
