
let parentElement = document.getElementById("parent");
let startTime = null;
let scoreElement = document.getElementById("score");

window.addEventListener("click", onBodyClicked)


    document.body.style.background = "red";
    parentElement.style.display = "none";
    setTimeout(bgGreen, 3000 + 4000 * Math.random())
    buttonElement.style.display = "none"
    
function bgGreen() {
    document.body.style.background = "green";
    startTime = new Date();
}
function onBodyClicked() {
    if(startTime == null) {
        scoreElement.innerHTML = ('Du klickade för snabbt!');
      }
      else {
        const endTime = new Date();
        const deltaTime = endTime.getTime() - startTime.getTime();
        scoreElement.innerHTML = (deltaTime);
      }
    
    parentElement.style.display = "flex";
    buttonElement.style.display = "block"
}

