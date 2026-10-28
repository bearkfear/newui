const paths = {
  chevron: "m6 9 6 6 6-6",
  open: "M14 3h7v7m0-7L10 14M10 3H3v18h18v-7",
  duplicate: "M8 8h12v12H8V8ZM16 8V4H4v12h4",
  archive: "M3 3h18v4H3V3Zm2 4v14h14V7M9 11h6",
  delete: "M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7",
} as const;

export function MenuIcon(props: { name: keyof typeof paths }) {
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
