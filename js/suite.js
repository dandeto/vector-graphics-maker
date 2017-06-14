//global vars
var script = document.getElementById("script");
var svgContainer = document.getElementById("svgContainer");
var svg = document.getElementById("svg");
var direct = document.getElementById("directions");
var change = document.getElementById("change");
var about = document.getElementById("about");
var settings = document.getElementById("settings");
var html = document.getElementById("html");
var music = document.getElementById("audio1");
var slider = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var sfx = document.querySelectorAll(".sfx");
var display = 0;

//manipulating functions
function wipe() { //wipe everything
  	svg.style.transition = "opacity 0.5s linear 0s";
	svg.style.opacity = 0;
	change.style.transition = "opacity 0.5s linear 0s";
	change.style.opacity = 0;
	about.style.transition = "opacity 0.5s linear 0s";
	about.style.opacity = 0;
	settings.style.transition = "opacity 0.5s linear 0s";
	settings.style.opacity = 0;
	direct.style.transition = "opacity 0.5s linear 0s";
	direct.style.opacity = 0;
	html.style.transition = "opacity 0.5s linear 0s";
	html.style.opacity = 0;
	setTimeout(function() {
  		svg.style.display = "none";
		change.style.display = "none";
		about.style.display = "none";
		settings.style.display = "none";
		direct.style.display = "none";
		html.style.display = "none";
	}, 500);
}

function restore() {
	svg.style.display = "inline";
	setTimeout(function(){
  		svg.style.transition = "opacity 0.5s linear 0s";
		svg.style.opacity = 1;
	}, 500);
}

function eraseScript() {
	if (localStorage.remove !== "true") { //won't remove script twice
		svg.removeChild(script);
		localStorage.remove = "true";
	}
}

//menu
function set() {
	sfx[2].play();
	if(display == 1) { // Directions
		display = 0;
		fade();
	}else {
		display = 1;
		fade();
	}
}

function set2() { // svg size
	sfx[2].play();
	if(display == 2) {
		display = 0;
		fade();
	}else {
		display = 2;
		fade();
	}
}

function set3() { //about
	sfx[2].play();
	if(display == 3) {
		display = 0;
		fade();
	}else {
		display = 3;
		fade();
	}
}

function set4() { //settings
	sfx[2].play();
	if(display == 4) {
		display = 0;
		fade();
	}else {
		display = 4;
		fade();
	}
}

function set5() { //html code
	sfx[2].play();
	if(display == 5) {
		display = 0;
		fade();
	}else {
		display = 5;
		fade();
	}
}

function fade() {
	switch(display) {
		case 0: //wipe everything and restore svg
			wipe();
			setTimeout(function() {
				restore();
			}, 550);
			break;
		case 1: //wipe everything and display directions
			wipe();
			setTimeout(function() {
				direct.style.display = "inline";
				setTimeout(function() {
					direct.style.transition = "opacity 0.5s linear 0s";//no transition...
					direct.style.opacity = 1;
				}, 1050);
			}, 550);
			break;
		case 2: //wipe everything and display Canvas resizer
			wipe();
			setTimeout(function() {
				change.style.display = "inline";
				setTimeout(function() {
					change.style.transition = "opacity 0.5s linear 0s";
					change.style.opacity = 1;
				}, 1050);
			}, 550);
			break;
		case 3:
			wipe();
			setTimeout(function() {
				about.style.display = "inline";
				setTimeout(function() {
					about.style.transition = "opacity 0.5s linear 0s";
					about.style.opacity = 1;
				}, 1050);
			}, 550);
			break;
		case 4:
			wipe();
			setTimeout(function() {
				settings.style.display = "inline";
				setTimeout(function() {
					settings.style.transition = "opacity 0.5s linear 0s";
					settings.style.opacity = 1;
				}, 1050);
			}, 550);
			break;
		case 5:
			wipe();
			setTimeout(function() {
				html.style.display = "inline";
				cleanup();//remove script before stuff happens
				var width= svg.getAttribute("width");
				var height= svg.getAttribute("height");
				html.textContent = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="' + width +  '" height="' + height + '">' + svg.innerHTML + "</svg>"; //must be text content, b/c innerHTML will acctually run code.
				fix();
				svg.setAttribute("style", "display:none;");
				setTimeout(function() {
					html.style.transition = "opacity 0.5s linear 0s";
					html.style.opacity = 1;
				}, 1050);
			}, 550);
			break;
	}
}

function resize() {
	sfx[4].play();
	var width = 1000;
	var height = 650;
	var elem = document.querySelectorAll(".resize");
	width = elem[0].value;
	height = elem[1].value;
	svg.setAttribute("width", width);
	svg.setAttribute("height", height);
	svg.appendChild(elem);
}

function toggleBG() {
	sfx[3].play();
	var field = document.getElementById("svg");
	if(bg == false) {
		field.style.background = "url('img/square.svg')";
		bg = true;
	}
	else {
		field.style.background = "";
		bg = false;
	}
}

function github() {
	window.open("https://github.com/dandeto/vector-graphics-maker", "_blank");
}

function openNew(){
    var editor = window.open("window/index.html", "mywin", "width=800, height=450");
}

//memory
function saveSession() {
	sfx[0].play();
	if (window.localStorage) {
		localStorage.save = "1";
		var sw = svg.getAttribute("width");//in this scope so it can be updated.
		var sh = svg.getAttribute("height");
		eraseScript();
		localStorage.svg = svg.innerHTML;
		localStorage.width = sw;
		localStorage.height = sh;
		console.log(sw + " " + sh);
	}else {
		alert("you don't have access to localstorage capabilities in this browser.");
	}
}

(function () {
	if (localStorage.getItem("save") === null) { //immedietly assign save value
  		localStorage.save = 0;
	}
	
	if (localStorage.audio === undefined) {
		localStorage.audio = 1;
		music.volume = 1;
	}

	if (localStorage.audio !== undefined) {
		music.volume = localStorage.audio;
		slider.value = localStorage.audio;
	}

	if (localStorage.sfx === undefined) {
		for (var i = 0; i < sfx.length; i++) {
			sfx[i].volume = 1;
		}
		localStorage.sfx = 1;
	}

	if (localStorage.sfx !== undefined) {//not null
		for (var i = 0; i < sfx.length; i++) {
			sfx[i].volume = localStorage.sfx;
		}
		slider2.value = localStorage.sfx;
	}

	if (localStorage.save == 1) {//saving takes precident over default height / width svg
		eraseScript();
		svg.innerHTML = localStorage.svg;
	} else {
		localStorage.remove = "false";
	}
})();

function resetSession() {
	sfx[1].play();
	setTimeout(function() {
		localStorage.removeItem("svg");
		localStorage.removeItem("width");
		localStorage.removeItem("height");
		localStorage.removeItem("remove");
		localStorage.removeItem("audio");
		localStorage.removeItem("sfx");
		localStorage.save = 0;
		location.reload();
	}, 750);
}

function playclicksound() {
	sfx[6].play();
}

function volumeM() {
	localStorage.audio = slider.value;
	music.volume = slider.value;

}

function volumeS() {
	localStorage.sfx = slider2.value;
	for (var i = 0; i < sfx.length; i++) {
		sfx[i].volume = slider2.value;
	}
	sfx[2].play();
}
