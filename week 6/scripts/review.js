const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const username = urlParams.get('username');
const favoriteTeam = urlParams.get('favoriteTeam');
const experienceLevel = urlParams.get('experienceLevel');

const displayUsername = document.getElementById('display-username');
const displayTeam = document.getElementById('display-team');
const displayExperience = document.getElementById('display-experience');

if (displayUsername) {
    displayUsername.textContent = username ? username : "N/A";
}
if (displayTeam) {
    displayTeam.textContent = favoriteTeam ? favoriteTeam : "N/A";
}
if (displayExperience) {
    displayExperience.textContent = experienceLevel ? experienceLevel : "N/A";
}

const visitCountElem = document.getElementById('visit-count');
if (visitCountElem) {
    let numVisits = Number(localStorage.getItem("reviewVisits-ls")) || 0;
    numVisits++;
    localStorage.setItem("reviewVisits-ls", numVisits);
    visitCountElem.textContent = `Review Page Visits: ${numVisits}`;
}