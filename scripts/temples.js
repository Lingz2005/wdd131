// Footer dynamic year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    const isOpen = navMenu.style.display === "block";
    navMenu.style.display = isOpen ? "none" : "block";
    hamburger.textContent = isOpen ? "☰" : "✖";
    hamburger.setAttribute("aria-expanded", !isOpen);
});