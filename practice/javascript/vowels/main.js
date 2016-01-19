var check = ["A", "E", "I", "O", "U"];
var vowelsIn = [];
var solution = [];

function vowels(word) {
  var allCaps = word.toUpperCase();
  allCaps = allCaps.split('');
  for(i = 0; i < allCaps.length; i++) {
    for(x = 0; x < check.length; x++) {;
      if(check[x] === allCaps[i]) {
        vowelsIn.push(allCaps[i]);
      }
    }
  }
  vowelsIn.sort();
  for(i = 0; i < vowelsIn.length; i++) {
    var a = i-1;
    solution.push(vowelsIn[i])
    if(vowelsIn[i] === vowelsIn[a]) {
      console.log(false);
      return;
    }
  }
  console.log("No matches!");
}
vowels("unicorn meow");

