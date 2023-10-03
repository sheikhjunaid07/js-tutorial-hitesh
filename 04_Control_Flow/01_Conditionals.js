// <, >, <=, >=, ==, !=, ===, !==

//if-else
const temperature = 20;
if (temperature <= 25) {
  console.log("Winter season!!"); //Winter season!!
} else {
  console.log("Summer season!!");
}

//short hand notation (if your code have only one line you can write in oneline)
const balance = 100;
if (balance < 500) console.log("please add balance"); //please add balance

//else if  (you can add multiple else if according to your requirement)
const price = 1000;
if (price < 500) {
  console.log("price greater than 500");
} else if (price < 700) {
  console.log("price greater than 700");
} else {
  console.log("Price matched"); //Price matched
}

//if-else with && and ||
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
} else {
  console.log("Please Enter Credencials");
}

const knowJS = true;
const knowJava = false;
const knowDatabase = true;

if (knowJS || knowJava || knowDatabase) {
  console.log("Ready for IT Industry"); //Ready for IT Industry
} else {
  console.log("First Learn any programming language!!");
}
