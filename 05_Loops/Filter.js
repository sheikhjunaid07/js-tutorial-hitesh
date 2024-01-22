const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = num.filter((item) => {
  return item > 4;
});
console.log(newNum); //[ 5, 6, 7, 8, 9, 10 ]

//another Example
const books = [
  {
    title: "bookOne",
    genre: "History",
    publish: "1998",
    currentEdition: "2012",
  },
  {
    title: "bookTwo",
    genre: "Account",
    publish: "2000",
    currentEdition: "2020",
  },
  {
    title: "bookThree",
    genre: "Fiction",
    publish: "2009",
    currentEdition: "2024",
  },
  {
    title: "bookFour",
    genre: "Science",
    publish: "1995",
    currentEdition: "2012",
  },
  {
    title: "bookFive",
    genre: "History",
    publish: "1998",
    currentEdition: "2012",
  },
  {
    title: "bookSix",
    genre: "Comedy",
    publish: "1997",
    currentEdition: "2010",
  },
  {
    title: "bookSeven",
    genre: "Economics",
    publish: "2004",
    currentEdition: "2021",
  },
  {
    title: "bookEight",
    genre: "History",
    publish: "1991",
    currentEdition: "2023",
  },
];

const newBook = books.filter(
  (bk) => bk.genre == "History" && bk.publish == "1998"
);
console.log(newBook);

console.log("-----------------------------");

const bookPublish = books.filter((bk) => {
  return bk.publish > 2000 && bk.currentEdition > 2012;
});
console.log(bookPublish);
