import type { NumberConfiguration } from "./number.configuration";
import type { NumberInputOptions, NumberParseResult } from "./number.types";
import type { DecimalMask } from "./number-mask";

/** Internal specialization boundary for currency editing; not a public component API. */
export type NumberInputBehavior = {
  configuration?: (options: NumberInputOptions) => NumberConfiguration;
  createMask?: (configuration: NumberConfiguration) => DecimalMask;
  parsePaste?: (text: string) => NumberParseResult;
  pasteValue?: (value: string, configuration: NumberConfiguration) => string;
};
