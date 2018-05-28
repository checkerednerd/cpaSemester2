var typeTest = typeof false;
console.log(typeTest);


switch (typeTest) { //
  case 'number': console.log("NUM-DIDDLY!!");
    break;
  case 'string': console.log("STRING-DOODLY!!");
    break;
  case 'boolean': console.log("BOOL-EREENO!!");
    break;
  default:
    console.log("I'm scared for you...");
}

console.log("Suck" + " 5");
console.log("Suck" + 5);
console.log(20 + 5 + "Suck" + 5 + 20); //adds the first two, but not the second two