document.getElementById('link').onclick = function(code) { //rudimentary saving
    var svgContainer = document.getElementById("svgContainer").innerHTML;
    this.href = 'data:text/plain;charset=utf-8,'
    + encodeURIComponent(svgContainer);
};
