import { createSignal, For } from "solid-js";
import { RecordFooter } from "./record-footer";

const records = Array.from({ length: 137 }, (_, index) => `Design document ${index + 1}`);

export function PaginationRecords() {
  const [page, setPage] = createSignal(1);
  const [pageSize, setPageSize] = createSignal(10);
  return (
    <section style={{ display: "grid", gap: "1rem", "max-width": "48rem" }} aria-label="Documents">
      <ul style={{ margin: "0", padding: "0", "list-style": "none" }}>
        <For each={records.slice((page() - 1) * pageSize(), page() * pageSize())}>
          {(record) => (
            <li style={{ padding: "0.75rem", "border-bottom": "1px solid var(--nui-border)" }}>
              {record}
            </li>
          )}
        </For>
      </ul>
      <RecordFooter
        itemLabel="documents"
        navigationLabel="Document pages"
        count={records.length}
        page={page()}
        pageSize={pageSize()}
        onPage={setPage}
        onPageSize={(size) => {
          setPageSize(size);
          setPage(1);
        }}
      />
    </section>
  );
}
