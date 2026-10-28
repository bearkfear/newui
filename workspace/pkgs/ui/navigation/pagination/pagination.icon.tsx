const paths = {
  previous: "m15 6-6 6 6 6",
  next: "m9 6 6 6-6 6",
} as const;

export function PaginationIcon(props: { name: keyof typeof paths }) {
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
      style={{ display: "block", "flex-shrink": "0" }}
    >
      <path d={paths[props.name]} />
    </svg>
  );
}
