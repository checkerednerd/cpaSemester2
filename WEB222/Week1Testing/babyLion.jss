var faveAnimal = "baby lion";
var pets = "cat";
var petsOwned = 2;

console.log("My favourite animal is a", faveAnimal);

if (petsOwned == 1) {
  console.log("You own", petsOwned, pets);
} else if (petsOwned > 1) {
  console.log("You own", petsOwned, pets + "s");
} else {
  console.log("Get a fucking pet!");
}