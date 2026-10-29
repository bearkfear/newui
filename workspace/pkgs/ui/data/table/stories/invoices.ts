export const invoices = [
  {
    id: "INV-1042",
    customer: "Acme Studio",
    status: "Paid",
    method: "Credit card",
    amount: "$250.00",
  },
  {
    id: "INV-1043",
    customer: "Northstar Labs",
    status: "Pending",
    method: "Bank transfer",
    amount: "$150.00",
  },
  {
    id: "INV-1044",
    customer: "Orbit Works",
    status: "Overdue",
    method: "Bank transfer",
    amount: "$350.00",
  },
  {
    id: "INV-1045",
    customer: "Pine & Paper",
    status: "Paid",
    method: "Credit card",
    amount: "$450.00",
  },
  { id: "INV-1046", customer: "Field Notes", status: "Paid", method: "PayPal", amount: "$550.00" },
] as const;

export const statusTones = { Paid: "success", Pending: "warning", Overdue: "danger" } as const;
