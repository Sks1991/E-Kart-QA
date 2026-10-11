const products = [
  { id: 1, name: "Wireless Mouse", price: 599 },
  { id: 2, name: "Mechanical Keyboard", price: 2499 },
  { id: 3, name: "USB Headphones", price: 999 },
  { id: 4, name: "Laptop Stand", price: 799 }
];

const searchInput = document.querySelector("#search");
const productList = document.querySelector("#product-list");
const resultCount = document.querySelector("#result-count");

function renderProducts(items) {
  productList.replaceChildren();

  items.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `₹${product.price}`;

    card.append(name, price);
    productList.appendChild(card);
  });

  resultCount.textContent = `${items.length} product(s) found`;

  if (items.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No products found";
    productList.appendChild(message);
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  renderProducts(filteredProducts);
});

renderProducts(products);