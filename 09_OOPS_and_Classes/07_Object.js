//Everything is Object in JavaScript

//if you want you can use function as a Object
function multiply(num) {
  return num * 5;
}

multiply.power = 2;

console.log(multiply(5)); //25
console.log(multiply.power); //2
console.log(multiply.prototype); //{} <- prototype

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  score++; //increment score
};

//print the values
createUser.prototype.printValues = function () {
  console.log(`Username is: ${this.username} and score is: ${this.score}`);
};

//we know that if we don't use new keyword they just overwrite the values so we use new keyword
const data = new createUser("junaid", 100);
const otherData = new createUser("sheikh", 200);

data.printValues(); //call the function
otherData.printValues();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
