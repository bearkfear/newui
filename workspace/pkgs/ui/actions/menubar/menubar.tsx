import { Menu as Ark } from "@ark-ui/solid/menu";
import { type JSX, splitProps } from "solid-js";
import { MenuContent } from "../menu/menu.content";
import {
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuSubTrigger,
} from "../menu/menu.parts";
import { MenuRoot, type MenuRootProps } from "../menu/menu.root";
import { MenubarContext } from "./menubar.context";
import { MenubarContent, MenubarMenu, MenubarTrigger } from "./menubar.parts";
import { menubarRecipe } from "./menubar.recipe";
import { MenubarSurface } from "./menubar.surface";
import { createMenubarController } from "./use-menubar";

export type MenubarRootProps = MenuRootProps & {
  "aria-label": string;
  class?: string;
  style?: JSX.CSSProperties;
};

export function MenubarRoot(props: MenubarRootProps) {
  const [local, rest] = splitProps(props, ["aria-label", "class", "style", "children"]);
  return (
    <MenuRoot {...rest}>
      <Ark.Context>
        {(api) => {
          let element: HTMLDivElement | undefined;
          const controller = createMenubarController(api, () => element);
          return (
            <MenubarContext.Provider value={controller}>
              <div
                ref={element}
                role="menubar"
                aria-label={local["aria-label"]}
                aria-orientation="horizontal"
                class={menubarRecipe({ class: local.class })}
                style={local.style}
              >
                {local.children}
              </div>
              <MenubarSurface />
            </MenubarContext.Provider>
          );
        }}
      </Ark.Context>
    </MenuRoot>
  );
}

export const Menubar = {
  Root: MenubarRoot,
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Content: MenubarContent,
  Item: MenuItem,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Separator: MenuSeparator,
  SubRoot: MenuRoot,
  SubTrigger: MenuSubTrigger,
  SubContent: MenuContent,
  Context: Ark.Context,
};
