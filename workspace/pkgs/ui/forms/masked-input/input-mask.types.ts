export type InputMaskToken = {
  pattern: RegExp;
  transform?: (character: string) => string;
};

/** Null disables a default token, making its symbol a literal. */
export type InputMaskTokens = Readonly<Record<string, InputMaskToken | null>>;

export type InputMaskValueDetails = {
  rawValue: string;
  formattedValue: string;
  complete: boolean;
};

export type TextMaskOptions = {
  mask: string | readonly string[];
  tokens?: InputMaskTokens;
};

export type InputMaskOptions = TextMaskOptions & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (details: InputMaskValueDetails) => void;
};
