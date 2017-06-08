var colors = document.querySelectorAll(".color");
function setup() {
	colors = document.querySelectorAll(".color");
	if (colors[0].value.length == 2 && colors[1].value.length == 2 && colors[2].value.length == 2) {
		main();
	}
}

function main() {
	document.getElementById("content").style.backgroundColor = "#" + colors[0].value + colors[1].value + colors[2].value;
	document.getElementById("hex").innerHTML = "The hex code: #" + colors[0].value + colors[1].value + colors[2].value;
}
