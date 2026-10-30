import { ChevronLeft, ChevronRight } from "lucide-solid";
import { Show } from "solid-js";
import { Pagination, Panel } from "../../index";
import type { OrdersState } from "./orders-state";

export function OrdersFooter(props: { state: OrdersState }) {
  const count = () => props.state.filtered().length;
  const first = () => (count() === 0 ? 0 : (props.state.page() - 1) * 5 + 1);
  const last = () => Math.min(props.state.page() * 5, count());
  return (
    <Panel.Footer class="example-orders-footer">
      <div class="example-table-footer">
        <p role="status" aria-atomic="true">
          <Show when={count() > 0} fallback="No matching orders">
            <strong>
              {first()}–{last()}
            </strong>{" "}
            of <strong>{count()}</strong> orders
          </Show>
        </p>
        <Show when={count() > 5}>
          <Pagination.Root
            aria-label="Order pages"
            class="example-orders-pagination"
            count={count()}
            pageSize={5}
            page={props.state.page()}
            onPageChange={(details) => props.state.setPage(details.page)}
            size="sm"
          >
            <Pagination.PrevTrigger>
              <ChevronLeft size={16} aria-hidden="true" />
            </Pagination.PrevTrigger>
            <Pagination.Items />
            <Pagination.NextTrigger>
              <ChevronRight size={16} aria-hidden="true" />
            </Pagination.NextTrigger>
          </Pagination.Root>
        </Show>
      </div>
    </Panel.Footer>
  );
}
