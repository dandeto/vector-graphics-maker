var x, y; //global vars
var menu = document.getElementById("context-menu");
var item = document.querySelectorAll(".menu-item");
var self;
var texts, circles, rectangles, ellipses, lines, polygons;

//prevent default right click behaviors
var mouse_input = function (evt) { 
    evt.preventDefault();
}
document.addEventListener('contextmenu', mouse_input, false); //reference the mouse_input object and make contextmenu false for every event.

item[0].addEventListener("click", dostuff); //onclick for edit
item[1].addEventListener("click", move_to_top); //onclick for edit
document.body.addEventListener("click", menuOff);


window.onload = function() { //anonymous function that adds an event listener to every single svg shape
    update();
};

function addListeners() {
            for (var i = 0; i < texts.length; i++) {
            texts[i].addEventListener("contextmenu", function(event) {
                x = event.clientX;
                y = event.clientY;
                captureVars.call(this);
            });
        };

        for (var i = 0; i < circles.length; i++) {
            circles[i].addEventListener("contextmenu", function(event) {
                x = event.clientX;
                y = event.clientY;
                captureVars.call(this);
            });
        };

        for (var i = 0; i < rectangles.length; i++) {
            rectangles[i].addEventListener("contextmenu", function(event) {
                x = event.clientX;
                y = event.clientY;
                captureVars.call(this);
            });
        };

        for (var i = 0; i < ellipses.length; i++) {
            ellipses[i].addEventListener("contextmenu", function(event) {
                x = event.clientX;
                y = event.clientY;
                captureVars.call(this);
            });
        };

        for (var i = 0; i < lines.length; i++) {
            lines[i].addEventListener("contextmenu", function(event) {
                x = event.clientX;
                y = event.clientY;
                captureVars.call(this);
            });
        };

        for (var i = 0; i < polygons.length; i++) {
            polygons[i].addEventListener("contextmenu", function(event) {
                x = event.clientX;
                y = event.clientY;
                captureVars.call(this);
            });
        };
}

function captureVars() {
    self = this;// use THIS not EVENT!!!
    menuOn();
}

//style context menu
function menuOn() {
	menu.style.top = y;
	menu.style.left = x;
	menu.style.display = "block";
}

function menuOff() {
	menu.style.display = "none";
}

window.onkeyup = function(e) { //menuOff() when esc is hit
    if ( e.keyCode === 27 ) {
        menuOff();
    }
}

function dostuff() {
    if(self == "[object SVGTextElement]") {
        edit4(self);
    }
    if(self == "[object SVGCircleElement]") {
        edit(self);
    }
    if(self == "[object SVGEllipseElement]") {
        edit(self);
    }
    if(self == "[object SVGRectElement]") {
        edit(self);
    }
    if(self == "[object SVGLineElement]") {
        edit2(self);
    }
    if(self == "[object SVGPolygonElement]") {
        edit3(self);
    }
}

function move_to_top() {
    svg.appendChild(self);
}
