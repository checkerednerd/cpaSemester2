function makeAdder(x) {
  return function(y) { //anonymous function
    return x + y;
  };
}

var add10 = makeAdder(10); //creates an instance of makeAdder that will
//always have the value of x supplied as 10
var add20 = makeAdder(20);

console.log(add10(15)); //supplies a value of 15 to y, the inner function
console.log(makeAdder(40)(23)); //supplies the value of 40 to x in the outer function
//and the value of 23 to the inner function

