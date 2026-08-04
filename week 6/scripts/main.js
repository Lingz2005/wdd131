/* ================= PLAYERS ================= */
const players = [
  { name: "Mbappe", position: "ST", img: "images/player1.jpg" },
  { name: "Bellingham", position: "CAM", img: "images/player2.jpg" },
  { name: "Saliba", position: "CB", img: "images/tactics.jpg" }
];

const playerDiv = document.getElementById("players");

if (playerDiv) {
  playerDiv.innerHTML = players.map(player => {
    return `
      <div class="card">
        <img src="${player.img}" alt="${player.name} football player" loading="lazy">
        <h3>${player.name}</h3>
        <p>${player.position}</p>
      </div>
    `;
  }).join("");
}


/* ================= TIPS ================= */
const tips = [
  "Use fast wingers for counter attacks",
  "Upgrade stamina to last full matches",
  "Control midfield to dominate possession"
];

function getRandomTip() {
  const index = Math.floor(Math.random() * tips.length);
  return tips[index];
}

const tipBtn = document.getElementById("newTip");
const tipText = document.getElementById("tip");

if (tipBtn) {
  tipBtn.addEventListener("click", function () {
    tipText.textContent = getRandomTip();
  });
}


/* ================= LOCAL STORAGE ================= */
const welcome = document.getElementById("welcome");
const savedUser = localStorage.getItem("username");

if (welcome && savedUser) {
  welcome.textContent = `Welcome back, ${savedUser}!`;
}


/* ================= FORM ================= */
const form = document.getElementById("joinForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    const position = document.getElementById("position").value;

    if (name === "") {
      document.getElementById("result").textContent = "Please enter your name.";
      return;
    }

    let message;

    if (position === "ST") {
      message = "You are a striker!";
    } else if (position === "CAM") {
      message = "You control the game!";
    } else {
      message = "Solid defender!";
    }

    localStorage.setItem("username", name);

    document.getElementById("result").textContent =
      `Welcome ${name}. ${message}`;

    form.reset();
  });
}


/* ================= THEME TOGGLE ================= */
const toggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

if (toggleBtn) {
  toggleBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggleBtn.textContent = isLight ? "☀️" : "🌙";
  });
}