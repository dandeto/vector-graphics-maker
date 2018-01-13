function cleanup() {
	svg.removeAttribute("style");//remove unnecessary attributes
	svg.removeAttribute("id");
	svg.removeAttribute("class");
	var svgElem = document.querySelectorAll(".svgElem");
	eraseScript();
}

function fix() {
	svg.setAttribute("id", "svg");
	svg.setAttribute("class", "svg");
}

document.getElementById("link").onclick = function(code) {
	cleanup();
	sfx[4].play();
    var svgContainerHtml = document.getElementById("svgContainer").innerHTML;
    this.href = 'data:image/svg;charset=utf-8,'
    + encodeURIComponent(svgContainerHtml);
    wipe();
    fix();
    setTimeout(function() {
    	restore();
    }, 1050);
};
