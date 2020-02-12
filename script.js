const H3 = document.querySelector("h3");
const COLOR1 = document.querySelector(".color1");
const COLOR2 = document.querySelector(".color2");
const BODY = document.querySelector("body");

function setGradient(){
    BODY.style.background = "linear-gradient(to right, " +
        COLOR1.value + ", " + COLOR2.value + ")";
    
    H3.textContent = BODY.style.background + ";";
};


COLOR1.addEventListener("input", setGradient);

COLOR2.addEventListener("input", setGradient);