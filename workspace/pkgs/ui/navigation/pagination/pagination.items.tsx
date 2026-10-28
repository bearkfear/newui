import { usePaginationContext } from "@ark-ui/solid/pagination";
import { For, type JSX, Show, splitProps } from "solid-js";
import { usePaginationStyles } from "./pagination.context";
import { PaginationEllipsis, PaginationItem } from "./pagination.parts";

export type PaginationItemsProps = Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children">;

export function PaginationItems(props: PaginationItemsProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const api = usePaginationContext();
  const styles = usePaginationStyles();
  return (
    <span {...rest} class={styles().items({ class: local.class })}>
      <Show when={api().totalPages > 0} fallback={<span>No pages</span>}>
        <span class={styles().pages()}>
          <For each={api().pages}>
            {(page, index) =>
              page.type === "ellipsis" ? (
                <PaginationEllipsis index={index()} />
              ) : (
                <PaginationItem type="page" value={page.value}>
                  {page.value}
                </PaginationItem>
              )
            }
          </For>
        </span>
        <span class={styles().compactSummary()}>
          Page {api().page} of {api().totalPages}
        </span>
      </Show>
    </span>
  );
}
