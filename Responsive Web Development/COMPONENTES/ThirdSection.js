/* AJUSTE DO CARROSEL */
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



/* INTERAÇÃO NO FEEDBACK */
const ameiIcon = document.getElementById('amei');
const curtiIcon = document.getElementById('curti');
const naoCurtiIcon = document.getElementById('nao_curti');

let ameiCount = 0;
let curtiCount = 0;
let naoCurtiCount = 0;

ameiIcon.addEventListener('click', () => {
    ameiCount++;
    document.getElementById('ameiCount').textContent = ameiCount;
});

curtiIcon.addEventListener('click', () => {
    curtiCount++;
    document.getElementById('curtiCount').textContent = curtiCount;
});

naoCurtiIcon.addEventListener('click', () => {
    naoCurtiCount++;
    document.getElementById('naoCurtiCount').textContent = naoCurtiCount;
});
