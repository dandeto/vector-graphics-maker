document.getElementById('link').onclick = function(code) { //Could be better
    var svgContainer = document.getElementById("svgContainer").innerHTML;
    this.href = 'data:text/plain;charset=utf-8,'
    + encodeURIComponent(svgContainer);
};
