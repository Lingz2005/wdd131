// ARRAY + localStorage
let members = JSON.parse(localStorage.getItem("members")) || [];

// FUNCTION
function saveMember(member) {
  members.push(member);
  localStorage.setItem("members", JSON.stringify(members));
}

// FORM HANDLING
const form = document.getElementById("joinForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const player = document.getElementById("player").value.trim();

    // CONDITIONAL
    if (name === "" || player === "") {
      document.getElementById("message").textContent = "Please fill all fields.";
      return;
    }

    // OBJECT
    const member = {
      name: name,
      player: player
    };

    saveMember(member);

    document.getElementById("message").textContent =
      `✅ ${name}, you joined successfully!`;

    form.reset();
  });
}

// REVIEW PAGE DISPLAY
const membersSection = document.getElementById("members");

if (membersSection) {

  if (members.length === 0) {
    membersSection.innerHTML = "<p>No members yet.</p>";
  } else {
    membersSection.innerHTML = members.map(member => {
      return `
        <div class="card">
          <h3>${member.name}</h3>
          <p>Favorite Player: ${member.player}</p>
        </div>
      `;
    }).join("");
  }
}