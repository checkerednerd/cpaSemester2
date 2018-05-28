var addUp = (function adder(a = 34, b = 5) {
  return(a + b);
})(); //runs in place
console.log("Function called in place: " + addUp);

function candyCoating(x, y) {
  var sum = x+y;
  var average = sum / 2;
  
  // CLOSURE - that's all it is
  function chocolateCentre(u, v) { //The nested function is called a CLOSURE
    var theUltimate = u + v + sum + average;
    /*
    * notice we can call sum and average (outer function variables) from the inner
    * function. This makes sense, as the more nested a function gets, the lower-level
    * it typically is. This gives it access to more resources inherited from outer
    * functions, but for security purposes, prevents outer functions from getting
    * access to the most private variables - SCOPE FOR SECURITY
    */
    return theUltimate;
  }
  /*return theUltimate;
  * this returns an error, as the rules of 
  * scoping means that theUltimate is local only to the chocolateCentre
  * function, so the outer function candyCoating cannot access it unless
  * it calls the function and uses the returned value
  */
  console.log("Average(Outer Function): " + average + "\nTheUltimate(Inner Function): " + chocolateCentre(sum, average));
}

candyCoating(10, 5); //supplies two arguments to be used as parameters for x and y
/*
* similarly, scoping rules mean that in the global space, we cannot
* access the variables sum or average, as they are local to the candyCoating
* function, so the outer function (the window object) cannot access them unless
* we call the function and use the returned value
*/

//a quick function to run in place: Immiediately-Invoked Function Expressions
(function testIIFE() {
  var paper = 20;
  var rock = 10;
  
  if (rock > paper) {
    console.log("Rock wins!");
  }
  else {
    console.log("Paper wins!");
  }
})();