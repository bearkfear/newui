export type NumberFormatOptions = {
  /** Explicit for consistent server/client output. Defaults to en-US. */
  locale?: string;
  useGrouping?: boolean;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  maximumIntegerDigits?: number;
  allowNegative?: boolean;
  /** Canonical decimal strings, independent of locale. */
  min?: string;
  max?: string;
};

export type NumberInvalidReason = "syntax" | "precision" | "negative" | "range";
export type NumberParseResult =
  | { status: "empty"; value: "" }
  | { status: "invalid"; reason: NumberInvalidReason }
  | { status: "valid"; value: string };

export type NumberValueDetails = {
  /** Canonical decimal, or empty while no complete number is present. */
  rawValue: string;
  formattedValue: string;
  /** Includes incomplete editing states such as a lone minus sign. */
  status: "empty" | "incomplete" | "valid" | "invalid";
  reason?: NumberInvalidReason;
};

export type NumberInputOptions = NumberFormatOptions & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (details: NumberValueDetails) => void;
};
