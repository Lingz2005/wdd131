// Product Array
const products = [
  { id: "p1", name: "Solar Panel" },
  { id: "p2", name: "Smart Thermostat" },
  { id: "p3", name: "LED Lighting System" },
  { id: "p4", name: "Water Filtration Unit" }
];

// Populate dropdown
const productSelect = document.getElementById("product");

products.forEach(product => {
  let option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Handle form submission (ONLY increment count here)
document.getElementById("reviewForm").addEventListener("submit", () => {
  let count = localStorage.getItem("reviewCount") || 0;
  count++;
  localStorage.setItem("reviewCount", count);
});