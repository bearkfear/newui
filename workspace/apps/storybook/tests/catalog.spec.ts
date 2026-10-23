import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const theme of ["light", "dark"]) {
  test(`all stories render and pass automated WCAG checks in ${theme}`, async ({ page, request }) => {
    const response = await request.get("/index.json");
    expect(response.ok()).toBeTruthy();
    const { entries } = await response.json();
    const stories = Object.values(entries) as { id: string; type: string }[];
    expect(stories.filter((entry) => entry.type === "story").length).toBeGreaterThan(0);
    for (const story of stories.filter((entry) => entry.type === "story")) {
      await test.step(story.id, async () => {
        await page.goto(`/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme}`);
        await expect(page.locator("#storybook-root .nui-preview")).toBeVisible();
        await expect(page.locator(".sb-errordisplay")).toHaveCount(0);
        if (story.id.endsWith("--counter")) await expect(page.getByRole("button", { name: "Count: 2" })).toBeVisible();
        const result = await new AxeBuilder({ page }).include(".nui-preview").withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
        expect(result.violations, `${story.id}: ${JSON.stringify(result.violations)}`).toEqual([]);
      });
    }
  });
}

test("documentation, controls, and toolbar work together", async ({ page }) => {
  await page.goto("/?path=/docs/actions-button--documentation");
  const canvas = page.frameLocator("#storybook-preview-iframe");
  await expect(canvas.getByRole("heading", { name: "Button", exact: true }).first()).toBeVisible();
  await page.goto("/?path=/story/actions-button--default");
  await expect(canvas.getByRole("button", { name: "Button", exact: true })).toBeVisible();
  await page.getByRole("button", { name: /theme/i }).click();
  await page.getByText("Dark theme", { exact: true }).click();
  await expect(canvas.locator(".nui-preview")).toHaveAttribute("data-nui-theme", "dark");
});

test("introduction fits a small mobile canvas", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/iframe.html?id=getting-started-introduction--overview&viewMode=story");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
});
