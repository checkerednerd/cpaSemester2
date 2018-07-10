var outerArray = ["Ippo", "Luffy", "Saitama", "Deku", "Chad", "Rock Lee"];

var innerArray = ["Boxer", "Pirate", "Hero", "Hero", "Student", "Ninja"];

window.onload = function () {
    var outerList = document.createElement('ol'); //create ordered list element
    document.getElementById("testlist").appendChild(outerList); //append the outer list item to div testlist

    for (var i = 0; i < outerArray.length; i++) {
        var outerListItem = document.createElement('li'); //create a new list item
        var outerItem = document.createTextNode(outerArray[i]); //create new text node with the array item
        outerListItem.appendChild(outerItem); //append text node from array to list item
        outerList.appendChild(outerListItem); //append the list item (now containing the array item) to the list

        //create an inner list and populate it with the second array
        var innerList = document.createElement('ul'); //create a new unordered list
        outerListItem.appendChild(innerList); //append the inner list to the outer list
        var innerListItem = document.createElement('li'); //create a new list item
        var innerItem = document.createTextNode(innerArray[i]); //create a new text node containing the inner array item
        
        innerListItem.appendChild(innerItem); //append the text node to the list item
        innerList.appendChild(innerListItem); //append the list item to the inner list
    }

    //append date of page accessed to footer
    document.getElementById("footy").appendChild(document.createTextNode("Copyright RJ Vincent 2018"));
    var footyDate = document.createTextNode(", accessed at " + new Date().getHours() + ":" + new Date().getMinutes());
    document.getElementById("footy").appendChild(footyDate);
}