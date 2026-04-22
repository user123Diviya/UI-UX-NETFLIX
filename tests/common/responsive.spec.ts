import { test, expect } from '@playwright/test';

test('Responsive validation', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://www.netflix.com/');
  await expect(page).toHaveTitle(/Netflix/);
});
