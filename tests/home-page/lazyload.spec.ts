import { test, expect } from '@playwright/test';

test('lazyload test', async ({ page }) => {
  await page.goto('https://www.netflix.com/');
  await expect(page).toHaveTitle(/Netflix/);
});
