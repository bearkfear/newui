import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const theme of ["light", "dark"]) {
  test(`all stories render and pass automated WCAG checks in ${theme}`, async ({ page, request }) => {
    test.setTimeout(120_000);
    const response = await request.get("/index.json");
    expect(response.ok()).toBeTruthy();
    const { entries } = await response.json();
    const stories = Object.values(entries) as { id: string; type: string }[];
    expect(stories.filter((entry) => entry.type === "story").length).toBeGreaterThan(0);
    for (const story of stories.filter((entry) => entry.type === "story")) {
      await test.step(story.id, async () => {
        await page.goto(`/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme}`);
        await expect(page.locator("#storybook-root .nui-preview")).toBeVisible();
        await expect.poll(() => page.evaluate(() => {
          const channel = (window as unknown as {
            __STORYBOOK_ADDONS_CHANNEL__?: { last: (event: string) => [{ status: string }] | undefined };
          }).__STORYBOOK_ADDONS_CHANNEL__;
          return channel?.last("storyFinished")?.[0]?.status;
        }), { message: `${story.id}: render, play function, and addon checks must succeed` }).toBe("success");
        await expect(page.locator(".sb-errordisplay")).toBeHidden();
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
  await page.screenshot({ path: test.info().outputPath("documentation.png"), fullPage: true });
  await page.goto("/?path=/story/actions-button--default");
  await expect(canvas.getByRole("button", { name: "Button", exact: true })).toBeVisible();
  await page.getByRole("tab", { name: /Controls/ }).click();
  const label = page.getByRole("row").filter({ has: page.getByText("children", { exact: true }) }).getByRole("textbox");
  await label.fill("Updated label");
  await expect(canvas.getByRole("button", { name: "Updated label", exact: true })).toBeVisible();
  await page.getByRole("button", { name: /theme/i }).click();
  await page.getByText("Dark theme", { exact: true }).click();
  await expect(canvas.locator(".nui-preview")).toHaveAttribute("data-nui-theme", "dark");
  await expect(page.getByAltText("newui · component workshop")).toHaveAttribute("src", "./brand-dark.svg");
  await page.screenshot({ path: test.info().outputPath("workshop-dark.png"), fullPage: true });
});

test("introduction fits a small mobile canvas", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/iframe.html?id=getting-started-introduction--overview&viewMode=story");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.screenshot({ path: test.info().outputPath("introduction-mobile.png"), fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
});
