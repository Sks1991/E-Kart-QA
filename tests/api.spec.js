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

test('POST API should create a new post', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'E-Kart Test Product',
        body: 'Testing product creation API',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const data = await response.json();

  expect(data.title).toBe('E-Kart Test Product');
  expect(data.body).toBe('Testing product creation API');
  expect(data.userId).toBe(1);
  expect(data.id).toBeTruthy();
});