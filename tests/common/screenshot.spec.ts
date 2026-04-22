import { test, expect } from '@playwright/test';

test('Screenshot validation', async ({ page }) => {
  await page.goto('https://www.netflix.com/');
  await expect(page).toHaveScreenshot('landing.png');
});
