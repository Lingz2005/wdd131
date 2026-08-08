const products = [
  { id: "p1", name: "Solar Panel" },
  { id: "p2", name: "Smart Thermostat" },
  { id: "p3", name: "LED Lighting System" },
  { id: "p4", name: "Water Filtration Unit" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

document.getElementById("reviewForm").addEventListener("submit", () => {
  let count = localStorage.getItem("reviewCount") || 0;
  count++;
  localStorage.setItem("reviewCount", count);
});