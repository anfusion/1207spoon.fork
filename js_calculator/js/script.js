const no1 = document.getElementById('n1');
const no2 = document.getElementById('n2');
const no3 = document.getElementById('n3');
const no4 = document.getElementById('n4');
const no5 = document.getElementById('n5');
const no6 = document.getElementById('n6');
const no7 = document.getElementById('n7');
const no8 = document.getElementById('n8');
const no9 = document.getElementById('n9');
const no0 = document.getElementById('n0');
const noDec = document.getElementById('nDec');
const ac = document.getElementById('acbtn');
const divide = document.getElementById('dividebtn');
const times = document.getElementById('timesbtn');
const plus = document.getElementById('plusbtn');
const minus = document.getElementById('minusbtn');
const equals = document.getElementById('equalsbtn');
const displayed = document.getElementById('displayField');

const numBtnArr = [no0, no1, no2, no3, no4, no5, no6, no7, no8, no9, noDec];
const btnArr = [no0, no1, no2, no3, no4, no5, no6, no7, no8, no9, noDec, divide, times, plus, minus, equals];


let curTotal = 0;
let curInput = 0;
let opFunc = "empty";
let curPushed = 0;
let lastClicked;

clear();


//OPERATOR FUNCTIONS
const preDivide = a => b => a / b;
const preTimes = a => b => a * b;
const preMinus = a => b => a - b;
const prePlus = a => b => a + b;

//add the number click function to each number button
for (let i = 0; i < numBtnArr.length; i++) {
	numBtnArr[i].addEventListener('click', function(){
		if (lastClicked === "equalsBtn") {
			curTotal = 0;
		}
		curPushed = this.innerHTML;
		//if a new calculation is started
			//if it is the first number input by user eg. "1"
			if (lastClicked !== "number") {
				lastClicked = "number";
				curInput = curPushed;
			} else {
				if (curPushed === 0 && curInput === "0") {
					curPushed = 0;
				} else if (curInput === "0") {
					curInput = curPushed;
				} else if (curPushed === ".") {
					if (curInput.slice(-1) === ".") {
					} else if (curInput.includes(".")){
						//make sure it is the only dec point
					} else {
						curInput += curPushed;
					}
				} else {
				//if there is multidigit input eg. "14"
				curInput += curPushed;
				}
			}
		isItTooBig(curInput);
	});
}




//OPERATOR BUTTONS
divide.addEventListener('click', function(){
	doTheMath(preDivide);
});

times.addEventListener('click', function(){
	doTheMath(preTimes);
});

minus.addEventListener('click', function(){
	doTheMath(preMinus);
});

plus.addEventListener('click', function(){
	doTheMath(prePlus);
});

ac.addEventListener('mousedown', function(){
	clear();
	fieldFeedback();
});

equals.addEventListener('click', function(){
	fieldFeedback();
	if (lastClicked && lastClicked !== "operator") {
		//evaluate current
		//is there any number to work with?
		if (curTotal || curTotal === 0 && opFunc !== "empty") {
			curTotal = opFunc(Number(curInput));
			curInput = curTotal;
			opFunc = "empty";
		} else {
			curTotal = Number(curInput);
			opFunc = "empty";
		}
	} else {
		//reset
		opFunc = "empty";
	}
	if (displayed.innerHTML === "."){
		clear();
	}
	isItTooBig(curTotal);
	// displayed.innerHTML = curTotal;
	lastClicked = "equalsBtn";
});



//Processes the numbers
function doTheMath(mathOperator){
	//checks to see if the button clicked last was a number
	//if a num was clicked last, the current input and the subtotal are evaluated
	fieldFeedback();
	if (lastClicked !== "operator") {
		lastClicked = "operator";
		//checks to see if there are numbers to work with
		if (curTotal) {
			if (opFunc === "empty") {
				opFunc = mathOperator(Number(curTotal));
			} else {
			//opFunc preloaded with previous total is evaluated against current input and stored as current total
			curTotal = opFunc(Number(curInput));
			//new current total is stored in the operator closure
			opFunc = mathOperator(Number(curTotal));
			}
		} else {
			//if first operation, current total receives value of current input
			curTotal = Number(curInput);
			//current total is stored in operator closure
			opFunc = mathOperator(curTotal);
		}
		displayed.innerHTML = curTotal;
	} else {
	//if a num was not clicked last, the operator func is cleared, and the current total is shown
		clear();
		isItTooBig(curTotal);
		// displayed.innerHTML = curTotal;
	}
}

function clear(){
	curTotal = 0;
	curInput = 0;
	opFunc = "empty";
	curPushed = 0;
	lastClicked = false;
}

function fieldFeedback(){
	displayed.classList.add("selected-field");
	displayed.innerHTML = curTotal;
	setTimeout(function(){
		displayed.classList.remove("selected-field");
	}, 100);
}

function isItTooBig(n) {
	//find length of number
	if (n.toString().length > 12) {
		clear();
		displayed.innerHTML = "Exceeds Limit";
	} else {
	displayed.innerHTML = n;			
	}
}
