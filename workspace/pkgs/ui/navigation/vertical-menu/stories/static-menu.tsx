import { VerticalMenu } from "../vertical-menu";

export function StaticMenu() {
  return (
    <div style={{ "max-width": "18rem" }}>
      <VerticalMenu.Root aria-label="Documentation">
        <VerticalMenu.Group>
          <VerticalMenu.Label>Documentation</VerticalMenu.Label>
          <VerticalMenu.List>
            <VerticalMenu.Item>
              <VerticalMenu.Link
                href="?path=/story/getting-started-introduction--overview"
                target="_top"
                current
              >
                Introduction
              </VerticalMenu.Link>
            </VerticalMenu.Item>
            <VerticalMenu.Item>
              <VerticalMenu.Link href="?path=/docs/actions-button--documentation" target="_top">
                Components
              </VerticalMenu.Link>
              <VerticalMenu.SubList>
                <VerticalMenu.Item>
                  <VerticalMenu.Link href="?path=/docs/actions-button--documentation" target="_top">
                    Button
                  </VerticalMenu.Link>
                </VerticalMenu.Item>
                <VerticalMenu.Item>
                  <VerticalMenu.Link href="?path=/docs/content-text--documentation" target="_top">
                    Typography
                  </VerticalMenu.Link>
                </VerticalMenu.Item>
              </VerticalMenu.SubList>
            </VerticalMenu.Item>
          </VerticalMenu.List>
        </VerticalMenu.Group>
      </VerticalMenu.Root>
    </div>
  );
}
