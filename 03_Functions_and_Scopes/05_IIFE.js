// Immediately Invoked Function Expressions (IIFE)

//Normal function
function one() {
  console.log("Normal Function!!");
}
one(); //Normal Function!!

//if you made your function IIFE you can simply bound your function inside parenthesis
(function two() {
  console.log("IIFE Function");
})(); //always add ";" after function end than start writing another function
//First () for function Definition and second () for execution

// IIFE with Arrow Function
(() => {
  console.log("IIFE with Arrow Function!!");
})(); //IIFE with Arrow Function!!

// with parameter
((name) => {
  console.log(`Hey! ${name}`);
})("Junaid"); //Hey! Junaid
