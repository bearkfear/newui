import { expect, type Locator, type Page } from "@playwright/test";

export async function openMaskStory(page: Page, story: string) {
  await page
    .context()
    .grantPermissions(["clipboard-read", "clipboard-write"], { origin: "http://127.0.0.1:6006" });
  await page.goto(`/iframe.html?id=forms-masked-input--${story}&viewMode=story`);
  await expect(page.locator("#storybook-root .nui-preview")).toBeVisible();
}

export async function pasteText(page: Page, input: Locator, value: string, replace = true) {
  await input.focus();
  if (replace) await page.keyboard.press("ControlOrMeta+A");
  await page.evaluate((text) => navigator.clipboard.writeText(text), value);
  await page.keyboard.press("ControlOrMeta+V");
}
