import { GroupedLinks, ResourceLinks } from "../../navigation-menu/stories/resource-links";
import type { NavigationModel } from "../../stories/navigation-model";
import { Navbar } from "../navbar";

export function NavbarLinks(props: { model: NavigationModel; grouped?: boolean | undefined }) {
  const href = () => `#${props.model.targetId}`;
  return (
    <Navbar.List>
      <Navbar.Item value="overview">
        <Navbar.Link
          href={href()}
          current={props.model.current() === "overview"}
          onSelect={() => props.model.select("overview")}
        >
          Overview
        </Navbar.Link>
      </Navbar.Item>
      <Navbar.Item value="resources">
        <Navbar.MenuTrigger>Resources</Navbar.MenuTrigger>
        <Navbar.MenuContent layout={props.grouped ? "wide" : "simple"}>
          {props.grouped ? (
            <GroupedLinks model={props.model} />
          ) : (
            <ResourceLinks model={props.model} />
          )}
        </Navbar.MenuContent>
      </Navbar.Item>
      <Navbar.Item value="changelog">
        <Navbar.Link
          href={href()}
          current={props.model.current() === "changelog"}
          onSelect={() => props.model.select("changelog")}
        >
          Changelog
        </Navbar.Link>
      </Navbar.Item>
      <Navbar.Item value="coming-soon" disabled>
        <Navbar.MenuTrigger>Coming soon</Navbar.MenuTrigger>
        <Navbar.MenuContent>Not available yet.</Navbar.MenuContent>
      </Navbar.Item>
    </Navbar.List>
  );
}
