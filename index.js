var bg = false;
var cr = false;
var rc = false;
var el = false;
var ln = false;
var pol = false;
var tx = false;
var cont = document.getElementById("container");
var inputs = document.querySelectorAll(".hide");//determines which input fields to display
var pts;

function Ccircle() {
	//tells which shape is selected
	cr = true;
	rc = false;
	el = false;
	ln = false;
	pol = false;
	tx = false;

	removeCont();

	for (var i = 0; i < 5; ++i) {//cycle through nodes 0-4 with class of inputs
		inputs[i].style.display = "inline";
	}
	//inputs[5].style.display = "none";
	inputs[6].style.display = "none";
	inputs[7].style.display = "inline";
	inputs[8].style.display = "none";
	inputs[9].style.display = "none";
	inputs[10].style.display = "none";

	//update directions
	inputs[1].placeholder= "x value";
	inputs[2].placeholder= "y value";
	inputs[7].placeholder= "radius length";
}

function Crectangle() {
	cr = false;
	rc = true;
	el = false;
	ln = false;
	pol = false;
	tx = false;

	removeCont();

	for(var i = 0; i < 9; ++i) {
		inputs[i].style.display = "inline";
	}
	//inputs[9].style.display = "none";
	inputs[10].style.display = "none";

	inputs[1].placeholder= "x value";
	inputs[2].placeholder= "y value";
	inputs[7].placeholder= "radius length X";
	inputs[8].placeholder= "radius length Y";
}

