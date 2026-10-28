import { For, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Panel } from "../panel";
import { TransactionPagination } from "./transaction-pagination";
import { TransactionRow } from "./transaction-row";
import { createTransactionRecords } from "./transaction-state";
import type { TransactionType } from "./transaction-types";

export function TransactionPanel() {
  const records = createTransactionRecords();
  let header: HTMLDivElement | undefined;
  const remove = (item: TransactionType) => {
    records.remove(item);
    header?.focus();
  };
  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <Panel.Root tone="subtle" aria-label="Transaction types">
        <Panel.Header variant="soft" density="compact" ref={header} tabIndex={-1}>
          <Text size="6" tone="muted">
            {records.items().length} transaction types registered
          </Text>
        </Panel.Header>
        <Panel.List>
          <For each={records.visible()}>
            {(item) => (
              <TransactionRow
                item={item}
                onDelete={() => remove(item)}
                onRename={(name) => records.rename(item.id, name)}
              />
            )}
          </For>
        </Panel.List>
        <Panel.Footer>
          <TransactionPagination
            page={records.page()}
            count={records.items().length}
            pageSize={records.pageSize()}
            onPage={records.onPage}
            onPageSize={records.onPageSize}
          />
        </Panel.Footer>
      </Panel.Root>
      <Show when={records.removed()}>
        {(item) => (
          <div style={{ display: "flex", "align-items": "center", gap: "0.75rem" }}>
            <Text size="7" tone="muted" role="status">
              {item().name} removed from this demo.
            </Text>
            <Button size="sm" variant="ghost" onClick={records.restore}>
              Undo
            </Button>
          </div>
        )}
      </Show>
    </div>
  );
}
