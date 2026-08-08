// Count reviews
if (window.location.pathname.includes("review.html")) {
  let count = localStorage.getItem("reviewCount") || 0;
  count++;
  localStorage.setItem("reviewCount", count);
}

// Show count
if (window.location.pathname.includes("count.html")) {
  let count = localStorage.getItem("reviewCount") || 0;
  document.getElementById("reviewCount").textContent = count;
}