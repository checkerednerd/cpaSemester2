/*Calls a function "buildMeUp" that does not return a value
*instead, it takes in a name and console.logs a string
*/
buildMeUp("Buttercup Baby");
console.log("Just to let me down...");
console.log("And mess me around!");

function buildMeUp(name) { //function definition
  console.log("Why do you build me up, " + name);
}

var go = function() { //function expression
  console.log("GO LEAFS GO");
};

go();