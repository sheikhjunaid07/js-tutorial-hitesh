// object literal

const mySymbol = Symbol(); //symbol datatype

const userDetails = {
  name: "Junaid",
  age: 23,
  [mySymbol]: "key1", //use symbol datatype in object
  location: "Indore",
  email: "junaid@gmail.com",
  isLoggedIn: true,
};
console.log(userDetails);
//access data
console.log(userDetails.name); //Junaid
//another way to access data
console.log(userDetails["name"]); //Junaid

//freeze method - if you use freeze method you can't change the properties of object
Object.freeze(userDetails);
userDetails.age = 26;
console.log(userDetails); //if you check the output age is still 23
