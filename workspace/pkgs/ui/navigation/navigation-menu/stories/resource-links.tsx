import type { NavigationModel } from "../../stories/navigation-model";
import { NavigationMenu as Menu } from "../navigation-menu";

export function ResourceLinks(props: { model: NavigationModel }) {
  const href = () => `#${props.model.targetId}`;
  return (
    <>
      <Menu.Link
        value="guides"
        href={href()}
        current={props.model.current() === "guides"}
        onSelect={() => props.model.select("guides")}
      >
        Guides<Menu.Description>Start here and learn the essentials.</Menu.Description>
      </Menu.Link>
      <Menu.Link
        value="components"
        href={href()}
        current={props.model.current() === "components"}
        onSelect={() => props.model.select("components")}
      >
        Components<Menu.Description>Explore the component catalog.</Menu.Description>
      </Menu.Link>
      <Menu.Submenu>
        <Menu.SubmenuTrigger>Projects</Menu.SubmenuTrigger>
        <Menu.SubmenuContent aria-label="Projects">
          <Menu.Link value="website" href={href()} onSelect={() => props.model.select("website")}>
            Website refresh
          </Menu.Link>
          <Menu.Submenu>
            <Menu.SubmenuTrigger>Design</Menu.SubmenuTrigger>
            <Menu.SubmenuContent aria-label="Design projects">
              <Menu.Link
                value="design"
                href={href()}
                current={props.model.current() === "design"}
                onSelect={() => props.model.select("design")}
              >
                Design system
              </Menu.Link>
              <Menu.Link
                value="research"
                href={href()}
                current={props.model.current() === "research"}
                onSelect={() => props.model.select("research")}
              >
                Customer research
              </Menu.Link>
            </Menu.SubmenuContent>
          </Menu.Submenu>
        </Menu.SubmenuContent>
      </Menu.Submenu>
    </>
  );
}

export function GroupedLinks(props: { model: NavigationModel }) {
  return (
    <>
      <Menu.Group aria-labelledby={`${props.model.targetId}-learn`}>
        <Menu.Label id={`${props.model.targetId}-learn`}>Learn and build</Menu.Label>
        <ResourceLinks model={props.model} />
      </Menu.Group>
      <Menu.Group aria-labelledby={`${props.model.targetId}-company`}>
        <Menu.Label id={`${props.model.targetId}-company`}>Workspace</Menu.Label>
        <Menu.Link
          value="changelog"
          href={`#${props.model.targetId}`}
          onSelect={() => props.model.select("changelog")}
        >
          Changelog<Menu.Description>See what has changed.</Menu.Description>
        </Menu.Link>
        <Menu.Link
          value="settings"
          href={`#${props.model.targetId}`}
          onSelect={() => props.model.select("settings")}
        >
          Settings<Menu.Description>Manage your workspace.</Menu.Description>
        </Menu.Link>
      </Menu.Group>
    </>
  );
}
