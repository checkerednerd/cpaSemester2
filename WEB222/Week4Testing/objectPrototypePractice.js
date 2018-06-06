//because we used a function constructor, we have access to a public "prototype" property
//add a member function to Number objects that just double the number object that called it
Number.prototype.doubleIt = function() {
  var doubler = this * 2;
  return doubler;
};

Number.prototype.tripleIt = function() {
  var tripler = this * 3;
  return tripler;
};


var theAnswer = 42;
console.log(theAnswer.doubleIt());
console.log(theAnswer.tripleIt());