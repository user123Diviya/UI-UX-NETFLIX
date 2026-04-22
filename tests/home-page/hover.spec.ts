import { test, expect } from '@playwright/test';

test('hover test', async ({ page }) => {
  await page.goto('https://www.netflix.com/');
  await expect(page).toHaveTitle(/Netflix/);
});
