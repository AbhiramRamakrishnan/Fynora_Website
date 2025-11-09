document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");

  fetch("assets/data/events.json")
    .then(res => res.json())
    .then(events => {
      const event = events.find(e => e.id == eventId);
      if (!event) return;

      document.getElementById("event-banner-img").src = event.banner;
      document.getElementById("event-title").textContent = event.title;
      document.getElementById("event-venue").textContent = "Venue: " + event.venue;
      document.getElementById("event-date").textContent = "Date: " + event.date;
      document.getElementById("event-description").textContent = event.description;

      // Artist lineup
      const artistList = document.getElementById("artist-list");
      artistList.innerHTML = "";
      event.artists.forEach(artist => {
        const li = document.createElement("li");
        li.textContent = artist;
        artistList.appendChild(li);
      });

      // Gallery
      const gallery = document.getElementById("gallery-images");
      gallery.innerHTML = "";
      event.gallery.slice(0, 15).forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        gallery.appendChild(image);
      });

      // Booking and external link
      document.getElementById("booking-btn").href = event.bookingLink;
      document.getElementById("event-website-link").href = event.website;
    })
    .catch(err => console.error("Error loading event details:", err));
});
