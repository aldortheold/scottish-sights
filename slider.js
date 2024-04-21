const slides1 = document.querySelectorAll(".slides1 img");
const slides2 = document.querySelectorAll(".slides2 img");
const slides3 = document.querySelectorAll(".slides3 img");
const slides4 = document.querySelectorAll(".slides4 img");
const slides5 = document.querySelectorAll(".slides5 img");
const slides6 = document.querySelectorAll(".slides6 img");
const slides7 = document.querySelectorAll(".slides7 img");

let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;
let slideIndex5 = 0;
let slideIndex6 = 0;
let slideIndex7 = 0;

let intervalId1 = null;
let intervalId2 = null;
let intervalId3 = null;
let intervalId4 = null;
let intervalId5 = null;
let intervalId6 = null;
let intervalId7 = null;

document.addEventListener("DOMContentLoaded", initializeSlider1);
document.addEventListener("DOMContentLoaded", initializeSlider2);
document.addEventListener("DOMContentLoaded", initializeSlider3);
document.addEventListener("DOMContentLoaded", initializeSlider4);
document.addEventListener("DOMContentLoaded", initializeSlider5);
document.addEventListener("DOMContentLoaded", initializeSlider6);
document.addEventListener("DOMContentLoaded", initializeSlider7);

function initializeSlider1() {
    if (slides1.length > 0) {
        slides1[slideIndex1].classList.add("displaySlide");
        intervalId1 = setInterval(nextSlide1, 10_000);
    }
}

function initializeSlider2() {
    if (slides2.length > 0) {
        slides2[slideIndex2].classList.add("displaySlide");
        intervalId2 = setInterval(nextSlide2, 10_000);
    }
}

function initializeSlider3() {
    if (slides3.length > 0) {
        slides3[slideIndex3].classList.add("displaySlide");
        intervalId3 = setInterval(nextSlide3, 10_000);
    }
}

function initializeSlider4() {
    if (slides4.length > 0) {
        slides4[slideIndex4].classList.add("displaySlide");
        intervalId4 = setInterval(nextSlide4, 10_000);
    }
}

function initializeSlider5() {
    if (slides5.length > 0) {
        slides5[slideIndex5].classList.add("displaySlide");
        intervalId5 = setInterval(nextSlide5, 10_000);
    }
}

function initializeSlider6() {
    if (slides6.length > 0) {
        slides6[slideIndex6].classList.add("displaySlide");
        intervalId6 = setInterval(nextSlide6, 10_000);
    }
}

function initializeSlider7() {
    if (slides7.length > 0) {
        slides7[slideIndex7].classList.add("displaySlide");
        intervalId7 = setInterval(nextSlide7, 10_000);
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

function previousSlide1() {
    slideIndex1--;
    showSlide1(slideIndex1);
    clearInterval(intervalId1);
}

function previousSlide2() {
    slideIndex2--;
    showSlide2(slideIndex2);
    clearInterval(intervalId1);
}

function previousSlide3() {
    slideIndex3--;
    showSlide3(slideIndex3);
    clearInterval(intervalId3);
}

function previousSlide4() {
    slideIndex4--;
    showSlide4(slideIndex4);
    clearInterval(intervalId4);
}

function previousSlide5() {
    slideIndex5--;
    showSlide5(slideIndex5);
    clearInterval(intervalId5);
}

function previousSlide6() {
    slideIndex6--;
    showSlide6(slideIndex6);
    clearInterval(intervalId6);
}

function previousSlide7() {
    slideIndex7--;
    showSlide7(slideIndex7);
    clearInterval(intervalId7);
}

function nextSlide1() {
    slideIndex1++;
    showSlide1(slideIndex1);
}

function nextSlide2() {
    slideIndex2++;
    showSlide2(slideIndex2);
}

function nextSlide3() {
    slideIndex3++;
    showSlide3(slideIndex3);
}

function nextSlide4() {
    slideIndex4++;
    showSlide4(slideIndex4);
}

function nextSlide5() {
    slideIndex5++;
    showSlide5(slideIndex5);
}

function nextSlide6() {
    slideIndex6++;
    showSlide6(slideIndex6);
}

function nextSlide7() {
    slideIndex7++;
    showSlide7(slideIndex7);
}