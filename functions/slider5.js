const slides5 = document.querySelectorAll(".slides5 img");
let slideIndex5 = 0;
let intervalId5 = null;

document.addEventListener("DOMContentLoaded", initializeSlider5)

function initializeSlider5() {
    if (slides5.length > 0) {
        slides5[slideIndex5].classList.add("displaySlide");
        intervalId5 = setInterval(nextSlide5, 10_000);
    }
}

function showSlide5(index) {
    if (index >= slides5.length) {
        slideIndex5 = 0;
    }
    else if (index < 0) {
        slideIndex5 = slides5.length - 1;
    }
    slides5.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides5[slideIndex5].classList.add("displaySlide");
}

function previousSlide5() {
    slideIndex5--;
    showSlide5(slideIndex5);
    clearInterval(intervalId5);
}

function nextSlide5() {
    slideIndex5++;
    showSlide5(slideIndex5);
}