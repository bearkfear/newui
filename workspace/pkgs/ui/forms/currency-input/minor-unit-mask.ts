import { type AppendFlags, DIRECTION, type Direction } from "imask";
import type { NumberConfiguration } from "../number-input/number.configuration";
import { groupInteger } from "../number-input/number-format";
import { DecimalMask } from "../number-input/number-mask";

/** Integer editing through IMask; the visible radix is an additional fixed separator. */
export class MinorUnitMask extends DecimalMask {
  constructor(configuration: NumberConfiguration) {
    super(configuration);
    this.updateOptions({
      scale: 0,
      padFractionalZeros: false,
      thousandsSeparator: configuration.group || configuration.decimal,
    });
  }

  override _appendCharRaw(character: string, flags: AppendFlags = {}) {
    const before = this.value;
    const details = super._appendCharRaw(character, flags);
    if (!/\d/.test(before) && /\d/.test(this.value)) {
      // Leading fractional zeros are decoration added with the first digit.
      details.tailShift += Math.max(0, this.value.length - before.length - details.offset);
    }
    return details;
  }

  override _removeThousandsSeparators(value: string) {
    const config = this.configuration;
    if (!config) return value;
    const ungrouped = config.group ? value.split(config.group).join("") : value;
    return ungrouped.split(config.decimal).join("");
  }

  override _insertThousandsSeparators(value: string) {
    const config = this.configuration;
    if (!config || !/\d/.test(value)) return value;
    const scale = config.maximumFractionDigits;
    const digits = value
      .replace(/^-/, "")
      .replace(/^0+(?=\d)/, "")
      .padStart(scale + 1, "0");
    const integer = scale ? digits.slice(0, -scale) : digits;
    const fraction = scale ? config.decimal + digits.slice(-scale) : "";
    return `${value.startsWith("-") ? "-" : ""}${groupInteger(integer, config)}${fraction}`;
  }

  override _normalizeZeros(value: string) {
    return this._insertThousandsSeparators(this._removeThousandsSeparators(value));
  }

  override doSkipInvalid() {
    // The visible decimal separator is fixed decoration, not a fractional input boundary.
    return Boolean(this.skipInvalid);
  }

  override splice(
    start: number,
    deleteCount: number,
    inserted = "",
    direction: Direction = DIRECTION.NONE,
    flags?: AppendFlags,
  ) {
    const deletingDigit = /\d/.test(this.value.slice(start, start + deleteCount));
    if (!inserted && deletingDigit && /^-?0+$/.test(this._removeThousandsSeparators(this.value))) {
      return super.splice(0, this.value.length, "", direction, flags);
    }
    return super.splice(start, deleteCount, inserted, direction, flags);
  }

  override _separatorsCount(to: number, extendOnSeparators = false) {
    let count = 0;
    for (let position = 0; position < to; position += 1) {
      if (this._findSeparatorAround(position) < 0) continue;
      count += 1;
      if (extendOnSeparators) to += 1;
    }
    return count;
  }

  override _findSeparatorAround(position: number) {
    const config = this.configuration;
    const character = this.value[position];
    return config && character && (character === config.decimal || character === config.group)
      ? position
      : -1;
  }

  override get unmaskedValue() {
    return this._removeThousandsSeparators(this.value);
  }

  override set unmaskedValue(value: string) {
    this.resolve(value);
  }
}

export function decimalToMinorUnits(value: string, scale: number) {
  const [integer = "0", fraction = ""] = value.replace(/^-/, "").split(".");
  const digits = (integer + fraction.padEnd(scale, "0")).replace(/^0+(?=\d)/, "");
  return `${value.startsWith("-") ? "-" : ""}${digits}`;
}
