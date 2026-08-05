const form = document.getElementById("joinForm");

let members = JSON.parse(localStorage.getItem("members")) || [];

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const player = document.getElementById("player").value;

    // OBJECT
    const member = {
      name: name,
      player: player
    };

    // ARRAY
    members.push(member);

    // localStorage
    localStorage.setItem("members", JSON.stringify(members));

    document.getElementById("message").textContent =
      `Thanks ${name}, you joined successfully!`;

    form.reset();
  });
}

// REVIEW PAGE DISPLAY
const membersSection = document.getElementById("members");

if (membersSection) {
  membersSection.innerHTML = members.map(member => {

    // TEMPLATE LITERAL
    return `
      <div class="card">
        <h3>${member.name}</h3>
        <p>Favorite Player: ${member.player}</p>
      </div>
    `;

  }).join("");
}