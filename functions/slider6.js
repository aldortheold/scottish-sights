const slides6 = document.querySelectorAll(".slides6 img");
let slideIndex6 = 0;
let intervalId6 = null;

document.addEventListener("DOMContentLoaded", initializeSlider6)

function initializeSlider6() {
    if (slides6.length > 0) {
        slides6[slideIndex6].classList.add("displaySlide");
        intervalId6 = setInterval(nextSlide6, 10_000);
    }
}

function showSlide6(index) {
    if (index >= slides6.length) {
        slideIndex6 = 0;
    }
    else if (index < 0) {
        slideIndex6 = slides6.length - 1;
    }
    slides6.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides6[slideIndex6].classList.add("displaySlide");
}

function previousSlide6() {
    slideIndex6--;
    showSlide6(slideIndex6);
    clearInterval(intervalId6);
}

function nextSlide6() {
    slideIndex6++;
    showSlide6(slideIndex6);
}