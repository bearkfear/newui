import type { NavigationModel } from "../../stories/navigation-model";
import { Navbar } from "../navbar";

export function NavbarLinks(props: { model: NavigationModel }) {
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
        <Navbar.MenuContent>
          <Navbar.Link
            value="guides"
            href={href()}
            current={props.model.current() === "guides"}
            onSelect={() => props.model.select("guides")}
          >
            Guides
          </Navbar.Link>
          <Navbar.Link
            value="components"
            href={href()}
            current={props.model.current() === "components"}
            onSelect={() => props.model.select("components")}
          >
            Components
          </Navbar.Link>
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
