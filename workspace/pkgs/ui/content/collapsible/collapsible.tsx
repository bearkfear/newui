import { Collapsible as ArkCollapsible } from "@ark-ui/solid/collapsible";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { CollapsibleContent, CollapsibleIndicator, CollapsibleTrigger } from "./collapsible.parts";
import { collapsibleRecipe } from "./collapsible.recipe";

export type CollapsibleRootProps = ArkCollapsible.RootProps &
  VariantProps<typeof collapsibleRecipe>;

export function CollapsibleRoot(props: CollapsibleRootProps) {
  const [local, rest] = splitProps(mergeProps({ lazyMount: true, unmountOnExit: false }, props), [
    "class",
    "variant",
  ]);
  return (
    <ArkCollapsible.Root
      {...rest}
      class={collapsibleRecipe({ variant: local.variant, class: local.class })}
    />
  );
}

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Indicator: CollapsibleIndicator,
  Content: CollapsibleContent,
  Context: ArkCollapsible.Context,
};
