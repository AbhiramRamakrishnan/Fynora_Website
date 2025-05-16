
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .nav-item a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
            });
            
            let activeLink = document.querySelector("header .nav-item a[href*=" + id + "]");
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};


// AoS (Animate on Scroll) initialization

AOS.init({
    duration: 1000, // animation duration in ms
    once: false, // whether animation should happen only once
  });