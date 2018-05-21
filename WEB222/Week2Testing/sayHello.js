function sayHello(name){
  return {
    prefixHello: function(){
      console.log("Hello, " + name);
    },
    suffixHello: function(){
      console.log(name + ", hello");
    }
  }
}

var hiRon = sayHello("Ron");
hiRon.prefixHello();
hiRon.suffixHello();