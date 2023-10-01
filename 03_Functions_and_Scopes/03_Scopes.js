//Global scope
let num1 = 10
var num2 = 20
const num3 = 30

console.log(num1);
console.log(num2);
console.log(num3);

if (true) {  //block scope
    let num4 = 10
    const num5 = 20
    var num6 = 30
    console.log(num4, num5, num6);
}
//console.log(num4);  //num4 is not defined (scope problem)
//console.log(num5);  //num5 is not defined (scope problem)
console.log(num6);  //30

//Nested scope
function one(){
    const name = "Junaid";
    function two(){
        const website = "youtube";
        console.log(name);  //Junaid
    }
    //console.log(website); //website is not defined error because its out of the scope
    two();  
}
one();
