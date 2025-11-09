document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/data/events.json")
    .then(response => response.json())
    .then(events => {
      const grid = document.getElementById("events-grid");
      grid.innerHTML = "";

      events.forEach((event, index) => {
      const delay = index * 100; // Adds animation delay if using AOS

      const card = document.createElement("div");
      card.classList.add("event-card");
      card.setAttribute("data-aos", "zoom-in");
      card.setAttribute("data-aos-delay", delay);

      // ✅ Make card clickable
      card.addEventListener("click", () => {
        window.location.href = event.link;
      });

      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" />
        <div class="event-info">
          <h3>${event.title}</h3>
          <p>${event.shortDescription}</p>
          <a href="${event.link}" class="btn" onclick="event.stopPropagation()">View Details</a>
        </div>
      `;

      grid.appendChild(card);
    });

    })
    .catch(error => {
      console.error("Error loading events:", error);
      document.getElementById("events-grid").innerHTML =
        "<p>Unable to load events right now. Please try again later.</p>";
    });
});
