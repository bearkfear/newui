import { expect, test } from "@playwright/test";
import { openMaskStory, pasteText } from "./masked-input.helpers";

// Clipboard state is shared by native browser instances, so these checks run sequentially.
test.describe.configure({ mode: "default" });

test("preserves native validity clearing and emits one input event per paste", async ({ page }) => {
  await openMaskStory(page, "native-validity-and-events");
  const input = page.getByLabel("Required code", { exact: true });
  await page.getByRole("button", { name: "Submit", exact: true }).click();
  expect(await input.evaluate((element: HTMLInputElement) => element.validationMessage)).toBe(
    "Enter a code.",
  );
  await pasteText(page, input, "123456");
  await expect(input).toHaveValue("123-456");
  await expect(page.getByText("Native input events: 1", { exact: true })).toBeVisible();
  expect(await input.evaluate((element: HTMLInputElement) => element.validationMessage)).toBe("");
  await page.getByRole("button", { name: "Submit", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("Native validation accepted this value.");
});

test("accepts raw, formatted, and long clipboard text with synchronized details", async ({
  page,
}) => {
  await openMaskStory(page, "custom-tokens");
  const input = page.getByLabel("Document number", { exact: true });
  const details = page.locator(".text-fields-demo-code");
  await pasteText(page, input, "12345678900");
  await expect(input).toHaveValue("123.456.789-00");
  await expect(details).toContainText('"rawValue": "12345678900"');
  await pasteText(page, input, "987.654.321-00");
  await expect(input).toHaveValue("987.654.321-00");
  await expect(details).toContainText('"rawValue": "98765432100"');
  await pasteText(page, input, "1234567890".repeat(1000));
  await expect(input).toHaveValue("123.456.789-01");
  await expect(details).toContainText('"rawValue": "12345678901"');
  await pasteText(page, input, `${"text ".repeat(1000)}987.654.321-00`);
  await expect(input).toHaveValue("987.654.321-00");
});

test("preserves the suffix when replacing a selection with excess input", async ({ page }) => {
  await openMaskStory(page, "custom-tokens");
  const input = page.getByLabel("Document number", { exact: true });
  await pasteText(page, input, "98765432100");
  await input.evaluate((element: HTMLInputElement) => element.setSelectionRange(4, 7));
  await pasteText(page, input, "222333444555", false);
  await expect(input).toHaveValue("987.222.321-00");
  expect(await input.evaluate((element: HTMLInputElement) => element.selectionStart)).toBe(7);
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("987.654.321-00");
  await page.keyboard.press("ControlOrMeta+Shift+Z");
  await expect(input).toHaveValue("987.222.321-00");
});

test("formats initial and external controlled values and preserves editing history", async ({
  page,
}) => {
  await openMaskStory(page, "controlled-phone");
  const input = page.getByLabel("Phone", { exact: true });
  const raw = page.locator('input[type="hidden"]');
  await expect(input).toHaveValue("(11) 98765-4321");
  await expect(raw).toHaveValue("11987654321");
  await page.getByRole("button", { name: "Load landline", exact: true }).click();
  await expect(input).toHaveValue("(11) 3456-7890");
  await input.focus();
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("(11) 3456-7890");
  await page.getByRole("button", { name: "Clear and focus", exact: true }).click();
  await pasteText(page, input, "(21) 98765-4321");
  await expect(input).toHaveValue("(21) 98765-4321");
  await expect(raw).toHaveValue("21987654321");
  await expect(page.getByText("Native input events: 1", { exact: true })).toBeVisible();
  await page.keyboard.press("End");
  await page.keyboard.press("Backspace");
  await expect(input).toHaveValue("(21) 9876-5432");
  await expect(raw).toHaveValue("2198765432");
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("(21) 98765-4321");
  await expect(raw).toHaveValue("21987654321");
});

test("replaces configuration completely and resets history", async ({ page }) => {
  await openMaskStory(page, "reactive-configuration");
  const input = page.getByLabel("Configurable code", { exact: true });
  await expect(input).toHaveValue("123-456");
  await page.getByRole("button", { name: "Use four positions", exact: true }).click();
  await expect(input).toHaveValue("12-34");
  await input.focus();
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("12-34");
  await page.getByRole("button", { name: "Accept hexadecimal", exact: true }).click();
  await pasteText(page, input, "ABCD");
  await expect(input).toHaveValue("AB-CD");
  await page.getByRole("button", { name: "Accept digits", exact: true }).click();
  await expect(input).toHaveValue("");
  await input.focus();
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("");
});

test("formats defaults and submits exactly one raw or formatted value", async ({ page }) => {
  await openMaskStory(page, "native-submission-and-reset");
  const formatted = page.getByLabel("Postal code: formatted submission", { exact: true });
  const raw = page.getByLabel("Postal code: raw submission", { exact: true });
  await expect(formatted).toHaveValue("12345-678");
  await expect(raw).toHaveValue("12345-678");
  await pasteText(page, raw, "87654-321");
  await page.getByRole("button", { name: "Inspect submission", exact: true }).click();
  await expect(page.locator(".text-fields-demo-code")).toHaveText(
    JSON.stringify(
      [
        ["formatted", "12345-678"],
        ["raw", "87654321"],
      ],
      null,
      2,
    ),
  );
  await page.getByRole("button", { name: "Toggle disabled", exact: true }).click();
  await page.getByRole("button", { name: "Inspect submission", exact: true }).click();
  await expect(page.locator(".text-fields-demo-code")).toHaveText(
    JSON.stringify([["formatted", "12345-678"]], null, 2),
  );
});

test("reset clears old history while canceled reset preserves values and history", async ({
  page,
}) => {
  await openMaskStory(page, "native-submission-and-reset");
  const input = page.getByLabel("Postal code: formatted submission", { exact: true });
  await pasteText(page, input, "87654321");
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(input).toHaveValue("12345-678");
  await input.focus();
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("12345-678");
  await pasteText(page, input, "87654321");
  await page.getByRole("button", { name: "Toggle reset cancellation", exact: true }).click();
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await expect(page.locator(".text-fields-demo-code")).toContainText("Reset canceled");
  await expect(input).toHaveValue("87654-321");
  await input.focus();
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("12345-678");
});

test("readonly prevents history changes without losing undo after unlocking", async ({ page }) => {
  await openMaskStory(page, "paste-and-history");
  const input = page.getByLabel("Document paste playground", { exact: true });
  await expect(page.getByLabel("Oversized initial value", { exact: true })).toHaveValue(
    "123.456.789-00",
  );
  await pasteText(page, input, "12345678900");
  await pasteText(page, input, "98765432100");
  await page.getByRole("button", { name: "Make readonly", exact: true }).click();
  await input.focus();
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("987.654.321-00");
  await page.keyboard.press("ControlOrMeta+Shift+Z");
  await expect(input).toHaveValue("987.654.321-00");
  await page.getByRole("button", { name: "Allow editing", exact: true }).click();
  await input.focus();
  await page.keyboard.press("ControlOrMeta+Z");
  await expect(input).toHaveValue("123.456.789-00");
});

test("invalid backend configuration is reported before mounting the preview", async ({ page }) => {
  await openMaskStory(page, "configuration-limits");
  const preview = page.getByLabel("Validated mask preview", { exact: true });
  await expect(preview).toHaveValue("123.456.789-00");
  await page.getByRole("button", { name: "Maximum pattern length", exact: true }).click();
  await expect(preview).toHaveValue("12345678900");
  await page.getByRole("button", { name: "Pattern too long", exact: true }).click();
  await expect(preview).toHaveCount(0);
  await expect(
    page.getByText("Mask patterns must not exceed 256 characters.", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Maximum alternatives", exact: true }).click();
  await expect(preview).toHaveValue("123.456.789-00");
  await page.getByRole("button", { name: "Too many alternatives", exact: true }).click();
  await expect(preview).toHaveCount(0);
  await expect(
    page.getByText("Provide no more than 16 mask patterns.", { exact: true }),
  ).toBeVisible();
});
