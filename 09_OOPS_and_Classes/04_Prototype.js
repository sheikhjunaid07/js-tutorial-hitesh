let myHero = ["Thor", "Captain"];

let heroPower = {
  Thor: "Hammer",
  Captain: "Shield",

  getCaptainPower: function () {
    console.log(`Captain power is ${this.Captain}`);
  },
};

//we can't access the junaid() because junaid is not available for hero power.
//{ heroPower.junaid() }
//so we create the junaid() in directy Object so all the function, arrays and string access the junaid()
Object.prototype.junaid = function () {
  console.log("Now Junaid is accessible in all.");
};

heroPower.junaid(); //output: Now Junaid is accessible in all.

myHero.junaid(); // output: Now Junaid is accessible in all. (myHero is also access the junaid() because we declare junaid() in parent )

Array.prototype.sheikh = function () {
  console.log("Only array is access sheikh()");
};

//myHero is easily access the sheikh() because we declare sheikh() in array(child)
myHero.sheikh(); //output: Only array is access sheikh()

//but heroPower is not access the sheikh() because heroPower is a Object (parent)
//heroPower.sheikh();
