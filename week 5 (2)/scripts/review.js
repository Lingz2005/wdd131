// Product Array
const products = [
  { id: "p1", name: "iPhone 14" },
  { id: "p2", name: "Samsung Galaxy S22" },
  { id: "p3", name: "MacBook Pro" },
  { id: "p4", name: "Dell XPS 13" }
];

// Populate Product Dropdown
const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// localStorage Review Counter
let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
  reviewCount = 0;
}

document.getElementById("reviewCount").textContent =
  `Reviews submitted: ${reviewCount}`;

// Form Submission
document.getElementById("reviewForm").addEventListener("submit", function () {
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
});