import { createMediaQuery } from "@solid-primitives/media";
import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Sheet } from "../sheet";
import { ProjectSheetContent } from "./project-sheet-content";

export function ResponsiveSheet() {
  const desktop = createMediaQuery("(min-width: 48rem)");
  const [watching, setWatching] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <Sheet.Root>
        <Sheet.Trigger asChild={(props) => <Button {...props()}>Open responsive sheet</Button>} />
        <ProjectSheetContent
          side={desktop() ? "right" : "bottom"}
          watching={watching()}
          onToggleWatching={() => setWatching(!watching())}
        />
      </Sheet.Root>
      <Text size="7" tone="muted">
        Right panel from 48rem; bottom panel on smaller screens. The same root stays mounted.
      </Text>
    </div>
  );
}
