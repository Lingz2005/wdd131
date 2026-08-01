const temples = [
  { name: "Salt Lake Temple", location: "Salt Lake City, Utah", dedicated: 1893, area: 253000, image: "images/saltlake.jpg" },
  { name: "Laie Hawaii Temple", location: "Laie, Hawaii", dedicated: 1919, area: 42100, image: "images/hawaii.jpg" },
  { name: "Cardston Alberta Temple", location: "Cardston, Alberta", dedicated: 1923, area: 88000, image: "images/cardston.jpg" },
  { name: "Mesa Arizona Temple", location: "Mesa, Arizona", dedicated: 1927, area: 113916, image: "images/mesa.jpg" },
  { name: "Idaho Falls Temple", location: "Idaho Falls, Idaho", dedicated: 1945, area: 92677, image: "images/idaho.jpg" },
  { name: "Washington D.C. Temple", location: "Kensington, Maryland", dedicated: 1974, area: 156558, image: "images/dc.jpg" },
  { name: "Jordan River Temple", location: "South Jordan, Utah", dedicated: 1981, area: 148236, image: "images/jordan.jpg" },

  { name: "Rome Italy Temple", location: "Rome, Italy", dedicated: 2019, area: 41010, image: "images/rome.jpg" },
  { name: "Paris France Temple", location: "Paris, France", dedicated: 2017, area: 44000, image: "images/paris.jpg" },
  { name: "Colonia Juárez Mexico Temple", location: "Chihuahua, Mexico", dedicated: 1999, area: 6800, image: "images/juarez.jpg" }
];

// DISPLAY
function displayTemples(list) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  list.forEach(t => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h2>${t.name}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Size:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.image}" alt="Image of ${t.name}" loading="lazy" width="300" height="200">
    `;

    container.appendChild(card);
  });
}

// FILTERS
document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.dedicated < 1900));
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.dedicated > 2000));
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.area < 10000));
});

// LOAD ALL
displayTemples(temples);