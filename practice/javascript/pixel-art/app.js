var a = document.getElementsByTagName("body")[0];
var boxColor;

var css = 'div { height: 1em; width: 1em; border: 1px solid black; float: left; margin: 1px; border-radius: 2px; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

var red = document.createElement("div");
a.appendChild(red);
red.style.backgroundColor = "red";

red.onclick = function() {
	boxColor = "red";
}

var green = document.createElement("div");
a.appendChild(green);
green.style.backgroundColor = "green";

green.onclick = function() {
	boxColor = "green";
}

var blue = document.createElement("div");
a.appendChild(blue);
blue.style.backgroundColor = "blue";

blue.onclick = function() {
	boxColor = "blue";
}


for(i = 0; i <= 1000; i++) {
	var div = document.createElement("div");
	a.appendChild(div);
	div.onclick = function() {
		this.style.backgroundColor = boxColor;
		this.style.border = "none";
		this.style.margin = "none";
		this.style.padding = "1px";
	}
}



