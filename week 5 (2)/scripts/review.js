// Product Array
const products = [
  { id: "p1", name: "iPhone 14" },
  { id: "p2", name: "Samsung Galaxy S23" },
  { id: "p3", name: "HP Laptop" },
  { id: "p4", name: "PlayStation 5" }
];

// Populate dropdown
const productSelect = document.getElementById("product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Count reviews ONLY on review.html
const reviewDisplay = document.getElementById("reviewCount");

if (reviewDisplay) {
  let count = localStorage.getItem("reviewCount") || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewDisplay.textContent = count;
}