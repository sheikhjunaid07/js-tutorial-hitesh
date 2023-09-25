/*The Array object, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
In JS it's not compulsary to store same type of data you can store multiple types of data in single Array like- [1,3, "junaid", true, 56, "indore"]
*/

const array = [11,22,33,44,55,66]
console.log(array); //[11,22,33,44,55,66]

//another way to declare array
const anotherArray = new Array(9,8,7,6,5,4)
console.log(anotherArray);  //[ 9, 8, 7, 6, 5, 4 ]
console.log("----------------------------------");

//Array Methods
array.push(77)
array.push(88)
console.log(array);  //[ 11, 22, 33, 44, 55, 66, 77, 88 ]

array.pop(88)
console.log(array);  //[ 11, 22, 33, 44, 55, 66, 77 ]

array.unshift(0)   //add element in statring of array
console.log(array);  //[ 0, 11, 22, 33, 44, 55, 66, 77 ]

array.shift()    //remove starting element of array
console.log(array);  //[11, 22, 33, 44, 55, 66, 77 ]

//check element present or not
console.log(array.includes(55));    //true
console.log(array.includes(60));    //false

//check index no. by value
console.log(array.indexOf(22));
