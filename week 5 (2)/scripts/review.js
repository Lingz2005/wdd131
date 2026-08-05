// review.js (FINAL)
// =========================

// Product List
const products = [
{ id: "p1", name: "iPhone 14" },
{ id: "p2", name: "Samsung Galaxy S23" },
{ id: "p3", name: "HP Laptop" },
{ id: "p4", name: "PlayStation 5" }
];

// Populate Product Dropdown (index.html only)
const productSelect = document.getElementById("product");

if (productSelect) {
products.forEach(product => {
const option = document.createElement("option");
option.value = product.id;
option.textContent = product.name;
productSelect.appendChild(option);
});
}

// Review Counter (review.html only)
const reviewCountDisplay = document.getElementById("reviewCount");

if (reviewCountDisplay) {
let count = Number(localStorage.getItem("reviewCount")) || 0;

count += 1;

localStorage.setItem("reviewCount", count);

reviewCountDisplay.textContent = count;
}