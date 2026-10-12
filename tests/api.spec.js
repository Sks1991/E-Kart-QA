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

test('PUT API should update a post', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated E-Kart Product',
        body: 'Updated product details',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data.title).toBe('Updated E-Kart Product');
  expect(data.id).toBe(1);
});

test('DELETE API should delete a post', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
});

test('GET API should return an empty object for an invalid post ID', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/999999'
  );

  expect(response.status()).toBe(404);
});