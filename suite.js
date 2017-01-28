//global vars
var direct = document.querySelectorAll(".directions");
var display = true;

function wipe() {
	alert("wipe");
}

function directions() {
	switch(display) {
		case true:
			console.log("directions displayed");
			direct[0].style.display = "inline";
			display = false;
			break;
		case false:
			console.log("directions displayed");
			direct[0].style.display = "none";
			display = true;
			break;
	}
}

function resize() { 
	alert("resize SVG");
}

function saveSession() { //LS
	alert("save session");
}
