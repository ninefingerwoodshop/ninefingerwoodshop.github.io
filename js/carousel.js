let slideIndex = 1;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show current slide and highlight current dot
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// Auto-advance slides (optional - remove if you don't want this)
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 5000); // Change slide every 5 seconds
