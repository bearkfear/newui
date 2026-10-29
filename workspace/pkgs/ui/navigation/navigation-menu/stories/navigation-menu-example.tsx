import { splitProps } from "solid-js";
import { createNavigationModel } from "../../stories/navigation-model";
import { NavigationPreview } from "../../stories/navigation-preview";
import { NavigationMenu as Menu, type NavigationMenuRootProps } from "../navigation-menu";
import { GroupedLinks, ResourceLinks } from "./resource-links";

export function NavigationMenuExample(props: NavigationMenuRootProps & { wide?: boolean }) {
  const model = createNavigationModel();
  const [local, rest] = splitProps(props, ["wide"]);
  return (
    <div style={{ width: "100%", "max-width": "56rem" }}>
      <Menu.Root {...rest}>
        <Menu.List>
          <Menu.Item value="overview">
            <Menu.Link
              href={`#${model.targetId}`}
              current={model.current() === "overview"}
              onSelect={() => model.select("overview")}
            >
              Overview
            </Menu.Link>
          </Menu.Item>
          <Menu.Item value="resources">
            <Menu.Trigger>Resources</Menu.Trigger>
            <Menu.Content layout={local.wide ? "wide" : "simple"}>
              {local.wide ? <GroupedLinks model={model} /> : <ResourceLinks model={model} />}
            </Menu.Content>
          </Menu.Item>
          <Menu.Item value="changelog">
            <Menu.Link
              href={`#${model.targetId}`}
              current={model.current() === "changelog"}
              onSelect={() => model.select("changelog")}
            >
              Changelog
            </Menu.Link>
          </Menu.Item>
        </Menu.List>
      </Menu.Root>
      <NavigationPreview model={model} />
    </div>
  );
}
