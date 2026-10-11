const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: false,
  workers: 1,

  reporter: [
  ['list'],
  ['html', { outputFolder: 'playwright-report', open: 'never' }]
],

  use: {
    headless: true,
    trace: 'retain-on-failure',
  },
});