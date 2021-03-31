let button = document.getElementById("knapp");
let parent = document.getElementById("parent");

button.addEventListener("click", bgchange)

function bgchange() {
    parent.style.background = "red"
}