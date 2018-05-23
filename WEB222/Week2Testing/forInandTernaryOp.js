var age = parseInt(prompt("How old are you?"));
var oldFuck = (age > 65) ? true : false;
console.log(oldFuck);


var statsP1 = { name: "RJ Vincent", type: "Water/Fighting", hp: 200 }; //curly braces mean a key-value array
for (var x in statsP1) { //prints the contents of the statsP1 array
  console.log(statsP1[x]);
}
console.log(statsP1); //outputs the object array details
//outputs a line of string with referencing the keys in the array
console.log("Player " + statsP1["name"] + " is a " + statsP1["type"] + " type with " + statsP1["hp"] + "HP");


var simpleArray = [40, 50, 60, 100];
for (var y in simpleArray) {
  console.log(simpleArray[y]);
}

//function without return
suckIt("Gil");

function suckIt(sucker) {
  console.log ("Suck it, " + sucker + "!");
}


var fuckOff = function(fucker) {
  console.log ("Fuck off, " + fucker + "!");
};
//function expression is assigning a nameless function to a variable, so like all
//variable declarations, it requires a semicolon to finish
fuckOff("Steve");


//arguments is a default parameter for all the parameters supplied
function addEmUp() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) { 
    sum += arguments[i];
  }
  return sum;
}
console.log("Add em up to get: " + addEmUp(20, 10, 30, 40));

//run a function in place after function expression
var funcyJunc = function() {
  var a = 4, b = 8;
  console.log(a+b);
} (); //the () parentheses after the function expression ran it right away

