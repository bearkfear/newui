import { expect, test } from "@playwright/test";
import type { TextMaskOptions } from "../../../pkgs/ui/forms/masked-input/input-mask.types";
import { maskText, unmaskText } from "../../../pkgs/ui/forms/masked-input/mask-text";

const documentMask = { mask: "###.###.###-##" };

test("formats and parses document strings without a DOM", () => {
  expect(maskText("12345678900", documentMask)).toBe("123.456.789-00");
  expect(unmaskText("123.456.789-00", documentMask)).toBe("12345678900");
  expect(maskText("", documentMask)).toBe("");
  expect(unmaskText("", documentMask)).toBe("");
  expect(maskText("12345", documentMask)).toBe("123.45");
  expect(unmaskText("123.45", documentMask)).toBe("12345");
});

test("bounds long values and filters invalid characters", () => {
  expect(maskText("1234567890".repeat(1000), documentMask)).toBe("123.456.789-01");
  expect(unmaskText(`${"text ".repeat(1000)}123.456.789-00 999`, documentMask)).toBe("12345678900");
});

test("uses content and capacity to choose alternatives without mutating the list", () => {
  const patterns = Object.freeze(["(##) #####-####", "(##) ####-####"]);
  expect(maskText("1134567890", { mask: patterns })).toBe("(11) 3456-7890");
  expect(maskText("11987654321", { mask: patterns })).toBe("(11) 98765-4321");
  expect(unmaskText("(11) 98765-4321", { mask: patterns })).toBe("11987654321");
  expect(patterns).toEqual(["(##) #####-####", "(##) ####-####"]);
});

test("shares custom tokens, transforms, disabled tokens, and escapes", () => {
  const options: TextMaskOptions = {
    mask: "# LL-&&&",
    tokens: {
      "#": null,
      "&": { pattern: /[0-9]/g },
      L: { pattern: /\p{L}/u, transform: (character) => character.toUpperCase() },
    },
  };
  expect(maskText("éa123", options)).toBe("# ÉA-123");
  expect(unmaskText("# ÉA-123", options)).toBe("ÉA123");
  expect(maskText("éa123", options)).toBe("# ÉA-123");
  expect(maskText("abc123", { mask: "!A-AAA-###" })).toBe("A-ABC-123");
  expect(maskText("123", { mask: "!!###" })).toBe("!123");
});

test("rejects expanding transforms instead of overflowing a token", () => {
  const options = {
    mask: "L",
    tokens: { L: { pattern: /\p{L}/u, transform: (value: string) => value.toUpperCase() } },
  };
  expect(maskText("ß", options)).toBe("");
  expect(maskText("é", options)).toBe("É");
});

test("selects alternative token prefixes by accepted content", () => {
  const options: TextMaskOptions = {
    mask: ["R ### ### ###", "SO ### ## ##"],
    tokens: {
      R: { pattern: /r/i, transform: (value) => value.toUpperCase() },
      S: { pattern: /s/i, transform: (value) => value.toUpperCase() },
      O: { pattern: /o/i, transform: (value) => value.toUpperCase() },
    },
  };
  expect(maskText("r123456789", options)).toBe("R 123 456 789");
  expect(maskText("so1234567", options)).toBe("SO 123 45 67");
});
