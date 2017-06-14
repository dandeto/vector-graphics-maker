var bg = false;
var shape, edit, pts;
var cont = document.getElementById("container");
var inputs = document.querySelectorAll(".hide");//determines which input fields to display

//find which function to run
document.getElementById("shapes").onchange = function(find) { //chrome support
	sfx[5].play();
    if (this.value == "circle") {Ccircle();}
    if (this.value == "rectangle") {Crectangle();}
    if (this.value == "ellipse") {Cellipse();}
    if (this.value == "line") {Cline();}
    if (this.value == "polygon") {Cpolygon();}
    if (this.value == "text") {Ctext();}
};

//update input fields and select shape
function Ccircle() {
	shape = 1; //tells which shape is selected
	removeCont();

	for (var i = 0; i < 5; ++i) {//cycle through nodes 0-4 with class of inputs
		inputs[i].style.display = "inline";
	}
	inputs[5].style.display = "none";
	inputs[6].style.display = "none";
	inputs[7].style.display = "inline";
	inputs[8].style.display = "none";
	inputs[9].style.display = "none";
	inputs[10].style.display = "none";

	inputs[1].placeholder= "x value";//update directions
	inputs[2].placeholder= "y value";
	inputs[7].placeholder= "radius length";
}

function Crectangle() {
	shape = 2;
	removeCont();

	for(var i = 0; i < 9; ++i) {
		inputs[i].style.display = "inline";
	}
	inputs[9].style.display = "none";
	inputs[10].style.display = "none";

	inputs[1].placeholder= "x value";
	inputs[2].placeholder= "y value";
	inputs[7].placeholder= "radius length X";
	inputs[8].placeholder= "radius length Y";
}

function Cellipse() {
	shape = 3;
	removeCont();

	for (var i = 0; i < 5; ++i) {
		inputs[i].style.display = "inline";
	}
	inputs[5].style.display = "none";
	inputs[6].style.display = "none";
	inputs[7].style.display = "inline";
	inputs[8].style.display = "inline";
	inputs[9].style.display = "none";
	inputs[10].style.display = "none";

	inputs[1].placeholder= "x value";
	inputs[2].placeholder= "y value";
	inputs[7].placeholder= "radius length X";
	inputs[8].placeholder= "radius length Y";
}

function Cline() {
	shape = 4;
	removeCont();

	inputs[0].style.display = "none";
	for (var i = 1; i < 5; ++i) { //start at node 1
		inputs[i].style.display = "inline";
	}
	inputs[5].style.display = "none";
	inputs[6].style.display = "none";
	inputs[7].style.display = "inline";
	inputs[8].style.display = "inline";
	inputs[9].style.display = "none";
	inputs[10].style.display = "none";

	inputs[1].placeholder="Starting X coordinate";
	inputs[2].placeholder="Starting Y coordinate";
	inputs[7].placeholder="Ending X coordinate";
	inputs[8].placeholder="Ending Y coordinate";
}

function Cpolygon() {
	shape = 5;
	removeCont();

	inputs[0].style.display = "inline";
	inputs[1].style.display = "none";
	inputs[2].style.display = "none";
	inputs[3].style.display = "inline";
	inputs[4].style.display = "inline";
	for (var i = 5; i < 8; ++i) {
		inputs[i].style.display = "none";
	}
	inputs[8].style.display = "none";
	inputs[9].style.display = "inline";
	inputs[10].style.display = "none";
}

function Ctext() {
	shape = 6;
	removeCont();

	for (var i = 0; i < 5; ++i) {//cycle through nodes 0-4 with class of inputs
		inputs[i].style.display = "inline";
	}
	inputs[5].style.display = "none";
	inputs[6].style.display = "none";
	inputs[7].style.display = "inline";
	inputs[8].style.display = "none";
	inputs[9].style.display = "none";
	inputs[10].style.display = "inline";

	inputs[1].placeholder="x value";
	inputs[2].placeholder="y value";
	inputs[7].placeholder="Font Size";
}

//pre-creation setup
function removeCont() { //cycle through and delete all text inputs for polygons 
	while (cont.hasChildNodes()) {
		cont.removeChild(cont.firstChild);
    }
}

function setPoints() {
	pts = prompt("how many points do you want to have on this polygon?");

	if(pts < 1) {
		alert("Enter a # greater than one.");
	}

	if(pts == 1) {
		alert("You must have more than one point!");
	}

	if(pts == 2) {
		alert("You should use the line tool for a line.");
	}

	if(pts > 100) {
		alert("Making a polygon with over 100 points is ridiculous!");
	}
	removeCont();
	if(pts > 1 && pts < 101) {
		for (var i = 0; i < pts; i++) {
			var x = document.createElement("INPUT");
   			x.setAttribute("type", "text");
   			x.setAttribute("placeholder", "X value");
   			x.setAttribute("class", "in");
    		cont.appendChild(x);
    		var y = document.createElement("INPUT");
    		y.setAttribute("type", "text");
   			y.setAttribute("placeholder", "Y value");
   			y.setAttribute("class", "in");
   			cont.appendChild(y);
    	}
	}
}

