var legend = [ 
    {letter: "a", value: 8.4966},
    {letter: "b", value: 2.0720},
    {letter: "c", value: 4.5388},
    {letter: "d", value: 3.3844},
    {letter: "e", value: 11.1607},
    {letter: "f", value: 1.8121},
    {letter: "g", value: 2.4705},
    {letter: "h", value: 3.0034},
    {letter: "i", value: 7.5448},
    {letter: "j", value: 0.1965},
    {letter: "k", value: 1.1016},
    {letter: "l", value: 5.4893},
    {letter: "m", value: 3.0129},
    {letter: "n", value: 6.6544},
    {letter: "o", value: 7.1635},
    {letter: "p", value: 3.1671},
    {letter: "q", value: 0.1962},
    {letter: "r", value: 7.5809},
    {letter: "s", value: 5.7351},
    {letter: "t", value: 6.9509},
    {letter: "u", value: 3.6308},
    {letter: "v", value: 1.0074},
    {letter: "w", value: 1.2899},
    {letter: "x", value: 0.2902},
    {letter: "y", value: 1.7779},
    {letter: "z", value: 0.2722}
];

window.onload = function() {
    console.log("Developed for Ali Feeney");
}

function translator() {
    var getword = "";
    var result = 0;

    getword = prompt("Enter a word to translate", "Note: spaces have no value");
    console.log(getword);

    for (var i = 0; i < getword.length; i++) {
        var currentletter = getword.charAt(i).toLowerCase();
        console.log(currentletter);
        for (var x = 0; x < legend.length; x++) {
            if (currentletter == legend[x].letter) {
                console.log(legend[x].value);
                result += legend[x].value;
            }
        }
    }
    updatetext(result);
}

function updatetext(parResult) {
    var getpar1 = document.querySelector("#result1");
    getpar1.innerHTML = "";
    var addText = document.createTextNode("Result: " + parResult);
    getpar1.appendChild(addText);

    var getpar2 = document.querySelector("#result2");
    getpar2.innerHTML = "";
    var addTextTrim = document.createTextNode("Result (to 4 decimals): " + parResult.toFixed(4));
    getpar2.appendChild(addTextTrim);
}