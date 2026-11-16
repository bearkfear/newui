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

/** Use `defaultOpen` for initial state or `open`/`onOpenChange` for controlled menu visibility. */
export type DropdownMenuRootProps = ArkMenu.RootProps;
/** Native trigger attributes for opening DropdownMenu.Content. */
export type DropdownMenuTriggerProps = ArkMenu.TriggerProps;

/**
 * Compact action menu opened from a native button trigger.
 * Compose Root, Trigger, Content, and Item; Content includes its portal and positioning.
 * Use SubRoot with SubTrigger and nested Content for cascading actions.
 */
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
