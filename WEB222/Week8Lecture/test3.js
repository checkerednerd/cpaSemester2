window.onload = function () {
    //append date of page accessed to footer
    document.getElementById("footy").appendChild(document.createTextNode("Copyright RJ Vincent 2018"));
    var footyDate = document.createTextNode(", accessed at " + new Date().getHours() + ":" + new Date().getMinutes());
    document.getElementById("footy").appendChild(footyDate);
}

function highlighter() {
    //find the elements to alter
    var orangeFind = document.querySelectorAll(".turnorange");
    var purpleFind = document.querySelectorAll(".turnpurple");
    var greyFind = document.querySelectorAll(".turngrey");
    // alter the elements
    for (var i = 0; i < orangeFind.length; i++) {
        orangeFind[i].style.backgroundColor = "orange";
    }
    for (var i = 0; i < purpleFind.length; i++) {
        purpleFind[i].style.backgroundColor = "purple";
    }
    for (var i = 0; i < greyFind.length; i++) {
        greyFind[i].style.backgroundColor = "gray";
    }
}

function ditchTop() {
    //select the node to remove
    var node = document.querySelector(".midtext"); //grabs first instance of midtext class

    if (node) { //if a result for node was found
        node.parentNode.removeChild(node); //remove the node from its parent's DOM tree
    }
}

function ditchBot() {
    var node = document.querySelectorAll(".midtext"); //find all elements of class midtext
    var lastNode = node[node.length - 1]; //take the last element in that class
    
    if (lastNode) { //if the element exists
        lastNode.parentNode.removeChild(lastNode); //remove the last element from its parent's DOM tree
    }
}