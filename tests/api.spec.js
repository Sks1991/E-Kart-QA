const { test, expect } = require('@playwright/test');

test('API should return a successful response', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.id).toBe(1);
  expect(data.userId).toBe(1);
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('body');
});