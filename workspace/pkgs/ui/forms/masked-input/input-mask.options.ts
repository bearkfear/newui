import { MaskedDynamic, type MaskedDynamicOptions, type MaskedPatternOptions } from "imask";
import type { InputMaskTokens, TextMaskOptions } from "./input-mask.types";
import { validateTextMaskOptions } from "./input-mask.validation";

const defaultTokens: InputMaskTokens = {
  "#": { pattern: /[0-9]/ },
  X: { pattern: /[a-zA-Z0-9]/ },
  S: { pattern: /[a-zA-Z]/ },
  A: { pattern: /[a-zA-Z]/, transform: (character) => character.toUpperCase() },
  a: { pattern: /[a-zA-Z]/, transform: (character) => character.toLowerCase() },
};

const dispatchMask: MaskedDynamic["dispatch"] = (appended, dynamic, flags, tail) => {
  MaskedDynamic.DEFAULTS.dispatch(appended, dynamic, flags, tail);
  // Score editable tokens rather than pasted literals; ties prefer our shortest pattern.
  const accepted = Math.max(0, ...dynamic.compiledMasks.map((mask) => mask.unmaskedValue.length));
  return dynamic.compiledMasks.find((mask) => mask.unmaskedValue.length === accepted);
};

function compileTokens(custom: InputMaskTokens | undefined) {
  const symbols = new Map<string, string>();
  const definitions: NonNullable<MaskedPatternOptions["definitions"]> = {};
  for (const [symbol, token] of Object.entries({ ...defaultTokens, ...custom })) {
    if (!token) continue;
    const placeholder = String.fromCharCode(0xe000 + symbols.size);
    const pattern = new RegExp(token.pattern.source, token.pattern.flags.replace(/[gy]/g, ""));
    symbols.set(symbol, placeholder);
    definitions[placeholder] = {
      mask: pattern,
      prepareChar: (character: string) => {
        const transformed = token.transform?.(character) ?? character;
        return transformed.length === 1 ? transformed : "";
      },
    };
  }
  return { symbols, definitions };
}

function compilePattern(pattern: string, symbols: Map<string, string>) {
  let compiled = "";
  let escaped = false;
  for (const character of pattern) {
    if (!escaped && character === "!") {
      escaped = true;
      continue;
    }
    compiled += (!escaped && symbols.get(character)) || `\\${character}`;
    escaped = false;
  }
  return compiled;
}

export function inputMaskOptions(options: TextMaskOptions) {
  validateTextMaskOptions(options);
  const { symbols, definitions } = compileTokens(options.tokens);
  const patterns = typeof options.mask === "string" ? [options.mask] : [...options.mask];
  const masks: MaskedPatternOptions[] = patterns
    .sort((left, right) => left.length - right.length)
    .map((pattern) => ({
      mask: compilePattern(pattern, symbols),
      definitions,
      lazy: true,
      eager: "remove",
      overwrite: false,
      skipInvalid: true,
    }));
  return { mask: masks, dispatch: dispatchMask } satisfies MaskedDynamicOptions;
}
