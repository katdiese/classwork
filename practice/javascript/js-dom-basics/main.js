
var getSingleElement = document.getElementsByTagName('ul')[0];

//selecting elements by tag name
var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var allListItems = document.getElementsByTagName('li');
console.log(allListItems);

for(var i = 0; i <allListItems.length; i++) {
	console.log(allListItems[i]);
}

//selecting elements by class name
var evenElements = document.getElementsByClassName('even');
console.log(evenElements);
var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);
var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);
var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

//selecting elements by querySelector
var main = document.querySelector('#main');
console.log(main);
var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

//selecting elements by querySelectorAll
var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
}

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

document.getElementById('main').style.backgroundColor = "goldenrod";


var evenLi = document.getElementsByClassName('even');
var oddLi = document.getElementsByClassName('odd');
for(i = 0; i < evenLi.length; i++) {
	evenLi[i].style.backgroundColor = "red";
}
for(i = 0; i < oddLi.length; i++) {
	oddLi[i].style.backgroundColor = "green";
}

var li = document.createElement('li');
console.log(li);
var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(li);

getSingleElement.appendChild(li);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);

getSingleElement.removeChild(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);
var del = getSingleElement.lastChild;
console.log(del);
getSingleElement.removeChild(del);


