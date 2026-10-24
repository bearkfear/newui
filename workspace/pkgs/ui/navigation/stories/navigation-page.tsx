import { Text } from "../../content/text/text";
import { Container } from "../../layout/container/container";
import { NavbarSample } from "../navbar/stories/navbar-example";
import { VerticalMenuSample } from "../vertical-menu/stories/vertical-menu-example";
import { createNavigationModel } from "./navigation-model";
import { NavigationPreview } from "./navigation-preview";

export function NavigationPage() {
  const model = createNavigationModel();
  return (
    <div>
      <NavbarSample model={model} />
      <Container>
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            gap: "32px",
            "align-items": "start",
            "padding-block": "32px",
          }}
        >
          <aside
            aria-label="Workspace sidebar"
            style={{ flex: "0 1 16rem", "min-width": "0", width: "100%" }}
          >
            <VerticalMenuSample model={model} variant="surface" />
          </aside>
          <main style={{ flex: "1 1 20rem", "min-width": "0" }}>
            <NavigationPreview model={model} />
            <Text size="7" tone="muted" style={{ padding: "0 32px 32px" }}>
              The navbar and sidebar share local page state in this example. Applications own their
              router.
            </Text>
          </main>
        </div>
      </Container>
    </div>
  );
}
