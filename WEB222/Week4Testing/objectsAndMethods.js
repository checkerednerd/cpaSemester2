console.log(new Date(1654, 5, 5));
var thisMonth = (new Date().getMonth());
var months = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[thisMonth]);
console.log(new Date().getMonth()); //need the 'new' keyword for this to work

// alert("Suck it, Brent!"); //opens a popup window
// alert(Date());

console.log("Testing Math Random and Floor");
for (var i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1); 
}