const slides3 = document.querySelectorAll(".slides3 img");
let slideIndex3 = 0;
let intervalId3 = null;

document.addEventListener("DOMContentLoaded", initializeSlider3)

function initializeSlider3() {
    if (slides3.length > 0) {
        slides3[slideIndex3].classList.add("displaySlide");
        intervalId3 = setInterval(nextSlide3, 10_000);
    }
}

function showSlide3(index) {
    if (index >= slides3.length) {
        slideIndex3 = 0;
    }
    else if (index < 0) {
        slideIndex3 = slides3.length - 1;
    }
    slides3.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides3[slideIndex3].classList.add("displaySlide");
}

function previousSlide3() {
    slideIndex3--;
    showSlide3(slideIndex3);
    clearInterval(intervalId3);
}

function nextSlide3() {
    slideIndex3++;
    showSlide3(slideIndex3);
}