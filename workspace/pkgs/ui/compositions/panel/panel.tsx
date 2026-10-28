import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import {
  PanelBody,
  PanelDescription,
  PanelFooter,
  PanelHeader,
  PanelItem,
  PanelLink,
  PanelList,
  PanelTitle,
  PanelToolbar,
} from "./panel.parts";
import { panelRecipe } from "./panel.recipe";
import { PanelBar, PanelBarActions, PanelBarGroup } from "./panel-bar.parts";
import {
  PanelItemActions,
  PanelItemContent,
  PanelItemDescription,
  PanelItemTitle,
  PanelRow,
} from "./panel-row.parts";

export type PanelRootProps = JSX.HTMLAttributes<HTMLElement> & VariantProps<typeof panelRecipe>;

export function PanelRoot(props: PanelRootProps) {
  const [local, rest] = splitProps(props, ["tone", "class"]);
  return (
    <section {...rest} class={panelRecipe({ tone: local.tone }).root({ class: local.class })} />
  );
}

export const Panel = {
  Root: PanelRoot,
  Bar: PanelBar,
  BarGroup: PanelBarGroup,
  BarActions: PanelBarActions,
  Header: PanelHeader,
  Title: PanelTitle,
  Description: PanelDescription,
  Toolbar: PanelToolbar,
  Body: PanelBody,
  List: PanelList,
  Item: PanelItem,
  Row: PanelRow,
  ItemContent: PanelItemContent,
  ItemTitle: PanelItemTitle,
  ItemDescription: PanelItemDescription,
  ItemActions: PanelItemActions,
  Link: PanelLink,
  Footer: PanelFooter,
};
