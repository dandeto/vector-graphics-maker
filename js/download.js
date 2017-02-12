document.getElementById("link").onclick = function(code) {
	document.getElementById("svg").removeAttribute("style"); //remove unused attributes.
    var svgContainer = document.getElementById("svgContainer").innerHTML;
    this.href = 'data:text/plain;charset=utf-8,'
    + encodeURIComponent(svgContainer);
};
