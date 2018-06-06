//object: self-contained entity:
//has properties properties(variables) and methods (functions)
//properties : STATE (syntax: propertyName)
//methods : BEHAVIOUR (syntax: behaviourName()  note the brackets)

//built-in: String, Array, Date, Math, RegEx
//host: supplied by browser environment (window, document)
//custom: user-defined

//String Objects - methods
var name = "Ronald Vincent";
console.log(name.length); //length is a property of STRING object

console.log(name.indexOf('d')); //output index of the value supplied
console.log(name.lastIndexOf('n')) //last index of value
console.log(name.charAt(3)); //character at index 3 (which is actually index 4)

console.log(name.split('n')); //remember that split will remove the delimeter
var noN = name.split('n');

for (var i = 0; i < 4; i++) {
  console.log(noN[i]);
}

console.log(name.substr(2, 4)); //returned nald
