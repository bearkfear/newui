import { ChevronLeft, ChevronRight } from "lucide-solid";
import { Dynamic } from "solid-js/web";

const icons = {
  previous: ChevronLeft,
  next: ChevronRight,
} as const;

export function PaginationIcon(props: { name: keyof typeof icons }) {
  return (
    <Dynamic
      component={icons[props.name]}
      size={16}
      aria-hidden="true"
      style={{ display: "block", "flex-shrink": "0" }}
    />
  );
}
