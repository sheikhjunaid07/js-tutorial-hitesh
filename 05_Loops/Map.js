const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//add 10 in every digit
const newNumbers = numbers.map((num) => num + 10);
console.log(newNumbers); //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

//Chaining
const chainingNumbers = numbers.map((num) => num * 20)
                                .map((num) => num + 2)
                                .filter((num) => num >= 40);    //[ 42,     62,  82, 102, 122, 142, 162, 182,202]
console.log(chainingNumbers);
