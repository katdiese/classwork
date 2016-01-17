var bodyTag = document.getElementsByTagName("body")[0];
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

var newDiv;


for(i = 0; i <= 1000; i++) {
	var div = document.createElement("div");
	bodyTag.appendChild(div);
	div.onclick = function() {
		this.style.backgroundColor = boxColor;
		this.style.border = "none";
		this.style.margin = "none";
		this.style.padding = "1px";
	}
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

for(i = 0; i < colors.length; i++) {
	newDiv = document.createElement("div");
	newDiv.style.backgroundColor = colors[i];
	bodyTag.appendChild(newDiv);
	newDiv.onclick = function() {
		boxColor = this.style.backgroundColor;
	}
}



