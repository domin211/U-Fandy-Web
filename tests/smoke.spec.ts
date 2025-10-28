import { expect, test } from '@playwright/test';

test('homepage has hero heading and navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /moderní útočiště/i })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ubytování' })).toBeVisible();
});

