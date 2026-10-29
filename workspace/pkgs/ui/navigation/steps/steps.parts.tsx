import { Steps as ArkSteps, useStepsItemContext } from "@ark-ui/solid/steps";
import { type JSX, Show, splitProps } from "solid-js";
import { stepsRecipe } from "./steps.recipe";

export type StepsTriggerProps = ArkSteps.TriggerProps;
export type StepsContentProps = ArkSteps.ContentProps;
export type StepsCompletedContentProps = ArkSteps.CompletedContentProps;
export type StepsSeparatorProps = ArkSteps.SeparatorProps;
export type StepsLabelProps = JSX.HTMLAttributes<HTMLSpanElement>;
export type StepsTitleProps = JSX.HTMLAttributes<HTMLSpanElement>;
export type StepsDescriptionProps = JSX.HTMLAttributes<HTMLSpanElement>;
export type StepsActionsProps = JSX.HTMLAttributes<HTMLDivElement>;
const styles = stepsRecipe();

export function StepsTrigger(props: StepsTriggerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSteps.Trigger {...rest} class={styles.trigger({ class: local.class })} />;
}

export function StepsContent(props: StepsContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSteps.Content {...rest} class={styles.content({ class: local.class })} />;
}

export function StepsCompletedContent(props: StepsCompletedContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSteps.CompletedContent {...rest} class={styles.content({ class: local.class })} />;
}

export function StepsSeparator(props: StepsSeparatorProps) {
  const item = useStepsItemContext();
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <Show when={!item().last}>
      <ArkSteps.Separator
        {...rest}
        aria-hidden="true"
        class={styles.separator({ class: local.class })}
      />
    </Show>
  );
}

export function StepsLabel(props: StepsLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <span {...rest} class={styles.label({ class: local.class })} />;
}

export function StepsTitle(props: StepsTitleProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <span {...rest} class={styles.title({ class: local.class })} />;
}

export function StepsDescription(props: StepsDescriptionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <span {...rest} class={styles.description({ class: local.class })} />;
}

export function StepsActions(props: StepsActionsProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.actions({ class: local.class })} />;
}
