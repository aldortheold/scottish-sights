const slides1 = document.querySelectorAll(".slides1 img");
let slideIndex1 = 0;
let intervalId1 = null;

document.addEventListener("DOMContentLoaded", initializeSlider1)

function initializeSlider1() {
    if (slides1.length > 0) {
        slides1[slideIndex1].classList.add("displaySlide");
        intervalId1 = setInterval(nextSlide1, 10_000);
    }
}

function showSlide1(index) {
    if (index >= slides1.length) {
        slideIndex1 = 0;
    }
    else if (index < 0) {
        slideIndex1 = slides1.length - 1
    }
    slides1.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides1[slideIndex1].classList.add("displaySlide");
}

function previousSlide1() {
    slideIndex1--;
    showSlide1(slideIndex1);
    clearInterval(intervalId1);
}

function nextSlide1() {
    slideIndex1++;
    showSlide1(slideIndex1);
}