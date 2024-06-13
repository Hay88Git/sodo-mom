window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-15%";
    }
}
let ShowNav = function (icon) {
    let Nav = document.querySelector("nav");
    if (Nav.style.left == "0%") {
        Nav.style.left = "-100%";
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    } else {
        Nav.style.left = "0%";
        icon.classList.add("fa-times");
        icon.classList.remove("fa-bars");
    }
}
function copyTextById(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function url(){
    location.href = "https://www.hay88.one/?inviteCode=8528989";
}