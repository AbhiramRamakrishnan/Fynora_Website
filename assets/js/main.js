// Load navbar and footer dynamically
document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("afterbegin", data);
      highlightActiveNav(); // Call after navbar is loaded
    });

  // Load Footer
  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });
});

function highlightActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
