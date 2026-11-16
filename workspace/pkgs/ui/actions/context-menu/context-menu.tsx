import { Menu as ArkMenu } from "@ark-ui/solid/menu";
import { MenuContent } from "../menu/menu.content";
import {
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuSubTrigger,
} from "../menu/menu.parts";
import { MenuRoot } from "../menu/menu.root";

export type ContextMenuRootProps = ArkMenu.RootProps;
export type ContextMenuTriggerProps = ArkMenu.ContextTriggerProps;

/**
 * Opens actions from a right-click or touch long-press on the context trigger.
 * Provide a separate DropdownMenu with the same actions for click and keyboard discoverability.
 */
export const ContextMenu = {
  Root: MenuRoot,
  Trigger: ArkMenu.ContextTrigger,
  SubRoot: MenuRoot,
  SubTrigger: MenuSubTrigger,
  Content: MenuContent,
  Item: MenuItem,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Separator: MenuSeparator,
};
