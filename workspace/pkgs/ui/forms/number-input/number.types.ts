/**
 * Number formatting/parsing configuration. Locale controls display and separators; min/max remain
 * canonical decimal strings. Fraction limits and sign/range rules are validated before use.
 */
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

/** Distinguishes malformed syntax, excess precision, disallowed negatives, and range violations. */
export type NumberInvalidReason = "syntax" | "precision" | "negative" | "range";
/** Result of parsing a localized number string; invalid text is not coerced to zero. */
export type NumberParseResult =
  | { status: "empty"; value: "" }
  | { status: "invalid"; reason: NumberInvalidReason }
  | { status: "valid"; value: string };

/** Raw canonical and displayed values emitted while editing NumberInput or CurrencyInput. */
export type NumberValueDetails = {
  /** Canonical decimal, or empty while no complete number is present. */
  rawValue: string;
  formattedValue: string;
  /** Includes incomplete editing states such as a lone minus sign. */
  status: "empty" | "incomplete" | "valid" | "invalid";
  reason?: NumberInvalidReason;
};

/** Controlled `value`/`onValueChange` or one-time `defaultValue` options shared by numeric inputs. */
export type NumberInputOptions = NumberFormatOptions & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (details: NumberValueDetails) => void;
};
