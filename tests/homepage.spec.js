const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const appUrl = pathToFileURL(
  path.resolve(__dirname, '../index.html')
).href;

test('E-Kart homepage should load successfully', async ({ page }) => {
  await page.goto(appUrl);

  await expect(page).toHaveTitle('E-Kart | QA Practice');
  await expect(
    page.getByRole('heading', { name: 'E-Kart' })
  ).toBeVisible();
});

test('Search should display matching products', async ({ page }) => {
  await page.goto(appUrl);

  await page.getByRole('searchbox', {
    name: 'Search products'
  }).fill('Mouse');

  await expect(
    page.locator('.product')
  ).toHaveCount(1);

  await expect(
    page.getByRole('heading', { name: 'Wireless Mouse' })
  ).toBeVisible();
});

test('Search should show no products for an invalid query', async ({ page }) => {
  await page.goto(appUrl);

  await page.getByRole('searchbox', {
    name: 'Search products'
  }).fill('xyz123');

  await expect(
    page.getByText('No products found')
  ).toBeVisible();

  await expect(
    page.locator('.product')
  ).toHaveCount(0);
});