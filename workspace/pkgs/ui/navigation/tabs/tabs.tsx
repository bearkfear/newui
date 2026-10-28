import { Tabs as ArkTabs } from "@ark-ui/solid/tabs";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { TabsStyles } from "./tabs.context";
import { TabsContent, TabsList, TabsTrigger } from "./tabs.parts";
import { tabsRecipe } from "./tabs.recipe";

export type TabsRootProps = Omit<ArkTabs.RootProps, "orientation"> &
  VariantProps<typeof tabsRecipe>;

export function TabsRoot(props: TabsRootProps) {
  const [local, rest] = splitProps(mergeProps({ lazyMount: true, unmountOnExit: false }, props), [
    "variant",
    "tone",
    "size",
    "align",
    "fullWidth",
    "class",
    "children",
  ]);
  const styles = () =>
    tabsRecipe({
      variant: local.variant,
      tone: local.tone,
      size: local.size,
      align: local.align,
      fullWidth: local.fullWidth,
    });
  return (
    <TabsStyles.Provider value={styles}>
      <ArkTabs.Root
        {...rest}
        orientation="horizontal"
        class={styles().root({ class: local.class })}
      >
        {local.children}
      </ArkTabs.Root>
    </TabsStyles.Provider>
  );
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Context: ArkTabs.Context,
};
