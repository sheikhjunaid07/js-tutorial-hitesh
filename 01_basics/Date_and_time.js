/* Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
 */

let date = new Date();
console.log(date); //2023-09-25T19:12:04.804Z
console.log(date.toString()); //Mon Sep 25 2023 19:12:04 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); //Mon Sep 25 2023
console.log(date.toISOString()); //2023-09-25T19:12:04.804Z
console.log(date.toLocaleDateString()); //9/25/2023
console.log(date.toLocaleString()); //9/25/2023, 7:12:04 PM
console.log(date.toTimeString()); //19:12:04 GMT+0000 (Coordinated Universal Time)
console.log(date.toUTCString()); //Mon, 25 Sep 2023 19:12:04 GMT
console.log("-------------------------------------------");

//created dates
let myCreateDate = new Date(2023, 1, 25);
console.log(myCreateDate.toLocaleString()); //2/25/2023, 12:00:00 AM

let myCreateDateWithTime = new Date(2023, 1, 25, 7, 15);
console.log(myCreateDateWithTime.toLocaleString()); //2/25/2023, 7:15:00 AM

let CreateAnotherDate = new Date("07-03-2000");
console.log(CreateAnotherDate.toLocaleString()); //07/03/2000, 12:00:00 AM
console.log("-------------------------------------------");

//get seconds, minutes, hours, day, month and year
let dayMonth = new Date();
console.log(dayMonth); //2023-09-25T19:29:56.562Z
console.log(dayMonth.getDate()); //25
console.log(dayMonth.getDay()); //1 (1 is for monday)
console.log(dayMonth.getMonth()); //8
console.log(dayMonth.getFullYear()); //2023
console.log(dayMonth.getHours()); //19
console.log(dayMonth.getMinutes()); //29
console.log(dayMonth.getSeconds()); //56
