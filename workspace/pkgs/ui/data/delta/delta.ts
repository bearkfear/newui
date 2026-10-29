export interface DeltaOptions {
  /** Signed percentage change. A value of 12.5 means +12.5%, not 0.125. */
  value: number;
  /** Set false for metrics such as costs, where decreases are favorable. */
  isPositiveGood?: boolean;
  valueFormat?: (value: number) => string;
}

const percent = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
  signDisplay: "exceptZero",
});

export function formatDelta(value: number) {
  return `${percent.format(value)}%`;
}

export function deltaDirection(value: number) {
  if (!Number.isFinite(value)) return "unavailable";
  if (value === 0) return "unchanged";
  return value > 0 ? "increase" : "decrease";
}

export function deltaTone(value: number, isPositiveGood = true) {
  if (!Number.isFinite(value) || value === 0) return "neutral";
  return value > 0 === isPositiveGood ? "success" : "danger";
}

export function deltaLabel(options: DeltaOptions) {
  if (!Number.isFinite(options.value)) return "Unavailable";
  return (options.valueFormat ?? formatDelta)(options.value);
}
