//ForEach - forEach accept a callback function as a parameter. because it's a callback function that's why function have no name

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

//with normal function
week.forEach(function (item) {
  console.log(item);
});

//with arrow function
week.forEach((day) => console.log(day));

//you can pass multiple values as a parameter
week.forEach((item, index, array) => console.log(item, index, array));

// foreach with Object
const extensions = [
  {
    languageName: "JavaScript",
    extension: ".js",
  },
  {
    languageName: "Java",
    extension: ".java",
  },
  {
    languageName: "C Language",
    extension: ".c",
  },
  {
    languageName: "C++ Language",
    extension: ".cpp",
  },
];

extensions.forEach((file) => {
  console.log(file.languageName);
  // console.log(file.extension);
});

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const forNum = []; //empty array for store numbers
num.forEach((item) => {
  if (item > 4) {
    forNum.push(item);
  }
});

console.log(forNum); //[ 5, 6, 7, 8, 9, 10 ]
