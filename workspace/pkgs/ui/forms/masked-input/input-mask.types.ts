/**
 * Custom mask token regex and optional transform. One token consumes one UTF-16 code unit;
 * a transform must return exactly one code unit. Global/sticky regex state is not used.
 */
export type InputMaskToken = {
  pattern: RegExp;
  transform?: (character: string) => string;
};

/** Null disables a default token, making its symbol a literal. */
export type InputMaskTokens = Readonly<Record<string, InputMaskToken | null>>;

/** Raw and formatted values plus pattern completeness emitted after accepted edits. */
export type InputMaskValueDetails = {
  rawValue: string;
  formattedValue: string;
  complete: boolean;
};

/**
 * Pattern string or ordered alternative list and optional token overrides for MaskedInput/helpers.
 * Built-in tokens are `#` (digit), `X` (ASCII alphanumeric), `S` (ASCII letter), `A` (uppercase),
 * and `a` (lowercase); `!` escapes the next literal. See textMaskLimits for configuration bounds.
 */
export type TextMaskOptions = {
  mask: string | readonly string[];
  tokens?: InputMaskTokens;
};

export type InputMaskOptions = TextMaskOptions & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (details: InputMaskValueDetails) => void;
};
