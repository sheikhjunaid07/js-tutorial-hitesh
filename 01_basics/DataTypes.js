"use Strict"; //treat all JS code in Newer version
/*
JavaScript Primitive Datatypes (Call by Value)
String 
Number      range: 2^53
BigInt      for big number
Boolean     true/false
Undefined
Null        standalone value (empty value)
Symbol      for uniqueness
*/

let name = "junaid";
let num = 123;
let isVarified = true;
let outsideTemp = null;
let userMail; //undefined
const id = Symbol("123"); //symbol
const bigNumber = 15640654712564546414; //BigInt

console.log(typeof "junaid"); //string

console.log(typeof num); //Number

console.log(typeof null); //null's type object

console.log(typeof undefined); //undefined

/* JS Non Premitive Data types (call by Reference)
Array
Objects
Functions
 */

//Array
const heroes = ["Iron Man", "Thor", "Hulk"];

//Object
let myObject = {
    name: "junaid",
    age: 23
}

//Function
const myFunction = function(){
    console.log("Hello World");
}