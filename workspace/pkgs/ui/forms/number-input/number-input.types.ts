import type { InputProps } from "../input/input";
import type { NumberInputOptions } from "./number.types";

export type NumberInputProps = Omit<InputProps, "value" | "defaultValue" | "type" | "min" | "max"> &
  NumberInputOptions & {
    textAlign?: "left" | "center" | "right";
    /** Match MaskedInput: visible text by default, canonical string when raw. */
    submitValue?: "formatted" | "raw";
  };