function Cellipse() {
	cr = false;
	rc = false;
	el = true;
	ln = false;
	pol = false;
	tx = false;

	removeCont();

	for (var i = 0; i < 5; ++i) {
		inputs[i].style.display = "inline";
	}
	//inputs[5].style.display = "none";
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
	cr = false;
	rc = false;
	el = false;
	ln = true;
	pol = false;
	tx = false;

	removeCont();

	inputs[0].style.display = "none";
	for (var i = 1; i < 4; ++i) {//start at node 1
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
	cr = false;
	rc = false;
	el = false;
	ln = false;
	pol = true;
	tx = false;

	removeCont();

	inputs[0].style.display = "inline";
	inputs[1].style.display = "none";
	inputs[2].style.display = "none";
	inputs[3].style.display = "inline";
	inputs[4].style.display = "inline";
	for (var i = 5; i < 8; ++i) {
		inputs[i].style.display = "none";
	}
	inputs[9].style.display = "inline";
	inputs[10].style.display = "none";
}

function Ctext() {
	cr = false;
	rc = false;
	el = false;
	ln = false;
	pol = false;
	tx = true;

	removeCont();

	for (var i = 0; i < 4; ++i) {//cycle through nodes 0-4 with class of inputs
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

function removeCont() {
	while (cont.hasChildNodes()) {
		cont.removeChild(cont.firstChild);
    }
}

function setPoints() {
	//gets #of points from user
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

	if(pts > 5) {
		alert("You can only have a max of 5 points, sorry.");
	}
	removeCont();
	if(pts > 1 && pts < 6) {
		for (var i = 0; i < pts; i++) {
			var x = document.createElement("INPUT");
   			x.setAttribute("type", "text");
   			x.setAttribute("placeholder", "X value");
    		cont.appendChild(x);
    		var y = document.createElement("INPUT");
    		y.setAttribute("type", "text");
   			y.setAttribute("placeholder", "Y value");
   			cont.appendChild(y);
    	}
	}
}

function create() {//vars set to txt values (here so that it doesn't get them onload). allows updates.
	var color = document.getElementById("txt1").value;//var dec for inputs
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

	var fill = document.createAttribute("fill");//var dec for attributes
	var xposition = document.createAttribute("x");
	var yposition = document.createAttribute("y");
	var stroke = document.createAttribute("stroke");
	var strokeWidth = document.createAttribute("stroke-width");
	var style = document.createAttribute("style");
	var click = document.createAttribute("onclick");
	var radius = document.createAttribute("r");
	var cxposition = document.createAttribute("cx");
	var cyposition = document.createAttribute("cy");
	var xradius = document.createAttribute("rx");
	var yradius = document.createAttribute("ry");
	var width = document.createAttribute("width");
	var height = document.createAttribute("height");
	var fxposition = document.createAttribute("x1");
	var fyposition = document.createAttribute("y1");
	var exposition = document.createAttribute("x2");
	var eyposition = document.createAttribute("y2");
	var points = document.createAttribute("points");

	fill.value = color;//implementations
	radius.value = rad;
	stroke.value = s;
	strokeWidth.value = sw;

	if(cr == true) {
		circle();
	}
	if(rc == true) {
		rectangle();
	}
	if(el == true) {
		ellipse();
	}
	if(ln == true) {
		line();
	}
	if(pol == true) {
		polygon();
	}
	if(tx == true) {
		text();
	}

	function text() {
		style.value = "font-size:" + fontsz;
		click.value = "edit4(this)";//creates edit function onclick
		xposition.value = xPos;
		yposition.value = yPos;

		var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
		document.getElementById("svg").appendChild(txt);
		txt.innerHTML = t;
		//sets attributes
		txt.setAttributeNode(fill);
		txt.setAttributeNode(xposition);
		txt.setAttributeNode(yposition);
		txt.setAttributeNode(stroke);
		txt.setAttributeNode(strokeWidth);
		txt.setAttributeNode(click);
		txt.setAttributeNode(style);
	}

	function circle() {
		cxposition.value = xPos;
		cyposition.value = yPos;
		click.value = "edit(this)";

		var cir = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		document.getElementById("svg").appendChild(cir);

		cir.setAttributeNode(radius);
		cir.setAttributeNode(fill);
		cir.setAttributeNode(cxposition);
		cir.setAttributeNode(cyposition);
		cir.setAttributeNode(stroke);
		cir.setAttributeNode(strokeWidth);
		cir.setAttributeNode(click);
		cir.setAttributeNode(rClick);
	}

	function ellipse() {
		xradius.value = xr;
		yradius.value = yr;
		cxposition.value = xPos;
		cyposition.value = yPos;
		click.value = "edit(this)";

		var ellip = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		document.getElementById("svg").appendChild(ellip);

		ellip.setAttributeNode(xradius);
		ellip.setAttributeNode(yradius);
		ellip.setAttributeNode(fill);
		ellip.setAttributeNode(cxposition);
		ellip.setAttributeNode(cyposition);
		ellip.setAttributeNode(stroke);
		ellip.setAttributeNode(strokeWidth);
		ellip.setAttributeNode(click);
	}


	function rectangle() {
		width.value = w;
		height.value = h;
		xradius.value = xr;
		yradius.value = yr;
		xposition.value = xPos;
		yposition.value = yPos;
		click.value = "edit(this)";

		var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		document.getElementById("svg").appendChild(rect);

		rect.setAttributeNode(width);
		rect.setAttributeNode(height);
		rect.setAttributeNode(xradius);
		rect.setAttributeNode(yradius);
		rect.setAttributeNode(fill);
		rect.setAttributeNode(xposition);
		rect.setAttributeNode(yposition);
		rect.setAttributeNode(stroke);
		rect.setAttributeNode(strokeWidth);
		rect.setAttributeNode(click);
	}


	function line() {
		fxposition.value = xPos;
		fyposition.value = yPos;
		exposition.value = xEnd;
		eyposition.value = yEnd;
		click.value = "edit2(this)";

		var lin = document.createElementNS("http://www.w3.org/2000/svg", "line");
		document.getElementById("svg").appendChild(lin);

		lin.setAttributeNode(fxposition);
		lin.setAttributeNode(fyposition);
		lin.setAttributeNode(exposition);
		lin.setAttributeNode(eyposition);
		lin.setAttributeNode(stroke);
		lin.setAttributeNode(strokeWidth);
		lin.setAttributeNode(click);
	}


	function polygon() {
		var point1 = cont.childNodes[0].value;
		var point2 = cont.childNodes[1].value;
		var point3 = cont.childNodes[2].value;
		var point4 = cont.childNodes[3].value;

		if(pts == 2) {
			points.value = point1+","+point2+" "+point3+","+point4;
		}

		if(pts == 3) {
			var point5 = cont.childNodes[4].value;
			var point6 = cont.childNodes[5].value;
			points.value = point1+","+point2+" "+point3+","+point4+" "+point5+","+point6;
		}

		if(pts == 4) {
			var point5 = cont.childNodes[4].value;
			var point6 = cont.childNodes[5].value;
			var point7 = cont.childNodes[6].value;
			var point8 = cont.childNodes[7].value;
			points.value = point1+","+point2+" "+point3+","+point4+" "+point5+","+point6+" "+point7+","+point8;
		}

		if(pts == 5) {
			var point5 = cont.childNodes[4].value;
			var point6 = cont.childNodes[5].value;
			var point7 = cont.childNodes[6].value;
			var point8 = cont.childNodes[7].value;
			var point9 = cont.childNodes[8].value;
			var point10 = cont.childNodes[9].value;
			points.value = point1+","+point2+" "+point3+","+point4+" "+point5+","+point6+" "+point7+","+point8+" "+point9+","+point10;
		}

		click.value = "edit3(this)";

		var poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
		document.getElementById("svg").appendChild(poly);

		poly.setAttributeNode(stroke);
		poly.setAttributeNode(strokeWidth);
		poly.setAttributeNode(fill);
		poly.setAttributeNode(points);
		poly.setAttributeNode(click);
	}
}

function edit4(txt) {
	color = document.getElementById("txt1").value;
	fontsz = document.getElementById("txt2").value;
	xPos = document.getElementById("txt3").value;
	yPos = document.getElementById("txt4").value;
	s = document.getElementById("txt5").value;
	sw = document.getElementById("txt6").value;
	t = document.getElementById("txt10").value;

	fill = document.createAttribute("fill");
	stroke = document.createAttribute("stroke");
	strokeWidth = document.createAttribute("stroke-width");
	xposition = document.createAttribute("x");
	yposition = document.createAttribute("y");
	style = document.createAttribute("style");

	fill.value = color;
	xposition.value = xPos;
	yposition.value = yPos;
	stroke.value = s;
	strokeWidth.value = sw;
	style.value = "font-size:" + fontsz;

	txt.innerHTML = t;
	txt.setAttributeNode(fill);
	txt.setAttributeNode(xposition);
	txt.setAttributeNode(yposition);
	txt.setAttributeNode(stroke);
	txt.setAttributeNode(strokeWidth);
	txt.setAttributeNode(style);
}

function edit3(poly) {
	var fill = document.createAttribute("fill");
	var stroke = document.createAttribute("stroke");
	var strokeWidth = document.createAttribute("stroke-width");
	var points = document.createAttribute("points");

	var s = document.getElementById("txt5").value;
	var sw = document.getElementById("txt6").value;
	var color = document.getElementById("txt1").value;

	//polygon
	var point1 = cont.childNodes[0].value;
	var point2 = cont.childNodes[1].value;
	var point3 = cont.childNodes[2].value;
	var point4 = cont.childNodes[3].value;

//polygon
	if(pts == 2) {
		points.value = point1+","+point2+" "+point3+","+point4;
	}

	if(pts == 3) {
		var point5 = cont.childNodes[4].value;
		var point6 = cont.childNodes[5].value;
		points.value = point1+","+point2+" "+point3+","+point4+" "+point5+","+point6;
	}

	if(pts == 4) {
		var point5 = cont.childNodes[4].value;
		var point6 = cont.childNodes[5].value;
		var point7 = cont.childNodes[6].value;
		var point8 = cont.childNodes[7].value;
		points.value = point1+","+point2+" "+point3+","+point4+" "+point5+","+point6+" "+point7+","+point8;
	}

	if(pts == 5) {
		var point5 = cont.childNodes[4].value;
		var point6 = cont.childNodes[5].value;
		var point7 = cont.childNodes[6].value;
		var point8 = cont.childNodes[7].value;
		var point9 = cont.childNodes[8].value;
		var point10 = cont.childNodes[9].value;
		points.value = point1+","+point2+" "+point3+","+point4+" "+point5+","+point6+" "+point7+","+point8+" "+point9+","+point10;
	}


	stroke.value = s;
	strokeWidth.value = sw;
	fill.value = color;

	poly.setAttributeNode(stroke);
	poly.setAttributeNode(strokeWidth);
	poly.setAttributeNode(points);
	poly.setAttributeNode(fill);
}

function edit2(lin) {
	var fill = document.createAttribute("fill");
	var stroke = document.createAttribute("stroke");
	var strokeWidth = document.createAttribute("stroke-width");
	var xposition = document.createAttribute("x1");
	var yposition = document.createAttribute("y1");
	var exposition = document.createAttribute("x2");
	var eyposition = document.createAttribute("y2");

	var xEnd = document.getElementById("txt2").value;
	var xPos = document.getElementById("txt3").value;
	var yPos = document.getElementById("txt4").value;
	var s = document.getElementById("txt5").value;
	var sw = document.getElementById("txt6").value;
	var yEnd = document.getElementById("txt9").value;
	var color = document.getElementById("txt1").value;

	xposition.value = xPos;
	yposition.value = yPos;
	exposition.value = xEnd;
	eyposition.value = yEnd;
	stroke.value = s;
	strokeWidth.value = sw;
	fill.value = color;

	lin.setAttributeNode(xposition);
	lin.setAttributeNode(yposition);
	lin.setAttributeNode(exposition);
	lin.setAttributeNode(eyposition);
	lin.setAttributeNode(stroke);
	lin.setAttributeNode(strokeWidth);
	lin.setAttributeNode(fill);
}

function edit(rect,cir,ellip) {
	color = document.getElementById("txt1").value;
	xr = document.getElementById("txt2").value;
	rad = document.getElementById("txt2").value;
	xPos = document.getElementById("txt3").value;
	yPos = document.getElementById("txt4").value;
	s = document.getElementById("txt5").value;
	sw = document.getElementById("txt6").value;
	w = document.getElementById("txt7").value;
	h = document.getElementById("txt8").value;
	yr = document.getElementById("txt9").value;

	fill = document.createAttribute("fill");
	stroke = document.createAttribute("stroke");
	strokeWidth = document.createAttribute("stroke-width");
	width = document.createAttribute("width");
	height = document.createAttribute("height");
	xradius = document.createAttribute("rx");
	yradius = document.createAttribute("ry");
	xposition = document.createAttribute("x");
	yposition = document.createAttribute("y");
	radius = document.createAttribute("r");
	cxposition = document.createAttribute("cx");
	cyposition = document.createAttribute("cy");

	width.value = w;
	height.value = h;
	fill.value = color;
	xradius.value = xr;
	yradius.value = yr;
	xposition.value = xPos;
	yposition.value = yPos;
	cxposition.value = xPos;
	cyposition.value = yPos;
	stroke.value = s;
	strokeWidth.value = sw;

	rect.setAttributeNode(radius);
	rect.setAttributeNode(width);
	rect.setAttributeNode(height);
	rect.setAttributeNode(xradius);
	rect.setAttributeNode(yradius);
	rect.setAttributeNode(fill);
	rect.setAttributeNode(xposition);
	rect.setAttributeNode(yposition);
	rect.setAttributeNode(cxposition);
	rect.setAttributeNode(cyposition);
	rect.setAttributeNode(stroke);
	rect.setAttributeNode(strokeWidth);
}

function toggleBG() {
		var field = document.getElementById("svg");
	if(bg==false){
		field.style.background = "url('square.png')";
		bg = true;
	}
	else{
		field.style.background = "";
		bg = false;
	}
}
