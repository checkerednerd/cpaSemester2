var faveAnimal = "baby lion";
var pets = "cat";
var petsOwned = 3;
var names = [];

console.log("My favourite animal is a", faveAnimal);

if (petsOwned == 1) {
  console.log("You own", petsOwned, pets);
  names[0] = prompt("What is their name?");
} else if (petsOwned > 1) {
  console.log("You own", petsOwned, pets + "s");
  for (var x = 0; x < petsOwned; x++) {
    names[x] = prompt("What is the name of your pet?");
  }
} else {
  console.log("Get a fucking pet!");
}

for (var x in names) { //prints each member of array names
  console.log(names[x]);
}