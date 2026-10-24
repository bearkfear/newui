import { Collapsible, useCollapsibleContext } from "@ark-ui/solid/collapsible";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { NavigationChevron } from "../navigation-icons";
import { useVerticalMenuStyles } from "./vertical-menu.context";

export type VerticalMenuBranchProps = Omit<Collapsible.RootProps, "asChild" | "ref"> & {
  ref?: JSX.HTMLAttributes<HTMLLIElement>["ref"];
};

export function VerticalMenuBranch(props: VerticalMenuBranchProps) {
  const [local, rest] = splitProps(props, ["class", "ref"]);
  const styles = useVerticalMenuStyles();
  return (
    <Collapsible.Root
      {...rest}
      class={styles().branch({ class: local.class })}
      asChild={(branchProps) => <li {...branchProps()} ref={local.ref} />}
    />
  );
}
export function VerticalMenuBranchTrigger(props: Collapsible.TriggerProps) {
  const collapsible = useCollapsibleContext();
  const [local, rest] = splitProps(props, ["class", "children", "disabled"]);
  const styles = useVerticalMenuStyles();
  return (
    <Collapsible.Trigger
      {...rest}
      disabled={collapsible().disabled || local.disabled}
      class={styles().branchTrigger({ class: local.class })}
    >
      {local.children}
      <Collapsible.Indicator
        class={styles().branchIndicator()}
        asChild={(indicatorProps) => (
          <span {...indicatorProps()}>
            <NavigationChevron />
          </span>
        )}
      />
    </Collapsible.Trigger>
  );
}
export function VerticalMenuBranchContent(props: Collapsible.ContentProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useVerticalMenuStyles();
  return <Collapsible.Content {...rest} class={styles().branchContent({ class: local.class })} />;
}
