var randomNum = Math.floor((Math.random() * 100 ) + 1);
console.log(randomNum);
console.log(feedback);

var guess = document.getElementById("guess");
var alreadyGuessed = document.getElementById("guesses");
console.log(alreadyGuessed);

function compare() {
	var isNumber = (parseInt(guess.value));
	function logGuess() {
		alreadyGuessed.innerHTML = alreadyGuessed.innerHTML + isNumber + ", ";
	}
	console.log(isNumber);
	if(isNumber < randomNum) {
		// console.log("Too Low!");
		feedback.innerHTML = "Too low!!";
		logGuess();
	}
	else if(isNumber > randomNum) {
		// console.log("Too High!");
		feedback.innerHTML = "Too high!!";
		logGuess();
	}
	else if(isNumber === randomNum) {
		// console.log("That's it! You win.");
		feedback.innerHTML = "";
		alert("You Win!");
	}
	else {
		// console.log("Please enter a number between 1 and 100");
		feedback.innerHTML = "Please enter a number between 1 and 100.";
	}

}
