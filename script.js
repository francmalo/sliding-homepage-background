// JavaScript for slider functionality
const slides = document.querySelectorAll('.slide');
const activeClass = 'active';
let currentSlide = 0;

// Function to initialize slider
function initSlider() {
    // Show the first slide
    slides[currentSlide].classList.add(activeClass);
    // Set a timer to advance to the next slide
    setInterval(() => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove(activeClass);
        // Increment current slide or go back to the beginning if at the end
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        // Add active class to next slide
        slides[currentSlide].classList.add(activeClass);
    }, 5000);
}

// Initialize slider
initSlider();