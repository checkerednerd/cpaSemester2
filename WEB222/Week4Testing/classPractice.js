//creates an object using LITERAL notation

var fighter = {
  job: 'Fighter',
  str: 9,
  def: 6,
  int: 4,
  hp: 100,
  mp: 25,
  statCheck: function() {
    console.log(this.job + '\nHP: ' + this.hp + '\nMP: ' + this.mp);
    if (this.hp <= 0) {
        console.log(this.job + " has been defeated.");
        }
  }
};
console.log(fighter['job']); //call an object property with BRACKET notation

console.log(fighter.statCheck); // returns function definition

fighter.statCheck();
fighter.hp -= 20; //call an object property with DOT notation
fighter.statCheck(); //modified the original values
fighter.hp -= 80;
fighter.statCheck();

//using literal notation lets use use the global function Object.create()
//create an object thief that is a copy of fighter (including its current hp)
var thief = Object.create(fighter);
thief.job = "Thief";
thief.hp = "80";
thief.statCheck();