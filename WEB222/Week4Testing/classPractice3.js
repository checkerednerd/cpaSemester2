//a function that creates objects with a FUNCTION CONSTRUCTOR, add members with prototype

function fighter(name, weapon, shield) {
  this.name = name;
  this.weapon = weapon;
  this.shield = shield;
  this.accessory = "Bunny Bracelet";
  this.hp = 100;
  this.mp = 25;
  
  this.heal = function() { //declare a function in a FUNCTION CONSTRUCTOR
    if (this.hp < 100) {
      this.hp = 100;
      console.log(this.name + " has been healed to full health.");
    } else {
      console.log(this.name + " already has full health.");
    }
  };
};

//create an object of the fighter class
var warrior = new fighter("Warrior", "Broadsword", "Arm Guard");
var thief = new fighter("Thief", "Dagger", "Cloak");

//use prototype to add gearCheck function to fighter class
fighter.prototype.gearCheck = function() {
  console.log("Class: " + this.name + "\nWeapon: " + this.weapon + "\nShield: " + this.shield + "\nAccessory: " + this.accessory);
}

console.log(warrior);
console.log(thief);

warrior.gearCheck();
thief.gearCheck();

var thiefLife;
//iterate through the data members of thief and store it in a new string
for (var i in thief) {
  thiefLife += (thief[i]);
}

var thiefCopy = Object.create(thief);
console.log("The copied thief's weapon is a " + thiefCopy.weapon);

thief.hp -= 30;
console.log("After taking damage, the theif's HP is " + thief.hp);
thief.heal();
thief.heal();