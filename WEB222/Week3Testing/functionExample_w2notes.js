var display = "";     // Global variable 
ident_A = 5;       // Global variable - bad practice

function someFunction() {   // Start of function
  var ident_B = 15;      // Local  variable 
  ident_C = 34;        // Global variable - bad practice
  var ident_A = 0; 
  ident_C++; 
  ident_A = ident_B + ident_C;
  console.log(ident_A);  // show the value of ident_A inside the function
}

someFunction();
console.log(ident_A);
console.log(ident_C);
console.log(ident_B); //will not run, as ident_B is local to someFunction()
