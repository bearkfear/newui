import { compareDecimals, normalizeDecimal } from "./decimal";
import { type NumberConfiguration, numberConfiguration } from "./number.configuration";
import type { NumberFormatOptions, NumberInvalidReason, NumberParseResult } from "./number.types";

export function decimalReason(
  value: string,
  config: NumberConfiguration,
): NumberInvalidReason | undefined {
  const [integer = "", fraction = ""] = value.replace(/^-/, "").split(".");
  if (
    integer.length > config.maximumIntegerDigits ||
    fraction.length > config.maximumFractionDigits
  )
    return "precision";
  if (!config.allowNegative && value.startsWith("-")) return "negative";
  if (
    (config.min !== undefined && compareDecimals(value, config.min) < 0) ||
    (config.max !== undefined && compareDecimals(value, config.max) > 0)
  )
    return "range";
  return undefined;
}

export function formatDecimal(value: string, config: NumberConfiguration): string {
  const [integer = "0", fraction = ""] = value.replace(/^-/, "").split(".");
  const grouped = config.integerFormat.format(BigInt(integer));
  const padded = fraction.padEnd(config.minimumFractionDigits, "0");
  return `${value.startsWith("-") ? "-" : ""}${grouped}${padded ? config.decimal + padded : ""}`;
}

/** Preserve leading zeros during editing while using the locale's actual grouping layout. */
export function groupInteger(digits: string, config: NumberConfiguration): string {
  if (!digits) return "";
  const parts = config.integerFormat.formatToParts(BigInt(`1${"0".repeat(digits.length - 1)}`));
  let position = 0;
  return parts
    .map((part) => {
      if (part.type !== "integer") return part.value;
      const chunk = digits.slice(position, position + part.value.length);
      position += part.value.length;
      return chunk;
    })
    .join("");
}

/** Format a canonical decimal string. Empty stays empty; invalid values throw. No rounding. */
export function formatNumber(value: string, options: NumberFormatOptions = {}): string {
  const config = numberConfiguration(options);
  if (value === "") return "";
  if (value.length > 230) throw new RangeError("Number exceeds the supported digit limits.");
  const normalized = normalizeDecimal(value);
  if (normalized === undefined) throw new TypeError("Expected a canonical decimal string.");
  const reason = decimalReason(normalized, config);
  if (reason) throw new RangeError(`Number violates the ${reason} constraint.`);
  return formatDecimal(normalized, config);
}

export function parseLocalizedNumber(text: string, config: NumberConfiguration): NumberParseResult {
  const source = text.trim();
  if (!source) return { status: "empty", value: "" };
  if (source.length > 512) return { status: "invalid", reason: "precision" };
  const negative = source.startsWith("-");
  const unsigned = negative ? source.slice(1) : source;
  const pieces = unsigned.split(config.decimal);
  const integer = pieces[0] ?? "";
  const fraction = pieces[1];
  if (pieces.length > 2 || (fraction !== undefined && !/^\d+$/.test(fraction))) {
    return { status: "invalid", reason: "syntax" };
  }
  const digits = config.group ? integer.split(config.group).join("") : integer;
  if (!/^\d+$/.test(digits)) return { status: "invalid", reason: "syntax" };
  if (config.group && integer.includes(config.group) && groupInteger(digits, config) !== integer) {
    return { status: "invalid", reason: "syntax" };
  }
  const canonical = `${negative ? "-" : ""}${digits}${fraction === undefined ? "" : `.${fraction}`}`;
  const value = normalizeDecimal(canonical);
  if (value === undefined) return { status: "invalid", reason: "syntax" };
  const reason = decimalReason(value, config);
  return reason ? { status: "invalid", reason } : { status: "valid", value };
}

/** Parse only the configured locale; never guess separators or coerce invalid input to zero. */
export function parseNumber(text: string, options: NumberFormatOptions = {}): NumberParseResult {
  return parseLocalizedNumber(text, numberConfiguration(options));
}
