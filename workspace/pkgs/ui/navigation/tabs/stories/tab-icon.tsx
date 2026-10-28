export type TabIconName = "inbox" | "bell" | "archive" | "calendar";

const paths: Record<TabIconName, string> = {
  calendar: "M5 5h14v16H5V5ZM5 10h14M8 3v4M16 3v4",
  inbox: "M4 4h16v16H4V4Zm0 9h5l1 3h4l1-3h5",
  bell: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4",
  archive: "M3 3h18v4H3V3Zm2 4v14h14V7M10 11h4",
};

export function TabIcon(props: { name: TabIconName }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      style={{ "flex-shrink": "0" }}
    >
      <path d={paths[props.name]} />
    </svg>
  );
}
