const { test, expect } = require('@playwright/test');
const mysql = require('mysql2/promise');

test('Products table should contain valid product data', async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: 'ekart_qa',
    port: Number(process.env.DB_PORT || 3306),
  });

  try {
    const [rows] = await connection.execute(
      'SELECT product_id, product_name, price, stock FROM products ORDER BY product_id'
    );

    expect(rows.length).toBeGreaterThan(0);

    for (const product of rows) {
      expect(product.product_name).toBeTruthy();
      expect(Number(product.price)).toBeGreaterThanOrEqual(0);
      expect(product.stock).toBeGreaterThanOrEqual(0);
    }
  } finally {
    await connection.end();
  }
});