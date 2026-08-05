

// Product List (used to populate dropdown)
const products = [
{ id: "p1", name: "iPhone 14" },
{ id: "p2", name: "Samsung Galaxy S23" },
{ id: "p3", name: "HP Laptop" },
{ id: "p4", name: "PlayStation 5" }
];

// Populate product dropdown (index.html only)
const productSelect = document.getElementById("product");

if (productSelect) {
products.forEach(product => {
const option = document.createElement("option");
option.value = product.id;
option.textContent = product.name;
productSelect.appendChild(option);
});
}

// Review counter (review.html only)
const reviewCount = document.getElementById("reviewCount");

if (reviewCount) {
let count = localStorage.getItem("reviewCount");

if (!count) {
count = 0;
}

count = Number(count) + 1;

localStorage.setItem("reviewCount", count);

reviewCount.textContent = count;
}