//create the SVG element!!
function create() { //vars set to txt values (here so that it doesn't get them onload). allows updates.
	var color = document.getElementById("txt1").value; //var dec for inputs
	var fontsz = document.getElementById("txt2").value;
	var rad = document.getElementById("txt2").value;
	var xr = document.getElementById("txt2").value;
	var xEnd = document.getElementById("txt2").value;
	var xPos = document.getElementById("txt3").value;
	var yPos = document.getElementById("txt4").value;
	var s = document.getElementById("txt5").value;
	var sw = document.getElementById("txt6").value;
	var w = document.getElementById("txt7").value;
	var h = document.getElementById("txt8").value;
	var yr = document.getElementById("txt9").value;
	var yEnd = document.getElementById("txt9").value;
	var t = document.getElementById("txt10").value;

	var points = document.createAttribute("points"); //this is depricated. I need to change this.

//execute function based on shape
	if(shape == 1) {
		circle();
	}
	if(shape == 2) {
		rectangle();
	}
	if(shape == 3) {
		ellipse();
	}
	if(shape == 4) {
		line();
	}
	if(shape == 5) {
		polygon();
	}
	if(shape == 6) {
		text();
	}

	sfx[4].play();

	function text() {
		var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
		document.getElementById("svg").appendChild(txt);
		txt.innerHTML = t;
		//sets attributes
		txt.setAttribute("fill", color);
		txt.setAttribute("x", xPos);
		txt.setAttribute("y", yPos);
		txt.setAttribute("stroke", s);
		txt.setAttribute("stroke-width", sw);
		txt.setAttribute("font-size", fontsz);
		txt.setAttribute("transform", "matrix(1 0 0 1 0 0)");
		txt.setAttribute("onmousedown", "selectElement(evt)");
		txt.setAttribute("class", "svgElem");
		txt.addEventListener("contextmenu", function(event) {
			x = event.clientX;
    		y = event.clientY;
	        captureVars.call(this);
		});
	}

	function circle() {
		var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		document.getElementById("svg").appendChild(cir);

		cir.setAttribute("fill", color);
		cir.setAttribute("r", rad);
		cir.setAttribute("cx", xPos);
		cir.setAttribute("cy", yPos);
		cir.setAttribute("stroke", s);
		cir.setAttribute("stroke-width", sw);
		cir.setAttribute("transform", "matrix(1 0 0 1 0 0)");
		cir.setAttribute("onmousedown", "selectElement(evt)");
		cir.setAttribute("class", "svgElem");
		cir.addEventListener("contextmenu", function(event) {
	        x = event.clientX;
	    	y = event.clientY;
	        captureVars.call(this);
		});
	}

	function ellipse() {
		var ellip = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		document.getElementById("svg").appendChild(ellip);

		ellip.setAttribute("rx", xr);
		ellip.setAttribute("ry", yr);
		ellip.setAttribute("fill", color);
		ellip.setAttribute("cx", xPos);
		ellip.setAttribute("cy", yPos);
		ellip.setAttribute("stroke", s);
		ellip.setAttribute("stroke-width", sw);
		ellip.setAttribute("transform", "matrix(1 0 0 1 0 0)");
		ellip.setAttribute("onmousedown", "selectElement(evt)");
		ellip.setAttribute("class", "svgElem");
		ellip.addEventListener("contextmenu", function(event) {
	        x = event.clientX;
	    	y = event.clientY;
	        captureVars.call(this);
		});
	}

	function rectangle() {
		var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		document.getElementById("svg").appendChild(rect);

		rect.setAttribute("width", w);
		rect.setAttribute("height", h);
		rect.setAttribute("rx", xr);
		rect.setAttribute("ry", yr);
		rect.setAttribute("fill", color);
		rect.setAttribute("x", xPos);
		rect.setAttribute("y", yPos);
		rect.setAttribute("stroke", s);
		rect.setAttribute("stroke-width", sw);
		rect.setAttribute("transform", "matrix(1 0 0 1 0 0)");
		rect.setAttribute("onmousedown", "selectElement(evt)");
		rect.setAttribute("class", "svgElem");
		rect.addEventListener("contextmenu", function(event) {
	        x = event.clientX;
	    	y = event.clientY;
	        captureVars.call(this);
		});
	}

	function line() {
		var lin = document.createElementNS("http://www.w3.org/2000/svg", "line");
		document.getElementById("svg").appendChild(lin);

		lin.setAttribute("x1", xPos);
		lin.setAttribute("y1", yPos);
		lin.setAttribute("x2", xEnd);
		lin.setAttribute("y2", yEnd);
		lin.setAttribute("stroke", s);
		lin.setAttribute("stroke-width", sw);
		lin.setAttribute("transform", "matrix(1 0 0 1 0 0)");
		lin.setAttribute("onmousedown", "selectElement(evt)");
		lin.setAttribute("class", "svgElem");
		lin.addEventListener("contextmenu", function(event) {
	        x = event.clientX;
	    	y = event.clientY;
	        captureVars.call(this);
		});
	}

	function polygon() { //update this with a couple serious for/while loops and vars. should work fine without this junk.
		var round = 1;
		for (var i = 0; i < cont.childNodes.length; i++) { //gets value of every node in order.
			points.value = points.value + cont.childNodes[i].value;

			if (i == cont.childNodes.length -1) {
				round = 0; // don't let there be a random comma or space at the end.
			}

			switch(round) {
					case 0: 
						break;
					case 1: 
						points.value = points.value + ",";
						round ++
						break;
					case 2: 
						points.value = points.value + " ";
						round --
			}
		};

		//keep all of this stuff
		var poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
		document.getElementById("svg").appendChild(poly);

		poly.setAttribute("stroke", s);
		poly.setAttribute("stroke-width", sw);
		poly.setAttribute("fill", color);
		poly.setAttributeNode(points);
		poly.setAttribute("transform", "matrix(1 0 0 1 0 0)");
		poly.setAttribute("onmousedown", "selectElement(evt)");
		poly.setAttribute("class", "svgElem");
		poly.addEventListener("contextmenu", function(event) {
	        x = event.clientX;
	    	y = event.clientY;
	        captureVars.call(this);
		});
	}
}

