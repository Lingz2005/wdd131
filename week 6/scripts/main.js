let members = JSON.parse(localStorage.getItem("members")) || [];


// FUNCTION
function saveMember(member){

members.push(member);

localStorage.setItem(
"members",
JSON.stringify(members)
);

}


// FORM
const form = document.querySelector("#joinForm");


if(form){

form.addEventListener("submit",(event)=>{


event.preventDefault();


const name =
document.querySelector("#name").value.trim();


const player =
document.querySelector("#player").value.trim();



if(name === "" || player === ""){

document.querySelector("#message").textContent =
"Please complete all fields.";

return;

}


// OBJECT

const member = {

name:name,

player:player

};



saveMember(member);



document.querySelector("#message").textContent =
`Welcome ${name}! You joined successfully.`;


form.reset();


});


}



// REVIEW PAGE

const membersSection =
document.querySelector("#members");



if(membersSection){


if(members.length === 0){


membersSection.innerHTML =
"<p>No members yet. Join the community!</p>";


}

else{


membersSection.innerHTML =
members.map(member => `

<div class="card">

<h3>${member.name}</h3>

<p>
Favorite Player: ${member.player}
</p>

</div>

`).join("");

}


}