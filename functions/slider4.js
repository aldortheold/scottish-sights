const slides4 = document.querySelectorAll(".slides4 img");
let slideIndex4 = 0;
let intervalId4 = null;

document.addEventListener("DOMContentLoaded", initializeSlider4)

function initializeSlider4() {
    if (slides4.length > 0) {
        slides4[slideIndex4].classList.add("displaySlide");
        intervalId4 = setInterval(nextSlide4, 10_000);
    }
}

function showSlide4(index) {
    if (index >= slides4.length) {
        slideIndex4 = 0;
    }
    else if (index < 0) {
        slideIndex4 = slides4.length - 1;
    }
    slides4.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides4[slideIndex4].classList.add("displaySlide");
}

function previousSlide4() {
    slideIndex4--;
    showSlide4(slideIndex4);
    clearInterval(intervalId4);
}

function nextSlide4() {
    slideIndex4++;
    showSlide4(slideIndex4);
}