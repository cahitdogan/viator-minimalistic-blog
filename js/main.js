
function openerWithClickBlocker(elementId) {
    const elementToOpen = document.getElementById(elementId);
    elementToOpen.style.display = "block";

    const clickBlocker = document.getElementById("click-blocker");
    clickBlocker.style.display = "block";

    clickBlocker.addEventListener("click", function () {
        clickBlocker.style.display = "none";
        elementToOpen.style.display = "none";
    });
}

function closerWithClickBlocker(elementId) {
    const elementToClose = document.getElementById(elementId);
    elementToClose.style.display = "none";

    const clickBlocker = document.getElementById("click-blocker");
    clickBlocker.style.display = "none";
}

const elementToOpen = document.getElementById('mobile-categories-list');
const button = document.getElementById('categories-button');

button.addEventListener("click", function () {
    if (elementToOpen.style.display == "block") {
        elementToOpen.style.display = "none";
    } else {
        elementToOpen.style.display = "block";
    }
})















// Q: Why is the #logo element move right when the lightMode() function run?
