import { test, expect } from '@playwright/test';

test('validation test', async ({ page }) => {
  await page.goto('https://www.netflix.com/login');
  await expect(page).toHaveTitle(/Netflix/);
});
