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

/**
 * Place contextual selection or record information beside its available actions.
 * Content and Actions stack on narrow screens and share a row from 640px. This is layout only: it
 * adds no toolbar keyboard model, sticky positioning, selection state, or action behavior.
 */
export const ActionBar = {
  Root: ActionBarRoot,
  Content: ActionBarContent,
  Title: ActionBarTitle,
  Description: ActionBarDescription,
  Actions: ActionBarActions,
};
