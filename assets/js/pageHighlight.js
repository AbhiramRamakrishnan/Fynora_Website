document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  console.log("✅ Current page:", currentPage);

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    console.log("Checking link:", linkPage);

    if (linkPage === currentPage) {
      console.log("🎯 Active link found:", link);
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
