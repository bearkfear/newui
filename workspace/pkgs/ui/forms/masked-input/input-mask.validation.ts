import type { TextMaskOptions } from "./input-mask.types";

export const textMaskLimits = Object.freeze({
  maxPatternLength: 256,
  maxPatterns: 16,
  maxCustomTokens: 64,
});

function validatePattern(pattern: unknown) {
  if (typeof pattern !== "string" || !pattern.length) {
    throw new TypeError("Mask patterns must be nonempty strings.");
  }
  if (pattern.length > textMaskLimits.maxPatternLength) {
    throw new RangeError(
      `Mask patterns must not exceed ${textMaskLimits.maxPatternLength} characters.`,
    );
  }
  let escaped = false;
  for (const character of pattern) {
    escaped = !escaped && character === "!";
  }
  if (escaped) throw new TypeError("The mask escape symbol ! must precede a character.");
}

function validatePatterns(mask: unknown) {
  if (typeof mask === "string") return validatePattern(mask);
  if (!Array.isArray(mask)) throw new TypeError("Mask must be a string or an array of patterns.");
  if (!mask.length) throw new TypeError("Provide at least one mask pattern.");
  if (mask.length > textMaskLimits.maxPatterns) {
    throw new RangeError(`Provide no more than ${textMaskLimits.maxPatterns} mask patterns.`);
  }
  for (const pattern of mask) validatePattern(pattern);
}

function validateToken(symbol: string, token: unknown) {
  if (symbol.length !== 1 || symbol === "!") {
    throw new TypeError("Mask tokens must be single characters other than the escape symbol !.");
  }
  if (token === null) return;
  if (typeof token !== "object" || !("pattern" in token) || !(token.pattern instanceof RegExp)) {
    throw new TypeError("Each mask token must be null or an object with a RegExp pattern.");
  }
  if (
    "transform" in token &&
    token.transform !== undefined &&
    typeof token.transform !== "function"
  ) {
    throw new TypeError("Mask token transforms must be functions.");
  }
}

function validateTokens(tokens: unknown) {
  if (tokens === undefined) return;
  if (typeof tokens !== "object" || tokens === null || Array.isArray(tokens)) {
    throw new TypeError("Mask tokens must be an object.");
  }
  const entries: [string, unknown][] = Object.entries(tokens);
  if (entries.length > textMaskLimits.maxCustomTokens) {
    throw new RangeError(
      `Provide no more than ${textMaskLimits.maxCustomTokens} custom mask tokens.`,
    );
  }
  for (const [symbol, token] of entries) validateToken(symbol, token);
}

/** Validate backend-supplied configuration before rendering; throws TypeError or RangeError. */
export function validateTextMaskOptions(options: unknown): asserts options is TextMaskOptions {
  if (typeof options !== "object" || options === null || Array.isArray(options)) {
    throw new TypeError("Text mask configuration must be an object.");
  }
  validatePatterns("mask" in options ? options.mask : undefined);
  validateTokens("tokens" in options ? options.tokens : undefined);
}
