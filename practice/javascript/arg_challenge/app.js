
//How for...in loops work

// var fakeObject = {
// 	a: 2,
// 	b: 3
// }
// for(var index in fakeObject) {
// 	console.log(index);
// 	console.log(fakeObject);
// 	console.log(fakeObject[index]);
// }

function myFn() {
	if(arguments.length > 3) {
		console.log("AARG! Too many arguments:");
		console.log(arguments);
	}
	else if (arguments.length === 0) {
		console.log("No arguments!");
	}
	else {
		console.log("Beginning to read arguments...");
		for(var index in arguments) {
			if(arguments[index]) {
				console.log("Reading argument #", parseInt(index)+1, ": ", arguments[index]);
				// console.log(typeof index);
			}
			// console.log(index);
			// console.log(arguments);
		}
	}
}

myFn();
myFn("first");
myFn("first", "second");
myFn(undefined, "second");
myFn("first", "second", "third");
myFn("first", undefined, "third");
myFn("first", "second", "third", "fourth");
myFn(undefined, "second", undefined, "fourth");