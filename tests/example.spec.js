// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://duckduckgo.com');

  await page.locator("#searchbox_input").fill("Some string");
  await page.keyboard.press("Enter");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Some string" + " at DuckDuckGo");
});