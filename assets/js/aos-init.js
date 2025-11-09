// aos-init.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: false,
    });
  } else {
    console.warn("AOS library not loaded!");
  }
});
