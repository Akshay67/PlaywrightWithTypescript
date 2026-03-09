import { test, expect } from '@playwright/test';

test('launch browser and go to Sauce Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  // quick sanity check - login username input should be visible
  await expect(page.locator('#user-name')).toBeVisible();
});