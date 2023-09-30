function printName() {
  //function definition
  console.log("J");
  console.log("U");
  console.log("N");
  console.log("A");
  console.log("I");
  console.log("D");
}
//printName is only reference of the function if you want to execute you should add '()' after the function
printName();

//add two numbers  (without return function don't return any value function only print on console)
function mathOperation(num1, num2) {
  console.log(num1 + num2); //13
  console.log(num1 - num2); //7
  console.log(num1 * num2); //30
  console.log(num1 / num2); //3.33333333
  console.log(num1 % num2); //1
}
mathOperation(10, 3);
mathOperation(); //if you not pass any arguement the will give you NaN

//Function with return type
function addNumber(num1, num2) {
  //let result = num1 + num2;
  return num1 + num2;
}
const ans = addNumber(2, 4);
console.log("Result: ", ans); //"Result: 6"

//check user loggedin or not
function userLoggedIn(username) {
  if (!username) {
    console.log("Plese enter a username!!");
    return;
  }
  return `${username} just logged in.`;
}
console.log(userLoggedIn("Junaid"));
console.log(userLoggedIn()); //if you don't dive any value function return undefined
