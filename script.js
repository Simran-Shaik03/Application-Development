let currentPosition = 0;
const slider = document.getElementById('slider');
const slideWidth = 300; // Width of each slide

function nextSlide() {
  currentPosition = (currentPosition + 1) % 3; // Modulo for cyclic behavior (3 is the number of images)
  slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
}

function prevSlide() {
  currentPosition = (currentPosition - 1 + 3) % 3; // Ensure positive modulo result
  slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
}

// Automatic sliding (optional)
setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)

// Keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    prevSlide();
  } else if (event.key === 'ArrowRight') {
    nextSlide();
  }
});

// --------------------------------------------------------------------------------------------------------------------

