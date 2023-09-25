/*  Two types of memory in JS - Stack, Heap
 Stack - Primitive Datatype Declare and define in Stack
 Heap  - Non-Primitive Datatypes Declare in Stack but define in Heap
*/

//Stack
let myName = "Junaid";
let anotherName = myName;
anotherName = "Sheikh";
console.log(myName); //Junaid
console.log(anotherName); //Sheikh
console.log("---------------------------");

//Heap
let userOne = {
  email: "abc@gmail.com",
  password: "12345678",
};
console.log(userOne); //{ email: 'abc@gmail.com', password: '12345678' }

let userTwo = userOne;
userTwo.email = "abc@yahoo.com";
console.log(userOne); //{ email: 'abc@yahoo.com', password: '12345678' }
console.log(userTwo); //{ email: 'abc@yahoo.com', password: '12345678' }
//Both userOne and userTwo point the same reference In Heap that's why the value of both changed.
