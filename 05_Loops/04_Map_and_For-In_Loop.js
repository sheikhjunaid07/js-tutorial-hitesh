//Maps - Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map();
map.set("IN", "India");
map.set("IN", "India"); //Maps accept only unique values that's why India will print only one time
map.set("USA", "United States of America");
map.set("UN", "United Nations");

console.log(map); /* Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'UN' => 'United Nations' } */

//print using for of loop
for (const key of map) {
  console.log(key);
}

//you can also print saperate keys and values
for (const [key, value] of map) {
  console.log(key, "-->", value); /*
            IN --> India
            USA --> United States of America
            UN --> United Nations */
}

{
  /** you can't iterate map using for in loop because map is not iteratable */
}

// **************** for in loop ***********

const languages = {
  JS: "JavaScript",
  C: "C Langauge",
  ROR: "Ruby on Rails",
  CPP: "C++ Language",
};

//print only keys
for (const key in languages) {
  console.log(key); //JS C ROR CPP
}

//print only values
for (const key in languages) {
  console.log(languages[key]); //JavaScript C Langauge Ruby on Rails C++ Language
}

//print both keys and values
for (const key in languages) {
  console.log(`${key} shortcut is for ${languages[key]}`);
} // JS shortcut is for JavaScript
// C shortcut is for C Langauge
// ROR shortcut is for Ruby on Rails
// CPP shortcut is for C++ Language
