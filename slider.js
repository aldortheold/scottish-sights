let slides = [];
let slideIndexes = [];
let intervalIds = [];

for (let i = 0; i < 7; i++) {
    slideIndexes.push(0);
    intervalIds.push(null);
    slides.push(document.querySelectorAll(`.slides${i + 1} img`));
    document.addEventListener("DOMContentLoaded", () => initializeSlider(i));
}

function initializeSlider(slide) {
    if (slides[slide].length > 0) {
        slides[slide][slideIndexes[slide]].classList.add("displaySlide");
        intervalIds[slide] = setInterval(() => nextSlide(slide), 10_000);
    }
}

function showSlide(slide, index) {
    if (index >= slides[slide].length) {
        slideIndexes[slide] = 0;
    }
    else if (index < 0) {
        slideIndexes[slide] = slides[slide].length - 1;
    }
    slides[slide].forEach(img => {
        img.classList.remove("displaySlide");
    });
    slides[slide][slideIndexes[slide]].classList.add("displaySlide");
}

function previousSlide(slide) {
    slideIndexes[slide]--;
    showSlide(slide, slideIndexes[slide]);
    clearInterval(intervalIds[slide]);
}

function nextSlide(slide) {
    slideIndexes[slide]++;
    showSlide(slide, slideIndexes[slide]);
}