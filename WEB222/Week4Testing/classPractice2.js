//creates an empty object, then populate it with members afterward

var equipment = {};
console.log(equipment); //display empty object

//dynamically add members to the equipment object
equipment.weapon = "One-Handed Sword";
equipment.shield = "Buckler";

console.log(equipment); //display newly populated object
equipment.weapon = "Longsword"; //change value of weapon member
console.log(equipment); //display newly changed member value

//add and delete object member
equipment.accessory = "Bunny Bracelet";
console.log(equipment);
delete equipment.accessory;
console.log(equipment);

