var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listenrs
	setupModeButtons();
	setupSquares();
	resetIt()
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
	//add click listeners and compare each square
	squares[i].addEventListener("click", function(){
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to picked color
		if (clickedColor === pickedColor) {
			changeColors(clickedColor);
			messageDisplay.textContent = "Correct!"
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.background = "none";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected")
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: this.textContent === "Hard" ? numSquares = 6 : numSquares = 9; 
		resetIt();
	});
	}
}


function resetIt(){
	colors = generateRandomColors(numSquares);
	//pick random color from arr
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors?"

	messageDisplay.textContent = "";
	//change colors of square
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else { 
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue"
}


resetButton.addEventListener("click", function(){
resetIt();
})

colorDisplay.textContent = pickedColor; // temporary color display



function changeColors(color){
	//loop through squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num to random colors
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick colors from 0 -255
	var r =  Math.floor(Math.random() * 256);
	var g =  Math.floor(Math.random() * 256);
	var b =  Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}