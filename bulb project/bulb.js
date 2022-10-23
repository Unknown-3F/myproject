let Bulb = document.getElementById("button");
let img = document.getElementById("bulb");

Bulb.addEventListener('click', tooglebutton);

function tooglebutton() {
    if (Bulb.textContent.includes('on')) {
        Bulb.textContent = "Turn off";
        img.src = "pic/bulb-on.jpg"
    }
    else{
        Bulb.textContent = "Turn on";
        img.src = "pic/bulb-off.jpg"
    }
}