export const headingSizes = [
  { size: "1", rem: "3rem" },
  { size: "2", rem: "2.5rem" },
  { size: "3", rem: "2rem" },
  { size: "4", rem: "1.5rem" },
  { size: "5", rem: "1.25rem" },
  { size: "6", rem: "1rem" },
] as const;
export const textSizes = [...headingSizes, { size: "7", rem: "0.75rem" }] as const;

export function TypographySizeLabel(props: { size: string; rem: string }) {
  return (
    <p
      style={{
        "font-size": "12px",
        "margin-block-end": "8px",
        color: "var(--nui-muted-foreground)",
      }}
    >
      Size {props.size} · {props.rem}
    </p>
  );
}
