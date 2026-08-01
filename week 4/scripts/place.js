const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: 1893,
    area: 253000,
    image: "images/saltlake.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: 1919,
    area: 42100,
    image: "images/hawaii.jpg"
  },
  {
    name: "Cardston Alberta Temple",
    location: "Cardston, Alberta",
    dedicated: 1923,
    area: 88000,
    image: "images/cardston.jpg"
  },
  {
    name: "Mesa Arizona Temple",
    location: "Mesa, Arizona",
    dedicated: 1927,
    area: 113916,
    image: "images/mesa.jpg"
  },
  {
    name: "Idaho Falls Temple",
    location: "Idaho Falls, Idaho",
    dedicated: 1945,
    area: 92677,
    image: "images/idaho.jpg"
  },
  {
    name: "Washington D.C. Temple",
    location: "Kensington, Maryland",
    dedicated: 1974,
    area: 156558,
    image: "images/dc.jpg"
  },
  {
    name: "Jordan River Temple",
    location: "South Jordan, Utah",
    dedicated: 1981,
    area: 148236,
    image: "images/jordan.jpg"
  },

  // REQUIRED EXTRA TEMPLES
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: 2019,
    area: 41010,
    image: "images/rome.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: 2017,
    area: 44000,
    image: "images/paris.jpg"
  },
  {
    name: "Colonia Juárez Mexico Temple",
    location: "Chihuahua, Mexico",
    dedicated: 1999,
    area: 6800, // ✅ SMALL (<10,000)
    image: "images/juarez.jpg"
  }
];

// DISPLAY FUNCTION
function displayTemples(templesList) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  templesList.forEach(temple => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img 
        src="${temple.image}" 
        alt="Image of ${temple.name} temple"
        loading="lazy"
        width="300"
        height="200">
    `;

    container.appendChild(card);
  });
}

// FILTER FUNCTION
function filterTemples(type) {
  let filtered = [];

  switch(type) {
    case "old":
      filtered = temples.filter(t => t.dedicated < 1900);
      break;

    case "new":
      filtered = temples.filter(t => t.dedicated > 2000);
      break;

    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;

    case "small":
      filtered = temples.filter(t => t.area < 10000); // ✅ FIXED
      break;

    case "all":
      filtered = temples;
      break;

    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// LOAD ALL ON START
displayTemples(temples);