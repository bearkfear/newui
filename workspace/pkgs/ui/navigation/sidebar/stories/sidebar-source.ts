export const sidebarSource = `import { Folder, Layers } from "lucide-solid";
import { Sidebar, VerticalMenu } from "newui";
import "newui/styles.css";

<Sidebar.Root resizable defaultWidth={256} minWidth={216} maxWidth={360}
  style={{ height: "40rem" }}>
  <Sidebar.Panel aria-label="Workspace sidebar">
    <Sidebar.Header>
      <Layers aria-hidden="true" />
      <Sidebar.Label>Acme Studio</Sidebar.Label>
    </Sidebar.Header>
    <Sidebar.Body>
      <VerticalMenu.Root aria-label="Workspace navigation">
        <VerticalMenu.Group>
          <Sidebar.Expanded><VerticalMenu.Label>Workspace</VerticalMenu.Label></Sidebar.Expanded>
          <VerticalMenu.List>
            <VerticalMenu.Item>
              <VerticalMenu.Link href="/projects" current>
                <VerticalMenu.Icon><Folder /></VerticalMenu.Icon>
                <Sidebar.Label>Projects</Sidebar.Label>
              </VerticalMenu.Link>
            </VerticalMenu.Item>
          </VerticalMenu.List>
        </VerticalMenu.Group>
      </VerticalMenu.Root>
    </Sidebar.Body>
    <Sidebar.Footer><Sidebar.Label>Account</Sidebar.Label></Sidebar.Footer>
  </Sidebar.Panel>
  <Sidebar.Main>
    <header><Sidebar.Toggle /></header>
    <section style={{ padding: "1.5rem" }}>Page content</section>
  </Sidebar.Main>
</Sidebar.Root>`;
