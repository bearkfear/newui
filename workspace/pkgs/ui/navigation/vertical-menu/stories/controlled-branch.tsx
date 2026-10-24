import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { VerticalMenu } from "../vertical-menu";

export function ControlledBranch() {
  const [open, setOpen] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "24px", "max-width": "20rem" }}>
      <VerticalMenu.Root aria-label="Controlled project navigation" variant="surface">
        <VerticalMenu.List>
          <VerticalMenu.Branch open={open()} onOpenChange={(details) => setOpen(details.open)}>
            <VerticalMenu.BranchTrigger>Projects</VerticalMenu.BranchTrigger>
            <VerticalMenu.BranchContent>
              <VerticalMenu.SubList>
                <VerticalMenu.Item>
                  <VerticalMenu.Link
                    href="?path=/docs/compositions-panel--documentation"
                    target="_top"
                  >
                    Project panel
                  </VerticalMenu.Link>
                </VerticalMenu.Item>
              </VerticalMenu.SubList>
            </VerticalMenu.BranchContent>
          </VerticalMenu.Branch>
        </VerticalMenu.List>
      </VerticalMenu.Root>
      <Button size="sm" variant="outline" onClick={() => setOpen((value) => !value)}>
        Toggle projects externally
      </Button>
    </div>
  );
}
