import { execFileSync } from "node:child_process";

/** Ensure the built public helper entry can run in Node without initializing UI components. */
export function verifyMaskingEntry(packageRoot: string) {
  execFileSync(
    "node",
    [
      "--input-type=module",
      "-e",
      `
    import assert from "node:assert/strict";
    import { maskText, unmaskText, textMaskLimits, validateTextMaskOptions } from "@egcs/newui/masking";
    const options = { mask: "###.###.###-##" };
    validateTextMaskOptions(options);
    assert.equal(maskText("12345678900", options), "123.456.789-00");
    assert.equal(unmaskText("123.456.789-00", options), "12345678900");
    assert.ok(Object.isFrozen(textMaskLimits));
  `,
    ],
    { cwd: packageRoot, stdio: "pipe" },
  );
  console.log("Verified public masking helpers without a DOM or Solid rendering owner.");
}
