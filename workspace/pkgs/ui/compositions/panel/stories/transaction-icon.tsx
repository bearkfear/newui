import { Pencil, Trash2 } from "lucide-solid";
import { Dynamic } from "solid-js/web";

const icons = {
  edit: Pencil,
  delete: Trash2,
} as const;

export function TransactionIcon(props: { name: keyof typeof icons }) {
  return <Dynamic component={icons[props.name]} size={16} aria-hidden="true" />;
}
