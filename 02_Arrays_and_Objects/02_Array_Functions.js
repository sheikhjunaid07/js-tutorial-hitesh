const marvel_heros = ["Thor", "Hulk", "Ironman"]
const dc_heros = ["Superman", "Flash", "Batman"]
console.log(marvel_heros);  //[ 'Thor', 'Hulk', 'Ironman' ]

//add can add any type of data in an array
marvel_heros.push(dc_heros)
console.log(marvel_heros);  //[ 'Thor', 'Hulk', 'Ironman', [ 'Superman', 'Flash', 'Batman' ] ]

//to access data
console.log(marvel_heros[3][1]);   //Flash

//another way to access data
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros); //[ 'Thor', 'Hulk', 'Ironman', 'Superman', 'Flash', 'Batman' ]
console.log("---------------------------------");

//new way to access data using spread operator(...)
const new_team = [...marvel_heros, ...dc_heros]
console.log(new_team);  //[ 'Thor', 'Hulk', 'Ironman', 'Superman', 'Flash', 'Batman' ]
  
//flat method  - The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 1]]]
const realAnotherArray = anotherArray.flat(Infinity) //here you can specify the depth of array
console.log(realAnotherArray); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 3, 1 ]

//check value is present in an array or not
console.log(Array.isArray("Junaid"));  //false
console.log(Array.from("Junaid"));  //[ 'J', 'u', 'n', 'a', 'i', 'd' ]
console.log(Array.from({name :"Junaid"}));  //[]  

//create array from values
const a = 100;
const b = 200;
const c = 300;
console.log(Array.of(a,b,c)); //[ 100, 200, 300 ]


