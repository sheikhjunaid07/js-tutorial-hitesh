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
console.log(array.indexOf(33));  //2

//Adds all the elements of an array into a string
const newArray = array.join()
console.log(array);     //[11, 22, 33, 44, 55, 66, 77 ]
console.log(newArray);  //11,22,33,44,55,66,77
console.log(typeof(newArray));  //string

//slice (slice don't change in original array)
const arr1 = array.slice(0, 2)  //don't include 2nd range 
console.log(arr1);     //[ 11, 22 ]
console.log(array);    //[11, 22, 33, 44, 55, 66, 77 ]
//splice (slice change in original array)
const arr2 = array.splice(0, 3)  //include second range
console.log(arr2);    //[ 11, 22, 33 ]
console.log(array);   //[ 44, 55, 66, 77 ]