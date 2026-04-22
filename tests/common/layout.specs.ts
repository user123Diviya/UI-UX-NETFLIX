import { test, expect } from '@playwright/test';

test('Layout validation', async ({ page }) => {
  await page.goto('https://www.netflix.com/');
  await expect(page.locator('section').first()).toBeVisible();
});
