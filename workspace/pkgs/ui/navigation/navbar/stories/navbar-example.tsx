import { splitProps } from "solid-js";
import type { NavigationModel } from "../../stories/navigation-model";
import { createNavigationModel } from "../../stories/navigation-model";
import { NavigationPreview } from "../../stories/navigation-preview";
import type { NavbarRootProps } from "../navbar";
import { Navbar } from "../navbar";
import { NavbarLinks } from "./navbar-links";

export function NavbarSample(
  props: NavbarRootProps & { model: NavigationModel; grouped?: boolean | undefined },
) {
  const [local, rest] = splitProps(props, ["model", "grouped"]);
  return (
    <Navbar.Root {...rest}>
      <Navbar.Brand
        href={`#${local.model.targetId}`}
        onClick={() => local.model.select("overview")}
      >
        newui<span style={{ color: "var(--nui-primary-text)" }}>.</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Content>
        <NavbarLinks model={local.model} grouped={local.grouped} />
        <Navbar.Actions>
          <Navbar.Link
            value="settings"
            href={`#${local.model.targetId}`}
            current={local.model.current() === "settings"}
            onSelect={() => local.model.select("settings")}
          >
            Settings
          </Navbar.Link>
        </Navbar.Actions>
      </Navbar.Content>
    </Navbar.Root>
  );
}
export function NavbarExample(props: NavbarRootProps & { grouped?: boolean }) {
  const model = createNavigationModel();
  return (
    <div>
      <NavbarSample {...props} model={model} />
      <NavigationPreview model={model} />
    </div>
  );
}
