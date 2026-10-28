import { Button } from "../../../actions/button/button";
import { Panel } from "../panel";

const inputStyle = {
  display: "block",
  width: "100%",
  "min-width": "0",
  padding: "0.375rem",
  border: "1px solid var(--nui-control-border)",
  "border-radius": "0.375rem",
  background: "var(--nui-background)",
  color: "var(--nui-foreground)",
};

export function TransactionEditor(props: {
  draft: string;
  onDraft: (value: string) => void;
  onSave: (name: string) => void;
  onCancel: () => void;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (props.draft.trim()) {
          props.onSave(props.draft.trim());
        }
      }}
    >
      <Panel.Row>
        <Panel.ItemContent>
          <label style={{ "font-size": "0.875rem", color: "var(--nui-muted-foreground)" }}>
            Transaction name
            <input
              value={props.draft}
              onInput={(event) => props.onDraft(event.currentTarget.value)}
              ref={(element) => queueMicrotask(() => element.focus())}
              required
              style={inputStyle}
            />
          </label>
        </Panel.ItemContent>
        <Panel.ItemActions>
          <Button size="sm" type="submit">
            Save
          </Button>
          <Button size="sm" variant="ghost" onClick={props.onCancel}>
            Cancel
          </Button>
        </Panel.ItemActions>
      </Panel.Row>
    </form>
  );
}
