function makeMultiplier(orig) {
  return function(newValue){ //dont need to name the function
    return orig * newValue;
  }
}

var multiple5 = makeMultiplier(5);

console.log(multiple5(4)); //function must be called in order to do something
//because our function does not have a console.log, it doesn't print anything on its own