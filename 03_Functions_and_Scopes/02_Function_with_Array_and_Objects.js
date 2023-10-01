function calculateCartPrice(num1) {
  return num1;
}
console.log(calculateCartPrice(200)); ///200
//if you give more than one value it will give only first value
console.log(calculateCartPrice(200, 300, 400)); //200

// if you want to get all values you will use rest operator or spread operator(...)
function calculateAllPrice(...num2) {
  return num2;
}
console.log(calculateAllPrice(200, 300, 400)); //[ 200, 300, 400 ]

//function with objects
const user = {
  name: "Junaid",
  age: 23,
};

function handleObject(anyObject) {  //you can pass anything as a parameter
  console.log(`My name is ${anyObject.name} and my age is ${anyObject.age}`);
}  //My name is Junaid and my age is 23
handleObject(user);

handleObject({ //you can pass object direcly like this
    name: "Parvez",
    age: 26
}); 

//function with arrays
const newArray = [200,300,400,500]

function returnValues(getArray){
return getArray;       //[ 200, 300, 400, 500 ]
//return getArray[1];  //you can print any specific values with index number  //200
}

console.log(returnValues(newArray));