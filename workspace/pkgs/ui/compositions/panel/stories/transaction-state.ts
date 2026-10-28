import { createMemo, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { type TransactionType, transactionTypes } from "./transaction-types";

export function createTransactionRecords() {
  const [items, setItems] = createStore(transactionTypes.map((item) => ({ ...item })));
  const [page, setPage] = createSignal(0);
  const [pageSize, setPageSize] = createSignal(10);
  const [removed, setRemoved] = createSignal<TransactionType>();
  const pages = createMemo(() => Math.max(1, Math.ceil(items.length / pageSize())));
  const currentPage = () => Math.min(page(), pages() - 1);
  const remove = (item: TransactionType) => {
    setRemoved({ ...item });
    setItems(items.filter((value) => value.id !== item.id));
    setPage(currentPage());
  };
  const restore = () => {
    const item = removed();
    if (item) setItems([...items, item].sort((a, b) => a.id - b.id));
    setRemoved(undefined);
  };
  return {
    items: () => items,
    visible: () => items.slice(currentPage() * pageSize(), (currentPage() + 1) * pageSize()),
    page: currentPage,
    pages,
    pageSize,
    removed,
    remove,
    restore,
    onPage: setPage,
    onPageSize: (size: number) => {
      setPageSize(size);
      setPage(0);
    },
    rename: (id: number, name: string) => setItems((item) => item.id === id, "name", name),
  };
}
