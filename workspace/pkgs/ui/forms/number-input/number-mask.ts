import { MaskedNumber } from "imask";
import { normalizeDecimal } from "./decimal";
import type { NumberConfiguration } from "./number.configuration";
import type { NumberValueDetails } from "./number.types";
import { decimalReason, formatDecimal, groupInteger, parseLocalizedNumber } from "./number-format";

/** IMask owns cursor, selection, composition and history; decimal values stay strings. */
export class DecimalMask extends MaskedNumber {
  declare configuration: NumberConfiguration;

  constructor(configuration: NumberConfiguration) {
    super({
      radix: configuration.decimal,
      thousandsSeparator: configuration.group,
      mapToRadix: [],
      scale: configuration.maximumFractionDigits,
      min: configuration.allowNegative ? -Infinity : 0,
      max: Infinity,
      // Disable IMask's numeric comparison path. Bounds are compared as decimal strings.
      // typedValue/number are deliberately unused by this adapter.
      parse: () => 0,
      normalizeZeros: true,
      padFractionalZeros: configuration.minimumFractionDigits > 0,
      validate: (value) => {
        const integer = value.replace(/^-/, "").split(configuration.decimal)[0] ?? "";
        const digits = configuration.group ? integer.split(configuration.group).join("") : integer;
        return digits.length <= configuration.maximumIntegerDigits;
      },
    });
    this.configuration = configuration;
  }

  override _insertThousandsSeparators(value: string) {
    const config = this.configuration;
    if (!config || !value || !/\d/.test(value)) return value;
    const [integer = "", fraction] = value.replace(/^-/, "").split(config.decimal);
    const grouped = groupInteger(integer, config);
    return `${value.startsWith("-") ? "-" : ""}${grouped}${fraction === undefined ? "" : config.decimal + fraction}`;
  }

  override _padFractionalZeros(value: string) {
    const [integer = "", fraction = ""] = value.split(this.radix);
    return `${integer}${this.radix}${fraction.padEnd(this.configuration.minimumFractionDigits, "0")}`;
  }

  override doCommit() {
    if (!/\d/.test(this.value)) this._value = "";
    super.doCommit();
    if (normalizeDecimal(this.unmaskedValue) === "0") this._value = this._value.replace(/^-/, "");
  }

  override get unmaskedValue() {
    return super.unmaskedValue;
  }

  override set unmaskedValue(value: string) {
    // IMask history stores canonical dots, regardless of the displayed radix.
    super.unmaskedValue = value.replace(".", this.radix);
  }
}

export function canonicalInput(value: string, config: NumberConfiguration) {
  if (value === "") return "";
  if (value.length > 230) throw new RangeError("Number exceeds the supported digit limits.");
  const normalized = normalizeDecimal(value);
  if (normalized === undefined)
    throw new TypeError("Input values must be canonical decimal strings.");
  const reason = decimalReason(normalized, config);
  if (reason && reason !== "range")
    throw new RangeError(`Input violates the ${reason} constraint.`);
  return formatDecimal(normalized, config);
}

export function readNumberValue(mask: DecimalMask): NumberValueDetails {
  const formattedValue = mask.value;
  if (!formattedValue) return { rawValue: "", formattedValue, status: "empty" };
  const config = mask.configuration;
  let text = formattedValue;
  const incomplete = !/\d/.test(text) || text.endsWith(config.decimal);
  if (text.endsWith(config.decimal)) text = text.slice(0, -config.decimal.length);
  if (!/\d/.test(text)) return { rawValue: "", formattedValue, status: "incomplete" };
  if (text.startsWith(config.decimal)) text = `0${text}`;
  if (text.startsWith(`-${config.decimal}`)) text = text.replace("-", "-0");
  const result = parseLocalizedNumber(text, { ...config, min: undefined, max: undefined });
  if (result.status !== "valid")
    return { rawValue: "", formattedValue, status: "invalid", reason: "syntax" };
  const reason = decimalReason(result.value, config);
  return {
    rawValue: result.value,
    formattedValue,
    status: reason ? "invalid" : incomplete ? "incomplete" : "valid",
    ...(reason ? { reason } : {}),
  };
}
