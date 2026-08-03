// ARRAY + OBJECT
const players = [
  { name: "Mbappe", rating: 95 },
  { name: "Bellingham", rating: 93 },
  { name: "Salah", rating: 92 }
];

// FUNCTION 1 (display players)
function displayPlayers() {
  const list = document.getElementById("playerList");

  players.forEach(player => {
    const li = document.createElement("li");
    li.textContent = `${player.name} - Rating: ${player.rating}`;
    list.appendChild(li);
  });
}

// FUNCTION 2 (button interaction)
function showMessage() {
  document.getElementById("message").textContent = "Football is life! ⚽";
}

// EVENT LISTENER
document.getElementById("showMessage")?.addEventListener("click", showMessage);

// CONDITIONAL + localStorage
document.getElementById("joinForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("formMessage").textContent = "Name required!";
  } else {
    localStorage.setItem("userName", name);
    document.getElementById("formMessage").textContent = `Welcome ${name}!`;
  }
});

// RUN FUNCTION
displayPlayers();