const paths = {
  edit: "M12 4H5v16h14v-7M14 4l3-3 4 4-3 3M10 12l8-8 3 3-8 8-4 1 1-4Z",
  delete: "M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7",
} as const;

export function TransactionIcon(props: { name: keyof typeof paths }) {
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
    >
      <path d={paths[props.name]} />
    </svg>
  );
}
