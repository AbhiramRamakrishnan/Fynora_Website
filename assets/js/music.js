document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("videoGrid");
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  const closeBtn = document.getElementById("closeModal");

  // Load JSON data
  fetch("assets/data/music.json")
    .then((res) => res.json())
    .then((videos) => {
      videos.forEach((video) => {
        const card = document.createElement("div");
        card.className = "video-card";
        card.innerHTML = `
            <div class="thumbnail-container">
                <img src="${video.thumbnail}" class="thumbnail" alt="${video.title}">
                <span class="duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <!-- Optional: add more info like channel or views later -->
            </div>
        `;


        card.addEventListener("click", () => {
          frame.src = video.videoUrl + "?autoplay=1";
          modal.style.display = "flex";
        });

        grid.appendChild(card);
      });
    });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    frame.src = "";
  });

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      frame.src = "";
    }
  });
});
