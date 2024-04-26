const modeToggle = document.getElementById("modeToggle");
const modeImg = document.getElementById("modeImg");
let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
    modeImg.src = "img/dark_mode.png";
    modeImg.alt = "🌚"
}

function disableDarkMode() {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
    modeImg.src = "img/light_mode.png";
    modeImg.alt = "🌞"
}

if (darkMode == "enabled") {
    enableDarkMode();
    modeImg.src = "img/dark_mode.png";
    modeImg.alt = "🌚"
}

modeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode != "enabled") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
})