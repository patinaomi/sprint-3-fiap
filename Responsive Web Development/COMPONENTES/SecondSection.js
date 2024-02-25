
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function changeSlide(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;
}

updateCarousel(); // Initialize
