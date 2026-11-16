import { type JSX, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { EmptyActions, EmptyContent, EmptyDescription, EmptyIcon, EmptyTitle } from "./empty.parts";
import { emptyRecipe } from "./empty.recipe";

export type EmptyRootProps = JSX.HTMLAttributes<HTMLDivElement> & VariantProps<typeof emptyRecipe>;

export function EmptyRoot(props: EmptyRootProps) {
  const [local, rest] = splitProps(props, ["layout", "class"]);
  return (
    <div {...rest} class={emptyRecipe({ layout: local.layout }).root({ class: local.class })} />
  );
}

/**
 * Static empty-state content for a page, section, list, panel, or table.
 * Compose Root with Content, Title, and Description; Actions can contain existing Buttons or links.
 * The application decides when data is empty—do not render while a request is pending. Empty adds
 * no announcement role, overlay, or loading state.
 */
export const Empty = {
  Root: EmptyRoot,
  Icon: EmptyIcon,
  Content: EmptyContent,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Actions: EmptyActions,
};
