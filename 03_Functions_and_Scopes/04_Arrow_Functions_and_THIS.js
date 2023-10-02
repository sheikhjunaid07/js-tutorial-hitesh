//this keyword  - refers to current contaxt
const user = {
  name: "Junaid",
  office: "Indore",
  welcomeMessege: function () {
    console.log(`Hello ${this.name}, Welcome to the Team!! `);
    //if you print this, you can current context as a output
    console.log(this); //{ name: 'Junaid', office: 'Indore', welcomeMessege: [Function: welcomeMessege] }
  },
};
user.welcomeMessege(); //Hello Junaid, Welcome to the Team!!

//if another member join the team so (basically we change the context so this time 'this' refers to second context)
user.name = "Parvez";
user.office = "Hydrabad";
user.welcomeMessege(); //Hello Parvez, Welcome to the Team!!

console.log(this); // name: 'Parvez', office: 'Hydrabad', welcomeMessege: [Function: welcomeMessege]

//basic Arrow Function
const addNumbers = (num1, num2) => {
  return num1 + num2;
}
console.log(addNumbers(4,6));  //10

//Implicit return 
//(othertype to write arrow function). if your statement have only one line you can write this
const add = (num1, num2) => num1 + num2 
const multiply = (num1, num2) => (num1 * num2)   //bot are same
console.log(add(7,3));   //10
console.log(multiply(7,3));   //21
