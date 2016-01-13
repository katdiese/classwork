
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


//Declared a function myFn with no arguments
function myFn() {
	//created conditional if the length of arguments is greater than three,
	//stop and print to the console "too many arguments", as well as the arguments themselves
	if(arguments.length > 3) {
		console.log("AARG! Too many arguments:");
		console.log(arguments);
	}
	//second conditional: if the number of arguments is exactly equal to zero,
	//stop and log "No arguments!"
	else if (arguments.length === 0) {
		console.log("No arguments!");
	}
	else {
		//if both conditions are false  stop and log "Beginning to read arguments"
		console.log("Beginning to read arguments...");
		//created for...in loop to check each key in the object argument. If the
		//index position is true (not undefined), logs "reading argument # ",...., otherwise skip over
		for(var index in arguments) {
			if(arguments[index]) {
				console.log("Reading argument #", parseInt(index)+1, ": ", arguments[index]);
			}
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