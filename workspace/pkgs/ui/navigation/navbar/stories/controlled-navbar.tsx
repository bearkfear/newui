import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { createNavigationModel } from "../../stories/navigation-model";
import { NavbarSample } from "./navbar-example";

export function ControlledNavbar() {
  const [open, setOpen] = createSignal(false);
  const model = createNavigationModel();
  return (
    <div>
      <NavbarSample model={model} open={open()} onOpenChange={(details) => setOpen(details.open)} />
      <div style={{ display: "grid", gap: "16px", padding: "24px" }}>
        <Text role="status" size="7">
          Mobile navigation is {open() ? "open" : "closed"}.
        </Text>
        <div>
          <Button size="sm" variant="outline" onClick={() => setOpen((value) => !value)}>
            Toggle mobile navigation externally
          </Button>
        </div>
      </div>
    </div>
  );
}
