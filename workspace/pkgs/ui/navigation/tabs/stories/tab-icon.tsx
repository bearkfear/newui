import { Archive, Bell, Calendar, Inbox } from "lucide-solid";
import { Dynamic } from "solid-js/web";

const icons = {
  inbox: Inbox,
  bell: Bell,
  archive: Archive,
  calendar: Calendar,
} as const;

export type TabIconName = keyof typeof icons;

export function TabIcon(props: { name: TabIconName }) {
  return (
    <Dynamic
      component={icons[props.name]}
      size={16}
      aria-hidden="true"
      style={{ "flex-shrink": "0" }}
    />
  );
}
