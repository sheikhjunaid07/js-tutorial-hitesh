let value = "32avf";
let data = 32;

console.log(value);
console.log(typeof(value));
console.log(data);
console.log(typeof(data));
console.log("-------------------------------");

//conversion 
let changedValue = Number(value)
console.log(changedValue);      //output - NaN
console.log(typeof(changedValue));   //output - number
console.log("-------------------------------");

let some = null;
let changedNull = Number(some)
console.log(changedNull);     //output - 0
console.log(typeof(changedNull));   //output - number
console.log("-------------------------------");

let undefinedValue = undefined
let ChangedUndefined = Number(undefinedValue)
console.log(ChangedUndefined);     //output - NaN
console.log(typeof(ChangedUndefined));   //output - number
console.log("-------------------------------");

let bool = true
let ChangedBooleon = Number(bool)
console.log(ChangedBooleon);     //output - 1
console.log(typeof(ChangedBooleon));   //output - number
console.log("-------------------------------");