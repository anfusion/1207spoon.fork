function init(){
	turnOnLights();
}

var lightSwitch = document.querySelector("#light-switch")
var curtain = document.querySelector("#curtain")

lightSwitch.addEventListener("click", turnOnLights)

function turnOnLights () {
	curtain.className += "fadein";
    event.preventDefault();
}
