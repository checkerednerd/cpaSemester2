var pH = prompt("Party Hard?","Y/N");
console.log(pH);
console.log(typeof(pH));
if (pH === 'Y' || 'y') {   //required === in order to properly evaluate
  for (var i = 0; i < 100; i++) {
    console.log("PARTY HARD");
  }
} else if (pH === 'N' || 'n') {
  for (var i = 0; i < 100; i++) {
    console.log("party soft");
  }
} else {
    console.log("huh?");
}