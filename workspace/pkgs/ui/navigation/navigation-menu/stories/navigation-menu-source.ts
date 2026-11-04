export const navigationMenuSource = `import { NavigationMenu as Menu } from "@egcs/newui";
import "@egcs/newui/styles.css";

<Menu.Root aria-label="Product navigation">
  <Menu.List>
    <Menu.Item value="home">
      <Menu.Link href="/" current>Home</Menu.Link>
    </Menu.Item>
    <Menu.Item value="resources">
      <Menu.Trigger>Resources</Menu.Trigger>
      <Menu.Content>
        <Menu.Link value="guides" href="/guides">
          Guides
          <Menu.Description>Learn the essentials.</Menu.Description>
        </Menu.Link>
        <Menu.Submenu>
          <Menu.SubmenuTrigger>Projects</Menu.SubmenuTrigger>
          <Menu.SubmenuContent aria-label="Projects">
            <Menu.Link value="website" href="/projects/website">Website</Menu.Link>
            <Menu.Submenu>
              <Menu.SubmenuTrigger>Design</Menu.SubmenuTrigger>
              <Menu.SubmenuContent aria-label="Design projects">
                <Menu.Link value="system" href="/projects/design-system">Design system</Menu.Link>
              </Menu.SubmenuContent>
            </Menu.Submenu>
          </Menu.SubmenuContent>
        </Menu.Submenu>
      </Menu.Content>
    </Menu.Item>
  </Menu.List>
</Menu.Root>`;

export const groupedNavigationSource = `<Menu.Item value="resources">
  <Menu.Trigger>Resources</Menu.Trigger>
  <Menu.Content layout="wide">
    <Menu.Group aria-labelledby="learn-label">
      <Menu.Label id="learn-label">Learn</Menu.Label>
      <Menu.Link value="guides" href="/guides">Guides</Menu.Link>
    </Menu.Group>
    <Menu.Group aria-labelledby="build-label">
      <Menu.Label id="build-label">Build</Menu.Label>
      <Menu.Link value="components" href="/components">Components</Menu.Link>
    </Menu.Group>
  </Menu.Content>
</Menu.Item>`;
