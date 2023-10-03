//for

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 7) {
    console.log(`${i} is my lucky number`);
  }
}

//with array
const month = ["January", "Fabruary", "March", "April", "May"];
console.log(month.length); //5
for (let i = 0; i < month.length; i++) {
  console.log(month[i]);
}

//break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 7) {
    console.log("Detected 7");
    break;
  }
  console.log(`value of i is: ${i}`);
}
console.log("-----------------");

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of i is: ${i}`);
}
