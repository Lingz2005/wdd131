const form = document.querySelector("#reviewForm");

form.addEventListener("submit", function () {
let count = localStorage.getItem("reviewCount");

if (!count) {
    count = 0;
}

count++;

localStorage.setItem("reviewCount", count);

});