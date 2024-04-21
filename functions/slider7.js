const slides7 = document.querySelectorAll(".slides7 img");
let slideIndex7 = 0;
let intervalId7 = null;

document.addEventListener("DOMContentLoaded", initializeSlider7)

function initializeSlider7() {
    if (slides7.length > 0) {
        slides7[slideIndex7].classList.add("displaySlide");
        intervalId7 = setInterval(nextSlide7, 10_000);
    }
}

function showSlide7(index) {
    if (index >= slides7.length) {
        slideIndex7 = 0;
    }
    else if (index < 0) {
        slideIndex7 = slides7.length - 1;
    }
    slides7.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides7[slideIndex7].classList.add("displaySlide");
}

function previousSlide7() {
    slideIndex7--;
    showSlide7(slideIndex7);
    clearInterval(intervalId7);
}

function nextSlide7() {
    slideIndex7++;
    showSlide7(slideIndex7);
}