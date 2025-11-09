// Example nav.js
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
  });
});
