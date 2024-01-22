const myNums = [1, 2, 3, 4, 5, 6];

//using simple function   (acc = accumulator, currval = currentValue)
const total = myNums.reduce(function (acc, currval) {
  //console.log(`acc: ${acc} currval: ${currval}`); //to check acc and currval
  return acc + currval;
}, 0); //initial value = 0
console.log(total);

//using arrow function
const newTotal = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(newTotal);

//another example
const shoppingCart = [
  {
    name: "Mobile",
    price: 21999,
  },
  {
    name: "Hoodie",
    price: 999,
  },
  {
    name: "Mobile Case",
    price: 249,
  },
  {
    name: "Blanket",
    price: 1999,
  },
];

const itemTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(itemTotal);
