//This function generates 20 numbers between 1 and 100, and finds the min and max

function generate() {
	for(i = 1; i <= 20; i++) {
		randNum.push(Math.floor(Math.random() * 100));
	}
	console.log(randNum);
	var min = Math.min.apply(null, randNum),
	max = Math.max.apply(null, randNum);
	console.log(min);
	console.log(max);
}

generate();
