function program(prog) { 
  var school = "ICT";
  
  function student(name) {
    return "Student name: " + name + ", Program: " + prog + ", School of " + school; 
  }
  return student;
}
var bsd_student = program("BSD"); // returns the inner function with an initial value 
var cpa_student = program("CPA");
var john = bsd_student("John Smith");
var dave = cpa_student("Dave Lee");
var dave2 = program("CPD")("Jr. Dave Lee"); //the only time program() is called after
// making bsd_student and cpa_student is made: with TWO arguments (one per function)

console.log(john); 
console.log(dave); 
console.log(dave2);

//closures are useful because they can associate some data (properties) to the object
//with one or more methods
//also useful because lets you scope variables, making inner function and members
//private, like Encapsulation in OOP

function outsider(pkmnName) {    
  var weaknesses = ("The weaknesses of " + pkmnName + "... ");
  
  return function(type) { //wouldn't work until i made this return function(type) instead of a named function
    switch (type) {
      case 'water': return weaknesses + type + " is weak to electric, grass";
        break;
      case 'fire': return weaknesses + type + " is weak to water, ground";
        break;
      case 'grass': return weaknesses + type + " is weak to fire, flying";
        break;
      case 'electric': return weaknesses + type + " is weak to ground, rock";
        break;
      default: return "Try again...";
        break;
    }
  }; //returns the string with the argument Pokemon name 
}

console.log(outsider("Pikachu")("electric")); //wouldn't work until I changed the above