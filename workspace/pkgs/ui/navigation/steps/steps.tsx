import { Steps as ArkSteps } from "@ark-ui/solid/steps";
import { mergeProps, splitProps } from "solid-js";
import { StepsNextTrigger, StepsPrevTrigger } from "./steps.controls";
import { StepsIndicator } from "./steps.indicator";
import {
  StepsActions,
  StepsCompletedContent,
  StepsContent,
  StepsDescription,
  StepsLabel,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "./steps.parts";
import { stepsRecipe } from "./steps.recipe";

export type StepsRootProps = ArkSteps.RootProps;
export type StepsListProps = ArkSteps.ListProps;
export type StepsItemProps = ArkSteps.ItemProps;
const styles = stepsRecipe();

function StepsRoot(props: StepsRootProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSteps.Root {...rest} class={styles.root({ class: local.class })} />;
}

function StepsList(props: StepsListProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <ArkSteps.List
      {...mergeProps({ "aria-label": "Steps" }, rest)}
      class={styles.list({ class: local.class })}
    />
  );
}

function StepsItem(props: StepsItemProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkSteps.Item {...rest} class={styles.item({ class: local.class })} />;
}

export const Steps = {
  Root: StepsRoot,
  List: StepsList,
  Item: StepsItem,
  Trigger: StepsTrigger,
  Indicator: StepsIndicator,
  Label: StepsLabel,
  Title: StepsTitle,
  Description: StepsDescription,
  Separator: StepsSeparator,
  Content: StepsContent,
  CompletedContent: StepsCompletedContent,
  Actions: StepsActions,
  PrevTrigger: StepsPrevTrigger,
  NextTrigger: StepsNextTrigger,
  Context: ArkSteps.Context,
  ItemContext: ArkSteps.ItemContext,
};
