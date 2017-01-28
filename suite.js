//global vars
var svg = document.getElementById("svg");
var direct = document.querySelectorAll(".directions");
var display = true;

function wipe() {
	console.log("wiping svg");
  	svg.style.transition = "opacity 0.5s linear 0s";
	svg.style.opacity = 0;
	setTimeout(function(){
  		svg.style.display = "none";
	}, 500);
}

function restore() {
	console.log("restoring svg");
	svg.style.transition = "opacity 0.5s linear 0s";//no transition...
	svg.style.opacity = 1;
	setTimeout(function(){
  		svg.style.display = "inline";
	}, 500);
}

function directions() {
	switch(display) {
		case true:
			wipe();
			console.log("directions displayed");
			setTimeout(function(){
				direct[0].style.transition = "opacity 0.5s linear 0s";//no transition...
				direct[0].style.opacity = 1;
				setTimeout(function(){
					direct[0].style.display = "inline";
					display = false;
				}, 1050);
			}, 550);
			break;
		case false:
			restore();
			console.log("directions deleted");
			direct[0].style.transition = "opacity 0.5s linear 0s";
			direct[0].style.opacity = 0;
			setTimeout(function(){
  		direct[0].style.display = "none";
	}, 500);
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
