import { createUniqueId } from "solid-js";
import { Text } from "../../../content/text/text";
import { PaginationExample } from "./pagination-example";
import { recordFooterRecipe } from "./record-footer.recipe";

type RecordFooterProps = {
  page: number;
  pageSize: number;
  count: number;
  itemLabel: string;
  navigationLabel: string;
  onPage: (page: number) => void;
  onPageSize: (size: number) => void;
};

const styles = recordFooterRecipe();

export function RecordFooter(props: RecordFooterProps) {
  const sizeId = createUniqueId();
  return (
    <footer class={styles.root()}>
      <div class={styles.details()}>
        <PaginationExample
          size="sm"
          aria-label={props.navigationLabel}
          class={styles.pagination()}
          style={{ "justify-content": "flex-start" }}
          count={props.count}
          page={props.page}
          pageSize={props.pageSize}
          onPageChange={(details) => props.onPage(details.page)}
        />
        <label for={sizeId} class={styles.label()}>
          Rows per page
          <span class={styles.field()}>
            <select
              id={sizeId}
              value={props.pageSize}
              class={styles.select()}
              onChange={(event) => props.onPageSize(Number(event.currentTarget.value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class={styles.icon()}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </label>
      </div>
      <Text size="7" tone="muted" role="status">
        Showing {props.count === 0 ? 0 : (props.page - 1) * props.pageSize + 1}–
        {Math.min(props.page * props.pageSize, props.count)} of {props.count} {props.itemLabel}
      </Text>
    </footer>
  );
}
