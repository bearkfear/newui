import type { Menu as ArkMenu } from "@ark-ui/solid/menu";
import { MenuContent } from "../menu/menu.content";
import {
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuSubTrigger,
} from "../menu/menu.parts";
import { MenuRoot } from "../menu/menu.root";
import { MenuTrigger } from "../menu/menu.trigger";

export type DropdownMenuRootProps = ArkMenu.RootProps;
export type DropdownMenuTriggerProps = ArkMenu.TriggerProps;

export const DropdownMenu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  SubRoot: MenuRoot,
  SubTrigger: MenuSubTrigger,
  Content: MenuContent,
  Item: MenuItem,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Separator: MenuSeparator,
};
