function cleanup() {
	svg.removeAttribute("style");//remove unnecessary attributes
	svg.removeAttribute("id");
	svg.removeAttribute("class");
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
    this.href = 'data:text/plain;charset=utf-8,'
    + encodeURIComponent(svgContainerHtml);
    wipe();
    fix();
    setTimeout(function() {
    	restore();
    }, 1050);
};
