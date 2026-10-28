import { Pagination as ArkPagination } from "@ark-ui/solid/pagination";
import { mergeProps, splitProps } from "solid-js";
import { usePaginationStyles } from "./pagination.context";
import { PaginationIcon } from "./pagination.icon";

export type PaginationItemProps = ArkPagination.ItemProps;
export type PaginationEllipsisProps = ArkPagination.EllipsisProps;
export type PaginationPrevTriggerProps = ArkPagination.PrevTriggerProps;
export type PaginationNextTriggerProps = ArkPagination.NextTriggerProps;

export function PaginationItem(props: PaginationItemProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = usePaginationStyles();
  return <ArkPagination.Item {...rest} class={styles().control({ class: local.class })} />;
}

export function PaginationEllipsis(props: PaginationEllipsisProps) {
  const [local, rest] = splitProps(
    mergeProps({ children: "…", "aria-hidden": true as const }, props),
    ["class"],
  );
  const styles = usePaginationStyles();
  return <ArkPagination.Ellipsis {...rest} class={styles().ellipsis({ class: local.class })} />;
}

export function PaginationPrevTrigger(props: PaginationPrevTriggerProps) {
  const styles = usePaginationStyles();
  const [local, rest] = splitProps(
    mergeProps(
      {
        get children() {
          return (
            <>
              <PaginationIcon name="previous" />
              <span class={styles().label()}>Previous</span>
            </>
          );
        },
      },
      props,
    ),
    ["class"],
  );
  return <ArkPagination.PrevTrigger {...rest} class={styles().control({ class: local.class })} />;
}

export function PaginationNextTrigger(props: PaginationNextTriggerProps) {
  const styles = usePaginationStyles();
  const [local, rest] = splitProps(
    mergeProps(
      {
        get children() {
          return (
            <>
              <span class={styles().label()}>Next</span>
              <PaginationIcon name="next" />
            </>
          );
        },
      },
      props,
    ),
    ["class"],
  );
  return <ArkPagination.NextTrigger {...rest} class={styles().control({ class: local.class })} />;
}
