/* ************************ Numbers ******************* */

const score = 400;
console.log(score);
//another way to declare Number
const anotherScore = new Number(400);
console.log(anotherScore);

console.log(anotherScore.toFixed(2)); //after decimal we want how many digits

//convert to string
console.log(anotherScore.toString()); //now anotherScore is string so you can perform all string operation on anotherScore

console.log(anotherScore.toString().length);
console.log(anotherScore.toString().replace());

/* ************************ Maths ******************* */

console.log(Math);

//abs - Absolute Returns the absolute value of a number the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.abs(-7)); //7

//round - The value to be rounded to the nearest integer.
console.log(Math.round(4.4)); //4
console.log(Math.round(5.8)); //6

//minimum value
console.log(Math.min(5,2,7,4,9,1));//1

//maximum value
console.log(Math.max(5,2,7,4,9,1));//9
console.log("---------------------------");
//random value - generate random values between 0 - 1 
console.log(Math.random());

//generate random values between any range 
console.log((Math.random() * 10) + 1 );  //+ 1 to avoid 0

//floor - return less than or equal to its numeric argument.
console.log(Math.floor(2.3645865734232));    //2