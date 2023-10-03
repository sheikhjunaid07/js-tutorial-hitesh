//while loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//while loop with array
let heros = ["Hulk", "Thor", "Ironman", "Captain America"];
let arr = 0;
while (arr < heros.length) {
  console.log(heros[arr]);
  arr++;
}

//do-while
let price = 100;

do {
  console.log(`price of item is ${price}`);
  price = price + 100;
} while (price <= 1000);
