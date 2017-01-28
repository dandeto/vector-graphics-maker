//global vars
var svg = document.getElementById("svg");
var direct = document.querySelectorAll(".directions");
var change = document.getElementById("change");
var about = document.getElementById("about");
var display = 0;

function wipe() { //wipe everything
  	svg.style.transition = "opacity 0.5s linear 0s";
	svg.style.opacity = 0;
	change.style.transition = "opacity 0.5s linear 0s";//no transition...
	change.style.opacity = 0;
	about.style.transition = "opacity 0.5s linear 0s";//no transition...
	about.style.opacity = 0;
	direct[0].style.transition = "opacity 0.5s linear 0s";//no transition...
	direct[0].style.opacity = 0;
	setTimeout(function(){
  		svg.style.display = "none";
  		setTimeout(function() {
				change.style.display = "none";
				about.style.display = "none";
				direct[0].style.display = "none";
		}, 1050);
	}, 500);
}

function restore() {
	svg.style.transition = "opacity 0.5s linear 0s";//no transition...
	svg.style.opacity = 1;
	setTimeout(function(){
  		svg.style.display = "inline";
	}, 500);
}

function set() {
	if(display == 1) {
		console.log("if");
		display = 0;
		fade();
	}else {
		console.log("else");
		display = 1;
		fade();
	}
}

function set2() {
	if(display == 2) {
		console.log("if");
		display = 0;
		fade();
	}else {
		console.log("else");
		display = 2;
		fade();
	}
}

function set3() {
	if(display == 3) {
		console.log("if");
		display = 0;
		fade();
	}else {
		console.log("else");
		display = 3;
		fade();
	}
}

function fade() {
	switch(display) {
		case 0: //wipe everything and restore svg
			console.log("case 0");
			wipe();
			setTimeout(function() { //otherwise weird things happen
				restore();
			}, 1050);
			break;
		case 1: //wipe everything and display directions
			console.log("case 1");
			wipe();
			setTimeout(function() {
				direct[0].style.transition = "opacity 0.5s linear 0s";//no transition...
				direct[0].style.opacity = 1;
				setTimeout(function() {
					direct[0].style.display = "inline";
				}, 1050);
			}, 550);
			break;
		case 2: //wipe everything and display Canvas resizer
			console.log("case 2");
			wipe();
			setTimeout(function() {
				change.style.transition = "opacity 0.5s linear 0s";//no transition...
				change.style.opacity = 1;
				setTimeout(function( ){
					change.style.display = "inline";
				}, 1050);
			}, 550);
			break;
		case 3:
			console.log("case 3");
			wipe();
			setTimeout(function() {
				about.style.transition = "opacity 0.5s linear 0s";//no transition...
				about.style.opacity = 1;
				setTimeout(function( ){
					about.style.display = "inline";
				}, 1050);
			}, 550);
			break;
	}
}

function resize() {
	var width = 1000;
	var height = 650;
	var elem = document.querySelectorAll(".resize");
	width = elem[0].value;
	height = elem[1].value;
	svg.setAttribute("width", width);
	svg.setAttribute("height", height);
	svg.appendChild(elem);
}

function saveSession() {
	if (window.localStorage) {
		localStorage.svg = svg.innerHTML;
	}else{
		alert("you don't have access to localstorage capabilities in this browser.");
	}
}

(function () {
    svg.innerHTML = localStorage.svg;
})(); 

function resetSession() {
	localStorage.removeItem("svg");
}
