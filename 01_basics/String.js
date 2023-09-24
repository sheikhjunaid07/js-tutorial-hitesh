const name = "Junaid"
const age = 23

//Another way to declare String
const otherName = new String("Sheikh-Junaid")
console.log(otherName);
  
//old way to concatinate
console.log(name + age);

//new or best way
console.log(`My name is ${name} and my age is ${age}`);

//String Operations
console.log(`My name is ${name.toUpperCase()} and my age is ${age}`);
console.log(otherName[0]);             //S
console.log(otherName.length);         //13
console.log(otherName.indexOf("J"));    //7
console.log(otherName.charAt(8));       //u
console.log(otherName.toUpperCase());   //SHEIKH JUNAID
console.log(otherName.substring(0, 5)); //Shei
console.log(otherName.slice(3, 9));     //ikh-Ju

const newString = "       Junaid       "
console.log(newString);
console.log(newString.trim());     //trim remove all the extra spaces

const newOne = "Ram Kapoor"
console.log(newOne.replace("Ram","Rishi"));  //Rishi Kapoor