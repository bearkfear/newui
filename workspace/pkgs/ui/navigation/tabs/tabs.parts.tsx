import { Tabs as ArkTabs } from "@ark-ui/solid/tabs";
import { splitProps } from "solid-js";
import { useTabsStyles } from "./tabs.context";

export type TabsListProps = ArkTabs.ListProps;
export type TabsTriggerProps = ArkTabs.TriggerProps;
export type TabsContentProps = ArkTabs.ContentProps;

export function TabsList(props: TabsListProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTabsStyles();
  return <ArkTabs.List {...rest} class={styles().list({ class: local.class })} />;
}
export function TabsTrigger(props: TabsTriggerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTabsStyles();
  return <ArkTabs.Trigger {...rest} class={styles().trigger({ class: local.class })} />;
}
export function TabsContent(props: TabsContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTabsStyles();
  return <ArkTabs.Content {...rest} class={styles().content({ class: local.class })} />;
}
