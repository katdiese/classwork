//generates random number, returns sum of all integers, removes far left integer
//returns sum of remaining integers, repeats

function addNumbers() {
	var randomNumber = Math.floor(Math.random() * ((10000-1000)+1) + 1000);
	randomNumber = randomNumber.toString().split('');

	while(randomNumber.length > 0) {
		var solution = 0;
		for(i = 0; i < randomNumber.length; i++) {
			var toNumber = parseInt(randomNumber[i]);
			solution += toNumber;
		}
		randomNumber.shift();
		console.log(solution);
	}
}

addNumbers();