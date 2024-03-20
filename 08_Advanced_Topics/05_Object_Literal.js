//Object Literal

const user = {
  name: "junaid",
  age: 24,
  isLoggedIn: true,

  getUserDetails: function () {
    // console.log("inside getUserDetails function");
    // console.log(name); is not execute we need this keyword to point the targeted value
    console.log(`name is : ${this.name}`);
  },
};

console.log(user.name);
console.log(user.getUserDetails());
