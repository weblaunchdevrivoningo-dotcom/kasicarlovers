// ========== VIDEO DATA ==========
const videos = [
  {
    title: "Golf 8 Dream Road",
    src: "videos/golf8-dream-road.mp4",
    thumb: "images/golf8thumb.jpg"
  },
  {
    title: "Bmw",
    src: "videos/wwe.mp4",
    thumb: "images/awwe.jpg"
  },
  {
    title: "Nature Walk",
    src: "videos/blbv.mp4",
    thumb: "images/blb2.jpg"
  },
  {
    title: "City Lights",
    src: "videos/rem.mp4",
    thumb: "images/rem2.jpg"
  }
];

// ========== RENDER VIDEOS ==========
function loadVideos() {
  const container = document.getElementById("videoGrid");
  if (!container) return;

  container.innerHTML = ""; // Clear old content

  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card video-card";

    card.innerHTML = `
      <img src="${video.thumb}" alt="${video.title}">
      <h3>${video.title}</h3>
    `;

    card.addEventListener("click", () => openVideo(video.src));
    container.appendChild(card);
  });
}

// ========== LIGHTBOX PLAYER ==========
function openVideo(source) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.9)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";

  const video = document.createElement("video");
  video.src = source;
  video.controls = true;
  video.autoplay = true;
  video.style.maxWidth = "70%";
  video.style.maxHeight = "60%";
  video.style.borderRadius = "10px";

  modal.appendChild(video);

  modal.addEventListener("click", () => document.body.removeChild(modal));
  document.body.appendChild(modal);
}

// Load videos on page open

document.addEventListener("DOMContentLoaded", loadVideos);
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
