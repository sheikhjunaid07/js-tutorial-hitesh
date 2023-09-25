//comparison in same datatype
console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 < 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true
console.log("-----------------------------------");

//comparison with another datatype
console.log("2" > 1); //true
console.log("02" > 1); //true
console.log("-----------------------------------");
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true  (JS sometime change null to 0 and sometime change to NaN)
console.log("-----------------------------------");
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false

console.log("-----------------------------------");
//Strict Check "==="
console.log("2" === 2); //false
console.log("2" === "2"); //true
