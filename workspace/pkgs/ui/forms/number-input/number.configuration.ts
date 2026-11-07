import { compareDecimals, normalizeDecimal } from "./decimal";
import type { NumberFormatOptions } from "./number.types";

export const numberFormatLimits = Object.freeze({ integerDigits: 128, fractionDigits: 100 });

function digitOption(value: unknown, fallback: number, maximum: number, minimum = 0) {
  const result = value === undefined ? fallback : value;
  if (typeof result !== "number" || !Number.isInteger(result)) {
    throw new TypeError("Digit counts must be integers.");
  }
  if (result < minimum || result > maximum) {
    throw new RangeError(`Digit counts must be between ${minimum} and ${maximum}.`);
  }
  return result;
}

function bound(value: unknown) {
  if (value === undefined) return undefined;
  if (typeof value !== "string" || value.length > 230) {
    throw new TypeError("Bounds must be canonical decimal strings within the digit limits.");
  }
  const normalized = normalizeDecimal(value);
  if (normalized === undefined) throw new TypeError("Bounds must be canonical decimal strings.");
  return normalized;
}

function booleanOption(value: unknown, fallback: boolean) {
  if (value === undefined) return fallback;
  if (typeof value !== "boolean") throw new TypeError("Number flags must be booleans.");
  return value;
}

export function numberConfiguration(options: NumberFormatOptions = {}) {
  const minimumFractionDigits = digitOption(options.minimumFractionDigits, 0, 100);
  const maximumFractionDigits = digitOption(
    options.maximumFractionDigits,
    Math.max(6, minimumFractionDigits),
    100,
  );
  if (minimumFractionDigits > maximumFractionDigits) {
    throw new RangeError("Minimum fraction digits must not exceed maximum fraction digits.");
  }
  const maximumIntegerDigits = digitOption(options.maximumIntegerDigits, 30, 128, 1);
  const min = bound(options.min);
  const max = bound(options.max);
  if (min !== undefined && max !== undefined && compareDecimals(min, max) > 0) {
    throw new RangeError("Minimum must not exceed maximum.");
  }
  const locale = options.locale ?? "en-US";
  if (typeof locale !== "string" || !locale) throw new TypeError("Locale must be nonempty.");
  if (!Intl.NumberFormat.supportedLocalesOf([locale]).length) {
    throw new RangeError("Unsupported number locale.");
  }
  const integerFormat = new Intl.NumberFormat(locale, {
    numberingSystem: "latn",
    useGrouping: booleanOption(options.useGrouping, true),
    maximumFractionDigits: 0,
  });
  const parts = new Intl.NumberFormat(locale, { numberingSystem: "latn" }).formatToParts(-1234.5);
  if (
    parts.some((part) => part.type === "literal") ||
    parts.find((part) => part.type === "minusSign")?.value !== "-"
  ) {
    throw new RangeError(
      "This first version supports locales with Latin digits and a plain minus sign.",
    );
  }
  return {
    integerFormat,
    minimumFractionDigits,
    maximumFractionDigits,
    maximumIntegerDigits,
    min,
    max,
    allowNegative: booleanOption(options.allowNegative, true),
    decimal: parts.find((part) => part.type === "decimal")?.value ?? ".",
    group: integerFormat.formatToParts(12345).find((part) => part.type === "group")?.value ?? "",
  };
}

/** Throws TypeError or RangeError for invalid backend-supplied configuration. */
export function validateNumberFormatOptions(
  options: unknown,
): asserts options is NumberFormatOptions {
  if (typeof options !== "object" || options === null || Array.isArray(options)) {
    throw new TypeError("Number configuration must be an object.");
  }
  numberConfiguration(options);
}

export type NumberConfiguration = ReturnType<typeof numberConfiguration>;
