import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import {
  ActionBarActions,
  ActionBarContent,
  ActionBarDescription,
  ActionBarTitle,
} from "./action-bar.parts";
import { actionBarRecipe } from "./action-bar.recipe";

export type ActionBarRootProps = JSX.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof actionBarRecipe>;

export function ActionBarRoot(props: ActionBarRootProps) {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  return (
    <div
      {...rest}
      class={actionBarRecipe({ variant: local.variant }).root({ class: local.class })}
    />
  );
}

export const ActionBar = {
  Root: ActionBarRoot,
  Content: ActionBarContent,
  Title: ActionBarTitle,
  Description: ActionBarDescription,
  Actions: ActionBarActions,
};
