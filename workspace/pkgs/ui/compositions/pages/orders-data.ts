export type Order = {
  id: string;
  customer: string;
  email: string;
  item: string;
  total: number;
  status: "Paid" | "Pending" | "Canceled";
};

const customers = [
  ["Olivia Rhye", "olivia@example.com"],
  ["Phoenix Baker", "phoenix@example.com"],
  ["Lana Steiner", "lana@example.com"],
  ["Demi Wilkinson", "demi@example.com"],
  ["Drew Cano", "drew@example.com"],
  ["Natali Craig", "natali@example.com"],
  ["Orlando Diggs", "orlando@example.com"],
  ["Andi Lane", "andi@example.com"],
  ["Kate Morrison", "kate@example.com"],
  ["Jamie Lee", "jamie@example.com"],
  ["Alex Morgan", "alex@example.com"],
  ["Sam Rivera", "sam@example.com"],
] as const;

export const initialOrders: Order[] = customers.map(([customer, email], index) => ({
  id: `ORD-${1048 - index}`,
  customer,
  email,
  item: index % 3 === 0 ? "Studio annual plan" : "Team monthly plan",
  total: index % 3 === 0 ? 960 : 89,
  status: index % 4 === 0 ? "Pending" : "Paid",
}));

export const orderMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export function orderTone(status: Order["status"]) {
  if (status === "Paid") return "success";
  return status === "Pending" ? "warning" : "neutral";
}
