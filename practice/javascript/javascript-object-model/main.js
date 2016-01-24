// var person = {name: 'Kathy', role: 'Student'}
// var human = function(firstName, lastName) {
//   this.firstname = firstName;
//   this.lastname = lastName;
//   this.energy = 50;
//   this.powerLevel = "Over 9000!";
//   this.speak = "Hi, how are you?";
//   this.sayHeight = function() {
//     this.height = 'I am ' + this.height
//  + ' inches tall';}
//   this.heightFeet = function() {
//     this.sayHeight = function() {
//       return 'I am ' + this.height / 12 + this.height % 12
//  + 'feet tall';}
//   }
//   this.silence = function() {
//     this.speak = "*crickets chirp*"
//   }
//   this.runAMarathon = function() {
//     this.powerLevel = 0;
//     this.energy = "Time for a nap";
//   }
// }

// var kath = new human('Kathy','Dieser');
// // console.log(kath);
// kath.height = 62;
// // this.heightFeet();
// kath.sayHeight();
// kath.heightFeet();
// console.log(kath);

// var wes = new human('Wes', 'Reid');
// console.log(wes);

// var chapstick = function() {
//   this.color = 'yellow',
//   this.volume = 100,
//   this.capped = true
// }
//  var mychapstick = new chapstick;

// mychapstick.cap = function() {
//   this.capped = true;
// }

// var kathysChapstick = new chapstick;
// kathysChapstick.volume = "100%";
// kathysChapstick.capped = false;
// console.log(kathysChapstick);


var sandwich = function() {
  this.bread = "wheat";
  this.meat = "turkey";
  this.fresh = true;
  this.cheese = "cheddar";
  this.vegetables = "lettuce, tomatoes"
  this.changeBread = function(breadtype) {
    this.bread = breadtype;
  }
  this.addMeat = function(meat) {
    this.meat = this.meat + ", " + meat;
  }
  this.addCheese = function(cheese) {
    this.cheese = this.cheese + ", " + cheese;
  }
  this.grilledCheese = function() {
    this.bread = "white";
    this.meat = "none";
    this.vegetables = "none";
    this.grilled = "golden brown";
  }
  this.amountOfSandwich = 100;
  this.eat = function() {
    while(this.amountOfSandwich > 0) {
      this.amountOfSandwich = this.amountOfSandwich - 10;
      console.log(this.amountOfSandwich + "% of the sandwich is left" + '\n');
    }
    console.log("the sandwich is gone :(")
  }
}

var mySandwich = new sandwich;
var vegetarianSandwich = new sandwich;
var meatySandwich = new sandwich;
vegetarianSandwich.grilledCheese();
mySandwich.addMeat("bacon");
mySandwich.addCheese("provolone, swiss");
meatySandwich.addMeat("ham, roast beef, chicken breast");
// console.log(vegetarianSandwich);
// console.log(mySandwich);
mySandwich.eat();

