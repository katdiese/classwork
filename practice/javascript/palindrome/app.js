function palindrome(word) {
	var convert = word.split("");
	var noSpace = [];
	var backwards = [];

	// console.log(convert);

	for(i = 0; i < word.length; i++) {
		if(convert[i] != " ") {
			noSpace.push(convert[i]);
			backwards.unshift(convert[i]);
		}
	}
	function format(input) {
		input.join('').toUpperCase();
	}
	var compare = format(backwards);
	var compare1 = format(noSpace);
	
	if(compare === compare1) {
		console.log("Hooray! ", word, "is palindrome");
	}
	else {
		console.log(word, "is not palindrome");
	}
}

palindrome("12321");