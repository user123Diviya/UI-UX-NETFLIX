import { test, expect } from '@playwright/test';

test('thumbnail test', async ({ page }) => {
  await page.goto('https://www.netflix.com/');
  await expect(page).toHaveTitle(/Netflix/);
});
