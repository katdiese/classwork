//generates random number, adds all integers of number together, returns sum

function addNumbers() {
	var randomNumber = Math.floor(Math.random() * ((10000-1000)+1) + 1000);
	var solution = 0;

	randomNumber = randomNumber.toString().split('');
	for(i = 0; i < randomNumber.length; i++) {
		var toNumber = parseInt(randomNumber[i]);
		solution += toNumber;
	}
	console.log(solution);
}

addNumbers();
