import { RecordFooter } from "../../../navigation/pagination/stories/record-footer";

type PaginationProps = {
  page: number;
  count: number;
  pageSize: number;
  onPage: (page: number) => void;
  onPageSize: (size: number) => void;
};

export function TransactionPagination(props: PaginationProps) {
  return (
    <RecordFooter
      itemLabel="transaction types"
      navigationLabel="Transaction pages"
      count={props.count}
      page={props.page + 1}
      pageSize={props.pageSize}
      onPage={(page) => props.onPage(page - 1)}
      onPageSize={props.onPageSize}
    />
  );
}
