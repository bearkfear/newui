import { Archive, ChevronDown, Copy, ExternalLink, Trash2 } from "lucide-solid";
import { Dynamic } from "solid-js/web";

const icons = {
  chevron: ChevronDown,
  open: ExternalLink,
  duplicate: Copy,
  archive: Archive,
  delete: Trash2,
} as const;

export function MenuIcon(props: { name: keyof typeof icons }) {
  return (
    <Dynamic
      component={icons[props.name]}
      size={16}
      aria-hidden="true"
      style={{ "flex-shrink": "0" }}
    />
  );
}
