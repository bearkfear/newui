import { Pagination, type PaginationRootProps } from "../pagination";

export function PaginationExample(props: PaginationRootProps) {
  return (
    <Pagination.Root {...props}>
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
  );
}
