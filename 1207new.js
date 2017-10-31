var lightSwitch = document.getElementById("light-switch");
var curtain = document.getElementById("curtain");

lightSwitch.onclick = function () {
	curtain.classList.toggle('fadein');
	return false;
}




// lightSwitch.addEventListener("click", function(){
//     lightSwitch.preventDefault();
// 	lightSwitch.classList.toggle("fadein");	
// })

// function turnOnLights (el) {
//     el.preventDefault();
// 	el.classList.toggle("fadein");
// }
