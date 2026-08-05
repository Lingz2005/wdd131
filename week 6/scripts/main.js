const players = [
    { name: "Mbappe", position: "ST", img: "images/player1.jpeg" },
    { name: "Bellingham", position: "CAM", img: "images/player2.jpeg" },
    { name: "Saliba", position: "CB", img: "images/tactics.jpeg" }
];

const playerDiv = document.getElementById("players");

if (playerDiv) {
    playerDiv.innerHTML = players.map(player => {
        return `
      <div class="card">
        <img src="${player.img}" alt="${player.name} football player" loading="lazy">
        <h3>${player.name}</h3>
        <p>Position: ${player.position}</p>
      </div>
    `;
    }).join("");
}

const tips = [
    "Use fast wingers for counter attacks",
    "Upgrade stamina to last full matches",
    "Control midfield to dominate possession",
    "Use quick one-two passing to break tight defenses",
    "Time your slide tackles carefully to avoid yellow cards"
];

function getRandomTip() {
    const index = Math.floor(Math.random() * tips.length);
    return tips[index];
}

document.addEventListener("DOMContentLoaded", function () {
    const tipBtn = document.getElementById("newTip");
    const tipText = document.getElementById("tip");

    if (tipBtn && tipText) {
        tipBtn.addEventListener("click", function () {
            tipText.textContent = getRandomTip();
        });
    }
});

const welcome = document.getElementById("welcome");
const savedUser = localStorage.getItem("username");

if (welcome && savedUser) {
    welcome.textContent = `Welcome back, ${savedUser}!`;
}

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