const slides2 = document.querySelectorAll(".slides2 img");
let slideIndex2 = 0;
let intervalId2 = null;

document.addEventListener("DOMContentLoaded", initializeSlider2)

function initializeSlider2() {
    if (slides2.length > 0) {
        slides2[slideIndex2].classList.add("displaySlide");
        intervalId2 = setInterval(nextSlide2, 10_000);
    }
}

function showSlide2(index) {
    if (index >= slides2.length) {
        slideIndex2 = 0;
    }
    else if (index < 0) {
        slideIndex2 = slides2.length - 1;
    }
    slides2.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides2[slideIndex2].classList.add("displaySlide");
}

function previousSlide2() {
    slideIndex2--;
    showSlide2(slideIndex2);
    clearInterval(intervalId1);
}

function nextSlide2() {
    slideIndex2++;
    showSlide2(slideIndex2);
}