function update() { // good for now, but needs to work with create function also
	color = document.getElementById("txt1").value; //var dec for inputs
	fontsz = document.getElementById("txt2").value;
	rad = document.getElementById("txt2").value;
	xr = document.getElementById("txt2").value;
	xEnd = document.getElementById("txt2").value;
	xPos = document.getElementById("txt3").value;
	yPos = document.getElementById("txt4").value;
	s = document.getElementById("txt5").value;
	sw = document.getElementById("txt6").value;
	w = document.getElementById("txt7").value;
	h = document.getElementById("txt8").value;
	yr = document.getElementById("txt9").value;
	yEnd = document.getElementById("txt9").value;
	t = document.getElementById("txt10").value;
}

//edit functions -- need to make these 1 thing.
function edit4(txt) {
	sfx[7].play();
	update();
	txt.innerHTML = t;
	txt.setAttribute("fill", color);
	txt.setAttribute("x", xPos);
	txt.setAttribute("y", yPos);
	txt.setAttribute("stroke", s);
	txt.setAttribute("stroke-width", sw);
	txt.setAttribute("font-size", fontsz);
}

function edit3(poly) {
	sfx[7].play();
	update();
	var fill = document.createAttribute("fill");
	var stroke = document.createAttribute("stroke");
	var strokeWidth = document.createAttribute("stroke-width");
	var points = document.createAttribute("points");

	var round = 1;
	for (var i = 0; i < cont.childNodes.length; i++) { //gets value of every node in order.
		points.value = points.value + cont.childNodes[i].value;

		if (i == cont.childNodes.length -1) {
			round = 0; // don't let there be a random comma or space at the end.
		}

		switch(round) {
				case 0: 
					break;
				case 1: 
					points.value = points.value + ",";
					round ++
					break;
				case 2: 
					points.value = points.value + " ";
					round --
		}
	};

	poly.setAttribute("stroke", s);
	poly.setAttribute("stroke-width", sw);
	poly.setAttribute("fill", color);
	poly.setAttributeNode(points);
}

function edit2(lin) {
	sfx[7].play();
	update();
	lin.setAttribute("x1", xPos);
	lin.setAttribute("y1", yPos);
	lin.setAttribute("x2", xEnd);
	lin.setAttribute("y2", yEnd);
	lin.setAttribute("stroke", s);
	lin.setAttribute("stroke-width", sw);
}

function edit(rect) {
	sfx[7].play();
	update();
	rect.setAttribute("fill", color);
	rect.setAttribute("r", rad);
	rect.setAttribute("cx", xPos);
	rect.setAttribute("cy", yPos);
	rect.setAttribute("stroke", s);
	rect.setAttribute("stroke-width", sw);
	rect.setAttribute("width", w);
	rect.setAttribute("height", h);
	rect.setAttribute("rx", xr);
	rect.setAttribute("ry", yr);
	rect.setAttribute("x", xPos);
	rect.setAttribute("y", yPos);
}
