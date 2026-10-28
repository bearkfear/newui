import { createUniqueId, For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { TransactionIcon } from "./transaction-icon";

type PaginationProps = {
  page: number;
  pages: number;
  pageSize: number;
  onPage: (page: number) => void;
  onPageSize: (size: number) => void;
};

export function TransactionPagination(props: PaginationProps) {
  const sizeId = createUniqueId();
  const controls = () => [
    { icon: "first" as const, label: "First page", page: 0, disabled: props.page === 0 },
    {
      icon: "previous" as const,
      label: "Previous page",
      page: props.page - 1,
      disabled: props.page === 0,
    },
    {
      icon: "next" as const,
      label: "Next page",
      page: props.page + 1,
      disabled: props.page >= props.pages - 1,
    },
    {
      icon: "last" as const,
      label: "Last page",
      page: props.pages - 1,
      disabled: props.page >= props.pages - 1,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        "flex-wrap": "wrap",
        "align-items": "center",
        "justify-content": "flex-end",
        gap: "1rem",
        width: "100%",
      }}
    >
      <label
        for={sizeId}
        style={{
          display: "flex",
          "align-items": "center",
          gap: "0.5rem",
          color: "var(--nui-muted-foreground)",
          "font-size": "0.875rem",
        }}
      >
        Rows per page
        <select
          id={sizeId}
          value={props.pageSize}
          onChange={(event) => props.onPageSize(Number(event.currentTarget.value))}
          style={{
            background: "var(--nui-background)",
            color: "var(--nui-foreground)",
            border: "1px solid var(--nui-control-border)",
            "border-radius": "0.5rem",
            padding: "0.375rem 0.5rem",
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label>
      <Text size="7" tone="muted" role="status">
        Page {props.page + 1} of {props.pages}
      </Text>
      <nav aria-label="Transaction pages" style={{ display: "flex", gap: "0.5rem" }}>
        <For each={controls()}>
          {(control) => (
            <Button
              size="sm"
              iconOnly
              tone="neutral"
              variant="outline"
              aria-label={control.label}
              disabled={control.disabled}
              onClick={() => props.onPage(control.page)}
            >
              <TransactionIcon name={control.icon} />
            </Button>
          )}
        </For>
      </nav>
    </div>
  );
}
