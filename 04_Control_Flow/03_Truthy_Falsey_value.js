//In truthy and falsey we assume value must be true or false

const userEmail = "abc@gmail.com"
if (userEmail) {  //we didn't check value true or false  
    console.log("User have access to login");  //User have access to login
} else {
    console.log("Access Denied!!!");
}

//Truthy Values (Inside String all value is truthy value)
// "0", "false", "  ", [], {}, function(){}  <-empty function

//Falsy values
// false, 0, -0, 0n, "", null, undefined, NaN (other than this all value is truthy values)


//Nullish Coalescing Operator (??): null, undefined
let value1, value2;
// value1 = 5 ?? 10
value1 = null ?? 10  //if value = null or undefined JS executes the second value (?? operator is basically used in database response)
value2 = null ?? 10?? 20 //you can write multiple

// console.log(value1);   //5
console.log(value1);   //10

//Terniary operator
//Condition ? true : false