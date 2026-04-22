import { test, expect } from '@playwright/test';

test('row test', async ({ page }) => {
  await page.goto('https://www.netflix.com/');
  await expect(page).toHaveTitle(/Netflix/);
});
