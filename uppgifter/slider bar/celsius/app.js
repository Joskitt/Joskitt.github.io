let buttonkw = document.getElementById("kilo");
let buttonhp = document.getElementById("horse");
let svar = document.getElementById("svar");

    function getInputValueHp(){
            let inputVal = document.getElementById("horsepower").value;
            let hpkw = (inputVal * 9 / 5) + 32;
            svar.innerHTML = hpkw.toFixed(0) + " ° fahrenheit"; 
     }

     function getInputValueKw(){
        let inputVal = document.getElementById("kilowatt").value;
        let kwhp = (inputVal - 32) * 5 / 9;
        svar.innerHTML = kwhp.toFixed(0) + " ° Celcius"; 
 }



function toggleMenu(){
    let navigation = document.querySelector(".navigation");
    let toggle = document.querySelector(".toggle");
    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
}