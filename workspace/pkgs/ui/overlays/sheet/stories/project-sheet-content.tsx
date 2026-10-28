import { Button } from "../../../actions/button/button";
import { Badge } from "../../../content/badge/badge";
import { Text } from "../../../content/text/text";
import { Sheet } from "../sheet";
import type { SheetContentProps } from "../sheet.content";

export type ProjectSheetContentProps = Pick<SheetContentProps, "side" | "size"> & {
  watching: boolean;
  onToggleWatching: () => void;
};

export function ProjectSheetContent(props: ProjectSheetContentProps) {
  return (
    <Sheet.Content side={props.side} size={props.size}>
      <Sheet.Header>
        <Sheet.Title>Website redesign</Sheet.Title>
        <Sheet.Description>Project details and team activity.</Sheet.Description>
        <Sheet.CloseTrigger />
      </Sheet.Header>
      <Sheet.Body>
        <div>
          <Badge tone="primary">In progress</Badge>
        </div>
        <Text>The team is reviewing the next milestone before sharing it with the workspace.</Text>
        <dl style={{ display: "grid", gap: "16px", margin: 0 }}>
          <div>
            <dt style={{ color: "var(--nui-muted-foreground)" }}>Owner</dt>
            <dd style={{ margin: 0 }}>Design team</dd>
          </div>
          <div>
            <dt style={{ color: "var(--nui-muted-foreground)" }}>Next milestone</dt>
            <dd style={{ margin: 0 }}>Review the updated navigation</dd>
          </div>
        </dl>
        <div>
          <Button
            variant="outline"
            tone="neutral"
            aria-pressed={props.watching}
            onClick={props.onToggleWatching}
          >
            {props.watching ? "Stop watching" : "Watch project"}
          </Button>
        </div>
        <Text role="status" size="7" tone="muted">
          {props.watching ? "You are watching this project." : "Project notifications are off."}
        </Text>
      </Sheet.Body>
      <Sheet.Footer>
        <Sheet.CloseTrigger asChild={(closeProps) => <Button {...closeProps()}>Done</Button>} />
      </Sheet.Footer>
    </Sheet.Content>
  );
}
