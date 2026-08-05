// =========================
// review.js (FINAL FIXED)
// =========================

// Product Array
const products = [
{ id: "p1", name: "iPhone 14" },
{ id: "p2", name: "Samsung Galaxy S23" },
{ id: "p3", name: "HP Laptop" },
{ id: "p4", name: "PlayStation 5" }
];

// Populate dropdown (ONLY on index.html)
const productSelect = document.getElementById("product");

if (productSelect) {
products.forEach(product => {
const option = document.createElement("option");
option.value = product.id;
option.textContent = product.name;
productSelect.appendChild(option);
});
}

// =========================
// REVIEW COUNT (ONLY review.html)
// =========================
const reviewDisplay = document.getElementById("reviewCount");

if (reviewDisplay) {
let count = Number(localStorage.getItem("reviewCount")) || 0;

// Increase count ONLY when page loads after form submit
count++;

localStorage.setItem("reviewCount", count);

reviewDisplay.textContent = count;
}