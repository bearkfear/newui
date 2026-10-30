import { createMemo, createSignal } from "solid-js";
import { initialOrders, type Order } from "./orders-data";
import { downloadCsv, type Notify } from "./page-parts";

export function useOrders(notify: Notify) {
  const [orders, setOrders] = createSignal(initialOrders);
  const [filter, setFilter] = createSignal("All");
  const [page, setPage] = createSignal(1);
  const [selected, setSelected] = createSignal<string>();
  const filtered = createMemo(() =>
    orders().filter((order) => filter() === "All" || order.status === filter()),
  );
  const visible = () => filtered().slice((page() - 1) * 5, page() * 5);
  const update = (id: string, status: Order["status"]) => {
    setOrders((rows) => rows.map((order) => (order.id === id ? { ...order, status } : order)));
    setPage(1);
    notify(status === "Paid" ? "Payment recorded" : "Order canceled", id);
  };
  const changeFilter = (value: string) => {
    setFilter(value);
    setPage(1);
  };
  const exportOrders = () => {
    downloadCsv("orders.csv", [
      ["Order", "Customer", "Amount (USD)", "Status"],
      ...filtered().map((row) => [row.id, row.customer, row.total, row.status]),
    ]);
    notify("Orders exported", `${filtered().length} orders in your current view.`);
  };
  return {
    orders,
    filter,
    page,
    selected,
    filtered,
    visible,
    update,
    changeFilter,
    setPage,
    setSelected,
    exportOrders,
  };
}

export type OrdersState = ReturnType<typeof useOrders>;
