import { expect, test } from "@playwright/test";
import type { TextMaskOptions } from "../../../pkgs/ui/forms/masked-input/input-mask.types";
import {
  textMaskLimits,
  validateTextMaskOptions,
} from "../../../pkgs/ui/forms/masked-input/input-mask.validation";
import { maskText, unmaskText } from "../../../pkgs/ui/forms/masked-input/mask-text";

test("accepts definition boundaries and rejects values above them", () => {
  const maximum = "#".repeat(textMaskLimits.maxPatternLength);
  expect(maskText("1".repeat(maximum.length), { mask: maximum })).toHaveLength(maximum.length);
  expect(() => validateTextMaskOptions({ mask: `${maximum}#` })).toThrow(RangeError);
  const masks = Array.from({ length: textMaskLimits.maxPatterns }, () => "###");
  expect(() => validateTextMaskOptions({ mask: masks })).not.toThrow();
  expect(() => validateTextMaskOptions({ mask: [...masks, "###"] })).toThrow(RangeError);
});

test("bounds custom tokens and leaves exported limits immutable", () => {
  const tokens = Object.fromEntries(
    Array.from({ length: textMaskLimits.maxCustomTokens }, (_, index) => [
      String.fromCharCode(0xe000 + index),
      { pattern: /[0-9]/ },
    ]),
  );
  expect(() => validateTextMaskOptions({ mask: "###", tokens })).not.toThrow();
  expect(() => validateTextMaskOptions({ mask: "###", tokens: { ...tokens, "&": null } })).toThrow(
    RangeError,
  );
  expect(Object.isFrozen(textMaskLimits)).toBe(true);
});

const malformed: unknown[] = [
  null,
  [],
  "###",
  {},
  { mask: 42 },
  { mask: [] },
  { mask: "" },
  { mask: ["###", null] },
  { mask: "###!" },
  { mask: "###", tokens: null },
  { mask: "###", tokens: { "!": null } },
  { mask: "###", tokens: { AB: null } },
  { mask: "###", tokens: { "&": { pattern: "[0-9]" } } },
  { mask: "###", tokens: { "&": { pattern: /[0-9]/, transform: "uppercase" } } },
];

for (const [index, options] of malformed.entries()) {
  test(`rejects malformed backend configuration ${index + 1}`, () => {
    expect(() => validateTextMaskOptions(options)).toThrow(TypeError);
    expect(() => maskText("123", options as TextMaskOptions)).toThrow(TypeError);
    expect(() => unmaskText("123", options as TextMaskOptions)).toThrow(TypeError);
  });
}

test("helpers enforce the definition limit before compiling", () => {
  const options = { mask: "#".repeat(textMaskLimits.maxPatternLength + 1) };
  expect(() => maskText("123", options)).toThrow(RangeError);
  expect(() => unmaskText("123", options)).toThrow(RangeError);
});
