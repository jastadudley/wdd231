console.log("pumpkin.js is running");

// date.js
const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.querySelector('#lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;


//Hamburger Menu
const menuButton = document.getElementById("menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  console.log("Hamburger clicked!");
  nav.classList.toggle("show");
});

//Carousel
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  let index = 0;
  const total = slides.length;

  function moveToSlide(i) {
    const moveAmount = i * (slides[0].getBoundingClientRect().width + 16);
    track.style.transform = `translateX(-${moveAmount}px)`;
  }

  function showNext() {
    index = (index + 1) % total;
    moveToSlide(index > total - 2 ? total - 2 : index);
  }

  function showPrev() {
    index = Math.max(0, index - 1);
    moveToSlide(index);
  }

  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  let autoplay = setInterval(showNext, 5000);

  // pause
  const wrapper = document.querySelector(".carousel-wrapper");
  wrapper.addEventListener("mouseenter", () => clearInterval(autoplay));
  wrapper.addEventListener("mouseleave", () => {
    autoplay = setInterval(showNext, 6000);
  });
});

//Json Game Cards
fetch('games.json')
  .then(res => res.json())
  .then(games => {
    const container = document.getElementById('game-container');
    games.forEach(g => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.innerHTML = `
        <div class="game-images">
          <img src="${g.imageGameplay}" class="gameplay-img" alt="${g.title} gameplay">
          <img src="${g.imageCover}" class="cover-art" alt="${g.title} cover art">
        </div>
        <div class="game-info">
          <h3>${g.title}</h3>
          <p><strong>Why I Love It:</strong> ${g.why}</p>
          <p><strong>Best For:</strong> ${g.bestFor}</p>
          <a href="${g.link}" class="cta-button" target="_blank">Check it out on Steam</a>
        </div>`;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading games:', err));
