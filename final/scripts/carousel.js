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