var nose = document.getElementsByClassName("nose")[0];
nose.addEventListener("click", enlarge);

var mouth = document.getElementsByClassName("mouth")[0];

var speechbottom = document.getElementsByClassName("speechbottom")[0];

var speechtop = document.getElementsByClassName("speechtop")[0];

function enlarge() {
	//adds class on click to enlarge the nose
	nose.classList.add("enlargednose");
	mouth.classList.add("enlargedmouth");
	speechbottom.classList.add("show");
	speechtop.classList.add("hidden");
}


