import { type Steps as ArkSteps, useStepsContext } from "@ark-ui/solid/steps";
import { mergeProps as combineProps } from "@ark-ui/solid/utils";
import { mergeProps } from "solid-js";
import { Button, type ButtonProps } from "../../actions/button/button";

export type StepsNextTriggerProps = Omit<ArkSteps.NextTriggerProps, "asChild"> & ButtonProps;
export type StepsPrevTriggerProps = Omit<ArkSteps.PrevTriggerProps, "asChild"> & ButtonProps;

export function StepsNextTrigger(props: StepsNextTriggerProps) {
  const steps = useStepsContext();
  const merged = mergeProps(() => combineProps(steps().getNextTriggerProps(), props));
  return <Button {...merged} />;
}

export function StepsPrevTrigger(props: StepsPrevTriggerProps) {
  const steps = useStepsContext();
  const merged = mergeProps(() => combineProps(steps().getPrevTriggerProps(), props));
  return <Button variant="outline" {...merged} />;
}
