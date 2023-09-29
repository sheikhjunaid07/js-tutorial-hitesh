//other way to create object (singleton object)

const userData = new Object();

userData.name = "Parvez";
userData.age = 26;
userData.email = "parvez@gmail.com";
isLoggedIn = true;

console.log(userData);

//declare object inside an objects
const newUser = {
  name: {
    fullName: {
      firstName: "Raj",
      lastName: "Sharma",
    },
  },
  age: 20,
  email: "abc@gmail.com",
};

//access Data
console.log(newUser.name); //{ name: 'Parvez', age: 26, email: 'parvez@gmail.com' }
console.log(newUser.name.fullName.firstName); //Raj
console.log(newUser.name.fullName.lastName); //Sharma

//merge two objects
const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "c", 4: "d"} 

const obj3 = Object.assign({}, obj1, obj2) //{} are optional they are only verify that the expected output must be an object
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//another way to merge data
const obj4 = {...obj1, ...obj2}
console.log(obj4);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//if you want to print only keys
console.log(Object.keys(obj1));  //[ '1', '2' ]

//if you want to print only values
console.log(Object.values(obj1));  //[ 'a', 'b' ]