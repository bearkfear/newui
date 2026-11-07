import { formatDecimal } from "../number-input/number-format";
import type { NumberInputBehavior } from "../number-input/number-input.behavior";
import { DecimalMask } from "../number-input/number-mask";
import type { currencyInputConfiguration } from "./currency.configuration";
import { parseCurrencyText } from "./currency-format";
import { decimalToMinorUnits, MinorUnitMask } from "./minor-unit-mask";

export function currencyInputBehavior(
  configuration: () => ReturnType<typeof currencyInputConfiguration>,
): NumberInputBehavior {
  return {
    configuration: () => configuration().number,
    createMask: (number) =>
      configuration().entryMode === "minor-unit"
        ? new MinorUnitMask(number)
        : new DecimalMask(number),
    parsePaste: (text) => {
      const config = configuration();
      return parseCurrencyText(text, {
        ...config,
        number: { ...config.number, min: undefined, max: undefined },
      });
    },
    pasteValue: (value, number) =>
      configuration().entryMode === "minor-unit"
        ? decimalToMinorUnits(value, number.maximumFractionDigits)
        : formatDecimal(value, { ...number, minimumFractionDigits: 0 }),
  };
}
