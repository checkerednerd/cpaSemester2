window.onload = function () {
    //append date of page accessed to footer
    document.getElementById("footy").appendChild(document.createTextNode("Copyright RJ Vincent 2018"));
    var footyDate = document.createTextNode(", accessed at " + new Date().getHours() + ":" + new Date().getMinutes());
    document.getElementById("footy").appendChild(footyDate);
}