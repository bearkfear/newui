import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Sheet } from "../sheet";
import type { SheetContentProps } from "../sheet.content";
import { ProjectSheetContent } from "./project-sheet-content";

export interface SheetExampleProps {
  side?: SheetContentProps["side"];
  size?: SheetContentProps["size"];
  modal?: boolean;
  closeOnEscape?: boolean;
  closeOnInteractOutside?: boolean;
}

export function SheetExample(props: SheetExampleProps) {
  const [watching, setWatching] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <Sheet.Root
        modal={props.modal}
        closeOnEscape={props.closeOnEscape}
        closeOnInteractOutside={props.closeOnInteractOutside}
      >
        <Sheet.Trigger
          asChild={(triggerProps) => <Button {...triggerProps()}>View project details</Button>}
        />
        <ProjectSheetContent
          side={props.side}
          size={props.size}
          watching={watching()}
          onToggleWatching={() => setWatching(!watching())}
        />
      </Sheet.Root>
      <Text size="7" tone="muted">
        Project preferences stay available after closing and reopening.
      </Text>
      <Button tone="neutral" variant="outline" size="sm">
        Another page action
      </Button>
    </div>
  );
}
