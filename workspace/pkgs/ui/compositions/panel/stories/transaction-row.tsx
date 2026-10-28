import { createSignal, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Panel } from "../panel";
import { TransactionEditor } from "./transaction-editor";
import { TransactionIcon } from "./transaction-icon";
import type { TransactionType } from "./transaction-types";

export function TransactionRow(props: {
  item: TransactionType;
  onRename: (name: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = createSignal(false);
  const [draft, setDraft] = createSignal(props.item.name);
  let editButton: HTMLButtonElement | undefined;
  const finish = () => {
    setEditing(false);
    editButton?.focus();
  };
  return (
    <Panel.Item>
      <Show
        when={editing()}
        fallback={
          <TransactionDisplay
            item={props.item}
            onEditRef={(element) => {
              editButton = element;
            }}
            onEdit={() => {
              setDraft(props.item.name);
              setEditing(true);
            }}
            onDelete={props.onDelete}
          />
        }
      >
        <TransactionEditor
          draft={draft()}
          onDraft={setDraft}
          onCancel={finish}
          onSave={(name) => {
            props.onRename(name);
            finish();
          }}
        />
      </Show>
    </Panel.Item>
  );
}

function TransactionDisplay(props: {
  item: TransactionType;
  onEdit: () => void;
  onDelete: () => void;
  onEditRef: (element: HTMLButtonElement) => void;
}) {
  return (
    <Panel.Row>
      <Panel.ItemContent>
        <Panel.ItemTitle>
          {props.item.name}{" "}
          <span style={{ color: "var(--nui-muted-foreground)" }}>#{props.item.id}</span>
        </Panel.ItemTitle>
        <Panel.ItemDescription>{props.item.description}</Panel.ItemDescription>
      </Panel.ItemContent>
      <Panel.ItemActions>
        <Button
          ref={props.onEditRef}
          size="sm"
          variant="outline"
          tone="neutral"
          iconOnly
          aria-label={`Edit ${props.item.name}`}
          onClick={props.onEdit}
        >
          <TransactionIcon name="edit" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          tone="danger"
          iconOnly
          aria-label={`Delete ${props.item.name}`}
          onClick={props.onDelete}
        >
          <TransactionIcon name="delete" />
        </Button>
      </Panel.ItemActions>
    </Panel.Row>
  );
}
